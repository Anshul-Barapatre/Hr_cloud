import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center">About HR Cloud</h1>

        {/* Why HR Cloud Exists */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why We Exist</h2>
          <p className="text-gray-600">
            HR Cloud was founded to simplify and automate human resource management for organizations of all sizes.
            We believe in leveraging technology to reduce administrative burdens and empower HR teams to focus on people, not paperwork.
          </p>
        </section> 

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize human resource operations through intuitive cloud-based solutions that streamline workflows and enhance employee engagement.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted HR tech platform empowering businesses to grow through efficient workforce management.
            </p>
          </div>
        </section>

        {/* Brand Values */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Core Values</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Transparency and trust</li>
            <li>Innovation through simplicity</li>
            <li>People-first approach</li>
            <li>Commitment to excellence</li>
            <li>Data security and integrity</li>
          </ul>
        </section>

        {/* Optional: Team Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Anshul Barapatre', 'Akshat Rodwal', 'Ayush Paradkar'].map((name, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 text-center shadow">
                <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full mb-4"></div>
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm text-gray-500">HR Cloud Team</p>
              </div>
            ))}
          </div>
        </section>

        {/* Optional: Press or Recognition */}
        { <section>
          <h2 className="text-2xl font-semibold">In the News</h2>
          <p className="text-gray-600">Featured in TechCrunch, YourStory, and Economic Times.</p>
        </section> }
      </div>
    </div>
  );
};

export default About;
