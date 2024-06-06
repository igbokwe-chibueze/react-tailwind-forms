import { categories } from "../constants/Data"
import Dropdown from "./Dropdown"
import { ClickIcon, MailIcon, SearchIcon, UserIcon } from "./Icons"

const GeneralInputs = () => {
  return (
    <section className="min-h-screen">
        <div className=" max-w-screen-xl mx-auto text-center px-4 lg:px-12 py-8 lg:py-16 ">
            <div className=" mx-auto w-4/5 px-4 pt-14 pb-6 space-y-16">

                {/* Basic Styles */}
                <div className="mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                    {/* Header */}
                    <div className=" space-y-2 ">
                        <h1 className=" header-one ">Basic Styles</h1>
                        <h2 className=" header-two ">
                            Refer to the following example to create default-sized input fields and to apply the disabled state to an input field.
                        </h2>
                    </div>

                    {/* Form */}
                    <form action="" method="post" className="w-full space-y-8">

                        {/* Outlined Input */}
                        <div className=" space-y-2 ">
                            <label htmlFor="outlined-input" 
                                className=" label-basic "
                            >
                                Outlined
                            </label>
                            <input type="text" name="text" id="outlined-input" 
                                placeholder="Outlined Input"
                                className=" input-basic " 
                            />
                        </div>

                        {/* Filled Input */}
                        <div className=" space-y-2 ">
                            <label htmlFor="filled-input" 
                                className=" label-basic "
                            >
                                Filled Input
                            </label>
                            <input type="text" name="text" id="filled-input" 
                                placeholder="Filled Input"
                                className=" input-filled " 
                            />
                        </div>

                        {/* Standard Input */}
                        <div className=" space-y-2 ">
                            <label htmlFor="standard-input" 
                                className=" label-basic "
                            >
                                Standard Input
                            </label>
                            <input type="text" name="text" id="standard-input" 
                                placeholder="Standard Input"
                                className=" input-standard " 
                            />
                        </div>

                        {/* Disabled State */}
                        <div className=" space-y-2 ">
                            <label htmlFor="disabled-input" 
                                className=" label-basic "
                            >
                                Disabled State
                            </label>
                            <input type="text" name="text" id="default-input" 
                                placeholder=" Disabled State "
                                className=" input-basic bg-gray-100 cursor-not-allowed " 
                                disabled
                            />
                        </div>
                    </form>
                </div>

                {/* Validation Styles */}
                <div className="mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                    {/* Header */}
                    <div className=" space-y-2 ">
                        <h1 className=" header-one ">Validation</h1>
                        <h2 className=" header-two ">
                            Refer to the following example to learn how to apply validation styles for success and error messages.
                        </h2>
                    </div>
                    
                    {/* Form */}
                    <form action="" method="post" className="w-full space-y-8">

                        {/* Success */}
                        <div className=" space-y-2 ">
                            <label htmlFor="success-input" 
                                className=" label-basic "
                            >
                                Success
                            </label>
                            <input type="text" name="text" id="success-input" 
                                placeholder=" Success "
                                className=" peer input-basic
                                valid:border-green-500 valid:text-green-500 dark:valid:text-green-900 
                                valid:bg-green-50 dark:valid:bg-green-300 "
                            />
                            <p className=" text-sm font-medium text-left invisible peer-valid:visible text-green-600 dark:text-green-500 ">
                                Success message.
                            </p>
                        </div>

                        {/* Error */}
                        <div className=" space-y-2 ">
                            <label htmlFor="error-input" 
                                className=" label-basic 
                                after:content-['*'] after:ml-0.5 after:text-red-500"
                            >
                                Email
                            </label>

                            <div className=" instruction-container ">
                                <ClickIcon className={" w-16 h-16 sm:w-5 sm:h-5"}/>
                                <p className=" instruction-text ">
                                    Try making the email address invalid to see the styles change.
                                </p>
                            </div>

                            <input type="email" name="email" id="error-input" 
                                placeholder=" name@creativa.com "
                                className="peer input-basic
                                invalid:border-red-500 invalid:text-red-500 dark:invalid:text-red-900 
                                invalid:bg-red-50 dark:invalid:bg-red-300"
                            />

                            <p className=" text-sm font-medium text-left invisible peer-invalid:visible text-red-600 dark:text-red-500"
                            >
                                Please provide a valid email address.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Input-group */}
                <div className="mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                    {/* Header */}
                    <div className=" space-y-2 ">
                        <h1 className=" header-one ">Input-group</h1>
                        <h2 className=" header-two ">
                            Use this example to add a descriptive icon or additional text inside the input field.
                        </h2>
                    </div>

                    {/* Form */}
                    <form action="" method="post" className="w-full space-y-8">

                        {/* Input-group-1 */}
                        <div className=" space-y-2 ">
                            <label htmlFor="input-group-1" 
                                className=" label-basic 
                                after:content-['*'] after:ml-0.5 after:text-red-500"
                            >
                                Email
                            </label>
                            
                            <div className=" relative ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <MailIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                                </div>
                                <input type="email" name="email" id="input-group-1" 
                                    placeholder=" name@creativa.com "
                                    required
                                    className="input-basic ps-10 input-placeholder-invalid input-invalid"
                                />
                            </div>
                        </div>

                        {/* Input-group-2 */}
                        <div className=" space-y-2 ">
                            <label htmlFor="input-group-2" 
                                className=" label-basic "
                            >
                                Username
                            </label>
                            
                            <div className=" flex ">
                                <div 
                                    className=" inline-flex items-center px-3 bg-gray-200 dark:bg-gray-600 
                                    rounded-e-0 rounded-s-md border border-e-0 border-gray-300 dark:border-gray-600"
                                >
                                    <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                                </div>
                                <input type="text" name="text" id="input-group-2" 
                                    placeholder="okoro amina"
                                    className=" input-basic rounded-none rounded-e-lg"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Search Input and Dropdown */}
                <div className="mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                    {/* Header */}
                    <div className=" space-y-2 ">
                        <h1 className=" header-one ">Search Input and Dropdown</h1>
                        <h2 className=" header-two ">
                            Use these example to position the submit button inside the input field and add a dropdown
                        </h2>
                    </div>

                    {/* Form */}
                    <form action="" method="post" className="w-full space-y-8">

                        {/* Search Input */}
                        <div className=" space-y-2 ">
                            <label htmlFor="search" 
                                className=" label-basic "
                            >
                                Username
                            </label>

                            <div className=" relative ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                                </div>
                                <input type="search" name="search" id="search" 
                                    placeholder="name@creativa.com"
                                    //required
                                    className=" input-basic p-4 ps-10 "
                                />
                                <button type="submit" 
                                    className=" absolute end-2.5 bottom-2.5 px-4 py-2 text-sm font-medium text-white rounded-lg
                                    bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 
                                    focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 "
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Search Input2 */}
                        <div className=" space-y-2 ">
                            <label htmlFor="search2" 
                                className=" label-basic "
                            >
                                Item
                            </label>

                            <div className=" relative ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                                </div>
                                <input type="search" name="search" id="search2" 
                                    placeholder="search"
                                    className=" input-basic p-4 ps-10 "
                                />
                                <button type="submit" 
                                    className=" absolute end-2.5 bottom-2.5 px-4 py-2 text-sm font-medium text-white rounded-lg
                                    bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 
                                    focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 "
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Dropdown Input */}
                        <div className=" space-y-2 ">
                            <label htmlFor="search-dropdown" 
                                className=" label-basic "
                            >
                                Choose a category
                            </label>
                            <div className="flex">
                                <Dropdown data={categories}/>
                                <div className="relative w-full">
                                    <input type="search" name="search" id="search" 
                                        placeholder="search"
                                        className=" input-basic2 p-3.5 "
                                    />
                                    <button type="submit" 
                                        className=" absolute top-0 end-0 p-2.5 h-full 
                                        text-sm font-medium text-white bg-blue-700 rounded-e-lg
                                        border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <SearchIcon className="w-6 h-4 text-white "/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* <form className="max-w-sm mx-auto">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Select an option
                            </label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </form> */}

                    </form>
                </div>                 
            </div>


        </div>
    </section>
  )
}

export default GeneralInputs