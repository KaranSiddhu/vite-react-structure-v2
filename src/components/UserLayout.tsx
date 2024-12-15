import { Outlet } from 'react-router';

const UserLayout = () => {
	// This will help use to create a generic top nav/side nav or footer for the authenticated user

	return (
		<>
			<Outlet />
		</>
	);
};

export default UserLayout;
