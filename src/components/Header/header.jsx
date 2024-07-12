import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";


export function Header() {
    return (
        <header>
            <nav>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Dahsboard
                    </li>
                    <li>
                        Meeting Calendar
                    </li>
                    <li>
                        Meeting Rooms
                    </li>
                </ul>
            </nav>
        </header>
    )
}