import React from "react";

function Form() {
  
    return (
        <>
     <section className="min-h-screen">
    <div className="container flex flex-col min-h-screen px-6 mx-auto">
        <div className="flex-1 lg:flex lg:items-center items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
                <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Contactate con <span className="inline-block text-indigo-600 ">
                nosotros
                </span></h1>

                <p className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">Sacate todas tus dudas.</p>

                <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </p>
                </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">

                    <form className="mt-4">
                        <div className="flex-1">
                            <label className="font-sans block mb-2 text-m text-gray-600 dark:text-gray-200">Nombre</label>
                            <input type="text" placeholder="Julian" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-m text-gray-600 dark:text-gray-200">Email</label>
                            <input type="email" placeholder="Julian@ejemplo.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <button className="w-full px-6 py-3 mt-6 text-sm font-sans tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-50">
                            Me interesa!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    );
}

export default Form;
