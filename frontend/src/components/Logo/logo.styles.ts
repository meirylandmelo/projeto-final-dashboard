import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Logo = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleLogo = styled.h5``

export const LinkRedirect = styled(Link)`
  color: #9fa2b4;
  font-weight: 500;

  &:hover {
    color: #9fa2b4;
  }
`
