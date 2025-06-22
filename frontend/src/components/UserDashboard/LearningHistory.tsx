import { useEffect } from "react";
import { getUserPrompts } from "../../store/thunks/promptThunks";
import type { IPrompt, IUser } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import '../../styles/Prompt.css'

const PromptHistory = () => {


    const dispatch = useAppDispatch();
    const userPrompts = useAppSelector(state => state.prompt.currentUserPrompts);
    const user = useAppSelector(state => state.user.user) as IUser;
    const status = useAppSelector(state => state.prompt.status);

    useEffect(() => {
        if (user?._id) {
            dispatch(getUserPrompts(user._id));
        }
    }, [dispatch, user]);

    if (status === 'loading') {
        return <div>Loading prompts...</div>;
    }

    return (
        <div className="prompt-history-container">
            <h2 className="history-title">Learning History</h2>
            {userPrompts && userPrompts.length > 0 ? (
                <div className="prompts-list">
                    {userPrompts
                        .slice()
                        .reverse()
                        .map((prompt: IPrompt) => (
                            <div key={prompt._id} className="prompt-card">
                                <div className="prompt-header">
                                    <span className="prompt-date">
                                        {new Date(prompt.created_at).toLocaleDateString()}
                                    </span>
                                    <div className="prompt-categories">
                                        <p className="category-tag">
                                            category: {prompt.category_name || 'N/A'}
                                        </p>
                                        <p className="category-tag sub">
                                            sub category: {prompt.sub_category_name || 'N/A'}
                                        </p>
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
                    <p>Start your learning journey by creating your first prompt!</p>
                </div>
            )}
        </div>
    );
}

export default PromptHistory;