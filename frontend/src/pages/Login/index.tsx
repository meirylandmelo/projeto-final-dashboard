import FormLogin from '../../components/FormLogin'
import Logo from '../../components/Logo'
import * as S from './login.styles'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const { accessToken } = useSelector((state: any) => state.login)

  return (
    <>
      {accessToken ? (
        <Redirect to="/home" />
      ) : (
        <S.PageWrapper>
          <S.Container>
            <Logo to="/" />
            <S.TitleLogin>Acessar</S.TitleLogin>
            <FormLogin />
          </S.Container>
          <S.BackgroundLogin />
        </S.PageWrapper>
      )}
    </>
  )
}

export default Login
