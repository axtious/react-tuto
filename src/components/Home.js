import React from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";

const Home = (props) => {
    const { posts } = props;
    const postsData = posts.length ? (
        posts.map(post => {
            return (
                <div className="base" key={post.id}>
                <Link to={"/" +post.id}>
                    <h2>{post.titre}</h2>
                    </Link>
                    <p>{post.body}</p>
                </div>
            );
        })
    ) : (
            <p>Aucun article pour le moment</p>
        );
    return (
        <div className="home">
            <h4>Page d'accueil</h4>
            {postsData}
        </div>
    );
}
const mapToStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(mapToStateToProps)(Home);