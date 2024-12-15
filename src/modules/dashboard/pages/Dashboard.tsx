import { useNavigate } from 'react-router';
import CustomButton from '../../../components/CustomButton';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { useCreateUserApi, useFetchUserApi } from '../api/dashboardApis';
import { ICreateUserRequestBody } from '../dashboard.types';

const DashBoard = () => {
	const navigate = useNavigate();
	const { data, error, isLoading, mutate, isValidating } = useFetchUserApi();
	const {
		data: createUserRes,
		trigger: createUserTrigger,
		isMutating: isCreateUserApiLoading,
		reset: resetCreateUserState
	} = useCreateUserApi();

	const handleAPICall = async () => {
		const dataToSend: ICreateUserRequestBody = {
			firstName: 'karan siddhu 2',
			lastName: 'siddhu',
			age: 12
		};

		resetCreateUserState();

		await createUserTrigger(dataToSend);
	};

	const renderScreenData = () => {
		// Tips: use skeleton
		if (isLoading || isValidating) return <h1>loading</h1>;

		// Handle error
		if (error) return <h1>error: {error}</h1>;

		if (!data) return <h1>no data</h1>;

		return (
			<div>
				<h1>Data found:</h1>

				<h1>total: {data?.total}</h1>

				<CustomButton onPress={handleAPICall}>API CALL ON BUTTON - Creating a dummy user</CustomButton>

				{isCreateUserApiLoading && <p>loading API</p>}

				{!isCreateUserApiLoading && createUserRes && <p>{JSON.stringify(createUserRes, null, 2)}</p>}
			</div>
		);
	};

	return (
		<ScreenWrapper>
			<CustomButton onPress={() => navigate('/components')}>Go to components examples</CustomButton>

			{renderScreenData()}

			<CustomButton onPress={mutate} isLoading={isLoading || isValidating} className="mt-12">
				call GET ALL USER AGAIN
			</CustomButton>
		</ScreenWrapper>
	);
};

export default DashBoard;
