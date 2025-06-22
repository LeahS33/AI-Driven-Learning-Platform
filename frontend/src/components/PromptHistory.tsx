import { useEffect, useState } from "react";
import { getUserPrompts, getAllUsersPrompts } from "../store/thunks/promptThunks";
import { fetchUsers } from "../store/thunks/adminThunks";
import type { IPrompt, IUser } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import '../styles/PromptHistory.css'


const PromptHistory = ({ isAdmin = false }) => {
    const dispatch = useAppDispatch();
    const userPrompts = useAppSelector(state => state.prompt.currentUserPrompts);
    const allPrompts = useAppSelector(state => state.prompt.allPrompts);
    const allUsers = useAppSelector(state => state.admin.users);
    const user = useAppSelector(state => state.user.user) as IUser;
    const status = useAppSelector(state => state.prompt.status);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    useEffect(() => {
        if (isAdmin) {
            dispatch(getAllUsersPrompts());
            dispatch(fetchUsers());
        } else if (user?._id) {
            dispatch(getUserPrompts(user._id));
        }
    }, [dispatch, user, isAdmin]);

    const prompts = isAdmin ? allPrompts : userPrompts;
    const filteredPrompts = selectedUser 
        ? allPrompts.filter(prompt => prompt.user_id === selectedUser)
        : prompts;

    if (status === 'loading') {
        return <div className="loading">Loading prompts...</div>;
    }

    return (
        <div className="prompt-history-container">
            <h2 className="history-title">
                {isAdmin ? 'All Learning History' : 'Learning History'}
            </h2>
            
            {isAdmin && (
                <div className="admin-filters">
                    <select 
                        value={selectedUser || ''} 
                        onChange={(e) => setSelectedUser(e.target.value || null)}
                    >
                        <option value="">All Users</option>
                       {allUsers.map((u) => (
                            <option key={u._id} value={u._id}>
                                {u.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {filteredPrompts && filteredPrompts.length > 0 ? (
                <div className="prompts-list">
                    {filteredPrompts
                        .slice()
                        .reverse()
                        .map((prompt:IPrompt) => (
                            <div key={prompt._id} className="prompt-card">
                                {isAdmin && (
                                    <div className="prompt-user-info">
                                        <span>User: {prompt.user_name}</span>
                                    </div>
                                )}
                                <div className="prompt-header">
                                    <span className="prompt-date">
                                        {new Date(prompt.created_at).toLocaleDateString()}
                                    </span>
                                    <div className="prompt-categories">
                                        <span className="category-tag">
                                            {prompt.category_name}
                                        </span>
                                        <span className="category-tag sub">
                                            {prompt.sub_category_name}
                                        </span>
                                    </div>
                                </div>
                                <div className="prompt-content">
                                    <h3 className="prompt-text">{prompt.prompt}</h3>
                                    <p className="prompt-response">{prompt.response}</p>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <div className="no-prompts-message">
                    <p>No prompts available yet.</p>
                    {!isAdmin && (
                        <p>Start your learning journey by creating your first prompt!</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default PromptHistory;