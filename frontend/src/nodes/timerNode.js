import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Label, Input } from '../components/FormElements';

export const TimerNode = ({ id, data }) => {
    const [delay, setDelay] = useState(data?.delay || 1000);

    const handles = [
        { type: 'source', position: Position.Right, id: `${id}-tick` }
    ];

    return (
        <BaseNode id={id} label="Timer" handles={handles}>
            <div>
                <Label>
                    Delay (ms):
                    <Input type="number" value={delay} onChange={(e) => setDelay(e.target.value)} />
                </Label>
            </div>
        </BaseNode>
    );
}
