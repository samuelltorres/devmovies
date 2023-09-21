/* eslint-disable react/prop-types */
import { Container } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Slider({ info, title }) {
	return (
		<Container>
			<h2>{title}</h2>
			<Swiper
				grabCursor
				spaceBetween={20}
				slidesPerView={'auto'}
				pagination={{
					dynamicBullets: true
				}}
				modules={[Pagination]}
				className="swiper"
			>
				{info.map((item, index) => (
					<SwiperSlide key={index}>
						<Card item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

export default Slider;
