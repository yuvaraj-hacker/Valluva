import React, { useState } from 'react'

function ContactUs() {

  const [courseLevel, setCourseLevel] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');


  const coursesData = {
    UG: ['	B.A. Tamil', '	B.Lit. Tamil', 'B.A. Economics', 'B.A. English', 'B.A. History', 'B.A.  Administration', '	B.A. Political Science', '	B.B.A.', '	B.Sc. Mathematics', 'B.Sc. Computer Science'],
    PG: ['M.A. Economics', 'M.A. English', 'M.A. Tamil', 'M.A. History', '	M.A. Political Science', '	M.A.  Administration', '		M.Sc. Mathematics', '	M.Sc. Computer  Science', 'M.Com', 'M.B.A'],
    Diploma: ['Diploma in Computer Science', ''],
  };


  const handleLevelChange = (e) => {
    setCourseLevel(e.target.value);
    setSelectedCourse('');
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };



  return (

    <>
      <section className="bg-[url('/assets/Images/Header/Group-3.png')]  bg-no-repeat  bg-cover bg-center  h-[20vh] my-4 ">
        <div className='max-w-[90rem] mx-auto px-10 h-[20vh] items-center grid '>
          <div className=' md:text-5xl text-2xl text-white'>
            Contact Us
          </div>

        </div>

      </section>



      <section className='lg:my-10 my-10'>



        <div className='flex justify-center'>


          <div className="inline-flex items-center rounded-full overflow-hidden ">
            <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
              VALLUVA'S
            </div>
            <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
              STUDY CENTER LOCATIONS
            </div>
          </div>

        </div>


        <section className='max-w-[87rem] px-5 mx-auto my-5'>
          <div className='space-y-5'>


            <div className="flex flex-col lg:flex-row bg-white border   overflow-hidden">

              <div className="bg-[#00414F] text-white flex justify-center items-center lg:w-[0%] p-4">
                <h2 className="text-2xl font-bold tracking-widest transform  lg:-rotate-90">VILLUPURAM</h2>
              </div>


              <div className="flex flex-col lg:flex-row w-full">

                <div className="w-full lg:w-[70%] p-4">
                  <iframe
                    className="w-full h-64 lg:h-[30vh] rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4843.851949796941!2d79.48278327587788!3d11.936726836719792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53569133712e0d%3A0x901a813cd106dc17!2sValluvas%20Distance%20Education%20Study%20Centre!5e1!3m2!1sen!2sin!4v1727850169262!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
                </div>

                <div className="w-full lg:w-[30%] p-6 flex flex-col  justify-center  space-y-2">

                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/locate.png"
                      alt="Location Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      No. 24, 1
                      <sup>st</sup>  Floor, Trichy Main Road,  <br />
                      Opp. To ES Hospital ,<br />
                      Villupuram – 605602
                    </p>
                  </div>


                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/Ringer.png"
                      alt="Phone Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      +91 7010051075; +91 4146 355730
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/Let.png"
                      alt="Email Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      Valluvasvpm@Gmail.Com
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col lg:flex-row bg-white border   overflow-hidden">

              <div className="bg-[#00414F] text-white flex justify-center items-center lg:w-[0%] p-4">
                <h2 className="text-2xl font-bold tracking-widest transform  lg:-rotate-90 text-[#f4e316]">TINDIVANAM</h2>
              </div>


              <div className="flex flex-col lg:flex-row w-full">

                <div className="w-full lg:w-[70%] p-4">
                  <iframe
                    className="w-full h-64 lg:h-[30vh] rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4843.851949796941!2d79.48278327587788!3d11.936726836719792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53569133712e0d%3A0x901a813cd106dc17!2sValluvas%20Distance%20Education%20Study%20Centre!5e1!3m2!1sen!2sin!4v1727850169262!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
                </div>

                <div className="w-full lg:w-[30%] p-6 flex flex-col  justify-center  space-y-2">

                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/locate.png"
                      alt="Location Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      Tindivanam Main Road,
                      Tindivanam – 604001
                    </p>
                  </div>


                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/Ringer.png"
                      alt="Phone Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      +91 7010051075; +91 4146 355730
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/Let.png"
                      alt="Email Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      info@valluvasedu.com
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col lg:flex-row bg-white border   overflow-hidden">

              <div className="bg-[#00414F] text-white flex justify-center items-center lg:w-[0%] p-4">
                <h2 className="text-2xl font-bold tracking-widest transform  lg:-rotate-90">THIRUKOVILUR</h2>
              </div>


              <div className="flex flex-col lg:flex-row w-full">

                <div className="w-full lg:w-[70%] p-4">
                  <iframe
                    className="w-full h-64 lg:h-[30vh] rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4843.851949796941!2d79.48278327587788!3d11.936726836719792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53569133712e0d%3A0x901a813cd106dc17!2sValluvas%20Distance%20Education%20Study%20Centre!5e1!3m2!1sen!2sin!4v1727850169262!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
                </div>

                <div className="w-full lg:w-[30%] p-6 flex flex-col  justify-center  space-y-2">

                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/locate.png"
                      alt="Location Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      Thirukovilur Mian Road,
                      Thirukovilur – 605757
                    </p>
                  </div>


                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/Ringer.png"
                      alt="Phone Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      +91 7010051075; +91 4146 355730
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img
                      src="/assets/Images/Contact/Let.png"
                      alt="Email Icon"
                      className="w-6 h-6 mr-3"
                    />
                    <p className=" md:text-lg text-sm text-gray-800">
                      Valluvasvpm@Gmail.Com
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </section>
      <div className='my-5'>


        <p className="text-center text-[#025450] md:text-xl mb-3 ">Get In Touch</p>
        <div className="flex justify-center md:px-0 px-5">
          <div className="inline-flex items-center rounded-full overflow-hidden">
            <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
              ANY MORE QUESTIONS ?
            </div>
            <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
              FILL IN THE FORM NOW
            </div>
          </div>
        </div>
      </div>



      <section className="max-w-[87rem] px-5 mx-auto mb-10">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1   mx-auto items-center  border border-gray-200 rounded-lg  bg-[#025450]   shadow-md ">

            <div className=" ">
              <div className="  rounded-lg">
                <img
                  src="/assets/Images/Contact/Grou.png"
                  alt="Bharathidasan University Logo"
                  className="mx-auto"
                />
              </div>
            </div>


            <form className=' py-5rounded-lg  max-w-[35rem] w-full  lg:my-0 my-5 mx-auto'>


              <div className='px-5 space-y-4 '>

                <p className=" text-[#f4e316] text-2xl font-bold">GET FREE COUNSELING</p>
                <div>
                  <label className=' text-white '>
                    Name *
                  </label>
                  <input type="text" placeholder='Enter Full Name' className='w-full p-2 rounded-md' />
                </div>
                <div>
                  <label className=' text-white '>
                    Mobile No *
                  </label>
                  <input type="text" placeholder='Enter Your Whatsapp No' className='w-full p-2 rounded-md' />
                </div>
                <div>

                  <label className=' text-white '>
                    Email *
                  </label>
                  <input type="text" placeholder='Enter Your Mail' className='w-full p-2 rounded-md ' />
                </div>
                <div className=" mx-auto space-y-4 h-32">
                  <div>


                    <label className='text-white'>  Select Course *</label>
                    <select
                      id="course-level"
                      value={courseLevel}
                      onChange={handleLevelChange}
                      className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="" disabled>
                        Select Course Level
                      </option>
                      <option value="UG">UG</option>
                      <option value="PG">PG</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>

                  {courseLevel && (
                    <select
                      id="course"
                      value={selectedCourse}
                      onChange={handleCourseChange}
                      className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="" disabled>
                        Select a Course
                      </option>
                      {coursesData[courseLevel].map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  )}


                </div>
                <div>
                  <label className=' text-white '>
                    Message *
                  </label>
                  <textarea rows={4} type="text" placeholder='Enter Your Requirements' className='w-full p-2  rounded-md' />
                </div>



                <div className='text-center'>


                  <button className='p-2 px-3 rounded-3xl font-bold  hover:bg-white  hover:text-[#f4e316] bg-[#f4e316] text-[#025450] '>
                    Enquiry Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs

