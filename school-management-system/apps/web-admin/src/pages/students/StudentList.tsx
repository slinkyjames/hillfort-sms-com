import React, { useState } from 'react';
import { DataTable } from '../../components/common/DataTable';
import { Modal } from '../../components/common/Modal';
import { FormField } from '../../components/common/FormField';

interface Student {
  id: string;
  name: string;
  grade: string;
  status: 'Active' | 'Pending' | 'Suspended';
}

export const StudentList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockStudents: Student[] = [
    { id: 'STU-001', name: 'Aisha Bello', grade: 'Year 10', status: 'Active' },
    { id: 'STU-002', name: 'David Smith', grade: 'Year 11', status: 'Active' },
    { id: 'STU-003', name: 'Chukwuemeka Obi', grade: 'Year 9', status: 'Pending' },
  ];

  const columns = [
    { header: 'ID', accessorKey: 'id' as keyof Student },
    { header: 'Name', accessorKey: 'name' as keyof Student },
    { header: 'Grade', accessorKey: 'grade' as keyof Student },
    { 
      header: 'Status', 
      accessorKey: 'status' as keyof Student,
      cell: (student: Student) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          student.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
          student.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
          'bg-brand-maroon/10 text-brand-maroon'
        }`}>
          {student.status}
        </span>
      )
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy">Student Directory</h1>
          <p className="text-sm text-slate-500 mt-1">Manage student records and admissions.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-brand-gold text-brand-navy text-sm font-bold rounded-lg shadow-sm hover:bg-[#c28f15] transition-colors"
        >
          + New Admission
        </button>
      </div>

      <DataTable 
        data={mockStudents} 
        columns={columns} 
        onRowClick={(student) => console.log('Clicked:', student.name)}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register New Student"
        footer={
          <>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-bold text-white bg-brand-navy rounded-lg hover:bg-brand-navy/90">
              Save Record
            </button>
          </>
        }
      >
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="First Name" placeholder="e.g. Aisha" />
            <FormField label="Last Name" placeholder="e.g. Bello" />
          </div>
          <FormField label="Email Address" type="email" placeholder="student@hillfort.edu" />
          <FormField label="Grade/Year" placeholder="Select Grade..." />
        </form>
      </Modal>
    </div>
  );
};