import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";

import { QUERY_POSTS_BASIC } from "../utils/queries";

const PostList = ({ filters }) => {
  const { location, postType, endDate } = filters;
  // const filterArr = filters.entries();
  const { loading, data } = useQuery(QUERY_POSTS_BASIC);
  const posts = data?.posts || [];
  console.log("postType", postType);
  console.log("location", location);
  console.log("both", postType, location);

  function filterPosts() {
    if (Object.keys(filters).length === 0) {
      console.log(posts);
      return posts;
    }
    // else {
    //    posts.filter((post) => {
    //       if(!postType)
    //    }
    // }
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

    // if(endDate) {
    //    posts.filter((post) => post.endDate === filters.endDate);
    // }

    // return posts.filter((post) => post.postType === filters.postType);
  }

  return (
    <div className="col-7 pl-2 pr-2">
      {/* {posts.map((post) => ( */}
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
