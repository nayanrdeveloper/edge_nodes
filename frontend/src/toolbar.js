import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-float)',
            border: '1px solid var(--border-color)',
            width: '240px'
        }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: 'var(--text-main)' }}>Components</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API Request' />
                <DraggableNode type='timer' label='Timer' />
                <DraggableNode type='combine' label='Combine' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='display' label='Display' />
            </div>
        </div>
    );
};
