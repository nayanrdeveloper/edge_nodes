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
