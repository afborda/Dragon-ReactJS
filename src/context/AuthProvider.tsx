import React from 'react'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext
} from 'react'

interface UserAuth {
  id: string
  name: string
  login: string
  password: string
  token: string
}

export const AuthContext = createContext<{
  state: UserAuth
  dispatch: Dispatch<SetStateAction<UserAuth>>
}>({
  state: {
    id: '',
    login: '',
    name: '',
    token: '',
    password: ''
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {}
})

const AuthProvider: React.FC = ({ children }) => {
  const INITIAL_STATE = {
    id: '',
    login: '',
    name: '',
    token: '',
    password: ''
  }

  const [state, dispatch] = useState<UserAuth>(INITIAL_STATE)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

const useUserAuth = () => {
  const context = useContext(AuthContext)
  const { state: userAuth, dispatch: setUserAuth } = context
  return { userAuth, setUserAuth }
}

export { AuthProvider, useUserAuth }
