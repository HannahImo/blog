import { Link } from "react-router-dom";
function Header(){
    return (
        <header>
         <a href='/' className='Logo'> Logo </a>


           <nav className='navbar'>
            <ul>
           <li> <Link to='/'> Home </Link> </li>
           <li> <Link to='/Categories'> Categories </Link> 
                  <ul>
                  <li> <Link to='/Food'> Food </Link></li>
                  <li> <a href='/'> Health </a></li>
                  </ul>
           </li>
           <li> <Link to='/Signin'> User </Link> 
                  <ul>
                    <li> <Link to='./Author'> Author </Link> </li>
                    <li> <a href='/'> Publisher </a></li>
                    <li> <a href='/'> Guest </a></li>
                  </ul>
           </li>
            </ul>
         </nav>
      </header>
    )
}
export default Header;