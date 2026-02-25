export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        width: '100%',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 'var(--radius-md)',
        backgroundColor: '#f8fafc',
        border: '1px solid var(--border-color)',
        justifyContent: 'center',
        transition: 'all var(--transition-fast)',
        boxShadow: 'var(--shadow-sm)'
      }}
      draggable
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f1f5f9';
        e.currentTarget.style.borderColor = 'var(--border-focus)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#f8fafc';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <span style={{ color: 'var(--text-main)', fontSize: '14px', fontWeight: '500' }}>{label}</span>
    </div>
  );
};  