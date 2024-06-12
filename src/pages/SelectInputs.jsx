import Dropdown from "../components/Dropdown"
import { categories, countries, years } from "../constants/Data"


const SelectInputs = () => {
  return (
    <section className="min-h-screen">
        <div className= "max-w-screen-xl mx-auto px-2 lg:px-12 py-8 lg:py-16 space-y-8">
            
            {/* Select Input */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Select Input</h1>
                    <h2 className=" header-two ">
                        Refer to the following example to create default-sized input fields and to apply the disabled state to an input field.
                    </h2>
                </div>

                {/* Basic Select Input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label className=" label-basic ">
                        Select an option
                    </label>

                    <select id="countries" 
                        defaultValue="default"
                        className="input-basic" 
                    >
                        {countries.map(country => (
                            <option 
                                key={country.value} 
                                value={country.value} 
                                disabled={country.disabled}
                            >
                                {country.label}
                            </option>
                        ))}
                    </select>

                </form>

                {/* Multiple options */}
                <form action="" method="post" className="w-full space-y-2">

                    <label className="label-basic">
                        Apply the <span className="highlighted-text">multiple </span> 
                        attribute to the select component to allow users to select one or more options.
                    </label>

                    <select id="countries_multiple" 
                        multiple
                        className="input-basic" 
                    >
                        {countries.map(country => (
                            <option 
                                key={country.value} 
                                value={country.value} 
                                disabled={country.disabled}
                            >
                                {country.label}
                            </option>
                        ))}
                    </select>

                </form>

                {/* Size attribute */}
                <form action="" method="post" className="w-full space-y-2">

                    <label className="label-basic">
                        Use the <span className="highlighted-text">size </span> 
                        attribute for the select component to specify the number of visible options in the list.
                    </label>

                    <select id="years" 
                        size="5"
                        className="input-basic" 
                    >
                        {years.map(year => (
                            <option 
                                key={year.value} 
                                value={year.value}
                            >
                                {year.value}
                            </option>
                        ))}
                    </select>

                </form>
                
                {/* Disabled Select Input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label className=" label-basic ">
                        Apply the <span className="text-blue-600">disable</span> state to the select component to disallow the selection of new options.
                    </label>

                    <select id="countries" 
                        defaultValue="default"
                        disabled
                        className="input-basic bg-gray-100 cursor-not-allowed" 
                    >
                        {countries.map(country => (
                            <option 
                                key={country.value} 
                                value={country.value} 
                                disabled={country.disabled}
                            >
                                {country.label}
                            </option>
                        ))}
                    </select>

                </form>

                {/* Underline Input */}
                <form action="" method="post" className="w-full space-y-2">
                    
                    <label className=" label-basic ">
                        Underline Input
                    </label>

                    <select id="countries" 
                        defaultValue="default"
                        className="input-standard" 
                    >
                        {countries.map(country => (
                            <option 
                                key={country.value} 
                                value={country.value} 
                                disabled={country.disabled}
                            >
                                {country.label}
                            </option>
                        ))}
                    </select>

                </form>

            </div>


            {/* Select Input And Dropdown */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Select Input And Dropdown</h1>
                    <h2 className=" header-two ">
                        Use this example if you want to create a multi-level dropdown and select component combination.
                    </h2>
                </div>

                <form action="" method="post" className="w-full space-y-2">

                    <label className=" label-basic ">
                        Select Inputs
                    </label>

                    <div className="flex">
                        <Dropdown data={categories}/>

                        <div className=" w-full">
                            <select id="countries" 
                                defaultValue="default"
                                className="input-basic2 rounded-e-lg" 
                            >
                                {countries.map(country => (
                                    <option 
                                        key={country.value} 
                                        value={country.value} 
                                        disabled={country.disabled}
                                    >
                                        {country.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
            </div>


            {/* Double Select Input */}
            <div className="max-w-md mx-auto border-2 border-gray-200 px-4 pt-14 pb-6 space-y-8">
                {/* Header */}
                <div className=" space-y-2 ">
                    <h1 className=" header-one ">Double Select Input</h1>
                    <h2 className=" header-two ">
                        Use this example if you want to create a double select component combination.
                    </h2>
                </div>

                <form action="" method="post" className="w-full space-y-2">

                    <label className=" label-basic ">
                        Double Select Input
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
                                    {country.value}
                                </option>
                            ))}
                        </select>

                        <div className=" w-full">
                            <select id="countries" 
                                defaultValue="default"
                                className="input-basic2 rounded-e-lg" 
                            >
                                {countries.map(country => (
                                    <option 
                                        key={country.value} 
                                        value={country.value} 
                                        disabled={country.disabled}
                                    >
                                        {country.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </section>
  )
}

export default SelectInputs