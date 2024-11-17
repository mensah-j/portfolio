export function deleteEverything(): void;
export function writeFileSync(filename: any, buffer: any): void;
export function readFileSync(filename: any): any;
export function setShowConsole(): void;
export function setMemory(m: any): void;
export function setInput(input: any, cb: any): void;
export function setFileLoader(c: any): void;
export function executeAsync(_wasmExports: any): Promise<any>;
export function getCurrentMinutes(): number;
export function getCurrentDay(): number;
export function getCurrentMonth(): number;
export function getCurrentYear(): number;
export function printString(descriptor: any, x: any): void;
export function printBoolean(descriptor: any, x: any): void;
export function printChar(descriptor: any, x: any): void;
export function printInteger(descriptor: any, x: any): void;
export function printFloat(descriptor: any, x: any): void;
export function printNewline(descriptor: any, x: any): void;
export function reset(length: any, pointer: any): number;
export function rewrite(length: any, pointer: any): number;
export function close(descriptor: any): void;
export function eof(descriptor: any): 0 | 1;
export function erstat(descriptor: any): any;
export function eoln(descriptor: any): 0 | 1;
export function inputln(
  descriptor: any,
  bypass_eoln: any,
  bufferp: any,
  firstp: any,
  lastp: any,
  max_buf_stackp: any,
  buf_size: any,
): boolean;
export function get(descriptor: any, pointer: any, length: any): void;
export function put(descriptor: any, pointer: any, length: any): void;
export function tex_final_end(): void;
export const pages: number;
