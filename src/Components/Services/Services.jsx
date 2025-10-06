import React from 'react';
import PropTypes from 'prop-types';
import { FiCode, FiLayers, FiBookOpen } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();
    
    // Map icon names to actual components
    const iconMap = {
        'FiLayers': <FiLayers className="w-6 h-6" />,
        'FiCode': <FiCode className="w-6 h-6" />,
        'FiBookOpen': <FiBookOpen className="w-6 h-6" />
    };

    return (
        <section
            className="relative py-20 px-4 md:px-8"
            id="services"
            data-aos="fade-up"
        >
            {/* Animated Gradient Circles */}
            <div className="absolute top-36 left-10 w-64 h-64 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-36 right-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
            
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                        {t('services.title')}
                        <span className="text-blue-600 ml-2">.</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto text-gray-600 mt-4">
                        {t('services.subtitle')}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t('services.items', { returnObjects: true }).map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 
                                        shadow-xl hover:shadow-2xl transition-all duration-500 
                                        hover:-translate-y-3 hover:bg-white/30 overflow-hidden"
                            style={{
                                animationDelay: `${index * 100}ms` // تأخیر انیمیشن برای هر کارت
                            }}
                        >
                            {/* افکت گرادیان هنگام هاور */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                            
                            <div className="relative z-10">
                                {/* Service Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg text-blue-600">
                                        {iconMap[service.iconName]}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-900 mb-6">
                                    {service.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2">
                                    {service.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">•</span>
                                            <span className="text-gray-800">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* تزئینات گرادیان */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                                          rounded-bl-2xl opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 
                                          rounded-tr-2xl opacity-50"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

Services.propTypes = {
    servicesData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            iconName: PropTypes.string.isRequired,
            highlights: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    )
};

export default Services;