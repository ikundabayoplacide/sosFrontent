import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>📅 AppointEase</h2>
        <button className="outline" onClick={handleLogout}>Logout</button>
      </div>
      <div className="dashboard-body">
        <h3>Welcome to your Dashboard!</h3>
        <p>You are successfully logged in. Your appointments will appear here.</p>
      </div>
    </div>
  );
}
