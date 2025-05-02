import React from 'react';
import image1 from '../../assets/photo1.jpeg';

import { Briefcase, Users, FileText, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      
      <section className="bg-blue-50 py-20 px-6 text-center"
>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          
          Welcome to HR Cloud
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Streamline your HR management with an all-in-one cloud-based solution.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Why HR Cloud?</h2>
        <p className="text-gray-600 text-lg">
          HR Cloud simplifies employee management, payroll, recruitment, and more —
          all from a secure and easy-to-use platform.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Users className="w-10 h-10 text-blue-600" />}
            title="Employee Management"
            desc="Organize all your employee data in one place with role-based access."
          />
          <FeatureCard
            icon={<Briefcase className="w-10 h-10 text-green-600" />}
            title="Recruitment"
            desc="Track applicants, schedule interviews, and manage job listings."
          />
          <FeatureCard
            icon={<FileText className="w-10 h-10 text-purple-600" />}
            title="Payroll Automation"
            desc="Generate payslips and automate salary disbursements securely."
          />
          <FeatureCard
            icon={<CheckCircle className="w-10 h-10 text-pink-600" />}
            title="Attendance Tracking"
            desc="Monitor attendance and leave with built-in approval flows."
          />
        </div>
        <section className="bg-gray-100 py-10 px-6 rounded-lg shadow-sm mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-800">
          What Users Say
        </h2>

        <div className="mt-6 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 text-center">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="italic text-gray-700">
              “HR Cloud made our HR process 10x faster!”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-blue-700">Anjali Verma</h4>
              <p className="text-sm text-gray-500">HR Lead, InnovateTech</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="italic text-gray-700">
              “Onboarding new employees has never been this smooth. Our team
              loves it!”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-blue-700">Rohan Malhotra</h4>
              <p className="text-sm text-gray-500">People Ops, TeamCore</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="italic text-gray-700">
              “From attendance to payroll, everything is streamlined. Highly
              recommended.”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-blue-700">Sanya Gupta</h4>
              <p className="text-sm text-gray-500">
                Operations Head, BrightByte
              </p>
            </div>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default Home;




