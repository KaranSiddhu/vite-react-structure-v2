import React from 'react';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	// This will authenticate when a user navigates to /app/... and check if they are authenticated or not

	return <>{children}</>;
};

export default ProtectedRoute;
