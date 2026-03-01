import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCapIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  AlertCircleIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon
} from 'lucide-react';

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
    if (email === 'admin@gbaast.edu' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#003875] to-[#004A99]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8102E]/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#002B5B]/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#C8102E]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-white/10 rounded-xl rotate-12 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-[#C8102E]/20 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/5 rounded-lg rotate-45 animate-float animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Branding & Info */}
            <div className="text-white space-y-8 animate-fade-in-left">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C8102E] to-[#A00E26] rounded-2xl flex items-center justify-center shadow-xl transform hover:rotate-12 transition-transform">
                  <GraduationCapIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">GBAAST</h1>
                  <p className="text-white/70">Administration Portal</p>
                </div>
              </div>

              {/* Welcome Text */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <ShieldCheckIcon className="w-4 h-4 text-[#C8102E]" />
                  <span className="text-sm font-medium">Secure Admin Access</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Welcome Back,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-[#FF6B6B]">
                    Administrator
                  </span>
                </h2>
                
                <p className="text-lg text-white/70 leading-relaxed max-w-md">
                  Manage your school's applications, students, news, gallery, and all content from your centralized dashboard.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Active Students', value: '500+' },
                  { label: 'Applications', value: '120+' },
                  { label: 'Programs', value: '12+' },
                  { label: 'Staff Members', value: '50+' }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all hover:scale-105"
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Footer Text */}
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Grace Bilingual Academy. All rights reserved.
              </p>
            </div>

            {/* Right: Login Form */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-white/20">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#002B5B]/5 px-4 py-2 rounded-full mb-4">
                    <SparklesIcon className="w-4 h-4 text-[#C8102E]" />
                    <span className="text-sm font-semibold text-[#002B5B]">Admin Dashboard</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-2">
                    Sign In to Continue
                  </h3>
                  <p className="text-gray-600">
                    Enter your credentials to access the admin panel
                  </p>
                </div>

                {/* Demo Credentials */}
                <div className="mb-6 p-4 bg-gradient-to-r from-[#C8102E]/10 to-[#002B5B]/10 rounded-xl border border-[#C8102E]/20">
                  <p className="text-[#002B5B] text-xs font-bold mb-1 flex items-center gap-2">
                    <ShieldCheckIcon className="w-3 h-3" />
                    Demo Credentials
                  </p>
                  <p className="text-[#002B5B]/70 text-xs font-mono">
                    admin@gbaast.edu / admin123
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error Alert */}
                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-shake">
                      <AlertCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                  )}

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#002B5B]">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MailIcon className="w-5 h-5 text-gray-400 group-focus-within:text-[#C8102E] transition-colors" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@gbaast.edu"
                        required
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-[#002B5B] placeholder-gray-400 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#C8102E] transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-semibold text-[#002B5B]">
                        Password
                      </label>
                      <button
                        type="button"
                        className="text-xs text-[#C8102E] hover:text-[#A00E26] font-semibold transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <LockIcon className="w-5 h-5 text-gray-400 group-focus-within:text-[#C8102E] transition-colors" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl text-[#002B5B] placeholder-gray-400 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#C8102E] transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#002B5B] transition-colors"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center gap-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#C8102E] focus:ring-[#C8102E] cursor-pointer"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                      Keep me signed in for 30 days
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-[#C8102E] to-[#A00E26] hover:from-[#A00E26] hover:to-[#C8102E] disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign In to Dashboard
                          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-xs text-gray-500">
                    🔒 Protected by GBAAST security policy.{' '}
                    <a href="#" className="text-[#C8102E] hover:underline font-semibold">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}