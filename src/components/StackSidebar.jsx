

export default function StackSidebar({ selectedStack, onRemoveItem, onClearAll }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm sticky top-20">
      <div className="mb-4">
        <h3 className="font-bold text-slate-900 text-lg">Your Stack</h3>
        <p className="text-xs text-slate-500">
          {selectedStack.length} {selectedStack.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>

      {selectedStack.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-slate-100 rounded-lg">
          <p className="text-xs text-slate-400">Your stack is currently empty.</p>
          <p className="text-[11px] text-slate-300 mt-1">Add items from the library</p>
        </div>
      ) : (
        <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/50"
            >
              <div className="flex items-center gap-2.5">
                <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-slate-400 hover:text-red-500 text-sm font-bold p-1 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedStack.length > 0 && (
        <button
          onClick={onClearAll}
          className="w-full py-2 px-4 rounded-lg text-xs font-semibold border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
}