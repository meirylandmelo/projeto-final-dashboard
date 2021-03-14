import Logo from '../Logo'
import * as S from './sidebar.styles'
import { RiUserSettingsLine } from 'react-icons/ri'
import { IoBeerOutline } from 'react-icons/io5'
import { RiSettings5Line } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <S.Container>
      <S.LogoSidebar>
        <Logo />
      </S.LogoSidebar>
      <S.MenuSidebar>
        <S.ListSidebar>
          <S.Link to="/user">
            <RiUserSettingsLine />
            Usuários
          </S.Link>
        </S.ListSidebar>
        <S.ListSidebar>
          <S.Link to="/products">
            <IoBeerOutline />
            Produtos
          </S.Link>
        </S.ListSidebar>
        <S.ListSidebar>
          <S.Link to="/home">
            <RiSettings5Line />
            Configurações
          </S.Link>
        </S.ListSidebar>
      </S.MenuSidebar>
    </S.Container>
  )
}

export default Sidebar
