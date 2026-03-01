import React, { useState } from 'react';
import {
  SearchIcon,
  FilterIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  AlertCircleIcon,
  EyeIcon,
  ChevronDownIcon,
  DownloadIcon,
  XIcon } from
'lucide-react';
type AppStatus = 'pending' | 'approved' | 'rejected' | 'under_review';
interface Application {
  id: string;
  name: string;
  email: string;
  program: string;
  date: string;
  status: AppStatus;
  gpa: string;
  nationality: string;
}
const initialApplications: Application[] = [
{
  id: 'APP-001',
  name: 'Sarah Johnson',
  email: 'sarah.j@email.com',
  program: 'Computer Science',
  date: 'Feb 28, 2026',
  status: 'pending',
  gpa: '3.8',
  nationality: 'USA'
},
{
  id: 'APP-002',
  name: 'Michael Chen',
  email: 'michael.c@email.com',
  program: 'Business Administration',
  date: 'Feb 27, 2026',
  status: 'approved',
  gpa: '3.9',
  nationality: 'Canada'
},
{
  id: 'APP-003',
  name: 'Amara Osei',
  email: 'amara.o@email.com',
  program: 'Medicine',
  date: 'Feb 27, 2026',
  status: 'under_review',
  gpa: '4.0',
  nationality: 'Ghana'
},
{
  id: 'APP-004',
  name: 'Lucas Ferreira',
  email: 'lucas.f@email.com',
  program: 'Engineering',
  date: 'Feb 26, 2026',
  status: 'approved',
  gpa: '3.7',
  nationality: 'Brazil'
},
{
  id: 'APP-005',
  name: 'Priya Sharma',
  email: 'priya.s@email.com',
  program: 'Law',
  date: 'Feb 26, 2026',
  status: 'rejected',
  gpa: '3.5',
  nationality: 'India'
},
{
  id: 'APP-006',
  name: 'Emma Wilson',
  email: 'emma.w@email.com',
  program: 'Psychology',
  date: 'Feb 25, 2026',
  status: 'pending',
  gpa: '3.6',
  nationality: 'UK'
},
{
  id: 'APP-007',
  name: 'James Okafor',
  email: 'james.o@email.com',
  program: 'Economics',
  date: 'Feb 25, 2026',
  status: 'under_review',
  gpa: '3.8',
  nationality: 'Nigeria'
},
{
  id: 'APP-008',
  name: 'Sofia Martinez',
  email: 'sofia.m@email.com',
  program: 'Architecture',
  date: 'Feb 24, 2026',
  status: 'approved',
  gpa: '3.9',
  nationality: 'Spain'
}];

