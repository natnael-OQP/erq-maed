// import React from 'react';
// import Head from "next/head";

// const Admin = () => {
//     return <div>
//             <Head>
//                 <title>Erqma'ed - CMS Panel</title>
//             </Head>

// <main className="bg-gray-100 text-gray-900 tracking-wider leading-normal">

//     <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">

//         <div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">

//             <div className="pl-4 md:pl-0">
//                 <a className="flex items-center text-blue-900 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="#">
//                     <svg className="fill-current h-6 inline-block text-blue-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                         <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
//                     </svg> Admin Panel
//                 </a>
//             </div>

//             <div className="pr-0 flex justify-end">

//                 <div className="flex relative inline-block float-right">

//                     <div className="relative text-sm">

//                         <button id="userButton" className="flex items-center mr-3 shadow bg-blue-700 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded">
//                             Menu
//                             <svg className="pl-2 h-2 fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
//                                 <g>
//                                     <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
//                                 </g>
//                             </svg>
//                         </button>

//                         <div id="userMenu" className="bg-white rounded shadow-md mt-2 mr-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
//                             <ul className="list-reset">
//                                 <li><a href="#" className="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">My account</a></li>
//                                 <li><a href="#" className="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">Notifications</a></li>
//                                <li>
//                                     <hr className="border-t mx-2 border-gray-400"/>
//                                 </li>
//                                 <li><a href="#" className="px-4 py-2 block text-blue-600 font-light hover:font-bold hover:bg-blue-600 hover:text-white no-underline hover:no-underline">Logout</a></li>
//                             </ul>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//         </div>
//     </nav>
//     {/* !--Container--  */}
//     <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
//         <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
//             <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
//             <div className="block lg:hidden sticky inset-0">
//                 <button id="menu-toggle" className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none">
//                     <svg className="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                     </svg>
//                 </button>
//             </div>
//             <div className="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style="top:6em;" id="menu-content">
//                 <ul className="list-reset py-2 md:py-0">
//                     <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-yellow-600">
//                         <a href='#section1' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
//                             <span className="pb-1 md:pb-0 text-sm">Homepage - Brand Information</span>
//                         </a>
//                     </li>
//                     <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
//                         <a href='#section2' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
//                             <span className="pb-1 md:pb-0 text-sm">About Us - Brand Information</span>
//                         </a>
//                     </li>
//                     <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
//                         <a href='#section3' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
//                             <span className="pb-1 md:pb-0 text-sm">Services</span>
//                         </a>
//                     </li>
//                     <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
//                         <a href='#section4' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
//                             <span className="pb-1 md:pb-0 text-sm">Projects</span>
//                         </a>
//                     </li>

//                     <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
//                         <a href='#section5' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
//                             <span className="pb-1 md:pb-0 text-sm">Events</span>
//                         </a>
//                     </li>

//                     <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
//                         <a href='#section6' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
//                             <span className="pb-1 md:pb-0 text-sm">Blogs</span>
//                         </a>
//                     </li>

//                     <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
//                         <a href='#section7' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
//                             <span className="pb-1 md:pb-0 text-sm">Miscellaneous</span>
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>

//                 {/** <!--Section container--> */}
//         <section className="w-full lg:w-4/5">

//            {/**  <!--Title-->*/}
//             <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
// 				CMS Editor
// 			</h1>

//            {/**  <!--divider--> */}
//             <hr className="bg-gray-300 my-12" />

//             <!--Title-->
//             <h2 id='section1' className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Homepage - Brand Information</h2>

//             <!--Card-->
//             <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
//                 <form>
//                     <label className="block text-gray-400 font-light uppercase md:text-left mb-3 md:mb-0 pr-4" for="">
//                         Hero Section
//                     </label>
//                     <hr className="border-t border-gray-400 mb-5">

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
//                                 Hero - Title
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value="">
//                             <p className="py-2 text-sm text-gray-600">Currently Visible - Lorem Ipsum</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
//                                 Hero - Description
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value="">
//                             <p className="py-2 text-sm text-gray-600">Currently Visible - Village did removed enjoyed explain nor ham saw calling...</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
//                                 Hero - Moto
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value="">
//                             <p className="py-2 text-sm text-gray-600">Currently Visible - Lorem Ipsum Dolor Sit Amet Consect.</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3 float-right">
//                             <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>

