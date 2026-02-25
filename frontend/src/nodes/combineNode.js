// combineNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const CombineNode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input1`, style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: `${id}-input2`, style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: `${id}-combined` }
    ];

    return (
        <BaseNode id={id} label="Combine" handles={handles}>
            <div>
                <span>Concatenates two inputs.</span>
            </div>
        </BaseNode>
    );
}
