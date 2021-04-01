import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useGlobalContext } from '../util/context'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isUserLoggedIn } = useGlobalContext()
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn() ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { location: rest.path } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
