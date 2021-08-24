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
          <div className="row pastComments" id="commentPast">
            <div className="col-1" />
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <p className="name fw-bold">Beyonce</p>
                  <p className="date">12.23.2013</p>
                </div>
                <div className="col-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sunt rem nihil recusandae? Tenetur tempora temporibus nam, dolor eius eaque, sint, totam vitae culpa voluptate accusamus minus harum! At, qui.</div>
              </div>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </div>
    );
  };

export default CommentForm;
