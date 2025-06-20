import { useEffect } from "react";
import { getPromptsByUserId } from "../../store/thunks/promptThunks";
import type { IPrompt } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Prompt from "./prompt";



const PromptHistory = () => {


    const dispatch = useAppDispatch();

    const userPrompts = useAppSelector(state => state.prompt.currentUserPrompts);
    const user = useAppSelector(state => state.prompt.currentPrompt);

    if (!userPrompts) {
        return <div>Loading...</div>;
    }
    
    useEffect(() => {
        dispatch(getPromptsByUserId(user?.user_id || ''));
    }, []);

    return (
        <div>
            <h2>Prompt History</h2>
            {userPrompts && userPrompts.map((prompt: IPrompt) => (
                <div key={prompt._id} className="prompt-history-item">
                    <Prompt id={prompt._id} />
                </div>
            ))}
        </div>
    );
}

export default PromptHistory;