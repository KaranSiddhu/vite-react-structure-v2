import { useNavigate } from 'react-router';
import CustomButton from '../../../components/CustomButton';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { ICreateUserRequestBody } from '../dashboard.types';
import { useCreateUserApi, useFetchUserApi } from '../dashboard.apis';
import useAppStore from '../../../store/appStore';

const DashBoard = () => {
	const navigate = useNavigate();

	const authenticatedUser = useAppStore(state => state.authenticatedUser);

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

				<h1>Total User Fetched: {data?.total}</h1>

				<CustomButton onPress={handleAPICall}>API CALL ON BUTTON - Creating a dummy user</CustomButton>

				{isCreateUserApiLoading && <p>loading API</p>}

				{!isCreateUserApiLoading && createUserRes && <p>{JSON.stringify(createUserRes, null, 2)}</p>}
			</div>
		);
	};

	return (
		<ScreenWrapper>
			<CustomButton onPress={() => navigate('/app/components')}>Go to components examples</CustomButton>

			{renderScreenData()}

			<div className="flex flex-col">
				<CustomButton onPress={mutate} isLoading={isLoading || isValidating} className="mt-12">
					call GET ALL USER AGAIN
				</CustomButton>

				<CustomButton onPress={() => navigate('/app/profile/1')} className="mt-12">
					Navigate to profile screen
				</CustomButton>
			</div>

			{authenticatedUser && (
				<div>
					This DATA is coming from Global state zustand:
					<h1>{JSON.stringify(authenticatedUser, null, 2)}</h1>
				</div>
			)}
		</ScreenWrapper>
	);
};

export default DashBoard;
