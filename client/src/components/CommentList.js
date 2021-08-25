import React from "react";

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
    // <div className="container">
    <div>
      {comments &&
        comments.map((comment) => (
          <div key="{comment._id}" className="row">
            <div className="col-2">
              <p className="name fw-bold">{comment.username}</p>
              <p className="date">{comment.createdAt}</p>
            </div>
            <div className="col-7">{comment.commentBody}</div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
