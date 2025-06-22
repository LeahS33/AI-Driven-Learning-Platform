import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import type { IUser } from '../../types';
import { fetchUsers, deleteUser, giveAdminAccess  } from '../../store/thunks/adminThunks';

const UserManagement = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { users, status, error } = useAppSelector(state => state.admin);
    const user = useAppSelector(state => state.user.user) as IUser | null;
    const isAdmin = user?.isAdmin ?? false;

    useEffect(() => {
        if (!isAdmin) {
            navigate('/login');
            return;
        }
        dispatch(fetchUsers());
    }, [isAdmin, dispatch, navigate]);

    const handleDeleteUser = async (userId: string) => {
        try {
            await dispatch(deleteUser(userId)).unwrap();
            await dispatch(fetchUsers());
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    }

    const handleGiveAdminAccess = async (userId: string) => {
        try {
            await dispatch(giveAdminAccess(userId)).unwrap();
            alert(`Admin access granted to user with ID: ${userId}`);
            await dispatch(fetchUsers());
        } catch (error: Error | any) {
            console.error('Failed to give admin access:', error);
            alert('Failed to give admin access: ' + error.message);
        }
    };
    
    return (
        <div className="admin-section">
            <div className="welcome-section">
                <h1>Admin Dashboard</h1>
            </div>
            <h2 className="section-title">Users</h2>
            <div className="users-grid">
                {status === 'loading' && <div className="loading">Loading Users...</div>}
                {error && <div className="error">{error}</div>}
                {users.map(user => (
                    <div key={user._id} className="user-card">
                        <h3>{user.name}</h3>
                        <p>Phone: {user.phone}</p>
                        <span className={`status-badge ${user.isAdmin ? 'status-admin' : 'status-user'}`}>
                            {user.isAdmin ? 'Admin' : 'User'}
                        </span>
                        <div className="user-actions">
                            <button className="btn btn-delete" onClick={() => handleDeleteUser(user._id)}                            >
                                Delete
                            </button>
                            {!user.isAdmin && (
                                <button className="btn btn-promote" onClick={() => handleGiveAdminAccess(user._id)}                               >
                                    Make Admin
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="prompts-section"></div>
        </div>
    )
}

export default UserManagement;