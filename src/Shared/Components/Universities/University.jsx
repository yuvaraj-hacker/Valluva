import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function University() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const [isAccordion, setIsAccordion] = useState(false);
  const toggleAccord = () => {
    setIsAccordion(!isAccordion);
  };

  const [isAccordions, setIsAccordions] = useState(false);
  const toggleAccords = () => {
    setIsAccordions(!isAccordions);
  };

  const programmes = [
    "B.A. CRIMINOLOGY & POLICE ADMINISTRATION",
    "B.A. ECONOMICS",
    "B.A. ENGLISH",
    "B.A. FRENCH",
    "B.A. HISTORICAL STUDIES",
    "B.A. PUBLIC ADMINISTRATION",
    "B.A. SOCIOLOGY",
    "B.A. TAMIL",
    "B.B.A. BUSINESS ADMINISTRATION",
    "B.C.A. COMPUTER APPLICATIONS",
    "B.COM COMPUTER APPLICATIONS",
    "B.COM. BANK MANAGEMENT",
    "B.COM. COMMERCE",
    "B.COM. CORPORATE SECRETARYSHIP",
    "B.F.A. MUSIC",
  ];

  const program = [
    "M.A. SOCIOLOGY",
    "	M.A. APPLIED SAIVA SIDDHANTHA",
    "	M.A. CHRISTIAN STUDIES",
    "	M.A. ECONOMICS",
    "	M.A. ENGLISH",
    "	M.A. HISTORICAL STUDIES",
    "	M.A. HUMAN RIGHTS AND DUTIES EDUCATION",

    "M.A. JOURNALISM",
    "	M.A. POLITICAL SCIENCE",
    "M.A. PUBLIC ADMINISTRATION",
    "M.A. SANSKRIT",
    "M.A. TAMIL",
    "M.B.A. FINACIAL MANAGEMENT",
    "M.B.A. HOSPITAL MANAGEMENT",
    "	M.B.A. HUMAN RESOURCE MANAGEMENT",
    "	M.B.A. LOGISTICS & SUPPLY CHAIN MANAGEMENT",
    "		M.B.A. MARKETING MANAGEMENT",
    "		M.B.A. SYSTEMS MANAGEMENT",
    "	M.COM. COMMERCE",
    "	M.F.A. MUSIC",
    "		M.SC. COUNSELLING PSYCHOLOGY",
    "	M.SC. CYBER FORENSICS & INFORMATION SECURITY",
    "	M.SC. GEOGRAPHY",
    "	M.SC. INFORMATION TECHNOLOGY (I.T.)",
    "	M.SC. MATHEMATICS",
    "		M.SC. PSYCHOLOGY",
    "		MASTER OF COMPUTER APPLICATION",
  ];



  const certificate = [
    "	Certificate Course in Accounting And Auditing",
    "	Certificate Course in Computer Applications",
    "Certificate Course in Corporate Social Responsibility",
    "Certificate Course in E-Commerce",
    "	Certificate Course in Indian Christianity",
    "Certificate Course in Karnatic Music",
    "Certificate Course in Library And Information Science",
    "Certificate Course in Management",
    "	Certificate Course in Naturopathy And Yogic Science",
    "	Certificate Course in Online Teaching",
    "Certificate Course in Police Administration",
    "	Certificate Course in Research Methods Of Social Sciences",
    "	Certificate Course in Scriptures And Interpretation",
    "	Certificate Course in Spoken Tamil",
    "Certificate Course in Taxation",
    "Certificate Course in Voice Training",
    "Certificate Course in Written Tamil",
  ];




  const diploma = [
    "		Diploma Course in Yoga",
    "	Diploma Course in Logistics And Supply Chain Management",
    "Diploma Course in Marketing Management",
    "	Diploma Course in School Management",
    "	Diploma Course in Systems Management",
    "	Diploma Course in Taxation",
    "	Diploma Course In Taxation, Finance, And Investment",
    "Diploma Course in Teaching Methodology In Music",
    "		Diploma Course in Tourism & Travel Management",
    "		Diploma Course in Accounting And Finance",
    "	Diploma Course in Financial Management",
    "	Diploma Course in Functional Arabic",
    "		Diploma Course in Hospital Management",
    "	Diploma Course in Hotel Management",
    "	Diploma Course in Human Resource Management",
    "	Diploma Course in Intellectual Property Rights",
    "		Diploma Course in Labour Law",
    "	Diploma Course in Management",
    "		Diploma Course in Police Administration",
    "	Diploma in Information Security And Cyber Law",
    "Diploma in Naturopathy & Yogic Sciences",

  ];

  const testimonials = [
    {
      name: 'Vignesh',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
    {
      name: 'chandru',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/hhh.png',
      rating: 5,
    },
    {
      name: 'Prabhu',
      text: "They give Good guidelines for selectingdegrees and universities. And fee structuresare less than other institutions in Villupuram.Thank you.",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
    {
      name: 'Vignesh',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
    {
      name: 'chandru',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/hhh.png',
      rating: 5,
    },
    {
      name: 'Prabhu',
      text: "They give Good guidelines for selectingdegrees and universities. And fee structuresare less than other institutions in Villupuram.Thank you.",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
  ];
  return (
    <>
      <section className="bg-[url('/assets/Images/Header/Group-3.png')]  bg-no-repeat  bg-cover bg-center  h-[20vh] my-4 ">
        <div className="max-w-[90rem] mx-auto px-10 h-[20vh] items-center grid ">
          <div className="  md:text-5xl text-2xl text-white">Universities</div>
        </div>
      </section>
      <div className='my-5 mt-10'>
        <p className="text-center text-[#025450] md:text-xl mb-3 "></p>
        <div className="flex justify-center md:px-0 px-5">
          <div className="inline-flex items-center rounded-full overflow-hidden">
            <div className="bg-[#FFC906] text-[#025450] px-4 py-2 text-sm font-bold">
            INDIA BEST
            </div>
            <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
              UNIVERSITIES
            </div>
          </div>
        </div>
      </div>
      <section className="space-y-5">
        <section className="space-y-5">
          <section className="max-w-[87rem] px-5 mx-auto">
            <div>
              <div className="grid lg:grid-cols-9 grid-cols-1 mx-auto items-center border border-gray-200 rounded-lg bg-white hover:bg-[#F0F7FF] shadow-md">
                <div className="col-span-2">
                  <div className="rounded-lg">
                    <img
                      src="/assets/Images/university/uni.png"
                      alt="Bharathidasan University Logo"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="col-span-7 px-5 text-justify my-5">
                  <h1 className="md:text-2xl text-lg font-bold text-blue-900">
                    Bharathidasan University
                  </h1>
                  <p className="text-gray-700 mt-2 text-sm">
                    A Wide Range Of Distance Education Programs In Various Fields,
                    Including Business, Management, And Science, Are Offered By
                    Bharathidasan University In Tamil Nadu. The Programs Provide
                    Flexible And Convenient Learning Options Through Study
                    Materials, Support Lectures, And Interactive Sessions.
                  </p>
                  <p className="text-gray-700 mt-2 text-sm">
                    They Are Affordable And Emphasize Practical, Hands-On Learning,
                    Making Them Accessible To Students From All Backgrounds. To
                    Guarantee That Students Receive A Comprehensive Education, The
                    University Also Provides Support Services Like Online Libraries
                    And Counseling.
                  </p>
                  <button
                    className="mt-4 flex items-center bg-[#025450] hover:bg-teal-600 text-white font-semibold py-2 px-4 md:text-base text-sm rounded-lg transition-all duration-300"
                    onClick={toggleAccordion}
                  >
                    Programmes Offered
                    <span className="ml-2">
                      {isAccordionOpen ? (
                        <FaChevronUp className="transition-transform duration-300" />
                      ) : (
                        <FaChevronDown className="transition-transform duration-300" />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isAccordionOpen ? "" : ""
            }`}
        >
          {isAccordionOpen && (
            <section className="max-w-[80rem] px-5 mx-auto py-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-5">
                UG Non-Semester Programmes
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                Duration for B.A, B. Lit, B.Sc, B.B.A, B.Com Programmes: 3 Years
              </p>
              <p className="text-sm text-gray-700 mb-6">
                Duration for B.L.I.S Programme: 1 Year
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className=" border-b">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                        Sl. No.
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                        Name of the Programme
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                        Medium
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                        Eligibility
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className=" ">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. Tamil</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                      <td className="py-2 px-4 text-sm text-gray-600 " rowSpan={2}>
                        A pass in 10 + 2 with Tamil as a Language paper for BA Tamil
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">2</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Lit. Tamil</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">Tamil</td>
                    </tr>
                    <tr className="">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. Economics</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                      <td className="py-2 px-4 text-sm text-gray-600"></td>
                    </tr>
                    <tr className="">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. English</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600"></td>
                    </tr>
                    <tr className="">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">5</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. History</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        A pass in Higher Secondary Examination (10+2)
                      </td>
                    </tr>
                    <tr className="">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">6</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. Public Administration</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">7</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.A. Political Science</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600"></td>
                    </tr>
                    <tr className="">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">8</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.B.A.</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil & English</td>
                      <td className="py-2 px-4 text-sm text-gray-600" rowSpan={3}>
                        Eligibility for B.B.A., B.Com ., B.Com., Computer Applications, B.Com., Bank Management –
                        A pass in Higher Secondary Examination (10 + 2) with Commerce and Accountancy. 20% of seats may be reserved for Vocational Stream. The candidate who has passed a Diploma in Commerce or Modern Office Practice (3 years) of equivalent awarded by the Directorate of Technical Education / National Council of Vocational Training is eligible for lateral entry to 2nd year
                      </td>
                    </tr>
                    <tr className="">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">9</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.Com.</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil & English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">10</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Com. (Bank Management)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">11</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Sc.
                        Mathematics</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">Tamil & English</td>
                      <td className="py-2 px-4 text-sm text-gray-600"> A pass in the Higher Secondary Examination (10 + 2) with Mathematics as one of the core subjects.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">12</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Chemistry</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in the Higher Secondary Examination (10 + 2) with Chemistry as one of the core subjects.</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">13</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Physics</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in the Higher Secondary Examination (10 + 2) with Physics as one of the core subjects.</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">14</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Botany</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in Higher Secondary Examination (10 + 2) with Botany or Biology with Chemistry.</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">15</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Zoology</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in 10 +2 with Mathematics, Physics, Chemistry and Biology or Physics, Chemistry, Botany and Zoology or Biology as one of the core subjects.</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">16</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Sc.
                        Geography</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in the Higher Secondary Examination, (10 + 2)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">17</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Computer Science</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600" rowSpan={2}>A pass in the Higher Secondary Examination (10 + 2) with Computer Science or Mathematics as one of the core subjects.</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">18</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc.
                        Information Technology</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600"></td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">19</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.C.A.</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">	A pass in the Higher Secondary Examination (10 + 2) with Mathematics as one of the core subjects.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">20</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Lib.I.Sc.(one year programme)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in any UG Degree (after 10th and +2)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  PG Non-Semester Programmes
                </h2>
                <p className="text-sm text-gray-700 mb-2">
                  Duration for M.A, M.Sc, and M.Com, Programmes: 2 Years
                </p>
                <p className="text-sm text-gray-700 mb-6">
                  Duration for  M.L.I.S Programme: 1 Year
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                      <tr className=" border-b">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Sl. No.
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Name of the Programme
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Medium
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                          Eligibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">M.A. Economics</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " >
                          B.A. Economics / Econometrics
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">2</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.A. English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	 English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " >
                          A pass in B.A. English Literature (or) and degree with English as part II Language
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Tamil</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                        <td className="py-2 px-4 text-sm text-gray-600">	A pass in B.A. Tamil / B.Lit. B.A. Applied for Tamil / Pulavar  Degree (or) any Degree with Tamil as part of I language.</td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">M.A. History</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	Tamil & English</td>
                        <td className="py-2 px-4 text-sm text-gray-600" rowSpan={3}>Any UG Degree</td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">5</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Public Administration</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">6</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Political Science</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600"></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">7</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Sc. Mathematics</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">B.Sc. Mathematics</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">8</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.Sc. Chemistry</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600" >
                          B.Sc. Chemistry  </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">9</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.Sc. Physics</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b"> English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          B.Sc. Physics
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">10</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Botany</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">	B.Sc. Botany</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">11</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Zoology</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r"> English</td>
                        <td className="py-2 px-4 text-sm text-gray-600"> 	B.Sc. Zoology</td>
                      </tr>
                      <tr >
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">12</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Computer Science</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600" rowSpan={2}>B.Sc. Computer Science / B.Sc. I.T./B.C.A./Software Development (or) Any other degree equivalent accepted by the Syndicate.</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">13</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">		M.Sc. Information Tech.</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">14</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">		M.SC. Geography</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">B.Sc., Geography</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  MBA
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                      <tr className=" border-b">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Sl. No.
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Name of the Programme
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Medium
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                          Eligibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.B.A.</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " >
                          Any UG Degree of this University or an equivalent examination accepted by the Syndicate thereto (10 + 2 + 3) including B.E./B.Tech. with a minimum of 50% marks in Part III
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  Diploma / Certificate Programmes
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                      <tr className=" border-b">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Sl. No.
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Name of the Programme
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Duration
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                          Eligibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">		Diploma in Thirukkural</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1 year</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " rowSpan={2} >
                          A pass in SSLC Examination (10th ).                              </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">		Diploma in Sanskrit</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	1 year</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	Certificate Course in Tamil Pandit Training.</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	1 year</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " >
                          A pass in Pulavar / B.Litt Tamil                              </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}
        </div>
        <section className="max-w-[87rem] px-5 mx-auto">
          <div>
            <div className="grid lg:grid-cols-9 grid-cols-1  mx-auto items-center  border border-gray-200 rounded-lg  bg-white  hover:bg-[#F0F7FF] shadow-md ">
              <div className="flex-shrink-0  col-span-2">
                <div className="  rounded-lg">
                  <img
                    src="/assets/Images/university/university2.png"
                    alt="Bharathidasan University Logo"
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className=" col-span-7  px-5 text-justify my-5">
                <h1 className="md:text-2xl text-lg font-bold text-blue-900">
                  University of Madras – Institute of Distance Education
                </h1>
                <p className="text-gray-700 mt-2 text-sm">
                  Madras University offers numerous distance education programs in various fields, including education, business, management, the arts, and
                  science. Through a combination of study materials, online lectures, and interactive sessions, programs provide learners with flexible and
                  convenient learning options. They are very affordable and emphasize practical, hands-on learning.
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                  Additionally, Madras University offers support services like online libraries and counseling. The dedicated academic advisors at the university
                  offer students support and direction throughout their studies. Suppose you want to advance your education by focusing on practical,
                  hands-on learning. In that case, Madras University distance education programs are a great choice.
                </p>
                <button
                  className="mt-4 flex items-center bg-[#025450] hover:bg-teal-600 text-white font-semibold py-2 px-4 md:text-base text-sm rounded-lg transition-all duration-300"
                  onClick={toggleAccord}
                >
                  Programmes Offered
                  <span className="ml-2">
                    {isAccordion ? (
                      <FaChevronUp className="transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="transition-transform duration-300" />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isAccordion ? "" : ""
            }`}
        >
          {isAccordion && (
            <section className="max-w-[80rem] px-5 mx-auto py-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-5">
                UnderGraduate (UG)
              </h2>
              <section className="max-w-4xl  ">
                <div className="overflow-x-auto border border-gray-300 ">
                  <table className="min-w-full table-auto border-collapse">
                    <thead className="">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                          S.No.
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                          Name of the Undergraduate Programme
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {programmes.map((programme, index) => (
                        <tr key={index} className="bg-white hover:bg-gray-100">
                          <td className="border border-gray-300 px-4 py-3 text-sm text-center text-gray-700">
                            {index + 1}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-left text-gray-700">
                            {programme}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>


              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  PostGraduate (PG)
                </h2>
                <section className="max-w-4xl  ">
                  <div className="overflow-x-auto border border-gray-300 ">
                    <table className="min-w-full table-auto border-collapse">
                      <thead className="">
                        <tr>
                          <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                            S.No.
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                            Name of the PostGraduate Programme
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {program.map((programme, index) => (
                          <tr key={index} className="bg-white hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-center text-gray-700">
                              {index + 1}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-left text-gray-700">
                              {programme}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>


              </div>


              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  Certificate Course
                </h2>
                <section className="max-w-4xl  ">
                  <div className="overflow-x-auto border border-gray-300 ">
                    <table className="min-w-full table-auto border-collapse">
                      <thead className="">
                        <tr>
                          <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                            S.No.
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                            Name of the Certificate and Diploma Programme
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {certificate.map((programme, index) => (
                          <tr key={index} className="bg-white hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-center text-gray-700">
                              {index + 1}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-left text-gray-700">
                              {programme}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>


              </div>


              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  Diploma Courses
                </h2>
                <section className="max-w-4xl  ">
                  <div className="overflow-x-auto border border-gray-300 ">
                    <table className="min-w-full table-auto border-collapse">
                      <thead className="">
                        <tr>
                          <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                            S.No.
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center">
                            Diploma Course
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {diploma.map((programme, index) => (
                          <tr key={index} className="bg-white hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-center text-gray-700">
                              {index + 1}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-left text-gray-700">
                              {programme}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>


              </div>





            </section>



          )}
        </div>
        <section className="max-w-[87rem] px-5 mx-auto">
          <div>
            <div className="grid lg:grid-cols-9 grid-cols-1  mx-auto items-center  border border-gray-200 rounded-lg  bg-white  hover:bg-[#F0F7FF] shadow-md ">
              <div className="flex-shrink-0 col-span-2">
                <div className="  rounded-lg">
                  <img
                    src="/assets/Images/university/uni.png"
                    alt="Bharathidasan University Logo"
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className=" col-span-7  px-5 text-justify my-5">
                <h1 className="md:text-2xl text-lg font-bold text-blue-900">
                  Alagappa University
                </h1>
                <p className="text-gray-700 mt-2 text-sm">
                  A wide range of distance education programs in various fields, including business, management, and science, are offered by Bharathidasan
                  University in Tamil Nadu. The programs provide flexible and convenient learning options through study materials, support lectures, and
                  interactive sessions.
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                  They are affordable and emphasize practical, hands-on learning, making them accessible to students from all backgrounds. To guarantee
                  that students receive a comprehensive education, the university also provides support services like online libraries and counseling.
                </p>
                <button
                  className="mt-4 flex items-center bg-[#025450] hover:bg-teal-600 text-white font-semibold py-2 px-4 md:text-base text-sm rounded-lg transition-all duration-300"
                  onClick={toggleAccords}
                >
                  Programmes Offered
                  <span className="ml-2">
                    {isAccordions ? (
                      <FaChevronUp className="transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="transition-transform duration-300" />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>


        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isAccordions ? "" : ""
            }`}
        >
          {isAccordions && (
            <section className="max-w-[80rem] px-5 mx-auto py-10">

              <h2 className="text-3xl font-bold text-blue-900 mb-5">
                ACADEMIC & PROFESSIONAL PROGRAMMES
              </h2>

              <h2 className="text-2xl font-bold text-blue-900 mb-5">

                UG Programmes
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className=" border-b">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                        Sl. No.
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                        Name of the Programme
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                        Duration
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                        Eligibility
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border-b">
                      <td className="text-center text-2xl font-bold  text-gray-600" colSpan={4}>ARTS</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	B.A. (Tamil)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600 " >
                        10 +2 முறையில் 12 தேர்ச்சி பெற்று மற்றும் 10 வகுப்பில் தமிழை ஒரு மொழி பாடமாக பயின்று இருக்க வேண்டும்
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">2</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.A. (English)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600 ">	A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	B.A. (History) *</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A.(Economics) *</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">5</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. (Public Administration)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        A pass in HSC (or) a 3-year Diploma
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="text-center text-2xl font-bold  text-gray-600" colSpan={4}>SCIENCE</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">6</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.Sc. (Mathematics)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in HSC (or) a 3-year Diploma in Mathematics</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">7</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Sc.(Information Technology)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">8</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	B.Sc.(Computer Science)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600" >
                        A pass in HSC (or) a 3-year Diploma
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">9</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	Bachelor of Computer Applications (BCA)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in HSC (or) a 3-year Diploma
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">10</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Sc. (Psychology)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center text-2xl font-bold  text-gray-600" colSpan={4}>MANAGEMENT</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">11</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Com*</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">	A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">12</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.B.A*</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">	A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">13</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">B.B.A. (Banking)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">	A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">14</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Com. (Computer Applications)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">3 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">	A pass in HSC (or) a 3-year Diploma</td>
                    </tr>
                    <tr className="border-b ">
                      <td className="text-center text-2xl font-bold  text-gray-600 " colSpan={4}>LIBRARY SCIENCE</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">15</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">	Bachelor of Library and Information Science (B.Lib.I.Sc.)</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">1 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">Any Bachelor Degree from a recognized University</td>
                    </tr>
                    <tr className=" border-b">
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">16</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">		B.Ed.,</td>
                      <td className="py-2 px-4 text-sm text-gray-600 border-r">2 Year</td>
                      <td className="py-2 px-4 text-sm text-gray-600">	10+2+3 or 11+1+3 pattern + D.T.Ed. /D.P.Ed./B…P.Ed. /M.P.Ed + Trained in-service teachers</td>
                    </tr>
                  </tbody>
                </table>
                <div className="space-y-3 my-4">


                  <p className="">    * Both English and Tamil Medium</p>
                  <p className="">
                    # Tamil Medium Only</p>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  PG Programmes

                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                      <tr className=" border-b">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Sl. No.
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Name of the Programme
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Medium
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                          Eligibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">M.A. Economics</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " >
                          B.A. Economics / Econometrics
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">2</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.A. English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	 English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " >
                          A pass in B.A. English Literature (or) and degree with English as part II Language
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Tamil</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                        <td className="py-2 px-4 text-sm text-gray-600">	A pass in B.A. Tamil / B.Lit. B.A. Applied for Tamil / Pulavar  Degree (or) any Degree with Tamil as part of I language.</td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">M.A. History</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	Tamil & English</td>
                        <td className="py-2 px-4 text-sm text-gray-600" rowSpan={3}>Any UG Degree</td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">5</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Public Administration</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">6</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Political Science</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600"></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">7</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Sc. Mathematics</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">B.Sc. Mathematics</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">8</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.Sc. Chemistry</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600" >
                          B.Sc. Chemistry  </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">9</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.Sc. Physics</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b"> English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          B.Sc. Physics
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">10</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Botany</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">	B.Sc. Botany</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">11</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Zoology</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r"> English</td>
                        <td className="py-2 px-4 text-sm text-gray-600"> 	B.Sc. Zoology</td>
                      </tr>
                      <tr >
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">12</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Computer Science</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600" rowSpan={2}>B.Sc. Computer Science / B.Sc. I.T./B.C.A./Software Development (or) Any other degree equivalent accepted by the Syndicate.</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">13</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">		M.Sc. Information Tech.</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">14</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">		M.SC. Geography</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                        <td className="py-2 px-4 text-sm text-gray-600">B.Sc., Geography</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                  MBA
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                      <tr className=" border-b">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Sl. No.
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Name of the Programme
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                          Medium
                        </th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                          Eligibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b">
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.B.A.</td>
                        <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                        <td className="py-2 px-4 text-sm text-gray-600 " >
                          Any UG Degree of this University or an equivalent examination accepted by the Syndicate thereto (10 + 2 + 3) including B.E./B.Tech. with a minimum of 50% marks in Part III
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </section>
          )}
        </div>






        <section className="max-w-[87rem] px-5 mx-auto">
          <div>
            <div className="grid lg:grid-cols-9 grid-cols-1  mx-auto items-center  border border-gray-200 rounded-lg  bg-white  hover:bg-[#F0F7FF] shadow-md ">
              <div className="flex-shrink-0 col-span-2">
                <div className="  rounded-lg">
                  <img
                    src="/assets/Images/university/university2.png"
                    alt="Bharathidasan University Logo"
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className=" col-span-7  px-5 text-justify my-5" >
                <h1 className="md:text-2xl text-lg font-bold text-blue-900">
                  Manonmaniam Sundaranar University
                </h1>
                <p className="text-gray-700 mt-2 text-sm">
                  Madras University offers numerous distance education programs in various fields, including education, business, management, the arts, and
                  science. Through a combination of study materials, online lectures, and interactive sessions, programs provide learners with flexible and
                  convenient learning options. They are very affordable and emphasize practical, hands-on learning.
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                  Additionally, Madras University offers support services like online libraries and counseling. The dedicated academic advisors at the university
                  offer students support and direction throughout their studies. Suppose you want to advance your education by focusing on practical,
                  hands-on learning. In that case, Madras University distance education programs are a great choice.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[87rem] px-5 mx-auto">
          <div>
            <div className="grid lg:grid-cols-9 grid-cols-1  mx-auto items-center  border border-gray-200 rounded-lg  bg-white  hover:bg-[#F0F7FF] shadow-md ">
              <div className="flex-shrink-0 col-span-2">
                <div className="  rounded-lg">
                  <img
                    src="/assets/Images/university/uni.png"
                    alt="Bharathidasan University Logo"
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className=" col-span-7  px-5 text-justify my-5">
                <h1 className="md:text-2xl text-lg font-bold text-blue-900">
                  Tamilnadu Open University
                </h1>
                <p className="text-gray-700 mt-2 text-sm">
                  A wide range of distance education programs in various fields, including business, management, and science, are offered by Bharathidasan
                  University in Tamil Nadu. The programs provide flexible and convenient learning options through study materials, support lectures, and
                  interactive sessions.
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                  They are affordable and emphasize practical, hands-on learning, making them accessible to students from all backgrounds. To guarantee
                  that students receive a comprehensive education, the university also provides support services like online libraries and counseling.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[87rem] px-5 mx-auto">
          <div>
            <div className="grid lg:grid-cols-9 grid-cols-1  mx-auto items-center  border border-gray-200 rounded-lg  bg-white  hover:bg-[#F0F7FF] shadow-md ">
              <div className="flex-shrink-0 col-span-2">
                <div className="  rounded-lg">
                  <img
                    src="/assets/Images/university/university2.png"
                    alt="Bharathidasan University Logo"
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className=" col-span-7  px-5 text-justify my-5">
                <h1 className="md:text-2xl text-lg font-bold text-blue-900">
                  ISBM University
                </h1>
                <p className="text-gray-700 mt-2 text-sm">
                  Madras University offers numerous distance education programs in various fields, including education, business, management, the arts, and
                  science. Through a combination of study materials, online lectures, and interactive sessions, programs provide learners with flexible and
                  convenient learning options. They are very affordable and emphasize practical, hands-on learning.
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                  Additionally, Madras University offers support services like online libraries and counseling. The dedicated academic advisors at the university
                  offer students support and direction throughout their studies. Suppose you want to advance your education by focusing on practical,
                  hands-on learning. In that case, Madras University distance education programs are a great choice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="max-w-[87rem]  px-5  space-y-5  mx-auto my-20">
        <div className="w-fit h-fit p-1 rounded-2xl bg-[#FFC906] mx-auto text-black px-5">
          <p>Hear From Our</p>
        </div>
        <p className="text-3xl font-bold text-center text-[#025450]">Happy Students</p>
        <div className='my-5 '>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#FFF6D3] p-6 shadow-md rounded-lg space-y-4 text-center cursor-pointer">
                  <img
                    className="mx-auto "
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <p className="mt-4 md:text-lg text-sm">{testimonial.text}</p>
                  <img
                    className="mx-auto "
                    src={testimonial.avata}
                  />
                  <h3 className="mt-2 font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">Alumni Student</p>
                  <div className="mt-2">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default University;