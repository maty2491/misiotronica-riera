import { Link } from "react-router-dom"
import logo from '../assests/logo.png'

const Footer = () => {
    return (
        <>
            <footer className="container text-center text-white mt-5">
                <hr className='mt-5'/>
                <div className=" p-4 pb-0">

                    <section className="mb-2">                        
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.twitter.com/" role="button"
                        ><i className="fab fa-twitter"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.instagram.com/" role="button"
                        ><i className="fab fa-instagram"></i></a>                        
                    </section>

                </div>                
                <Link className="text-white " to={"/"}><img src={logo} width="90" height="94"/> </Link> 
             
            </footer>

        </>
    )
}

export default Footer