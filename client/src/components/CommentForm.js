import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";

const CommentForm = () => {
  const [newComment, setNewComment] = useState({
    commentBody: "",
  });

  const [addComment, { error }] = useMutation(ADD_COMMENT);
  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { ...newComment },
      });
      console.log(data);
      setNewComment("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <textarea
        className="form-input"
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
  );
};

export default CommentForm;
