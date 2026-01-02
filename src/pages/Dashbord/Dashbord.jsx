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
  { name: "Completed", value: 400, color: "#10B981" }, // Emerald-500
  { name: "In Progress", value: 300, color: "#3B82F6" }, // Blue-500
  { name: "Pending", value: 300, color: "#F59E0B" }, // Amber-500
  { name: "Cancelled", value: 100, color: "#EF4444" }, // Red-500
];

const recentActivity = [
  {
    id: 1,
    user: "Alice Johnson",
    action: "Posted a new job",
    project: "E-commerce Website",
    time: "2 mins ago",
    status: "New",
  },
  {
    id: 2,
    user: "Bob Smith",
    action: "Applied to job",
    project: "Logo Design",
    time: "15 mins ago",
    status: "Pending",
  },
  {
    id: 3,
    user: "Charlie Brown",
    action: "Completed milestone",
    project: "Mobile App",
    time: "1 hour ago",
    status: "Completed",
  },
  {
    id: 4,
    user: "Diana Prince",
    action: "Left a review",
    project: "SEO Optimization",
    time: "3 hours ago",
    status: "Review",
  },
  {
    id: 5,
    user: "Evan Wright",
    action: "Posted a new job",
    project: "Mobile Game",
    time: "5 hours ago",
    status: "New",
  },
  {
    id: 6,
    user: "Fiona Gallagher",
    action: "Applied to job",
    project: "Content Writing",
    time: "6 hours ago",
    status: "Pending",
  },
];

const upcomingDeadlines = [
  {
    id: 1,
    task: "Submit Proposal",
    project: "E-commerce App",
    due: "Today, 5 PM",
    priority: "High",
  },
  {
    id: 2,
    task: "Client Meeting",
    project: "Logo Design",
    due: "Tomorrow, 10 AM",
    priority: "Medium",
  },
  {
    id: 3,
    task: "Final Delivery",
    project: "SEO Audit",
    due: "Oct 25",
    priority: "High",
  },
];

const quickActions = [
  {
    label: "Post a Job",
    icon: Plus,
    color: "bg-orange-500",
    text: "text-white",
  },
  {
    label: "Find Work",
    icon: Briefcase,
    color: "bg-blue-500",
    text: "text-white",
  },
  { label: "Messages", icon: Send, color: "bg-purple-500", text: "text-white" },
  {
    label: "Settings",
    icon: Settings,
    color: "bg-gray-500",
    text: "text-white",
  },
];

const Dashbord = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const axiosScrure = usePrivateApi();
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

  const {
    data: categories = [],
  } = useQuery({
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
  "#F97316", // orange
  "#3B82F6", // blue
  "#10B981", // green
  "#A855F7", // purple
  "#EF4444", // red
  "#17B8A6", // teal
];


  console.log(categoryData);

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
        className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-orange-500/20"
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

      {/* Quick Actions */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-900/50 transition-all group"
          >
            <div
              className={`p-3 rounded-xl mb-3 ${action.color} ${action.text} shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300`}
            >
              <action.icon className="w-6 h-6" />
            </div>
            <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
              {action.label}
            </span>
          </button>
        ))}
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
          color="text-emerald-500"
          bgColor="bg-emerald-50 dark:bg-emerald-900/20"
        />
        <StatCard
          title="Active Jobs"
          value="124"
          trend="+5.2%"
          isPositive={true}
          icon={Briefcase}
          color="text-blue-500"
          bgColor="bg-blue-50 dark:bg-blue-900/20"
        />
        <StatCard
          title="Total Users"
          value="8,432"
          trend="+2.4%"
          isPositive={true}
          icon={Users}
          color="text-purple-500"
          bgColor="bg-purple-50 dark:bg-purple-900/20"
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
        {/* Recent Activity Table */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Activity
            </h3>
            <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                  <th className="pb-3 pl-2">User</th>
                  <th className="pb-3">Action</th>
                  <th className="pb-3">Project</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 pr-2 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {recentActivity.map((item) => (
                  <tr
                    key={item.id}
                    className="group hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                  >
                    <td className="py-3 pl-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xs">
                          {item.user.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white text-sm">
                          {item.user}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-gray-600 dark:text-gray-300">
                      {item.action}
                    </td>
                    <td className="py-3 text-sm text-gray-600 dark:text-gray-300">
                      {item.project}
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${
                          item.status === "Completed"
                            ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                            : item.status === "Pending"
                            ? "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                            : item.status === "New"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            : "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 pr-2 text-right text-xs text-gray-400">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <motion.div
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
                      item.priority === "High" ? "bg-red-500" : "bg-amber-500"
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
          </motion.div>
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
