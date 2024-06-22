import { useState } from "react";
import { EyeIcon, EyeSlashIcon, MailIcon, PhoneIcon } from "../components/Icons"

const Forms = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


  return (
    <section className="min-h-screen">
        <div className= "max-w-screen-xl mx-auto px-2 lg:px-12 py-8 lg:py-16 ">

            <form action="" className=" max-w-lg mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-6 ">

                <div className=" grid md:grid-cols-2 gap-6">

                    {/* First Name */}
                    <div className="w-full space-y-2">
                        <label htmlFor="first-name" 
                            className=" label-basic "
                        >
                            First Name
                        </label>

                        <input type="text" name="name" id="first-name" 
                            placeholder="Ada"
                            className=" input-basic " 
                        />
                    </div>

                    {/* Surname */}
                    <div className="w-full space-y-2">
                        <label htmlFor="surname" 
                            className=" label-basic "
                        >
                            Surname
                        </label>

                        <input type="text" name="name" id="surname" 
                            placeholder="Bawa"
                            className=" input-basic " 
                        />
                    </div>
                    
                    {/* Company */}
                    <div className="w-full space-y-2">
                        <label htmlFor="company" 
                            className=" label-basic "
                        >
                            Company
                        </label>

                        <input type="text" name="company" id="company" 
                            placeholder="Creativa"
                            className=" input-basic " 
                        />
                    </div>

                    {/* Phone number */}
                    <div className="w-full space-y-2">
                        
                        <label htmlFor="phone2" 
                            className=" label-basic "
                        >
                            Phone number:
                        </label>

                        <div className=" relative ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <PhoneIcon className=" w-4 h-4 icon "/>
                            </div>
                            <input type="text" name="phone" id="phone2" 
                                placeholder=" 07034567890 "
                                pattern="\d{11}"
                                required
                                className=" input-basic ps-10 "
                            />
                        </div>
                    </div>

                    {/* Website */}
                    <div className="w-full space-y-2">
                        <label htmlFor="website" 
                            className=" label-basic "
                        >
                            Website
                        </label>

                        <input type="url" name="url" id="website" 
                            placeholder="https://www.creativa.com"
                            className="peer input-basic error-validation " 
                        />

                        <p className=" error-notification-text ">
                            Please provide a valid url .
                        </p>
                    </div>

                    {/* Unique visitors (per month) */}
                    <div className="w-full space-y-2">

                        <label htmlFor="outlined-number-input" 
                            className=" label-basic "
                        >
                            Unique visitors (per month)
                        </label>

                        <input type="number" name="number" id="outlined-number-input" 
                            placeholder="12345"
                            className=" input-basic " 
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="w-full space-y-2 ">

                    <label htmlFor="email" 
                        className=" label-basic 
                        after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Email
                    </label>

                    <div className=" relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <MailIcon className=" w-4 h-4 icon "/>
                        </div>
                        <input type="email" name="email" id="email" 
                            placeholder=" name@creativa.com "
                            required
                            className="input-basic ps-10 input-placeholder-invalid input-invalid"
                        />
                    </div>
                </div>
                
                {/* Password */}
                <div className="w-full space-y-2 ">
                    <label htmlFor="password" 
                        className=" label-basic 
                        after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Password
                    </label>

                    <div className=" relative ">
                        <input 
                            type={showPassword ? "text" : "password"}
                            name="password" id="password" 
                            required
                            placeholder=" * * * * * * "
                            className="peer input-basic"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 end-0 flex items-center pe-3.5 "
                        >
                            {showPassword ? <EyeSlashIcon className={"w-6 h-6 icon-hover"}/> : <EyeIcon className={"w-6 h-6 icon-hover"}/>}
                        </button>

                    </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center ">
                    <input id="form-checkbox" type="checkbox" value="" 
                        className=" input-checkbox "
                    />
                    <label htmlFor="form-checkbox" 
                        className="label-checkbox"
                    >
                        I agree with the 
                        <a href="https://github.com/igbokwe-chibueze/react-tailwind-forms" 
                            className=" mx-2 highlighted-text hover:underline"
                        >
                            terms and conditions.
                        </a>
                    </label>
                </div>

                <button type="submit" className=" btn2 px-5 py-2.5 ">
                    Submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default Forms