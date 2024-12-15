import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const AuthLoading = () => {
	// This is the first screen where our user will land route "/" and will help to maintain a proper authentication flow
	const navigate = useNavigate();

	useEffect(() => {
		const getAppData = async () => {
			// force delay for 1.5 seconds replace with BE API
			await new Promise(resolve => setTimeout(resolve, 1500));

			navigate('/app/dashboard');
		};

		getAppData();
	}, [navigate]);

	return <div>AuthLoading</div>;
};

export default AuthLoading;
