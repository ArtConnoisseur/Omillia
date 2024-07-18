import { Header } from "@/components/Header/header"

export default function HomeLayout({ children }) {
    return(
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
        
    )
}