//                 <form className="mt-5">
//                     <label className="block text-gray-400 font-light uppercase md:text-left mb-3 md:mb-0 pr-4" for="">
//                         "Why" Section
//                     </label>
//                     <hr className="border-t border-gray-400 mb-5">

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
//                                 What Makes Us Unique - Pointers List
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div className="md:flex mb-6"
//                             <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value="">
//                             <p className="py-2 text-sm text-gray-600">Currently Visible - Lorem Ipsum</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
//                                 Hero - Description
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value="">
//                             <p className="py-2 text-sm text-gray-600">Currently Visible - Village did removed enjoyed explain nor ham saw calling...</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
//                                 Hero - Moto
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value="">
//                             <p className="py-2 text-sm text-gray-600">Currently Visible - Lorem Ipsum Dolor Sit Amet Consect.</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3 float-right">
//                             <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <!--/Card-->

//             <!--divider-->
//             <hr className="bg-gray-300 my-12">

//             <!--Title-->
//             <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">About Us - Brand Information</h2>

//             <!--Card-->
//             <div id='section2' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//                 <form>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
//                                 Text Field
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value="">
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
//                                 Drop down field
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <select name="" className="form-select block w-full focus:bg-white" id="my-select">
//                                 <option value="Default">Default</option>
//                                 <option value="A">A</option>
//                                 <option value="B">B</option>
//                                 <option value="C">C</option>
//                             </select>

//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
//                                 Text Area
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="8"></textarea>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3">
//                             <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//             <!--/Card-->

//             <!--divider-->
//             <hr className="bg-gray-300 my-12">

//             <!--Title-->
//             <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Services</h2>

//             <!--Card-->
//             <div id='section3' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//                 <form>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-multiselect">
//                                 Multi Select
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <select className="form-multiselect block w-full" multiple id="my-multiselect">
//                                 <option>Option 1</option>
//                                 <option>Option 2</option>
//                                 <option>Option 3</option>
//                                 <option>Option 4</option>
//                                 <option>Option 5</option>
//                             </select>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3">
//                             <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//             <!--/Card-->

//             <!--divider-->
//             <hr className="bg-gray-300 my-12">

//             <!--Title-->
//             <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Projects</h2>

//             <!--Card-->
//             <div id='section4' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//                 <form>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-radio">
//                                 Radio Buttons
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div className="mt-2">
//                                 <label className="inline-flex items-center">
//                                     <input type="radio" className="form-radio text-indigo-600" name="radioOption" value="A">
//                                     <span className="ml-2">Radio A</span>
//                                 </label>
//                                 <label className="inline-flex items-center ml-6">
//                                     <input type="radio" className="form-radio" name="radioOption" value="B">
//                                     <span className="ml-2">Radio B</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-checkbox">
//                                 Checkboxes
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-indigo-600" checked>
//                                     <span className="ml-2">Option 1</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-green-500" checked>
//                                     <span className="ml-2">Option 2</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-pink-600" checked>
//                                     <span className="ml-2">Option 3</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3">
//                             <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//             <!--/Card-->

//             <!--divider-->
//             <hr className="bg-gray-300 my-12">

//             <!--Title-->
//             <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Events</h2>

