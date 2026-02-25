import { BaseNode } from './BaseNode';
import { NODE_LABELS, UI_TEXT } from '../constants/nodeConstants';
import { getDisplayNodeHandles } from '../constants/nodeHandles';

export const DisplayNode = ({ id, data }) => {
  const handles = getDisplayNodeHandles(id);

  return (
    <BaseNode id={id} label={NODE_LABELS.DISPLAY} handles={handles} className="bg-[#f0f8ff]">
      <div className="p-2.5 min-h-[30px] bg-white border border-slate-200 rounded-md">
        <em className="text-slate-500">{UI_TEXT.NO_DATA}</em>
      </div>
    </BaseNode>
  );
};
