import React from 'react'

import { AiOutlineLoading } from 'react-icons/ai'

const LoadingPage = () => {
  return (
    <div className="w-1/5 m-auto h-screen grid items-center justify-center">
      <AiOutlineLoading className="animate-spin" size={40} />
    </div>
  )
}

export default LoadingPage
