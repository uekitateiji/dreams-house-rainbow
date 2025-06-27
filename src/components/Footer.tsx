import React from 'react';
import dreamsHouseLogo from '../assets/logo/dreams-house-logo-1.svg';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
    return (
        <footer id="contato" className="bg-slate-900 text-white py-8 md:py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                        {/* Logo */}
                        <div className="mb-6">
                            <div className="flex flex-col items-center md:items-start">
                                <div className="">
                                    <img
                                        src={dreamsHouseLogo}
                                        alt="Dreams House Logo"
                                        className="w-36 h-36 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center md:text-left">
                            <p className="text-white font-medium mb-1 cursor-pointer">+598 9 274 3331</p>
                            <p className="text-slate-300 mb-1 cursor-pointer">dreamshouse33.com</p>
                            <p className="text-slate-300 cursor-pointer">contacto@dreamshouse33.com</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <LanguageSelector dropdownDirection="up" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 