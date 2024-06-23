/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom'

const NavLinks = ({ data, toggleNavLinks }) => {
  return (
    <ul 
        className=" flex flex-col md:flex-row mt-2 md:mt-0 md:space-x-8 "
    >
        {data.map((link) => (
            <li key={link.label}
                className=" font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white md:hover:text-blue-700 rounded-md
                hover:bg-blue-100 dark:hover:bg-transparent"
            >
                <NavLink
                    to={link.href}
                    className={
                        ({ isActive }) => `${isActive ? 
                            ' text-gray-100 md:text-blue-700 dark:md:text-gray-100 rounded-md bg-blue-700 md:bg-transparent ' : ''} 
                        block py-2 pl-3 pr-4 `
                    }
                    onClick={toggleNavLinks}
                >
                    {link.label}
                </NavLink>
            </li>
        ))}
    </ul>
  )
}

export default NavLinks