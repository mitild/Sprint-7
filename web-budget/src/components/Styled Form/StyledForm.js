import styled from 'styled-components'

const StyledForm = styled.div`
  border: 3px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 3em 1em;
  margin: 1em 0;
`

const StyledInput = styled.input`
  margin-left: 1em;
`

export { StyledForm, StyledInput }