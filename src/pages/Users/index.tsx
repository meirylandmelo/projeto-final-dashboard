import Button from '../../components/Button'
import * as S from './users.style'
import * as G from '../../style'

const Users = () => {
  return (
    <S.UserContainer>
      <S.UserHeader>
        <S.UserCaption>
          <S.UserTitle>Usuários</S.UserTitle>
          <S.UserText>Gerencie seus usuários</S.UserText>
        </S.UserCaption>
        <Button action="add">Adicionar</Button>
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
          <G.TableRow>
            <G.TableData>Meiry</G.TableData>
            <G.TableData>Admin</G.TableData>
            <G.TableData>Icone</G.TableData>
          </G.TableRow>
        </G.TableBody>
      </G.Table>
    </S.UserContainer>
  )
}

export default Users
