import * as S from './button.styles'

export interface BtnProps {
  children: React.ReactNode
  action?: 'padrao' | 'submit' | 'add'
  onClick?: any
}

const Button = ({ children, action, onClick }: BtnProps) => (
  <S.Button action={action} onClick={onClick}>
    {children}
  </S.Button>
)

export default Button
