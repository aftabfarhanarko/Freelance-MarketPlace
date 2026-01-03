import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, Home, LogOut, Lock, User as UserIcon, AlertTriangle, ArrowLeft, Key, Activity, Globe } from 'lucide-react';
import { useAuth } from '../Hooks/UseAuth';
import Swal from 'sweetalert2';

const YouAreNotAdmin = () => {
    const navigate = useNavigate();
    const { user, logOutUser } = useAuth();
    const [countdown, setCountdown] = useState(20);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Mouse move effect for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const clock = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        const redirect = setTimeout(() => {
            navigate('/');
        }, 20000);

        return () => {
            clearInterval(timer);
            clearInterval(clock);
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

    const handleRequestAccess = () => {
        Swal.fire({
            title: 'Request Admin Access',
            html: `
                <p class="text-sm text-gray-500 mb-4">Explain why you need admin privileges:</p>
                <textarea id="reason" class="swal2-textarea" placeholder="I need access because..." style="margin: 0;"></textarea>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#ea580c', // Orange-600
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Submit Request',
            preConfirm: () => {
                const reason = Swal.getPopup().querySelector('#reason').value;
                if (!reason) {
                    Swal.showValidationMessage('Please enter a reason');
                }
                return { reason: reason };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Request Sent!',
                    text: 'Administrators will review your request shortly.',
                    icon: 'success',
                    confirmButtonColor: '#ea580c'
                });
            }
        });
    };

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden perspective-1000">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3], 
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3], 
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div 
                style={{ rotateX, rotateY, z: 100 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="max-w-lg w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative z-10 transform-gpu"
            >
                {/* Status Bar */}
                <div className="bg-orange-500 text-white px-6 py-2 flex justify-between items-center text-xs font-medium tracking-wide">
                    <div className="flex items-center gap-2">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>SECURITY ALERT: 403</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="opacity-80">IP: 192.168.X.X</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">LOGGED</span>
                    </div>
                </div>

                {/* Header Section */}
                <div className="bg-gradient-to-b from-orange-50 to-white dark:from-orange-900/10 dark:to-gray-800 p-8 text-center">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-[6px] border-orange-50 dark:border-gray-700 relative"
                    >
                        <Lock className="w-10 h-10 text-orange-500" />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -right-1 -top-1 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm"
                        >
                            <span className="text-xs font-bold">!</span>
                        </motion.div>
                    </motion.div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Restricted Access
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        This zone requires administrator clearance.
                    </p>
                </div>

                {/* User Info & Actions */}
                <div className="px-8 pb-8 space-y-6">
                    {/* User Identity Card */}
                    {user && (
                        <div className="group relative bg-white dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100 dark:border-gray-600">
                                        {user.photoURL ? (
                                            <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                <UserIcon className="w-6 h-6 text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-700 rounded-full"></div>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Current Session</p>
                                    <h3 className="font-bold text-gray-900 dark:text-white truncate">
                                        {user.displayName || user.email}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                                            User Role
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Interactive Message */}
                    <div className="flex gap-3 bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl border border-orange-100 dark:border-orange-800/30">
                        <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                        <div className="space-y-2">
                            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                Access Denied
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                                You attempted to access a protected route. This event has been logged for security purposes. If you believe this is an error, please request access below.
                            </p>
                        </div>
                    </div>

                    {/* Countdown */}
                    <div className="text-center">
                        <p className="text-xs text-gray-400 font-mono">
                            Auto-redirecting to safe zone in <span className="text-orange-600 font-bold">{countdown}s</span>
                        </p>
                        <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                            <motion.div 
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 20, ease: "linear" }}
                                className="h-full bg-orange-500"
                            />
                        </div>
                    </div>

                    {/* Primary Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <Link 
                            to="/"
                            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <button 
                            onClick={handleRequestAccess}
                            className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200 dark:hover:shadow-none"
                        >
                            <Key className="w-4 h-4" />
                            Request Access
                        </button>
                    </div>

                    {/* Secondary Actions */}
                    <div className="flex justify-between pt-2">
                        <button 
                            onClick={() => navigate(-1)}
                            className="text-xs font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1 transition-colors"
                        >
                            <ArrowLeft className="w-3 h-3" />
                            Go Back
                        </button>
                        <button 
                            onClick={handleLogout}
                            className="text-xs font-medium text-red-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                        >
                            <LogOut className="w-3 h-3" />
                            Logout Session
                        </button>
                    </div>
                </div>

                {/* Technical Footer */}
                <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-[10px] text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                        <Activity className="w-3 h-3" />
                        <span>System Stable</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe className="w-3 h-3" />
                        <span>{currentTime.toLocaleTimeString()}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default YouAreNotAdmin;
