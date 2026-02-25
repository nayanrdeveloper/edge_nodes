import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Label, Input, Select } from '../components/FormElements';

export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || 'https://api.example.com');
    const [method, setMethod] = useState(data?.method || 'GET');

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-payload` },
        { type: 'source', position: Position.Right, id: `${id}-response` }
    ];

    return (
        <BaseNode id={id} label="API Request" handles={handles}>
            <div>
                <Label>
                    URL:
                    <Input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                </Label>
                <Label>
                    Method:
                    <Select value={method} onChange={(e) => setMethod(e.target.value)}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                    </Select>
                </Label>
            </div>
        </BaseNode>
    );
}
