import UserManagement from './UserManagement';
import PromptHistory from '../PromptHistory';

const AdminDashboard = () => {


    return (
        <div className="admin-controls">
            <UserManagement />
            <PromptHistory isAdmin={true} />
        </div>
    );
};

export default AdminDashboard;

