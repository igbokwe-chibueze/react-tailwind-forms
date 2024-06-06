/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { AngleRightIcon } from './Icons';

const Dropdown = ({ data }) => {

// Define a state variable 'menuToggle' and a function 'setMenuToggle' to manage the toggle state.
const [menuToggle, setMenuToggle] = useState(false);

// This "useEffect" is just so i can close the overlay using "Escape" key on keyboard.
// Use the 'useEffect' hook to add an event listener for the "Escape" key press.
useEffect(() => {
    // Define a function 'handleKeyPress' to handle the key press event.
    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            // If the "Escape" key is pressed, set 'menuToggle' to 'false' to close the menu list.
            setMenuToggle(false);
        }
    };

    // Add the event listener to the window object to listen for keydown events.
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component is unmounted.
    return () => {
        window.removeEventListener("keydown", handleKeyPress);
    };

}, []); // The empty dependency array ensures this effect only runs once when the component is mounted.

  return (
    <>
        <button 
            type="button"
            onClick={() => {setMenuToggle(!menuToggle)}}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 md:px-4 text-sm font-medium text-center text-gray-900 
            bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg
            hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 
            dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
            <p>All <span className=''>categories</span></p>
            <AngleRightIcon 
                className={`md:ms-2.5 ${menuToggle ? 'rotate-90' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
            />
        </button>

        {/* OverlayBtn: Closes the menu list when clicking outside of the list. */}
        <div 
            className={`${
                !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
            } `}
        >
            <button type="button"
                onClick={() => setMenuToggle(false)}
                tabIndex={-1} // Ensures this button is not accessible by keyboard
                className="fixed inset-0 bg-transparent h-screen w-screen cursor-default"
            >
            </button> 
        </div>

        {/* Menu List area */}
        {menuToggle && (
            <div 
                className={`${!menuToggle ? "hidden" : "block"}
                absolute z-10 mt-14 w-44 bg-gray-300 dark:bg-gray-700 rounded-lg shadow `}
            >
                {/* Rendering setting links */}
                <ul className=" grid grid-cols-1 divide-y py-2 text-sm text-left text-gray-700 dark:text-gray-200 ">
                    {data.map((link, index) => (
                        <li 
                            key={index}
                            onClick={() => setMenuToggle(false)}
                        >
                            <a href={link.href} 
                                className=" block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </>
  );
};

export default Dropdown;
