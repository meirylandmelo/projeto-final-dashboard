import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './home.style'
import { getListUserRequest } from '../../store/ducks/users/actions'
import { getListBeersRequest } from '../../store/ducks/products/actions'

const Home = () => {
  const { products, users } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListUserRequest())
    dispatch(getListBeersRequest())
  }, [dispatch])

  return (
    <S.ContainerHome>
      {users.users && (
        <S.UserCard>
          <S.UserTitle>Usuários</S.UserTitle>
          <S.UserScore>{users.users.length}</S.UserScore>
        </S.UserCard>
      )}

      {products.products && (
        <S.UserCard>
          <S.UserTitle>Produtos</S.UserTitle>
          <S.UserScore>{products.products.length}</S.UserScore>
        </S.UserCard>
      )}
    </S.ContainerHome>
  )
}

export default Home
