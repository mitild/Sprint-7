import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2em;
  border-left: 3px solid #000;
  transition: all .6s;
  @media (max-width: 952px) {
    border-left: none !important;
    border-top: 3px solid #000;
    text-align: center;
    margin-top: 2em;
    grid-column-start: 1;
    grid-column-end: -1;
  }
`

const StyledUl = styled.ul`
  padding: 0;
`

const StyledLi = styled.li`
  margin-bottom: .7em;
  list-style: none;
  padding-bottom: .4em;
`

const StyledSidebarBtn = styled.button`
  cursor: pointer;  
  background-color: #FFF;
  border: 2px solid #F27052;
  color: #F27052;
  padding: .6em;
  margin-top: .4em;
  &:hover {
    background-color: #F27052;
    color: #FFF;
  }
`
const StyledHr = styled.hr`
  border: 1px solid #F27052;
  margin-top: 1.5em;
`

const StyledInput = styled.input`
  border: 2px solid #F27052;
  border-radius: 20px;
  height: 35.5px;
  text-indent: 1em;
  &:focus-visible {
    outline: none;
    background-color: #f26f52d0;
    color: #FFF;
    font-weight: 700;
  }
`
export { StyledContainer, StyledUl, StyledLi, StyledSidebarBtn, StyledHr, StyledInput }