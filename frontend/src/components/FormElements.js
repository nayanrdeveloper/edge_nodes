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
                className="w-full px-2.5 py-2 border border-transparent text-sm whitespace-pre-wrap break-words invisible min-h-[40px]"
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

export const Spinner = ({ className = "h-5 w-5 text-indigo-600" }) => (
    <svg
        className={`animate-spin ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
);
