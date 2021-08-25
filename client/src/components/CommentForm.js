import React from 'react'

const CommentForm = () => {
   return(

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
      </div>
    );
  };

export default CommentForm;
