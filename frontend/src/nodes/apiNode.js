import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Label, Input, Select } from '../components/FormElements';
import { NODE_LABELS, API_METHODS, DEFAULT_VALUES, FIELD_LABELS, API_METHOD_OPTIONS } from '../constants/nodeConstants';
import { getApiNodeHandles } from '../constants/nodeHandles';

export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || DEFAULT_VALUES.API_URL);
    const [method, setMethod] = useState(data?.method || DEFAULT_VALUES.API_METHOD);

    const handles = getApiNodeHandles(id);

    return (
        <BaseNode id={id} label={NODE_LABELS.API} handles={handles}>
            <div>
                <Label>
                    {FIELD_LABELS.URL}
                    <Input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                </Label>
                <Label>
                    {FIELD_LABELS.METHOD}
                    <Select value={method} onChange={(e) => setMethod(e.target.value)}>
                        {API_METHOD_OPTIONS.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </Select>
                </Label>
            </div>
        </BaseNode>
    );
}
