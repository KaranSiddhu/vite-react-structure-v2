import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router';
import DashBoard from './modules/dashboard/pages/Dashboard';
import ComponentExamples from './modules/appComponentExamples/ComponentExamples';
import ProtectedRoute from './components/ProtectedRoute';
import UserLayout from './components/UserLayout';
import AuthLoading from './components/AuthLoading';
import NotFound from './components/NotFound';
import Profile from './modules/profile/pages/Profile';

const Routes = () => {
	return (
		<BrowserRouter>
			<AppRoutes>
				<Route path="/" element={<AuthLoading />} />

				<Route
					path="/app"
					element={
						<ProtectedRoute>
							<UserLayout />
						</ProtectedRoute>
					}
				>
					<Route path="dashboard" element={<DashBoard />} />
					<Route path="profile/:id" element={<Profile />} />
					<Route path="components" element={<ComponentExamples />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</AppRoutes>
		</BrowserRouter>
	);
};

export default Routes;
