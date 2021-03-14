import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './userRegister.style'

const UserRegister = () => {
  return (
    <S.ContainerRegister>
      <S.TitleRegister>Novo Usuário</S.TitleRegister>
      <label>Nome</label>
      <Input name="nome" id="" type="text" placeholder="Digite seu nome" />
      <label>Email</label>
      <Input name="email" id="" type="email" placeholder="Digite seu email" />
      <label>Senha</label>
      <Input name="nome" id="" type="password" placeholder="Digite uma senha" />
      <Button action="submit">Enviar</Button>
    </S.ContainerRegister>
  )
}

export default UserRegister
