import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useUserAuth } from '../context/AuthProvider'

interface PrivateRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>
  name?: string
  path?: string
  exact?: boolean
}

const AuthenticatedRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...otherProps
}) => {
  const {
    userAuth: { token }
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useUserAuth()

  let isAuthenticate = false

  if (token) isAuthenticate = true

  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default AuthenticatedRoute
