import CustomButton from '../../../components/CustomButton';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { useCreateUserApi, useFetchUserApi } from '../api/dashboardApis';
import { ICreateUserRequestBody } from '../dashboard.types';

const DashBoard = () => {
	const { data, error, isLoading } = useFetchUserApi();
	const { data: createUserRes, trigger: createUserTrigger, isMutating: isCreateUserApiLoading } = useCreateUserApi();

	const handleAPICall = async () => {
		const dataToSend: ICreateUserRequestBody = {
			firstName: 'karan siddhu',
			lastName: 'siddhu',
			age: 12
		};
		await createUserTrigger(dataToSend);
	};

	const renderScreenData = () => {
		// Tips: use skeleton
		if (isLoading) return <h1>loading</h1>;

		// Handle error
		if (error) return <h1>error: {error}</h1>;

		if (!data) return <h1>no data</h1>;

		return (
			<>
				<h1>Data found:</h1>

				<h1>total: {data?.total}</h1>

				<CustomButton onPress={handleAPICall}>API CALL ON BUTTON - Creating a dummy user</CustomButton>

				{isCreateUserApiLoading && <p>loading API</p>}

				{!isCreateUserApiLoading && createUserRes && <p>{JSON.stringify(createUserRes, null, 2)}</p>}
			</>
		);
	};

	return <ScreenWrapper>{renderScreenData()}</ScreenWrapper>;
};

export default DashBoard;
