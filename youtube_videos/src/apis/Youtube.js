import axios from "axios";
const KEY = "AIzaSyC4hZWIAEzBoIyutRbrSc3UmFU5ad5_8-k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
