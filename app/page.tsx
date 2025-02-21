import React from 'react';
import Introduction from './components/Introduction';
import BreadCrumb from './components/BreadCrumb';
import MainCategories from './components/MainCategories';
import FeaturedPosts from './components/FeaturedPosts';

export default function Home() {
  return (
    <div>
      <BreadCrumb />
      <Introduction />
      <MainCategories />
      <FeaturedPosts />
    </div>
  )
}
