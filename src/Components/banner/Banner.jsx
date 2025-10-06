import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    FaGithub, 
    FaTelegram, 
    FaAngleDown,
    FaGlobe
} from 'react-icons/fa';

import data from './Banner.json';
import Lightning from './Lightning.jsx';

const iconComponents = {
    FaGithub: FaGithub, 
    FaTelegram: FaTelegram,
    FaGlobe: FaGlobe
};

function Banner() {
    const [hue, setHue] = useState(220);
    const {name, jobTitle, profileImage, socialLinks} = data;

    return (<section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
        {/* Animated Gradient Circles */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        
        {/* Lightning overlay only, background remains original */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                <Lightning hue={hue} xOffset={0} speed={1.6} intensity={0.6} size={2} />
            </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
                {/* تصویر پروفایل */}
                <div
                    className="relative group w-64 h-64 rounded-full border-4 border-blue-500/20 p-2
                    shadow-2xl transition-all duration-500 hover:border-blue-500/50"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <img
                        src={profileImage}
                        alt={name}
                        className="w-full h-full rounded-full object-cover transform
                        group-hover:scale-105 transition-transform"
                    />
                </div>

                {/* متن اصلی */}
                <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400
                    to-cyan-400 bg-clip-text text-transparent">
                        {name}
                    </h1>
                    {/* Controls: Lightning hue under name */}
                    {/* <div className="mx-auto w-full max-w-xl   rounded-xl px-4 py-3 text-sm text-gray-800">
                        <div className="flex items-center gap-3">
 
                            <input
                                type="range"
                                min={0}
                                max={360}
                                step={1}
                                value={hue}
                                onChange={(e)=>setHue(Number(e.target.value))}
                                className="flex-1 accent-blue-500 cursor-pointer"
                            />
                            <span className="tabular-nums w-12 text-right">{hue}°</span>
                        </div>
                    </div> */}
                    <p className="text-2xl md:text-3xl font-medium text-gray-700">
                        {jobTitle}
                    </p>

                    {/* لینک‌های اجتماعی */}
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((link) => {
                            const Icon = iconComponents[link.icon];
                            return (<a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
                                aria-label={`Visit ${link.name}`}
                            >
                                <Icon className="w-8 h-8"/>
                            </a>);
                        })}
                    </div>
                </div>

                {/* اسکرول پایین */}
                <a
                    href="#about"
                    className="animate-bounce-slow inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                    aria-label="Scroll to next section"
                >
                    <FaAngleDown className="w-6 h-6 text-blue-400"/>
                </a>
            </div>
        </div>
    </section>);
}

Banner.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        profileImage: PropTypes.string.isRequired,
        socialLinks: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            icon: PropTypes.oneOf(Object.keys(iconComponents)).isRequired
        })).isRequired
    }).isRequired
};

export default Banner;