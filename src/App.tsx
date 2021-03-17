import Header from './components/Header'
import Sidebar from './components/Sidebar'
import * as S from './app.style'
import Routes from './routes'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const App = () => {
  const { accessToken } = useSelector((state: any) => state.login)

  const history = useHistory()

  const location = useLocation()

  useEffect(() => {
    console.log(location)
    if (location.pathname !== '/' && !accessToken) {
      history.push('/')
    }
  }, [location, accessToken, history])

  return (
    <S.AppWrapper logged={accessToken ? true : false}>
      {accessToken && <Sidebar />}
      <S.ContainerApp logged={accessToken ? true : false}>
        {accessToken && <Header />}
        <Routes />
      </S.ContainerApp>
    </S.AppWrapper>
  )
}

export default App
