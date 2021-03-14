import * as S from './logo.styles'
import { ReactComponent as Brand } from '../../images/brand.svg'

const Logo = () => {
  return (
    <S.Logo>
      <Brand />
      <S.TitleLogo>ADMIN</S.TitleLogo>
    </S.Logo>
  )
}

export default Logo
