import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer } from
'recharts';
import {
  UsersIcon,
  FileTextIcon,
  CheckCircleIcon,
  BookOpenIcon,
  DollarSignIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ClockIcon,
  ArrowRightIcon,
  UserPlusIcon,
  NewspaperIcon,
  LayoutDashboardIcon,
  ActivityIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
// ─── Sample Data ────────────────────────────────────────────────────────────
const applicationsTrend = [
{
  month: 'Aug',
  applications: 45
},
{
  month: 'Sep',
  applications: 78
},
{
  month: 'Oct',
  applications: 92
},
{
  month: 'Nov',
  applications: 65
},
{
  month: 'Dec',
  applications: 110
},
{
  month: 'Jan',
  applications: 134
}];

const statusData = [
{
  name: 'Approved',
  value: 234,
  color: '#374151'
},
{
  name: 'Pending',
  value: 89,
  color: '#9ca3af'
},
{
  name: 'Under Review',
  value: 56,
  color: '#6b7280'
},
{
  name: 'Rejected',
  value: 23,
  color: '#d1d5db'
}];

const programEnrollment = [
{
  program: 'CS',
  students: 245
},
{
  program: 'Business',
  students: 189
},
{
  program: 'Engineering',
  students: 167
},
{
  program: 'Medicine',
  students: 134
},
{
  program: 'Law',
  students: 98
}];

const recentApplications = [
{
  id: 1,
  name: 'Sarah Johnson',
  program: 'Computer Science',
  date: 'Jan 28, 2026',
  status: 'pending'
},
{
  id: 2,
  name: 'Michael Chen',
  program: 'Business Admin',
  date: 'Jan 27, 2026',
  status: 'approved'
},
{
  id: 3,
  name: 'Emily Rodriguez',
  program: 'Engineering',
  date: 'Jan 26, 2026',
  status: 'under_review'
},
{
  id: 4,
  name: 'James Wilson',
  program: 'Medicine',
  date: 'Jan 25, 2026',
  status: 'rejected'
},
{
  id: 5,
  name: 'Aisha Patel',
  program: 'Law',
  date: 'Jan 24, 2026',
  status: 'approved'
},
{
  id: 6,
  name: 'David Kim',
  program: 'Computer Science',
  date: 'Jan 23, 2026',
  status: 'pending'
}];

const recentActivity = [
{
  id: 1,
  action: 'New application submitted',
  user: 'Sarah Johnson',
  time: '2 min ago',
  type: 'application'
},
{
  id: 2,
  action: 'Application approved',
  user: 'Michael Chen',
  time: '1 hour ago',
  type: 'approval'
},
{
  id: 3,
  action: 'News post published',
  user: 'Admin',
  time: '3 hours ago',
  type: 'content'
},
{
  id: 4,
  action: 'Student profile updated',
  user: 'Emily Rodriguez',
  time: '5 hours ago',
  type: 'update'
},
{
  id: 5,
  action: 'New scholarship added',
  user: 'Admin',
  time: '1 day ago',
  type: 'content'
},
{
  id: 6,
  action: 'Gallery updated',
  user: 'Admin',
  time: '2 days ago',
  type: 'content'
}];

// ─── Helpers ─────────────────────────────────────────────────────────────────
type StatusKey = 'pending' | 'approved' | 'rejected' | 'under_review';
const statusConfig: Record<
  StatusKey,
  {
    label: string;
    className: string;
  }> =
{
  pending: {
    label: 'Pending',
    className: 'bg-amber-50 text-amber-700 border border-amber-200'
  },
  approved: {
    label: 'Approved',
    className: 'bg-green-50 text-green-700 border border-green-200'
  },
  rejected: {
    label: 'Rejected',
    className: 'bg-red-50 text-red-700 border border-red-200'
  },
  under_review: {
    label: 'Under Review',
    className: 'bg-blue-50 text-blue-700 border border-blue-200'
  }
};
const activityTypeConfig: Record<
  string,
  {
    dot: string;
  }> =
{
  application: {
    dot: 'bg-blue-400'
  },
  approval: {
    dot: 'bg-green-400'
  },
  content: {
    dot: 'bg-gray-400'
  },
  update: {
    dot: 'bg-amber-400'
  }
};
// ─── Sub-components ───────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: ComponentType<{
    className?: string;
  }>;
  iconBg: string;
  iconColor: string;
}
function StatCard({
  label,
  value,
  trend,
  trendUp,
  icon: Icon,
  iconBg,
  iconColor
}: StatCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>

          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <span
          className={`flex items-center gap-1 text-xs font-medium ${trendUp ? 'text-green-600' : 'text-red-500'}`}>

          {trendUp ?
          <TrendingUpIcon className="w-3.5 h-3.5" /> :

          <TrendingDownIcon className="w-3.5 h-3.5" />
          }
          {trend}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>);

}
// ─── Main Component ───────────────────────────────────────────────────────────
export function AdminDashboardPage() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-sm text-gray-500 mt-0.5">Welcome back, Admin</p>
          </div>
          <p className="text-sm text-gray-400 font-mono">{today}</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard
            label="Total Students"
            value="1,284"
            trend="+8% this month"
            trendUp={true}
            icon={UsersIcon}
            iconBg="bg-blue-50"
            iconColor="text-blue-600" />

          <StatCard
            label="Pending Applications"
            value="89"
            trend="+12 this week"
            trendUp={true}
            icon={ClockIcon}
            iconBg="bg-amber-50"
            iconColor="text-amber-600" />

          <StatCard
            label="Approved This Month"
            value="47"
            trend="+5% vs last"
            trendUp={true}
            icon={CheckCircleIcon}
            iconBg="bg-green-50"
            iconColor="text-green-600" />

          <StatCard
            label="Active Programs"
            value="24"
            trend="+2 new"
            trendUp={true}
            icon={BookOpenIcon}
            iconBg="bg-purple-50"
            iconColor="text-purple-600" />

          <StatCard
            label="Total Revenue"
            value="$284k"
            trend="+18% YoY"
            trendUp={true}
            icon={DollarSignIcon}
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600" />

        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Applications Trend */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Applications Trend
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Last 6 months</p>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart
                data={applicationsTrend}
                margin={{
                  top: 4,
                  right: 4,
                  left: -20,
                  bottom: 0
                }}>

                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6b7280" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis
                  dataKey="month"
                  tick={{
                    fontSize: 11,
                    fill: '#9ca3af'
                  }}
                  axisLine={false}
                  tickLine={false} />

                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: '#9ca3af'
                  }}
                  axisLine={false}
                  tickLine={false} />

                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }} />

                <Area
                  type="monotone"
                  dataKey="applications"
                  stroke="#374151"
                  strokeWidth={2}
                  fill="url(#areaGrad)" />

              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Application Status Donut */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Application Status
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Current breakdown</p>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={3}
                  dataKey="value">

                  {statusData.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={entry.color} />
                  )}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }} />

                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{
                    fontSize: '11px',
                    color: '#6b7280'
                  }} />

              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Enrollment by Program */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Enrollment by Program
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Top 5 programs</p>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart
                data={programEnrollment}
                margin={{
                  top: 4,
                  right: 4,
                  left: -20,
                  bottom: 0
                }}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f3f4f6"
                  vertical={false} />

                <XAxis
                  dataKey="program"
                  tick={{
                    fontSize: 11,
                    fill: '#9ca3af'
                  }}
                  axisLine={false}
                  tickLine={false} />

                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: '#9ca3af'
                  }}
                  axisLine={false}
                  tickLine={false} />

                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }} />

                <Bar dataKey="students" fill="#6b7280" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section: Table + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Recent Applications Table */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">
                Recent Applications
              </h3>
              <Link
                to="/admin/applications"
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors">

                View all <ArrowRightIcon className="w-3 h-3" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                      Name
                    </th>
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                      Program
                    </th>
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3 hidden sm:table-cell">
                      Date
                    </th>
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                      Status
                    </th>
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentApplications.map((app) => {
                    const status = statusConfig[app.status as StatusKey];
                    return (
                      <tr
                        key={app.id}
                        className="hover:bg-gray-50 transition-colors">

                        <td className="px-6 py-3.5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium text-gray-500">
                                {app.name.
                                split(' ').
                                map((n) => n[0]).
                                join('')}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                              {app.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-3.5 text-sm text-gray-500">
                          {app.program}
                        </td>
                        <td className="px-6 py-3.5 text-sm text-gray-400 hidden sm:table-cell font-mono text-xs">
                          {app.date}
                        </td>
                        <td className="px-6 py-3.5">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${status.className}`}>

                            {status.label}
                          </span>
                        </td>
                        <td className="px-6 py-3.5">
                          <Link
                            to="/admin/applications"
                            className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors">

                            Review
                          </Link>
                        </td>
                      </tr>);

                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">
                Recent Activity
              </h3>
              <ActivityIcon className="w-4 h-4 text-gray-300" />
            </div>
            <div className="px-6 py-4 space-y-4">
              {recentActivity.map((item) => {
                const typeConf = activityTypeConfig[item.type] ?? {
                  dot: 'bg-gray-400'
                };
                return (
                  <div key={item.id} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${typeConf.dot}`} />

                      {item.id !== recentActivity.length &&
                      <div className="w-px flex-1 bg-gray-100 mt-1" />
                      }
                    </div>
                    <div className="pb-4 min-w-0">
                      <p className="text-sm text-gray-700 leading-snug">
                        {item.action}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        <span className="font-medium text-gray-500">
                          {item.user}
                        </span>
                        {' · '}
                        <span className="font-mono">{item.time}</span>
                      </p>
                    </div>
                  </div>);

              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              to="/admin/applications"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 hover:border-gray-300 transition-colors group">

              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileTextIcon className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Review Applications
                </p>
                <p className="text-xs text-gray-400">89 pending</p>
              </div>
            </Link>

            <Link
              to="/admin/students"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 hover:border-gray-300 transition-colors group">

              <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserPlusIcon className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Add Student</p>
                <p className="text-xs text-gray-400">Manage roster</p>
              </div>
            </Link>

            <Link
              to="/admin/news"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 hover:border-gray-300 transition-colors group">

              <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <NewspaperIcon className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Post News</p>
                <p className="text-xs text-gray-400">Publish update</p>
              </div>
            </Link>

            <Link
              to="/programs"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 hover:border-gray-300 transition-colors group">

              <div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <LayoutDashboardIcon className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Manage Programs
                </p>
                <p className="text-xs text-gray-400">24 active</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>);

}