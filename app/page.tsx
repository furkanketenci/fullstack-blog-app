import React from 'react';
import Introduction from './components/Introduction';
import BreadCrumb from './components/BreadCrumb';
import MainCategories from './components/MainCategories';
import FeaturedPosts from './components/FeaturedPosts';
import PostList from './components/PostList';

export default function Home() {
  return (
    <div>
      <BreadCrumb />
      <Introduction />
      <MainCategories />
      <FeaturedPosts />
      <PostList />
    </div>
  )
}
