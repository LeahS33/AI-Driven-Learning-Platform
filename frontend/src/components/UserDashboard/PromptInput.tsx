import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createAPrompt } from "../../store/thunks/promptThunks";
import { getAllUsersPrompts, getUserPrompts } from "../../store/thunks/promptThunks";
import '../../styles/PromptInput.css';

const PromptInput = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);
    const category = useAppSelector(state => state.category.currentCategory);
    const subCategory = useAppSelector(state => state.category.currentSubCategory);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);
        setResponse(null);
        try {
            const resultAction = await dispatch(createAPrompt({
                user_id: user._id,
                category_id: category as string,
                sub_category_id: subCategory as string,
                prompt,
            }));
            if (createAPrompt.fulfilled.match(resultAction)) {
                setResponse(resultAction.payload.response);
                setPrompt("");
            }
            dispatch(getAllUsersPrompts());
            dispatch(getUserPrompts(user._id));
        } catch (error) {
            console.error("Failed to create prompt:", error);
            setResponse("Failed to create prompt. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="prompt-input">
            <form onSubmit={handleSubmit} className="prompt-form">
                <div className="form-group">
                    <input
                        type="text"
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        placeholder="Enter your learning prompt"
                        required
                        disabled={!category || !subCategory}
                    />
                </div>
                <button type="submit" disabled={loading || !category || !subCategory || !prompt}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
            {!response ? (
                <div className="no-response">
                    {loading ? "Waiting for AI response..." : ""}
                </div>
            ):
            (
            <div className="ai-response">
                <h4>AI Response:</h4>
                <div>{response}</div>
            </div>
)}

        </div>
    );
};

export default PromptInput;