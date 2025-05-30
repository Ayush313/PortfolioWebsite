import { AboutSection } from "../Components/AboutSection"
import { ContactSection } from "../Components/ContactSection"
import { Footer } from "../Components/Footer"
import { HeroSection } from "../Components/HeroSection"
import { NavBar } from "../Components/NavBar"
import { ProjectsSection } from "../Components/ProjectSection"
import { SkillsSection } from "../Components/SkillsSection"
import { StarBackground } from "../Components/StarBackground"
import { ThemeToggle } from "../Components/ThemeToggle"

export const Home = () =>{


    return <div className="min-h-screen container bg-background text-foreground overflow-x-hidden">
        {/* theme */}
        <ThemeToggle/>

        {/* Star Background */}

        <StarBackground/>

        {/* Nav */}

        <NavBar/>
        
        {/* main */}

        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        
        <Footer/>
 
        
        
        </div>
}