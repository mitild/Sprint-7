import styled from "styled-components"

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  padding: 0 1em;
  margin-bottom: 3em;
  border-bottom: 3px solid #000;
`
const StyledUl = styled.ul`
  display: flex;
  gap: 1em;
  font-size: .8rem;
`

const StyledLi = styled.li`
  list-style: none;
  color: #000;
`


export { StyledNavbar, StyledUl, StyledLi }