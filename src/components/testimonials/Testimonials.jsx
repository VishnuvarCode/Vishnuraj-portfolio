import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Hariharan",
			subtitle: "Python Developer @ Marlo",
			comment: "You worked at ACSASS as a full-stack developer. You were excellent and had a real eye for design. If there was ever a time where we had a complicated frontend or needed to know what the best CSS approach was for something - You were our goto man!",
		},
		{
			id: 2,
			image: Image3,
			title: "Shanavas",
			subtitle: "Software Developer @ HITACHI",
			comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials