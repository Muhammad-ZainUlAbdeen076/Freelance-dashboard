import { useState } from "react";
import { Menu, Bell } from "lucide-react";
import { recentActivities } from "../data/mockData";

export default function Header({ onMenuClick }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState(recentActivities.slice(0, 3));

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      {/* Left: Mobile Hamburger + Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold text-slate-800">Client Portal</h1>
      </div>

      {/* Right: Notification Bell & User Badge */}
      <div className="relative flex items-center gap-4">
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
          )}
        </button>

        {/* Bonus: Notification Dropdown (3 Most Recent Activities) */}
        {showDropdown && (
          <div className="absolute top-12 right-0 w-80 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-800">Recent Activity</span>
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="text-xs font-medium text-indigo-600 hover:underline"
                >
                  Mark all read
                </button>
              )}
            </div>

            <div className="divide-y divide-slate-100">
              {notifications.map((item) => (
                <div key={item.id} className="py-2.5 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-slate-800">{item.action}</p>
                    {item.unread && (
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {item.project} &bull; {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Avatar */}
        <div className="flex items-center gap-2.5 border-l border-slate-200 pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
            ZA
          </div>
          <span className="hidden text-sm font-medium text-slate-700 sm:block">Zain</span>
        </div>
      </div>
    </header>
  );
}