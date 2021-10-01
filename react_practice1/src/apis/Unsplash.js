import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID DCJojAQKTzchib0BiOAvx-o79ufwyGT3F_MsLcDJqPo",
  },
});
