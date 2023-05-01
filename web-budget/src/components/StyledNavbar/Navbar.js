import { Link } from "react-router-dom"
import { StyledNavbar, StyledUl, StyledLi } from "./StyledNavbar"

const Navbar = () => {
  return (
    <StyledNavbar>
      <h3><Link to={'/'}>e-Budget</Link></h3>
      <nav>
        <StyledUl>
          <StyledLi><Link to={'/'}>HOME</Link></StyledLi>
          <StyledLi><Link to={'/budget'}>BUDGET</Link></StyledLi>
        </StyledUl>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar