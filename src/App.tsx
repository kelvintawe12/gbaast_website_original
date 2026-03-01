import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AdminLayout } from './components/admin/AdminLayout';
// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusLifePage } from './pages/CampusLifePage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { NewsArticlePage } from './pages/NewsArticlePage';
import { EventsPage } from './pages/EventsPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { AlumniPage } from './pages/AlumniPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { StudentSpotlightPage } from './pages/StudentSpotlightPage.tsx';
import { StudentSpotlightDetailPage } from './pages/StudentSpotlightDetailPage.tsx';
import { SearchPage } from './pages/SearchPage';
import { ApplyProcessPage } from './pages/ApplyProcessPage';
import { ApplicationDetailPage } from './pages/ApplicationDetailPage';
// Admin Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminBlogPage } from './pages/admin/AdminBlogPage';
import { AdminNewsPage } from './pages/admin/AdminNewsPage';
import { AdminGalleryPage } from './pages/admin/AdminGalleryPage';
import { AdminSpotlightPage } from './pages/admin/AdminSpotlightPage';
import { AdminApplicationsPage } from './pages/admin/AdminApplicationsPage';
import { AdminStudentsPage } from './pages/admin/AdminStudentsPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
export function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Admin Login (No Layout) */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Admin Routes (Wrapped in AdminLayout) */}
        <Route
          path="/admin"
          element={
          <AdminLayout>
              <AdminDashboardPage />
            </AdminLayout>
          } />

        <Route
          path="/admin/blog"
          element={
          <AdminLayout>
              <AdminBlogPage />
            </AdminLayout>
          } />

        <Route
          path="/admin/news"
          element={
          <AdminLayout>
              <AdminNewsPage />
            </AdminLayout>
          } />

        <Route
          path="/admin/gallery"
          element={
          <AdminLayout>
              <AdminGalleryPage />
            </AdminLayout>
          } />

        <Route
          path="/admin/spotlight"
          element={
          <AdminLayout>
              <AdminSpotlightPage />
            </AdminLayout>
          } />

        <Route
          path="/admin/applications"
          element={
          <AdminLayout>
              <AdminApplicationsPage />
            </AdminLayout>
          } />

        <Route
          path="/admin/students"
          element={
          <AdminLayout>
              <AdminStudentsPage />
            </AdminLayout>
          } />

        <Route
          path="/admin/settings"
          element={
          <AdminLayout>
              <AdminSettingsPage />
            </AdminLayout>
          } />


        {/* Fallback for uncreated admin routes */}
        <Route
          path="/admin/*"
          element={
          <AdminLayout>
              <div className="p-8 text-center text-gray-500">
                Page under construction
              </div>
            </AdminLayout>
          } />


        {/* Public Routes (Wrapped in public Layout) */}
        <Route
          path="/"
          element={
          <Layout>
              <HomePage />
            </Layout>
          } />

        <Route
          path="/about"
          element={
          <Layout>
              <AboutPage />
            </Layout>
          } />

        <Route
          path="/programs"
          element={
          <Layout>
              <ProgramsPage />
            </Layout>
          } />

        <Route
          path="/admissions"
          element={
          <Layout>
              <AdmissionsPage />
            </Layout>
          } />

        <Route
          path="/apply"
          element={
          <Layout>
              <ApplicationPage />
            </Layout>
          } />

        <Route
          path="/campus-life"
          element={
          <Layout>
              <CampusLifePage />
            </Layout>
          } />

        <Route
          path="/contact"
          element={
          <Layout>
              <ContactPage />
            </Layout>
          } />

        <Route
          path="/news"
          element={
          <Layout>
              <NewsPage />
            </Layout>
          } />

        <Route
          path="/news/:id"
          element={
          <Layout>
              <NewsArticlePage />
            </Layout>
          } />

        <Route
          path="/events"
          element={
          <Layout>
              <EventsPage />
            </Layout>
          } />

        <Route
          path="/scholarships"
          element={
          <Layout>
              <ScholarshipsPage />
            </Layout>
          } />

        <Route
          path="/apply-process"
          element={
          <Layout>
              <ApplyProcessPage />
            </Layout>
          } />

        <Route
          path="/apply-process/:id"
          element={
          <Layout>
              <ApplicationDetailPage />
            </Layout>
          } />

        <Route
          path="/alumni"
          element={
          <Layout>
              <AlumniPage />
            </Layout>
          } />

        <Route
          path="/privacy"
          element={
          <Layout>
              <PrivacyPolicyPage />
            </Layout>
          } />

        <Route
          path="/terms"
          element={
          <Layout>
              <TermsPage />
            </Layout>
          } />

        <Route
          path="/cookies"
          element={
          <Layout>
              <CookiePolicyPage />
            </Layout>
          } />

        <Route
          path="/gallery"
          element={
          <Layout>
              <GalleryPage />
            </Layout>
          } />

        <Route
          path="/blog"
          element={
          <Layout>
              <BlogPage />
            </Layout>
          } />

        <Route
          path="/student-spotlight"
          element={
          <Layout>
              <StudentSpotlightPage />
            </Layout>
          } />

        <Route
          path="/student-spotlight/:id"
          element={
          <Layout>
              <StudentSpotlightDetailPage />
            </Layout>
          } />

        <Route
          path="/search"
          element={
          <Layout>
              <SearchPage />
            </Layout>
          } />

      </Routes>
    </HashRouter>);

}