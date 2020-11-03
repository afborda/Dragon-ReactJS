import React, { useRef } from 'react'
import LocalStorageService from '../../services/LocalStorageService'
import CustomButtom from '../../shared/customButtom'
import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'
import { CustomDiv, Center } from './style'

import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'
import { FormHandles, SubmitHandler } from '@unform/core'
import { usersMoks } from '../../mocks/login'
interface ILoginFormData {
  login: string
  password: string
}

const Login: React.FC = () => {
  const localStorageService = LocalStorageService()
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)

  const HandleSubmit: SubmitHandler<ILoginFormData> = async (
    { ...data },
    { reset }
  ) => {
    try {
      const { login } = data
      const user = usersMoks.find((user) => user.login === login)
      console.log(user)
      if (!user) return

      localStorageService.SetToken(user.token, user.name)

      history.push('/')
    } catch (error) {
      localStorageService.ClearToken()
      alert(error)
    }
  }

  return (
    <CustomDiv>
      <Center>
        <div>
          <div>
            <ProfileImage />
          </div>
          <Form ref={formRef} onSubmit={HandleSubmit}>
            <div>
              <Input
                name="login"
                required
                type="email"
                placeholder="Digite seu e-mail"
              />
              <Input
                name="password"
                required
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <CustomButtom type="submit" text="Entrar" />
          </Form>
        </div>
      </Center>
    </CustomDiv>
  )
}

export default Login
