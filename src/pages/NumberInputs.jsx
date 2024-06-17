import { useRef, useState } from "react";
import { CopyIcon, LocationIcon, PhoneIcon } from "../components/Icons"
import { countries, numbers } from "../constants/Data"

const NumberInputs = () => {
    const inputs = Array.from({ length: 6 }, (_, i) => i + 1);
    const inputRefs = useRef([]);

    const handleChange = (e, idx) => {
        const { value } = e.target;
        if (value.length === 1 && idx < inputs.length - 1) {
        inputRefs.current[idx + 1].focus();
        }
    };

    const [selectedNumber, setSelectedNumber] = useState(numbers[0] || '');
    const [tooltipText, setTooltipText] = useState('Copy to clipboard');

    // Handle the copy button click event
    const handleCopyClick = async () => {
        try {
            // Update the tooltip text to indicate success
            setTooltipText('Copied');

            // Attempt to write the selected number to the clipboard
            await navigator.clipboard.writeText(selectedNumber);
                        
            // Display an alert to the user indicating the text has been copied
            alert('Copied to clipboard: ' + selectedNumber);
        } catch (err) {
            // Log an error if the clipboard operation fails
            console.error('Failed to copy: ', err);
        }
        
        // Reset the tooltip text to its default state after 2 seconds
        setTimeout(() => setTooltipText('Copy to clipboard'), 1000);
    };

  return (
    <section className="min-h-screen">
        <div className= "max-w-screen-xl mx-auto px-2 lg:px-12 py-8 lg:py-16 space-y-8">

            {/* Default number input */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">

                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Default number input</h1>
                    <h2 className=" header-two ">
                        Use this component to set a number value inside a form field by applying the 
                        <span className="highlighted-text"> type=&quot;number&quot; </span>attribute.
                    </h2>
                </div>

                {/* Outlined Number Input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label htmlFor="outlined-number-input" 
                        className=" label-basic "
                    >
                        Select a number:
                    </label>

                    <input type="number" name="number" id="outlined-number-input" 
                        placeholder="12345"
                        className=" input-basic " 
                    />

                </form>
            </div>


            
            {/* Zip-input */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">

                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Zip-input</h1>
                    <h2 className=" header-two ">
                        Use this example with an icon and helper text to set a ZIP code value inside a form field by also applying the 
                        <span className="highlighted-text"> &quot;pattern&quot; </span>attribute to validate the input using a regular expression for a 5 digit number. 
                    </h2>
                </div>

                {/* zip-input */}
                <form action="" method="post" className="w-full space-y-2">

                    <label htmlFor="zip-input" 
                        className=" label-basic "
                    >
                        zip-input
                    </label>

                    <div className=" relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <LocationIcon className=" w-4 h-4 icon "/>
                        </div>
                        <input type="text" name="text" id="zip-input" 
                            placeholder=" 12345 or 12345-6789 "
                            pattern="^\d{5}(-\d{4})?$"
                            required
                            className="input-basic ps-10 "
                        />
                    </div>
                    <p className=" helper-text ">
                        Please select a 5 digit number from 0 to 9.
                    </p>
                </form>
            </div>



            {/* Phone number input */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">

                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Phone number input</h1>
                    <h2 className=" header-two ">
                        Use this example to set a phone number inside a form field based on the 
                        <span className="highlighted-text"> type=&quot;phone&quot; or type=&quot;tel&quot; </span>attribute and a dropdown menu to select the country code.
                    </h2>
                </div>

                {/* Phone number input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label htmlFor="phone-input" 
                        className=" label-basic "
                    >
                        Select a number:
                    </label>

                    <div className="flex">
                        <select id="countries" 
                            defaultValue="default"
                            className="dropdown-btn" 
                        >
                            {countries.map(country => (
                                <option 
                                    key={country.value} 
                                    value={country.value} 
                                    disabled={country.disabled}
                                >
                                    {country.value} {country.code}
                                </option>
                            ))}
                        </select>

                        <input type="phone" name="phone" id="phone-input" 
                            placeholder="0703 436 6839"
                            className=" input-basic2 " 
                        />
                    </div>

                </form>

                {/* Phone number input 2 */}
                <form action="" method="post" className="w-full space-y-2">

                    <label htmlFor="phone2" 
                        className=" label-basic "
                    >
                        Phone number:
                    </label>

                    <div className=" relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <PhoneIcon className=" w-4 h-4 icon "/>
                        </div>
                        <input type="text" name="text" id="phone2" 
                            placeholder=" 0703-456-7890 "
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                            className=" input-basic ps-10 "
                        />
                    </div>

                    <p className=" helper-text ">
                        Select a phone number that matches the format.
                    </p>
                </form>

                {/* Number verification */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label htmlFor="number-verification" 
                        className=" label-basic "
                    >
                        Select a number:
                    </label>

                    <div className="flex">
                        <select id="countries" 
                            defaultValue="default"
                            className="dropdown-btn" 
                        >
                            {countries.map(country => (
                                <option 
                                    key={country.value} 
                                    value={country.value} 
                                    disabled={country.disabled}
                                >
                                    {country.value} {country.code}
                                </option>
                            ))}
                        </select>

                        <input type="phone" name="phone" id="number-verification" 
                            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                            placeholder="0703-436-6839"
                            required
                            className=" input-basic2 " 
                        />
                    </div>

                    <p className=" helper-text ">
                        We will send you an SMS with a verification code.
                    </p>
                    <button type="submit" 
                        className=" btn2 p-2 w-full"
                    >
                        Send verification code
                    </button>

                </form>

            </div>

            

            {/* Floating Label Phone input */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Floating Label Phone input</h1>
                    <h2 className=" header-two ">
                        Use this example to set a floating label for a phone number inside a form field .
                    </h2>
                </div>

                {/* Floating Label Phone input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <div className=" relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <PhoneIcon className=" w-4 h-4 icon "/>
                        </div>
                        <input type="text" name="text" id="floating-label-phone-input" 
                            placeholder=" "
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                            className="peer input-standard ps-10 "
                        />
                        <label htmlFor="floating-label-phone-input" 
                            className=" label-floating2 "
                        >
                            Phone number:
                        </label>
                    </div>

                </form>
            </div>



            {/* Pin code input */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Pin code input</h1>
                    <h2 className=" header-two ">
                        Use this example of a pin code input to set a 6 digit code. This can be used when setting up a new account 
                        or when making a payment and the code is sent via phone or email.
                    </h2>
                </div>

                <form action="" method="post" className="w-full space-y-2">
                    <div className="flex space-x-2 ">
                        {inputs.map((num, idx) => (
                            <div key={num}>
                                <label htmlFor={`code-${num}`} className="sr-only">{`Code ${num}`}</label>
                                <input
                                    type="text"
                                    maxLength="1"
                                    id={`code-${num}`}
                                    className=" input-basic w-9 h-9 text-center"
                                    required
                                    onChange={(e) => handleChange(e, idx)}
                                    ref={(el) => (inputRefs.current[idx] = el)}
                                />
                            </div>
                        ))}
                    </div>

                    <p className=" helper-text ">
                        Please introduce the 6 digit code we sent via email.
                    </p>
                </form>
            </div>



            {/* Phone number select */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Phone number select</h1>
                    <h2 className=" header-two ">
                        Use this example to select one of your saved phone numbers from an application with a copy-paste feature.
                    </h2>
                </div>

                
                <form action="" method="post" className="w-full space-y-2">

                    <div className="mb-2 flex justify-between items-center">
                        <label htmlFor="search-dropdown" className=" label-basic ">
                            Choose a category
                        </label>
                        <a href="#" className="text-blue-700 dark:text-blue-500 text-xs font-medium hover:underline">
                            Manage numbers
                        </a>
                    </div>

                    <div className="relative flex">
                        <select id="countries" 
                            defaultValue="default"
                            onChange={(e) => setSelectedNumber(e.target.value)}
                            className="input-basic3 " 
                        >
                            {numbers.map(number => (
                                <option 
                                    key={number} 
                                    value={number} 
                                >
                                    {number}
                                </option>
                            ))}
                        </select>
                        <div className="group">

                            <button type="button" 
                                className=" btn2a "
                                onClick={handleCopyClick}
                            >
                                <CopyIcon className="w-6 h-4 text-white "/>
                            </button>
                            <div 
                                className="absolute right-0 -top-8 z-10 w-32 p-2 tooltip"
                            >
                                {tooltipText}
                            </div>
                        </div>
                    </div>
                    <p className=" helper-text ">
                        Please set your primary phone number.
                    </p>
                </form>
            </div>

        </div>

    </section>    
  )
}

export default NumberInputs