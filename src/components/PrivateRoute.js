import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useGlobalContext } from '../util/context'

const PrivateRoute = ({ children, ...rest }) => {
  const { isLogin } = useGlobalContext()
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isLogin)
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        return <>{children}</>
      }}
    />
  )
}

export default PrivateRoute
