import styled from 'styled-components'
import { BtnProps } from '.'

export const Button = styled.button<BtnProps>`
  font-size: 1rem;
  border: none;
  height: 40px;
  text-transform: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${({ action }) => {
    if (action === 'submit') {
      return `
        background-color: #ffb831;
        color: #000000;
      `
    }

    if (action === 'add') {
      return `
        background-color: #51b469;
        color: #ffffff;
      `
    }
  }}
`
