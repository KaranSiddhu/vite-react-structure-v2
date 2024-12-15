import React from 'react';

interface IScreenWrapperProps {
	children: React.ReactNode;
}

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({ children }) => {
	return (
		<div id="screen-parent" className="h-screen bg-screen-bg">
			{children}
		</div>
	);
};

export default ScreenWrapper;
