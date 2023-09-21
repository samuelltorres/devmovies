import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 20px;

	h2 {
		text-align: center;
		color: #f7f7f7;
		font-size: 1.6rem;
		margin: 50px 0 20px 20px;
	}

	.swiper-wrapper {
		display: flex;
	}

	.swiper-slide {
		width: 250px;
	}

	.swiper-pagination-bullet {
		background: #b2b2b2;
	}

	.swiper-pagination-bullet-active {
		background: #900;
	}
`;
