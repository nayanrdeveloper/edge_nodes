export const API_CONSTANTS = {
    URLS: {
        PARSE_PIPELINE: 'http://127.0.0.1:8000/pipelines/parse'
    },
    PAYLOAD_KEYS: {
        PIPELINE: 'pipeline'
    },
    MESSAGES: {
        NETWORK_ERROR: 'Network response was not ok',
        SUBMIT_CONSOLE_ERROR: 'Error submitting pipeline:',
        SUBMIT_ALERT_ERROR: 'Failed to submit the pipeline. Ensure the backend is running.',
        ALERT_SUCCESS_TITLE: 'Pipeline Analysis Data:\n\n',
        ALERT_NUM_NODES: 'Number of Nodes: ',
        ALERT_NUM_EDGES: 'Number of Edges: ',
        ALERT_IS_DAG: 'Is Directed Acyclic Graph (DAG): '
    },
    UI: {
        SUBMIT_BUTTON_TEXT: 'Submit Flow'
    }
};
