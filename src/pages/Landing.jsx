import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <Navbar />
      <div className="hero">
        <h1>Manage Your Appointments <span>Effortlessly</span></h1>
        <p>Book, track, and manage all your appointments in one place. Simple, fast, and reliable.</p>
        <div className="btn-group">
          <button onClick={() => navigate('/register')}>Get Started</button>
          <button className="outline" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
}
