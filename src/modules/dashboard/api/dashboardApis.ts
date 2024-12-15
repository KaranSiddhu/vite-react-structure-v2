// This hook will hold all the API that will be used in Dashboard
// Remove the dummy data when starting actual development
import useSWR from 'swr';
import { ICreateUserRequestBody, IUser, IBulkUserResponse } from '../dashboard.types';
import useSWRMutation from 'swr/mutation';
import { useHttpMethodContext } from '../../../context/HttpContextProvider';
import { ISwrMutationOptions } from '../../../types/common';

export const useFetchUserApi = () => {
	const response = useSWR<IBulkUserResponse>('/users');

	// validate response data using yup or store in context

	return response;
};

export const useCreateUserApi = () => {
	const { post } = useHttpMethodContext();
	const { mutate } = useFetchUserApi();

	const createUser = async (url: string, swrOption: ISwrMutationOptions<ICreateUserRequestBody>): Promise<IUser> => {
		const data = await post<IUser>(url, swrOption.arg);

		// validate response data

		return data;
	};

	return useSWRMutation(`/users/add`, createUser, {
		onSuccess: () => mutate()
	});
};
