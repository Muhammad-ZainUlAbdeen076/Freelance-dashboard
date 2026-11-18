import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Activity } from "lucide-react";
import StatCard from "../components/StatCard";
import {
  summaryStats,
  monthlyEarnings,
  taskDistribution,
  recentActivities,
} from "../data/mockData";

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-sm text-slate-500">
          Track your freelance revenue, active milestones, and recent client updates.
        </p>
      </div>

      {/* 1. Reusable KPI Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            type={stat.type}
          />
        ))}
      </div>

      {/* 2. Charts Section (Bar Chart + Pie Chart) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Monthly Earnings Bar Chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs lg:col-span-2">
          <h3 className="mb-4 text-base font-semibold text-slate-800">
            Monthly Earnings ($)
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyEarnings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "#f1f5f9" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "13px",
                  }}
                />
                <Bar dataKey="earnings" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Types Pie/Donut Chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <h3 className="mb-4 text-base font-semibold text-slate-800">
            Tasks by Category
          </h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                >
                  {taskDistribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Custom Legend */}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {taskDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-xs text-slate-600">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="truncate">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Recent Activity List */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-indigo-600" />
          <h3 className="text-base font-semibold text-slate-800">Recent Client Activity</h3>
        </div>

        <div className="divide-y divide-slate-100">
          {recentActivities.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-sm font-medium text-slate-800">{item.action}</p>
                <p className="text-xs text-slate-500">Client: {item.project}</p>
              </div>
              <span className="text-xs font-medium text-slate-400">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}