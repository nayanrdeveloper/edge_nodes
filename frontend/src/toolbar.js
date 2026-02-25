import { DraggableNode } from './draggableNode';
import { DRAGGABLE_NODES } from './constants/nodeConstants';

export const PipelineToolbar = () => {
  return (
    <div className="p-5 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-slate-200 w-[240px]">
      <h3 className="m-0 mb-4 text-base font-semibold text-slate-800">Components</h3>
      <div className="flex flex-col gap-2.5">
        {DRAGGABLE_NODES.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
      </div>
    </div>
  );
};
