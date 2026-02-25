import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, handles = [], children, style = {} }) => {
    return (
        <div style={{
            width: 250,
            minHeight: 80,
            backgroundColor: 'var(--bg-node)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-float)',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            transition: 'box-shadow var(--transition-fast)',
            ...style
        }}>

            {/* Node Header */}
            <div style={{
                background: 'var(--bg-node-header)',
                padding: '12px 16px',
                color: '#fff',
                fontWeight: '600',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <span>{label}</span>
            </div>

            {/* Handles Render Logic */}
            {handles.filter(h => h.type === 'target').map((handle, index) => (
                <Handle
                    key={`${id}-target-${index}`}
                    type="target"
                    position={handle.position || Position.Left}
                    id={handle.id}
                    style={{
                        ...handle.style,
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#f8fafc',
                        border: '2px solid var(--border-focus)',
                        borderRadius: '50%'
                    }}
                />
            ))}

            {/* Node Body Content */}
            <div style={{ padding: '16px' }}>
                {children}
            </div>

            {handles.filter(h => h.type === 'source').map((handle, index) => (
                <Handle
                    key={`${id}-source-${index}`}
                    type="source"
                    position={handle.position || Position.Right}
                    id={handle.id}
                    style={{
                        ...handle.style,
                        width: '12px',
                        height: '12px',
                        backgroundColor: 'var(--border-focus)',
                        border: '2px solid #fff',
                        borderRadius: '50%',
                        boxShadow: '0 0 0 1px var(--border-focus)'
                    }}
                />
            ))}
        </div>
    );
};
