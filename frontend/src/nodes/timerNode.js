// timerNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
    const [delay, setDelay] = useState(data?.delay || 1000);

    const handles = [
        { type: 'source', position: Position.Right, id: `${id}-tick` }
    ];

    return (
        <BaseNode id={id} label="Timer" handles={handles}>
            <div>
                <label>
                    Delay (ms):
                    <input type="number" value={delay} onChange={(e) => setDelay(e.target.value)} />
                </label>
            </div>
        </BaseNode>
    );
}
