export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} cursor-grab w-full h-11 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 transition-all duration-150 shadow-sm hover:bg-slate-100 hover:border-indigo-500`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="text-slate-800 text-sm font-medium">{label}</span>
    </div>
  );
};  