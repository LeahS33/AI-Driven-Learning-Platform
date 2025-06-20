import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getPromptWithId } from "../../store/thunks/promptThunks";



const Prompt = ({ id }: { id: string }) => {

    const prompt = useAppSelector(state => state.prompt.currentPrompt);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPromptWithId(id));
    }, []);

    if (!prompt) {
        return <div>Loading...</div>;
    }

    const formattedDate = prompt.created_at 
        ? new Date(prompt.created_at).toLocaleString()
        : 'Date not available';
        
    return (
        <div>
            <div>{formattedDate}</div>
            <div>category: {prompt?.category_name}</div>
            <div>sub category: {prompt?.sub_category_name}</div>
            <div>prompt: {prompt?.prompt}</div>
        </div>
    );
}

export default Prompt;