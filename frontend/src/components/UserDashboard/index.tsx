import { useAppSelector } from '../../store/hooks';
import type { IUser } from '../../types';
import PromptHistory from '../PromptHistory';
import CategorySelector from './CategorySelector';
import PromptInput from './PromptInput';


const UserDashboard = () => {
    const user = useAppSelector(state => state.user.user) as IUser | null;

    return (
        <div className="dashboard-container">
            <div className="user-dashboard">
                <div className="welcome-section">
                    <h1>Welcome {user?.name}!</h1>
                </div>
                <div className="promopt-input-section">
                    <h2 className="section-title">Prompt Input</h2>
                    <CategorySelector />
                    <PromptInput />
                </div>
                <div className="history-section">
                    <PromptHistory />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;