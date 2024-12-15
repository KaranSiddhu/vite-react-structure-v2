import useSWR from 'swr';
import { IUser } from '../dashboard/dashboard.types';
import useAppStore from '../../store/appStore';

export const useFetchUserByIdApi = (id: string) => {
	const setAuthenticatedUser = useAppStore(state => state.setAuthenticatedUser);
	const response = useSWR<IUser>(`/users/${id}`);

	// validate response data using yup or store in context

	setAuthenticatedUser(response.data);

	return response;
};
