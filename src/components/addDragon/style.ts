import styled from 'styled-components'
import Dragon from '../../assets/img/dragao3x.png'

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

export const Center = styled.div`
  height: 100%;
`
