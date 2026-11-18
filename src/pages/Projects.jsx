import { useState } from "react";
import { Search, Calendar, DollarSign, FolderOpen } from "lucide-react";
import { initialProjects } from "../data/mockData";

const statusOptions = ["All", "In Progress", "Review", "Completed"];

// Conditional styling map for status badges
const statusStyles = {
  "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
  Review: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Cycle project status on click (In Progress -> Review -> Completed)
  const handleStatusToggle = (id) => {
    const order = ["In Progress", "Review", "Completed"];
    setProjects((prev) =>
      prev.map((project) => {
        if (project.id !== id) return project;
        const nextIndex = (order.indexOf(project.status) + 1) % order.length;
        return { ...project, status: order[nextIndex] };
      })
    );
  };

  // Filter by status tab + search input
  const filteredProjects = projects.filter((project) => {
    const matchesStatus =
      activeFilter === "All" || project.status === activeFilter;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Client Projects</h2>
          <p className="text-sm text-slate-500">
            Manage deliverables, deadlines, and click any status badge to update progress.
          </p>
        </div>
        <span className="w-fit rounded-lg bg-slate-200/70 px-3 py-1.5 text-xs font-semibold text-slate-700">
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
      </div>

      {/* Filter Tabs + Search Bar */}
      <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-xs lg:flex-row lg:items-center">
        {/* Status Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                activeFilter === status
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search project or client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 py-2 pr-3 pl-9 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Conditional Rendering: Empty State vs Responsive Table/Cards */}
      {filteredProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-12 text-center">
          <FolderOpen className="h-10 w-10 text-slate-400" />
          <p className="mt-2 text-sm font-semibold text-slate-700">No matching projects found</p>
          <p className="text-xs text-slate-500">Try clearing your search or switching status filters.</p>
        </div>
      ) : (
        <>
          {/* DESKTOP VIEW: Clean Data Table */}
          <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  <th className="px-6 py-3.5">Project Name</th>
                  <th className="px-6 py-3.5">Client</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Deadline</th>
                  <th className="px-6 py-3.5 text-right">Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="transition-colors hover:bg-slate-50/80">
                    <td className="px-6 py-4 font-semibold text-slate-900">{project.name}</td>
                    <td className="px-6 py-4 text-slate-600">{project.client}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleStatusToggle(project.id)}
                        title="Click to change status"
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-semibold transition-transform active:scale-95 ${
                          statusStyles[project.status]
                        }`}
                      >
                        {project.status}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{project.deadline}</td>
                    <td className="px-6 py-4 text-right font-semibold text-slate-800">
                      {project.budget}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW: Stacked Project Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-slate-900">{project.name}</h3>
                    <p className="text-xs text-slate-500">{project.client}</p>
                  </div>
                  <button
                    onClick={() => handleStatusToggle(project.id)}
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
                  </button>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {project.deadline}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-slate-800">
                    <DollarSign className="h-3.5 w-3.5 text-emerald-600" />
                    {project.budget.replace("$", "")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}