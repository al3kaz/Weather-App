import React from 'react';

const Form = (props) => {
   return (
      <div>
         <form onSubmit={props.handleCitySubmit}>
            <input type="text" value={props.value} placeholder="Wpisz miasto" onChange={props.handleInputChange} />
            <button>Wyszukaj miasta</button>
         </form>
      </div>
   );
}

export default Form;