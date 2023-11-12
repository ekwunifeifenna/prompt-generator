import '@styles/globals.css'
import { Children } from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
// This stuff will appear on every page in the application 

export const metadata = {
    title: "prompt-generator",
    description: "Find and share AI prompts for easy usage"
}


const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'/>

            </div>

            <main className='app'>
                <Nav />
                {children}

            </main>


        </body>


    </html>
  )
}

export default RootLayout