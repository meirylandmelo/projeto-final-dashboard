import Button from '../../components/Button'
import * as S from './users.style'
import * as G from '../../style'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  deleteUserRequest,
  getListUserRequest
} from '../../store/ducks/users/actions'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { User } from '../../store/ducks/users/types'

const Users = () => {
  const dispatch = useDispatch()
  const { users, login } = useSelector((state: any) => state)

  useEffect(() => {
    if (login.user) {
      dispatch(getListUserRequest())
    }
  }, [dispatch, login])

  return (
    <S.UserContainer>
      <S.UserHeader>
        <S.UserCaption>
          <S.UserTitle>Usuários</S.UserTitle>
          <S.UserText>Gerencie seus usuários</S.UserText>
        </S.UserCaption>
        <Button action="add">
          <S.LinkAdd to="/users/add">Adicionar</S.LinkAdd>
        </Button>
      </S.UserHeader>

      <G.Table>
        <G.TableHeader>
          <G.TableRow>
            <G.TableHead>Usuário</G.TableHead>
            <G.TableHead>Grupos</G.TableHead>
            <G.TableHead>Ações</G.TableHead>
          </G.TableRow>
        </G.TableHeader>
        <G.TableBody>
          {users.users.map((item: User) => (
            <G.TableRow key={item.id}>
              <G.TableData>{item.name}</G.TableData>
              <G.TableData>{item.role}</G.TableData>
              <G.TableData>
                <G.TableLink
                  onClick={() => dispatch(deleteUserRequest(item.id))}
                >
                  <RiDeleteBin5Fill />
                </G.TableLink>
              </G.TableData>
            </G.TableRow>
          ))}
        </G.TableBody>
      </G.Table>
    </S.UserContainer>
  )
}

export default Users
