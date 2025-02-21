import React from 'react';
import Introduction from './components/Introduction';
import BreadCrumb from './components/BreadCrumb';

export default function Home() {
  return (
    <div>
      <BreadCrumb />
      <Introduction />
    </div>
  )
}
