// src/components/CourseDetails1.js
import React from "react";
// import Engineering from "../assets/images/Engineering.jpg";
import { Link } from "react-router-dom";

function CourseDetails3() {
  return (
    <>
      <style>
        {`
        .gradient-hr {
          position: relative;
          border: 0;
          height: 3px;
        }
        .gradient-hr::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, #4caf50, #2196f3);
        }
        .underline-animation {
          position: relative;
        }
        .underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #2196f3;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }
        .underline-animation:hover::after {
          transform: scaleX(1);
        }
        `}
      </style>
      <div className="bg-[#F2F2F2] min-h-screen">
        <header className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 px-6 md:py-24 md:px-10 text-center font-serif">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-serif leading-tight">
            Counseling Services
          </h1>
          <p className="text-base md:text-2xl lg:text-4xl mb-6 md:mb-8 font-medium font-serif">
            Enhance your leadership skills with our specialized management
            programs.
          </p>
        </header>

        <div className="bg-gray-100 py-4 px-4 text-gray-700 text-lg md:text-xl shadow-md">
          <div className="max-w-6xl lg:mx-1 mx-auto flex items-center space-x-2">
            <Link
              className="underline-animation hover:text-blue-600 transition duration-300"
              to={"/"}
            >
              Home
            </Link>
            <span className="text-gray-600">&gt;</span>
            <Link
              className="underline-animation hover:text-blue-600 transition duration-300"
              to={"/service1"}
            >
              Undergraduate Medical Consultancy
            </Link>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gray-800 font-medium">
              Counseling Services
            </span>
          </div>
        </div>
        <br />
        <section className="mb-12 max-w-8xl mx-auto flex justify-center py-4 bg-slate-100">
          <div className="flex flex-col gap-8 max-w-8xl">
            <div className="p-6 bg-gray-50 py-8 shadow-xl rounded-2xl mt-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-400">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Counseling Services
              </h2>
              <hr className="gradient-hr mb-4" />
              <p className="text-lg mb-4 text-gray-600 leading-relaxed font-medium">
                Our UG Medical Career Counseling service provides expert
                guidance throughout your career development journey in the
                medical field. We offer personalized support to help you make
                informed decisions and achieve your career goals.
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 font-medium">
                <li>Career Path Guidance</li>
                <li>Specialization Selection</li>
                <li>Professional Development</li>
                <li>Interview Preparation</li>
              </ul>
            </div>

            <section className="p-6 bg-gray-50 py-8 shadow-xl rounded-2xl mt-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  Process: Step-by-Step Guide to Application Process
                </h4>
                <hr className="gradient-hr mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="border-r border-gray-300 pr-6  last:border-r-0">
                    <div className="font-semibold text-blue-600 text-xl">
                      Step 1
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Initial Consultation: Schedule an initial consultation to
                      discuss your goals and requirements.
                    </p>
                  </div>
                  <div className="border-r border-gray-300 pr-6  last:border-r-0">
                    <div className="font-semibold text-blue-600 text-xl">
                      Step 2
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Document Review: Submit your documents for a thorough
                      review and receive feedback.
                    </p>
                  </div>
                  <div className="border-r border-gray-300 pr-6 last:border-r-0">
                    <div className="font-semibold text-xl text-blue-600">
                      Step 3
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Mock Interviews: Participate in mock interviews to prepare
                      for real-life scenarios.
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600 text-xl">
                      Step 4
                    </div>
                    <p className="text-gray-600 mt-1 text-base font-medium">
                      Final Application Submission: Get assistance with
                      finalizing and submitting your application.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="p-6 bg-gray-50 py-8 shadow-xl rounded-2xl mt-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Specialties Covered*:
              </h2>
              <hr className="gradient-hr mb-4" />
              <p className="text-lg mb-4 font-semibold text-gray-600">
                We provide a range of additional support services to enhance
                your career development journey.
              </p>
              <ul className="list-disc pl-6 font-medium text-lg text-gray-600 space-y-2">
                <li>Medicine</li>
                <li>Dentistry</li>
                <li>Pharmacy</li>
                <li>Nursing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-6 bg-white shadow-xl rounded-2xl mt-10 border border-gray-200">
          <div className="mt-4 mb-4">
            <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#343A40]">
              Packages: Tailored Consultancy Services for Your Needs
            </h4>
            <hr className="gradient-hr mb-4" />
            <p className="text-[#6C757D] font-medium">
              *Our packages are designed to cater to various levels of
              educational and career counseling needs, offering tailored support
              based on your individual requirements.
            </p>
            <div className="mt-6">
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6 border border-gray-300 h-full transition-all duration-300 hover:shadow-2xl">
                <h5 className="text-2xl font-bold text-[#343A40] mb-2">
                  Basic Counseling Package
                </h5>
                <p className="text-gray-600 mb-4 font-semibold">
                  Ideal for those seeking initial guidance on educational paths
                  and career opportunities.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 font-medium">
                  <li>Initial Career Assessment</li>
                  <li>Guidance on Educational Options</li>
                  <li>Basic Counseling Session</li>
                </ul>
                <p className="font-bold text-2xl text-blue-600">$300</p>
              </div>
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6 border border-gray-300 h-full transition-all duration-300 hover:shadow-2xl">
                <h5 className="text-2xl font-bold text-[#343A40] mb-2">
                  Comprehensive Counseling Package
                </h5>
                <p className="text-gray-600 mb-4 font-semibold">
                  Perfect for individuals needing detailed support, including
                  personalized educational and career planning.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 font-medium">
                  <li>In-depth Career Analysis</li>
                  <li>Customized Educational Pathway Recommendations</li>
                  <li>Comprehensive Counseling Sessions</li>
                  <li>Ongoing Support and Follow-ups</li>
                </ul>
                <p className="font-bold text-2xl text-blue-600">$500</p>
              </div>
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300 h-full transition-all duration-300 hover:shadow-2xl">
                <h5 className="text-2xl font-bold text-[#343A40] mb-2">
                  Premium Counseling Package
                </h5>
                <p className="text-gray-600 mb-4 font-semibold">
                  Designed for those seeking extensive, ongoing support
                  throughout their educational and career journey.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 font-medium">
                  <li>Comprehensive Career and Educational Assessment</li>
                  <li>Personalized Career and Academic Planning</li>
                  <li>Full Application Assistance</li>
                  <li>Dedicated Counseling and Mentorship</li>
                  <li>Post-Admission and Career Support</li>
                </ul>
                <p className="font-bold text-2xl text-blue-600">$800</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-center bg-gray-100 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Additional Information
            </h2>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Our consultancy services are designed to offer expert guidance and
              support for your postgraduate medical career. We provide flexible
              options to suit your needs, including online consultations. For
              more information on our services and how we can assist you, please
              contact us.
            </p>
            <Link
              to="/contactform"
              className="inline-block px-8 py-4 bg-green-500 text-white rounded-lg text-xl font-medium hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default CourseDetails3;
