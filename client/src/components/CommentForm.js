import React from 'react'

const CommentForm = () => {
   return(
      <div className="container mb-5">
        <h4>
          See what people are saying about this issue and share your thoughts below.
        </h4>
        <div className="mb-3 commentBox">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" />
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
        <div className="postedComments container">
          <div className="row pastComments" id="commentPast">
            <div className="col-1" />
            <div className="col-3">
              <p className="name">Beyonce</p>
              <p className="date">12.23.2013</p>
            </div>
            <div className="col-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sunt rem nihil recusandae? Tenetur tempora temporibus nam, dolor eius eaque, sint, totam vitae culpa voluptate accusamus minus harum! At, qui.</div>
            <div className="col-1" />
          </div>
        </div>
      </div>
    );
  };

export default CommentForm;
