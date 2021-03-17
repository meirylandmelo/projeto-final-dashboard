import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const UserContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
`

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserCaption = styled.div`
  width: 100%;
  line-height: 1.5;
`

export const UserTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const UserText = styled.p`
  color: #9fa2b4;
`

export const LinkAdd = styled(Link)`
  color: #ffffff;
  font-weight: 500;

  &:hover {
    color: #ffffff;
  }
`
