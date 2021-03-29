import React, { useEffect } from 'react'

import { Route, Redirect } from 'react-router-dom'

import API from '../util/api'
import { useGlobalContext } from '../util/context'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLogin } = useGlobalContext()

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    }
    API.get('/user/' + user.username + '/notifications', config).then((res) => {
      user.notifications = res.data
    })
  })

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isLogin)
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        return <div>{children}</div>
      }}
    />
  )
}

export default PrivateRoute
