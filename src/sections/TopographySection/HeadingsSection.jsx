import { AngleRightIcon, ArrowRightIcon } from "../../components/Icons"
import { breadcrumbs } from "../../constants/Data"


const HeadingsSection = () => {
  return (
    <section className="min-h-screen">
        <div className= "max-w-screen-xl mx-auto px-2 lg:px-12 py-8 lg:py-16 space-y-8">
            
            {/* Default heading */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Default heading</h1>
                    <h2 className=" header-two ">
                        Use this example of a H1 heading in the context of a paragraph and CTA button for landing pages.
                    </h2>
                </div>

                <div className=" w-full text-center py-4 lg:py-8 ">
                    <h1 className=" heading-one ">
                        We invest in the world’s potential
                    </h1>

                    <p className=" mb-6 sm:px-16 xl:px-48 paragraph ">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>

                    <a href="https://github.com/igbokwe-chibueze" 
                        className="group inline-flex items-center justify-center px-5 py-3 rounded-lg text-base font-medium text-center
                        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Learn more
                        <ArrowRightIcon className={" ml-2 -mr-1 group-hover:translate-x-1 transition-transform duration-700 ease-in-out "}/>
                    </a>
                </div>
            </div>



            {/* Second-level heading */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Second-level heading</h1>
                    <h2 className=" header-two ">
                        Use this example of a second-level<span className="highlighted-text"> &quot; H2 &quot; </span> 
                        heading as the main subtitle for each section of your web page.
                    </h2>
                </div>

                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Payments tool for companies</h2>

                    <p className="my-4 paragraph2 dark:text-gray-500 ">
                        Start developing with an open-source library of over 450+ UI components, sections, 
                        and pages built with the utility classes from Tailwind CSS and designed in Figma.
                    </p>
                    
                    <p className="mb-4 paragraph2">
                        Deliver great service experiences fast - without the complexity of traditional ITSM solutions. 
                        Accelerate critical development work, eliminate toil, and deploy changes with ease.
                    </p>

                    <a href="https://github.com/igbokwe-chibueze" 
                        className=" inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Read more
                        <ArrowRightIcon className={" ml-2 -mr-1 "}/>
                    </a>
                </div>
            </div>



            {/* Highlighted heading */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Highlighted heading</h1>
                    <h2 className=" header-two ">
                        Use this example to highlight a certain portion of the heading text with a different color.
                    </h2>
                </div>

                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">
                    <h1 
                        className=" heading-one "
                    >
                        Get back to growth with <span className="text-blue-600 dark:text-blue-500">the world&apos;s #1</span> CRM.
                    </h1>

                    <p className="paragraph">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </div>



            {/* Heading mark  */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Heading mark </h1>
                    <h2 className=" header-two ">
                        This example can be used to mark one part of the heading text with a solid background for highlighting.
                    </h2>
                </div>

                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">
                    <h1 
                        className=" heading-one "
                    >
                        Regain <mark className="px-2 text-white bg-blue-600 dark:bg-blue-500 rounded">control</mark> over your days
                    </h1>

                    <p className="paragraph">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </div>



            {/* Heading mark  */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Heading gradient</h1>
                    <h2 className=" header-two ">
                        Use this example to highlight a portion of the heading text by using a gradient style.
                    </h2>
                </div>

                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">
                    <h1 
                        className=" heading-one "
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">Better Data</span> Scalable AI.
                    </h1>

                    <p className="paragraph">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </div>



            {/* Heading underline  */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Heading underline</h1>
                    <h2 className=" header-two ">
                        Get started with this example to underline an important part of the heading component using the offset feature from Tailwind CSS.
                    </h2>
                </div>

                {/* decoration-solid */}
                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">
                    <p className=" header-one ">Default Decoration: &quot; decoration-solid &quot; </p>

                    <h1 
                        className=" heading-one "
                    >
                        We invest in the 
                        <span className="ml-2 underline decoration-blue-400 dark:decoration-blue-600 decoration-8 underline-offset-3">
                            world’s potential
                        </span>
                    </h1>

                    <p className="paragraph">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>

                {/* Decoration-wavy */}
                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">
                    <p className=" header-one ">Decoration-wavy</p>
                    <h1 
                        className=" heading-one "
                    >
                        We invest in the 
                        <span className="ml-2 underline decoration-blue-400 dark:decoration-blue-600 decoration-wavy decoration-8 underline-offset-3">
                            world’s potential
                        </span>
                    </h1>

                    <p className="paragraph">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </div>



            {/* Breadcrumb context  */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Breadcrumb context</h1>
                    <h2 className=" header-two ">
                        Get started with this example to position a breadcrumb component above the heading component.
                    </h2>
                </div>

                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">

                    <nav className="flex mb-4">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            {breadcrumbs.map((breadcrumb, index) => (
                                <li key={index} className={`inline-flex items-center ${breadcrumb.current ? '' : 'flex'}`}>
                                    {index !== 0 && (
                                        <AngleRightIcon className="w-6 h-6 mx-1 text-gray-500 dark:text-gray-400" />
                                    )}
                                    {breadcrumb.current ? (
                                        <span className="ml-1 md:ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {breadcrumb.name}
                                        </span>
                                    ) : (
                                        <a href={breadcrumb.href} 
                                            className="inline-flex text-sm font-medium items-center text-gray-700 hover:text-blue-600 
                                            dark:text-gray-400 dark:hover:text-white"
                                        >
                                            {breadcrumb.icon && 
                                                <div className="mr-2.5">
                                                    {breadcrumb.icon}
                                                </div>
                                            }
                                            {breadcrumb.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <h1 className=" heading-one ">
                        Team management
                    </h1>
                </div>

            </div>



            {/* Badge context  */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Badge context</h1>
                    <h2 className=" header-two ">
                        Use this example to show a badge component inside the heading text element as a secondary indicator.
                    </h2>
                </div>

                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">

                    <h1 
                        className=" flex items-center heading-one "
                    >
                        Creativa 
                        <span 
                            className="bg-blue-100 dark:bg-blue-200 px-2.5 py-0.5 mx-2 rounded
                            text-2xl font-semibold text-blue-800 dark:text-blue-800 "
                        >
                            PRO
                        </span>
                    </h1>

                    <p className="paragraph">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </div>



            {/* Secondary text  */}
            <div 
                className=" max-w-screen-xl mx-auto rounded-xl border-2 border-gray-200 "
            >
                {/* Header */}
                <div 
                    className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
                >
                    <h1 className=" header-one ">Secondary text</h1>
                    <h2 className=" header-two ">
                        This example can be used to add a secondary text inside the main heading component.
                    </h2>
                </div>

                <div className=" w-full px-4 lg:px-12 py-4 lg:py-8 ">

                    <h1 
                        className=" flex items-center heading-one "
                    >
                        Creativa 
                        <span className="ml-2 font-semibold text-gray-500 dark:text-gray-400 ">
                            This is secondary text
                        </span>
                    </h1>

                    <p className="paragraph">
                        Here at Creativa we focus on markets where technology, innovation, 
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default HeadingsSection