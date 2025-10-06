// import React from 'react';
// import PropTypes from 'prop-types';
// import { BriefcaseIcon, CodeBracketIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
// import { useTranslation } from 'react-i18next';

// const experienceData = {
//     title: "Professional Journey",
//     items: [
//         {
//             id: 1,
//             role: "Front-End Developer & Cybersecurity Specialist",
//             type: "Self-Initiated Projects",
//             period: "March - April 2025",
//             description: "Combining web development expertise with cybersecurity research to create secure and modern web solutions",
//             skills: {
//                 development: [
//                     "React Architecture", "Tailwind CSS", "Responsive Design",
//                     "Web Performance", "REST APIs", "Webpack"
//                 ],
//                 cybersecurity: [
//                     "Penetration Testing", "Threat Analysis", "OWASP Top 10",
//                     "Network Security", "Cryptography", "SIEM Tools"
//                 ],
//                 tools: [
//                     "Kali Linux", "Burp Suite", "Wireshark",
//                     "Metasploit", "Nmap", "Docker"
//                 ]
//             }
//         }
//     ]
// };

// function Experience() {
//     const { t } = useTranslation();

//     return (
//         <section
//             className="py-20 px-4 md:px-8"
//             id="experience"
//             data-aos="fade-up"
//         >
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="mb-16 text-center">
//                     <h2 className="text-4xl font-extrabold mb-4">
//                         {t('experience.title')}
//                         <span className="text-blue-600 ml-2">.</span>
//                     </h2>
//                     <p className="text-xl max-w-3xl mx-auto">
//                         {t('experience.subtitle')}
//                     </p>
//                 </div>

//                 {/* Experience Timeline */}
//                 <div className="space-y-12">
//                     {t('experience.items', { returnObjects: true }).map((item) => (
//                         <article
//                             key={item.id}
//                             className="relative rounded-2xl shadow-xl hover:shadow-2xl
//                             transition-all duration-300 border border-gray-100 overflow-hidden"
//                         >
//                             {/* Experience Header */}
//                             <div className="p-8 border-b border-gray-200">
//                                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-3 bg-blue-100 rounded-lg">
//                                             <BriefcaseIcon className="w-8 h-8 text-blue-600" />
//                                         </div>
//                                         <div>
//                                             <h3 className="text-2xl font-bold">{item.role}</h3>
//                                             <span className="inline-block mt-2 bg-blue-100 text-blue-800
//                                             px-3 py-1 rounded-full text-sm font-medium">
//                                                 {item.type}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 bg-gray-100
//                                     px-3 py-1 rounded-full">
//                                         {item.period}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Experience Body */}
//                             <div className="p-8">
//                                 <p className="text-gray-600 leading-relaxed mb-8 text-lg">
//                                     {item.description}
//                                 </p>

//                                 {/* Skills Grid */}
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                     {/* Development Skills */}
//                                     <SkillCategory
//                                         title={t('experience.skillCategories.development')}
//                                         icon={<CodeBracketIcon className="w-6 h-6" />}
//                                         skills={item.skills.development}
//                                         color="blue"
//                                     />

//                                     {/* Security Skills */}
//                                     <SkillCategory
//                                         title={t('experience.skillCategories.security')}
//                                         icon={<ShieldCheckIcon className="w-6 h-6" />}
//                                         skills={item.skills.cybersecurity}
//                                         color="green"
//                                     />

//                                     {/* Tools Stack */}
//                                     <SkillCategory
//                                         title={t('experience.skillCategories.tools')}
//                                         skills={item.skills.tools}
//                                         color="purple"
//                                     />
//                                 </div>
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// // Skill category component
// const SkillCategory = ({ title, icon, skills, color = "blue" }) => {
//     const colorVariants = {
//         blue: { bg: 'bg-blue-100', text: 'text-blue-800' },
//         green: { bg: 'bg-green-100', text: 'text-green-800' },
//         purple: { bg: 'bg-purple-100', text: 'text-purple-800' }
//     };

