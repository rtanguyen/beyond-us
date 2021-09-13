import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

// import { lineBreak } from "../utils/helpers";
import { QUERY_POST } from '../utils/queries';
import { RSVP_ATTEND } from '../utils/mutations';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import PostlogHeader from '../components/PostlogHeader';

const Singlepost = (props) => {
	const { id: postId } = useParams();
	const { loading, data } = useQuery(QUERY_POST, {
		variables: { id: postId },
	});

	const post = data?.post || {};

	const [rsvp, { error }] = useMutation(RSVP_ATTEND);

	const handleRSVPSubmit = async (event) => {
		event.preventDefault();
		try {
			await rsvp({
				variables: { id: postId },
			});
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<PostlogHeader />
			<div>
				{/* SINGLE PAGE */}
				<div className="singlePost">
					<div className="column">
						<div className="row">
							<div className="col-12 mt-3">
								<h2 className="text-center fw-bolder spTitle">{post.title}</h2>
								<h5 className="text-center spSubtitle">{post.subtitle}</h5>
								<br />
								<div className="row">
									<div className="col-3"></div>
									<div className="col-3"></div>
									<div className="col-3">
										{/* {post.organization && (<p className="text-center" id="postDetails">{post.organization}</p>)}
                <p className="text-center" id="postDetails">{post.createdAt}</p> */}
									</div>
									<div className="col-3"></div>
									<p className="spDate text-center"></p>
								</div>
							</div>
						</div>
					</div>
					<div className="column spImage">
						<div className="row">
							{/* <div className="text-center spImage">
                {post.image && (
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                    style={{ width: "50%" }}
                  />
                )}
              </div> */}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="spBody pb-4 row">
						<div className="col-2" />
						<div className="col-8">
							<div className="row pb-3 mb-1">
								<div className="col-6">
									<p className=" text-start mt-auto postDetails" id="endDate">
										{' '}
									</p>
									{/* <br/> */}
									{/* <p className=" text-start postDetails" id="endDate">
										<i className="fas fa-calendar-alt" id="endDate"></i>{' '}
										{post.endDate}
									</p> */}
								</div>
								<div className="col-6 ">
									{post.organization && (
										<p className=" text-end align-items-end postDetails">
											{post.organization}
										</p>
									)}
									<p className=" text-end align-items-end postDetails">
										{post.createdAt}
									</p>
								</div>
							</div>
							<div className="text-center spImage">
								{post.image && (
									<img
										src={post.image}
										className="card-img-top mb-5"
										alt={post.title}
										style={{ width: '100%' }}
									/>
								)}
							</div>
							<p className="spBodyContent" id="p_wrap">
								{post.bodyText}
							</p>
							{/* <div className="writtenBy">
                <p className="author text-end">Written by: Mimi Vo</p>
              </div> */}
						</div>
						<div className="col-2">
							{post.postType === 'Volunteer' && (
								<div className="card mt-5 pt-2">
									<h3 className="card-title text-center">Sign up today!</h3>
									<div className="card-body mx-auto">
										{/* <div className="row"> */}

										<div className=" text-end">
											<i
												className="fas fa-calendar-alt card-text"
												id="endDate"
											></i>
											<p
												className=" text-end postDetails card-text px-1"
												id="endDate"
											>
												{post.endDate} <br />
												{/* {post.location} */}
											</p>
										</div>
										<div className=" text-end mb-2">
											<p
												className=" text-end postDetails card-text px-1"
												id="endDate"
											>
												{post.location}
											</p>
										</div>
									</div>
									<div className="card-footer text-center">
										<p className="card-text">
											{post.attendanceCount
												? 'attendees'
												: 'be the first to sign up!'}
											{/* ||
											{post.attendanceCount
												? 'attendees'
												: 'be the first to sign up!'}
											 */}
										</p>
										<form onClick={handleRSVPSubmit}>
											<button
												className="btn btn-outline-light logButton btn-sm login ms-2"
												type="submit"
											>
												Attending
											</button>
										</form>
									</div>
								</div>
							)}
						</div>
					</div>
					{post.orgLink && (
						<div className="text-end">
							<a href={post.orgLink} className="btn btn-danger" target="_blank">
								&gt;&gt;
							</a>
						</div>
					)}
				</div>
			</div>

			<div className="container mb-5">
				<div className="row">
					<CommentForm postsId={post._id} />
					<div className="col-2"></div>
				</div>
				<div className="postedComments container">
					<div className="row pastComments" id="commentPast">
						<div className="col-1" />
						<div className="container">
							<CommentList comments={post.comments} />
							<div className="col-1" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Singlepost;
