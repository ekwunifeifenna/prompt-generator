"use client"

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

    const isUserLoggedIn = true
    const [providers , setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)


// Use effect with a callback function that only runs at the start[], allows to sign in using google and next auth
    useEffect(()=>{
        const setProviders = async()=>{
            const response = await getProviders();

            setProviders(response)
        }

    },[])
  return (

    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href = "/" className='flex gap-2 flex-center'>
            <Image 
            src="/assets/images/logo.svg"
            alt="prompt generator image"
            width={30}
            height={30}
            className='object-contain'
            />

            <p className='logo_text'>prompt-generator</p>
        </Link>


        {/* Desktop Navigtation */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
            <div className='flex gap-3 md:gap-5'>
                <link href="/create-prompt"
                className='black_btn'>
                    Create a post
                
                </link>

                <button
                type='button'
                onClick={signOut}
                className='outline_btn'>
                    Sign Out
                </button>

                <Link href="/profile">
                    <Image 
                        src="/assets/images/logo.svg"
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt ="Profile icon"
                    />
                </Link>

            </div>
            ): (
                <>
                    {providers && 
                        Object.values(providers).map((provider)=>(

                            <button 
                            type='button'
                            key={provider.name}
                            onClick={()=> signIn(provider.id)}> 
                            Sign In

                            </button>
                        ))}

                </>
            
            )}

        </div>


        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? (
                <div className='flex'>
                    <Image 
                        src="/assets/images/logo.svg"
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt ="Profile icon"
                        onClick={()=>{}}
                    />
                </div>
            ):(
                <>
                    {providers && 
                        Object.values(providers).map((provider)=>(

                            <button 
                            type='button'
                            key={provider.name}
                            onClick={()=> signIn(provider.id)}> 
                            Sign In

                            </button>
                        ))}

                </>
            )}


        </div>

    </nav>
   
  )
}

export default Nav