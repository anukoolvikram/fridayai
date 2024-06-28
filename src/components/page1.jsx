import React, { useState } from 'react'
import crossImage from '../assets/cross.png';
import folder from '../assets/folder.png';
import arrow from '../assets/arrow.png';
import subicon from '../assets/subicon.png';
import darrow from '../assets/darrow.png';



export const Page1 = () => {

    const [salesToggle, setSalesToggle]=useState(false);
    const [marketingToggle, setMarketingToggle]=useState(false);
    const [financeToggle, setFinanceToggle]=useState(false);
    const [hrToggle, setHrToggle]=useState(false);

    const salesDropdown=()=>{
        setSalesToggle(!salesToggle);
    }
    const marketingDropdown=()=>{
        setMarketingToggle(!marketingToggle);
    }
    const financeDropdown=()=>{
        setFinanceToggle(!financeToggle);
    }
    const hrDropdown=()=>{
        setHrToggle(!hrToggle);
    }


    return (
        <div className='w-1/3'>
            <div className='flex items-center p-2 font-medium justify-between'>
                <div className='text-2xl ml-2'>
                    Move to Other Dashboard
                </div>
                <div className='ml-2 mt-1'>
                    <img src={crossImage} alt="X" className='h-8 w-8'/>
                </div>
            </div>

            {/* search box */}
            <div className='m-2'>
            <form className="max-w-md mx-auto">   
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border-2 border-[rgb(163,180,193)] rounded-lg" placeholder="Search" required />
                    {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
            </form>
            </div>

            {/* Sales Overview */}
            
           <div className='m-2'>
            <button id="dropdownDefaultButton"
            onClick={salesDropdown} 
            className="text-xl font-medium rounded-lg w-full p-2 pl-1 pr-2" 
            type="button">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div>
                            <img src={folder} alt="" />
                        </div>
                        <div className='ml-5 text-[rgb(128,159,184)]'>Sales Overview</div>
                        </div>
                    <div>
                        <div className='h-6 w-6'>
                            <img src={salesToggle ? darrow : arrow} alt="" />
                        </div>
                    </div>
                </div>
                </button>

            <div id="dropdown" className={`z-10 ${salesToggle ? 'block' : 'hidden'}`}>
                <ul className="py-2 text-lg" aria-labelledby="dropdownDefaultButton">
                <li>
                    <div className='w-4/5 ml-12'>
                        <div className='flex items-center justify-between'>
                            
                            <div className='flex items-center'>
                                <div>
                                    <img src={subicon} alt="" />
                                </div>
                                <div className='ml-5 text-[rgb(128,159,184)]'>Sales 1</div>
                            </div>
                        </div>
                    </div>
                </li>
    
                </ul>
            </div>
           </div>

        {/* Marketing Dashboard */}
        <div className='m-2'>
            <button id="dropdownDefaultButton"
            onClick={marketingDropdown} 
            className="text-xl font-medium rounded-lg w-full p-2 pl-1 pr-2" 
            type="button">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div>
                            <img src={folder} alt="" />
                        </div>
                        <div className='ml-5 text-[rgb(128,159,184)]'>Marketing Dashboard</div>
                        </div>
                    <div>
                        <div className='h-6 w-6'>
                            <img src={marketingToggle ? darrow : arrow} alt="" />
                        </div>
                    </div>
                </div>
                </button>

            <div id="dropdown" className={`z-10 ${marketingToggle ? 'block' : 'hidden'}`}>
                <ul className="py-2 text-lg" aria-labelledby="dropdownDefaultButton">
                <li>
                    <div className='w-4/5 ml-12'>
                        <div className='flex items-center justify-between'>
                            
                            <div className='flex items-center'>
                                <div>
                                    <img src={subicon} alt="" />
                                </div>
                                <div className='ml-5 text-[rgb(128,159,184)]'>Marketing 1</div>
                            </div>
                        </div>
                    </div>
                </li>
    
                </ul>
            </div>
           </div>
        
        {/* Finance Dashboards */}
        <div className='m-2'>
            <button id="dropdownDefaultButton"
            onClick={financeDropdown} 
            className="text-xl font-medium rounded-lg w-full p-2 pl-1 pr-2" 
            type="button">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div>
                            <img src={folder} alt="" />
                        </div>
                        <div className='ml-5 text-[rgb(128,159,184)]'>Finance Dashboards</div>
                        </div>
                    <div>
                        <div className='h-6 w-6'>
                            <img src={financeToggle ? darrow : arrow} alt="" />
                        </div>
                    </div>
                </div>
                </button>

            <div id="dropdown" className={`z-10 ${financeToggle ? 'block' : 'hidden'}`}>
                <ul className="py-2 text-lg" aria-labelledby="dropdownDefaultButton">
                <li>
                    <div className='w-4/5 ml-12'>
                        <div className='flex items-center justify-between'>
                            
                            <div className='flex items-center'>
                                <div>
                                    <img src={subicon} alt="" />
                                </div>
                                <div className='ml-5 text-[rgb(128,159,184)]'>Finance 1</div>
                            </div>
                        </div>
                    </div>
                </li>
    
                </ul>
            </div>
           </div>

            {/* HR Dashboards */}
            <div className='m-2'>
            <button id="dropdownDefaultButton"
            onClick={hrDropdown} 
            className="text-xl font-medium rounded-lg w-full p-2 pl-1 pr-2" 
            type="button">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div>
                            <img src={folder} alt="" />
                        </div>
                        <div className='ml-5 text-[rgb(128,159,184)]'>HR Dashboards</div>
                        </div>
                    <div>
                        <div className='h-6 w-6'>
                            <img src={hrToggle ? darrow : arrow} alt="" />
                        </div>
                    </div>
                </div>
                </button>

            <div id="dropdown" className={`z-10 ${hrToggle ? 'block' : 'hidden'}`}>
                <ul className="py-2 text-lg" aria-labelledby="dropdownDefaultButton">
                <li>
                    <div className='w-4/5 ml-12 pt-2'>
                        <div className='flex items-center justify-between'>
                            
                            <div className='flex items-center'>
                                <div>
                                    <img src={subicon} alt="" />
                                </div>
                                <div className='ml-5 text-[rgb(128,159,184)]'>Audience</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='w-4/5 ml-12 pt-2'>
                        <div className='flex items-center justify-between'>
                            
                            <div className='flex items-center'>
                                <div>
                                    <img src={subicon} alt="" />
                                </div>
                                <div className='ml-5 text-[rgb(128,159,184)]'>Payouts</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='w-4/5 ml-12 pt-2'>
                        <div className='flex items-center justify-between'>
                            
                            <div className='flex items-center'>
                                <div>
                                    <img src={subicon} alt="" />
                                </div>
                                <div className='ml-5 text-[rgb(128,159,184)]'>WorkFlows</div>
                            </div>
                        </div>
                    </div>
                </li>
    
                </ul>
            </div>
           </div>

            {/* adding Cancel button Done button */}
            <div class="border-t-2 border-gray-200 ml-2 mr-4"></div>
            <div className='flex items-center justify-between ml-4 mr-4 mt-2'>
                <div>
                    <button type="button" className=" bg-white border-2 border-[rgb(132,165,192)] hover:bg-gray-200 text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</button>
                </div>
                <div>
                    <button type="button" className=" bg-gray-200  text-gray-400 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 p-1 me-2 mb-2">Done</button>
                </div>
            </div>

        </div>


        
    );
}

