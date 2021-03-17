import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './productRegister.style'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { postAddBeerRequest } from '../../store/ducks/products/actions'
import { Helmet } from 'react-helmet'
import * as G from '../../style'
import { useHistory } from 'react-router-dom'

const ProductRegister = () => {
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm()

  const { error } = useSelector((state: any) => state.products)

  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(postAddBeerRequest(data))

    if (!error) {
      history.push('/products')
    }
  }

  return (
    <>
      <Helmet>
        <title>Produtos</title>
      </Helmet>
      <S.RegisterProduct>
        <S.TitleRegister>Cadastrar Produto</S.TitleRegister>

        <S.Form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Rótulo</label>
          <Input
            name="title"
            id="title"
            type="text"
            placeholder="Nome"
            inputRef={register({ required: true })}
          />
          {errors.title && <G.Error>Campo obrigatório</G.Error>}
          <label htmlFor="image">Imagem</label>
          <Input
            name="image"
            id="image"
            type="text"
            placeholder="Carregar imagem"
            inputRef={register({ required: true })}
          />
          {errors.image && <G.Error>Campo obrigatório</G.Error>}

          <label htmlFor="price">Preço</label>
          <Input
            name="price"
            id="price"
            type="text"
            defaultValue="R$"
            inputRef={register({ required: true })}
          />
          {errors.title && <G.Error>Campo obrigatório</G.Error>}

          <label htmlFor="description">Descriçao</label>
          <Input
            name="description"
            id="description"
            type="text"
            placeholder="Descrição"
            inputRef={register}
          />
          <Button action="submit">Cadastrar</Button>
        </S.Form>
      </S.RegisterProduct>
    </>
  )
}

export default ProductRegister
