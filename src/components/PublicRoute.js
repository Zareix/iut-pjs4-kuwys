import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useGlobalContext } from '../util/context'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isUserLoggedIn } = useGlobalContext()
  console.log(isUserLoggedIn() && restricted)
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn() && restricted ? (
          <Redirect to="/accueil" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
