export const summaryStats = [
  { id: 1, title: "Total Projects", value: "14", change: "+2 this month", type: "projects" },
  { id: 2, title: "Total Earnings", value: "$18,450", change: "+12.5% vs last mo", type: "earnings" },
  { id: 3, title: "Tasks Due", value: "5", change: "2 due today", type: "tasks" },
  { id: 4, title: "Active Clients", value: "6", change: "100% on-time", type: "clients" },
];

export const monthlyEarnings = [
  { month: "Jun", earnings: 2400 },
  { month: "Jul", earnings: 3100 },
  { month: "Aug", earnings: 2800 },
  { month: "Sep", earnings: 3900 },
  { month: "Oct", earnings: 3450 },
  { month: "Nov", earnings: 4800 },
];

export const taskDistribution = [
  { name: "Frontend Dev", value: 45, color: "#4f46e5" },
  { name: "UI/UX Design", value: 25, color: "#06b6d4" },
  { name: "GHL Funnels", value: 20, color: "#10b981" },
  { name: "Client Calls", value: 10, color: "#f59e0b" },
];

export const initialProjects = [
  { id: 101, name: "E-Commerce Storefront Redesign", client: "Nova Apparel", status: "In Progress", deadline: "2026-11-24", budget: "$3,200" },
  { id: 102, name: "SaaS Landing Page & Funnel", client: "CloudSync AI", status: "Review", deadline: "2026-11-19", budget: "$1,850" },
  { id: 103, name: "Real Estate CRM Snapshot", client: "Apex Properties", status: "Completed", deadline: "2026-11-10", budget: "$2,500" },
  { id: 104, name: "Clinic Booking Web App", client: "Next Aesthetics", status: "In Progress", deadline: "2026-12-02", budget: "$4,100" },
  { id: 105, name: "Portfolio & Blog Migration", client: "Studio K", status: "Completed", deadline: "2026-11-04", budget: "$1,200" },
];

export const recentActivities = [
  { id: 1, action: "Invoice #1042 paid ($1,850)", project: "CloudSync AI", time: "12 mins ago", unread: true },
  { id: 2, action: "New design feedback submitted", project: "Nova Apparel", time: "2 hours ago", unread: true },
  { id: 3, action: "Milestone 2 approved by client", project: "Next Aesthetics", time: "Yesterday", unread: false },
  { id: 4, action: "Contract signed for Q4 retainer", project: "Apex Properties", time: "3 days ago", unread: false },
];