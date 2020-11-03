import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'

import Routes from './routes/routes'
import { GlobalStyles } from './styles/global'

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
