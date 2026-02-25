// apiNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

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
                <label>
                    URL:
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                </label>
                <label>
                    Method:
                    <select value={method} onChange={(e) => setMethod(e.target.value)}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
}
