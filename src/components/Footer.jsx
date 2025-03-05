import React from "react";
import SplitText from "./SplitText";
export function Footer() {
    return (
        <>
        <footer class="m-4">
            <div class="w-full max-w-screen-xl mx-auto font-aoMono uppercase p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">うちは</span>
                    </a>
                    <ul class="flex flex-wrap  text-sm font-medium text-grey">
                        <li>
                        
      
                            <a href="#" class=" me-4 "><SplitText text={"LinkedIn"}></SplitText></a>
                        </li>
                        <li>
                            <a href="#" class=" me-4 "><SplitText text={"Github"}></SplitText></a>
                        </li>
                        <li>
                            <a href="#" class=" me-4 "><SplitText text={"Dribble"}></SplitText></a>
                        </li>
                        
                    </ul>
                </div>
                <hr class="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-6" />
                <span class="block text-sm text-gray-500 sm:text-center ">© 2025 <a href="/" class="hover:underline">Developed with love by Shruti</a>. All Rights Reserved.</span>
            </div>
        </footer>


        </>
    );
}