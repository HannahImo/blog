import './App.css';
import './App';
// import Home from './dummy/Header/Home';
// import Header from './dummy/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Indexpge from './Pages/Indexpge';
import Signin from './Pages/Signin';
import Categories from './Pages/Categories';
import Author from './Sig/Author';
import Loginpage from './Sig/Loginpage';
import EditPost from './EditPost';
import CreatePost from './CreatePost';
import Post from './Post';
import Editor from './Editor';
 
function App() {
  return (
     
    <Routes>
      <Route path={'/'} element={<Layout/>}/>
        <Route index element={<Indexpge />}/>
          <Route path={'/Categories'} element={<Categories/>}/>
          <Route path={'/Signin'} element={<Signin/>}/>
          <Route path={'./Author'} element={<Author/>}/>
          <Route path={'/Loginpage'} element={<Loginpage/>}/>
          <Route path={'/Post'} element={<Post/>}/>
          <Route path={'/Editor'} element={<Editor/>}/>
          {/* <Route path={'/UserContext'} element={<UserContext/>}/> */}
          <Route path={'./CreatePost'} element={<CreatePost/>}/>
          <Route path={'/EditPost'} element={<EditPost/>}/>
      </Routes>
      
  
      
  
          
         
 
        // </div>
        //

        // <div className='post'> 
        //   <div className='image'>
        //     <img src='https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1297644626.jpg?w=430&h=230&crop=1' alt=''/> 
        //   </div>
        //   <div className='text'>
        //     <h2> Security Reseacher finds drone of AI data online</h2>
        //     <p className='descrip'> London-based outsourcing giant Capita left a trove of data exposed online for seven years, TechCrunch has learned, just weeks after the company admitted to a data breach potentially impacting customer data. </p>
        //         <p className='info'>
        //           <a className='author'> Hannah Imo</a>
        //             <time> 06-05-2023 9:22am </time>
        //       </p>
        //   </div>
        // </div>

        // <div className='post'> 
        //   <div className='image'>
        //     <img src='https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1297644626.jpg?w=430&h=230&crop=1' alt=''/> 
        //   </div>
        //   <div className='text'>
        //     <h2> Security Reseacher finds drone of AI data online</h2>
        //     <p className='descrip'> London-based outsourcing giant Capita left a trove of data exposed online for seven years, TechCrunch has learned, just weeks after the company admitted to a data breach potentially impacting customer data. </p>
        //         <p className='info'>
        //           <a className='author'> Hannah Imo</a>
        //             <time> 06-05-2023 9:22am </time>
        //       </p>
        //   </div>
        // </div> */ 

  );
}

export default App;
