import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useLazyQuery } from '@apollo/client';
import DatePicker from 'react-datepicker';

import PostlogHeader from '../components/PostlogHeader';
import Trending from '../components/Trending';
import PostForm from './PostForm';
import DiscoverOrgs from '../components/DiscoverOrgs';
import FilterPosts from '../components/FilterPosts';
import PostList from '../components/PostList';

// import { QUERY_POSTS, QUERY_POSTS_BASIC } from '../utils/queries';

import afghan1Img from '../assets/protextafgans.jpg';
import covidImg1 from '../assets/covid3.jpg';
import haitiImg from '../assets/haiti1.jpg';
import climateChangeImg from '../assets/climatechange3.jpg';
import afghanImg2 from '../assets/afghan.jpg';
import covidImg2 from '../assets/covid2.jpg';
import haitiImg3 from '../assets/haiti4.jpg';
import donate from '../assets/donateSeed';
import postSeed from '../assets/postSeed';

function Dashboard() {
	const [filters, setFilters] = useState({
		// location: '',
		// postType: '',
		// endDate: '',
	});
	// console.log({ filters });
	// const handleChange = (event) => {
	// 	//  const { name, value } = event.target.value;

	// 	setFilters({
	// 		location: event.target.value,
	// 	});
	// };

	// const handleListChange = (event) => {
	// 	console.log(event.target.textContent);
	// 	setFilters({
	// 		// ...newPost,
	// 		postType: event.target.textContent,
	// 	});
	// };

	// const handleDateChange = (date) => {
	// 	console.log(date);
	// 	setFilters({
	// 		// ...newPost,
	// 		endDate: date,
	// 	});
	// };

	// const { loading, data } = useQuery(QUERY_POSTS);
	// const posts = data?.posts || [];

	return (
		<>
			<PostlogHeader />
			<div>
				<div>
					<div className="container postTitles pt-3 pb-3 mb-2 rounded">
						<div className="row">
							<div className="col-3"></div>
							<div className="col-7">
								<h3 className=" text-center fw-bolder" id="happeningnow">
									Happening Now
								</h3>
							</div>
							<div className="col-2"></div>
						</div>
					</div>
				</div>
				{/* Discover */}
				<div className="container">
					<div className="row">
						<DiscoverOrgs />

						{/* ==============POSTS============== */}
						<PostList filters={filters} />
						{/* <div className="col-7 pl-2 pr-2">
							{posts.map((post) => (
								<div key={post._id}>
									<div className="card" style={{ width: '100%' }}>
										{post.image && (
											<img
												src={post.image}
												className="card-img-top post-img"
												alt={post.title}
											/>
										)}
										<div className="card-body">
											<h5 className="card-title">{post.title}</h5>
											<p className="card-text">{post.subtitle}</p>
											<div className="text-end">
												<Link
													to={`/post/${post._id}`}
													className="btn btn-danger"
												>
													Read more
												</Link>
											</div>
										</div>
									</div>
								</div>
							))} */}

						{/* {postSeed.map((post) => (
								<div key={post._id}>
									<div className="card" style={{ width: '100%' }}>
										{post.image && (
											<img
												src={post.image}
												className="card-img-top"
												alt={post.title}
											/>
										)}
										<div className="card-body">
											<h5 className="card-title">{post.title}</h5>
											<p className="card-text">{post.subtitle}</p>
											<div className="text-end">
												<Link
													to={`/post/${post._id}`}
													className="btn btn-danger"
												>
													Read more
												</Link>
											</div>
										</div>
									</div>
								</div>
							))} */}
						{/* {donate.map((donate) => (
								<div key={donate._id}>
									<div className="card" style={{ width: '100%' }}>
										<img
											src={donate.image}
											className="card-img-top"
											alt={donate.title}
										/>
										<div className="card-body">
											<h5 className="card-title">{donate.title}</h5>
											<p className="card-text">{donate.subtitle}</p>
											<div className="text-end">
										
												<a
													href={donate.orgLink}
													className="btn btn-danger"
													target="_blank"
												>
													Donate now
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div> */}
						<div className="col-2">
							<FilterPosts setFilters={(filters, setFilters)} />
							{/* <form>
								<h3 className="causes text-center fw-bolder">Filter Posts</h3>
								<hr />
								<div className="dropdown mb-3 addPost">
									<button
										className="btn btn-outline-dark btn-med dropdown-toggle dropdown_filter"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
										value={filters.postType}
									>
										{filters.postType || 'Post Type'}
									</button>
									<ul
										className="dropdown-menu"
										aria-labelledby="dropdownMenuButton1"
										onClick={handleListChange}
									>
										<li>
											<button
												type="button"
												className="dropdown-item"
												name="General"
												value="General"
											>
												General
											</button>
										</li>
										<li>
											<a className="dropdown-item">Donate</a>
										</li>
										<li>
											<a className="dropdown-item">Volunteer</a>
										</li>
									</ul>
								</div>
								<div className="mb-3">
									<label
										htmlFor="exampleFormControlInput1"
										className="form-label"
										id="location"
									>
										Location
									</label>
									<input
										className="form-input"
										type="text"
										id="location"
										name="location"
										value={filters.location}
										onChange={handleChange}
									/>
								</div>
								<div className="mb-3 datepicker_main">
									Event Date
									<DatePicker
										selected={filters.endDate}
										onChange={handleDateChange}
									/>
								</div>
								<div className="text-center">
									<button
										className="btn btn-danger mx-auto"
										onClick={() => setFilters({ variables: { ...filters } })}
									>
										Filter
									</button>
								</div>
							</form> */}

							<br />
							<Trending />
						</div>
					</div>
				</div>
				<div className="container mt-4">
					<div className="row">
						<div className="discoImages">
							{/* <img src="./assets/img/community2.jpg" alt="Avatar" class="roundImg"> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
{
	/* {(filteredPosts && (
								<div>
									{filteredPosts.map((post) => (
										<div key={post._id}>
											<div className="card" style={{ width: '100%' }}>
												{post.image && (
													<img
														src={post.image}
														className="card-img-top"
														alt={post.title}
													/>
												)}
												<div className="card-body">
													<h5 className="card-title">{post.title}</h5>
													<p className="card-text">{post.subtitle}</p>
													<div className="text-end">
														<Link
															to={`/post/${post._id}`}
															className="btn btn-danger"
														>
															Read more
														</Link>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							)) || (
								<div>
									{' '}
									{posts.map((post) => (
										<div key={post._id}>
											<div className="card" style={{ width: '100%' }}>
												{post.image && (
													<img
														src={post.image}
														className="card-img-top"
														alt={post.title}
													/>
												)}
												<div className="card-body">
													<h5 className="card-title">{post.title}</h5>
													<p className="card-text">{post.subtitle}</p>
													<div className="text-end">
														<Link
															to={`/post/${post._id}`}
															className="btn btn-danger"
														>
															Read more
														</Link>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							)} */
}
{
	/* <div>
								{' '}
								{posts.map((post) => (
									<div key={post._id}>
										<div className="card" style={{ width: '100%' }}>
											{post.image && (
												<img
													src={post.image}
													className="card-img-top"
													alt={post.title}
												/>
											)}
											<div className="card-body">
												<h5 className="card-title">{post.title}</h5>
												<p className="card-text">{post.subtitle}</p>
												<div className="text-end">
													<Link
														to={`/post/${post._id}`}
														className="btn btn-danger"
													>
														Read more
													</Link>
												</div>
											</div>
										</div>
									</div>
								))}
							</div> */
}
