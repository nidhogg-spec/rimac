
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
export default function Header(){
    return(
        <header>
            <div className="headerLogo">
                <img src='/images/logo.png' alt='logo'/>
            </div>
            <div className='contactUs'>
                <span>¿Tienes alguna Duda?</span>
                <FontAwesomeIcon icon={faPhone} color='#6F7DFF' rotation='90'></FontAwesomeIcon>
                <a href='/#'>(01) 411 6001</a>
            </div>
        </header>
    )
}