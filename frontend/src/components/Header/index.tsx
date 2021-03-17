import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserRequest } from '../../store/ducks/login/actions'
import * as S from './header.style'

const Header = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: any) => state.login)

  useEffect(() => {
    dispatch(getUserRequest(user.sub))
  }, [dispatch, user.sub])

  return (
    <S.ContainerHeader>
      <S.TitleHeader>Dashboard</S.TitleHeader>
      <S.UserHeader>Olá, {user.name}!</S.UserHeader>
    </S.ContainerHeader>
  )
}

export default Header
