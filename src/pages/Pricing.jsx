import React, { useState } from "react";
import { CheckCircle, Shield, Briefcase, Zap, DollarSign, Lock, Users, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "yearly"

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 0,
      yearlyPrice: 0,
      desc: "Great for starters",
      features: [
        "10 Bids per month",
        "Basic Profile",
        "Standard Support",
        "5% Platform Fee",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 29,
      yearlyPrice: 290,
      desc: "For serious freelancers",
      features: [
        "50 Bids per month",
        "Verified Badge",
        "Priority Support",
        "3% Platform Fee",
        "Skill Tests",
      ],
      cta: "Upgrade Now",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      yearlyPrice: 990,
      desc: "For agencies & teams",
      features: [
        "Unlimited Bids",
        "Agency Profile",
        "Dedicated Manager",
        "1% Platform Fee",
        "API Access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent <span className="text-orange-500">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            No hidden fees. Choose the plan that fits your freelance journey, whether you're just starting or scaling up.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium ${billingCycle === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div
                className={`w-6 h-6 bg-orange-500 rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
              Yearly <span className="text-orange-500 text-sm font-bold ml-1">(Save 17%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl flex flex-col ${
                  plan.popular
                    ? "bg-white dark:bg-gray-800 border-orange-500 shadow-xl scale-105 z-10"
                    : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-orange-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{plan.desc}</p>
                </div>
                
                <div className="flex items-end mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : (plan.yearlyPrice / 12).toFixed(0)}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 mb-1 ml-1">/mo</span>
                </div>
                {billingCycle === "yearly" && plan.monthlyPrice > 0 && (
                   <p className="text-sm text-orange-500 font-medium mb-6">
                     Billed ${plan.yearlyPrice} yearly
                   </p>
                )}

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-orange-500" : "text-gray-400"}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/30"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Transparent Service Fees</h2>
            <p className="text-gray-600 dark:text-gray-300">We only make money when you do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Clients */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">For Clients</h3>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">5%</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Service fee on all payments. This helps us run the platform and provide 24/7 support.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span>Secure Payment Processing</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span>Dispute Resolution Support</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span>Talent Quality Assurance</span>
                </li>
              </ul>
            </div>

            {/* For Freelancers */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">For Freelancers</h3>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">10%</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Sliding scale fee. The more you earn with a client, the less you pay. Starts at 10%.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Payment Protection</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Marketing Tools</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Invoice Generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise / Business Section */}
      <section className="py-20 bg-gray-900 dark:bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-orange-500/20 text-orange-500 font-bold px-4 py-1 rounded-full text-sm mb-6">
                ENTERPRISE SOLUTION
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Scale your team with <br/>
                <span className="text-orange-500">Marketplace Business</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Upgrade to a complete workforce solution. Get a dedicated account manager, consolidated billing, and access to the top 1% of talent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500">
                       <Zap className="w-5 h-5"/>
                    </div>
                    <span>Talent Scout Services</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500">
                       <Shield className="w-5 h-5"/>
                    </div>
                    <span>Compliance & Security</span>
                 </div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30">
                Contact Our Sales Team
              </button>
            </div>
            <div className="md:w-1/2 relative">
               <div className="relative z-10 bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                     <div>
                        <div className="text-sm text-gray-400">Total Spend</div>
                        <div className="text-3xl font-bold">$124,500</div>
                     </div>
                     <div className="text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full text-sm font-medium">
                        +12% vs last month
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold">D</div>
                           <div>
                              <div className="font-bold">Design Team</div>
                              <div className="text-xs text-gray-400">5 Active Contracts</div>
                           </div>
                        </div>
                        <div className="font-bold">$12,400</div>
                     </div>
                     <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">E</div>
                           <div>
                              <div className="font-bold">Engineering</div>
                              <div className="text-xs text-gray-400">12 Active Contracts</div>
                           </div>
                        </div>
                        <div className="font-bold">$45,200</div>
                     </div>
                  </div>
               </div>
               {/* Decorative elements */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 opacity-20 rounded-full blur-2xl"></div>
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-500 opacity-20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Security is Our Priority</h2>
              <p className="text-gray-600 dark:text-gray-300">We protect your payments and personal data.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                 <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8"/>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payment Protection</h3>
                 <p className="text-gray-600 dark:text-gray-400">
                    Funds are held securely in Escrow until you're 100% satisfied with the work delivered.
                 </p>
              </div>
              <div className="text-center p-6">
                 <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8"/>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Money Back Guarantee</h3>
                 <p className="text-gray-600 dark:text-gray-400">
                    Get your money back if the work doesn't meet the agreed-upon requirements.
                 </p>
              </div>
              <div className="text-center p-6">
                 <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8"/>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">24/7 Support</h3>
                 <p className="text-gray-600 dark:text-gray-400">
                    Our dedicated support team is available around the clock to help with any issues.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
