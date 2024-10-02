import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function MainContent() {


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
      <section className='max-w-[90rem] mx-auto md:my-20'>
        <div className='space-y-5 '>


          <div className='w-fit h-fit p-1 rounded-2xl bg-[#025450] mx-auto text-white px-5'>
            <p >Learn & Get a Degree from</p>
          </div>

          <p className="md:text-5xl text-2xl text-[#FFC906] text-center font-bold ">Our University Partners</p>
        </div>

        <div className=' mx-auto mt-10'>
          <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 my-5 px-5'>
            <Link to='course'>
              <div className='relative border p-2 border-[#FFC906] hover:border-none rounded-xl hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>


                <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>


                <img className='mx-auto' src="/assets/Images/Header/image (3).png" alt="university1" />

                <div className='space-y-2 my-5'>
                  <p className="text-center group-hover:text-white lg:text-xl text-[#025450] font-bold">
                    Bharathidasan University,<br/> Trichy
                  </p>
                  <p className="text-center group-hover:text-white">
                    B.A, B.Com, BCA, B.Sc, M.A, M.Com, M.B.A, Executive -M.B.A, M.C.A, M.Sc
                  </p>
                </div>

                <div className='flex gap-3 justify-end'>
                  <p className="text-[#025450] group-hover:text-white">
                    Select Course
                  </p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>

            <Link to='course'>
              <div className='border relative p-2 border-[#FFC906] hover:border-none rounded-xl hover:text-white group hover:bg-[#025450]  hover:scale-110 duration-200 hover:cursor-pointer'>

              <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (4).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] group-hover:text-white lg:text-xl font-bold">Madras University,<br/>
                    Chennai</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>

            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#FFC906] rounded-xl hover:border-none hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>
              <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (5).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] lg:text-xl group-hover:text-white font-bold">Alagappa University,<br/>
                    Karaikudiy</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#FFC906] rounded-xl hover:border-none hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer' >
              <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (6).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] lg:text-xl group-hover:text-white font-bold">Manonmaniam Sundaranar
                    University,<br/> Tirunelveli</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#FFC906] rounded-xl hover:border-none hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>
              <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (7).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] lg:text-xl group-hover:text-white font-bold">Tamilnadu Open University,<br/>
                    Chennai</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#FFC906] rounded-xl hover:border-none hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>
              <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (8).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450]  lg:text-xl group-hover:text-white font-bold">ISBM University,<br/>
                    Chhattisgarh</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>








      <section className='max-w-[90rem] mx-auto space-y-5 md:my-20 my-10'>
        <div className='w-fit h-fit p-1 rounded-2xl bg-[#FFC906] mx-auto text-black px-5'>
          <p >Why Choose Us</p>
        </div>


        <p className="2xl:text-9xl md:text-5xl text-3xl font-bold text-center anton  text-[#025450]  px-5">Recognized & Accredited</p>

        <div className='flex justify-center flex-wrap gap-4'>


          <img className='h-52' src="/assets/Images/Header/spo1 (1).png" alt="" />
          <img className='h-56' src="/assets/Images/Header/spo1 (2).png" alt="" />
          <img className='h-52' src="/assets/Images/Header/spo1 (3).png" alt="" />
        </div>
      </section>



      <div className=' w-full bg-[#025450]'>
        <section className='max-w-[60rem] mx-auto md:space-y-5 space-y-3 py-10 px-5'>


          <div className='w-fit h-fit p-1 rounded-2xl bg-[#FFC906] mx-auto text-black px-5'>
            <p >Connect With Us</p>
          </div>


          <p className="text-2xl font-bold text-center  text-[#FFC906]  ">Talk To Our Expert</p>
          <p className="lg:text-7xl text-2xl font-bold text-center   text-white  ">Admissions Are Open</p>

          <p className='text-center text-xl text-[#FFC906] '>Join Now 2023-24</p>
          <div className='text-center flex gap-2 justify-center items-center'>

            <img src="/assets/Images/Header/WhatsApp.png" alt="" />
            <p className="text-white md:text-base text-sm">+91 7010051075</p>
          </div>
          <div className='flex gap-2 justify-center items-center '>
            <img src="/assets/Images/Header/Ringer Volume (2).png" alt="" />
            <p className="text-white md:text-base text-sm">+91 7010051075 / 04146 355730</p>
          </div>
          <p className='text-center text-[#FFC906] md:text-base text-sm'>“Empower your future with expert guidance! Let us, the premier distance education center, be your
            partner in discovering The perfect career path, course, and college for you.”</p>












        </section>
        <section className='max-w-[110rem]  mx-auto'>
          <div className='flex justify-center gap-10 items-center px-5'>


            <form className='w-[40rem]  py-5 my-6 rounded-lg bg-[#FFC906] '>
              <p className="text-center text-[#025450] md:text-2xl font-bold md:mb-0 mb-3">GET FREE COUNSELING</p>

              <div className='px-5 space-y-6 '>


                <div>
                  <label className=' text-[#025450] '>
                    Name *
                  </label>
                  <input type="text" placeholder='Enter Full Name' className='w-full p-2 rounded-md' />
                </div>
                <div>
                  <label className=' text-[#025450] '>
                    Mobile No *
                  </label>
                  <input type="text" placeholder='Enter Your Whatsapp No' className='w-full p-2 rounded-md' />
                </div>
                <div>
                  <label className=' text-[#025450] '>
                    select Course *
                  </label>
                  <input type="text" placeholder='Choose Course' className='w-full p-2 rounded-md' />
                </div>
                <div>
                  <label className=' text-[#025450] '>
                    Message *
                  </label>
                  <input type="text" placeholder='Enter Your Requirements' className='w-full p-2 rounded-md' />
                </div>

                <div>

                  <label className=' text-[#025450] '>
                    Email *
                  </label>
                  <input type="text" placeholder='Enter Your Mail' className='w-full p-2 rounded-md' />
                </div>

                <div className='text-center'>


                  <button className='p-2 px-3 rounded-3xl font-bold bg-white  hover:text-[#FFC906] hover:bg-[#025450]   text-[#025450] '>
                    Enquiry Now
                  </button>
                </div>
              </div>
            </form>
            <div className='lg:block hidden '>
              <img src="/assets/Images/Header/abs.png" alt="contact" />
            </div>
          </div>
        </section>





      </div>


      <section className="max-w-[87rem]  px-5  space-y-5  mx-auto md:my-20 my-10 -z-40">
        <div className="w-fit h-fit p-1 rounded-2xl bg-[#FFC906] mx-auto text-black px-5">
          <p>Hear From Our</p>
        </div>
        <p className="text-3xl font-bold text-center text-[#025450]">Happy Students</p>
        <div className='my-5 relative'>


          <Swiper
            spaceBetween={30}
            slidesPerView={1}

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
                <div className="bg-[#FFF6D3] p-6 shadow-md  space-y-4 text-center rounded-3xl cursor-pointer">
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
      <div className='relative -top-[200px] -mb-64 lg:block hidden flex justify-center -z-20 items-center'>
        <img src="/assets/Images/About/test.png" alt="" className='w-full' />
      </div>
    </>
  )
}

export default MainContent



