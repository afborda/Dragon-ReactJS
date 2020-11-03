import React, { useRef } from 'react'
import CustomButtom from '../../shared/customButtom'
import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'
import { CustomDiv, Center } from './style'

import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'
import { FormHandles, SubmitHandler } from '@unform/core'
import { usersMoks } from '../../mocks/login'

import { useUserAuth } from '../../context/AuthProvider'
interface ILoginFormData {
  login: string
  password: string
}

const Login: React.FC = () => {
  const { setUserAuth } = useUserAuth()
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)

  const HandleSubmit: SubmitHandler<ILoginFormData> = async ({ ...data }) => {
    try {
      const { password } = data
      const user = usersMoks.find((user) => user.password === password)

      if (!user) {
        return
      } else {
        setUserAuth(user)
        history.push('/')
      }
    } catch (error) {
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
