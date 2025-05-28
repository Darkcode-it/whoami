import React from 'react';
import certifications from './certifications.json';

function Certifications() {
    return (
        <section className="relative py-20 px-4 md:px-8" id="certifications">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                        Certifications
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((certification) => (
                        <div
                            key={certification.id}
                            className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 
                            shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                                        rounded-bl-2xl opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 
                                        rounded-tr-2xl opacity-50"></div>

                            <a
                                href={certification.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center mb-6 relative z-10"
                            >
                                <img
                                    src={certification.image}
                                    alt={`${certification.title} Certification`}
                                    className="w-full h-48 object-contain rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm"
                                />
                            </a>
                            
                            <div className="space-y-3 relative z-10">
                                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                                    {certification.title}
                                </h4>
                                <p className="text-sm font-medium text-gray-900">{certification.issuer}</p>
                                <p className="text-sm text-gray-500 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                                    Issued {certification.issuedDate}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;