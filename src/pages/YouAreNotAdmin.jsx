import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, Home, LogOut, Lock, User as UserIcon, AlertTriangle } from 'lucide-react';
import { useAuth } from '../Hooks/UseAuth';

const YouAreNotAdmin = () => {
    const navigate = useNavigate();
    const { user, logOutUser } = useAuth();
    const [countdown, setCountdown] = useState(15);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            navigate('/');
        }, 15000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [navigate]);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                navigate('/login');
            })
            .catch(console.error);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative z-10"
            >
                {/* Header Section */}
                <div className="bg-orange-50 dark:bg-orange-900/20 p-8 text-center border-b border-orange-100 dark:border-orange-900/30">
                    <motion.div 
                        initial={{ rotate: -10, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-orange-100 dark:border-orange-800"
                    >
                        <Lock className="w-10 h-10 text-orange-500" />
                    </motion.div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Access Restricted
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Administrator privileges required
                    </p>
                </div>

                {/* User Info & Message */}
                <div className="p-8 space-y-6">
                    {/* User Profile Card */}
                    {user && (
                        <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm shrink-0">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <UserIcon className="w-6 h-6 text-gray-400" />
                                    </div>
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Logged in as</p>
                                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                                    {user.displayName || user.email}
                                </h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                                        User Account
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="flex gap-3 text-left">
                            <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Hello <strong>{user?.displayName?.split(' ')[0] || 'there'}</strong>, it looks like you've stumbled upon an admin-only area. Don't worry, nothing is broken!
                            </p>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                             <p className="text-sm text-blue-700 dark:text-blue-300">
                                Redirecting automatically in <strong>{countdown}s</strong>
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <Link 
                            to="/"
                            className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-orange-200 dark:shadow-none transform hover:-translate-y-0.5"
                        >
                            <Home className="w-4 h-4" />
                            Return Home
                        </Link>
                        
                        <button 
                            onClick={handleLogout}
                            className="flex items-center justify-center gap-2 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-200"
                        >
                            <LogOut className="w-4 h-4" />
                            Switch Account
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 dark:bg-gray-700/30 px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-xs text-gray-400">
                    <span>Error: 403 Forbidden</span>
                    <a href="#" className="hover:text-orange-600 transition-colors">Contact Support</a>
                </div>
            </motion.div>
        </div>
    );
};

export default YouAreNotAdmin;
