import React from 'react';
import Forms from 'react-bootstrap/Form'

const Form = (props) => {
   return (
      <div className="m-5">
         <form className="form-control-lg">
            <input type="text" value={props.value} placeholder="Wpisz miasto" onChange={props.handleInputChange} />
         </form>
      </div>
   );
}

export default Form;