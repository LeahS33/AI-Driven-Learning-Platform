import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getPromptWithId } from "../../store/thunks/promptThunks";



const Prompt = ({ id }: { id: string }) => {

    const dispatch = useAppDispatch();
    const prompt = useAppSelector(state => state.prompt.currentPrompt);
    const status = useAppSelector(state => state.prompt.status);

    useEffect(() => {
        if (id) {
            dispatch(getPromptWithId(id));
        }
    }, [dispatch, id]);

    const formattedDate = prompt?.created_at
        ? new Date(prompt.created_at).toLocaleString()
        : 'Date not available';

    const isLoading = status === 'loading' || !prompt;

    return (
        <div className="prompt-card">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="prompt-date">{formattedDate}</div>
                    <div className="prompt-category">
                        Category: {prompt.category_name || 'N/A'}
                    </div>
                    <div className="prompt-subcategory">
                        Sub Category: {prompt.sub_category_name || 'N/A'}
                    </div>
                    <div className="prompt-text">
                        Prompt: {prompt.prompt || 'N/A'}
                    </div>
                </>
            )}
        </div>
    );
}

export default Prompt;