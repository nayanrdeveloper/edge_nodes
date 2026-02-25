import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || '> 0');

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-filtered` }
    ];

    return (
        <BaseNode id={id} label="Filter" handles={handles}>
            <div>
                <label>
                    Condition:
                    <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
                </label>
            </div>
        </BaseNode>
    );
}