//             <!--Card-->
//             <div id='section5' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//                 <form>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-radio">
//                                 Radio Buttons
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div className="mt-2">
//                                 <label className="inline-flex items-center">
//                                     <input type="radio" className="form-radio text-indigo-600" name="radioOption" value="A">
//                                     <span className="ml-2">Radio A</span>
//                                 </label>
//                                 <label className="inline-flex items-center ml-6">
//                                     <input type="radio" className="form-radio" name="radioOption" value="B">
//                                     <span className="ml-2">Radio B</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-checkbox">
//                                 Checkboxes
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-indigo-600" checked>
//                                     <span className="ml-2">Option 1</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-green-500" checked>
//                                     <span className="ml-2">Option 2</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-pink-600" checked>
//                                     <span className="ml-2">Option 3</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3">
//                             <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//             <!--/Card-->

//             <!--divider-->
//             <hr className="bg-gray-300 my-12">

//             <!--Title-->
//             <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Blogs</h2>

//             <!--Card-->
//             <div id='section6' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//                 <form>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-radio">
//                                 Radio Buttons
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div className="mt-2">
//                                 <label className="inline-flex items-center">
//                                     <input type="radio" className="form-radio text-indigo-600" name="radioOption" value="A">
//                                     <span className="ml-2">Radio A</span>
//                                 </label>
//                                 <label className="inline-flex items-center ml-6">
//                                     <input type="radio" className="form-radio" name="radioOption" value="B">
//                                     <span className="ml-2">Radio B</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-checkbox">
//                                 Checkboxes
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-indigo-600" checked>
//                                     <span className="ml-2">Option 1</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-green-500" checked>
//                                     <span className="ml-2">Option 2</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-pink-600" checked>
//                                     <span className="ml-2">Option 3</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3">
//                             <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//             <!--/Card-->

//             <!--divider-->
//             <hr className="bg-gray-300 my-12">

//             <!--Title-->
//             <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Miscellaneous</h2>

//             <!--Card-->
//             <div id='section7' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//                 <form>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-radio">
//                                 Radio Buttons
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div className="mt-2">
//                                 <label className="inline-flex items-center">
//                                     <input type="radio" className="form-radio text-indigo-600" name="radioOption" value="A">
//                                     <span className="ml-2">Radio A</span>
//                                 </label>
//                                 <label className="inline-flex items-center ml-6">
//                                     <input type="radio" className="form-radio" name="radioOption" value="B">
//                                     <span className="ml-2">Radio B</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex mb-6">
//                         <div className="md:w-1/3">
//                             <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-checkbox">
//                                 Checkboxes
//                             </label>
//                         </div>
//                         <div className="md:w-2/3">
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-indigo-600" checked>
//                                     <span className="ml-2">Option 1</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-green-500" checked>
//                                     <span className="ml-2">Option 2</span>
//                                 </label>
//                             </div>
//                             <div>
//                                 <label className="inline-flex items-center">
//                                     <input type="checkbox" className="form-checkbox text-pink-600" checked>
//                                     <span className="ml-2">Option 3</span>
//                                 </label>
//                             </div>
//                             <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
//                         </div>
//                     </div>

//                     <div className="md:flex md:items-center">
//                         <div className="md:w-1/3"></div>
//                         <div className="md:w-2/3">
//                             <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>

//             </div>

//             <hr className="bg-gray-300 my-12">

//             <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Confirmation</h2>

//             <div id='section8' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//                 <blockquote className="border-l-4 border-yellow-600 italic my-4 pl-8 md:pl-12">Final confirmation disclaimer message etc</blockquote>

//                 <div className="pt-8">

//                     <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4" type="button">
//                         Save
//                     </button>

//                     <button className="shadow bg-yellow-100 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded mr-4" type="button">
//                         Additional Action
//                     </button>

//                     <button className="shadow bg-yellow-100 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded" type="button">
//                         Additional Action
//                     </button>

//                 </div>

//             </div>

//         </section>
//         <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12">
//           <span className="text-base text-yellow-600 font-bold">&lt;</span> <a href="#" className="text-base md:text-sm text-yellow-600 font-bold no-underline hover:underline">Back link</a>
//          </div>

//       </div>

//         </>
//     </div>;
// };

// export default Admin;
