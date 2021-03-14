import styled from 'styled-components'
import background from '../../images/bg.jpg'

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  min-width: 300px;
  width: 35%;
  background-color: #ffffff;
  padding: 40px 60px;
`

export const TitleLogin = styled.h1``

export const BackgroundLogin = styled.div`
  background-image: url('${background}');
  width: 65%;
  height: 100vh;
  background-size: cover;
  background-position: top center;
`
