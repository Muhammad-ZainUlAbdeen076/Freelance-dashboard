import { useState } from "react";
import { User, Mail, Lock, CheckCircle2, Save } from "lucide-react";

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    fullName: "Muhammad Zain Ul Abdin",
    email: "zain.dev@freelanceos.io",
    role: "Front-End Developer & GHL Specialist",
    hourlyRate: "45",
    bio: "Building high-converting landing pages, React dashboards, and automated GoHighLevel funnels.",
    currentPassword: "",
    newPassword: "",
  });

  const [saved, setSaved] = useState(false);

  // Single handler for all controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (saved) setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);

    // Clear password fields after saving & auto-hide banner after 3s
    setFormData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
    }));

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Page Heading */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Profile Settings</h2>
        <p className="text-sm text-slate-500">
          Update your freelancer account details, public bio, and security credentials.
        </p>
      </div>

      {/* Conditional Save Confirmation Banner */}
      {saved && (
        <div className="flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
          <span>Profile changes saved successfully!</span>
        </div>
      )}

      {/* Profile Summary Card */}
      <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
          {formData.fullName
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase() || "ZA"}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{formData.fullName}</h3>
          <p className="text-sm text-slate-500">{formData.role}</p>
          <p className="mt-1 text-xs font-semibold text-indigo-600">
            Rate: ${formData.hourlyRate}/hr
          </p>
        </div>
      </div>

      {/* Controlled Settings Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
      >
        {/* Personal Info Section */}
        <div className="space-y-4">
          <h4 className="border-b border-slate-100 pb-2 text-sm font-semibold text-slate-800 uppercase tracking-wider">
            Personal Information
          </h4>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 py-2 pr-3 pl-9 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 py-2 pr-3 pl-9 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Role / Title */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Professional Title
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Hourly Rate ($ USD)
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Short Bio
            </label>
            <textarea
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Password Section (Placeholder Fields) */}
        <div className="space-y-4 pt-2">
          <h4 className="border-b border-slate-100 pb-2 text-sm font-semibold text-slate-800 uppercase tracking-wider">
            Change Password
          </h4>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Current Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="••••••••"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 py-2 pr-3 pl-9 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                New Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 py-2 pr-3 pl-9 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end border-t border-slate-100 pt-4">
          <button
            type="submit"
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}