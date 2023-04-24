import { Fragment } from 'react';
import Panel from '../Styled Form/Panel';
const Checkbox = ({ id, name, price, description, handleCheck, ischecked }) => {

  return (
      <Fragment key={ id } >
      <input 
        key={ id }
        type="checkbox"
        name={ name }
        id={ price }
        onChange={ handleCheck }
        ischecked={ ischecked }
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