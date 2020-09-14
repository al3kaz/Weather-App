import React from 'react';

const Form = (props) => {
   return (
      <div className="form">
         <input type="text" value={props.value} placeholder="Wpisz miasto" onChange={props.handleInputChange} />
      </div>
   );
}

export default Form;