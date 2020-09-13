import React from 'react';

const Result = (props) => {

   const {
      err,
      date,
      sunrise,
      sunset,
      temp,
      pressure,
      wind,
      city,
   } = props.weather

   let content = null

   if (!err && city) {
      // Wrong format in API so need to multiplication 
      const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
      const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

      content = (
         <div>
            <em>Pogoda dla miasta <strong>{city}</strong></em>
            <p>dzień i godzina : {date}</p>
            <p>temperatura aktualna : {temp} °C</p>
            <p>wiatr : {wind} m/s</p>
            <p>cisnienie : {pressure} hPa</p>
            <p>Wschód słońca dzisiaj o : {sunriseTime}</p>
            <p>Zachód słońca dzisiaj o : {sunsetTime}</p>
         </div>
      )
   }

   return (
      <div className="result">
         {err ? `nie mamy w bazie ${city}` : content}
      </div>
   );
}

export default Result;