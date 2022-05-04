import React from 'react'
import '../Styles/Home.css'
import '../Styles/ComponentStyle.css'
//Components

import hero from '../Images/SPACE-DOPOT.png'

function Home() {
    return (
        <>
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

            <section>
                <div className='descrizione-dopot'>
                    <div className='testo-descrizione'>
                        <h2>Cos'è Dopot?</h2>
                        <p>
                            Dopot è il primo progetto di equity crowdfounding in Italia,

                            l'idea nasce nel 2017 quando l'esigenza di raccogliere

                            fondi per il finanziamento di progetti incontra una possibilità

                            chiamata blockchain e finanza decentralizzata. 
                        </p>
                    </div>
                </div>
            </section>
            
            <section>
                <div className='functionalities'>
                    <h2>Investi nei progetti in cui credi!</h2>
                    <p>Inizia subito a investire seguendo questi step.</p>
                    <div className='functions'>
                        <div className='function'>
                            <div className='f-image'>
                                
                            </div>
                            <div className='f-title'>
                                Entra nell'applicazione
                            </div>
                            <div className='f-description'>
                            Inserisci le tue informazioni, collega 
                            il tuo metamask e aspetta la verifica.  
                            </div>
                        </div>
                        <div className='function'>
                            <div className='f-image'>
                                
                            </div>
                            <div className='f-title'>
                                Connetti il wallet
                            </div>
                            <div className='f-description'>
                                Per garantire la massima sicurezza 
                                il tuo account sarà verificato dai nostri server.
                            </div>
                        </div>
                        <div className='function'>
                            <div className='f-image'>

                            </div>
                            <div className='f-title'>
                                Inizia a investire
                            </div>
                            <div className='f-description'>
                                Ora potrai cercare e analizzare tutti i progetti 
                                su Dopot, che la ricerca abbia inizio!
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='f-button'>
                    <input className='button' type='button' value='ENTER THE APP'/>
                </div>
            </section>
            
            <section>
                <div className='services'>

                </div>
            </section>

            <section>
                <div className='roadmap'>

                </div>
            </section>
        </>
    )
}

export default Home
