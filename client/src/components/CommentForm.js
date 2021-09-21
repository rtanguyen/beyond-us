import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";

const CommentForm = ({ postsId }) => {
  const [commentBody, setBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  console.log("commentBody", commentBody);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleChange = (event) => {
    if (event.target.value.length >= 1) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(error);
    try {
      const { data } = await addComment({
        variables: { commentBody, postsId },
      });
      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container mb-5">
      {/* <hr /> */}
      <h4 className="pt-4">Comments</h4>
      <div className="row justify-content-center">
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
              type="text"
              id="comment"
              name="commentBody"
              onChange={handleChange}
              value={commentBody}
            />
          </form>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-outline-light commentBtn btn-sm login d-flex w-100 justify-content-center"
          >
            Submit
          </button>
        </div>

        {/* <button className="btn d-block w-100" type="submit">
              Submit
            </button> */}
      </div>
    </div>
  );
};

export default CommentForm;
