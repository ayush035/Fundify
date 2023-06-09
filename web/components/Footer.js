import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Footer() {
return (
<>
    <hr className='my-6 mx-20' />
    <footer className={styles.footer}>
        
    <div className='flex items-center justify-center space-x-4 cursor-pointer '>


    <div className='transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer text-black font-mono font-bold text-lg'>

    <a href='https://github.com/ayush035/raise-1'>
    {/* <img src='/github-1.png'>
        </img> */}
        Github
        </a>
        </div>
        <div className='text-gray-700 text-3xl'>
        |
        </div>




    <div className='transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer text-black font-mono font-bold text-lg'>
    <a href='https://twitter.com/'>

    {/* <img src='/twitter-1.png'>
        </img> */} Twitter
        </a>
       
    </div>
    <div className='text-black my-4'>
        Copyright © 2023 Fundify Inc. All rights reserved
        </div>

    </div>
    
        
    </footer>
</>

)
}