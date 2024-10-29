/* tslint:disable */
/* eslint-disable */
/**
 * @param {string} pass
 * @returns {string}
 */
export function print_string(pass: string): string;
/**
 * @param {string} pass
 * @returns {(string)[]}
 */
export function get_pass_hash(pass: string): (string)[];
/**
 * @param {number} username
 * @param {string} password
 * @returns {string}
 */
export function generate_proof(username: number, password: string): string;
/**
 * @param {string} proof
 * @param {(string)[]} pub_inputs
 * @param {number} pub_username
 * @returns {boolean}
 */
export function verify_proof(proof: string, pub_inputs: (string)[], pub_username: number): boolean;
/**
 * Handler for `console.log` invocations.
 *
 * If a test is currently running it takes the `args` array and stringifies
 * it and appends it to the current output of the test. Otherwise it passes
 * the arguments to the original `console.log` function, psased as
 * `original`.
 * @param {Array<any>} args
 */
export function __wbgtest_console_log(args: Array<any>): void;
/**
 * Handler for `console.debug` invocations. See above.
 * @param {Array<any>} args
 */
export function __wbgtest_console_debug(args: Array<any>): void;
/**
 * Handler for `console.info` invocations. See above.
 * @param {Array<any>} args
 */
export function __wbgtest_console_info(args: Array<any>): void;
/**
 * Handler for `console.warn` invocations. See above.
 * @param {Array<any>} args
 */
export function __wbgtest_console_warn(args: Array<any>): void;
/**
 * Handler for `console.error` invocations. See above.
 * @param {Array<any>} args
 */
export function __wbgtest_console_error(args: Array<any>): void;
/**
 * @returns {Uint8Array | undefined}
 */
export function __wbgtest_cov_dump(): Uint8Array | undefined;
/**
 * Runtime test harness support instantiated in JS.
 *
 * The node.js entry script instantiates a `Context` here which is used to
 * drive test execution.
 */
export class WasmBindgenTestContext {
  free(): void;
  /**
   * Creates a new context ready to run tests.
   *
   * A `Context` is the main structure through which test execution is
   * coordinated, and this will collect output and results for all executed
   * tests.
   */
  constructor();
  /**
   * Inform this context about runtime arguments passed to the test
   * harness.
   * @param {any[]} args
   */
  args(args: any[]): void;
  /**
   * Executes a list of tests, returning a promise representing their
   * eventual completion.
   *
   * This is the main entry point for executing tests. All the tests passed
   * in are the JS `Function` object that was plucked off the
   * `WebAssembly.Instance` exports list.
   *
   * The promise returned resolves to either `true` if all tests passed or
   * `false` if at least one test failed.
   * @param {any[]} tests
   * @returns {Promise<any>}
   */
  run(tests: any[]): Promise<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbgt_pass_0: (a: number) => void;
  readonly print_string: (a: number, b: number) => Array;
  readonly get_pass_hash: (a: number, b: number) => Array;
  readonly generate_proof: (a: number, b: number, c: number) => Array;
  readonly verify_proof: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_wasmbindgentestcontext_free: (a: number, b: number) => void;
  readonly wasmbindgentestcontext_new: () => number;
  readonly wasmbindgentestcontext_args: (a: number, b: number, c: number) => void;
  readonly wasmbindgentestcontext_run: (a: number, b: number, c: number) => number;
  readonly __wbgtest_console_log: (a: number) => void;
  readonly __wbgtest_console_debug: (a: number) => void;
  readonly __wbgtest_console_info: (a: number) => void;
  readonly __wbgtest_console_warn: (a: number) => void;
  readonly __wbgtest_console_error: (a: number) => void;
  readonly __wbgtest_cov_dump: () => Array;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly closure464_externref_shim: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly wasm_bindgen__convert__closures__invoke0_mut__h438eef69e98ce7da: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly closure572_externref_shim: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly closure576_externref_shim: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
