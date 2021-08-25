import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/base";

import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";

import PostlogHeader from "../components/PostlogHeader";

const PostForm = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    subtitle: "",
    bodyText: "",
    image: "",
    orgLink: "",
  });

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleChange = (event) => {
    //  const { name, value } = event.target.value;

    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
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
      setNewPost("");
      window.location.assign("/home");
    } catch (e) {
      console.error(e);
    }
  };

  const toggleWidget = (event) =>
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dipwtij2r",
        uploadPreset: "beyond-us",
      },
      (error, result) => {
        console.log(result.info);
        console.log(result.info.url);

        setNewPost({ ...newPost, image: result.info.url });
      }
    );

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
                <h6>Add a photo</h6>
                <button
                  type="button"
                  className="btn upload mt-2 btn-sm btn-outline-dark"
                  id="upload_widget"
                  onClick={toggleWidget}
                >
                  browse
                </button>
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  id="title"
                >
                  Title
                </label>
                <input
                  className="form-input"
                  placeholder="Title"
                  type="text"
                  id="title"
                  name="title"
                  value={newPost.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  id="subtitle"
                >
                  Subtitle
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
                  for="exampleFormControlTextarea1"
                  className="form-label"
                  id="body"
                >
                  Body
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  type="text"
                  id="body"
                  name="bodyText"
                  value={newPost.bodyText}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  id="orgLink"
                >
                  Oraganization URL
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
                  className="btn btn-sm btn-outline-light logButton signUpCTA "
                  type="submit"
                >
                  Submit
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
