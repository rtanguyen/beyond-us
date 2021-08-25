import React from 'react'

const CommentList = () => {
   return(
      <div classname="container">
      {'{'}comment.map((comment) =&gt; (
      <div key="{comment._id}" classname="row">
        <div classname="col-2">
          <p classname="name fw-bold">{'{'}comment.username{'}'}</p>
          <p classname="date">{'{'}comment.createdAt{'}'}</p>
        </div>
        <div classname="col-7">{'{'}comment.body{'}'}</div>
      </div>
      )){'}'}
    </div>
  );
};

export default CommentList;
