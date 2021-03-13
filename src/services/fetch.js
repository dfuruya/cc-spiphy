import axios from "axios";

export function getReq(queryStr, opts = {}) {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "LiT4XaeBUDCDtVpLNuTcc8fzKv84AmW6",
        q: queryStr
      },
      ...opts
    })
    .then((response) => response.data)
    .catch((error) => {
      throw Error(error);
    });
}
