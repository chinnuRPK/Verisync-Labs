// main.js

// Initialize the WASM Module
async function initWasm() {
    await wasm_bindgen('./pkg/pkg/zk_wasm_bg.wasm');
}

// Registration Flow
const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
    registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Hash the password using WASM function
        const passwordHash = wasm_bindgen.get_pass_hash(password);

        // Simulate backend storage using localStorage
        const users = JSON.parse(localStorage.getItem('users')) || {};
        users[username] = passwordHash;
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful');
        window.location.href = 'login.html';
    });
}

// Login Flow
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve stored hash
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const storedHash = users[username];

        if (!storedHash) {
            alert('User not found');
            return;
        }

        // Generate and verify ZK proof
        const proof = wasm_bindgen.generate_proof(username, password);
        const isVerified = wasm_bindgen.verify_proof(proof, storedHash);

        if (isVerified) {
            alert('Login successful');
        } else {
            alert('Login failed: Invalid credentials');
        }
    });
}

// Call the initWasm function to initialize the WASM module
initWasm();
