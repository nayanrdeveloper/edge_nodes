export const Label = ({ children, ...props }) => (
    <label className="block text-[13px] font-medium text-slate-500 mb-3" {...props}>
        {children}
    </label>
);

export const Input = ({ ...props }) => (
    <input
        className="w-full px-2.5 py-2 mt-1 border border-slate-200 rounded-lg text-sm text-slate-800 bg-slate-50 transition-all duration-150 focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500/20 focus:bg-white"
        {...props}
    />
);

export const Select = ({ children, ...props }) => (
    <select
        className="w-full px-2.5 py-2 mt-1 border border-slate-200 rounded-lg text-sm text-slate-800 bg-slate-50 transition-all duration-150 focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500/20 focus:bg-white"
        {...props}
    >
        {children}
    </select>
);

export const AutoResizeTextarea = ({ value, onChange, ...props }) => {
    return (
        <div className="relative w-full mt-1">
            <div
                className="w-full px-2.5 py-2 border border-transparent text-sm whitespace-pre-wrap break-words invisible"
                style={{ minHeight: '40px' }}
                aria-hidden="true"
            >
                {value + ' '}
            </div>
            <textarea
                className="absolute inset-0 w-full h-full px-2.5 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 bg-slate-50 transition-all duration-150 focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500/20 focus:bg-white resize-none overflow-hidden m-0"
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};
