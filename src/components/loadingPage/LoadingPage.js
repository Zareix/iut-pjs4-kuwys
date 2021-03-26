import React from 'react'

import { AiOutlineLoading } from 'react-icons/ai'

const LoadingPage = () => {
  return (
    <div className=" m-auto h-screen grid items-center justify-center cursor-wait">
      <AiOutlineLoading className="animate-spin" size={40} />
    </div>
  )
}

export default LoadingPage
