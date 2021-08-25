import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";

const CommentForm = () => {
  const [newComment, setNewComment] = useState({
    commentBody: "",
  });

<<<<<<< HEAD
      <div className="container mb-5">
        <hr />
        <h4 className="pt-4">
          Comments
        </h4>
        <div className="row">
          {/* <div class="col-1"></div> */}
          <div className="mb-3 commentBox col-10">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" />
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <div className="col-2" />
        </div>
        <div className="postedComments container">
         {comment.map((comment) => (
            <div key={comment._id} className="row pastComments" id="commentPast">
               <div className="col-1" />
                  <div className="container">
                  <div className="row">
                     <div className="col-2">
                     <p className="name fw-bold">{comment.username}</p>
                     <p className="date">{comment.createdAt}</p>
                     </div>
                     <div className="col-7">{comment.body}</div>
                  </div>
               </div>
               <div className="col-1" />
            </div>
         ))}
         </div>
=======
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
          </form>
          <button className="btn d-block w-100" type="submit">
            Submit
          </button>
        </div>
>>>>>>> 6cd2bde107a38977065fa20908feef30758b1649
      </div>
    </div>
  );
};

export default CommentForm;
