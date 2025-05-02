import React from 'react';
import {
  Users,
  CalendarCheck,
  DollarSign,
  CheckSquare,
} from 'lucide-react';

const services = [
  {
    title: 'Employee Tracking',
    description: 'Monitor and manage employee information and lifecycle from onboarding to exit.',
    icon: <Users className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'Attendance Management',
    description: 'Track daily attendance and working hours with integrated time logs.',
    icon: <CalendarCheck className="w-10 h-10 text-green-600" />,
  },
  {
    title: 'Payroll Insights',
    description: 'Automate salary calculations, tax deductions, and generate payslips.',
    icon: <DollarSign className="w-10 h-10 text-purple-600" />,
  },
  {
    title: 'Leave Approvals',
    description: 'Manage leave requests with customizable approval workflows.',
    icon: <CheckSquare className="w-10 h-10 text-pink-600" />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
