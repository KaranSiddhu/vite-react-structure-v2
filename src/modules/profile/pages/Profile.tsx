import { useNavigate, useParams } from 'react-router';
import { useFetchUserByIdApi } from '../profile.apis';
import ScreenWrapper from '../../../components/ScreenWrapper';
import CustomButton from '../../../components/CustomButton';

const Profile = () => {
	const navigate = useNavigate();
	const { id = '' } = useParams();

	const { data, error, isLoading, isValidating } = useFetchUserByIdApi(id);

	const renderScreenData = () => {
		// Tips: use skeleton
		if (isLoading || isValidating) return <h1>loading</h1>;

		// Handle error
		if (error) return <h1>error: {error}</h1>;

		if (!data) return <h1>no data</h1>;

		return (
			<div>
				<h1>Data found:</h1>

				<h1>{JSON.stringify(data, null, 2)}</h1>
			</div>
		);
	};

	return (
		<ScreenWrapper>
			<CustomButton onPress={() => navigate(-1)}>go back</CustomButton>

			{renderScreenData()}
		</ScreenWrapper>
	);
};

export default Profile;
