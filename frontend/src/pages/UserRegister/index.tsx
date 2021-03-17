import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './userRegister.style'
import * as G from '../../style'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { postAddUserRequest } from '../../store/ducks/users/actions'
import Select from '../../components/Select'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'

const UserRegister = () => {
  const history = useHistory()

  const { error } = useSelector((state: any) => state.products)

  const { register, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(postAddUserRequest(data))

    if (!error) {
      history.push('/users')
    }
  }

  return (
    <>
      <Helmet>
        <title>Usuarios</title>
      </Helmet>
      <S.UserRegister>
        <S.TitleRegister>Novo Usuário</S.TitleRegister>
        <S.Form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <Input
            name="name"
            id="name"
            type="text"
            placeholder="Digite seu nome"
            inputRef={register({ required: true })}
          />
          {errors.name && <G.Error>Campo nome é obrigatório</G.Error>}

          <label htmlFor="email">Email</label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Digite seu email"
            inputRef={register({ required: true })}
          />
          {errors.email && <G.Error>Campo obrigatório</G.Error>}

          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Digite uma senha"
            inputRef={register({ required: true })}
          />
          {errors.password && <G.Error>Campo obrigatório</G.Error>}

          <label htmlFor="role">Grupo</label>
          <Select
            name="role"
            id="role"
            selectRef={register}
            options={[
              { value: '', label: 'Selecionar' },
              { value: 'admin', label: 'Admin' },
              { value: 'editor', label: 'Editor' }
            ]}
          />
          <Button action="submit">Salvar</Button>
        </S.Form>
      </S.UserRegister>
    </>
  )
}

export default UserRegister
