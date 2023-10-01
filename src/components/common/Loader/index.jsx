import React from 'react'
import { Space, Spin } from 'antd';
export default function Loader() {
  return (
    <div className='loader'>
        <div className="loading-message">Ruk jaa Bhai.. net slow hai tera</div>
        <Space size="middle"></Space>
       <Spin size="large" />
    </div>
  )
}
