import { useState } from 'react';
import toast from 'react-hot-toast';
import { useStore } from './store';
import { parsePipeline } from './services/api';
import { API_CONSTANTS } from './constants/apiConstants';
import { Spinner } from './components/FormElements';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const data = await parsePipeline(nodes, edges);

            toast.success(
                <div className="text-sm">
                    <p className="font-semibold mb-1">{API_CONSTANTS.MESSAGES.ALERT_SUCCESS_TITLE}</p>
                    <p>{API_CONSTANTS.MESSAGES.ALERT_NUM_NODES}<span className="font-medium text-indigo-600">{data.num_nodes}</span></p>
                    <p>{API_CONSTANTS.MESSAGES.ALERT_NUM_EDGES}<span className="font-medium text-indigo-600">{data.num_edges}</span></p>
                    <p>{API_CONSTANTS.MESSAGES.ALERT_IS_DAG}<span className="font-medium text-indigo-600">{data.is_dag.toString()}</span></p>
                </div>,
                { duration: 5000 }
            );
        } catch (error) {
            toast.error(API_CONSTANTS.MESSAGES.SUBMIT_ALERT_ERROR);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex items-center justify-center px-6 py-3 text-[15px] font-semibold text-white rounded-lg shadow-md transition-all duration-150 ${isSubmitting
                    ? 'bg-indigo-400 cursor-not-allowed opacity-80'
                    : 'bg-indigo-600 cursor-pointer hover:bg-indigo-500 hover:-translate-y-[1px] hover:shadow-lg active:translate-y-[1px] active:scale-95'
                    }`}
            >
                {isSubmitting ? (
                    <>
                        <Spinner className="-ml-1 mr-3 h-5 w-5 text-white" />
                        {API_CONSTANTS.UI.SUBMITTING_BUTTON_TEXT}
                    </>
                ) : (
                    API_CONSTANTS.UI.SUBMIT_BUTTON_TEXT
                )}
            </button>
        </div>
    );
};
