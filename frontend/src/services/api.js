import { API_CONSTANTS } from '../constants/apiConstants';

export const parsePipeline = async (nodes, edges) => {
    try {
        const formData = new FormData();
        formData.append(API_CONSTANTS.PAYLOAD_KEYS.PIPELINE, JSON.stringify({ nodes, edges }));

        const response = await fetch(API_CONSTANTS.URLS.PARSE_PIPELINE, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(API_CONSTANTS.MESSAGES.NETWORK_ERROR);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(API_CONSTANTS.MESSAGES.SUBMIT_CONSOLE_ERROR, error);
        throw error;
    }
};
