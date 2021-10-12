import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  // bad approach!!!
  const response = await jsonPlaceholder.get("/post");
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
