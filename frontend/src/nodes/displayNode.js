import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DisplayNode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` }
    ];

    return (
        <BaseNode id={id} label="Display" handles={handles} style={{ backgroundColor: '#f0f8ff' }}>
            <div style={{ padding: '10px', minHeight: '30px', backgroundColor: '#fff', border: '1px solid #ddd' }}>
                <em>No data yet</em>
            </div>
        </BaseNode>
    );
}
