import '../styles/Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <h2 className="logo">KF</h2>
  
        <ul className="nav-links">
          <li><a href ="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#coding"> Coding Projects</a></li>
          <li><a href="#uxui"> UX/UI</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;