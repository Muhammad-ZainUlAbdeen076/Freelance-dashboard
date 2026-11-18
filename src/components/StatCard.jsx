import { FolderKanban, DollarSign, Clock, Users } from "lucide-react";

const iconMap = {
  projects: { icon: FolderKanban, bg: "bg-indigo-50 text-indigo-600" },
  earnings: { icon: DollarSign, bg: "bg-emerald-50 text-emerald-600" },
  tasks: { icon: Clock, bg: "bg-amber-50 text-amber-600" },
  clients: { icon: Users, bg: "bg-cyan-50 text-cyan-600" },
};

export default function StatCard({ title, value, change, type }) {
  const { icon: Icon, bg } = iconMap[type] || iconMap.projects;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-1.5 text-2xl font-bold text-slate-900">{value}</p>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${bg}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-slate-500">{change}</p>
    </div>
  );
}