import { useAuth } from "../../Hooks/UseAuth";
import { useTheme } from "../../Context/ThemeContext";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";
import {
  DollarSign,
  Briefcase,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Plus,
  Clock,
  Calendar,
  Send,
  Settings,
  Zap,
  CheckCircle,
} from "lucide-react";
import StatCard from "./StatCard";
import { useQuery } from "@tanstack/react-query";
import usePrivateApi from "../../Hooks/PrivateAPI";
import { useEffect, useState } from "react";

// Mock Data for Charts
const revenueData = [
  { name: "Jan", revenue: 4000, jobs: 24 },
  { name: "Feb", revenue: 3000, jobs: 18 },
  { name: "Mar", revenue: 5000, jobs: 35 },
  { name: "Apr", revenue: 2780, jobs: 15 },
  { name: "May", revenue: 6890, jobs: 42 },
  { name: "Jun", revenue: 5390, jobs: 30 },
  { name: "Jul", revenue: 8490, jobs: 55 },
];

const projectStatusData = [
  { name: "Completed", value: 400, color: "#EA580C" }, // Orange-600
  { name: "In Progress", value: 300, color: "#F97316" }, // Orange-500
  { name: "Pending", value: 300, color: "#F59E0B" }, // Amber-500
  { name: "Cancelled", value: 100, color: "#9A3412" }, // Orange-800
];


const Dashbord = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const axiosScrure = usePrivateApi();
  const [udsaser, setUdsaser] = useState([]);
  const isDark = theme === "dark";
  const chartGridColor = isDark ? "#374151" : "#E5E7EB";
  const chartTextColor = isDark ? "#9CA3AF" : "#9CA3AF";
  const tooltipStyle = {
    backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
    borderColor: isDark ? "#374151" : "#E5E7EB",
    color: isDark ? "#F3F4F6" : "#111827",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Daynamick Daya

  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosScrure.get("categoryJob");
      return res.data;
    },
  });
  const categoryData = categories.map((item) => ({
    name: item.category,
    value: item.count,
  }));
  const COLORS = [
    "#F97316", // Orange-500
    "#F59E0B", // Amber-500
    "#EA580C", // Orange-600
    "#FBBF24", // Amber-400
    "#FB923C", // Orange-400
    "#D97706", // Amber-600
  ];
  // console.log(categoryData);

  useEffect(() => {
    axiosScrure.get("allusersPipeline").then((res) => {
      setUdsaser(res.data.result);
    });
  }, [axiosScrure]);

  console.log(udsaser);

  return (
    <motion.div
      className="max-w-7xl mx-auto space-y-8 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Banner */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white relative overflow-hidden  "
      >
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {user?.displayName?.split(" ")[0] || "User"}!
              </h1>
              <p className="text-orange-50 opacity-90 max-w-xl text-lg">
                You have{" "}
                <span className="font-bold text-white">4 active projects</span>{" "}
                and{" "}
                <span className="font-bold text-white">12 new proposals</span>{" "}
                waiting for review.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                View Reports
              </button>
              <button className="px-5 py-2.5 bg-white text-orange-600 font-bold rounded-xl shadow-sm hover:bg-orange-50 transition-colors">
                New Project
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-60 h-60 bg-amber-300 opacity-20 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Quick Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          title="Total Revenue"
          value="$24,500"
          trend="+12.5%"
          isPositive={true}
          icon={DollarSign}
          color="text-amber-500"
          bgColor="bg-amber-50 dark:bg-amber-900/20"
        />
        <StatCard
          title="Active Jobs"
          value="124"
          trend="+5.2%"
          isPositive={true}
          icon={Briefcase}
          color="text-amber-500"
          bgColor="bg-amber-50 dark:bg-amber-900/20"
        />
        <StatCard
          title="Total Users"
          value="8,432"
          trend="+2.4%"
          isPositive={true}
          icon={Users}
          color="text-orange-600"
          bgColor="bg-orange-100 dark:bg-orange-900/40"
        />
        <StatCard
          title="Avg. Response"
          value="2.4h"
          trend="-15%"
          isPositive={false}
          icon={Activity}
          color="text-orange-500"
          bgColor="bg-orange-50 dark:bg-orange-900/20"
        />
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Line Chart - Revenue */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Revenue Analytics
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Monthly revenue performance
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={chartGridColor}
                  opacity={0.3}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: chartTextColor, fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: chartTextColor, fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: isDark ? "#fff" : "#111827" }}
                  cursor={{
                    stroke: "#F97316",
                    strokeWidth: 1,
                    strokeDasharray: "4 4",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#F97316"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie Chart - Project Status */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Project Status
          </h3>
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: isDark ? "#fff" : "#111827" }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                1,100
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Total Projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity & Category Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Chart */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Registration Analytics
            </h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={udsaser}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={chartGridColor}
                  opacity={0.3}
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  tick={{ fill: chartTextColor, fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: chartTextColor, fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: isDark ? "#fff" : "#111827" }}
                />
                <Bar
                  dataKey="count"
                  fill="#F97316"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                >
                  {udsaser.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Right Column: Categories & Deadlines */}
        <div className="space-y-6">
          {/* Categories Bar Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Jobs by Category
            </h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryData}
                  layout="vertical"
                  margin={{ top: 10, right: 0, left: 40, bottom: 10 }}
                >
                  <XAxis type="number" hide />

                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                    tick={{ fill: chartTextColor, fontSize: 13 }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={tooltipStyle}
                    itemStyle={{ color: isDark ? "#fff" : "#111827" }}
                  />

                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={22}>
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Upcoming Deadlines Widget */}
          {/* <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Upcoming Deadlines
              </h3>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingDeadlines.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`mt-1.5 w-2 h-2 rounded-full ${
                      item.priority === "High" ? "bg-orange-500" : "bg-amber-500"
                    }`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {item.task}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {item.project}
                    </p>
                  </div>
                  <div className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-lg whitespace-nowrap">
                    {item.due}
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Mobile Floating Action Button - Kept as part of page content for now */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center z-40 transition-colors"
      >
        <Plus className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default Dashbord;
