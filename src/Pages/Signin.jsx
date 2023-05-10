import { useState } from "react"

function Signin(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signup(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/test', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'},
       })
       if (response.status === 200) {
        alert ('signup successful');
       } else {
        alert('signup failed');
       }
               
    }
    return(
        
         <div>
       <form className="signup" onSubmit={signup} > 
            <h5> Signup as a Publisher  </h5>
            <input type='text' placeholder="Username" value={username} onChange={ ev => setUsername(ev.target.value)}/>
            <input type='email' placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)}/>
            <input type='password' placeholder=" Password" value={password} onChange={ev => setPassword (ev.target.value)} />
            <button> Signup </button>
        </form> 
        
            or  <button>Login</button> 
                 

        <form action="" > 
            <h5> Login as an Author </h5>
            <input type='text' placeholder="Username"/>
            <input type='email' placeholder="Input Email"/>
            <input type='password' placeholder=" Password"/>
            <button> Login </button>
        </form> 
        
            or  <button>sign up </button>

        <form action="" > 
            <h5> Login as a Guest </h5>
            <input type='text' placeholder="Username"/>
            <input type='email' placeholder="Input Email"/>
            <input type='password' placeholder=" Password"/>
            <button> Login </button>
        </form> 
        
            or  <button>sign up </button>    
        </div>
        
        
        // <form action=""> 
        //     <h1> Sign-In </h1>
        //     <input type='text' placeholder="Username"/>
        //     <input type='email' placeholder="email"/>
        //     <input type='password' placeholder="password"/>
        //     <button> Login </button>
        // </form>


    )
}
export default Signin;