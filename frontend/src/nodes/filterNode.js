import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Label, Input } from '../components/FormElements';

export const FilterNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || '> 0');

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-filtered` }
    ];

    return (
        <BaseNode id={id} label="Filter" handles={handles}>
            <div>
                <Label>
                    Condition:
                    <Input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
                </Label>
            </div>
        </BaseNode>
    );
}
