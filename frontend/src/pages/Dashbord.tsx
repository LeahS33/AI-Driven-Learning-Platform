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
            <div>
                <UserDashboard />
            </div>

            {isAdmin && (
                <div className="admin-section">
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