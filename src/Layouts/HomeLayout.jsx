import React from 'react'
import Home from '../Pages/Home';
import Topbar from '../components/common/Topbar';

export default function HomeLayout() {
  return (
    <div className='home-component'>
        <Topbar/>
      <Home/>
    </div>
  )
}
