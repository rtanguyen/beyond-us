import React from "react";

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
    // <div className="container">
    <div>
      {comments &&
        comments.map((comment) => (
          <div key="{comment._id}">
            <div className="row mb-4">
              <div className="col-2">
                <p className="name fw-bold">{comment.username}</p>
                <span className="name date align-bottom">
                  {comment.createdAt}
                </span>
              </div>
              {/* </div>
            <div className="row"> */}
              <div className="col-10">
                {/* <p className="date">{comment.createdAt}</p> */}
                <p className="name px-2">{comment.commentBody}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;

{
  /* </div>
   */
}
{
  /* </div> */
}
