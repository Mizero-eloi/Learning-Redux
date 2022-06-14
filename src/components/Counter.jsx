import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../counterSlice";
import { getPosts } from "../postsSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const posts2 = useSelector((state) => state.posts.posts);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  console.log("myCount", count);

  function getThePosts() {
    dispatch(
      getPosts()
        .unwrap()
        .then((result) => {
          setPosts(result);
        })
    );
  }

  const dispatch2 = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    console.log("The posts", posts2);
  }, []);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>
          <span>{count}</span>
        </div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by value"
          onClick={() => dispatch(incrementByAmount(33))}
        >
          Increment by amount
        </button>
      </div>
      {posts2.map((p) => (
        <div>
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
}
