import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
});

const initialState = {
  posts: [],
  status: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "pending";
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts = payload;
      console.log("The payload", payload);
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postsSlice.reducer;
