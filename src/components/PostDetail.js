import React, { Component } from "react";
import { connect } from "react-redux";

class PostDetail extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action">
            <button
              onClick={() => this.props.deletePost(post.id)}
              className="btn red"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id });
    },
  };
};

export default connect(null, mapDispatchToProps)(PostDetail);
