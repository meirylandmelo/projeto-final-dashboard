import { NavLink } from 'react-router-dom'
import FormLogin from '../../components/FormLogin'
import Logo from '../../components/Logo'
import * as S from './login.styles'

const Login = () => {
  return (
    <S.PageWrapper>
      <S.Container>
        <Logo />
        <S.TitleLogin>Acessar</S.TitleLogin>
        <FormLogin />
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </S.Container>
      <S.BackgroundLogin />
    </S.PageWrapper>
  )
}

export default Login
