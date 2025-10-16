import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import skillsData from './Skill.json';

function Skills() {
    const { t } = useTranslation();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(skillsData.skills);
    }, []);

    const addImageFallback = (event) => {
        const target = event.currentTarget;
        target.src = 'https://via.placeholder.com/32?text=❌';
        target.onerror = null;
    };

    // No categories - all skills in one grid

    const getProgressColor = (proficiency) => {
        if (proficiency >= 90) return "bg-gradient-to-r from-emerald-500 to-green-500";
        if (proficiency >= 80) return "bg-gradient-to-r from-blue-500 to-cyan-500";
        if (proficiency >= 70) return "bg-gradient-to-r from-yellow-500 to-orange-400";
        return "bg-gradient-to-r from-orange-500 to-red-500";
    };

    return (
        <section className="relative py-12 px-4 md:px-8" id="skills">
            {/* Animated Gradient Circles */}
            <div className="absolute top-28 left-14 w-64 h-64 bg-gradient-to-r from-lime-400 to-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-28 right-14 w-64 h-64 bg-gradient-to-r from-rose-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3">
                        {t('skills.title')}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-6 text-sm">{t('skills.subtitle')}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className="group relative"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-3 
                            shadow-xl hover:shadow-2xl transition-all duration-500 
                            hover:-translate-y-1 hover:bg-white/30 group overflow-hidden">

                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                                    <div className="relative">
                                        <div className="w-14 h-14 bg-gradient-to-br from-white/40 to-white/20 rounded-xl 
                                  flex items-center justify-center backdrop-blur-sm border border-white/40
                                  group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <img
                                                src={skill.image}
                                                alt={`${skill.name} icon`}
                                                className={`w-8 h-8 object-contain transition-transform duration-300 
                                  group-hover:scale-110 ${skill.imageClass || ''}`}
                                                loading="lazy"
                                                onError={addImageFallback}
                                            />
                                        </div>

                                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 
                                  text-white text-xs font-bold rounded-full w-7 h-7 flex items-center 
                                  justify-center shadow-lg border-2 border-white/50">
                                            {skill.proficiency}%
                                        </div>
                                    </div>

                                    <h6 className={`text-sm font-bold text-gray-800 group-hover:text-gray-900 
                                transition-colors duration-300 ${skill.customClass || ''}`}>
                                        {skill.name}
                                    </h6>

                                    <div className="w-full space-y-1.5">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-900 font-medium">Proficiency</span>
                                            <span className="font-bold text-gray-800">{skill.proficiency}%</span>
                                        </div>

                                        <div className="relative w-full h-1.5 bg-white/40 rounded-full overflow-hidden backdrop-blur-sm">
                                            <div
                                                className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.proficiency)} shadow-sm`}
                                                style={{
                                                    width: `${skill.proficiency}%`,
                                                    animationDelay: `${index * 200}ms`
                                                }}
                                            ></div>
                                        </div>

                                        <div className="flex justify-center items-center gap-1 mt-1.5">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <div
                                                    key={starIndex}
                                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${starIndex < Math.floor(skill.proficiency / 20)
                                                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400 shadow-md scale-110'
                                                        : 'bg-white/40 backdrop-blur-sm'
                                                        }`}
                                                    style={{
                                                        animationDelay: `${(index * 100) + (starIndex * 50)}ms`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                              rounded-bl-xl opacity-50"></div>
                                <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 
                              rounded-tr-xl opacity-50"></div>
                            </div>
                        </div>
                    ))}

                </div>

                {skills.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No skills to display</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skills;