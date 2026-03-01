import React, { useState } from 'react';
import {
  SaveIcon,
  UserIcon,
  BellIcon,
  ShieldIcon,
  GlobeIcon,
  PaletteIcon,
  CheckCircleIcon,
  KeyIcon,
  MailIcon,
  BuildingIcon,
  PhoneIcon,
  MapPinIcon } from
'lucide-react';
type Tab = 'general' | 'account' | 'notifications' | 'security';
export function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('general');
  const [saved, setSaved] = useState(false);
  const [general, setGeneral] = useState({
    universityName: 'State University',
    tagline: 'Excellence in Education',
    email: 'info@university.edu',
    phone: '+1 (555) 123-4567',
    address: '123 University Ave, Academic City, AC 12345',
    website: 'https://university.edu',
    timezone: 'UTC-5',
    language: 'English'
  });
  const [account, setAccount] = useState({
    name: 'Admin User',
    email: 'admin@university.edu',
    role: 'Super Administrator',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notifications, setNotifications] = useState({
    newApplications: true,
    applicationUpdates: true,
    newStudents: false,
    systemAlerts: true,
    weeklyReport: true,
    emailDigest: false
  });
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  const tabs: {
    id: Tab;
    label: string;
    icon: React.ElementType;
  }[] = [
  {
    id: 'general',
    label: 'General',
    icon: GlobeIcon
  },
  {
    id: 'account',
    label: 'Account',
    icon: UserIcon
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: BellIcon
  },
  {
    id: 'security',
    label: 'Security',
    icon: ShieldIcon
  }];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Manage your university portal configuration
          </p>
        </div>
        <button
          onClick={handleSave}
          className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all shadow-sm ${saved ? 'bg-emerald-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>

          {saved ?
          <>
              <CheckCircleIcon size={16} />
              Saved!
            </> :

          <>
              <SaveIcon size={16} />
              Save Changes
            </>
          }
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar tabs */}
        <div className="lg:w-56 flex-shrink-0">
          <nav className="bg-white rounded-xl border border-slate-200 p-2 space-y-0.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>

                  <Icon size={16} className="flex-shrink-0" />
                  {tab.label}
                </button>);

            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* General */}
          {activeTab === 'general' &&
          <div className="bg-white rounded-xl border border-slate-200">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="text-base font-semibold text-slate-900">
                  General Settings
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Basic university information and configuration
                </p>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      University Name
                    </label>
                    <div className="relative">
                      <BuildingIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={15} />

                      <input
                      type="text"
                      value={general.universityName}
                      onChange={(e) =>
                      setGeneral((p) => ({
                        ...p,
                        universityName: e.target.value
                      }))
                      }
                      className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Tagline
                    </label>
                    <input
                    type="text"
                    value={general.tagline}
                    onChange={(e) =>
                    setGeneral((p) => ({
                      ...p,
                      tagline: e.target.value
                    }))
                    }
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Contact Email
                    </label>
                    <div className="relative">
                      <MailIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={15} />

                      <input
                      type="email"
                      value={general.email}
                      onChange={(e) =>
                      setGeneral((p) => ({
                        ...p,
                        email: e.target.value
                      }))
                      }
                      className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <PhoneIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={15} />

                      <input
                      type="tel"
                      value={general.phone}
                      onChange={(e) =>
                      setGeneral((p) => ({
                        ...p,
                        phone: e.target.value
                      }))
                      }
                      className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Address
                    </label>
                    <div className="relative">
                      <MapPinIcon
                      className="absolute left-3 top-3 text-slate-400"
                      size={15} />

                      <input
                      type="text"
                      value={general.address}
                      onChange={(e) =>
                      setGeneral((p) => ({
                        ...p,
                        address: e.target.value
                      }))
                      }
                      className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Timezone
                    </label>
                    <select
                    value={general.timezone}
                    onChange={(e) =>
                    setGeneral((p) => ({
                      ...p,
                      timezone: e.target.value
                    }))
                    }
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">

                      <option>UTC-5</option>
                      <option>UTC-4</option>
                      <option>UTC+0</option>
                      <option>UTC+1</option>
                      <option>UTC+5:30</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Language
                    </label>
                    <select
                    value={general.language}
                    onChange={(e) =>
                    setGeneral((p) => ({
                      ...p,
                      language: e.target.value
                    }))
                    }
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">

                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                      <option>Arabic</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          }

          {/* Account */}
          {activeTab === 'account' &&
          <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-100">
                  <h2 className="text-base font-semibold text-slate-900">
                    Profile Information
                  </h2>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">AD</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {account.name}
                      </p>
                      <p className="text-xs text-slate-500">{account.role}</p>
                      <button className="mt-1.5 text-xs text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                        Change avatar
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                      type="text"
                      value={account.name}
                      onChange={(e) =>
                      setAccount((p) => ({
                        ...p,
                        name: e.target.value
                      }))
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                      type="email"
                      value={account.email}
                      onChange={(e) =>
                      setAccount((p) => ({
                        ...p,
                        email: e.target.value
                      }))
                      }
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-100">
                  <h2 className="text-base font-semibold text-slate-900">
                    Change Password
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {[
                {
                  label: 'Current Password',
                  key: 'currentPassword'
                },
                {
                  label: 'New Password',
                  key: 'newPassword'
                },
                {
                  label: 'Confirm New Password',
                  key: 'confirmPassword'
                }].
                map((field) =>
                <div key={field.key}>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {field.label}
                      </label>
                      <div className="relative">
                        <KeyIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={15} />

                        <input
                      type="password"
                      placeholder="••••••••"
                      value={account[field.key as keyof typeof account]}
                      onChange={(e) =>
                      setAccount((p) => ({
                        ...p,
                        [field.key]: e.target.value
                      }))
                      }
                      className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                      </div>
                    </div>
                )}
                </div>
              </div>
            </div>
          }

          {/* Notifications */}
          {activeTab === 'notifications' &&
          <div className="bg-white rounded-xl border border-slate-200">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="text-base font-semibold text-slate-900">
                  Notification Preferences
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Choose what you want to be notified about
                </p>
              </div>
              <div className="divide-y divide-slate-50">
                {[
              {
                key: 'newApplications',
                label: 'New Applications',
                desc: 'Get notified when a new application is submitted'
              },
              {
                key: 'applicationUpdates',
                label: 'Application Updates',
                desc: 'Notifications when application status changes'
              },
              {
                key: 'newStudents',
                label: 'New Student Enrollments',
                desc: 'Alert when a new student is enrolled'
              },
              {
                key: 'systemAlerts',
                label: 'System Alerts',
                desc: 'Important system notifications and warnings'
              },
              {
                key: 'weeklyReport',
                label: 'Weekly Summary Report',
                desc: 'Receive a weekly digest of activity'
              },
              {
                key: 'emailDigest',
                label: 'Email Digest',
                desc: 'Daily email summary of all activities'
              }].
              map((item) =>
              <div
                key={item.key}
                className="flex items-center justify-between px-6 py-4">

                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <button
                  onClick={() =>
                  setNotifications((p) => ({
                    ...p,
                    [item.key]: !p[item.key as keyof typeof p]
                  }))
                  }
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${notifications[item.key as keyof typeof notifications] ? 'bg-indigo-600' : 'bg-slate-200'}`}>

                      <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${notifications[item.key as keyof typeof notifications] ? 'translate-x-4.5' : 'translate-x-0.5'}`} />

                    </button>
                  </div>
              )}
              </div>
            </div>
          }

          {/* Security */}
          {activeTab === 'security' &&
          <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-100">
                  <h2 className="text-base font-semibold text-slate-900">
                    Security Settings
                  </h2>
                </div>
                <div className="divide-y divide-slate-50">
                  <div className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Two-Factor Authentication
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors">
                      Enable
                    </button>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Active Sessions
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Manage devices where you're logged in
                      </p>
                    </div>
                    <button className="text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors">
                      View All
                    </button>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Login History
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Review recent login activity
                      </p>
                    </div>
                    <button className="text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors">
                      View Log
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl border border-red-200 p-5">
                <h3 className="text-sm font-semibold text-red-800 mb-1">
                  Danger Zone
                </h3>
                <p className="text-xs text-red-600 mb-3">
                  These actions are irreversible. Please proceed with caution.
                </p>
                <button className="text-xs font-semibold text-red-700 border border-red-300 bg-white hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                  Delete Admin Account
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>);

}