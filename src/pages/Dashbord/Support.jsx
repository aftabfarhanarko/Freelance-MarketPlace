import React from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, Book, MessageCircle, FileText, ChevronRight, AlertCircle } from 'lucide-react';

const Support = () => {
    const categories = [
        {
            icon: Book,
            title: "Getting Started",
            description: "New to the platform? Start here.",
            articles: 5
        },
        {
            icon: FileText,
            title: "Account & Billing",
            description: "Manage your account and payments.",
            articles: 8
        },
        {
            icon: MessageCircle,
            title: "Safety & Privacy",
            description: "Learn how we keep you safe.",
            articles: 4
        },
        {
            icon: HelpCircle,
            title: "Troubleshooting",
            description: "Solutions to common problems.",
            articles: 6
        }
    ];

    const faqs = [
        {
            question: "How do I verify my account?",
            answer: "Go to Settings > Verification and upload your ID documents. The process usually takes 24-48 hours."
        },
        {
            question: "What are the service fees?",
            answer: "We charge a flat 10% service fee on all completed projects. There are no hidden charges."
        },
        {
            question: "How do I withdraw my earnings?",
            answer: "You can withdraw funds to your bank account, PayPal, or Payoneer from the Payments section."
        },
        {
            question: "Can I cancel a project?",
            answer: "Yes, you can cancel a project before it starts. If work has begun, you'll need to contact support for mediation."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="p-6 md:p-10 min-h-screen">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto space-y-12"
            >
                {/* Header & Search */}
                <motion.div variants={itemVariants} className="text-center space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        How can we <span className="text-orange-500">help you?</span>
                    </h1>
                    
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search for answers..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                        />
                    </div>
                </motion.div>

                {/* Categories Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat, index) => (
                        <div 
                            key={index}
                            className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-orange-500/30 hover:shadow-lg transition-all cursor-pointer group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        {cat.description}
                                    </p>
                                    <span className="text-xs font-medium text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-lg">
                                        {cat.articles} articles
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* FAQ Section */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                        <AlertCircle className="w-6 h-6 text-orange-500" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                    </div>
                    
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 text-center pt-6 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Can't find what you're looking for?
                        </p>
                        <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors">
                            Contact Support
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Support;
