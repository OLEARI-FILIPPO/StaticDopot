import React, { useState } from "react";
import '../Styles/Popup.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

function Popup() {
     const [checked, setChecked] = useState(true);
  return (
     <div class="container">
          <input type="checkbox" id="check" checked={checked ? 'checked': ''}/>
         {/*  <label class="show_button" for="check">Click Me</label> */}
          <div class=" background-popup"></div> 
          <div class="alert_box">
               <div class="icon">
                    <FontAwesomeIcon icon={faExclamation} />
               </div>
               <header>Attenzione</header>
               <p>Sito in lavorazione</p>
               <div class="btns">
                    <label for="check" onClick={ ()=> setChecked(false)}>OK</label>
               </div>
          </div>
     </div>
  )
}

export default Popup