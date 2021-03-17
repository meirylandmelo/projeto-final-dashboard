import { useDispatch } from 'react-redux'
import { postLoginRequest } from '../../store/ducks/login/actions'
import Button from '../Button'
import Input from '../Input'
import * as S from './styles'
import { useForm } from 'react-hook-form'

const FormLogin = () => {
  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(postLoginRequest(data))
  }

  return (
    <S.ContainerFormLogin method="POST" onSubmit={handleSubmit(onSubmit)}>
      <S.LabelForm>E-mail</S.LabelForm>
      <Input
        name="email"
        id="email-login"
        type="email"
        placeholder="Digite seu email"
        inputRef={register}
      />
      <S.LabelForm>Senha</S.LabelForm>
      <Input
        name="password"
        id="password-login"
        type="password"
        placeholder="Digite sua senha"
        inputRef={register}
      />
      <Button action="submit">Acessar</Button>
    </S.ContainerFormLogin>
  )
}

export default FormLogin
