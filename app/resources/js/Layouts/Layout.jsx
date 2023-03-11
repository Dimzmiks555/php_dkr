import { Link, Head } from '@inertiajs/react';
import React from 'react'
import s from './Layout.module.css'



const Layout = ({children, ...props}) => {

console.log(props)

  return (
    <>
     <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
        
                <Link
                    href={route('home')}
                    className="mr-10 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Home
                </Link>
                <Link
                    href={route('cart')}
                    className="mr-10 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Cart
                </Link>
            {props.auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Войти
                    </Link>

                    <Link
                        href={route('register')}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Регистрация
                    </Link>
                </>
            )}
        </div>
                
    <div className={s.layout}>{children}</div>
    </>
  )
}

export default Layout