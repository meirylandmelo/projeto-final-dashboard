import * as S from './input.style'

export interface InputProps {
  name: string
  id: string
  type: string
  placeholder?: string
  defaultValue?: string
  inputRef?: any
  error?: any
}

const Input = ({
  name = 'name',
  id = 'id',
  type = 'type',
  placeholder = 'placeholder',
  inputRef,
  ...rest
}: InputProps) => (
  <S.Input
    name={name}
    id={id}
    type={type}
    placeholder={placeholder}
    ref={inputRef}
    {...rest}
  />
)

export default Input
