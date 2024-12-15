import { createContext, useContext } from 'react';
import envConfig from '../config/env.config';
import axios from 'axios';

// HttpContextProvider;

interface IHttpContextProviderType {
	get: <RT>(endpoints: string) => Promise<RT>;
	post: <RT>(endpoints: string, requestBody: object | Array<object>) => Promise<RT>;
}

export const HttpContext = createContext<IHttpContextProviderType | undefined>(undefined);

const AxiosService = axios.create({
	baseURL: envConfig.API_BASE_URL
});

export const HttpContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	AxiosService.defaults.headers.common.Accept = 'application/json';
	AxiosService.defaults.headers.common['Content-Type'] = 'application/json';

	// TODO: add API token from axiosInstance
	const attachToken = async () => {};

	// This will mostly be use by useSWR
	const get = async <RT,>(endpoints: string): Promise<RT> => {
		await attachToken();

		const { data } = await AxiosService.get(endpoints);

		return data;
	};

	// Rest other post, put, deleteMe endpoints are for useSWRMutation
	const post = async <RT,>(endpoints: string, requestBody: object | Array<object>, headers = {}): Promise<RT> => {
		await attachToken();

		const { data } = await AxiosService.post(endpoints, requestBody, { headers });

		return data;
	};

	return <HttpContext.Provider value={{ get, post }}>{children}</HttpContext.Provider>;
};

export const useHttpMethodContext = () => {
	const context = useContext(HttpContext);

	if (!context) {
		throw new Error('useHttpMethodContext must be used within a UserProvider');
	}

	return context;
};
