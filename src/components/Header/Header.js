import './Header.css';

import HeaderImg from '../../res/header.png';

export default function Header(props) {
    return(
        <img className='header-img' alt="what time is it right now" src={HeaderImg}></img>
    );
}