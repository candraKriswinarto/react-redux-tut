import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from '../store/actions/postAction';

export const PostDetail = ({post}) => {
  const dispatch = useDispatch();
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.content}</p>
        </div>
        <div className="card-action">
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className="btn red"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}