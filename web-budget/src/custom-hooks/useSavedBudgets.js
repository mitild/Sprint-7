import {StyledLi, StyledHr} from '../components/StyledSidebar/StyledSidebar';
import {nanoid} from 'nanoid';

const useSavedBudget = (array, handleArray) => {

  const handleSortBtns = (e) => {
    const { id } = e.target 
    if (id === 'alpha') {
      handleArray(prev => [...prev].sort((a, b) => a.budget.localeCompare(b.budget)))
    } else if (id === 'old') {
      handleArray(prev => [...prev].sort((a, b) => new Date(a.date) - new Date(b.date)))
    } else if (id === 'new'){
      handleArray(prev => [...prev].sort((a, b) => new Date(b.date) - new Date(a.date)))
    }
  }

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

    return(
        <StyledLi key={ nanoid() }>
          <b>Presupuesto: </b>{ budget } <b>Cliente: </b>{ client } <b>Servicios: </b>{ serviceEl }  <b>Total: </b>{ totalPrice } <b>Fecha: </b>{ date } <StyledHr></StyledHr>
        </StyledLi> 
    )
  })

  return [ handleSortBtns, budgets ]
}

export default useSavedBudget