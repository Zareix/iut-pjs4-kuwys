import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingPage = () => {
  return (
    <div className=" m-auto h-screen grid items-center justify-center cursor-wait">
      <CircularProgress />
    </div>
  )
}

export default LoadingPage
