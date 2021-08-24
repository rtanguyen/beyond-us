import React from "react";
import posts from "../assets/postSeed";
import { useParams } from "react-router-dom";

const Singlepost = (props) => {
  const { id: postId } = useParams();
  console.log(posts._id);
  console.log({ postId });

  const currentPost = function filterPost({ postId }) {
    return posts.filter((post) => post._id === postId);
  };

  return (
    <div>
      {/* SINGLE PAGE */}
      <div className="singlePost">
        <div className="column">
          <div className="row">
            <div className="col-12 mt-3">
              <h2 className="text-center fw-bolder spTitle">
                {currentPost.title}
              </h2>
              <br />
              <h5 className="text-center spSubtitle">{currentPost.subtitle}</h5>
              <p className="spDate text-center"></p>
            </div>
          </div>
        </div>
        <div className="column spImage">
          <div className="row">
            <div className="text-center spImage">
              <img
                src={currentPost.image}
                style={{ width: "50%" }}
                alt={currentPost.title}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="spBody py-5 row">
          <div className="col-2" />
          <div className="col-8">
            <p className="spBodyContent">{currentPost.bodyText}</p>
            <div className="writtenBy">
              <p className="author text-end">Written by: Mimi Vo</p>
            </div>
          </div>
          <div className="col-2" />
        </div>
      </div>
    </div>
  );
};

export default Singlepost;
