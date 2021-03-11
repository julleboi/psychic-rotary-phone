import { response } from "./response";

const TIMEOUT = 100;

export function getBooks() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, TIMEOUT);
  });
}