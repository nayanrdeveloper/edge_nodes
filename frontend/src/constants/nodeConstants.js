export const NODE_TYPES = {
    CUSTOM_INPUT: 'customInput',
    LLM: 'llm',
    CUSTOM_OUTPUT: 'customOutput',
    TEXT: 'text',
    API: 'api',
    TIMER: 'timer',
    COMBINE: 'combine',
    FILTER: 'filter',
    DISPLAY: 'display'
};

export const NODE_LABELS = {
    INPUT: 'Input',
    OUTPUT: 'Output',
    LLM: 'LLM',
    TEXT: 'Text',
    API: 'API Request',
    TIMER: 'Timer',
    COMBINE: 'Combine',
    FILTER: 'Filter',
    DISPLAY: 'Display'
};

export const INPUT_TYPES = {
    TEXT: 'Text',
    FILE: 'File'
};

export const OUTPUT_TYPES = {
    TEXT: 'Text',
    IMAGE: 'Image'
};

export const API_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT'
};

export const DEFAULT_VALUES = {
    INPUT_NAME_PREFIX: 'input_',
    OUTPUT_NAME_PREFIX: 'output_',
    TEXT_NODE: '{{input}}',
    API_URL: 'https://api.example.com',
    API_METHOD: 'GET',
    TIMER_DELAY: 1000,
    FILTER_CONDITION: '> 0'
};

export const HANDLE_TYPES = {
    SOURCE: 'source',
    TARGET: 'target'
};

export const FIELD_LABELS = {
    URL: 'URL:',
    METHOD: 'Method:',
    CONDITION: 'Condition:',
    NAME: 'Name:',
    TYPE: 'Type:',
    TEXT: 'Text:',
    DELAY: 'Delay (ms):'
};

export const UI_TEXT = {
    COMBINE_DESC: 'Concatenates two inputs.',
    LLM_DESC: 'This is a LLM.',
    NO_DATA: 'No data yet'
};

export const API_METHOD_OPTIONS = Object.values(API_METHODS);
export const INPUT_TYPE_OPTIONS = Object.values(INPUT_TYPES);
export const OUTPUT_TYPE_OPTIONS = Object.values(OUTPUT_TYPES);

export const TEXT_NODE_STYLE = {
    width: 'auto',
    minWidth: 250,
    maxWidth: 500
};
