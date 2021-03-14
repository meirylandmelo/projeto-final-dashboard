import * as S from './home.style'

const Home = () => {
  return (
    <S.ContainerHome>
      <S.UserCard>
        <S.UserTitle>Usuários</S.UserTitle>
        <S.UserScore>60</S.UserScore>
      </S.UserCard>

      <S.UserCard>
        <S.UserTitle>Produtos</S.UserTitle>
        <S.UserScore>16</S.UserScore>
      </S.UserCard>
    </S.ContainerHome>
  )
}

export default Home
