import { Route, Routes } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Mounting from '../pages/Mounting';
import Unmounting from '../pages/Unmounting';
import Updating from '../pages/Updating';
import routes from './routes.json';

const PageRoutes = () => {
	return (
		<Routes>
			<Route
				path={routes.HOME}
				element={<HomeLayout />}
			>
				<Route
					index
					element={<Mounting />}
				/>
				<Route
					path={routes.UNMOUNTING}
					element={<Unmounting />}
				/>
				<Route
					path={routes.UPDATING}
					element={<Updating />}
				/>
			</Route>
		</Routes>
	);
};
export default PageRoutes;
