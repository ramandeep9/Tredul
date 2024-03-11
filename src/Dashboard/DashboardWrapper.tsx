// /frontend/src/components/Dashboard/DashboardWrapper.tsx
import React from 'react';
import EduHostDashboard from '../Dashboard/EduHostDashboard';
import EduTouristDashboard from '../Dashboard/EduTouristDashboard';

interface DashboardWrapperProps {
  userType: 'eduhost' | 'edutourist';
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ userType }) => {
  return (
    <div>
      {userType === 'eduhost' && <EduHostDashboard />}
      {userType === 'edutourist' && <EduTouristDashboard />}
    </div>
  );
};

export default DashboardWrapper;
