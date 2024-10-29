document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const modal = document.getElementById('modal');
    const userDetails = document.getElementById('user-details');
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort');
    const closeModal = document.getElementById('close-modal');
    let users = [];

    // Fetch Users
    async function fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            users = await response.json();
            displayUsers(users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    // Display Users
    function displayUsers(usersToShow) {
        userContainer.innerHTML = '';
        usersToShow.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p>@${user.username}</p>
                <button onclick="viewDetails(${user.id})">View Details</button>
            `;
            userContainer.appendChild(userCard);
        });
    }

    // Search Functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.username.toLowerCase().includes(searchTerm)
        );
        displayUsers(filteredUsers);
    });

    // Sorting Functionality
    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value;
        const sortedUsers = [...users].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'username') {
                return a.username.localeCompare(b.username);
            }
            return 0;
        });
        displayUsers(sortedUsers);
    });

    // View Details
    window.viewDetails = (userId) => {
        const user = users.find(u => u.id === userId);
        userDetails.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        modal.style.display = 'flex';
    };

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close Modal on outside click
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Initial fetch
    fetchUsers();
});
