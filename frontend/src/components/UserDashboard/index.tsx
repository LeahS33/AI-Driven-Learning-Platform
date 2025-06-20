import { useAppSelector } from '../../store/hooks';
import type { IUser } from '../../types';
import PromptHistory from './LearningHistory';


const UserDashboard = () => {
    const user = useAppSelector(state => state.user.user) as IUser | null;

    return (
        <div className="dashboard-container">
            <div className="user-dashboard">
                <div className="welcome-section">
                    <h1>Welcome {user?.name}!</h1>
                </div>
                <div className="learning-section">
                    <h2 className="section-title">Your Learning Journey</h2>
                    {/* Learning categories and prompts */}
                     {/*or Learning cards */}
                </div>
                <div className="history-section">
                    <h2 className="section-title">Learning History</h2>
                    <PromptHistory />
                </div>
                <div className="promopt-input-section">
                    <h2 className="section-title">Prompt Input</h2>
                    {/* User's prompt input */}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;