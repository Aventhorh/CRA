import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./UI/button/Button";

const Post = (props) => {
    const navigate = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <Button onClick={() => navigate(`/posts/${props.post.id}`)}>Open</Button>
                <Button onClick={() => props.remove(props.post)}>Delete</Button>
            </div>

        </div>
    )
}

export default Post;