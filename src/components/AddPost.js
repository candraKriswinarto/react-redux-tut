import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from '../store/actions/postAction';
import { v4 as uuidv4 } from "uuid";

export const AddPost = () => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: ''
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post))
    setPost({
      id: uuidv4(),
      title: "",
      content: "",
    });
  }

  return (
    <div className="container" style={{ margin: "4rem auto" }}>
      <h5 className="blue-text center-align">CandBlog</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="post_title">Title</label>
          <input
            onChange={handleChange}
            value={post.title}
            type="text"
            name="title"
          />
        </div>
        <div className="input-field">
          <label htmlFor="post_content">Content</label>
          <textarea
            onChange={handleChange}
            value={post.content}
            name="content"
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}
