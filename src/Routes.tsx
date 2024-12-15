import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router';
import DashBoard from './modules/dashboard/pages/Dashboard';
import ComponentExamples from './modules/appComponentExamples/ComponentExamples';

const Routes = () => {
	return (
		<BrowserRouter>
			<AppRoutes>
				<Route path="/" element={<DashBoard />} />
				<Route path="/components" element={<ComponentExamples />} />
			</AppRoutes>
		</BrowserRouter>
	);
};

export default Routes;
