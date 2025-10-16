import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
    FaGithub,
    FaTelegram,
    FaFacebook,
    FaLinkedin,
    FaCodepen,
    FaInstagram
} from 'react-icons/fa';

const footerData = {
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/Darkcode-it",
            icon: <FaGithub className="w-5 h-5" />,
            ariaLabel: "Visit GitHub profile"
        },
        {
            name: "Telegram",
            url: "https://t.me/Darkcodeit",
            icon: <FaTelegram className="w-5 h-5" />,
            ariaLabel: "Contact via Telegram"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/darkcodeit/",
            icon: <FaInstagram className="w-5 h-5" />,
            ariaLabel: "Visit Instagram profile"
        },
    ],
    copyright: {
        text: "footer.openSourceText",
        author: {
            name: "name",
            email: "darkcodeit@protonmail.com"
        },

    }
};

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className=" text-gray-300 py-12 relative overflow-hidden">
            {/* Animated Gradient Circles */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-8">
                        {footerData.socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
                                aria-label={link.ariaLabel}
                            >
                                <span className="sr-only">{link.name}</span>
                                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                                    {link.icon}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Copyright Text */}
                    <div className="flex flex-col md:flex-row items-center text-center text-gray-400 text-sm space-y-2 md:space-y-0 md:space-x-4">
                        <p>{t(footerData.copyright.text)}</p>
                        <div className="hidden md:block">•</div>
                        <p>
                            {t('footer.developedBy')}{" "}
                            <a
                                href={`mailto:${footerData.copyright.author.email}`}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {t(footerData.copyright.author.name)}
                            </a>
                        </p>
                  
                     
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    footerData: PropTypes.shape({
        socialLinks: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                icon: PropTypes.element.isRequired,
                ariaLabel: PropTypes.string.isRequired
            })
        ).isRequired,
        copyright: PropTypes.shape({
            text: PropTypes.string.isRequired,
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired
            }).isRequired,
            credits: PropTypes.shape({
                text: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    })
};

export default Footer;