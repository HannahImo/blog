import React from "react";


function Home(){
    return(
        <div className='post'> 
           <div className='image'>
             <img src='https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1297644626.jpg?w=430&h=230&crop=1' alt=''/> 
           </div>
           <div className='text'>
             <h2> Security Reseacher finds drone of AI data online</h2>
               <p className='descrip'> London-based outsourcing giant Capita left a trove of data exposed online for seven years, TechCrunch has learned, just weeks after the company admitted to a data breach potentially impacting customer data. </p>
                 <p className='info'>
                   <a className='author'> Hannah Imo</a>
                     <time> 06-05-2023 9:22am </time>
               </p>
          </div>
         </div>
    )
}
export default Home;