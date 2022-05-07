import React from 'react'
import '../Styles/Home.css'
import '../Styles/ComponentStyle.css'
//Components

import hero from '../Images/SPACE-DOPOT.png'
import Service1 from '../Images/Service.png'

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
                                <h3>Entra nell'applicazione</h3>
                            </div>
                            <div className='f-description'>
                                <p>Inserisci le tue informazioni, collega 
                                    il tuo metamask e aspetta la verifica.  
                                </p>
                            </div>
                        </div>
                        <div className='function'>
                            <div className='f-image'>
                                
                            </div>
                            <div className='f-title'>
                                <h3>Connetti il wallet</h3>
                            </div>
                            <div className='f-description'>
                                <p>Per garantire la massima sicurezza 
                                    il tuo account sarà verificato dai nostri server.
                                </p>
                            </div>
                        </div>
                        <div className='function'>
                            <div className='f-image'>

                            </div>
                            <div className='f-title'>
                                <h3> Inizia a investire</h3>
                            </div>
                            <div className='f-description'>
                                <p>Ora potrai cercare e analizzare tutti i progetti 
                                    su Dopot, che la ricerca abbia inizio!
                                </p>
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
                    {/* SERVICE 1 */}
                    <div className='service'>
                        <div className='s-title'>
                            <h1>Meno Burocrazia grazie agli Smart Contract</h1>
                        </div>
                        <div className='s-subtitle'>
                            <p>La prima piattaforma su blockchain di equity crowdfunding che utilizza le 
                                criptovalute per velocizzare e ampliare il mercato finanziario in Italia
                            </p>
                        </div>
                        <div className='s-image'>
                            <img src={Service1}/>
                        </div>
                    </div>
                    {/* SERVICE 2 */}
                    <div className='service inverse'>
                        <div className='s-title'>
                            <h1>Transazioni veloci</h1>
                        </div>
                        <div className='s-subtitle'>
                            <p>La prima piattaforma su blockchain di equity crowdfunding che utilizza le 
                                criptovalute per velocizzare e ampliare il mercato finanziario in Italia
                            </p>
                        </div>
                        <div className='s-image'>
                            <img src={Service1}/>
                        </div>
                    </div>
                    {/* SERVICE 3 */}
                    <div className='service'>
                        <div className='s-title'>
                            <h1>Nessun intermediario</h1>
                        </div>
                        <div className='s-subtitle'>
                           <p> La prima piattaforma su blockchain di equity crowdfunding che utilizza le 
                                criptovalute per velocizzare e ampliare il mercato finanziario in Italia
                            </p>
                        </div>
                        <div className='s-image'>
                            <img src={Service1}/>   
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='roadmap'>
                    <h1>ROADMAP</h1>
                    <div className='phases'>
                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Mercurio</h1>
                            </div>
                            <div className='p-description'>
                                <p>Apertura ufficiale della prima 
                                    sezione di Reward crowdfunding
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Venere</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Vendita agli utenti di NFT limitati
                                    direttamente sulla piattaforma
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Terra</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Lancio del token Dopot sulla
                                    blockchain e apertura IDO
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Luna</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Istituzione della DAO interna
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Marte</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Apertura sezione "Equity"
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Giove</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Apertura sezione "Lending"
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Saturno</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Ultimazione della piattaforma
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Uranio</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Apertura ufficiale della prima 
                                    sezione di Reward crowdfunding
                                </p>
                            </div>
                        </div>

                        <div className='phase'>
                            <div className='p-image'>
                                image
                            </div>
                            <div className='p-title'>
                                <h1>Fase Plutone</h1>
                            </div>
                            <div className='p-description'>
                                <p>
                                Apertura ufficiale della prima 
                                sezione di Reward crowdfunding
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
