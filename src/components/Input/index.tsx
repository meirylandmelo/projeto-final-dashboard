import * as S from './input.styles'

export interface InputProps {
  name: string
  id: string
  type: string
  placeholder: string
}

const Input = ({
  name = 'name',
  id = 'id',
  type = 'type',
  placeholder = 'placeholder'
}: InputProps) => (
  <S.Input name={name} id={id} type={type} placeholder={placeholder} />
)

export default Input
