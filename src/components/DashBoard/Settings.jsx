import React, { useState } from 'react'
import { HelpCircle, CreditCard, LogOut } from 'lucide-react'
import { HelpCenter } from '../renderComp/HelpCenter';
import { AccountSettings } from '../renderComp/AccountSettings';

export const Settings = () => {
    const [activeSection, setActiveSection] = useState('help');

    const handleLogout = () => {
        console.log('Logging out...');
    };

    return (
        <div className="space-y-6">
            {/* Settings Navigation */}
            <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
                <div className="flex space-x-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {[
                        { id: 'help', label: 'Help Center', icon: HelpCircle },
                        { id: 'account', label: 'Account Settings', icon: CreditCard },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveSection(tab.id)}
                                className={`flex-shrink-0 py-3 px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center space-x-2 ${activeSection === tab.id
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Based on Active Section */}
            {activeSection === 'help' && <HelpCenter />}
            {activeSection === 'account' && <AccountSettings />}

            {/* Logout Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex flex-wrap gap-3.5 lg:flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Ready to leave?</h3>
                        <p className="text-gray-600">You can always sign back in anytime</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center"
                    >
                        <LogOut className="w-5 h-5 mr-2" />
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    )
}