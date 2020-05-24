import React from 'react';
import {AddPost} from './AddPost';
import {PostList} from './PostList';

export const HomePage = () => {
  return (
    <>
      <AddPost />
      <PostList />
    </>
  )
}
