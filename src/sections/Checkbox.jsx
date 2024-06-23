import { useState } from "react";
//import Dropdown from "../components/Dropdown"
import { technologies, users } from "../constants/Data"
import { AngleRightIcon, CheckMarkIcon, HeartIcon, SearchIcon} from "../components/Icons";

const Checkbox = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <section className="min-h-screen">
        <div className= "max-w-screen-xl mx-auto px-2 lg:px-12 py-8 lg:py-16 space-y-8">

            {/* Checkbox example */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-4">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Checkbox example</h1>
                    <h2 className=" header-two ">
                        Use this default example of a checkbox element in a checked and unchecked state.
                    </h2>
                </div>

                {/* Default checkbox */}
                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" 
                        className=" input-checkbox "
                    />
                    <label htmlFor="default-checkbox" 
                        className="label-checkbox"
                    >
                        Default checkbox
                    </label>
                </div>

                {/* Checked state */}
                <div className="flex items-center">
                    <input checked id="checked-checkbox" type="checkbox" value="" 
                        className=" input-checkbox "
                    />
                    <label htmlFor="checked-checkbox" className="label-checkbox">Checked state</label>
                </div>
                
            </div>



            {/* Disabled state */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-4">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Disabled state</h1>
                    <h2 className=" header-two ">
                        This example can be used for the disabled state of the checkbox component by applying the 
                        <span className="highlighted-text"> &quot;disabled&quot;</span> attribute to the input element.
                    </h2>
                </div>

                {/* Disabled checkbox */}
                <div className="flex items-center mb-4">
                    <input disabled id="disabled-default-checkbox" type="checkbox" value="" 
                        className=" input-checkbox cursor-not-allowed"
                    />
                    <label htmlFor="disabled-default-checkbox" 
                        className="ml-2 label-basic text-sm font-light cursor-not-allowed"
                    >
                        Disabled checkbox
                    </label>
                </div>

                {/* Disabled checked */}
                <div className="flex items-center">
                    <input disabled checked id="disabled-checked-checkbox" type="checkbox" value="" 
                        className=" input-checkbox cursor-not-allowed"
                    />
                    <label htmlFor="disabled-checked-checkbox" 
                        className="ml-2 label-basic text-sm font-light cursor-not-allowed"
                    >
                        Disabled checked
                    </label>
                </div>

            </div>



            {/* Checkbox link */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-4">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Checkbox link</h1>
                    <h2 className=" header-two ">
                        Use this example if you want to add an anchor link inside the label of the checkbox component.
                    </h2>
                </div>

                <div className="flex items-center ">
                    <input id="link-checkbox" type="checkbox" value="" 
                        className=" input-checkbox "
                    />
                    <label htmlFor="link-checkbox" 
                        className="label-checkbox"
                    >
                        I agree with the 
                        <a href="https://github.com/igbokwe-chibueze/react-tailwind-forms" 
                            className="ml-2 highlighted-text hover:underline"
                        >
                            terms and conditions.
                        </a>
                    </label>
                </div>

            </div>



            {/* Bordered  */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-4">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Bordered</h1>
                    <h2 className=" header-two ">
                        Use this example of a checkbox inside a card element to enable a larger area of clicking activation.
                    </h2>
                </div>

                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input id="bordered-checkbox" type="checkbox" value="" 
                        className=" input-checkbox "
                    />
                    <label htmlFor="bordered-checkbox" 
                        className="ml-2 label-basic w-full py-4 text-sm font-light cursor-pointer "
                    >
                        Default radio
                    </label>
                </div>

            </div>



            {/* Checkbox list group  */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Checkbox list group</h1>
                    <h2 className=" header-two ">
                        Use this example to show a list of checkbox items grouped inside a card vertically or horizontally.
                    </h2>
                </div>

                {/* Vertical Card*/}
                <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Technology</h3>
                    <ul 
                        className="w-48 text-sm font-medium rounded-lg
                        text-gray-900 dark:text-white bg-gray-100 border dark:bg-gray-700 
                        border-gray-200 dark:border-gray-600 "
                    >
                        {/* Vue JS */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="vue-checkbox" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="vue-checkbox" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    Vue JS
                                </label>
                            </div>
                        </li>

                        {/* React */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="react-checkbox" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="react-checkbox" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    React
                                </label>
                            </div>
                        </li>

                        {/* Angular */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="angular-checkbox" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="angular-checkbox" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    Angular
                                </label>
                            </div>
                        </li>

                        {/* Laravel */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="laravel-checkbox" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="laravel-checkbox" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    Laravel
                                </label>
                            </div>
                        </li>

                    </ul>
                </div>

                
                {/* Horizontal Card*/}
                <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Technology</h3>
                    <ul 
                        className=" sm:flex w-full text-sm font-medium rounded-lg
                        text-gray-900 dark:text-white bg-gray-100 border dark:bg-gray-700 
                        border-gray-200 dark:border-gray-600 "
                    >
                        {/* Vue JS */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="vue-checkbox-list" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="vue-checkbox-list" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    Vue JS
                                </label>
                            </div>
                        </li>

                        {/* React */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="react-checkbox-list" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="react-checkbox-list" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    React
                                </label>
                            </div>
                        </li>

                        {/* Angular */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="angular-checkbox-list" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="angular-checkbox-list" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    Angular
                                </label>
                            </div>
                        </li>

                        {/* Laravel */}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className=" flex items-center pl-3 ">
                                <input id="laravel-checkbox-list" type="checkbox" value="" 
                                    className=" input-checkbox "
                                />
                                <label htmlFor="laravel-checkbox-list" 
                                    className="ml-2 label-basic w-full py-3 text-sm font-light cursor-pointer"
                                >
                                    Laravel
                                </label>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>



            {/* Checkbox dropdown  */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Checkbox dropdown</h1>
                    <h2 className=" header-two ">
                        Use this example to show a list of checkbox items inside a dropdown menu.
                    </h2>
                </div>

                <div 
                    className=" text-center space-y-4 "
                >
                    <button
                        onClick={toggleDropdown}
                        className=" btn2 inline-flex items-center p-0 px-4 py-2 rounded-lg"
                        type="button"
                    >
                        Dropdown search
                        <AngleRightIcon 
                            className={`md:ml-2.5 ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
                        />
                    </button>

                    {/* <!-- Dropdown menu --> */}
                    <div
                        className={`z-10 ${isOpen ? 'block' : 'hidden'} 
                        mx-auto bg-white rounded-lg shadow-md w-60 dark:bg-gray-700 border`}
                    >
                        {/* search */}
                        <div className="p-3">
                            <label htmlFor="input-group-search" className="sr-only">
                                Search
                            </label>

                            <div className=" relative ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <SearchIcon className=" w-4 h-4 icon "/>
                                </div>
                                <input type="text" name="name" id="input-group-search" 
                                    placeholder="Search user"
                                    className="input-basic ps-10 input-placeholder-invalid input-invalid"
                                />
                            </div>
                        </div>

                        {/* Checkbox List */}
                        <ul
                            className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                        >
                            {users.map((user, index) => (
                                <li key={index}>
                                    <div className=" flex items-center mb-4 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                                        <input 
                                            id={`checkbox-item-${index}`}
                                            type="checkbox" value="" 
                                            defaultChecked={user.checked}
                                            className=" input-checkbox "
                                        />
                                        <label 
                                            htmlFor={`checkbox-item-${index}`} 
                                            className="label-checkbox"
                                        >
                                            {user.name}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#"
                            className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600
                            text-sm font-medium text-red-600 dark:text-red-500 
                            border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 rounded-b-lg hover:underline"
                        >
                            <svg
                                className="w-4 h-4 me-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 
                                    1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" 
                                />
                            </svg>
                            Delete user
                        </a>
                    </div>
                </div>

                


                


            </div>



            {/* Inline layout  */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Inline layout</h1>
                    <h2 className=" header-two ">
                        You can align the checkbox elements horizontally by using a wrapper tag and applying the 
                        <span className="highlighted-text"> &quot;flex&quot; </span>class.
                    </h2>
                </div>

                <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                    {/* Inline 1 */}
                    <div className=" flex items-center  ">
                        <input id="inline-checkbox" type="checkbox" value="" 
                            className=" input-checkbox "
                        />
                        <label htmlFor="inline-checkbox" 
                            className="label-checkbox"
                        >
                            Inline 1
                        </label>
                    </div>
                    
                    {/* Inline 2 */}
                    <div className=" flex items-center  ">
                        <input id="inline2-checkbox" type="checkbox" value="" 
                            className=" input-checkbox "
                        />
                        <label htmlFor="inline2-checkbox" 
                            className="label-checkbox"
                        >
                            Inline 2
                        </label>
                    </div>

                    {/* inline checked */}
                    <div className=" flex items-center  ">
                        <input checked id="inline-checked-checkbox" type="checkbox" value="" 
                            className=" input-checkbox "
                        />
                        <label htmlFor="inline-checked-checkbox" 
                            className="label-checkbox"
                        >
                            inline checked
                        </label>
                    </div>

                    {/* inline disabled */}
                    <div className=" flex items-center  ">
                        <input disabled id="inline-disabled-checkbox" type="checkbox" value="" 
                            className=" input-checkbox "
                        />
                        <label htmlFor="inline-disabled-checkbox" 
                            className=" label-checkbox disabled-text cursor-not-allowed "
                        >
                            inline disabled
                        </label>
                    </div>
                </div>
                
            </div>    



            {/* Custom Styles */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Custom Styles</h1>
                    <h2 className=" header-two ">
                        You can use the classes to add custom styles to the Checkbox component, as well as use custom icons.
                    </h2>
                </div>

                {/* Custom Default */}
                <div className=" flex items-center ">
                    <div className=" relative flex items-center ">
                        <input id="custom-checkbox" type="checkbox" value="" 
                            className=" peer input-checkbox-custom "
                        />
                        <CheckMarkIcon className={" icon-checkbox-custom "}/>
                    </div>
                    <label htmlFor="custom-checkbox" className="label-checkbox"> Custom Default </label>
                </div>

                {/* Heart */}
                <div className=" flex items-center ">
                    <div className=" relative flex items-center ">
                        <input id="heart-checkbox" type="checkbox" value="" 
                            className=" peer input-checkbox-custom rounded-full "
                        />
                        <HeartIcon className={" icon-checkbox-custom "}/>
                    </div>
                    <label htmlFor="heart-checkbox" className="label-checkbox"> Heart </label>
                </div>

                {/* Hover Item */}
                <div className=" space-y-5 ">
                    <div>
                        <h2 className=" header-two ">
                            Hover Item
                        </h2>
                        <p className=" helper-text ">
                            You can use <span className=" highlighted-text "> &quot; before &quot; </span> to create a hover element.
                        </p>
                    </div>

                    <div className=" flex items-center ">
                        <div className=" relative flex items-center ">
                            <input id="hover-checkbox" type="checkbox" value="" 
                                className=" peer input-checkbox-custom 
                                before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 
                                before:-translate-x-2/4 before:rounded-full before:bg-gray-900 dark:before:bg-gray-600
                                before:opacity-0 before:transition-opacity hover:before:opacity-10 "
                            />
                            <CheckMarkIcon className={" icon-checkbox-custom "}/>
                        </div>
                        <label htmlFor="hover-checkbox" className="label-checkbox"> Hover Effect </label>
                    </div>
                </div>

                {/* Checkbox Colors */}
                <div className=" space-y-5 ">
                    <div>
                        <h2 className=" header-two ">
                            Checkbox Colors
                        </h2>
                        <p className=" helper-text ">
                            You can customize your Material Tailwind checkbox to fit your design with different colors like 
                            blue, red, amber, green, teal, indigo, purple, and pink.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3 ">

                        {/* red-checkbox */}
                        <div className=" flex items-center ">
                            <div className=" relative flex items-center ">
                                <input checked id="red-checkbox" type="checkbox" value="" 
                                    className=" peer input-checkbox-custom 
                                    checked:bg-red-600 checked:hover:bg-red-800 transition-all
                                    focus:ring-red-500 dark:focus:ring-red-600 
                                    before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 
                                    before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-red-900 
                                    before:opacity-0 before:transition-opacity checked:before:bg-red-900 hover:before:opacity-10"
                                />
                                <CheckMarkIcon className={" icon-checkbox-custom "}/>
                            </div>
                            <label htmlFor="red-checkbox" className="label-checkbox"> Red </label>
                        </div>

                        {/* green-checkbox */}
                        <div className=" flex items-center ">
                            <div className=" relative flex items-center ">
                                <input checked id="green-checkbox" type="checkbox" value="" 
                                    className=" peer input-checkbox-custom 
                                    checked:bg-green-600 checked:hover:bg-green-800 transition-all
                                    focus:ring-green-500 dark:focus:ring-green-600 
                                    before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 
                                    before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-green-900 
                                    before:opacity-0 before:transition-opacity checked:before:bg-green-900 hover:before:opacity-10"
                                />
                                <CheckMarkIcon className={" icon-checkbox-custom "}/>
                            </div>
                            <label htmlFor="green-checkbox" className="label-checkbox"> Green </label>
                        </div>

                        {/* purple-checkbox */}
                        <div className=" flex items-center ">
                            <div className=" relative flex items-center ">
                                <input checked id="purple-checkbox" type="checkbox" value="" 
                                    className=" peer input-checkbox-custom 
                                    checked:bg-purple-600 checked:hover:bg-purple-800 transition-all
                                    focus:ring-purple-500 dark:focus:ring-purple-600 
                                    before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 
                                    before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-purple-900 
                                    before:opacity-0 before:transition-opacity checked:before:bg-purple-900 hover:before:opacity-10"
                                />
                                <CheckMarkIcon className={" icon-checkbox-custom "}/>
                            </div>
                            <label htmlFor="purple-checkbox" className="label-checkbox"> Purple </label>
                        </div>

                        {/* black-checkbox */}
                        <div className=" flex items-center ">
                            <div className=" relative flex items-center ">
                                <input checked id="purple-checkbox" type="checkbox" value="" 
                                    className=" peer input-checkbox-custom 
                                    checked:bg-black checked:hover:bg-black transition-all
                                    focus:ring-black dark:focus:ring-black 
                                    before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 
                                    before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-black 
                                    before:opacity-0 before:transition-opacity checked:before:bg-black hover:before:opacity-10"
                                />
                                <CheckMarkIcon className={" icon-checkbox-custom "}/>
                            </div>
                            <label htmlFor="purple-checkbox" className="label-checkbox"> Black </label>
                        </div>
                    </div>
                </div>
                
            </div>



            {/* Advanced layout */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Advanced layout</h1>
                    <h2 className=" header-two ">
                        Use this example of an advanced layout of checkbox elements where the label parent element 
                        can be styled when the checkbox is checked.
                    </h2>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Choose technology:</h3>
                    <ul className="grid w-full gap-4 md:grid-cols-2">

                        {technologies.map((technology) => (
                            <li key={technology.id} className="w-full">
                                <input type="checkbox" id={technology.id} className="hidden peer" required />
                                <label htmlFor={technology.id} className="label-checkbox-advanced">
                                    <div className="block">
                                        {technology.icon}
                                        <div className="w-full text-lg font-semibold mt-2">{technology.title}</div>
                                        <div className="w-full text-sm">{technology.description}</div>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Checkbox