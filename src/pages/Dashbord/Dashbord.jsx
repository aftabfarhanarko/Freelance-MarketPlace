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
  ComposedChart,
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
  FileText,
  Server,
  Database,
} from "lucide-react";
import StatCard from "./StatCard";
import { useQuery } from "@tanstack/react-query";
import usePrivateApi from "../../Hooks/PrivateAPI";
import { useEffect, useState } from "react";
import { format } from "date-fns";

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
  const [countData, setCountData] = useState({});
  const [chartData, setChartData] = useState([]);
  const [letesUser, setLetesUser] = useState([]);
  const [letesJobs, setLetesJobs] = useState([]);

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
  // console.log(udsaser);

  useEffect(() => {
    axiosScrure.get("allcountdata").then((res) => {
      setCountData(res?.data);
    });
  }, [axiosScrure]);

  useEffect(() => {
    axiosScrure.get("acceptsSallery").then((res) => {
      setChartData(res?.data);
    });
  }, [axiosScrure]);
  // console.log(chartData.dailyData);
  const revenueData = (chartData?.dailyData || []).map((item) => ({
    name: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }), // অথবা format(item.date, 'MMM d') যদি date-fns ইউজ করো
    revenue: item.totalSalary,
    jobs: item.count,
  }));

  // User and Job

  useEffect(() => {
    axiosScrure.get("allusernadJob").then((res) => {
      console.log(res.data);
      setLetesUser(res.data.latestUsers);
      setLetesJobs(res.data.latestJobs);
    });
  }, [axiosScrure]);

  console.log({
    letesJobs,
    letesUser,
  });

  return (
    <motion.div
      className="max-w-7xl mx-auto space-y-8 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Banner & Stats Overview */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl  bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/50 isolate"
      >
        {/* Background Patterns - Adaptive */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-10 mix-blend-overlay"></div>

          {/* Subtle Gradient Orbs */}
          <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-500/20 to-amber-500/20 dark:from-orange-500/10 dark:to-amber-500/10 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-56 h-56 lg:w-80 lg:h-80 bg-gradient-to-tr from-orange-600/10 to-rose-500/10 dark:from-orange-600/10 dark:to-rose-500/10 rounded-full blur-[60px]"></div>

          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 p-6 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Welcome & Actions */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                {/* Status Badge */}
                <div className="inline-flex flex-wrap items-center gap-2 lg:gap-2.5 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-orange-50 dark:bg-white/5 border border-orange-100 dark:border-white/10 backdrop-blur-xl">
                  <span className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-green-500"></span>
                  </span>
                  <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                    System Online
                  </span>
                  <div className="h-3 lg:h-4 w-px bg-gray-300 dark:bg-white/20 mx-0.5 lg:mx-1"></div>
                  <span className="text-xs lg:text-sm font-medium text-orange-600 dark:text-orange-400 flex items-center gap-1.5 lg:gap-2">
                    <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    {new Date().toLocaleDateString(undefined, {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                    Welcome back, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300">
                      {user?.displayName?.split(" ")[0] || "Admin"}
                    </span>
                  </h1>
                  <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed font-medium">
                    Here's what's happening today. You have{" "}
                    <span className="text-gray-900 dark:text-white font-bold bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md">
                      12 new proposals
                    </span>{" "}
                    and{" "}
                    <span className="text-gray-900 dark:text-white font-bold bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md">
                      4 active projects
                    </span>{" "}
                    requiring your attention.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
                <button className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl lg:rounded-2xl shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex justify-center items-center gap-2 group-hover:text-white transition-colors text-sm lg:text-base">
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5" /> Create New
                    Project
                  </span>
                </button>
                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl lg:rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 text-sm lg:text-base">
                  View Reports
                </button>
              </div>
            </div>

            {/* Right Column: Unified Stats Grid */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {/* Stat 1: Revenue */}
                <div className="p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex justify-between items-start mb-3 lg:mb-4">
                    <div className="p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                      Total Revenue
                    </p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        ${countData?.totalSalary}
                      </h3>
                      <span className="flex items-center gap-1 text-[10px] lg:text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full border border-emerald-200 dark:border-emerald-500/10">
                        +12.5%{" "}
                        <ArrowUpRight className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat 2: Active Jobs */}
                <div className="p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex justify-between items-start mb-3 lg:mb-4">
                    <div className="p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                      Active Jobs
                    </p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        {countData?.totalJobs}
                      </h3>
                      <span className="flex items-center gap-1 text-[10px] lg:text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full border border-emerald-200 dark:border-emerald-500/10">
                        +5.2%{" "}
                        <ArrowUpRight className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat 3: Total Users */}
                <div className="p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex justify-between items-start mb-3 lg:mb-4">
                    <div className="p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                      Total Users
                    </p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        {countData?.totalUsers}
                      </h3>
                      <span className="flex items-center gap-1 text-[10px] lg:text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full border border-emerald-200 dark:border-emerald-500/10">
                        +2.4%{" "}
                        <ArrowUpRight className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat 4: Avg Response */}
                <div className="p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex justify-between items-start mb-3 lg:mb-4">
                    <div className="p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300">
                      <Activity className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                      Avg.Accepted Jobs
                    </p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        {countData?.totalAcceptedJobs}
                      </h3>
                      <span className="flex items-center gap-1 text-[10px] lg:text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/10 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full border border-rose-200 dark:border-rose-500/10">
                        -15%{" "}
                        <ArrowDownRight className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
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
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Registration Analytics
            </h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="h-[300px] sm:h-[400px] w-full">
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
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Jobs by Category
            </h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryData}
                  layout="vertical"
                  margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
                >
                  <XAxis type="number" hide />

                  <YAxis
                    type="category"
                    dataKey="name"
                    width={100}
                    tick={{ fill: chartTextColor, fontSize: 11 }}
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

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          {/* Letes Jobes */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Jobs Posts
              </h3>
              <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                View All
              </button>
            </div>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                    <th className="pb-3 pl-2">Job Title</th>
                    <th className="pb-3">Posted By</th>
                    {/* <th className="pb-3">Category</th> */}
                    <th className="pb-3">Salary</th>
                    <th className="pb-3 pr-2 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {letesJobs.map((item) => (
                    <tr
                      key={item._id}
                      className="group hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                    >
                      <td className="py-3 pl-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                            <img
                              src={item.coverImage}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item.postedBy}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.userEmail}
                          </span>
                        </div>
                      </td>
                      {/* <td className="py-3 text-sm text-gray-600 dark:text-gray-300">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                          {item.Category}
                        </span>
                      </td> */}
                      <td className="py-3 text-sm font-semibold text-gray-900 dark:text-white">
                        ${item["sallery "] || 5555}
                      </td>
                      <td className="py-3 pr-2 text-right text-xs text-gray-400">
                        {new Date(item.create_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {letesJobs.map((item) => (
                <div
                  key={item._id}
                  className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shrink-0">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">
                          {item.title}
                        </h4>
                        <span className="text-xs text-gray-500 block mt-0.5">
                          {new Date(item.create_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white text-sm shrink-0">
                      ${item["sallery "] || 5555}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700/50">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-0.5">
                        Posted by
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.postedBy}
                      </span>
                      <span className="text-xs text-gray-500 truncate">
                        {item.userEmail}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div>
          {/* Letes User Add */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Users
              </h3>
              <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                View All
              </button>
            </div>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                    <th className="pb-3 pl-2">User</th>
                    <th className="pb-3">Role</th>
                    <th className="pb-3 pr-2 text-right">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {letesUser.map((user) => (
                    <tr
                      key={user._id || user.email}
                      className="group hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                    >
                      <td className="py-3 pl-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                            <img
                              src={user.photoURL}
                              alt={user.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900 dark:text-white text-sm">
                              {user.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.role === "admin"
                              ? "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
                              : "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 pr-2 text-right text-xs text-gray-400">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {letesUser.map((user) => (
                <div
                  key={user._id || user.email}
                  className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 shrink-0">
                      <img
                        src={user.photoURL}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                        {user.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        Joined: {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
                        : "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    }`}
                  >
                    {user.role}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Floating Action Button - Kept as part of page content for now */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="md:hidden fixed bottom-20 right-4 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center z-40 transition-colors"
      >
        <Plus className="w-6 h-6" />
      </motion.button>

      {/* Control Center & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Actions
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: Plus,
                label: "Post Job",
                color: "text-orange-600",
                bg: "bg-orange-100",
              },
              {
                icon: Users,
                label: "Manage Users",
                color: "text-blue-600",
                bg: "bg-blue-100",
              },
              {
                icon: FileText,
                label: "Reports",
                color: "text-emerald-600",
                bg: "bg-emerald-100",
              },
              {
                icon: Settings,
                label: "Settings",
                color: "text-gray-600",
                bg: "bg-gray-100",
              },
            ].map((action, idx) => (
              <button
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group"
              >
                <div
                  className={`p-3 rounded-full ${action.bg} dark:bg-opacity-10 mb-3 group-hover:scale-110 transition-transform`}
                >
                  <action.icon className={`w-6 h-6 ${action.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              System Health
            </h3>
            <span className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Operational
            </span>
          </div>
          <div className="space-y-4">
            {[
              {
                label: "Server Latency",
                value: "24ms",
                icon: Server,
                status: "Good",
              },
              {
                label: "Database Status",
                value: "Connected",
                icon: Database,
                status: "Good",
              },
              {
                label: "API Uptime",
                value: "99.9%",
                icon: Activity,
                status: "Good",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-gray-600 text-gray-500 dark:text-gray-300 shadow-sm">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashbord;
