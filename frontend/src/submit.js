import { useStore } from './store';
import { parsePipeline } from './services/api';
import { API_CONSTANTS } from './constants/apiConstants';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const data = await parsePipeline(nodes, edges);

            alert(`${API_CONSTANTS.MESSAGES.ALERT_SUCCESS_TITLE}` +
                `${API_CONSTANTS.MESSAGES.ALERT_NUM_NODES}${data.num_nodes}\n` +
                `${API_CONSTANTS.MESSAGES.ALERT_NUM_EDGES}${data.num_edges}\n` +
                `${API_CONSTANTS.MESSAGES.ALERT_IS_DAG}${data.is_dag}`);
        } catch (error) {
            alert(API_CONSTANTS.MESSAGES.SUBMIT_ALERT_ERROR);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
                type="button"
                onClick={handleSubmit}
                style={{
                    backgroundColor: 'var(--border-focus)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--radius-lg)',
                    padding: '12px 24px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4f46e5';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-float)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--border-focus)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(1px)';
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
            >
                {API_CONSTANTS.UI.SUBMIT_BUTTON_TEXT}
            </button>
        </div>
    );
};
