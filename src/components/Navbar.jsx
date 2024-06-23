import { useEffect, useRef, useState } from "react"
import { creativaLogo } from "../assets"
import { navLinks } from "../constants/Data"
import { MenuIcon, SearchIcon } from "./Icons"
import NavLinks from "./NavLinks"
import ThemeSwitcher from "./ThemeSwitcher"

const Navbar = () => {

    // State to control the visibility of the navigation links
    const [showNavLinks, setShowNavLinks] = useState(false);

    // Ref to the nav element to handle clicks outside the navigation bar
    const navRef = useRef(null);

    // Function to toggle the visibility of the navigation links
    const toggleNavLinks = () => {
        setShowNavLinks(prevShowNavLinks => !prevShowNavLinks);
    };

    // Function to handle clicks outside the navigation bar or pressing the Escape key
    const handleClickOutsideOrEscape = (event) => {
        // Check if the click is outside the nav element or if the Escape key is pressed
        if ((navRef.current && !navRef.current.contains(event.target)) || event.key === 'Escape') {
        setShowNavLinks(false); // Hide the navigation links
        }
    };

    // Use effect hook to add and clean up event listeners
    useEffect(() => {
        // Add event listeners for clicks and keydown events
        document.addEventListener('click', handleClickOutsideOrEscape, true);
        document.addEventListener('keydown', handleClickOutsideOrEscape, true);
        return () => {
            // Remove event listeners when the component is unmounted
            document.removeEventListener('click', handleClickOutsideOrEscape, true);
            document.removeEventListener('keydown', handleClickOutsideOrEscape, true);
        };
    }, []);

  return (
    <nav ref={navRef} className=" fixed top-0 right-0 left-0 z-30 bg-gray-100 dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
            {/* Logo */}
            <a href="/" className="flex items-center">
                <img src={creativaLogo} className="h-12 sm:h-16 mr-3" alt="Creativa Logo" />
                <span className="text-xl font-semibold text-gray-600 self-center whitespace-nowrap">Creativa</span>
            </a>

            {/* Search and Menu Btn */}
            <div className="flex justify-center items-center md:order-2 space-x-3">

                <div >
                    <ThemeSwitcher/>
                </div>

                {/* Menu Toggles --Mobile Only */}
                <div className=" flex md:hidden justify-center items-center ">

                    <button type="button" 
                        onClick={toggleNavLinks} 
                        className=" p-2.5 mr-1 btn-menu "
                    >
                        <SearchIcon/>
                    </button>

                    <button type="button" 
                        onClick={toggleNavLinks} 
                        className="inline-flex items-center justify-center p-2 w-10 h-10 btn-menu focus:ring-2"
                    >
                        <MenuIcon/>
                    </button>
                </div>

                {/* Search --Large Screen */}
                <form action="" method="post" className=" hidden md:block w-full">

                    <label htmlFor="nav-input" className="sr-only">Search</label>

                    <div className=" relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <SearchIcon className=" w-4 h-4 icon "/>
                        </div>
                        <input type="email" name="email" id="nav-input" 
                            placeholder="Search..."
                            required
                            className="input-basic ps-10"
                        />
                    </div>
                </form>
            </div>

            {/* Links */}
            <div className={`md:flex justify-between items-center w-full mt-4 md:mt-0 md:w-auto md:order-1 ${showNavLinks ? 'block' : 'hidden'}`}>

                {/* Search -- You can turn this into a component to reduce repetation */}
                <form action="" method="post" className=" md:hidden w-full">

                    <label htmlFor="nav-input" className="sr-only">Search</label>

                    <div className=" relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <SearchIcon className=" w-4 h-4 icon "/>
                        </div>
                        <input type="email" name="email" id="nav-input" 
                            placeholder="Search..."
                            required
                            className="input-basic ps-10"
                        />
                    </div>
                </form>

                <div className=" px-2 md:px-0 ">
                    <NavLinks data={navLinks} toggleNavLinks={toggleNavLinks}/>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar