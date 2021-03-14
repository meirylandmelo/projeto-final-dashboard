import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './productRegister.style'

const ProductRegister = () => {
  return (
    <S.ContainerRegister>
      <S.TitleRegister>Cadastrar Produto</S.TitleRegister>
      <label>Rótulo</label>
      <Input name="nome" id="" type="text" placeholder="Digite seu nome" />
      <label>Preço</label>
      <Input name="email" id="" type="text" placeholder="Digite seu email" />
      <label>Descriçao</label>
      <Input name="nome" id="" type="text" placeholder="Digite uma senha" />
      <Button action="submit">Cadastrar</Button>
    </S.ContainerRegister>
  )
}

export default ProductRegister
