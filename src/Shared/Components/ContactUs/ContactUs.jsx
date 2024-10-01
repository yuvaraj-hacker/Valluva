import React from 'react'

function ContactUs() {
  return (

    <>
      <section className="bg-[url('/assets/Images/Header/Group-3.png')]  bg-no-repeat  bg-cover bg-center  h-[20vh] my-8 ">
        <div className='max-w-[90rem] mx-auto px-10 h-[20vh] items-center grid '>
          <div className=' md:text-5xl text-2xl text-white'>
            Contact Us
          </div>

        </div>

      </section>



      {/* <section>
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-full flex-wrap overflow-hidden">
            <div className="bg-[#FFC906] md:text-base text-sm text-[#025450] px-4 py-2  font-bold">
              VALLUVA'S
            </div>
            <div className="bg-[#025450] md:text-base  text-white px-4 py-2 text-sm font-bold">
              STUDY CENTER LOCATIONS
            </div>
          </div>
        </div>




        <div className='my-32  flex max-w-[90rem] mx-auto px-10 '>
          <p className="p-2 col-span-1 text-white bg-[#032E3F] w-fit -rotate-90  text-4xl">VILLUPURAM</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.551364781132!2d79.4827301757457!3d11.936278536729121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53569133712e0d%3A0x901a813cd106dc17!2sValluvas%20Distance%20Education%20Study%20Centre!5e0!3m2!1sen!2sin!4v1727785322194!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </section>


 */}














      <div className='my-5'>


        <p className="text-center text-[#025450] md:text-xl mb-3 ">Get In Touch</p>
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-full overflow-hidden">
            <div className="bg-[#FFC906] text-[#025450] px-4 py-2 text-sm font-bold">
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
                  src="/assets/Images/sign/contact.png"
                  alt="Bharathidasan University Logo"
                  className="mx-auto"
                />
              </div>
            </div>


            <form className=' py-5 my-6 rounded-lg  '>


              <div className='px-5 space-y-6 '>

                <p className=" text-[#FFC906] text-2xl font-bold">GET FREE COUNSELING</p>
                <div>
                  <label className=' text-white '>
                    Name *
                  </label>
                  <input type="text" placeholder='Enter Full Name' className='w-full p-2 ' />
                </div>
                <div>
                  <label className=' text-white '>
                    Mobile No *
                  </label>
                  <input type="text" placeholder='Enter Your Whatsapp No' className='w-full p-2 ' />
                </div>
                <div>
                  <label className=' text-white '>
                    select Course *
                  </label>
                  <input type="text" placeholder='Choose Course' className='w-full p-2 ' />
                </div>
                <div>
                  <label className=' text-white '>
                    Message *
                  </label>
                  <input type="text" placeholder='Enter Your Requirements' className='w-full p-2 ' />
                </div>

                <div>

                  <label className=' text-white '>
                    Email *
                  </label>
                  <input type="text" placeholder='Enter Your Mail' className='w-full p-2 ' />
                </div>

                <div className=''>


                  <button className='p-2 px-3 rounded-3xl font-bold   bg-[#FFC906] text-[#025450] '>
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

