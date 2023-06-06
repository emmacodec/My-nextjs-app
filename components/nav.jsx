"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProvider} from 'next-auth/react';

const Nav = () => {
    const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
              src="/assets/images/logo.png" 
              alt="AI photo graphics logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="logo_text">AI Photo Graphics</p>

             {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                   <Link href="/create-prompt" className="black_btn">
                      Create Post
                   </Link>

                   <button type="button" onClick={signOut} className="outline_btn">
                    Sign Out
                   </button>

                   <Link href="/profile">
                    <Image 
                      src="/assets/images/profile.jpg"
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt="profile"
                    />
                   </Link>
                </div>
            ):(
                <>
                
                </>
            )}
        </div>

        </Link>

           </nav>
  )
}

export default Nav;