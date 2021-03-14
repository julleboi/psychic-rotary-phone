import { response } from "./response";

const TIMEOUT = 1000;

export function getBooks() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, TIMEOUT);
  });
}