import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiPosts from "../API/ApiPosts";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await ApiPosts.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await ApiPosts.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div style={{ marginTop: 50 }}>
            {isLoading ? <Loader /> :
                <div>
                    <h2>{post.title}</h2>
                    {post.id}.{post.body}
                </div>}
            <h2 style={{ marginTop: 50 }}>Комментарии</h2>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>)}
                </div>}
        </div>
    )
}

export default PostIdPage;