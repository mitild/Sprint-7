import { Fragment, useState } from 'react';
import Checkbox from '../Checkboxes/Checkbox'
import CustomInput from '../StyledForm/CustomInput'
import { useBudget } from "../../custom-hooks/useBudget"
import { useLocalStorage } from "../../custom-hooks/useLocalStorage"

const Budget = ({ modalState, handleModal }) => {
  // Import the Custom Hook for handling the budgets
const { withExtras, setWithExtras, handleWebBudget } = useBudget()
// State with total of selected checkboxes
const [ total, setTotal ] = useLocalStorage('Total', 0)

// Total cost of the extras
const pagesQty = withExtras[0].extras.pages
const languagesQty = withExtras[0].extras.languages
const totalExtras = (pagesQty + languagesQty) * 30

// Handle the checkboxes selection
const handleCheck = (e) => {
  const { name, checked } = e.target
  let prices = []

  withExtras.filter(box => {
    if(box.name === name) {
      box.isChecked = checked
    }
    return box
  })

  withExtras.filter(box => {
    if(box.isChecked) {
      prices.push(box.price)
    }
  })
  
   // Reset extras to 0 when Web Page service is no longer checked
   const resetExtras = withExtras.map(service => {
    return service.name === 'checkWeb' && !service.isChecked ? {...service, extras: {pages: 0, languages: 0}} : service
   })

  setWithExtras(resetExtras)
  setTotal(prices.reduce((a,b)=> a + b, 0))
}

// Get the checkboxes. Can add as many as wanted by adding to the data.js array
const form = withExtras.map(({ name, description, price, id, isChecked, extras }) => {

  // Conditional rendering of extra services
  const Option = isChecked && name === 'checkWeb' ?
    <>
      <CustomInput
        onchange={ handleWebBudget }
        pageValue={extras.pages}
        langValue={extras.languages}
        modalState={ modalState }
        handleModal={ handleModal }
      />
    </>
    :
    undefined

  return (
    <Fragment key={ id } >
    <Checkbox
      key={ id }
      name={ name }
      id={ price }
      handleCheck={ handleCheck }
      description={ description }
      ischecked={ isChecked }
    />
    { Option }
    </Fragment>
  )
})

  return (

      <div className="container">
        <h3>¿Qué quieres hacer?</h3>
        <div>
          { form }
        </div>
        <h3>Precio: { total + totalExtras }€</h3>
      </div>

  );
}

export default Budget