import { Link } from "react-router-dom"

function Navbar(){

return(

<nav className="navbar">

<Link to="/">Home</Link>

<a href="#stack">Stack</a>

<a href="#projects">Projects</a>

<a href="#contact">Contact</a>

</nav>

)

}

export default Navbar