import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function University() {
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
      <section className="bg-[url('/assets/Images/Header/Group-3.png')]  bg-no-repeat  bg-cover bg-center  h-[20vh] my-8 ">
        <div className="max-w-[90rem] mx-auto px-10 h-[20vh] items-center grid ">
          <div className="  md:text-5xl text-2xl text-white">Universities</div>
        </div>
      </section>


      <section className="space-y-5">

        <section className="max-w-[87rem] px-5 mx-auto">
          <div>
            <div className="grid lg:grid-cols-9 grid-cols-1   mx-auto items-center  border border-gray-200 rounded-lg  bg-white  hover:bg-[#F0F7FF] shadow-md ">

              <div className=" col-span-2">
                <div className="  rounded-lg">
                  <img
                    src="/assets/Images/university/uni.png"
                    alt="Bharathidasan University Logo"
                    className="mx-auto"
                  />
                </div>
              </div>


              <div className=" col-span-7 px-5 text-justify my-5">
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


                <button className="mt-4 bg-[#025450] hover:bg-teal-600 text-white font-semibold py-2 px-4 md:text-base text-sm rounded-lg">
                  Programmes Offered
                </button>
              </div>
            </div>
          </div>
        </section>


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


                <button className="mt-4 bg-[#025450] hover:bg-teal-600 md:text-base text-sm text-white font-semibold py-2 px-4 rounded-lg">
                  Programmes Offered
                </button>
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


                <button className="mt-4 bg-[#025450] hover:bg-teal-600 md:text-base text-sm text-white font-semibold py-2 px-4 rounded-lg">
                  Programmes Offered
                </button>
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