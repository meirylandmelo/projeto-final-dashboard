import Button from '../Button'
import Input from '../Input'
import * as S from './styles'

const FormLogin = () => {
  return (
    <S.ContainerFormLogin>
      <S.LabelForm>E-mail</S.LabelForm>
      <Input
        name="Email"
        id="email-login"
        type="email"
        placeholder="Digite seu email"
      />
      <S.LabelForm>Senha</S.LabelForm>
      <Input
        name="Senha"
        id="password-login"
        type="password"
        placeholder="Digite sua senha"
      />
      <Button action="submit">Acessar</Button>
    </S.ContainerFormLogin>
  )
}

export default FormLogin
