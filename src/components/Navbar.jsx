import React from 'react';
import Button from './Button';
import SplitText from './SplitText';
export function Navbar(){ 
    return(
        <>


        <nav class="fixed w-full z-20 top-0 start-0 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
           
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">うちは</span>
        </a>
        <div class="flex md:order-2 font-aoMono uppercase space-x-3 md:space-x-0 rtl:space-x-reverse">
           
            {/* <button type="button" class="bg-grey hover:bg-white focus:ring-4 focus:outline-none focus:ring-grey font-medium uppercase rounded-full text-sm px-4 py-2 text-center ">Get started</button> */}
            {/* <a href="#" ><SplitText text={"</Home>"}></SplitText></a>
            <a href="#about" className='mx-5' ><SplitText text={"</About>"}></SplitText></a>
            <a href="#work" className='mx-10' ><SplitText text={"</Work>"}></SplitText></a>
            <a href="#contact" className='mx-7' ><SplitText text={"</Contact>"}></SplitText></a> */}
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class=" bg-white/30 backdrop-blur-sm shadow-dark-sm  p-2 font-aoMono uppercase rounded-full justify-center hidden w-full max-w-[35vw] md:flex px-10 md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                <li>
                    <a href="#" class="block py-2 px-3 text-white md:p-0 hover:text-black" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#about" class="block py-2 px-3   md:p-0 text-white md:p-0 hover:text-black">About</a>
                </li>
                <li>
                    <a href="#work" class="block py-2 px-3   md:p-0 text-white md:p-0 hover:text-black">Work</a>
                </li> 
                <li>
                    <a href="#contact" class="block py-2 px-3   md:p-0 text-white md:p-0 hover:text-black">Contact</a>
                </li> 
                </ul>
            </div>
        </div>
        </nav>

        </>
    );
};