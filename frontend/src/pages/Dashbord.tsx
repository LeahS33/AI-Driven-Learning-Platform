import { useAppSelector } from '../store/hooks.ts';
import AdminDashboard from '../components/AdminControls/index.tsx';
import UserDashboard from '../components/UserDashboard/index.tsx';
import type { IUser } from '../types.ts';
import '../styles/Dashboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();
    const user = useAppSelector(state => state.user.user) as IUser | null;
    const isAdmin = user?.isAdmin ?? false;

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
    }, [user, navigate]);

    if (!user) return null;

    return (
        <div className="dashboard-container">
            <nav className="dashboard-navbar">
                <a href="#user-section" className="dashboard-link">User Dashboard</a>
                {isAdmin && (
                    <a href="#admin-section" className="dashboard-link">Admin Dashboard</a>
                )}
            </nav>

            <div id="user-section">
                <UserDashboard />
            </div>
            {isAdmin && (
                <div id="admin-section" className="admin-section">
                    <AdminDashboard />
                </div>
            )}
            <div className="logout-container">
                <Link className="logout-link" to="/login">
                    Logout
                </Link>

            </div>

        </div>
    );
};

export default Dashboard;