import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// Helper Component for Stats Cards
const StatCard = ({
  title,
  value,
  trend,
  isPositive,
  icon: Icon,
  color,
  bgColor,
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${bgColor} ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div
        className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg ${
          isPositive
            ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
            : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
        }`}
      >
        {isPositive ? (
          <ArrowUpRight className="w-3 h-3" />
        ) : (
          <ArrowDownRight className="w-3 h-3" />
        )}
        {trend}
      </div>
    </div>
    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
      {title}
    </h3>
    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
      {value}
    </p>
  </div>
);

export default StatCard;