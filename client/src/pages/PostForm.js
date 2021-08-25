import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/base";
import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";

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
        variables: { input: {...newPost} },
      });
      const { title, subtitle, bodyText, orgLink, image } =
        data.addPost;
      setNewPost("");
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
    <form onSubmit={handleFormSubmit}>
      <input
        className="form-input"
        placeholder="Title"
        type="text"
        id="title"
        name="title"
        value={newPost.title}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        id="subtitle"
        name="subtitle"
        value={newPost.subtitle}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        id="body"
        name="bodyText"
        value={newPost.bodyText}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        id="orgLink"
        name="orgLink"
        value={newPost.orgLink}
        onChange={handleChange}
      />
      <div>
        {/* <input
                  type="text"
                  // onChange={(e) => handleChange(e.target.files[0])}
                  value={newPost.image}
                  onChange={handleChange}
                ></input> */}
        <button type="button" className="btn widget-btn" onClick={toggleWidget}>
          Browse
        </button>
      </div>

      <button className="btn d-block w-100" type="submit">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
