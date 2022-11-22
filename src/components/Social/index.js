/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import './social.css'

// eslint-disable-next-line import/prefer-default-export, react/prop-types
export function Social({children,url}){
    return(
       
       // eslint-disable-next-line jsx-a11y/control-has-associated-label
       <a className='social' href={url} target='_blank' >
        {children}
       </a>
       
    )
}