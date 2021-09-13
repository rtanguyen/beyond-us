import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS } from '../utils/queries';
// import {toggleDateModal} from '../utils/helpers'
import PostlogHeader from '../components/PostlogHeader';
import { none } from '@cloudinary/base/qualifiers/progressive';
// import ImageUploader from "../components/imageUploader";

const PostForm = () => {
	const [newPost, setNewPost] = useState({
		title: '',
		subtitle: '',
		bodyText: '',
		image: '',
		location: '',
		organization: '',
		orgLink: '',
		postType: '',
		endDate: '',
	});

	// const [url, setUrl] = useState("");
	const [img, setImg] = useState('');

	const [addPost, { error }] = useMutation(ADD_POST);

	const handleChange = (event) => {
		//  const { name, value } = event.target.value;

		setNewPost({
			...newPost,
			[event.target.name]: event.target.value,
		});
	};

	const handleListChange = (event) => {
		console.log(event.target.textContent);
		setNewPost({
			...newPost,
			postType: event.target.textContent,
		});
	};

	const handleDateChange = (date) => {
		console.log(date);
		setNewPost({
			...newPost,
			endDate: date,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log({ ...newPost });
		try {
			const { data } = await addPost({
				variables: { input: { ...newPost } },
			});
			const { title, subtitle, bodyText, orgLink, image } = data.addPost;
			console.log(title, subtitle, bodyText, orgLink, image);
			setNewPost('');
			window.location.assign('/home');
		} catch (e) {
			console.error(e);
		}
	};

	const fileSelect = {};
	const [image, setImage] = useState('');
	const [progress, setProgress] = useState(0);

	console.log(image);
	// const imageUploader = () => {
	const handleImageUpload = async () => {
		if (fileSelect) {
			fileSelect.current.click();
		}
	};

	const handleFiles = (files) => {
		for (let i = 0; i < files.length; i++) {
			console.log(files[i]);
			uploadFile(files[i]);
		}
	};

	const uploadFile = (file) => {
		const url = `https://api.cloudinary.com/v1_1/dipwtij2r/upload/`;
		const xhr = new XMLHttpRequest();
		const fd = new FormData();
		xhr.open('POST', url, true);
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

		// Update progress (can be used to show progress indicator)
		xhr.upload.addEventListener('progress', (e) => {
			setProgress(Math.round((e.loaded * 100.0) / e.total));
			// console.log(Math.round((e.loaded * 100.0) / e.total));
		});

		xhr.onreadystatechange = (e) => {
			if (xhr.readyState == 4 && xhr.status == 200) {
				const response = JSON.parse(xhr.responseText);
				console.log(response);
				// const imgUrl = {`https://api.cloudinary.com/v1_1/dipwtij2r/upload/ar_1.5,c_crop/v${response.version}/${response.public_id}`}
				// setImage(response.secure_url);
				setImage(
					`https://res.cloudinary.com/dipwtij2r/image/upload/ar_1.5,c_crop/v${response.version}/${response.public_id}.jpg`
				);
				setNewPost({
					...newPost,
					image: `https://res.cloudinary.com/dipwtij2r/image/upload/ar_1.5,c_crop/v${response.version}/${response.public_id}.jpg`,
				});
				console.log(response.secure_url);
				console.log(
					`https://res.cloudinary.com/dipwtij2r/image/upload/ar_1.5,c_crop/v${response.version}/${response.public_id}.jpg`
				);
			}
		};

		fd.append('upload_preset', 'beyond-us');
		fd.append('tags', 'browser_upload');
		fd.append('file', file);
		xhr.send(fd);
		console.log(fd);
	};

	return (
		<>
			<PostlogHeader />
			{/* <div className="container"> */}
			<div>
				<div className="container postTitles pt-3 pb-3 mb-2 rounded">
					<h3 className=" text-center fw-bolder" id="happeningnow">
						Share Your Cause
					</h3>
					<p className="text-center">
						Write you own post on issues and topics that you are passionate
						about. <br /> Spread awareness on humanitarian, animal,
						environmental issues and more.
					</p>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-8 pl-2 pr-2">
						<form onSubmit={handleFormSubmit}>
							<div className="mb-3 text-center">
								{/* IMAGE UPLOADER */}
								{image ? (
									<img
										className="object-contain rounded-lg"
										src={image.replace('upload/', 'upload/w_600/')}
										// style={{ height: 400, width: 600 }}
									/>
								) : (
									<div
										className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg"
										// style={{ height: 400, width: 600 }}
									>
										<h6>Add a photo</h6>
										<form className="flex justify-center items-center h-full">
											{progress === 0 ? (
												<div className="text-gray-700 text-center">
													<button
														className="btn upload mt-2 btn-sm btn-outline-dark"
														id="upload_widget"
														onClick={handleImageUpload}
														type="button"
													>
														browse
													</button>
												</div>
											) : (
												<span className="text-gray-700">{progress}%</span>
											)}

											<input
												ref={fileSelect}
												type="file"
												accept="image/*"
												style={{ display: 'none' }}
												onChange={(e) => handleFiles(e.target.files)}
											/>
										</form>
									</div>
								)}
							</div>
							<div className="dropdown mb-3 addPost">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
									value={newPost.postType}
								>
									{newPost.postType || 'Post Type*'}
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
							<div className="mb-3 addPost">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
									id="title"
								>
									Title*
								</label>
								<input
									className="form-input"
									type="text"
									id="title"
									name="title"
									value={newPost.title}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
									id="subtitle"
								>
									Subtitle*
								</label>
								<input
									className="form-input"
									type="text"
									id="subtitle"
									name="subtitle"
									value={newPost.subtitle}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label"
									id="body"
								>
									Body*
								</label>
								<textarea
									className="form-control"
									rows="3"
									type="text"
									id="body"
									name="bodyText"
									style={{ resize: 'none', border: '1px solid #767676' }}
									value={newPost.bodyText}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
									id="location"
								>
									Location
								</label>
								{/* <div className="row">
									<div className="col-9"> */}
								<input
									className="form-input"
									type="text"
									id="location"
									name="location"
									value={newPost.location}
									onChange={handleChange}
								/>
								{/* </div>
									<div className="col-3">
										<button className="btn upload btn-sm btn-outline-dark">
											add city
										</button>
									</div>
								</div> */}
							</div>
							{/* <div className="form-group">
              <label htmlFor="modalDueDate">End Date:</label>
              <input type="text" className="form-control" id="modalEndDate" placeholder="mm/dd/yyyy" autoComplete="off" onChange={handleChange}/>
            </div> */}
							<div className="mb-3">
								Event Date
								<DatePicker
									selected={newPost.endDate}
									onChange={handleDateChange}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
									id="organization"
								>
									Organization Name
								</label>
								<input
									className="form-input"
									type="text"
									id="organization"
									name="organization"
									value={newPost.organization}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
									id="orgLink"
								>
									Organization URL
								</label>
								<input
									className="form-input"
									type="text"
									id="orgLink"
									name="orgLink"
									value={newPost.orgLink}
									onChange={handleChange}
								/>
							</div>
							<div>
								{/* <input
                  type="text"
                  // onChange={(e) => handleChange(e.target.files[0])}
                  value={newPost.image}
                  onChange={handleChange}
                ></input> */}
								{/* <button type="button" className="btn widget-btn" onClick={toggleWidget}>
          Browse
        </button> */}
							</div>

							<div className="text-end">
								<button
									className="btn btn-sm btn-outline-light logButton signUpCTA mb-3 py-3 px-4"
									type="submit"
								>
									submit
									{/* <Link to="/" className="nav-link text-light">
										submit
									</Link> */}
								</button>
							</div>
							<div className="col-2"></div>
						</form>
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default PostForm;
