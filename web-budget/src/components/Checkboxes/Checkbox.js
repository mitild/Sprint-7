import { Fragment } from 'react';
const Checkbox = ({ id, name, price, description, handleCheck, ischecked }) => {

  return (
      <Fragment key={ id } >
      <input 
        key={ id }
        type="checkbox"
        name={ name }
        id={ price }
        onChange={ handleCheck }
        checked={ ischecked ? true : false }
      />
      <label 
        key={ name }
        htmlFor={ price }>{ description }
      </label>
      <br/> 
      </Fragment>
  )
}

export default Checkbox