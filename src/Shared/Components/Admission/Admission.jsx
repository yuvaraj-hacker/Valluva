import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function Admission() {
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
        <div className='max-w-[90rem] mx-auto px-10 h-[20vh] items-center grid '>
          <div className='  md:text-5xl text-2xl text-white'>
            Admission
          </div>

        </div>

      </section>



      <section className="max-w-[87rem]   px-5 mx-auto text-center my-10">

        <p className="md:text-lg text-sm">Once you completed your three steps journey, let’s help us dive in through a simple submission process with the following steps.</p>
      </section>


      <section className='max-w-[87rem]  px-5 mx-auto'>


        <div className="space-y-5 my-5">

          <div>


            <p className="text-center text-[#025450] md:text-xl mb-3 ">Road To Success</p>
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full overflow-hidden">
                <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
                  THE THREE
                </div>
                <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
                  RULES
                </div>
              </div>
            </div>
          </div>
          <p className="text-center md:text-lg text-sm">We help you to dive into your academic journey in the three-step simple rule without any hassle and with the best support in the sector.</p>
        </div>


        <div className='grid lg:grid-cols-6 justify-center'>
          <div className='flex items-center col-span-2'>
            <p className="md:text-[150px] text-[100px]  font-bold text-gray-400">01</p>
            <div className='md:ml-0 ml-5'>
              <p className='text-[#025450] font-semibold'>
                Choose a University
              </p>
              <p className='text-sm'>
                Please choose from our wide
                range with an esteemed
                partner university.
              </p>
            </div>
          </div>
          <div className='flex items-center col-span-2'>
            <p className="md:text-[150px] text-[100px]  font-bold text-gray-400">02</p>
            <div className=''>
              <p className='text-[#025450] font-semibold'>
                Select a Course
              </p>
              <p className='text-sm'>
                Select from a spectrum
                of courses suitable
                to your need.
              </p>
            </div>
          </div>
          <div className='flex items-center col-span-2'>
            <p className="md:text-[150px] text-[100px]  font-bold text-gray-400">03</p>
            <div className=''>
              <p className='text-[#025450] font-semibold '>
                Enroll a Degree
              </p>
              <p className='text-sm'>
                Enroll your choice of
                course hassle-free
                with our support.
              </p>
            </div>
          </div>

        </div>
      </section>







      <section className='max-w-[87rem]  px-5 mx-auto my-10'>

        <section className="bg-blue-50 py-10 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#025450] mb-4">
              Admission Procedure for Degree
            </h2>
            <p className="text-gray-700 md:text-base text-sm">
              Kindly Follow the below Admission Procedure for Enrolling in our Distance Learning Degree Courses: Correspondence UG (Undergraduate Education) Programs, PG (Postgraduate education) Distance Education Degree Programs.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-10">
            <h3 className="text-lg md:text-xl font-semibold  mb-4">
              Distance Education Degree Programs
            </h3>
            <p className="text-gray-700 mb-4 md:text-base text-sm">
              You can chat with Valluva’s Experts with a click away. You can also submit your form or Submit your document in person.
            </p>
            <ul className="list-decimal ml-5 text-gray-700 space-y-2 md:text-base text-sm">
              <li>Filling out the Application Form</li>
              <li>10th Certificate Xerox 3 Copies.</li>
              <li>12th Certificate Xerox 3 Copies.</li>
              <li>Degree Marks Cards + Provisional + Convocation (For PG).</li>
              <li>Degree & PG Marks Cards + Provisional + 6) 7 Passport Size Photographs.</li>
              <li>Aadhaar and</li>
              <li>Cheque or DD (Demand Draft) should be Favouring or through UPI or NEFT</li>
            </ul>

            <h4 className="text-lg font-semibold  mt-8 mb-4">Note:</h4>
            <ul className="list-disc ml-5 text-gray-700 space-y-2 md:text-base text-sm">
              <li>75% of the Total Fees are To Be Paid At The Time Of Admission, Only DD & Cheques or NEFT or UPI are Accepted</li>
              <li>Admission Will Be Forwarded After the Realisation of the Cheque Only</li>
              <li>Post Dated Cheques Are Not Accepted / Taxes As Applicable</li>
              <li>Keep the Receipts Safely, Do Not Lose the Receipts, Fee Once Paid Will Not Be Refunded"</li>
            </ul>
          </div>
        </section>
      </section>



      <section className="max-w-[87rem]  px-5  space-y-5  mx-auto my-20">
        <div className="w-fit h-fit p-1 rounded-2xl mx-auto text-[#025450] px-5">
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
  )
}

export default Admission



