import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 8px;
`
const Text = styled.Text`
  color: ${(props) => props.theme.colors.light};
  font-size: 16px;
`

interface Props {}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export default Button
