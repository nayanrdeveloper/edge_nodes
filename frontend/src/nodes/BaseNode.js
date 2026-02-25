import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, handles = [], children, style = {}, className = '' }) => {
  return (
    <div
      className={`w-[250px] min-h-[80px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden transition-shadow duration-150 ${className}`}
      style={style}
    >
      <div className="bg-indigo-400 px-4 py-3 text-white font-semibold text-sm flex items-center gap-2">
        <span>{label}</span>
      </div>

      {handles
        .filter((h) => h.type === 'target')
        .map((handle, index) => (
          <Handle
            key={`${id}-target-${index}`}
            type="target"
            position={handle.position || Position.Left}
            id={handle.id}
            className="!w-3 !h-3 !bg-slate-50 !border-2 !border-indigo-500 !rounded-full"
            style={{ ...handle.style }}
          />
        ))}

      <div className="p-4">{children}</div>

      {handles
        .filter((h) => h.type === 'source')
        .map((handle, index) => (
          <Handle
            key={`${id}-source-${index}`}
            type="source"
            position={handle.position || Position.Right}
            id={handle.id}
            className="!w-3 !h-3 !bg-indigo-500 !border-2 !border-white !rounded-full shadow-[0_0_0_1px_#6366f1]"
            style={{ ...handle.style }}
          />
        ))}
    </div>
  );
};
