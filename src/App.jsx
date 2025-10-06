/**
 * با سلام خدمت مهندس و همکار گرامی لطفا وقتی از پروژه های اپن سورس من استفاده میکنید یادر از من در پروژه کنید با قرار دادن ادرس گیت هاب من در هرقسمت که تمایل داشتید ممنون وموفق باشید
 * 
 * Hello dear engineer and colleague, when you use my open source projects or mention me in your project, please include my GitHub address wherever you prefer. Thank you and good luck.
 * 
 * GitHub: https://github.com/Darkcode-it
 */

import './App.css'
import Menu from "./Components/Menu/Menu.jsx";
import Banner from "./Components/banner/Banner.jsx";
import About from "./Components/About/About.jsx";
import Education from "./Components/Education/Education.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Certifications from "./Components/certifica/Certifications.jsx";
import Skills from "./Components/Skill/Skill.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Services from "./Components/Services/Services.jsx";
import Footer from "./Components/footer/Footer.jsx";
import PWAInstallPrompt from './Components/PWAInstallPrompt.jsx';
import './global.css'
import {useTranslation} from "react-i18next";
import { ThemeProvider, useTheme } from './Components/Menu/Context';

function AppContent() {
    const {t} = useTranslation();
    const { currentTheme } = useTheme();
    const isDark = currentTheme.name === 'dark';

    return (
        <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
            isDark 
                ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' 
                : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
        }`}>
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 ${
                isDark
                    ? 'bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10'
                    : 'bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5'
            }`}></div>

            {/* Animated Gradient Circles */}
            <div className={`absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000 ${
                isDark
                    ? 'bg-gradient-to-r from-pink-600 to-orange-600'
                    : 'bg-gradient-to-r from-pink-400 to-orange-400'
            }`}></div>

            {/* Main Content */}
            <div className="relative">
                <Menu/>
                <Banner/>
                <About/>
                <Experience/>
                <Education/>
                <Certifications/>
                <Skills/>
                <Portfolio/>
                <Services/>
                <Footer/>
                <PWAInstallPrompt />
            </div>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    )
}


