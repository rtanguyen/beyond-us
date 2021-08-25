import React, { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/base";

import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";

import PostlogHeader from "../components/PostlogHeader";
// import ImageUploader from "../components/imageUploader";

const PostForm = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    subtitle: "",
    bodyText: "",
    orgLink: "",
    image: "",
  });

  const [url, setUrl] = useState("");
  const [img, setImg] = useState("");

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
      // setNewPost("");
      // window.location.assign("/home");
    } catch (e) {
      console.error(e);
    }
  };

  // const uploadImage = () => {
  //   const data = new FormData();
  //   data.append("file", img);
  //   data.append("upload_preset", "beyond-us");
  //   data.append("cloud_name", "dipwtij2r");
  //   fetch("  https://api.cloudinary.com/v1_1/dipwtij2r/image/upload/", {
  //     method: "post",
  //     body: data,
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setUrl(data.url);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const toggleWidget = (event) =>
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dipwtij2r",
        uploadPreset: "beyond-us",
      },
      (error, result) => {
        console.log(result.info);
        console.log(result.info.files);
        console.log(result.info.url);

        setImg({ img: result.info.url });
        console.log(img);
        // setNewPost({ ...newPost.image, image: result.info.url });
      }
    );

  const fileSelect = {};
  const [image, setImage] = useState("");
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
    const url = `https://api.cloudinary.com/v1_1/dipwtij2r/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
      setProgress(Math.round((e.loaded * 100.0) / e.total));
      console.log(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);

        setImage(response.secure_url);
        setNewPost({ ...newPost, image: response.secure_url });
        console.log(image);
      }
    };

    fd.append("upload_preset", "beyond-us");
    fd.append("tags", "browser_upload");
    fd.append("file", file);
    xhr.send(fd);
  };
  // };

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
                {/* <ImageUploader /> */}
                {/* IMAGE UPLOADER */}
                {image ? (
                  <img
                    className="object-contain rounded-lg"
                    src={image.replace("upload/", "upload/w_600/")}
                    style={{ height: 400, width: 600 }}
                  />
                ) : (
                  <div
                    className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg"
                    style={{ height: 400, width: 600 }}
                  >
                    <form className="flex justify-center items-center h-full">
                      {progress === 0 ? (
                        <div className="text-gray-700 text-center">
                          <button
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
                            onClick={handleImageUpload}
                            type="button"
                          >
                            Browse
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-700">{progress}%</span>
                      )}

                      <input
                        ref={fileSelect}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleFiles(e.target.files)}
                      />
                    </form>
                  </div>
                )}
                {/* <div>
                  <input
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                  ></input>
                  <button onClick={uploadImage}>Upload</button>
                </div> */}
                <button
                  type="button"
                  className="btn upload mt-2 btn-sm btn-outline-dark"
                  id="upload_widget"
                  onClick={toggleWidget}
                >
                  browse
                </button>
              </div>
              <div className="mb-3 addPost">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  id="title"
                >
                  Title
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
