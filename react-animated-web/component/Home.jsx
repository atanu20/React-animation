import React, { useEffect , useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'

const Home = () => {
    const [show, setShow] = useState(false)
    
        useEffect(() => {
          AOS.init({
            offset: 200,
            duration: 2000,
            easing: 'ease',
           
          });
         
        }, []);

        const animationShow=()=>{
          setShow(true)
        }

    return (
        <>
       <div className="home">
           <div className="container">
               {
                   show ? (
                       <>
                <div className="row">
                   <div className="col-10 mx-auto">
                       <h1 className="text-center" data-aos="fade-right">Welcome to My World</h1>
                       <div className="box" data-aos="zoom-in">
                           <img src="../image/girl.jpg" alt="girl" className="im" />
                       </div>


                   </div>
               </div>
                       </>
                   ) :(
                       <>
                       <div className="row">
                   <div className="col-lg-4 col-md-5 col-12 mx-auto" data-aos="fade-left" >
                   <img src="../image/girl.jpg" alt="girl" className="img-fluid imgg" onClick={animationShow} />
                   </div>
               </div>

                       </>
                   )
               }
               
              
           </div>
       </div>
            
        </>
    )
}

export default Home
