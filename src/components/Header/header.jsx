'use client';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import Link from 'next/link'; 
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname(); 

    return (
        <header>
            <nav className="flex gap-[5%] w-[100%] items-center px-[5%] py-[20px] text-[1.1rem]">
                <Avatar onClick={() => window.location = '/omillia/profile'} className={pathname === '/omillia/profile' && 'profile-selected'}>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ul className="flex gap-10 w-[100%] box-border items-center">
                    <div className="flex mr-auto gap-10">
                        <Link href='/omillia' className={pathname === '/omillia' && 'selected'}>
                            <li>
                                Omillia
                            </li>
                        </Link>
                        <Link href='/omillia/calendar' className={pathname === '/omillia/calendar' && 'selected'}>
                            <li>
                                Meeting Calendar
                            </li>
                        </Link>
                        <Link href='/omillia/rooms' className={pathname === '/omillia/rooms' && 'selected'}>
                            <li>
                                Meeting Rooms
                            </li>
                        </Link>
                    </div>
                    
                    <div className="flex gap-5 items-center">
                        <li className="bg-primary px-5 py-2 rounded-[10px] hover:bg-secondary transition-all duration-500"
                        onClick={() => window.location = '/sign-in'}>
                            Sign Up
                        </li>
                        <Link href='/sign-in'>
                            <li>
                                Sign In
                            </li>
                        </Link>
                    </div>
                </ul>
            </nav>
        </header>
    )
}