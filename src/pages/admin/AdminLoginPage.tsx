import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCapIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  AlertCircleIcon } from
'lucide-react';
export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    if (email === 'admin@university.edu' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen w-full bg-slate-950 flex">
      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 flex-col justify-between p-12 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <GraduationCapIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight">
              University
            </p>
            <p className="text-indigo-300 text-sm leading-tight">
              Admin Portal
            </p>
          </div>
        </div>

        {/* Center content */}
        <div className="relative">
          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Welcome back to
            <br />
            <span className="text-indigo-400">Admin Portal</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            Manage applications, students, news, and all university content from
            one centralized dashboard.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">2,400+</p>
              <p className="text-slate-400 text-sm mt-0.5">Active Students</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">180+</p>
              <p className="text-slate-400 text-sm mt-0.5">Applications</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-slate-400 text-sm mt-0.5">Programs</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} University. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right panel - login form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 sm:p-10 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
              <GraduationCapIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-base leading-tight">
                University Admin
              </p>
              <p className="text-slate-500 text-xs leading-tight">
                Management Portal
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Sign in to your account
            </h2>
            <p className="text-slate-500 mt-1.5 text-sm">
              Enter your credentials to access the admin panel
            </p>
          </div>

          {/* Demo credentials hint */}
          <div className="mb-6 p-3.5 bg-indigo-50 rounded-lg border border-indigo-100">
            <p className="text-indigo-700 text-xs font-medium mb-1">
              Demo Credentials
            </p>
            <p className="text-indigo-600 text-xs font-mono">
              admin@university.edu / admin123
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error */}
            {error &&
            <div className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircleIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            }

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5">

                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <MailIcon className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@university.edu"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow" />

              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700">

                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-medium transition-colors">

                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <LockIcon className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-11 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow" />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors">

                  {showPassword ?
                  <EyeOffIcon className="w-4 h-4" /> :

                  <EyeIcon className="w-4 h-4" />
                  }
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />

              <label
                htmlFor="remember"
                className="text-sm text-slate-600 cursor-pointer">

                Remember me for 30 days
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

              {loading ?
              <>
                  <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none">

                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4" />

                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />

                  </svg>
                  Signing in...
                </> :

              'Sign in'
              }
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-slate-400">
            Protected by university security policy.{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>);

}