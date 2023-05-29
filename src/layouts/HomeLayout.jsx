import { NavLink, Outlet } from 'react-router-dom';
import routes from '../routes/routes.json';

const HomeLayout = () => {
	return (
		<>
			<header>
				<h1>Component Life Cycle</h1>
				<nav>
					<NavLink
						className={({ isActive }) => (isActive ? 'active link' : 'link')}
						to={routes.HOME}
					>
						Mounting
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? 'active link' : 'link')}
						to={routes.UPDATING}
					>
						Updating
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? 'active link' : 'link')}
						to={routes.UNMOUNTING}
					>
						Unmounting
					</NavLink>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</>
	);
};
export default HomeLayout;
