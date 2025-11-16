// import React from 'react';
// import PropTypes from 'prop-types';
// import { FaDownload } from 'react-icons/fa6';
// import { useTranslation } from 'react-i18next';

// function About() {
//     const { t } = useTranslation();

//     const handleDownload = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(t('about.resume.url'));
//             if (!response.ok) {
//                 throw new Error('File not found');
//             }
//             const blob = await response.blob();
//             const url = window.URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = 'AhmadRasouli.pdf';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             window.URL.revokeObjectURL(url);
//         } catch (error) {
//             console.error('Download failed:', error);
//             alert('متأسفانه دانلود فایل با مشکل مواجه شد. لطفاً دوباره تلاش کنید.');
//         }
//     };

//     return (
//         <section className="relative py-20 px-4 md:px-8" id="about">
//             {/* Animated Gradient Circles */}
//             <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//             <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
            
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="text-center mb-20">
//                     <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
//                         {t('about.title')}
//                     </h3>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
//                 </div>

//                 {/* Content Grid */}
//                 <div className="grid lg:grid-cols-3 gap-8 items-start">
//                     {/* Text Content */}
//                     <div className="lg:col-span-2 space-y-6">
//                         {t('about.description', { returnObjects: true }).map((paragraph, index) => (
//                             <div
//                                 key={`para-${index}`}
//                                 className="relative bg-white/20 backdrop-blur-lg border border-white/30 
//                                 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 
//                                 hover:-translate-y-2 group"
//                             >
//                                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
//                                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
//                                 <p className="text-lg leading-relaxed text-gray-800 relative z-10">
//                                     {paragraph}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Download Card */}
//                     <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl 
//                                 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
//                                 group overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
//                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
//                         <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 
//                                     rounded-bl-2xl opacity-50"></div>
//                         <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 
//                                     rounded-tr-2xl opacity-50"></div>

//                         <div className="text-center relative z-10">
//                             <div className="mb-6">
//                                 <span className="inline-block bg-gradient-to-br from-blue-500/20 to-purple-500/20 
//                                             text-blue-600 p-4 rounded-2xl backdrop-blur-sm">
//                                     <FaDownload className="w-8 h-8" />
//                                 </span>
//                             </div>
//                             <h3 className="text-xl font-bold mb-4 text-gray-800">
//                                 {t('about.portfolio')}
//                             </h3>
//                             <button
//                                 onClick={handleDownload}
//                                 className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 
//                                 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl 
//                                 transition-all duration-300 group shadow-lg hover:shadow-xl"
//                                 aria-label={t('about.resume.label')}
//                             >
//                                 <span className="font-medium">{t('about.resume.label')}</span>
//                                 <FaDownload className="ml-3 w-5 h-5 transition-transform group-hover:translate-y-1" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// About.propTypes = {
//     aboutContent: PropTypes.shape({
//         title: PropTypes.string,
//         description: PropTypes.arrayOf(PropTypes.string),
//         resume: PropTypes.shape({
//             url: PropTypes.string,
//             label: PropTypes.string
//         })
//     })
// };

// export default About;





import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaEye } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function About() {
    const { t } = useTranslation();

    const handleDownload = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(t('about.resume.url'));
            if (!response.ok) {
                throw new Error('File not found');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'AhmadRasouli.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            alert('متأسفانه دانلود فایل با مشکل مواجه شد. لطفاً دوباره تلاش کنید.');
        }
    };

    return (
        <section className="relative py-20 px-4 md:px-8" id="about">
            {/* Animated Gradient Circles */}
            <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h3 className="text-5xl p-2 md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                        {t('about.title')}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Text Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {t('about.description', { returnObjects: true }).map((paragraph, index) => (
                            <motion.div
                                key={`para-${index}`}
                                className="relative bg-white/20 backdrop-blur-lg border border-white/30 
                                rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 
                                hover:-translate-y-2 group"
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.1 }
                                }}
                                transition={{ duration: 0.5 }}
                                onHoverStart={() => console.log('Hover starts')}
                                onHoverEnd={() => console.log('Hover ends')}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <p className="text-lg leading-relaxed text-gray-800 relative z-10">
                                    {paragraph}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Download Card */}
                    <motion.div 
                        className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl 
                                p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                                group overflow-hidden"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.1 }
                        }}
                        transition={{ duration: 0.5 }}
                        onHoverStart={() => console.log('Hover starts')}
                        onHoverEnd={() => console.log('Hover ends')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                                    rounded-bl-2xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 
                                    rounded-tr-2xl opacity-50"></div>

                        <div className="text-center relative z-10">
                            <div className="mb-6">
                                <span className="inline-block bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                                            text-blue-600 p-4 rounded-2xl backdrop-blur-sm">
                                    <FaDownload className="w-8 h-8" />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">
                                {t('about.portfolio')}
                            </h3>                            {/* Actions: Download + View */}
                            <div className="space-y-3">
                                <button
                                    onClick={handleDownload}
                                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 
                                    hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl 
                                    transition-all duration-300 group shadow-lg hover:shadow-xl"
                                    aria-label={t('about.resume.label')}
                                >
                                    <span className="font-medium">{t('about.resume.label')}</span>
                                    <FaDownload className="ml-3 w-5 h-5 transition-transform group-hover:translate-y-1" />
                                </button>

                                <a
                                    href="https://resume-seven-dusky.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full 
                                     text-white rounded-xl 
                                    transition-all duration-300 group "
                                    aria-label="View Resume Online"
                                >
                                    <FaEye className="text-gray-600 hover:text-blue-400 transition-colors duration-300" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
About.propTypes = {
    aboutContent: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.string),
        resume: PropTypes.shape({
            url: PropTypes.string,
            label: PropTypes.string
        })
    })
};

export default About;
