import { href } from "react-router-dom";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn("fixed w-[90%] z-40 bg-background transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">.NET</span> DEVELOPER
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {
                        navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foregroud/80 hover:text-primary transition-colors duration-300">
                                {item.name}
                            </a>
                        ))
                    }
                </div>

                {/* mobile nav  */}

                <button onClick={()=> setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-foreground z-50" 
                >
                    {isMenuOpen ? <X size= {24}/> : <Menu size={24}/>}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" :"opacity-0 pointer-events-none" )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {
                            navItems.map((item, key) => (
                                <a key={key} href={item.href} className="text-foregroud/80 hover:text-primary transition-colors duration-300" onClick={()=>setIsMenuOpen(false)}>
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}