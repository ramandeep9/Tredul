// /frontend/src/pages/DashboardPage.tsx
import React, { useEffect, useState } from 'react';
import DashboardWrapper from '../Dashboard/DashboardWrapper';
// import authService from '../services/authService';

const DashboardPage: React.FC = () => {
  const [userType, setUserType] = useState<string>('');

//   useEffect(() => {
//     // Fetch user type from authentication service
//     // const user = authService.getCurrentUser();
//     setUserType(user?.type || '');
//   }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <DashboardWrapper userType={userType as 'eduhost' | 'edutourist'} />
    </div>
  );
};

export default DashboardPage;
