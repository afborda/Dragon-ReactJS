import styled from 'styled-components'
import Dragon from '../../assets/img/dragao3x.png'

export const DivMain = styled.div`
  background: url(${Dragon}) no-repeat center, #b40909;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    width: 315px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const NameUser = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  font-weight: bold;
  margin: 20px 0;
`
export const Text = styled.p`
  font-size: 1.8rem;
  color: #fff;

  strong {
    font-weight: bold;
  }
`

export const DflexBetween = styled.div`
  display: flex;
  justify-content: space-between !important;
  flex-direction: row !important;
  width: 100%;
  p {
    margin: 20px 0;
  }
`
export const InitialText = styled.div`
  align-items: flex-start;
  margin: 20px 0;
`
