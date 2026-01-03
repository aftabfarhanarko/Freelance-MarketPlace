import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Shield,
  CreditCard,
  Users,
  Database,
  Save,
  Globe,
  Bell,
  Lock,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  Percent,
} from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";

const AdminSettings = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("general");
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'success' | 'error' | null

  // Mock Data / State
  const [platformConfig, setPlatformConfig] = useState({
    siteName: "Freelance Marketplace",
    supportEmail: "support@marketplace.com",
    maintenanceMode: false,
    defaultCurrency: "USD",
  });

  const [feesConfig, setFeesConfig] = useState({
    platformFee: 10,
    taxRate: 5,
    minWithdrawal: 50,
  });

  const [userConfig, setUserConfig] = useState({
    autoApproveFreelancers: false,
    emailVerificationRequired: true,
    allowSocialLogin: true,
  });

  const [adminProfile, setAdminProfile] = useState({
    name: "Admin User",
    email: "admin@marketplace.com",
    role: "Super Admin",
    bio: "Managing the platform operations.",
  });

  const handleSave = () => {
    setIsLoading(true);
    setSaveStatus(null);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSaveStatus("success");
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1500);
  };

  const tabs = [
    { id: "general", label: "General", icon: Globe },
    { id: "account", label: "My Account", icon: Users },
    { id: "fees", label: "Fees & Commission", icon: DollarSign },
    { id: "users", label: "User Controls", icon: CheckCircle2 },
    { id: "security", label: "Security", icon: Shield },
    { id: "system", label: "System", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 lg:p-10 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Settings className="w-8 h-8 text-orange-500" />
              Admin Settings
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage platform configurations, fees, and system preferences.
            </p>
          </div>
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Feedback Message */}
        <AnimatePresence>
          {saveStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl flex items-center gap-3 border border-green-200 dark:border-green-800"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Settings saved successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2 sticky top-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8"
            >
              {/* GENERAL (PLATFORM) SETTINGS */}
              {activeTab === "general" && (
                <div className="space-y-8">
                  <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      General Settings
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Configure the marketplace identity and basic settings.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Marketplace Name
                      </label>
                      <input
                        type="text"
                        value={platformConfig.siteName}
                        onChange={(e) =>
                          setPlatformConfig({ ...platformConfig, siteName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Official Support Email
                      </label>
                      <input
                        type="email"
                        value={platformConfig.supportEmail}
                        onChange={(e) =>
                          setPlatformConfig({ ...platformConfig, supportEmail: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-100 dark:bg-amber-800/40 text-amber-600 dark:text-amber-400 rounded-lg">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Maintenance Mode</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Temporarily disable the platform for non-admin users.
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={platformConfig.maintenanceMode}
                          onChange={(e) =>
                            setPlatformConfig({ ...platformConfig, maintenanceMode: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* MY ACCOUNT SETTINGS (NO IMAGE) */}
              {activeTab === "account" && (
                <div className="space-y-8">
                  <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      My Account
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage your admin profile details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                       <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={adminProfile.name}
                        onChange={(e) =>
                          setAdminProfile({ ...adminProfile, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={adminProfile.email}
                        onChange={(e) =>
                          setAdminProfile({ ...adminProfile, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Bio / Role Description
                      </label>
                      <textarea
                        rows="3"
                        value={adminProfile.bio}
                        onChange={(e) =>
                          setAdminProfile({ ...adminProfile, bio: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                      />
                    </div>
                    
                    <div>
                       <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Role
                      </label>
                      <div className="px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-300 cursor-not-allowed">
                        {adminProfile.role}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FEES & COMMISSION */}
              {activeTab === "fees" && (
                <div className="space-y-8">
                  <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Fees & Commission
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Configure revenue models and transaction limits.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Platform Fee (%)
                      </label>
                      <div className="relative">
                        <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          value={feesConfig.platformFee}
                          onChange={(e) =>
                            setFeesConfig({ ...feesConfig, platformFee: parseFloat(e.target.value) })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Percentage taken from each completed job.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Tax Rate (%)
                      </label>
                      <div className="relative">
                        <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          value={feesConfig.taxRate}
                          onChange={(e) =>
                            setFeesConfig({ ...feesConfig, taxRate: parseFloat(e.target.value) })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Min. Withdrawal Amount ($)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          value={feesConfig.minWithdrawal}
                          onChange={(e) =>
                            setFeesConfig({ ...feesConfig, minWithdrawal: parseFloat(e.target.value) })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* USER CONTROLS */}
              {activeTab === "users" && (
                <div className="space-y-8">
                  <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      User Controls
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage user registration and verification policies.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Toggle Item */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Auto-approve Freelancers</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Automatically activate freelancer profiles upon registration.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userConfig.autoApproveFreelancers}
                          onChange={(e) =>
                            setUserConfig({ ...userConfig, autoApproveFreelancers: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Toggle Item */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Require Email Verification</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Users must verify email before posting jobs or bidding.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userConfig.emailVerificationRequired}
                          onChange={(e) =>
                            setUserConfig({ ...userConfig, emailVerificationRequired: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

               {/* SECURITY */}
               {activeTab === "security" && (
                <div className="space-y-8">
                  <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Admin Security
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Protect the admin panel.
                    </p>
                  </div>

                  <div className="max-w-md space-y-4">
                     <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Current Password
                      </label>
                      <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white" />
                     </div>
                     <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        New Password
                      </label>
                      <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/50 outline-none transition-all dark:text-white" />
                     </div>
                     <button className="px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                       Update Password
                     </button>
                  </div>
                </div>
              )}

              {/* SYSTEM */}
              {activeTab === "system" && (
                <div className="space-y-8">
                  <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      System & Database
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Maintenance tools and logs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                       <Database className="w-10 h-10 text-orange-500 mb-3" />
                       <h3 className="font-bold text-gray-900 dark:text-white">Database Backup</h3>
                       <p className="text-xs text-gray-500 mb-4">Last backup: 2 hours ago</p>
                       <button className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg text-sm font-semibold hover:bg-orange-200 transition-colors">
                         Download Backup
                       </button>
                    </div>

                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                       <RefreshCw className="w-10 h-10 text-amber-500 mb-3" />
                       <h3 className="font-bold text-gray-900 dark:text-white">Clear Cache</h3>
                       <p className="text-xs text-gray-500 mb-4">Clear server and browser cache</p>
                       <button className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg text-sm font-semibold hover:bg-amber-200 transition-colors">
                         Clear Cache
                       </button>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
