// import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <div>
            
        <section id="topbar" className="d-flex align-items-center">
   <div className="container d-flex justify-content-center justify-content-md-between">
     <div className="contact-info d-flex align-items-center">
       <i className="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">info@example.com</a>
       <i className="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
     </div>
     <div className="social-links d-none d-md-block">
       <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
       <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
       <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
       <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
     </div> 
     </div>
 </section>

 <header id="header" className="d-flex align-items-center">
   <div className="container d-flex align-items-center">

     <h1 className="logo me-auto"><a href="index.html">Green</a></h1>
       {/* Uncomment below if you prefer to use an image logo     */}
       {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>    */}

     <nav id="navbar" className="navbar">
       <ul>
         <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
         <li><a className="nav-link scrollto" href="#about">About</a></li>
         <li><a className="nav-link scrollto" href="#services">Services</a></li>
         <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
         <li><a className="nav-link scrollto" href="#team">Team</a></li>
         <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
           <ul>
             <li><a href="#">Drop Down 1</a></li>
             <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
               <ul>
                 <li><a href="#">Deep Drop Down 1</a></li>
                 <li><a href="#">Deep Drop Down 2</a></li>
                 <li><a href="#">Deep Drop Down 3</a></li>
                 <li><a href="#">Deep Drop Down 4</a></li>
                 <li><a href="#">Deep Drop Down 5</a></li>
               </ul>
             </li>
             <li><a href="#">Drop Down 2</a></li>
             <li><a href="#">Drop Down 3</a></li>
             <li><a href="#">Drop Down 4</a></li>
           </ul>
         </li>
         <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
         <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
       </ul>
       <i className="bi bi-list mobile-nav-toggle"></i>
     </nav>  {/* .navbar     */}

   </div>
 </header>  {/* End Header     */} 

 

 </div> 
    );
}