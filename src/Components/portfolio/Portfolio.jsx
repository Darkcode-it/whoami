import React from 'react';
import PropTypes from 'prop-types';
import projectsData from './Portfolio.json';
import { CiWarning } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
    const { t, i18n } = useTranslation();

    const addImageFallback = (event) => {
        event.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
        event.currentTarget.onerror = null; // جلوگیری از حلقه بی‌نهایت در صورت خرابی تصویر جایگزین
    };

    const portfolioData = projectsData;

    return (
        <section className="relative py-12 px-4 md:px-8" id="portfolio" data-aos="fade-up">
            {/* Animated Gradient Circles */}
            <div className="absolute top-16 left-6 w-64 h-64 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-16 right-6 w-64 h-64 bg-gradient-to-r from-orange-400 to-amber-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
            
            <div className="max-w-6xl mx-auto">
                {/* بخش هدر */}
                <div className="mb-12 text-center">                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3">
                        {t('portfolio.title')}
                    </h3>
                    <p className="max-w-2xl mx-auto text-gray-600 mt-4">
                        {t('portfolio.description')}
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
                </div>

                {/* گرید پروژه‌ها */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onError={addImageFallback}
                            index={index} // برای انیمیشن‌های تأخیری
                        />
                    ))}
                </div>

                {/* دکمه فراخوان به عمل */}
                <div className="mt-12 text-center">
                    <a
                        href="/index2"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white
                        px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        {t('portfolio.viewAll')}
                    </a>
                </div>
            </div>
        </section>
    );
};

// کامپوننت کارت پروژه
const ProjectCard = ({ project, onError, index }) => {
    const { t } = useTranslation();
    return (
        <div
            className="group relative h-[400px]"
            style={{
                animationDelay: `${index * 100}ms` // تأخیر انیمیشن برای هر کارت
            }}
        >
            <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-5 
                          shadow-md hover:shadow-xl transition-all duration-500 
                          hover:-translate-y-2 hover:bg-white/30 overflow-hidden h-full">
                {/* افکت گرادیان هنگام هاور */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                <div className="relative z-10 flex flex-col h-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block flex-grow-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-52 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onError={onError}
                        />
                    </a>

                    <div className="p-4 text-center flex-grow flex flex-col justify-between">
                        <div>
                            <h5 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                                {project.title}
                            </h5>

                            {project.warning && (
                                <div className="text-red-600 font-medium mb-3 flex items-center justify-center">
                                    <CiWarning className="w-5 h-5 mr-1" />
                                    {project.warning}
                                </div>
                            )}
                        </div>

                        <div className="mt-4">
                            <a
                                href={project.repo}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium
                                transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('portfolio.viewSource')}
                                <CiWarning className="w-5 h-5 mr-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired,
        warning: PropTypes.string,
    }).isRequired,
    onError: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default Portfolio;