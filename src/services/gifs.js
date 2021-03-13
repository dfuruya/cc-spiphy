import { getReq } from "./fetch";

export function getGifs(queryStr, opts) {
  function resolveFn(resolve) {
    return resolve(getReq(queryStr, opts));
  }

  function extractData(result) {
    return result && result.data;
  }

  const promise = new Promise(resolveFn);
  return promise.then(extractData);
}
