import './logo.css'

import { Link } from 'react-router-dom'

// eslint-disable-next-line import/prefer-default-export
export function Logo(){
    return(
         < Link to='/'>
        <h1 className='logo'>Dev<span className='logo-text'>Link</span> </h1>
        </Link>
    )
}