import styled from "styled-components"

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2494941;
  padding: 0 1em;
  margin-bottom: 3em;
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