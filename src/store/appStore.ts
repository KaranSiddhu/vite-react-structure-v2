import { create } from 'zustand';
import { IUser } from '../modules/dashboard/dashboard.types';

interface IAppState {
	authenticatedUser: IUser | undefined;
	setAuthenticatedUser: (user: IUser | undefined) => void;
	isUserLoggedIn: boolean;
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
}

const useAppStore = create<IAppState>(set => ({
	authenticatedUser: undefined,
	setAuthenticatedUser: (user: IUser | undefined) => set({ authenticatedUser: user }),
	isUserLoggedIn: false,
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => set({ isUserLoggedIn })
}));

export default useAppStore;
