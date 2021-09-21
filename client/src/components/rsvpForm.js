import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import { RSVP_ATTEND } from "../utils/mutations";

const rsvpForm = ({ post }) => {
  console.log(post);
  //  const { id: postId } = useParams();
  //  const { loading, data } = useQuery(QUERY_POST, {
  //    variables: { id: postId },
  //  });
  // const [rsvp] = useMutation(RSVP_ATTEND);

  // const handleRSVPSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await rsvp({
  //       variables: { postsId: post._id },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className="card mt-5 pt-2">
      <h3 className="card-title text-center">Sign up today!</h3>
      <div className="card-body mx-auto">
        {/* <div className="row"> */}

        <div className=" text-end">
          <i className="fas fa-calendar-alt card-text" id="endDate"></i>
          <p className=" text-end postDetails card-text px-1" id="endDate">
            {post.endDate} <br />
            {/* {post.location} */}
          </p>
        </div>
        <div className=" text-end mb-2">
          <p className=" text-end postDetails card-text px-1" id="endDate">
            {post.location}
          </p>
        </div>
      </div>
      <div className="card-footer text-center">
        <p className="card-text">
          {post.attendanceCount ? "attendees" : "be the first to sign up!"}
          {/* ||
											{post.attendanceCount
												? 'attendees'
												: 'be the first to sign up!'}
											 */}
        </p>
        <form
        //   onClick={handleRSVPSubmit}
        >
          <button
            className="btn btn-outline-light logButton btn-sm login ms-2"
            type="submit"
          >
            Attending
          </button>
        </form>
      </div>
    </div>
  );
};

export default rsvpForm;
