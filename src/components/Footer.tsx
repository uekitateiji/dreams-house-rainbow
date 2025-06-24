import React from 'react';

const Footer = () => {
    return (
        <footer id="contato" className="bg-slate-900 text-white py-8 md:py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                        {/* Logo */}
                        <div className="mb-6">
                            <div className="flex flex-col items-center md:items-start">
                                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white">DREAMS HOUSE</h3>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">SIMPLE BUILDS</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center md:text-left">
                            <p className="text-white font-medium mb-1">+598 9 274 3331</p>
                            <p className="text-slate-300 mb-1">dreamshouse33.com</p>
                            <p className="text-slate-300">contacto@dreamshouse33.com</p>
                        </div>
                    </div>

                    {/* Flags */}
                    <div className="flex space-x-4">
                        <div className="w-8 h-6 bg-green-500 rounded flex items-center justify-center">
                            <span className="text-xs">🇧🇷</span>
                        </div>
                        <div className="w-8 h-6 bg-blue-400 rounded flex items-center justify-center">
                            <span className="text-xs">🇺🇾</span>
                        </div>
                        <div className="w-8 h-6 bg-red-500 rounded flex items-center justify-center">
                            <span className="text-xs">🇺🇸</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 