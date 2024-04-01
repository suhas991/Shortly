
import './Header.css'
export default function Header(){
    

    return(
        <>
         <nav className='header'>
            <div className="left">
                <ul>
                <li id='logo'>Shortly</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                </ul>
            </div>
            <div className="right">
                <button>Login</button>
                <button>SignUp</button>
            </div>

         </nav>
        </>
    )
}