import React from 'react'
import '../Styles/Home.css'
import '../Styles/ComponentStyle.css'
//Components
import Service1 from '../Images/Service.png'
import Function1 from '../Images/function_logo1.png'
import Function2 from '../Images/function_logo2.png'
import Function3 from '../Images/function_logo3.png'
import Token from '../Images/coin_dopot.png'
import { PieChart } from '../UIComponent/PieChart'

function Home() {
    
    return (
        <>
            <div className='background'></div>
            <div className='hero'>
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
                                <img src={Function1}/>
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
                                <img src={Function2}/>
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
                                <img src={Function3}/>
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
                            <h3>Meno Burocrazia grazie agli Smart Contract</h3>
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
                            <h3>Transazioni veloci</h3>
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
                            <h3>Nessun intermediario</h3>
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

            <section className='roadmap-section'>
                <div className='roadmap-background'></div>
                <div className='roadmap'>
                    <div className='phases'>
                        <div className='phase mercurio'>
                            <div className='p-number'>
                                <h1>01</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Mercurio</h3>
                            </div>
                            <div className='p-description'>
                                <p>Apertura ufficiale della prima 
                                    sezione di Reward crowdfunding
                                </p>
                            </div>
                        </div>
                        <div className='phase venere'>
                            <div className='p-number'>
                                <h1>02</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Venere</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Vendita agli utenti di NFT limitati
                                    direttamente sulla piattaforma
                                </p>
                            </div>
                        </div>
                        <div className='phase terra'>
                            <div className='p-number'>
                                <h1>03</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Terra</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Lancio del token Dopot sulla
                                    blockchain e apertura IDO
                                </p>
                            </div>
                        </div>
                        <div className='phase luna'>
                            <div className='p-number'>
                                <h1>04</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Luna</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Istituzione della DAO interna
                                </p>
                            </div>
                        </div>
                        <div className='phase marte'>
                            <div className='p-number'>
                                <h1>05</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Marte</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Apertura sezione "Equity"
                                </p>
                            </div>
                        </div>
                        <div className='phase giove'>
                            <div className='p-number'>
                                <h1>06</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Giove</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Apertura sezione "Lending"
                                </p>
                            </div>
                        </div>
                        <div className='phase saturno'>
                            <div className='p-number'>
                                <h1>07</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Saturno</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Ultimazione della piattaforma
                                </p>
                            </div>
                        </div>
                        <div className='phase urano'>
                            <div className='p-number'>
                                <h1>08</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Urano</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                    Apertura ufficiale della prima 
                                    sezione di Reward crowdfunding
                                </p>
                            </div>
                        </div>
                        <div className='phase nettuno'>
                            <div className='p-number'>
                                <h1>09</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Nettuno</h3>
                            </div>
                            <div className='p-description'>
                                <p>
                                Apertura ufficiale della prima 
                                sezione di Reward crowdfunding
                                </p>
                            </div>
                        </div>
                        <div className='phase plutone'>
                            <div className='p-number'>
                                <h1>10</h1>
                            </div>
                            <div className='p-title'>
                                <h3>Fase Plutone</h3>
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

            <section>
                <div className='token'>
                    <img src={Token}></img>
                    <h2> IL TOKEN DOPOT </h2>
                    <p> Dopot farà affidamento all’utilizzo di un token di governance creato su fantom per garantire la 
                        decentralizzazione totale della piattaforma e l’interazione della community sul potere decisionale
                    </p>
                </div>
            </section>

            <section>
                <div className='loader-legend'>
                    <h2> DISTRIBUZIONE SUPPLY</h2>
                    <PieChart/>
                </div>
            </section>

            <section>
                <div className='vantaggi'>
                    <h2>I VANTAGGI DELLA DAI</h2>
                    <div className='card-dai'>
                        <h2>Cos'è DAI</h2>
                        <p>La criptovaluta DAI (DAI) è un token ERC-20 che è stato progettato
                            per funzionare come stablecoin o valuta stabile il cui valore è ancorato al dollaro.
                            Tale valuta è emessa in maniera decentralizzata grazie alla collateralizzazione
                            di garanzie che servono a garantirne in ogni momento l’emissione.</p>
                    </div>

                    <div className='list-vantaggi'>

                    </div>
                </div>
            </section>

            <section >
                <div className='faq'>

                </div>
            </section>
        </>
    )
}

export default Home
