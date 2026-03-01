import React, { useState } from 'react';
import {
  SearchIcon,
  PlusIcon,
  EditIcon,
  TrashIcon,
  XIcon,
  UserIcon,
  MailIcon,
  BookOpenIcon,
  CalendarIcon,
  FilterIcon } from
'lucide-react';
interface Student {
  id: string;
  name: string;
  email: string;
  program: string;
  year: string;
  status: 'active' | 'inactive' | 'graduated';
  gpa: string;
  enrolled: string;
}
const initialStudents: Student[] = [
{
  id: 'STU-001',
  name: 'Alice Thompson',
  email: 'alice.t@university.edu',
  program: 'Computer Science',
  year: '3rd Year',
  status: 'active',
  gpa: '3.9',
  enrolled: 'Sep 2023'
},
{
  id: 'STU-002',
  name: 'David Park',
  email: 'david.p@university.edu',
  program: 'Business Admin',
  year: '2nd Year',
  status: 'active',
  gpa: '3.6',
  enrolled: 'Sep 2024'
},
{
  id: 'STU-003',
  name: 'Fatima Al-Hassan',
  email: 'fatima.a@university.edu',
  program: 'Medicine',
  year: '4th Year',
  status: 'active',
  gpa: '4.0',
  enrolled: 'Sep 2022'
},
{
  id: 'STU-004',
  name: 'Carlos Rivera',
  email: 'carlos.r@university.edu',
  program: 'Engineering',
  year: 'Graduate',
  status: 'graduated',
  gpa: '3.8',
  enrolled: 'Sep 2020'
},
{
  id: 'STU-005',
  name: 'Yuki Tanaka',
  email: 'yuki.t@university.edu',
  program: 'Psychology',
  year: '1st Year',
  status: 'active',
  gpa: '3.7',
  enrolled: 'Sep 2025'
},
{
  id: 'STU-006',
  name: 'Omar Khalid',
  email: 'omar.k@university.edu',
  program: 'Law',
  year: '2nd Year',
  status: 'inactive',
  gpa: '3.4',
  enrolled: 'Sep 2024'
}];

const statusConfig = {
  active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  inactive: 'bg-slate-100 text-slate-600 border-slate-200',
  graduated: 'bg-blue-50 text-blue-700 border-blue-200'
};
export function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    program: '',
    year: '',
    gpa: ''
  });
  const filtered = students.filter(
    (s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase()) ||
    s.program.toLowerCase().includes(search.toLowerCase())
  );
  const openAdd = () => {
    setEditStudent(null);
    setForm({
      name: '',
      email: '',
      program: '',
      year: '',
      gpa: ''
    });
    setShowModal(true);
  };
  const openEdit = (student: Student) => {
    setEditStudent(student);
    setForm({
      name: student.name,
      email: student.email,
      program: student.program,
      year: student.year,
      gpa: student.gpa
    });
    setShowModal(true);
  };
  const handleSave = () => {
    if (!form.name || !form.email || !form.program) return;
    if (editStudent) {
      setStudents((prev) =>
      prev.map((s) =>
      s.id === editStudent.id ?
      {
        ...s,
        ...form
      } :
      s
      )
      );
    } else {
      const newStudent: Student = {
        id: `STU-${String(students.length + 1).padStart(3, '0')}`,
        ...form,
        status: 'active',
        enrolled: new Date().toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric'
        })
      };
      setStudents((prev) => [newStudent, ...prev]);
    }
    setShowModal(false);
  };
  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this student?')) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Students</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {students.length} enrolled students
          </p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm">

          <PlusIcon size={16} />
          Add Student
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">
            {students.filter((s) => s.status === 'active').length}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Active</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">
            {students.filter((s) => s.status === 'graduated').length}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Graduated</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">
            {students.filter((s) => s.status === 'inactive').length}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Inactive</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <div className="relative flex-1 max-w-sm">
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={15} />

            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

          </div>
          <button className="inline-flex items-center gap-2 text-sm text-slate-600 border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50 transition-colors">
            <FilterIcon size={14} />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                  Student
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">
                  Program
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">
                  Year
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">
                  GPA
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
              {filtered.map((student) =>
              <tr
                key={student.id}
                className="hover:bg-slate-50/50 transition-colors">

                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-700 text-xs font-semibold">
                          {student.name.
                        split(' ').
                        map((n) => n[0]).
                        join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {student.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden md:table-cell">
                    <span className="text-sm text-slate-600">
                      {student.program}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 hidden lg:table-cell">
                    <span className="text-sm text-slate-600">
                      {student.year}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 hidden lg:table-cell">
                    <span className="text-sm font-medium text-slate-700">
                      {student.gpa}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusConfig[student.status]}`}>

                      {student.status.charAt(0).toUpperCase() +
                    student.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                      onClick={() => openEdit(student)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      title="Edit">

                        <EditIcon size={14} />
                      </button>
                      <button
                      onClick={() => handleDelete(student.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Delete">

                        <TrashIcon size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Showing {filtered.length} of {students.length} students
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal &&
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-base font-semibold text-slate-900">
                {editStudent ? 'Edit Student' : 'Add New Student'}
              </h3>
              <button
              onClick={() => setShowModal(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">

                <XIcon size={16} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {[
            {
              label: 'Full Name',
              key: 'name',
              type: 'text',
              placeholder: 'e.g. Jane Smith',
              icon: UserIcon
            },
            {
              label: 'Email',
              key: 'email',
              type: 'email',
              placeholder: 'jane@university.edu',
              icon: MailIcon
            },
            {
              label: 'Program',
              key: 'program',
              type: 'text',
              placeholder: 'e.g. Computer Science',
              icon: BookOpenIcon
            },
            {
              label: 'Year',
              key: 'year',
              type: 'text',
              placeholder: 'e.g. 2nd Year',
              icon: CalendarIcon
            },
            {
              label: 'GPA',
              key: 'gpa',
              type: 'text',
              placeholder: 'e.g. 3.8',
              icon: null
            }].
            map((field) =>
            <div key={field.key}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {field.label}
                  </label>
                  <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form]}
                onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [field.key]: e.target.value
                }))
                }
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

                </div>
            )}
            </div>
            <div className="flex justify-end gap-2 px-6 py-4 border-t border-slate-100">
              <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">

                Cancel
              </button>
              <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">

                {editStudent ? 'Save Changes' : 'Add Student'}
              </button>
            </div>
          </div>
        </div>
      }
    </div>);

}