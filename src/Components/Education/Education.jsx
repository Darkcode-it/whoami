import React from 'react';
import PropTypes from 'prop-types';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function EducationTimeline() {
    const { t } = useTranslation();
    const educationData = t('education.items', { returnObjects: true });
    const iconMap = {
        'AcademicCapIcon': AcademicCapIcon,
        'TrophyIcon': TrophyIcon
    };

    return (
        <section className="relative py-20 px-4 md:px-8" id="education">
            {/* Animated Gradient Circles */}
            <div className="absolute top-32 left-12 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 right-12 w-64 h-64 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h3 className="text-5xl pb-2 md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                        {t('education.title')}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 to-purple-500/20 transform -translate-x-1/2 rounded-full" />

                    <div className="space-y-8">
                        {educationData.map((edu, index) => (
                            <EducationCard
                                key={edu.id}
                                edu={{ ...edu, icon: iconMap[edu.iconName] }}
                                index={index}
                                totalItems={educationData.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const EducationCard = ({ edu, index, totalItems }) => {
    const { t } = useTranslation();
    const Icon = edu.icon;

    return (
        <article className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
            items-center gap-8 w-full ${index !== totalItems - 1 ? 'mb-20' : ''} group`}>

            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full 
                    ring-8 ring-blue-100/50 backdrop-blur-sm shadow-lg" />
            </div>

            {/* Content Container */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} relative`}>
                <motion.div 
                    className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl 
                    p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                    group-hover:bg-white/30 overflow-hidden"
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.1 }
                    }}
                    transition={{ duration: 0.5 }}
                    onHoverStart={() => console.log('Hover starts')}
                    onHoverEnd={() => console.log('Hover ends')}
                >

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                        rounded-bl-2xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 
                        rounded-tr-2xl opacity-50"></div>

                    {/* Icon Header */}
                    <div className="mb-6 flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm">
                            <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">{edu.title}</h3>
                            <p className="text-sm font-medium mt-1 text-gray-800">{edu.institution}</p>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span className="bg-white/50 text-gray-700 px-3 py-1 rounded-full 
                                backdrop-blur-sm border border-white/30">
                                🎓 {edu.year}
                            </span>
                            {index === 0 && (
                                <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 
                                    text-green-800 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {t('education.completed')}
                                </span>
                            )}
                        </div>

                        <p className="leading-relaxed text-gray-900">{edu.description}</p>

                        {/* Highlights List */}
                        <ul className="space-y-2 mt-4">
                            {edu.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-800">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </article>
    );
};

EducationCard.propTypes = {
    edu: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired
};

export default EducationTimeline;