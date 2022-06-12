import './Navbar.css'
const Navbar = () => {
    return(
        <>
            <nav className='navbar justify_content_right d-flex'>
                <ul>
                    <li className='nav_link'><a href='/'>Home</a></li>
                    <li className='nav_link'><a href='/'>Portfolio</a></li>
                    <li className='nav_link'><a href='/'>About</a></li>
                    <li className='nav_link'><a href='/'>Contact</a></li>
                </ul>
            </nav>
        </>
    );

}
export default Navbar;
