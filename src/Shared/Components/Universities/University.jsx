import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import UG from "./UG";
import PG from "./PG";
import MBA from "./MBA";
import MCA from "./MCA";
import Diploma from "./Diploma";
import DiplomaCertificate from "./DiplomaCertificate";
import UGmadras from "./UniversityOfMadras/UGmadras";
import PGmadras from "./UniversityOfMadras/PGmadras";
import Certificatemadras from "./UniversityOfMadras/Certificatemadras";
import Diplomamadras from "./UniversityOfMadras/Diplomamadras";
import UGalagappa from "./Alagappa/UGalagappa";
import PGalagappa from "./Alagappa/PGalagappa";
import MBAalagappa from "./Alagappa/MBAalagappa";
import UGmanon from "./Manon/UGmanon";
import UGtamilnadu from "./Tamilnadu/UGtamilnadu";
import PGtamilnadu from "./Tamilnadu/PGtamilnadu";
import AdvanceVocational from "./Tamilnadu/AdvanceVocational";
import DiplomaTamilnadu from "./Tamilnadu/DiplomaTamilnadu";
import UGacademic1 from "./Tamilnadu/UGacademic1";
import PGacademic1 from "./Tamilnadu/PGacademic1";
import Voactional from "./Tamilnadu/Voactional";
import CertificateProgram from "./Tamilnadu/CertificateProgram";
import ShortTerm from "./Tamilnadu/ShortTerm";
import PGmanon from "./Manon/PGmanon";
import PGbharathiyar from "./Bharathiyar/PGbharathiyar";
import DiplomaCerti from "./Alagappa/DiplomaCerti";
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

  const [isAc, setIs] = useState(false);
  const togg = () => {
    setIs(!isAc);
  };

  const [isTamilnadu, setIsTamilnadu] = useState(false);
  const toggleTamilnadu = () => {
    setIsTamilnadu(!isTamilnadu);
  };


  const [isBharathiyar, setIsBharathiyar] = useState(false);
  const toggleBharathiyar = () => {
    setIsBharathiyar(!isBharathiyar);
  };




  const [activeIndexes, setActiveIndexes] = useState([]);

  // Function to toggle open/close sections
  const toggle = (index) => {
    if (activeIndexes.includes(index)) {
      // If already open, remove it from activeIndexes (close it)
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      // Otherwise, add the index (open it)
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const updateScaleEffect = (swiper) => {
    const slides = swiper.slides;
    const centerIndex = swiper.activeIndex;

    slides.forEach((slide, index) => {
      const scale = 1 - Math.abs(centerIndex - index) * 0.1;

      slide.style.transform = `scale(${scale})`;

      slide.style.transition = 'transform 0.3s ease';
    });
  };









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
      <section className="bg-[url('/assets/Images/Header/Group-3.png')]  bg-no-repeat  bg-cover bg-center  h-[20vh] my-2 ">
        <div className="max-w-[90rem] mx-auto px-10 h-[20vh] items-center grid ">
          <div className="  md:text-5xl text-2xl text-white">Universities</div>
        </div>
      </section>
      <div className='my-5 mt-10'>
        <p className="text-center text-[#025450] md:text-xl mb-3 "></p>
        <div className="flex justify-center md:px-0 px-5">
          <div className="inline-flex items-center rounded-full overflow-hidden">
            <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
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
                      src="/assets/Images/university/uni3.png"
                      alt="Bharathidasan University Logo"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="col-span-7 px-5 text-justify my-4 ">
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


            <section className="max-w-[80rem] px-5 mx-auto py-10 space-y-3">

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(0)}
                >
                  UG (NON-SEMESTER PROGRAMMES)
                  {activeIndexes.includes(0) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(0) && (
                  <UG />
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(1)}
                >
                  PG (NON-SEMESTER PROGRAMMES)
                  {activeIndexes.includes(1) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(1) && (
                  <PG />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(2)}
                >
                  MBA
                  {activeIndexes.includes(2) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(2) && (
                  <MBA />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(3)}
                >
                  MCA
                  {activeIndexes.includes(3) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(3) && (
                  <MCA />
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(4)}
                >
                  DIPLOMA PROGRAMMES
                  {activeIndexes.includes(4) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(4) && (
                  <Diploma />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(5)}
                >
                  DIPLOMA & CERTIFICATE PROGRAMMES
                  {activeIndexes.includes(5) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(5) && (
                  <DiplomaCertificate />
                )}
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
                    src="/assets/Images/university/uni2.png"
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


            <section className="max-w-[80rem] px-5 mx-auto py-10 space-y-3">


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(6)}
                >
                  UNDERGRADUATE (UG)
                  {activeIndexes.includes(6) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(6) && (
                  <UGmadras />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(7)}
                >
                  POSTGRADUATE (PG)
                  {activeIndexes.includes(7) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(7) && (
                  <PGmadras />
                )}
              </div>
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(9)}
                >
                  DIPLOMA COURSE (ONE YEAR)
                  {activeIndexes.includes(9) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(9) && (
                  <Diplomamadras />
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(8)}
                >
                  CERTIFICATE COURSE
                  {activeIndexes.includes(8) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(8) && (
                  <Certificatemadras />
                )}
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
                    src="/assets/Images/university/uni3.png"
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


            <section className="max-w-[80rem] px-5 mx-auto py-10 space-y-3">


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(10)}
                >
                  UG PROGRAMMES
                  {activeIndexes.includes(10) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(10) && (
                  <UGalagappa />
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(11)}
                >
                  PG PROGRAMMES
                  {activeIndexes.includes(11) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(11) && (
                  <PGalagappa />
                )}
              </div>



              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(12)}
                >
                  MBA
                  {activeIndexes.includes(12) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(12) && (
                  <MBAalagappa />
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(26)}
                >
                  Diploma & Certificate Programmes Under Distance Learning (ODL) mode
                  {activeIndexes.includes(26) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(26) && (
                  <DiplomaCerti/>
                )}
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
                    src="/assets/Images/university/uni2.png"
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
                <button
                  className="mt-4 flex items-center bg-[#025450] hover:bg-teal-600 text-white font-semibold py-2 px-4 md:text-base text-sm rounded-lg transition-all duration-300"
                  onClick={togg}
                >
                  Programmes Offered
                  <span className="ml-2">
                    {isAc ? (
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
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isAc ? "" : ""
            }`}
        >
          {isAc && (


            <section className="max-w-[80rem] px-5 mx-auto py-10 space-y-3">


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(13)}
                >
                  Programmes offered under Open and Distance Learning (ODL) Mode
                  {activeIndexes.includes(13) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(13) && (
                  <div>
                    <UGmanon />
                  </div>
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(14)}
                >
                  Programmes offered under Online (OL) Mode (UGC Entitled ONLINE Programmes)
                  {activeIndexes.includes(14) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(14) && (
                  <PGmanon />
                )}
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
                    src="/assets/Images/university/uni3.png"
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


                <button
                  className="mt-4 flex items-center bg-[#025450] hover:bg-teal-600 text-white font-semibold py-2 px-4 md:text-base text-sm rounded-lg transition-all duration-300"
                  onClick={toggleTamilnadu}
                >
                  Programmes Offered
                  <span className="ml-2">
                    {isTamilnadu ? (
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
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isTamilnadu ? "" : ""
            }`}
        >
          {isTamilnadu && (


            <section className="max-w-[80rem] px-5 mx-auto py-10 space-y-3">


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(16)}
                >
                  UNDERGRTE (UG)
                  {activeIndexes.includes(16) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(16) && (
                  <UGtamilnadu />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(17)}
                >
                  POSTGRADUATE (PG)
                  {activeIndexes.includes(17) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(17) && (
                  <PGtamilnadu />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(18)}
                >
                  Adv. Vocational Diploma Programmes
                  {activeIndexes.includes(18) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(18) && (
                  <AdvanceVocational />
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(19)}
                >
                  Diploma Programmes
                  {activeIndexes.includes(19) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(19) && (
                  <DiplomaTamilnadu />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(20)}
                >
                  UG  Science Programmes Academic Year  only
                  {activeIndexes.includes(20) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(20) && (
                  <UGacademic1 />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(21)}
                >
                  PG  Science Programmes Academic Year  only
                  {activeIndexes.includes(21) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(21) && (
                  <PGacademic1 />
                )}
              </div>


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(22)}
                >
                  Vocational Diploma Programmes
                  {activeIndexes.includes(22) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(22) && (
                  <Voactional />
                )}
              </div>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(23)}
                >
                  Certificate Programmes
                  {activeIndexes.includes(23) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(23) && (
                  <CertificateProgram />
                )}
              </div>
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(24)}
                >

                  Short  Term Courses
                  {activeIndexes.includes(24) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(24) && (
                  <ShortTerm />
                )}
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
                    src="/assets/Images/university/uni2.png"
                    alt="Bharathidasan University Logo"
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className=" col-span-7  px-5 text-justify my-5">
                <h1 className="md:text-2xl text-lg font-bold text-blue-900">
                  Bharathiyar University
                </h1>
                <p className="text-gray-700 mt-2 text-sm">
                  The School of Distance Education (SDE) of Bharathiar University was established
                  during the academic year 1991-1992. All the courses offered by SDE are approved
                  by University Grants Commission, Distance Education Council (UGC-DEC) and then
                  Distance Education Bureau (UGC-DEB), under the Ministry of Human Resources Development,
                  Government of India. School of Distance Education of Bharathiar University is strictly
                  adhering the UGC-DEB regulations as and when amended in the Gazette of Government of India.
                </p>
                <p className="text-gray-700 mt-2 text-sm">With a dedicated team of faculty who have a
                  rich experience in teaching and research are sharing their
                  domain knowledge as Programme and Course Co-ordinators, mentors
                  and dedicated and experienced administrative staff, the University
                  has emerged as one of the strong pillars of higher education not
                  only in the state and the nation but also around the globe.</p>



                <button
                  className="mt-4 flex items-center bg-[#025450] hover:bg-teal-600 text-white font-semibold py-2 px-4 md:text-base text-sm rounded-lg transition-all duration-300"
                  onClick={toggleBharathiyar}
                >
                  Programmes Offered
                  <span className="ml-2">
                    {isBharathiyar ? (
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
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isBharathiyar ? "" : ""
            }`}
        >
          {isBharathiyar && (


            <section className="max-w-[80rem] px-5 mx-auto py-10 space-y-3">


              <div>
                <div
                  className="flex justify-between items-center cursor-pointer md:text-lg text-base font-bold text-blue-900"
                  onClick={() => toggle(25)}
                >
                  POST GRADUATE (PG)
                  {activeIndexes.includes(25) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeIndexes.includes(25) && (
                  <PGbharathiyar />
                )}
              </div>









            </section>









          )}
        </div>
      </section>
      <section className="max-w-[87rem]  px-5  space-y-5  mx-auto my-20">
        <div className="w-fit h-fit p-1 rounded-2xl mx-auto text-[#025450]   px-5">
          <p>Hear From Our</p>
        </div>
        <div className="flex justify-center md:px-0 px-5">
          <div className="inline-flex items-center rounded-full overflow-hidden">
            <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
              HAPPY
            </div>
            <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
              STUDENTS
            </div>
          </div>
        </div>
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
              <SwiperSlide key={index} >
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