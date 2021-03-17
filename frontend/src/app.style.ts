import styled from 'styled-components'

interface AppWrapperProps {
  logged: boolean
}

interface ContainerAppProps {
  logged: boolean
}

export const AppWrapper = styled.div<AppWrapperProps>`
  ${({ logged }) =>
    logged &&
    `
    display: flex;
    width: 100%;
    min-height: 100vh;
  `}
`

export const ContainerApp = styled.div<ContainerAppProps>`
  ${({ logged }) =>
    logged &&
    `
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    width: 100%;
  `}
`