//     return (
//         <div className="border border-gray-200 rounded-xl p-6">
//             {title && (
//                 <div className={`flex items-center gap-2 mb-4 ${colorVariants[color].text}`}>
//                     {icon && <span className={`p-2 rounded-lg ${colorVariants[color].bg}`}>{icon}</span>}
//                     <h4 className="text-lg font-semibold">{title}</h4>
//                 </div>
//             )}
//             <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                     <span
//                         key={index}
//                         className={`${colorVariants[color].bg} ${colorVariants[color].text} 
//                         px-3 py-1 rounded-full text-sm font-medium`}
//                     >
//                         {skill}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// SkillCategory.propTypes = {
//     title: PropTypes.string,
//     icon: PropTypes.element,
//     skills: PropTypes.array.isRequired,
//     color: PropTypes.oneOf(['blue', 'green', 'purple'])
// };

// export default Experience;





import React from 'react';
import PropTypes from 'prop-types';
import { BriefcaseIcon, CodeBracketIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const experienceData = {
    title: "Professional Journey",
    items: [
        {
            id: 1,
            role: "Front-End Developer & Cybersecurity Specialist",
            type: "Self-Initiated Projects",
            period: "March - April 2025",
            description: "Combining web development expertise with cybersecurity research to create secure and modern web solutions",
            skills: {
                development: [
                    "React Architecture", "Tailwind CSS", "Responsive Design",
                    "Web Performance", "REST APIs", "Webpack"
                ],
                cybersecurity: [
                    "Penetration Testing", "Threat Analysis", "OWASP Top 10",
                    "Network Security", "Cryptography", "SIEM Tools"
                ],
                tools: [
                    "Kali Linux", "Burp Suite", "Wireshark",
                    "Metasploit", "Nmap", "Docker"
                ]
            }
        }
    ]
};

function Experience() {
    const { t } = useTranslation();

    return (
        <section className="relative py-20 px-4 md:px-8" id="experience">
            {/* Animated Gradient Circles */}
            <div className="absolute top-20 left-16 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-64 h-64 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                        {t('experience.title')}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {t('experience.items', { returnObjects: true }).map((item) => (
                        <article
                            key={item.id}
                            className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 
                            shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                            group overflow-hidden"
                        >
                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                                        rounded-bl-2xl opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 
                                        rounded-tr-2xl opacity-50"></div>

                            {/* Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm">
                                        <BriefcaseIcon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{item.role}</h3>
                                        <span className="inline-block mt-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                                    text-blue-800 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-gray-600 bg-white/50 px-3 py-1 
                                                rounded-full backdrop-blur-sm border border-white/30">
                                    {item.period}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg relative z-10">
                                {item.description}
                            </p>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                <SkillCategory
                                    title={t('experience.skillCategories.development')}
                                    icon={<CodeBracketIcon className="w-6 h-6 text-blue-600" />}
                                    skills={item.skills.development}
                                    color="blue"
                                />

                                <SkillCategory
                                    title={t('experience.skillCategories.security')}
                                    icon={<ShieldCheckIcon className="w-6 h-6 text-green-600" />}
                                    skills={item.skills.cybersecurity}
                                    color="green"
                                />

                                <SkillCategory
                                    title={t('experience.skillCategories.tools')}
                                    skills={item.skills.tools}
                                    color="purple"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

const SkillCategory = ({ title, icon, skills, color = "blue" }) => {
    const colorClasses = {
        blue: {
            bg: 'bg-gradient-to-br from-blue-500/15 to-cyan-500/15',
            border: 'border-blue-500/30',
            text: 'text-blue-600'
        },
        green: {
            bg: 'bg-gradient-to-br from-green-500/15 to-emerald-500/15',
            border: 'border-green-500/30',
            text: 'text-green-600'
        },
        purple: {
            bg: 'bg-gradient-to-br from-purple-500/15 to-fuchsia-500/15',
            border: 'border-purple-500/30',
            text: 'text-purple-600'
        }
    };

    return (
        <div className={`${colorClasses[color].bg} border ${colorClasses[color].border} 
                        rounded-xl p-6 backdrop-blur-sm`}>
            {title && (
                <div className="flex items-center gap-3 mb-4">
                    {icon && <div className={`p-2 rounded-lg ${colorClasses[color].bg}`}>{icon}</div>}
                    <h4 className={`text-lg font-semibold ${colorClasses[color].text}`}>
                        {title}
                    </h4>
                </div>
            )}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className={`text-gray-700 bg-white/50 backdrop-blur-sm px-3 py-1 
                                  rounded-full text-sm border border-white/30 transition-all 
                                  hover:bg-white/70 hover:border-white/50`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

SkillCategory.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    skills: PropTypes.array.isRequired,
    color: PropTypes.oneOf(['blue', 'green', 'purple'])
};

export default Experience;