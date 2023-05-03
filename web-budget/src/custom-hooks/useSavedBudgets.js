import {StyledLi, StyledHr} from '../components/StyledSidebar/StyledSidebar';
import {nanoid} from 'nanoid';
import {useState} from 'react';

const useSavedBudget = (array, handleArray) => {
  // State holding the current search
  const [ searchTerm, setSearchTerm ] = useState('')
  // Update the searched for value
  const handleSearch = (e) => {
    const { value } = e.target
    setSearchTerm(value)
  }

  // Interactive array filtered by the search input value
  const searchResults = array.map(budget => {
    if(searchTerm == '') {
      return budget
    }
    else if(budget.budget.toLowerCase().includes(searchTerm.toLowerCase())){
      return budget
    }
  }).filter(each => each !== undefined)

  // Sorting buttons
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

  const budgets = searchResults.map(budgetItem => {

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

  // Conditionally render search results or "Not Found" message
  const budgetsNotFound = budgets.length === 0 ? 'Lo siento no hemos podido encontrar ningún budget con ese nombre' : budgets

  return [ handleSortBtns, budgetsNotFound, handleSearch, searchResults ]
}

export default useSavedBudget