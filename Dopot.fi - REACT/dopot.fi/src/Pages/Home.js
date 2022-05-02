import React from 'react'
import '../Styles/Home.css'
import '../Styles/ComponentStyle.css'
//Components

import hero from '../Images/SPACE-DOPOT.png'

function Home() {
    return (
        <div className='Homepage'>

            <div className='hero'>
                {/* <img src={hero}/> */}
                <div className='hero-text'>
                    <div className='hero-title'>
                        <h1>Un sogno possibile grazie alla Blockchain</h1>
                        <p>La prima piattaforma su blockchain di equity crowdfunding che utilizza le criptovalute per velocizzare e ampliare il mercato finanziario in Italia</p>
                    </div>

                    <div className='hero-buttons'>
                        <input className='button' type='button' value='ENTER THE APP'/>
                        <button className='button'>WHITE PAPER</button>
                    </div>
                </div>          

            </div>
        </div>
    )
}

export default Home
