import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/routes'
import GlobalStyles from './styles/global'
const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
