import React, { useState, Component } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboardIcon,
  UsersIcon,
  FileTextIcon,
  BookOpenIcon,
  NewspaperIcon,
  PenSquareIcon,
  ImageIcon,
  StarIcon,
  SettingsIcon,
  LogOutIcon,
  GraduationCapIcon,
  BellIcon,
  MenuIcon,
  XIcon } from
'lucide-react';
interface AdminLayoutProps {
  children: React.ReactNode;
}
interface SidebarItem {
  label: string;
  href: string;
  icon: ComponentType<{
    className?: string;
  }>;
  external?: boolean;
}
interface SidebarSection {
  title: string;
  items: SidebarItem[];
}
const sidebarSections: SidebarSection[] = [
{
  title: 'Overview',
  items: [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboardIcon
  }]

},
{
  title: 'Academic',
  items: [
  {
    label: 'Students',
    href: '/admin/students',
    icon: UsersIcon
  },
  {
    label: 'Applications',
    href: '/admin/applications',
    icon: FileTextIcon
  },
  {
    label: 'Programs',
    href: '/programs',
    icon: BookOpenIcon,
    external: true
  }]

},
{
  title: 'Content',
  items: [
  {
    label: 'News',
    href: '/admin/news',
    icon: NewspaperIcon
  },
  {
    label: 'Blog',
    href: '/admin/blog',
    icon: PenSquareIcon
  },
  {
    label: 'Gallery',
    href: '/admin/gallery',
    icon: ImageIcon
  },
  {
    label: 'Spotlight',
    href: '/admin/spotlight',
    icon: StarIcon
  }]

},
{
  title: 'System',
  items: [
  {
    label: 'Settings',
    href: '/admin/settings',
    icon: SettingsIcon
  }]

}];

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isActive = (href: string) => location.pathname === href;
  const getPageTitle = () => {
    const allItems = sidebarSections.flatMap((s) => s.items);
    const match = allItems.find((item) => item.href === location.pathname);
    return match?.label ?? 'Admin';
  };
  const handleLogout = () => {
    navigate('/admin');
  };
  const SidebarContent = () =>
  <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-200">
        <div className="w-7 h-7 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0">
          <GraduationCapIcon className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            UniPortal
          </p>
          <p className="text-xs text-gray-400 leading-tight">Admin Panel</p>
        </div>
      </div>

      {/* Nav Sections */}
      <nav className="flex-1 overflow-y-auto py-3">
        {sidebarSections.map((section) =>
      <div key={section.title} className="mb-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-2 mt-2">
              {section.title}
            </p>
            {section.items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 mx-2 px-3 py-2.5 rounded-md text-sm transition-colors ${active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>

                  <Icon
                className={`w-4 h-4 flex-shrink-0 ${active ? 'text-gray-600' : 'text-gray-400'}`} />

                  {item.label}
                  {item.external &&
              <span className="ml-auto text-xs text-gray-300">↗</span>
              }
                </Link>);

        })}
          </div>
      )}

        {/* Logout */}
        <div className="mt-2 px-2">
          <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">

            <LogOutIcon className="w-4 h-4 text-gray-400" />
            Logout
          </button>
        </div>
      </nav>

      {/* Admin User Info */}
      <div className="border-t border-gray-200 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-semibold text-gray-600">AD</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Admin User
            </p>
            <p className="text-xs text-gray-400 truncate">
              Super Administrator
            </p>
          </div>
        </div>
      </div>
    </div>;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen &&
      <div className="md:hidden fixed inset-0 z-50 flex">
          <div
          className="fixed inset-0 bg-black/20"
          onClick={() => setSidebarOpen(false)} />

          <aside className="relative flex flex-col w-64 bg-white border-r border-gray-200 z-10">
            <SidebarContent />
          </aside>
        </div>
      }

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md"
              onClick={() => setSidebarOpen(true)}>

              <MenuIcon className="w-5 h-5" />
            </button>
            <h1 className="text-base font-semibold text-gray-900">
              {getPageTitle()}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full" />
            </button>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-600">AD</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>);

}