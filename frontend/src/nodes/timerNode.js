import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Label, Input } from '../components/FormElements';
import { NODE_LABELS, DEFAULT_VALUES, FIELD_LABELS } from '../constants/nodeConstants';
import { getTimerNodeHandles } from '../constants/nodeHandles';

export const TimerNode = ({ id, data }) => {
    const [delay, setDelay] = useState(data?.delay || DEFAULT_VALUES.TIMER_DELAY);

    const handles = getTimerNodeHandles(id);

    return (
        <BaseNode id={id} label={NODE_LABELS.TIMER} handles={handles}>
            <div>
                <Label>
                    {FIELD_LABELS.DELAY}
                    <Input type="number" value={delay} onChange={(e) => setDelay(e.target.value)} />
                </Label>
            </div>
        </BaseNode>
    );
}
