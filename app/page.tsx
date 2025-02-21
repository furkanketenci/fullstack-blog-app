import React from 'react';
import Introduction from './components/Introduction';
import BreadCrumb from './components/BreadCrumb';
import MainCategories from './components/MainCategories';

export default function Home() {
  return (
    <div>
      <BreadCrumb />
      <Introduction />
      <MainCategories />
    </div>
  )
}
