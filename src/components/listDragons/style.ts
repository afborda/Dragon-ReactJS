import styled from 'styled-components'

export const CustomDiv = styled.div`
  background-color: #b40909;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .link a {
    color: #fff;
  }
`

export const ContainerDiv = styled.div`
  width: 241px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ImaIcon = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 5px;
`
export const Wellcome = styled.h2`
  color: #fff;
  font-size: 1.6rem;
  margin: 15px 0;
`

export const ConfigTame = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid #fff;

  div h2 {
    color: #fff;
  }
`

export const ListDragons = styled.div`
  width: 100%;
  border-bottom: 1px solid #fff;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    p {
      color: #fff;
      font-size: 1.6rem;
    }
  }
`