const statusConfig: Record<
  AppStatus,
  {
    label: string;
    classes: string;
    icon: React.ElementType;
  }> =
{
  pending: {
    label: 'Pending',
    classes: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: ClockIcon
  },
  approved: {
    label: 'Approved',
    classes: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: CheckCircleIcon
  },
  rejected: {
    label: 'Rejected',
    classes: 'bg-red-50 text-red-700 border-red-200',
    icon: XCircleIcon
  },
  under_review: {
    label: 'Under Review',
    classes: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: AlertCircleIcon
  }
};
function StatusBadge({ status }: {status: AppStatus;}) {
  const s = statusConfig[status];
  const Icon = s.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${s.classes}`}>

      <Icon size={11} />
      {s.label}
    </span>);

}
export function AdminApplicationsPage() {
  const [applications, setApplications] =
  useState<Application[]>(initialApplications);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<AppStatus | 'all'>('all');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const filtered = applications.filter((app) => {
    const matchSearch =
    app.name.toLowerCase().includes(search.toLowerCase()) ||
    app.email.toLowerCase().includes(search.toLowerCase()) ||
    app.program.toLowerCase().includes(search.toLowerCase()) ||
    app.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchSearch && matchStatus;
  });
  const updateStatus = (id: string, status: AppStatus) => {
    setApplications((prev) =>
    prev.map((a) =>
    a.id === id ?
    {
      ...a,
      status
    } :
    a
    )
    );
    if (selectedApp?.id === id)
    setSelectedApp((prev) =>
    prev ?
    {
      ...prev,
      status
    } :
    null
    );
  };
  const counts = {
    all: applications.length,
    pending: applications.filter((a) => a.status === 'pending').length,
    under_review: applications.filter((a) => a.status === 'under_review').
    length,
    approved: applications.filter((a) => a.status === 'approved').length,
    rejected: applications.filter((a) => a.status === 'rejected').length
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Applications</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {applications.length} total applications
          </p>
        </div>
        <button className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
          <DownloadIcon size={15} />
          Export CSV
        </button>
      </div>

      {/* Status tabs */}
      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 w-fit flex-wrap">
        {(
        ['all', 'pending', 'under_review', 'approved', 'rejected'] as const).
        map((s) =>
        <button
          key={s}
          onClick={() => setStatusFilter(s)}
          className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${statusFilter === s ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>

            {s === 'all' ?
          'All' :
          s === 'under_review' ?
          'Under Review' :
          s.charAt(0).toUpperCase() + s.slice(1)}
            <span
            className={`ml-1.5 text-xs ${statusFilter === s ? 'text-indigo-200' : 'text-slate-400'}`}>

              {counts[s]}
            </span>
          </button>
        )}
      </div>

      {/* Table card */}
      <div className="bg-white rounded-xl border border-slate-200">
        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <div className="relative flex-1 max-w-sm">
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={15} />

            <input
              type="text"
              placeholder="Search by name, email, program..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

          </div>
          <button className="inline-flex items-center gap-2 text-sm text-slate-600 border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50 transition-colors">
            <FilterIcon size={14} />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                  Applicant
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">
                  Program
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">
                  GPA
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">
                  Date
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                  Status
                </th>
                <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.length === 0 ?
              <tr>
                  <td
                  colSpan={6}
                  className="text-center py-12 text-slate-400 text-sm">

                    No applications found
                  </td>
                </tr> :

              filtered.map((app) =>
              <tr
                key={app.id}
                className="hover:bg-slate-50/50 transition-colors">

                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-indigo-700 text-xs font-semibold">
                            {app.name.
                        split(' ').
                        map((n) => n[0]).
                        join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {app.name}
                          </p>
                          <p className="text-xs text-slate-400">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <span className="text-sm text-slate-600">
                        {app.program}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-sm font-medium text-slate-700">
                        {app.gpa}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell">
                      <span className="text-sm text-slate-500">{app.date}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <StatusBadge status={app.status} />
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                    onClick={() => setSelectedApp(app)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1.5 rounded-lg transition-colors">

                        <EyeIcon size={12} />
                        Review
                      </button>
                    </td>
                  </tr>
              )
              }
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Showing {filtered.length} of {applications.length} results
          </p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 text-xs text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-1.5 text-xs text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Detail modal */}
      {selectedApp &&
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-base font-semibold text-slate-900">
                Application Details
              </h3>
              <button
              onClick={() => setSelectedApp(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">

                <XIcon size={16} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-700 text-lg font-bold">
                    {selectedApp.name.
                  split(' ').
                  map((n) => n[0]).
                  join('')}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {selectedApp.name}
                  </p>
                  <p className="text-sm text-slate-500">{selectedApp.email}</p>
                </div>
                <div className="ml-auto">
                  <StatusBadge status={selectedApp.status} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
              {
                label: 'Application ID',
                value: selectedApp.id
              },
              {
                label: 'Program',
                value: selectedApp.program
              },
              {
                label: 'GPA',
                value: selectedApp.gpa
              },
              {
                label: 'Nationality',
                value: selectedApp.nationality
              },
              {
                label: 'Applied On',
                value: selectedApp.date
              }].
              map((field) =>
              <div key={field.label} className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-400 font-medium mb-0.5">
                      {field.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {field.value}
                    </p>
                  </div>
              )}
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Update Status
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                [
                'approved',
                'under_review',
                'pending',
                'rejected'] as
                AppStatus[]).
                map((s) =>
                <button
                  key={s}
                  onClick={() => updateStatus(selectedApp.id, s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedApp.status === s ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}>

                      {s === 'under_review' ?
                  'Under Review' :
                  s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                )}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 px-6 py-4 border-t border-slate-100">
              <button
              onClick={() => setSelectedApp(null)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">

                Close
              </button>
            </div>
          </div>
        </div>
      }
    </div>);

}