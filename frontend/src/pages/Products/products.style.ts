import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Products = styled.div`
  background-color: #ffffff;
  padding: 30px;
`

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductsCaption = styled.div`
  width: 100%;
  line-height: 1.5;
`

export const ProductsTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const ProductsSubtitle = styled.p`
  color: #9fa2b4;
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductsHeaderList = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  padding: 20px 0;
`

export const ProductsTitleList = styled.h4`
  font-weight: 700;
  color: #252733;
`
export const LinkAdd = styled(Link)`
  color: #ffffff;
  font-weight: 500;

  &:hover {
    color: #ffffff;
  }
`

export const ProductsImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  background-color: #ffffff;
  padding: 5px;
`
