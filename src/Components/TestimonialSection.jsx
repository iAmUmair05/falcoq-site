"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const testimonialsData = [
    {
        name: "Andrew Starc",
        position: "Client",
        avatarSrc: "/testimonial1.jpeg",
        rating: 5,
        comment: "FalCoQ Technologies transformed our digital presence! Their custom software development exceeded our expectations. The team's dedication to quality and innovation is commendable. Highly recommend their services."
    },
    {
        name: "jos Williams",
        position: "Client",
        avatarSrc: "/testimonial2.jpeg",
        rating: 4,
        comment: "Working with FalCoQ was a game-changer for our business. Their web design and development team brought our vision to life seamlessly. From start to finish, their professionalism and attention to detail were exceptional."
    },
    {
        name: "Dawson",
        position: "Client",
        avatarSrc: "/testimonial3.jpeg",
        rating: 5,
        comment: "FalCoQ Technologies delivered outstanding mobile applications for our company. Their expertise in mobile app development is unmatched. We're thrilled with the results and look forward to future collaborations."
    },
    {
        name: "Harrison",
        position: "Client",
        avatarSrc: "/testimonial4.jpeg",
        rating: 4,
        comment: "Choosing FalCoQ for social media marketing was one of the best decisions we made. Their strategies boosted our online presence and engagement significantly. Kudos to the team for their expertise and dedication!"
    },


];

const TestimonialSection = () => {

    return (

        <div className='bg-[#f1f5f9]'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,90.7C384,96,480,160,576,165.3C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <section className=' custom-container p-2 md:-my-16 -my-2'>
                <h1 className='dark-heading'>Testimonials</h1>
                <p className='text-para mt-2 text-center'>See what our clients say about us</p>

                <div className="w-[100%] sm:w-[90%]  overflow-hidden mx-auto sm:mt-20 mt-10 ">

                    <Swiper
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        effect={"coverflow"}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 100,
                            depth: 220,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        loop={true}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) =>
                                `<span class="${className}" style="background-color: #faa32f; width: 20px; height: 20px; border-radius: 50%; display: inline-block; margin: 0 4px;"></span>`,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 10 },
                            // 768: { slidesPerView: 2, spaceBetween: 20 },
                            // 1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        modules={[Pagination, EffectCoverflow]}
                        className="mySwiper"
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index} className="bg-white mb-20 mt-6">
                                {({ isActive }) => (
                                    <div className={`grid grid-cols-1 md:grid-col-2 justify-center items-center gap-12 py-5 rounded-lg shadow-lg ${isActive ? "border-2 border-redish" : ""} `}>
                                        <div className="mt-3 flex flex-col items-center">
                                            <Image src={testimonial.avatarSrc} alt={testimonial.name} width={100} height={100} className={`mb-4 w-30 h-30 text-large rounded-full ${isActive ? "border-8 p-1" : "border-2 p-0.5"} border-redish `} />
                                            <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal antialiased mb-1 text-dark">
                                                {testimonial.name}
                                            </h5>
                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={faStar} className='text-yellow-500' />
                                                ))}
                                                {[...Array(5 - testimonial.rating)].map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={faStar} className='text-gray-300' />
                                                ))}
                                            </div>
                                            <p className="font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                                                {testimonial.position}
                                            </p>
                                            <p className="font-sans text-base font-light leading-relaxed text-inherit antialiased mt-4 px-4 text-center text-para">
                                                &quot;{testimonial.comment}&quot;
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>


            </section>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,90.7C384,96,480,160,576,165.3C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </div>
    )
}

export default TestimonialSection;
