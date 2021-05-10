import axios from "axios";
const KEY = "AIzaSyBSwXBkgwtTT3A8qzNQzBhCFKG6xIKYS1E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
