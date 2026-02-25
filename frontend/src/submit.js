export const SubmitButton = () => {

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
                type="submit"
                style={{
                    backgroundColor: 'var(--border-focus)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--radius-lg)',
                    padding: '12px 24px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4f46e5';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-float)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--border-focus)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(1px)';
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
            >
                Submit Flow
            </button>
        </div>
    );
}
