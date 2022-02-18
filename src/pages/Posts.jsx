import React, { useEffect, useState } from "react";

import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";

import ModalWindow from "../components/UI/ModalWindow/ModalWindow";
import Button from "../components/UI/button/Button";
import Loader from "../components/UI/Loader/Loader";
import Header from "../components/UI/Header/header";
import Pagination from "../components/UI/Pagination/Pagination";

import { getPageCount } from "../components/utils/pages";

import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";

import ApiPosts from "../API/ApiPosts";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearch = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading] = useFetching(async (limit, page) => {
    const response = await ApiPosts.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  // eslint-disable-next-line
   useEffect(() => fetchPosts(limit, page), []) 

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className="App">

      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>

      <Header />

      <Button style={{ marginTop: 30 }} onClick={() => setModal(true)}>Create new post</Button>

      <hr style={{ margin: '15px 0', backgroundColor: '#C5C6C7' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 120 }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearch} title="List of Posts" />}

      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

    </div>
  );
}

export default Posts;
