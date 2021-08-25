import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";

const CommentForm = ({ postsId }) => {
  const [newComment, setNewComment] = useState({
    commentBody: "",
  });

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { newComment, postsId },
      });
      console.log(data);
      setNewComment("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container mb-5">
      <hr />
      <h4 className="pt-4">Comments</h4>
      <div className="row">
        {/* <div class="col-1"></div> */}
        <div className="mb-3 commentBox col-10">
          <form onSubmit={handleFormSubmit}>
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            />
            <textarea
              className="form-control"
              rows={3}
              placeholder="comment"
              type="text"
              id="comment"
              name="commentBody"
              value={newComment.commentBody}
              onChange={handleChange}
            />
            <button className="btn d-block w-100" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
