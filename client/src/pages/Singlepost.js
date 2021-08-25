import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentForm from "../components/CommentForm";
import {QUERY_POST} from '../utils/queries'
// import CommentList from "../components/CommentList";

const Singlepost = (props) => {
  const { id: postId } = useParams();
  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

console.log(post);
  return (
    <>
      <div>
        {/* SINGLE PAGE */}
        <div className="singlePost">
          <div className="column">
            <div className="row">
              <div className="col-12 mt-3">
                <h2 className="text-center fw-bolder spTitle">
                  {post.title}
                </h2>
                <br />
                <h5 className="text-center spSubtitle">
                  {post.subtitle}
                </h5>
                <p className="spDate text-center"></p>
              </div>
            </div>
          </div>
          <div className="column spImage">
            <div className="row">
              <div className="text-center spImage">
                <img
                  src={post.image}
                  style={{ width: "50%" }}
                  alt={post.title}
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
              {/* <div className="writtenBy">
                <p className="author text-end">Written by: Mimi Vo</p>
              </div> */}
            </div>
            <div className="col-2" />
          </div>
        </div>
      </div>
  
      <div class="container mb-5">
      <hr />
      <h4 class="pt-4">
        Comments
      </h4>
      <div class="row">
        <CommentForm />
        <div class="col-2"></div>
      </div>
      <div className="postedComments container">
            <div className="row pastComments" id="commentPast">
                <div className="col-1" />
                <CommentList />
                <div className="col-1" />
            </div>
      </div>
    </div>
    </>
  );
};

export default Singlepost;
