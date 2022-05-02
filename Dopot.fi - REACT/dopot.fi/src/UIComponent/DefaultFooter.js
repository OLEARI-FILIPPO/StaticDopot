import { Link } from 'react-router-dom';
import '../Styles/Footer.css'
import logo from '../Images/Logo_SfondoBianco.jpg'


export default function DefaultFooter() {
    return (
        <>
            <footer>
                <div className='footer'>
                    <div className='footer-content'>
                        <div className='contatti'>
                            <h3>Contatti</h3>
                            <a href='#'> MAIL </a>
                        </div>
                        <div className='servizi'>
                            <h3>Servizi</h3>
                            <a href='#'>Area Developer </a>
                            <a href='#'>Lancia il tuo progetto </a>
                            <a href='#'>Learn with Dopot </a>
                            <a href='#'>Eventi </a>
                        </div>
                        <div className='community'>
                            <h3>Community</h3>
                            Social Icons
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <img src={logo}/>
                        <p>Copyright © 2021 tutti diritti riservati a Dopot.fi</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
