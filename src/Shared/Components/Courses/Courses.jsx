import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';



function Courses() {
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
          <div className="  md:text-5xl text-2xl text-white">Courses</div>
        </div>
      </section>


      <section className="max-w-[87rem]  space-y-4 px-5 mx-auto text-center lg:mt-10" >
        <p className="md:text-4xl text-2xl text-[#025450]">Programs that are prepared for the future</p>
        <p className="">Our programs offer complete educational experiences that help students acquire and improve skill sets that may be applied to a variety of career roles.</p>
      </section>

      






      <section className="max-w-[87rem]  px-5 mx-auto my-10">
        <div className="space-y-5 my-5">


          <p className="text-center md:text-4xl text-2xl text-[#025450]">Programmes Offered</p>
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full overflow-hidden">
              <div className="bg-[#FFC906] text-[#025450] px-4 py-2 text-sm font-bold">
                UG
              </div>
              <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
                PROGRAMMES
              </div>
            </div>
          </div>

          <p className="text-center">Duration for B.A, B. Lit, B.Sc, B.B.A, B.Com, Programmes : 3 Years</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-700 text-white">
                <th className="border border-gray-300 px-4 py-2 text-center">
                  SL. No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name of the Programme
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Medium
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody>

              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2">B.A. Tamil</td>
                <td className="border border-gray-300 px-4 py-2">Tamil</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in 10 + 2 with Tamil as a Language paper for B.A Tamil.
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  2
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.Lit. Tamil
                </td>
                <td className="border border-gray-300 px-4 py-2">Tamil</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in 10 + 2 with Tamil as a Language paper for B.Lit
                  Tamil.
                </td>
              </tr>


              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  3
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.A. Economics
                </td>
                <td className="border border-gray-300 px-4 py-2">Tamil</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in Higher Secondary Examination (10+2).
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  4
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.A. English
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in Higher Secondary Examination (10+2).
                </td>
              </tr>


              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  5
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.A. History
                </td>
                <td className="border border-gray-300 px-4 py-2">Tamil</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in Higher Secondary Examination (10+2).
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  6
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.A. Public Administration
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in Higher Secondary Examination (10+2).
                </td>
              </tr>

              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  7
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.A. Political Science
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in Higher Secondary Examination (10+2).
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  8
                </td>
                <td className="border border-gray-300 px-4 py-2">B.B.A.</td>
                <td className="border border-gray-300 px-4 py-2">
                  Tamil & English
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Eligibility for B.B.A, B.Com., Computer Applications... (as
                  seen in the image)
                </td>
              </tr>


              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  9
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.Sc. Mathematics
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Tamil & English
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in the Higher Secondary Examination (10 + 2) with
                  Mathematics as one of the core subjects.
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  10
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B.Sc. Computer Science
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                  A pass in the Higher Secondary Examination (10 + 2) with
                  Computer Science or Mathematics as one of the core subjects.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>




      <section className="max-w-[87rem]  px-5 mx-auto my-10">
        <div className="space-y-5 my-5">


        
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full overflow-hidden">
              <div className="bg-[#FFC906] text-[#025450] px-4 py-2 text-sm font-bold">
                PG
              </div>
              <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
                PROGRAMMES
              </div>
            </div>
          </div>

          <p className="text-center">Duration for B.A, B. Lit, B.Sc, B.B.A, B.Com, Programmes : 3 Years</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-700 text-white">
                <th className="border border-gray-300 px-4 py-2 text-center">
                  SL. No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name of the Programme
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Medium
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody>

              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2">M.A. Economics</td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                B.A. Economics / Econometrics.
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  2
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.A. English
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                A pass in B.A. English Literature (or) and degree with English as part II Language.
                </td>
              </tr>


              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  3
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.A. Tamil
                </td>
                <td className="border border-gray-300 px-4 py-2">Tamil</td>
                <td className="border border-gray-300 px-4 py-2">
                A pass in B.A. Tamil / B.Lit. B.A. Applied Tamil / Pulavar Degree (or) any Degree with Tamil as part I language.
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  4
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.A. History
                </td>
                <td className="border border-gray-300 px-4 py-2">Tamil &
                English</td>
                <td className="border border-gray-300 px-4 py-2">
                Any UG Degree.
                </td>
              </tr>


              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  5
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.A. Political Science
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                Any UG Degree.
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  6
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.A. Public Administration
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                Any UG Degree.
                </td>
              </tr>

              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  7
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.Sc. Mathematics
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                B.Sc. Mathematics.
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  8
                </td>
                <td className="border border-gray-300 px-4 py-2">M.Sc. Computer  Science.</td>
                <td className="border border-gray-300 px-4 py-2">
                   English
                </td>
                <td className="border border-gray-300 px-4 py-2">
                B.Sc. Computer Science / B.Sc. I.T./B.C.A./Software Development (or) Any other degree equivalent accepted
                by the Syndicate.
                </td>
              </tr>


              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  9
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.Com.
                </td>
                <td className="border border-gray-300 px-4 py-2">
                   English
                </td>
                <td className="border border-gray-300 px-4 py-2">
                A pass in B.Com. / Bank Management / Computer Applications / Financial Management / B.Com. (Applied)
                / Co-operation / B.B.A. and other related programmes equivalent to B.Com.
                </td>
              </tr>


              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  10
                </td>
                <td className="border border-gray-300 px-4 py-2">
                M.B.A
                </td>
                <td className="border border-gray-300 px-4 py-2">English</td>
                <td className="border border-gray-300 px-4 py-2">
                Any UG Degree.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default Courses;