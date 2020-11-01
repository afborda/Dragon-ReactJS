import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Dragon from '../assets/img/dragao3x.png'

export const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  font-size:62.5%;
}

html,body, #__next{
  height:100%;
}

body{
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

export const CustomDiv = styled.div`
  background: url(${Dragon}) no-repeat center, #b40909;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
