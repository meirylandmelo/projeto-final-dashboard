import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  background-color: #363740;
  color: #a4a6b3;
  min-height: 100vh;
  width: 20%;
  min-width: 200px;
`
export const LogoSidebar = styled.div`
  padding: 20px;

  span {
    color: #dde2ff;
  }
`
export const Link = styled(NavLink)`
  color: #ffffff;
  display: flex;
  align-items: center;

  &:hover {
    color: #a4a6b3;
  }

  svg {
    margin-right: 12px;
    width: 20px;
  }
`

export const MenuSidebar = styled.ul`
  margin-left: 30px;
`

export const ListSidebar = styled.li`
  margin: 35px 0;
`
