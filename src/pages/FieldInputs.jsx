import Dropdown from "../components/Dropdown"
import { ClickIcon, MailIcon, MicrophoneIcon, SearchIcon, UserIcon, VoiceIcon } from "../components/Icons"
import { categories } from "../constants/Data"


const FieldInputs = () => {
  return (
   <section className="min-h-screen">
        <div className= "max-w-screen-xl mx-auto px-2 lg:px-12 py-8 lg:py-16 space-y-8">

            {/* Basic Styles */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Basic Styles</h1>
                    <h2 className=" header-two ">
                        Refer to the following example to create default-sized input fields and to apply the disabled state to an input field.
                    </h2>
                </div>

                {/* Outlined Input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label htmlFor="outlined-input" 
                        className=" label-basic "
                    >
                        Outlined
                    </label>

                    <input type="text" name="text" id="outlined-input" 
                        placeholder="Outlined Input"
                        className=" input-basic " 
                    />

                </form>


                {/* Filled Input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label htmlFor="filled-input" 
                        className=" label-basic "
                    >
                        Filled Input
                    </label>

                    <input type="text" name="text" id="filled-input" 
                        placeholder="Filled Input"
                        className=" input-filled " 
                    />

                </form>


                {/* Standard Input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label htmlFor="standard-input" 
                        className=" label-basic "
                    >
                        Standard Input
                    </label>
                    <input type="text" name="text" id="standard-input" 
                        placeholder="Standard Input"
                        className=" input-standard " 
                    />

                </form>


                {/* Disabled State */}
                <form action="" method="post" className="w-full space-y-2">

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

                </form>
            </div>



            {/* floating labels */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Floating Labels Styles</h1>
                    <h2 className=" header-two ">
                        Refer to the following examples for floating labels.
                    </h2>
                </div>

                {/* Outlined floating labels */}
                <form action="" method="post" className="relative w-full ">
                    <input type="text" name="name" id="outlined-floating-labels" 
                        placeholder=" "
                        className="peer input-basic " 
                    />
                    
                    <label htmlFor="outlined-floating-labels" 
                        className=" label-floating "
                    >
                        Name
                    </label>
                </form>


                {/* Filled floating labels */}
                <form action="" method="post" className="relative w-full ">
                    <input type="text" name="name" id="filled-floating-labels" 
                        placeholder=" "
                        className=" peer input-filled pt-4 " 
                    />
                    
                    <label htmlFor="filled-floating-labels" 
                        className=" label-floating-filled "
                    >
                        Name
                    </label>
                </form>


                {/* Standard floating labels */}
                <form action="" method="post" className="relative w-full ">
                    <input type="text" name="name" id="standard-floating-labels" 
                        placeholder=" "
                        className="peer input-standard " 
                    />
                    
                    <label htmlFor="standard-floating-labels" 
                        className=" label-floating "
                    >
                        Name
                    </label>
                </form>
            </div>



            {/* Validation Styles */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Validation</h1>
                    <h2 className=" header-two ">
                        Refer to the following example to learn how to apply validation styles for success and error messages.
                    </h2>
                </div>

                {/* Success */}
                <form action="" method="post" className="w-full space-y-2">

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

                </form>


                {/* Error */}
                <form action="" method="post" className="w-full space-y-2">
                    <label htmlFor="error-input" 
                        className=" label-basic 
                        after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Email
                    </label>

                    <div className=" instruction-container ">
                        <ClickIcon className={" w-16 h-16 sm:w-5 sm:h-5"}/>
                        <p className=" instruction-text ">
                            Try making the email address valid by addidng &quot;@&quot; after name to see the styles change.
                        </p>
                    </div>

                    <input type="email" name="email" id="error-input" 
                        placeholder=" name@creativa.com "
                        className="peer input-basic
                        invalid:border-red-500 invalid:text-red-500 dark:invalid:text-red-900 
                        invalid:bg-red-50 dark:invalid:bg-red-300"
                        // This is just used here to create a default value for testing.
                        defaultValue="namecreativa.com"
                    />

                    <p className=" text-sm font-medium text-left invisible peer-invalid:visible text-red-600 dark:text-red-500"
                    >
                        Please provide a valid email address.
                    </p>
                </form>
            </div>



            {/* Input-group */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Input-group</h1>
                    <h2 className=" header-two ">
                        Use this example to add a descriptive icon or additional text inside the input field.
                    </h2>
                </div>

                {/* input-group-1 */}
                <form action="" method="post" className="w-full space-y-2">

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
                </form>


                {/* input-group-2 */}
                <form action="" method="post" className="w-full space-y-2">

                    <label htmlFor="voice-search" 
                        className=" label-basic "
                    >
                        Voice Search
                    </label>

                    <div className=" relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <VoiceIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <input type="text" name="text" id="voice-search" 
                            placeholder=" search..... "
                            className="input-basic ps-10 input-placeholder-invalid input-invalid"
                        />
                        <div className=" absolute inset-y-0 end-0 flex items-center pe-3.5 ">
                            <MicrophoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"/>
                        </div>
                    </div>
                </form>



                {/* input-group-3 */}
                <form action="" method="post" className="w-full space-y-2">

                    <label htmlFor="input-group-3" 
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
                        <input type="name" name="name" id="input-group-3" 
                            placeholder="okoro amina"
                            className=" input-basic rounded-none rounded-e-lg"
                        />
                    </div>
                </form>
            </div>



            {/* Search Inputs and Dropdown */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Search Inputs and Dropdown</h1>
                    <h2 className=" header-two ">
                        Use these example to position the submit button inside the input field and add a dropdown
                    </h2>
                </div>


                {/* Search Input */}
                <form action="" method="post" className="w-full space-y-2">
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
                </form>


                {/* Search Input 2 */}
                <form action="" method="post" className="w-full space-y-2">

                    <label htmlFor="search2" 
                        className=" label-basic "
                    >
                        Item
                    </label>

                    <div className=" relative flex items-center space-x-2 ">

                        <input type="search" name="search" id="search" 
                            placeholder="Shopping, News, Finance..."
                            className=" input-basic p-3.5 "
                        />
                        <button type="submit" 
                            className=" p-3.5 h-full 
                            text-sm font-medium text-white bg-blue-700 rounded
                            border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <SearchIcon className="w-6 h-4 text-white "/>
                        </button>
                    </div>
                </form>


                {/* Dropdown */}
                <form action="" method="post" className="w-full space-y-2">

                    <label htmlFor="search-dropdown" 
                        className=" label-basic "
                    >
                        Choose a category
                    </label>

                    <div className="flex">
                        <Dropdown data={categories}/>
                        <div className="relative w-full">
                            <input type="search" name="search" id="search" 
                                placeholder="Shopping, News, Finance..."
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
                </form>

            </div>
            
        </div>
   </section>
  )
}

export default FieldInputs