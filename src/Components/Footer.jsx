import React from 'react'
import logo from "../assets/email.svg";

const Footer = () => {
    return (

        <footer class="bg-white sticky top-[100vh] mt-5 rounded-lg shadow  ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                <img src={logo} alt="logo" className="w-11 h-11 object-contain " />
                        <span class="self-center text-xl font-semibold whitespace-nowrap text-black"> Mass Mail Dispatcher</span>
                        <div class="footer__col">
                             <h1>Get in Touch</h1>
                               <ul class="footer__links">
                                  <li><a href="https://transcendent-sundae-2b02d9.netlify.app/">Contact me</a></li>
                                  <li><a href="mailto:2021Chb1364@iitrpr.ac.in">Report here for any bugs!</a></li>
                               </ul>
                        </div>
                </div>
           
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://mass-mail-dispatcher-two.vercel.app/" class="hover:underline">Mass Mail Dispatcher</a>. All Rights Reserved.</span>
            </div>

            
        </footer>


    )
}

export default Footer
