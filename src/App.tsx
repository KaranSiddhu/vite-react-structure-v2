import Routes from './Routes';
import { NextUIProvider } from '@nextui-org/react';
import SwrApiProvider from './context/SwrApiProvider';
import { HttpContextProvider } from './context/HttpContextProvider';

const App = () => {
	return (
		<NextUIProvider>
			<HttpContextProvider>
				<SwrApiProvider>
					<Routes />
				</SwrApiProvider>
			</HttpContextProvider>
		</NextUIProvider>
	);
};

export default App;
