import { SWRConfig } from 'swr';
import { useHttpMethodContext } from './HttpContextProvider';

const SwrApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { get } = useHttpMethodContext();

	return <SWRConfig value={{ fetcher: get }}>{children}</SWRConfig>;
};

export default SwrApiProvider;
