import { BaseNode } from './BaseNode';
import { NODE_LABELS, UI_TEXT } from '../constants/nodeConstants';
import { getLLMNodeHandles } from '../constants/nodeHandles';

export const LLMNode = ({ id, data }) => {
  const handles = getLLMNodeHandles(id);

  return (
    <BaseNode id={id} label={NODE_LABELS.LLM} handles={handles}>
      <div>
        <span>{UI_TEXT.LLM_DESC}</span>
      </div>
    </BaseNode>
  );
};
