import React from "react";
import { connect } from "react-redux";

const Post = (props) => {
  const handleClick = () => {
    props.deletePost(parseInt(props.post.id));
    props.history.push("/");
  };
  const post = props.post ? (
    <div className="Post">
      <h2>{props.post.titre}</h2>
      <p>{props.post.body}</p>
      <button onClick={handleClick}>Supprimer cet article</button>
    </div>
  ) : (
    <p>Article non existant</p>
  );
  return <div className="container">{post}</div>;
};

const mapToStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === +id),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapToStateToProps, mapDispatchToProps)(Post);
