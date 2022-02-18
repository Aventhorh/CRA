import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Post from "./Post"

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (<h2 style={{ textAlign: 'center' }}>Постов нет</h2>)
    }

    return (
        <div>
            <h1 style={{ fontSize: 50, textAlign: 'center', color: '#66FCF1'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <Post remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    )
}

export default PostList;