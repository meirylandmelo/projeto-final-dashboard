import Button from '../../components/Button'
import * as S from './products.style'
import * as G from '../../style'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  deleteBeerRequest,
  getListBeersRequest
} from '../../store/ducks/products/actions'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { Product } from '../../store/ducks/products/types'
import { Helmet } from 'react-helmet'

const Products = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state: any) => state.products)

  const { user } = useSelector((state: any) => state.login)

  useEffect(() => {
    if (user) {
      dispatch(getListBeersRequest())
    }
  }, [dispatch, user])

  return (
    <>
      <Helmet>
        <title>Produtos</title>
      </Helmet>
      <S.Products>
        <S.ProductsHeader>
          <S.ProductsCaption>
            <S.ProductsTitle>Produtos</S.ProductsTitle>
            <S.ProductsSubtitle>Gerencie seus produtos</S.ProductsSubtitle>
          </S.ProductsCaption>
          <Button action="add">
            <S.LinkAdd to="/products/add">Adicionar</S.LinkAdd>
          </Button>
        </S.ProductsHeader>

        <G.Table>
          <G.TableHeader>
            <G.TableRow>
              <G.TableHead>Rótulo</G.TableHead>
              <G.TableHead>Preço</G.TableHead>
              <G.TableHead>Descrição</G.TableHead>
              {user?.role === 'admin' && <G.TableHead>Ações</G.TableHead>}
            </G.TableRow>
          </G.TableHeader>

          <G.TableBody>
            {products.map((item: Product) => (
              <G.TableRow key={item.id}>
                <G.TableData>
                  <S.ProductsImage src={item.image} />
                  {item.title}
                </G.TableData>
                <G.TableData>{item.price}</G.TableData>
                <G.TableData>{item.description}</G.TableData>
                <G.TableData>
                  {user.role === 'admin' && (
                    <G.TableLink
                      onClick={() => dispatch(deleteBeerRequest(item.id))}
                    >
                      <RiDeleteBin5Fill />
                    </G.TableLink>
                  )}
                </G.TableData>
              </G.TableRow>
            ))}
          </G.TableBody>
        </G.Table>
      </S.Products>
    </>
  )
}

export default Products
