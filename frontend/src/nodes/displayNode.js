import { BaseNode } from './BaseNode';
import { NODE_LABELS, UI_TEXT } from '../constants/nodeConstants';
import { getDisplayNodeHandles } from '../constants/nodeHandles';

export const DisplayNode = ({ id, data }) => {
    const handles = getDisplayNodeHandles(id);

    return (
        <BaseNode id={id} label={NODE_LABELS.DISPLAY} handles={handles} style={{ backgroundColor: '#f0f8ff' }}>
            <div style={{ padding: '10px', minHeight: '30px', backgroundColor: '#fff', border: '1px solid #ddd' }}>
                <em>{UI_TEXT.NO_DATA}</em>
            </div>
        </BaseNode>
    );
}
