import { StyledContainer, StyledLi } from "./StyledSidebar"
import { nanoid } from "nanoid"

const Sidebar = ({array}) => {

  const budgets = array.map(budgetItem => {

    const { budget, client, services, totalPrice, date } = budgetItem

    const allServices = services.map(service => {
      if(service.name === 'checkWeb'){
        return {service: `Sitio web con ${service.extras.pages + service.extras.languages} extras` }
      } else if( service.name === 'checkSeo'){
        return {service: 'Servicio de posicionamiento SEO'}
      } else {
        return {service: 'Campaña de Google Ads'}
      }
    })

    const serviceEl = allServices.map(el => {
      return (
        <i key={ nanoid() }>{` - ${el.service}`}</i>
      )
    })

    console.log(serviceEl)
    return(
        <StyledLi key={ nanoid() }>
          <b>Presupuesto: </b>{ budget } <b>Cliente: </b>{ client } <b>Servicios: </b>{ serviceEl }  <b>Total: </b>{ totalPrice } <b>Fecha: </b>{ date }
        </StyledLi> 
    )
  })

  return (
    <StyledContainer className="sidebar">
      <h1>Tus Presupuestos</h1>
      <ul>
        { budgets }
      </ul>
    </StyledContainer>
  )
}

export default Sidebar