import React from 'react'
import tomYumKung from '../../asset/tomyumkung.jpg'
import { Fade, Zoom } from 'react-awesome-reveal'
import { useNavigate } from 'react-router-dom'
import RandomCard from './RandomCard'


function Menu() {

    let navigate = useNavigate()

    return (
        <div name='menu' className='w-full pt-16 bg-[#212122] pb-[100px]
        px-8 md:px-16 flex flex-col items-center '>
            <div className='max-w-[1240px] mx-auto relative'>
                <div className='px-4 py-0'>
                    <h3 className='text-7xl font-semibold text-center text-[#a3b666]'>
                        MENU
                    </h3>
                </div>

                <div className='grid grid-cols-1 tab:grid-cols-3 relative
                gap-x-12 tab:gap-x-4 lg:gap-x-12 gap-y-16 px-4 md:px-1 lg:px-4
                pt-12 sm:pt-20'>
                    <Fade left>
                        <RandomCard />
                    </Fade>
                    <Zoom>
                        <RandomCard />
                    </Zoom>
                    <Fade>
                        <RandomCard />
                    </Fade>
                </div>


            </div>

            <Zoom bottom delay={200} duration={900}>
                <button className='text-[30px] mt-[50px] lg:text-[35px] w-fit px-[25px] 
                    py-[10px] lg:px-[20px] border-none outline-none bg-[#e3ff8a] 
                text-[#212122] font-bold hover:bg-[#555b4e] hover:text-[#e3ff8a] 
                hover:opacity-[0.9] rounded-[5px]' onClick={() => { navigate(`/MenuPage`) }}>
                    VIEW MORE
                </button>
            </Zoom>



        </div>
    )
}

export default Menu