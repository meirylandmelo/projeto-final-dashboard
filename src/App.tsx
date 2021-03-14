import Header from './components/Header'
import Sidebar from './components/Sidebar'
import * as S from './app.style'
import Routes from './routes'

const App = () => {
  return (
    <S.AppWrapper>
      <Sidebar />
      <S.ContainerApp>
        <Header />
        <Routes />
      </S.ContainerApp>
    </S.AppWrapper>
  )
}

export default App
