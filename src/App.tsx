import Routes from './Routes';
import { NextUIProvider } from '@nextui-org/react';

const App = () => {
	return (
		<NextUIProvider>
			<Routes />
		</NextUIProvider>
	);
};

export default App;
