import { Route, Routes } from 'react-router-dom';

import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import DefaultLayout from '../layout/DefaultLayout';
import DetailMovie from '../containers/DetailMovie';
import DetailSerie from '../containers/DetailSerie';

function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/filmes" element={<Movies />} />
				<Route path="/series" element={<Series />} />
				<Route path="/filme/:id" element={<DetailMovie />} />
				<Route path="/serie/:id" element={<DetailSerie />} />
			</Route>
		</Routes>
	);
}

export default Router;
