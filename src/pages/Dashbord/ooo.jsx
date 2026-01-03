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
                            ? "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                            : item.status === "Pending"
                            ? "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                            : item.status === "New"
                            ? "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400"
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