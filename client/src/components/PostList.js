import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";

import { QUERY_POSTS_BASIC } from "../utils/queries";

const PostList = ({ filters }) => {
  let [error, setError] = useState(false);
  let [nullResults, setNullResults] = useState(false);
  const { location, postType, endDate } = filters;
  // const filterArr = filters.entries();
  const { loading, data } = useQuery(QUERY_POSTS_BASIC);
  const posts = data?.posts || [];
  console.log("postType", postType);
  console.log("location", location);
  console.log("both", postType, location);

  if (!posts.length) {
    return <p>No posts found.</p>;
  }

  // function filterPosts() {
  const filterPosts = () => {
    if (Object.keys(filters).length === 0) {
      return posts;
      // return <p>No posts found.</p>;
    }
    if (location && postType) {
      return posts.filter(
        (post) =>
          post.location === filters.location &&
          post.postType === filters.postType
      );
    }
    if (location) {
      return posts.filter((post) => post.location === filters.location);
    }

    if (postType) {
      return posts.filter((post) => post.postType === filters.postType);
    }
  };

  console.log("FILTERED", filterPosts());
  // let noPosts = () => {
  //   // await filterPosts();
  //   console.log(filterPosts().length);
  //   console.log(error);
  //   if (!filterPosts().length) {
  //     setError(true);
  //     console.log(error);
  //   }
  // };

  // let testPosts = async () => {
  //   await filterPosts();
  //   if (filterPosts().length) {
  //     console.log("hoooooi");
  //     return <p> posts found.</p>;
  //   }
  // };

  // console.log("NOPOSTS", noPosts());
  // console.log("POSTS~", testPosts());

  return (
    <div className="col-7 pl-2 pr-2">
      {/* {posts.map((post) => ( */}
      {error && <h3> No posts found.</h3>}
      {filterPosts().map((post) => (
        <div key={post._id}>
          <div className="card" style={{ width: "100%" }}>
            {post.image && (
              <img
                src={post.image}
                className="card-img-top post-img"
                alt={post.title}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.subtitle}</p>
              <div className="text-end">
                <Link to={`/post/${post._id}`} className="btn btn-danger">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
