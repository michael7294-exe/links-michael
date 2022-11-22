/* eslint-disable jsx-a11y/anchor-is-valid */
import "./home.css";

import {Social} from "../../components/Social"
// eslint-disable-next-line import/order
import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp,} from 'react-icons/fa'

export default function Home(){
     return(
        // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
        <div className="home-container">

         <h1 className="dinamico">  Michael Alexander</h1> 
        

        <main className="links">

        <section className="link-area">
   
         <a href="#">
            <p className="link-text">Click nos icones para ver os links</p>
         </a>
        </section>


        <footer>
           <Social url="https://www.facebook.com/profile.php?id=100002293462926">
            <FaFacebook size={35} color="#fff"/>
           </Social>

           <Social url="https://www.instagram.com/michaell_ale/">
            <FaInstagram size={35} color="#fff"/>
           </Social>

           <Social url="https://www.linkedin.com/in/michael-ale72/">
            <FaLinkedin size={35} color="#fff"/>
           </Social>
           
           <Social url="https://wa.me/5541997701220">
            <FaWhatsapp size={35} color="#fff"/>
           </Social>

         </footer> 
        </main>

        </div>
     )
};