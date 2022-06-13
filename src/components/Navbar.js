import './Navbar.css'
const Navbar = () => {
    return(
        <>
            <nav className='navbar justify_content_right d-flex'>
                <ul>
                    <li className='nav_link'><a href='/Home'>Home</a></li>
                    <li className='nav_link'><a href='/Porfolio'>Portfolio</a></li>
                    <li className='nav_link'><a href='/About'>About</a></li>
                    <li className='nav_link'><a href='/Contact'>Contact</a></li>
                </ul>
            </nav>
        </>
    );

}
export default Navbar;
