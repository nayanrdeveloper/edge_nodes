import { BaseNode } from './BaseNode';
import { NODE_LABELS, UI_TEXT } from '../constants/nodeConstants';
import { getCombineNodeHandles } from '../constants/nodeHandles';

export const CombineNode = ({ id, data }) => {
  const handles = getCombineNodeHandles(id);

  return (
    <BaseNode id={id} label={NODE_LABELS.COMBINE} handles={handles}>
      <div>
        <span>{UI_TEXT.COMBINE_DESC}</span>
      </div>
    </BaseNode>
  );
};
