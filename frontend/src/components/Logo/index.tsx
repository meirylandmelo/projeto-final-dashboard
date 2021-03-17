import * as S from './logo.styles'
import { ReactComponent as Brand } from '../../images/brand.svg'

export interface LogoProps {
  to: string
}

const Logo = ({ to }: LogoProps) => {
  return (
    <S.LinkRedirect to={to}>
      <S.Logo>
        <Brand />
        <S.TitleLogo>ADMIN</S.TitleLogo>
      </S.Logo>
    </S.LinkRedirect>
  )
}

export default Logo
