

const FloatingLabelsForm = () => {
  return (
    <div className="max-w-screen-xl mx-auto items-center px-4 lg:px-6 py-8 lg:py-16">
        <div className="min-h-screen bg-blue-100 p-8">
            <div className=" mx-auto lg:flex flex-wrap lg:justify-between lg:items-center space-y-4">

                {/* *******CARD ONE****** */}
                <div className=" md:w-80 bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative h-48 bg-blue-500 rounded-bl-4xl">
                        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" 
                                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            </path>
                        </svg>
                    </div>
                    <div className="px-10 pt-4 pb-8 rounded-tr-4xl">
                        <h1 className="text-2xl font-semibold text-gray-900">Welcome back!</h1>

                        {/* Form */}
                        <form className="mt-12 space-y-10" action="" method="POST">

                            {/* Name Field */}
                            <div className="relative">
                                <input type="text" name="name" id="name1"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                    focus:outline-none focus:border-blue-600" 
                                    placeholder=" " 
                                />
                                <label htmlFor="name1" 
                                    className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all duration-500 ease-in-out
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 
                                    peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs "
                                >
                                    Name
                                </label>
                            </div>

                            {/* Email Field */}
                            <div className="relative ">
                                <input type="email" name="email" id="email1"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900
                                    focus:outline-none focus:border-blue-600
                                    invalid:border-red-500 invalid:text-red-600" 
                                    placeholder=" " 
                                />
                                <label htmlFor="email1" 
                                    className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all duration-500 ease-in-out
                                    after:content-['*'] after:ml-0.5 after:text-red-500
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                                    peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs"
                                >
                                    Email address
                                </label>
                                <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                                    Please provide a valid email address.
                                </p>
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <input type="password" name="password" id="password1"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                    focus:outline-none focus:border-blue-600" 
                                    placeholder=" " 
                                    required
                                />
                                <label htmlFor="password1" 
                                    className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all duration-500 ease-in-out
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 
                                    peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs"
                                >
                                    Password
                                </label>
                                <a 
                                    href="#" 
                                    className="mt-4 block text-sm text-left font-medium text-blue-600 hover:underline 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                > 
                                    Forgot your password?
                                </a>
                            </div>

                            <input type="sumbit" value="Sign in" 
                                className="mt-20 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 
                                text-white font-semibold text-center block w-full 
                                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer" 
                            />
                        </form>

                        <p 
                            className="mt-4 block text-sm text-center font-medium text-gray-500 dark:text-gray-400"
                        > 
                            Don&apos;t have an account? <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Create one</a>
                        </p>
                    </div>
                </div>
                
                {/* *******CARD TWO****** */}
                <div className=" md:w-80 bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative h-48 bg-blue-500 rounded-bl-4xl">
                        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" 
                                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            </path>
                        </svg>
                    </div>
                    <div className="px-10 pt-4 pb-8 rounded-tr-4xl">
                        <h1 className="text-2xl font-semibold text-gray-900">Welcome back 2!</h1>

                        {/* Form */}
                        <form className="mt-12 space-y-10" action="" method="POST">

                            {/* Name Field */}
                            <div className="relative">
                                <input type="text" name="name" id="name2"
                                    className="peer h-10 w-full pl-2 rounded-md border-2 border-gray-300 text-gray-900
                                    focus:outline-none focus:border-blue-600" 
                                    placeholder=" " 
                                />
                                <label htmlFor="name2" 
                                    className="absolute left-2 -top-2 text-gray-600 text-xs bg-white transition-all duration-500 ease-in-out
                                    peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-white
                                    peer-focus:left-2 peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:bg-white"
                                >
                                    Name
                                </label>
                            </div>

                            {/* Email Field */}
                            <div className="relative ">
                                <input type="email" name="email" id="email2"
                                    className="peer h-10 w-full pl-2 rounded-md border-2 border-gray-300 text-gray-900
                                    focus:outline-none focus:border-blue-600
                                    invalid:border-red-500 invalid:text-red-600"
                                    placeholder=" " 
                                />
                                <label htmlFor="email2" 
                                    className="absolute left-2 -top-2 text-gray-600 text-xs bg-white transition-all duration-500 ease-in-out
                                    after:content-['*'] after:ml-0.5 after:text-red-500
                                    peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-white
                                    peer-focus:left-2 peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:bg-white"
                                >
                                    Email address
                                </label>
                                <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                                    Please provide a valid email address.
                                </p>
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <input type="password" name="password" id="password2"
                                    className="peer h-10 w-full pl-2 rounded-md border-2 border-gray-300 text-gray-900
                                    focus:outline-none focus:border-blue-600" 
                                    placeholder=" " 
                                />
                                <label htmlFor="password2" 
                                    className="absolute left-2 -top-2 text-gray-600 text-xs bg-white transition-all duration-500 ease-in-out
                                    peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-white
                                    peer-focus:left-2 peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:bg-white"
                                >
                                    Password
                                </label>
                            </div>

                            <input type="sumbit" value="Sign in" 
                                className="mt-20 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 
                                text-white font-semibold text-center block w-full 
                                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer" 
                            />
                        </form>

                        <a 
                            href="#" 
                            className="mt-4 block text-sm text-center font-medium text-blue-600 hover:underline 
                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                        > 
                            Forgot your password?
                        </a>
                    </div>
                </div>


                {/* *******CARD THREE****** */}
                <div className=" md:w-80 bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative h-48 bg-blue-500 rounded-bl-4xl">
                        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" 
                                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            </path>
                        </svg>
                    </div>
                    <div className="px-10 pt-4 pb-8 rounded-tr-4xl">
                        <h1 className="text-2xl font-semibold text-gray-900">Welcome back 3!</h1>

                        {/* Form */}
                        <form className="mt-12 space-y-10" action="" method="POST">

                            {/* Name Field */}
                            <div className="relative">
                                <input type="text" name="name" id="name3"
                                    className="peer h-14 w-full pl-2 pt-2 rounded-t-md border-0 border-b-2 border-gray-400 bg-gray-300 text-gray-900
                                    focus:outline-none focus:border-blue-600" 
                                    placeholder=" " 
                                />
                                <label htmlFor="name3" 
                                    className="absolute left-2 top-0.5 text-gray-600 text-xs transition-all duration-500 ease-in-out
                                    peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400
                                    peer-focus:left-2 peer-focus:top-0.5 peer-focus:text-gray-600 peer-focus:text-xs"
                                >
                                    Namess
                                </label>
                            </div>

                            {/* Email Field */}
                            <div className="relative ">
                                <input type="email" name="email" id="email3"
                                    className="peer h-14 w-full pl-2 pt-2 rounded-t-md border-0 border-b-2 border-gray-400 bg-gray-300 text-gray-900
                                    focus:outline-none focus:border-blue-600
                                    invalid:border-red-500 invalid:text-red-600" 
                                    placeholder=" "  
                                />
                                <label htmlFor="email3" 
                                    className="absolute left-2 top-0.5 text-gray-600 text-xs transition-all duration-500 ease-in-out
                                    after:content-['*'] after:ml-0.5 after:text-red-500
                                    peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400
                                    peer-focus:left-2 peer-focus:top-0.5 peer-focus:text-gray-600 peer-focus:text-xs"
                                >
                                    Email address
                                </label>
                                <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                                    Please provide a valid email address.
                                </p>
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <input type="password" name="password" id="password3"
                                    className="peer h-14 w-full pl-2 pt-2 rounded-t-md border-0 border-b-2 border-gray-400 bg-gray-300 text-gray-900
                                    focus:outline-none focus:border-blue-600" 
                                    placeholder=" "  
                                />
                                <label htmlFor="password3" 
                                    className="absolute left-2 top-0.5 text-gray-600 text-xs transition-all duration-500 ease-in-out
                                    peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400
                                    peer-focus:left-2 peer-focus:top-0.5 peer-focus:text-gray-600 peer-focus:text-xs"
                                >
                                    Password
                                </label>
                            </div>

                            <input type="sumbit" value="Sign in" 
                                className="mt-20 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 
                                text-white font-semibold text-center block w-full 
                                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer" 
                            />
                        </form>

                        <a 
                            href="#" 
                            className="mt-4 block text-sm text-center font-medium text-blue-600 hover:underline 
                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                        > 
                            Forgot your password?
                        </a>
                    </div>
                </div>


                

                
            </div>
        </div>
        

    </div>
  )
}

export default FloatingLabelsForm