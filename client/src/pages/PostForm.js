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

  const handleChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log({ newPost });
    try {
      await addPost({
        variables: { newPost },
      });
      setNewPost("");
    } catch (e) {
      console.error(e);
    }
  };

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const toggleWidget = (event) =>
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dipwtij2r",
        uploadPreset: "beyond-us",
      },
      (error, result) => {
        console.log("Done! Here is the image info: ", result.info);
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
        value={newPost.title}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        id="subtitle"
        value={newPost.subtitle}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        id="body"
        value={newPost.bodyText}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        id="orgLink"
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
