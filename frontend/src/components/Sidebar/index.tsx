import Logo from '../Logo'
import * as S from './sidebar.styles'
import { RiUserSettingsLine } from 'react-icons/ri'
import { IoBeerOutline } from 'react-icons/io5'
import { RiSettings5Line } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { user } = useSelector((state: any) => state.login)

  return (
    <S.Container>
      <S.LogoSidebar>
        <Logo to="/home" />
      </S.LogoSidebar>
      <S.MenuSidebar>
        {user.role === 'admin' && (
          <S.ListSidebar>
            <S.Link to="/users">
              <RiUserSettingsLine />
              Usuários
            </S.Link>
          </S.ListSidebar>
        )}
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
