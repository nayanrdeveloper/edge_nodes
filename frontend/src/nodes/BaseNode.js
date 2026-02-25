// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, handles = [], children, style = {} }) => {
    return (
        <div style={{ width: 200, minHeight: 80, border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#fff', ...style }}>
            {handles.filter(h => h.type === 'target').map((handle, index) => (
                <Handle
                    key={`${id}-target-${index}`}
                    type="target"
                    position={handle.position || Position.Left}
                    id={handle.id}
                    style={handle.style}
                />
            ))}

            <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                <span>{label}</span>
            </div>

            <div>
                {children}
            </div>

            {handles.filter(h => h.type === 'source').map((handle, index) => (
                <Handle
                    key={`${id}-source-${index}`}
                    type="source"
                    position={handle.position || Position.Right}
                    id={handle.id}
                    style={handle.style}
                />
            ))}
        </div>
    );
};
