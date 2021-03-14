import * as S from './button.styles'

export interface BtnProps {
  children: React.ReactNode
  action?: 'padrao' | 'submit' | 'add'
}

const Button = ({ children, action = 'padrao' }: BtnProps) => (
  <S.Button action={action}>{children}</S.Button>
)

export default Button
