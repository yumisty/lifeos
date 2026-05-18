import React, { useState, useEffect, useMemo, useRef } from 'react';

// ==========================================
// 1. 基础组件 (图标与外壳)
// ==========================================

const IconWrapper = ({ children, size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>
);

const WalletIcon = (p) => <IconWrapper {...p}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12h.01"/></IconWrapper>;
const CalendarIcon = (p) => <IconWrapper {...p}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></IconWrapper>;
const CheckSquareIcon = (p) => <IconWrapper {...p}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></IconWrapper>;
const UtensilsIcon = (p) => <IconWrapper {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></IconWrapper>;
const Trash2Icon = (p) => <IconWrapper {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></IconWrapper>;
const PlusIcon = (p) => <IconWrapper {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></IconWrapper>;
const ChevronLeftIcon = (p) => <IconWrapper {...p}><polyline points="15 18 9 12 15 6"/></IconWrapper>;
const ChevronRightIcon = (p) => <IconWrapper {...p}><polyline points="9 18 15 12 9 6"/></IconWrapper>;
const CoffeeIcon = (p) => <IconWrapper {...p}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></IconWrapper>;
const SunIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></IconWrapper>;
const MoonIcon = (p) => <IconWrapper {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></IconWrapper>;
const LayoutIcon = (p) => <IconWrapper {...p}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></IconWrapper>;
const ReceiptIcon = (p) => <IconWrapper {...p}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6"/><path d="M16 12h-6"/><path d="M16 16h-6"/></IconWrapper>;
const TrendingUpIcon = (p) => <IconWrapper {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></IconWrapper>;
const TrendingDownIcon = (p) => <IconWrapper {...p}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></IconWrapper>;
const HomeIcon = (p) => <IconWrapper {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></IconWrapper>;
const PieChartIcon = (p) => <IconWrapper {...p}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></IconWrapper>;
const ShoppingBagIcon = (p) => <IconWrapper {...p}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></IconWrapper>;
const RefrigeratorIcon = (p) => <IconWrapper {...p}><path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><line x1="5" y1="10" x2="19" y2="10"/><path d="M15 2v20"/></IconWrapper>;
const GiftIcon = (p) => <IconWrapper {...p}><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></IconWrapper>;
const ArrowRightIcon = (p) => <IconWrapper {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></IconWrapper>;
const DownloadIcon = (p) => <IconWrapper {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></IconWrapper>;
const EyeIcon = (p) => <IconWrapper {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></IconWrapper>;
const EyeOffIcon = (p) => <IconWrapper {...p}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></IconWrapper>;
const GlobeIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></IconWrapper>;
const TargetIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></IconWrapper>;
const TrophyIcon = (p) => <IconWrapper {...p}><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M17 4v3a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V4"/><path d="M5 9v2a2 2 0 0 0 2 2h0"/><path d="M19 11v-2a2 2 0 0 0-2-2h0"/></IconWrapper>;
const PenToolIcon = (p) => <IconWrapper {...p}><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></IconWrapper>;
const CameraIcon = (p) => <IconWrapper {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></IconWrapper>;
const ImageIcon = (p) => <IconWrapper {...p}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></IconWrapper>;
const AlertCircleIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></IconWrapper>;
const RefreshIcon = (p) => <IconWrapper {...p}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></IconWrapper>;
const XIcon = (p) => <IconWrapper {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></IconWrapper>;
const ArchiveRestoreIcon = (p) => <IconWrapper {...p}><rect width="20" height="20" x="2" y="2" rx="2"/><path d="M12 12v6"/><path d="m15 15-3 3-3-3"/><path d="M4 8h16"/><path d="M4 16h6"/></IconWrapper>;
const UploadCloudIcon = (p) => <IconWrapper {...p}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></IconWrapper>;
const SettingsIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></IconWrapper>;
const MenuIcon = (p) => <IconWrapper {...p}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></IconWrapper>;
const TagIcon = (p) => <IconWrapper {...p}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></IconWrapper>;
const EditIcon = (p) => <IconWrapper {...p}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></IconWrapper>;
const SaveIcon = (p) => <IconWrapper {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></IconWrapper>;

const AppWrapper = ({ children }) => (
  <div className="flex justify-center min-h-screen bg-gray-100 font-sans">
    <div className="w-full max-w-[393px] bg-[#fdfcf8] min-h-screen shadow-2xl relative overflow-x-hidden">
      {children}
    </div>
  </div>
);

const Card = ({ children, className = "", title, icon, action, onClick }) => (
  <div onClick={onClick} className={`bg-[#fffbf0] rounded-2xl shadow-[2px_2px_0px_0px_rgba(234,224,200,1)] border border-[#efeadd] p-4 ${className} transition-all duration-300 ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''}`}>
    {(title || icon) && (
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#efeadd]/50 border-dashed">
        <div className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm md:text-base">
          {icon && <span className="text-[#e6b422]">{icon}</span>}
          <h2>{title}</h2>
        </div>
        {action}
      </div>
    )}
    {children}
  </div>
);

const FixedItemsModal = ({ isOpen, onClose, items, onAdd, onUpdate, onDelete, t, year, month }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-4 w-full max-w-sm shadow-xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#6d5e50] flex items-center gap-2"><WalletIcon className="text-[#e6b422]"/> {month+1}月 {t.fixedMonthly}</h3>
          <button onClick={onClose}><XIcon size={20} className="text-[#8c7b6d]"/></button>
        </div>
        
        <div className="space-y-3 mb-6">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center text-sm p-3 bg-[#fdfcf8] rounded-xl border border-[#efeadd]">
              <input 
                 value={item.name} 
                 onChange={(e) => onUpdate(item.id, 'name', e.target.value)}
                 className="w-24 bg-transparent outline-none font-bold text-[#5c524b]" 
              />
              <div className="flex items-center gap-2">
                 <input 
                    type="number" 
                    value={item.amount}
                    onChange={(e) => onUpdate(item.id, 'amount', e.target.value)}
                    className={`w-16 text-right font-mono font-bold bg-transparent border-b border-dashed border-[#e6dcc0] focus:border-[#e6b422] outline-none ${item.type === 'income' ? 'text-[#7ca982]' : 'text-[#e07a5f]'}`}
                 />
                 <select 
                   value={item.currency} 
                   onChange={(e) => onUpdate(item.id, 'currency', e.target.value)}
                   className="text-[10px] bg-transparent outline-none text-[#b09f8d]"
                 >
                   <option value="JPY">JPY</option>
                   <option value="RMB">RMB</option>
                 </select>
                 <button onClick={() => onDelete(item.id)} className="text-[#dccab0] hover:text-[#e07a5f] ml-1"><Trash2Icon size={14}/></button>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onAdd} className="grid grid-cols-4 gap-2 border-t border-dashed border-[#efeadd] pt-4">
           <input name="name" placeholder={t.itemName} required className="col-span-4 p-2.5 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-xs outline-none focus:border-[#e6b422]" />
           <input name="amount" type="number" placeholder="金额" required className="col-span-2 p-2.5 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-xs outline-none focus:border-[#e6b422]" />
           <select name="currency" className="col-span-1 p-2.5 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-xs outline-none"><option value="JPY">JPY</option><option value="RMB">RMB</option></select>
           <select name="type" className="col-span-1 p-2.5 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-xs outline-none"><option value="expense">{t.expense}</option><option value="income">{t.income}</option></select>
           <button className="col-span-4 p-3 bg-[#e6b422] text-white text-sm rounded-xl hover:bg-[#d4a51e] font-bold shadow-md flex items-center justify-center gap-2"><PlusIcon size={16}/> {t.addFixed}</button>
        </form>
      </div>
    </div>
  );
};

// 新增：分类管理弹窗
const CategoryManagerModal = ({ isOpen, onClose, categories, onRename, onDelete, t }) => {
  if (!isOpen) return null;
  
  const handleRename = (oldName, newName) => {
    if (newName && newName.trim() !== "" && newName !== oldName) {
      onRename(oldName, newName.trim());
    }
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-4 w-full max-w-sm shadow-xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#6d5e50] flex items-center gap-2"><TagIcon className="text-[#e6b422]"/> {t.manageCategories}</h3>
          <button onClick={onClose}><XIcon size={20} className="text-[#8c7b6d]"/></button>
        </div>
        <div className="space-y-2">
          {categories.map(cat => (
            <div key={cat} className="flex items-center gap-2 p-3 bg-[#fdfcf8] rounded-xl border border-[#efeadd]">
              <input 
                defaultValue={cat} 
                onBlur={(e) => handleRename(cat, e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm text-[#5c524b] font-bold"
              />
              <button onClick={() => onDelete(cat)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={16}/></button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-[#b09f8d] text-center">
           {t.categoryTip}
        </div>
      </div>
    </div>
  );
}

// 新增：编辑交易记录弹窗
const EditTransactionModal = ({ isOpen, onClose, transaction, onSave, categories, t }) => {
  if (!isOpen || !transaction) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    onSave({
      ...transaction,
      date: fd.get('date'),
      name: fd.get('name'),
      amount: parseFloat(fd.get('amount')),
      currency: fd.get('currency'),
      category: fd.get('category'),
    });
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-5 w-full max-w-sm shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#6d5e50] flex items-center gap-2"><EditIcon className="text-[#e6b422]"/> {t.editTransaction}</h3>
          <button onClick={onClose}><XIcon size={20} className="text-[#8c7b6d]"/></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
           <div>
             <label className="text-xs text-[#8c7b6d] font-bold block mb-1">{t.date}</label>
             <input name="date" type="date" defaultValue={transaction.date} required className="w-full p-2 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm outline-none focus:border-[#e6b422]" />
           </div>
           <div>
             <label className="text-xs text-[#8c7b6d] font-bold block mb-1">{t.category}</label>
             <select name="category" defaultValue={transaction.category || categories[0]} className="w-full p-2 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm outline-none focus:border-[#e6b422]">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
             </select>
           </div>
           <div>
             <label className="text-xs text-[#8c7b6d] font-bold block mb-1">{t.itemName}</label>
             <input name="name" defaultValue={transaction.name} required className="w-full p-2 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm outline-none focus:border-[#e6b422]" />
           </div>
           <div className="flex gap-2">
             <div className="flex-1">
               <label className="text-xs text-[#8c7b6d] font-bold block mb-1">{t.amount}</label>
               <input name="amount" type="number" step="0.01" defaultValue={transaction.amount} required className="w-full p-2 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm outline-none focus:border-[#e6b422]" />
             </div>
             <div className="w-1/3">
               <label className="text-xs text-[#8c7b6d] font-bold block mb-1">Currency</label>
               <select name="currency" defaultValue={transaction.currency} className="w-full p-2 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm outline-none focus:border-[#e6b422]">
                 <option value="JPY">JPY</option>
                 <option value="RMB">RMB</option>
               </select>
             </div>
           </div>
           <button type="submit" className="w-full py-3 bg-[#e6b422] text-white font-bold rounded-xl shadow-md hover:bg-[#d4a51e] mt-2 flex justify-center gap-2"><SaveIcon size={18}/> {t.recordBtn}</button>
        </form>
      </div>
    </div>
  );
}

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div className="relative max-w-full max-h-full">
        <img src={src} alt="Full view" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        <button className="absolute -top-10 right-0 text-white p-2" onClick={onClose}><XIcon size={24}/></button>
      </div>
    </div>
  );
};

const RestoreModal = ({ isOpen, onClose, onRestore, onFileUpload, keys, t }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
        <h3 className="text-lg font-bold text-[#6d5e50] mb-2 flex items-center gap-2"><ArchiveRestoreIcon className="text-[#e6b422]"/> {t.restoreTitle}</h3>
        <div className="mb-4">
            <label className="flex items-center justify-center w-full p-3 bg-[#fffbf0] border-2 border-dashed border-[#e6b422] rounded-xl text-sm text-[#e6b422] font-bold cursor-pointer hover:bg-[#fff9c4] transition-colors gap-2">
                <UploadCloudIcon size={18}/>
                <input type="file" accept=".json" className="hidden" onChange={onFileUpload} />
                {t.importFile}
            </label>
        </div>
        {keys.length > 0 && (
          <>
            <p className="text-xs text-[#8c7b6d] mb-2">{t.restoreDesc}</p>
            <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar">
              {keys.map(key => (
                <button key={key} onClick={() => onRestore(key)} className="w-full p-3 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-left text-xs text-[#5c524b] hover:border-[#e6b422] active:bg-[#fffbf0] transition-colors truncate">
                  {key.replace('warmLifeApp_', '...')}
                </button>
              ))}
            </div>
          </>
        )}
        <button onClick={onClose} className="mt-4 w-full py-2 bg-gray-100 text-gray-500 rounded-xl text-sm font-bold hover:bg-gray-200">{t.cancel}</button>
      </div>
    </div>
  );
};

const DAILY_QUOTES = ["把钱花在刀刃上。", "好好吃饭，好好生活。", "今天的克制，是为了明天的自由。", "不积跬步，无以至千里。", "生活原本沉闷，但跑起来就有风。", "物尽其用，就是最大的惜福。", "每一笔支出，都是在为想要的生活投票。", "快乐不一定要很贵。"];

const TRANSLATIONS = {
  zh: { appTitle: "生活账本", backHome: "返回", totalExpense: "年度支出", totalBalance: "年度结余", exchangeRate: "汇率 (1 RMB)", supplies: "生活补给", inventory: "冰箱", wishlist: "心愿", inventoryPlaceholder: "余粮...", wishlistPlaceholder: "想买...", qty: "剩?", clickToManage: "点击管理", fixedExp: "固定", income: "收入", dailyExp: "日常", monthly: "月", month: "月", weekView: "周视图", weekGoal: "本周目标", addGoal: "添加任务...", record: "记一笔", recordBtn: "保存", itemName: "项目名称", date: "日期", amount: "金额", mealPlan: "食谱", fixedMonthly: "固定收支", fixedType: "每月", addFixed: "添加", expense: "支出", details: "本月日历", noDetails: "暂无记录", yearlyGoalsTitle: "年度目标", myGoals: "我的目标", addYearlyGoal: "立 Flag...", yearReview: "小结", reviewPlaceholder: "写点什么...", topPurchases: "高光消费 (Top 5)", topPurchasesSub: "钱花哪了", modeExpenditure: "支出模式", modeBalance: "收支模式", photoGallery: "年度回忆", photoGallerySub: "每月一张 (点击大图)", uploadPhoto: "上传", urgentMemo: "紧急待办", addUrgent: "加急事...", switchCurrency: "切换显示", actualBreakdown: "实际构成", weeklyTotal: "本周合计", breakdown: "构成", monthRate: "本月汇率 (1JPY=)", restoreData: "恢复数据", restoreTitle: "数据恢复中心", restoreDesc: "检测到本地有历史备份", cancel: "取消", restoreSuccess: "恢复成功！", importFile: "从文件导入 (.json)", importSuccess: "文件导入成功！", dailyBreakdown: "每日消费", dailyTotal: "当日合计", menu: "菜单", switchLang: "切换语言", hideBalance: "切换为支出", showBalance: "切换为结余", exportData: "备份数据", resetData: "重置数据", category: "分类", addCategory: "+ 新增分类", newCategoryPrompt: "请输入新分类名称:", catSummary: "分类汇总", manageCategories: "管理分类", categoryTip: "修改分类名称会自动更新历史记录", editTransaction: "编辑记录" },
  jp: { appTitle: "生活家計簿", backHome: "戻る", totalExpense: "年間支出", totalBalance: "年間収支", exchangeRate: "レート(1RMB)", supplies: "生活用品", inventory: "冷蔵庫", wishlist: "心願", inventoryPlaceholder: "在庫...", wishlistPlaceholder: "欲しい...", qty: "残?", clickToManage: "管理する", fixedExp: "固定費", income: "収入", dailyExp: "生活費", monthly: "月", month: "月", weekView: "週間", weekGoal: "今週の目標", addGoal: "タスク...", record: "記帳", recordBtn: "保存", itemName: "項目名", date: "日付", amount: "金額", mealPlan: "献立", fixedMonthly: "固定収支", fixedType: "毎月", addFixed: "追加", expense: "支出", details: "カレンダー", noDetails: "記録なし", yearlyGoalsTitle: "年間目標", myGoals: "今年の目標", addYearlyGoal: "目標追加...", yearReview: "年間レビュー", reviewPlaceholder: "一言...", topPurchases: "高額出費", topPurchasesSub: "何買った?", modeExpenditure: "支出のみ", modeBalance: "収支管理", photoGallery: "年間写真", photoGallerySub: "毎月の記録", uploadPhoto: "写真", urgentMemo: "緊急メモ", addUrgent: "急用...", switchCurrency: "通貨切替", actualBreakdown: "実数内訳", weeklyTotal: "今週合計", breakdown: "内訳", monthRate: "今月レート", restoreData: "復元", restoreTitle: "データ復元", restoreDesc: "履歴データが見つかりました", cancel: "キャンセル", restoreSuccess: "復元完了！", importFile: "ファイルから復元 (.json)", importSuccess: "インポート成功！", dailyBreakdown: "日別消費", dailyTotal: "当日合計", menu: "メニュー", switchLang: "言語切替", hideBalance: "支出表示", showBalance: "収支表示", exportData: "バックアップ", resetData: "リセット", category: "分類", addCategory: "+ 追加", newCategoryPrompt: "新しい分類名を入力:", catSummary: "分類サマリー", manageCategories: "分類管理", categoryTip: "分類名を変更すると履歴も更新されます", editTransaction: "編集" },
  en: { appTitle: "Life Ledger", backHome: "Back", totalExpense: "Total Exp", totalBalance: "Total Bal", exchangeRate: "Rate(1RMB)", supplies: "Supplies", inventory: "Pantry", wishlist: "Wishlist", inventoryPlaceholder: "Add...", wishlistPlaceholder: "Item...", qty: "Qty", clickToManage: "Manage", fixedExp: "Fixed", income: "Income", dailyExp: "Daily", monthly: "Month", month: "Mon", weekView: "Week", weekGoal: "Goals", addGoal: "Task...", record: "Add", recordBtn: "Save", itemName: "Item", date: "Date", amount: "Amt", mealPlan: "Meals", fixedMonthly: "Monthly Fixed", fixedType: "Recurring", addFixed: "Add", expense: "Exp", details: "Calendar", noDetails: "Empty", yearlyGoalsTitle: "Yearly", myGoals: "Goals", addYearlyGoal: "Add...", yearReview: "Review", reviewPlaceholder: "Notes...", topPurchases: "Top 5", topPurchasesSub: "Spending", modeExpenditure: "Exp Only", modeBalance: "Balance", photoGallery: "Gallery", photoGallerySub: "Monthly pic", uploadPhoto: "Upload", urgentMemo: "Urgent", addUrgent: "Urgent...", switchCurrency: "Switch", actualBreakdown: "Actual Breakdown", weeklyTotal: "Weekly Total", breakdown: "Breakdown", monthRate: "Month Rate", restoreData: "Restore", restoreTitle: "Data Recovery", restoreDesc: "Found legacy data", cancel: "Cancel", restoreSuccess: "Restored!", importFile: "Import from file (.json)", importSuccess: "Imported Successfully!", dailyBreakdown: "Daily Breakdown", dailyTotal: "Daily Total", menu: "Menu", switchLang: "Language", hideBalance: "View Expense", showBalance: "View Balance", exportData: "Export", resetData: "Reset", category: "Cat.", addCategory: "+ Add New", newCategoryPrompt: "New Category Name:", catSummary: "Category Summary", manageCategories: "Manage Categories", categoryTip: "Renaming updates history", editTransaction: "Edit" }
};

// FIX: getMonday was mutating the original date object!
const getMonday = (d) => { 
  const date = new Date(d); // Clone the date first
  const day = date.getDay(); 
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
  date.setDate(diff);
  date.setHours(0, 0, 0, 0); 
  return date; 
};
const getWeekId = (date) => { const d = new Date(date); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + 4 - (d.getDay() || 7)); const year = d.getFullYear(); const weekNo = Math.ceil((((d - new Date(year, 0, 1)) / 86400000) + 1) / 7); return `${year}-w${weekNo}`; };
const formatDateShort = (date) => `${date.getMonth() + 1}.${date.getDate()}`;
const formatDateISO = (date) => { const offset = date.getTimezoneOffset(); date = new Date(date.getTime() - (offset*60*1000)); return date.toISOString().split('T')[0]; };
const formatDateTiny = (isoString) => { if (!isoString) return "--.--"; const d = new Date(isoString); const yy = d.getFullYear().toString().slice(-2); const mm = String(d.getMonth() + 1).padStart(2, '0'); const dd = String(d.getDate()).padStart(2, '0'); return `${yy}.${mm}.${dd}`; };
const compressImage = (file) => { return new Promise((resolve) => { const reader = new FileReader(); reader.readAsDataURL(file); reader.onload = (e) => { const img = new Image(); img.src = e.target.result; img.onload = () => { const canvas = document.createElement('canvas'); let w = img.width, h = img.height; if(w > 800) { h *= 800/w; w=800; } canvas.width = w; canvas.height = h; const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, w, h); resolve(canvas.toDataURL('image/jpeg', 0.8)); }; }; }); };
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// --- 5. 主应用逻辑 ---
export default function App() {
  const [view, setView] = useState('year'); 
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState(new Date()); 
  // 1. 修改默认汇率 (1 JPY = 0.05 RMB)
  const [exchangeRate, setExchangeRate] = useState(0.05);
  const [monthlyRates, setMonthlyRates] = useState({}); 
  const [showBalance, setShowBalance] = useState(false);
  const [quote, setQuote] = useState("把钱花在刀刃上。");
  const [lang, setLang] = useState('zh');
  const [displayCurrency, setDisplayCurrency] = useState('JPY'); 
  const [recordDate, setRecordDate] = useState(formatDateISO(new Date()));
  const [previewImage, setPreviewImage] = useState(null); 
  const [restoreModalOpen, setRestoreModalOpen] = useState(false);
  const [foundLegacyKeys, setFoundLegacyKeys] = useState([]);
  const [fixedModalOpen, setFixedModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 菜单状态
  const [selectedDayDetails, setSelectedDayDetails] = useState(null); // 选中的日期明细
  
  // 新增：状态管理
  const [categoryManagerOpen, setCategoryManagerOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null); // 当前正在编辑的交易对象

  // 状态
  const [fixedItemsByMonth, setFixedItemsByMonth] = useState({});
  const [allTodos, setAllTodos] = useState({}); 
  const [allMeals, setAllMeals] = useState({});
  // 新增 category 字段到 transaction
  const [transactions, setTransactions] = useState([{ id: 1, date: formatDateISO(new Date()), name: '超市采购', amount: 1949, currency: 'JPY', category: '日用' }]);
  const [inventory, setInventory] = useState([{ id: 1, name: '辛拉面', quantity: '3包' }]);
  const [wishlist, setWishlist] = useState([{ id: 1, name: 'Switch', price: '6500', note: '蹲打折' }]);
  const [yearlyGoals, setYearlyGoals] = useState([{id: 1, text: '坚持记账', completed: false}]);
  const [yearlyReview, setYearlyReview] = useState("");
  const [monthlyPhotos, setMonthlyPhotos] = useState({});
  const [urgentTodos, setUrgentTodos] = useState([{ id: 1, text: '交学费', completed: false }]);
  const [goalsByYear, setGoalsByYear] = useState({ [new Date().getFullYear()]: [{id: 1, text: '坚持记账', completed: false}] });
  
  // 分类状态
  const [categories, setCategories] = useState(["日用", "零食", "周边", "氪金", "机票", "大型设备"]);
  const [selectedCategory, setSelectedCategory] = useState("日用");

  const t = TRANSLATIONS[lang]; 
  const STORAGE_KEY = 'warmLifeApp_MASTER_DB_V107_FINAL';
  const LEGACY_KEYS = [
    'warmLifeApp_MASTER_DB_V104_FIXED_FINAL',
    'warmLifeApp_MASTER_DB_V103_FINAL',
    'warmLifeApp_MASTER_DB_V2',
    'warmLifeApp_MASTER_DB_FINAL',
    'warmLifeApp_MASTER_DB',
    'warmLifeApp_v110_auto_year_final'
  ];

  const defaultFixedTemplate = [
    { id: 1, name: '房租', amount: 76910, currency: 'JPY', type: 'expense' },
    { id: 2, name: '话费', amount: 2732, currency: 'JPY', type: 'expense' },
    { id: 3, name: '电费', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 4, name: '煤气费', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 5, name: '交通费', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 6, name: '医保', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 7, name: 'AppleCare+', amount: 1740, currency: 'JPY', type: 'expense' },
    { id: 8, name: 'iCloud', amount: 450, currency: 'JPY', type: 'expense' },
    { id: 9, name: '兼职收入', amount: 0, currency: 'JPY', type: 'income' }
  ];

  // ==========================================
  // 核心功能函数
  // ==========================================

  const getRateForMonth = (year, monthIndex) => {
    const key = `${year}-${monthIndex}`;
    return monthlyRates[key] !== undefined ? monthlyRates[key] : exchangeRate;
  };

  const getFixedItemsForMonth = (year, monthIndex) => {
      const key = `${year}-${monthIndex}`;
      const items = fixedItemsByMonth[key];
      if (Array.isArray(items)) return items;
      return defaultFixedTemplate;
  };

  const updateFixedItemForMonth = (year, monthIndex, itemId, field, value) => {
      const key = `${year}-${monthIndex}`;
      const currentList = Array.isArray(fixedItemsByMonth[key]) ? [...fixedItemsByMonth[key]] : [...defaultFixedTemplate];
      const updatedList = currentList.map(item => item.id === itemId ? { ...item, [field]: value } : item);
      setFixedItemsByMonth(prev => ({ ...prev, [key]: updatedList }));
  };
  
  const addFixedItemForMonth = (year, monthIndex, newItem) => {
      const key = `${year}-${monthIndex}`;
      const currentList = Array.isArray(fixedItemsByMonth[key]) ? [...fixedItemsByMonth[key]] : [...defaultFixedTemplate];
      setFixedItemsByMonth(prev => ({ ...prev, [key]: [...currentList, newItem] }));
  };

  const deleteFixedItemForMonth = (year, monthIndex, itemId) => {
      const key = `${year}-${monthIndex}`;
      const currentList = Array.isArray(fixedItemsByMonth[key]) ? [...fixedItemsByMonth[key]] : [...defaultFixedTemplate];
      setFixedItemsByMonth(prev => ({ ...prev, [key]: currentList.filter(i => i.id !== itemId) }));
  };

  // 1. 修改换算逻辑：Rate 现在是 1日元=多少人民币 (例如 0.05)
  // 如果输入是 RMB，要转成 JPY，则金额 / 汇率 (例如 1 RMB / 0.05 = 20 JPY)
  const toJPY = (amount, currency, rate) => { 
    const val = parseFloat(amount); 
    return isNaN(val) ? 0 : (currency === 'RMB' ? val / rate : val); 
  };
  
  const formatMoney = (amountInJPY) => {
    const safe = Math.abs(isNaN(amountInJPY) ? 0 : amountInJPY);
    if (displayCurrency === 'JPY') return `¥${Math.round(safe).toLocaleString()}`;
    // 日元转人民币显示：金额 * 汇率
    return `¥${Math.round(safe * exchangeRate).toLocaleString()} RMB`;
  };
  
  const formatMoneySimple = (val) => `¥${Math.round(Math.abs(isNaN(val)?0:val)).toLocaleString()}`;

  // 计算本月分类支出汇总
  const getMonthlyCategoryStats = (year, monthIndex) => {
    // 筛选出本月的所有支出记录
    const monthlyTrans = (transactions || []).filter(t => {
        const d = new Date(t.date);
        return d.getFullYear() === year && d.getMonth() === monthIndex;
    });

    const stats = {};
    let total = 0;
    const rate = getRateForMonth(year, monthIndex);

    monthlyTrans.forEach(t => {
        const cat = t.category || "未分类";
        const amtInJPY = toJPY(t.amount, t.currency, rate);
        if (!stats[cat]) stats[cat] = 0;
        stats[cat] += amtInJPY;
        total += amtInJPY;
    });

    // 转换为数组并排序
    return Object.entries(stats)
        .map(([name, value]) => ({ name, value, percent: total > 0 ? (value / total) * 100 : 0 }))
        .sort((a, b) => b.value - a.value);
  };

  const handleManualRestore = (key) => {
    try { const savedData = localStorage.getItem(key); if (savedData) { const parsed = JSON.parse(savedData); if (parsed.fixedItems && Array.isArray(parsed.fixedItems)) { const migratedFixed = {}; for (let i = 0; i < 12; i++) migratedFixed[`${new Date().getFullYear()}-${i}`] = parsed.fixedItems; setFixedItemsByMonth(migratedFixed); } else if (parsed.fixedItemsByMonth) { setFixedItemsByMonth(parsed.fixedItemsByMonth); } if(parsed.transactions) setTransactions(parsed.transactions); if(parsed.allTodos) setAllTodos(parsed.allTodos); if(parsed.inventory) setInventory(parsed.inventory); if(parsed.wishlist) setWishlist(parsed.wishlist); if(parsed.urgentTodos) setUrgentTodos(parsed.urgentTodos); if(parsed.monthlyPhotos) setMonthlyPhotos(parsed.monthlyPhotos); alert(t.restoreSuccess); setRestoreModalOpen(false); } } catch (e) { alert("Error"); }
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = (event) => { try { const parsed = JSON.parse(event.target.result); if (parsed.fixedItems || parsed.transactions || parsed.fixedItemsByMonth) { if(window.confirm("Sure?")) { if (parsed.fixedItems && Array.isArray(parsed.fixedItems)) { const migratedFixed = {}; for (let i = 0; i < 12; i++) migratedFixed[`${new Date().getFullYear()}-${i}`] = parsed.fixedItems; setFixedItemsByMonth(migratedFixed); } else if (parsed.fixedItemsByMonth) { setFixedItemsByMonth(parsed.fixedItemsByMonth); } if(parsed.transactions) setTransactions(parsed.transactions); if(parsed.allTodos) setAllTodos(parsed.allTodos); if(parsed.allMeals) setAllMeals(parsed.allMeals); if(parsed.exchangeRate) setExchangeRate(parsed.exchangeRate); if(parsed.inventory) setInventory(parsed.inventory); if(parsed.wishlist) setWishlist(parsed.wishlist); if(parsed.urgentTodos) setUrgentTodos(parsed.urgentTodos); if(parsed.monthlyPhotos) setMonthlyPhotos(parsed.monthlyPhotos); if(parsed.goalsByYear) setGoalsByYear(parsed.goalsByYear); if(parsed.categories) setCategories(parsed.categories); localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed)); alert(t.importSuccess); setRestoreModalOpen(false); } } else { alert("Invalid file"); } } catch (err) { alert("Error"); } }; reader.readAsText(file);
  };
  
  const exportData = () => { const dataStr = localStorage.getItem(STORAGE_KEY); const blob = new Blob([dataStr], { type: "application/json" }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `Backup_${formatDateISO(new Date())}.json`; document.body.appendChild(link); link.click(); document.body.removeChild(link); };
  const resetAllData = () => { if(window.confirm("确定要清空所有数据吗？不可恢复。")) { localStorage.removeItem(STORAGE_KEY); window.location.reload(); } };
  
  const currentWeekStart = getMonday(currentDate);
  const currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);
  const currentWeekId = getWeekId(currentWeekStart);
  // const currentTodos = allTodos[currentWeekId] || []; // Removed variable usage in view
  const currentMeals = allMeals[currentWeekId] || { Mon: {b:'',l:'',d:''}, Tue: {b:'',l:'',d:''}, Wed: {b:'',l:'',d:''}, Thu: {b:'',l:'',d:''}, Fri: {b:'',l:'',d:''}, Sat: {b:'',l:'',d:''}, Sun: {b:'',l:'',d:''} };
  
  // FIX: Using string comparison for dates to avoid timezone issues
  const getISODateStr = (d) => {
    const offset = d.getTimezoneOffset();
    const local = new Date(d.getTime() - (offset * 60 * 1000));
    return local.toISOString().split('T')[0];
  };

  const weekStartStr = getISODateStr(currentWeekStart);
  const weekEndStr = getISODateStr(currentWeekEnd);

  const currentTransactions = (transactions || []).filter(t => {
     return t.date >= weekStartStr && t.date <= weekEndStr;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  // Stats
  const weekStats = useMemo(() => {
    let jpyTotal = 0, rmbTotal = 0;
    const dailyBreakdown = {}; 

    currentTransactions.forEach(t => {
      const amt = parseFloat(t.amount) || 0;
      if (t.currency === 'JPY') jpyTotal += amt; else rmbTotal += amt;

      const dateKey = formatDateTiny(t.date);
      if (!dailyBreakdown[dateKey]) dailyBreakdown[dateKey] = 0;
      const rate = getRateForMonth(new Date(t.date).getFullYear(), new Date(t.date).getMonth());
      dailyBreakdown[dateKey] += toJPY(amt, t.currency, rate);
    });

    const thisMonthRate = getRateForMonth(currentDate.getFullYear(), currentDate.getMonth());
    const currentFixedItems = getFixedItemsForMonth(currentDate.getFullYear(), currentDate.getMonth());
    const fixedExpense = currentFixedItems.filter(i => i.type === 'expense').reduce((sum, i) => sum + toJPY(i.amount, i.currency, thisMonthRate), 0);
    const fixedIncome = currentFixedItems.filter(i => i.type === 'income').reduce((sum, i) => sum + toJPY(i.amount, i.currency, thisMonthRate), 0);
    
    // Convert RMB total to JPY for total sum using: RMB / rate = JPY
    const weeklyDailyTotalJPY = jpyTotal + (rmbTotal / thisMonthRate);
    
    // FIX: Returned key was mismatching JSX expectation
    return { fixedExpense, fixedIncome, weeklyDailyTotalJPY, jpyTotal, rmbTotal, thisMonthRate, dailyBreakdown };
  }, [fixedItemsByMonth, currentTransactions, monthlyRates, exchangeRate, currentDate]);

  const getMonthStats = (year, monthIndex) => {
    const rate = getRateForMonth(year, monthIndex);
    const items = getFixedItemsForMonth(year, monthIndex);
    const fixedExpense = items.filter(i => i.type === 'expense').reduce((sum, i) => sum + toJPY(i.amount, i.currency, rate), 0);
    const fixedIncome = items.filter(i => i.type === 'income').reduce((sum, i) => sum + toJPY(i.amount, i.currency, rate), 0);
    const monthlyDaily = (transactions || []).filter(t => {
      const d = new Date(t.date);
      return d.getFullYear() === year && d.getMonth() === monthIndex;
    }).reduce((sum, i) => sum + toJPY(i.amount, i.currency, rate), 0);
    return { fixedExpense, fixedIncome, monthlyDaily, totalExpense: fixedExpense + monthlyDaily, balance: fixedIncome - (fixedExpense + monthlyDaily) };
  };

  const annualStats = useMemo(() => {
    let expJPY = 0, expRMB = 0, incJPY = 0, incRMB = 0;
    Array.from({length: 12}).forEach((_, i) => {
       const items = getFixedItemsForMonth(selectedYear, i);
       items.forEach(item => {
           const amount = parseFloat(item.amount) || 0;
           if(item.type === 'expense') {
               if(item.currency === 'JPY') expJPY += amount; else expRMB += amount;
           } else {
               if(item.currency === 'JPY') incJPY += amount; else incRMB += amount;
           }
       });
    });
    
    (transactions || []).filter(t => new Date(t.date).getFullYear() === selectedYear).forEach(t => {
      const amount = parseFloat(t.amount) || 0;
      if (t.currency === 'JPY') expJPY += amount; else expRMB += amount;
    });

    // 1 RMB = (1/rate) JPY
    const totalExpConverted = expJPY + (expRMB / exchangeRate);
    const totalIncConverted = incJPY + (incRMB / exchangeRate);

    return { expJPY, expRMB, incJPY, incRMB, totalExpConverted, totalBalConverted: totalIncConverted - totalExpConverted };
  }, [selectedYear, fixedItemsByMonth, transactions, exchangeRate]);

  const topPurchases = useMemo(() => {
    return [...(transactions || [])].filter(t => new Date(t.date).getFullYear() === selectedYear).sort((a, b) => toJPY(b.amount, b.currency, exchangeRate) - toJPY(a.amount, a.currency, exchangeRate)).slice(0, 5);
  }, [transactions, selectedYear, exchangeRate]);

  const currentYearGoals = useMemo(() => goalsByYear[selectedYear] || [], [goalsByYear, selectedYear]);
  const activeYearGoals = currentYearGoals.filter(g => !g.completed);
  const completedYearGoals = currentYearGoals.filter(g => g.completed);
  const activeUrgentTodos = urgentTodos.filter(t => !t.completed);
  const completedUrgentTodos = urgentTodos.filter(t => t.completed);

  // Actions
  const changeWeek = (offset) => { const d = new Date(currentDate); d.setDate(d.getDate() + offset * 7); setCurrentDate(d); };
  const handleMonthClick = (idx) => { const today = new Date(); if (today.getFullYear() === selectedYear && today.getMonth() === idx) setCurrentDate(today); else setCurrentDate(new Date(selectedYear, idx, 1)); setView('week'); };
  const handleAddTodo = (e) => { if(e.key === 'Enter' && e.target.value.trim()) { setAllTodos({...allTodos, [getWeekId(currentWeekStart)]: [...(allTodos[getWeekId(currentWeekStart)]||[]), { id: Date.now(), text: e.target.value, completed: false }]}); e.target.value = ''; } };
  const toggleTodo = (id) => setAllTodos({...allTodos, [getWeekId(currentWeekStart)]: (allTodos[getWeekId(currentWeekStart)]||[]).map(t=>t.id===id?{...t,completed:!t.completed}:t)});
  const deleteTodo = (id) => setAllTodos({...allTodos, [getWeekId(currentWeekStart)]: (allTodos[getWeekId(currentWeekStart)]||[]).filter(t=>t.id!==id)});
  const updateMeal = (d, type, v) => setAllMeals({...allMeals, [getWeekId(currentWeekStart)]: {...(allMeals[getWeekId(currentWeekStart)]||{ Mon: {b:'',l:'',d:''}, Tue: {b:'',l:'',d:''}, Wed: {b:'',l:'',d:''}, Thu: {b:'',l:'',d:''}, Fri: {b:'',l:'',d:''}, Sat: {b:'',l:'',d:''}, Sun: {b:'',l:'',d:''} }), [d]: {...(allMeals[getWeekId(currentWeekStart)]?.[d]||{b:'',l:'',d:''}), [type]: v}}});
  
  // 新增交易记录函数 (Updated for Category)
  const addTransaction = (e) => { 
    e.preventDefault(); 
    const fd = new FormData(e.target); 
    const dateVal = recordDate || formatDateISO(new Date()); 
    setTransactions([{
      id: Date.now(), 
      date: dateVal, 
      name: fd.get('name'), 
      amount: parseFloat(fd.get('amount')), 
      currency: fd.get('currency'),
      category: selectedCategory // Save category
    }, ...transactions]); 
    e.target.reset(); 
    setRecordDate(dateVal); 
  };

  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));
  const addInventory = (e) => { if(e.key==='Enter'){ setInventory([...inventory, {id: Date.now(), name: e.target.value, quantity: ''}]); e.target.value=''; } };
  const updateInventoryQty = (id, val) => setInventory(inventory.map(i => i.id === id ? { ...i, quantity: val } : i));
  const deleteInventory = (id) => setInventory(inventory.filter(i => i.id !== id));
  const addWishlist = (e) => { e.preventDefault(); const fd = new FormData(e.target); setWishlist([...wishlist, {id: Date.now(), name: fd.get('name'), price: fd.get('price'), note: ''}]); e.target.reset(); };
  const deleteWishlist = (id) => setWishlist(wishlist.filter(w => w.id !== id));
  const addYGoal = (e) => { if(e.key==='Enter' && e.target.value.trim()){ const newGoal = {id: Date.now(), text: e.target.value, completed: false}; setGoalsByYear(prev => ({ ...prev, [selectedYear]: [...(prev[selectedYear] || []), newGoal] })); e.target.value=''; } };
  const toggleYGoal = (id) => { setGoalsByYear(prev => ({ ...prev, [selectedYear]: prev[selectedYear].map(g => g.id === id ? { ...g, completed: !g.completed } : g) })); };
  // 新增：编辑年度目标文字
  const updateYGoal = (id, text) => { setGoalsByYear(prev => ({ ...prev, [selectedYear]: prev[selectedYear].map(g => g.id === id ? { ...g, text } : g) })); };
  const deleteYGoal = (id) => { setGoalsByYear(prev => ({ ...prev, [selectedYear]: prev[selectedYear].filter(g => g.id !== id) })); };
  const handlePhotoUpload = async (e, monthIndex) => { const file = e.target.files[0]; if(file) { try { const url = await compressImage(file); setMonthlyPhotos(prev => ({...prev, [`${selectedYear}-${monthIndex}`]: url})); } catch(err) { alert("Error"); } } };
  const toggleLang = () => { if (lang === 'zh') setLang('jp'); else if (lang === 'jp') setLang('en'); else setLang('zh'); };
  const addUrgentTodo = (e) => { if(e.key==='Enter' && e.target.value.trim()){ setUrgentTodos([...urgentTodos, {id: Date.now(), text: e.target.value, completed: false}]); e.target.value=''; }};
  const toggleUrgent = (id) => setUrgentTodos(urgentTodos.map(t=>t.id===id?{...t,completed:!t.completed}:t));
  // 新增：编辑紧急待办文字
  const updateUrgentTodo = (id, text) => setUrgentTodos(urgentTodos.map(t=>t.id===id?{...t,text}:t));
  const deleteUrgent = (id) => setUrgentTodos(urgentTodos.filter(t=>t.id!==id));
  const setRateForMonth = (val) => { const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}`; setMonthlyRates(prev => ({ ...prev, [key]: parseFloat(val) })); };
  
  const handleFixedAdd = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const newItem = {id: Date.now(), name: fd.get('name'), amount: parseFloat(fd.get('amount')), currency: fd.get('currency'), type: fd.get('type')};
    addFixedItemForMonth(currentDate.getFullYear(), currentDate.getMonth(), newItem);
    e.target.reset();
  }

  // 3. 点击日期逻辑更新：自动跳转（更新CurrentDate），从而锁定周视图
  const handleDayClick = (dayObj, displayDate) => {
      // 更新当前选中的全局日期，这样周视图就会“跳转”或“锁定”到这一天所在的周
      setCurrentDate(dayObj);

      const year = dayObj.getFullYear();
      const month = dayObj.getMonth();
      const day = dayObj.getDate();
      const dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      const dayTrans = (transactions || []).filter(t => t.date === dateStr);
      
      if (selectedDayDetails && selectedDayDetails.date === displayDate) {
          setSelectedDayDetails(null);
      } else {
          setSelectedDayDetails({ date: displayDate, items: dayTrans });
      }
  }

  // 处理分类变更（包含新增逻辑）
  const handleCategoryChange = (e) => {
    const val = e.target.value;
    if (val === '__NEW__') {
      const newCat = window.prompt(t.newCategoryPrompt);
      if (newCat && newCat.trim()) {
        setCategories([...categories, newCat.trim()]);
        setSelectedCategory(newCat.trim());
      } else {
        if (categories.length > 0) setSelectedCategory(categories[0]);
      }
    } else {
      setSelectedCategory(val);
    }
  };

  // 4. 新增：分类重命名
  const handleRenameCategory = (oldName, newName) => {
    // 1. 更新分类列表
    setCategories(prev => prev.map(c => c === oldName ? newName : c));
    
    // 2. 更新选中状态
    if (selectedCategory === oldName) setSelectedCategory(newName);

    // 3. 批量更新历史记录
    setTransactions(prev => prev.map(t => t.category === oldName ? { ...t, category: newName } : t));
  };

  // 5. 新增：分类删除
  const handleDeleteCategory = (catName) => {
    if (window.confirm(`确定要删除分类“${catName}”吗？`)) {
      setCategories(prev => prev.filter(c => c !== catName));
      if (selectedCategory === catName) setSelectedCategory(categories[0] || "");
    }
  };

  // 6. 新增：保存编辑后的交易记录
  const handleSaveTransaction = (updatedTx) => {
    setTransactions(prev => prev.map(t => t.id === updatedTx.id ? updatedTx : t));
    
    // 更新选中日期的显示列表
    if (selectedDayDetails) {
       const year = new Date(updatedTx.date).getFullYear();
       const month = new Date(updatedTx.date).getMonth();
       const day = new Date(updatedTx.date).getDate();
       const dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
       
       // 如果日期没变，只更新列表里的项；如果日期变了，可能需要重新筛选或暂时保持原样
       // 这里简单起见，重新筛选该日期的所有记录
       const dayTrans = (transactions || []).map(t => t.id === updatedTx.id ? updatedTx : t).filter(t => t.date === selectedDayDetails.items[0]?.date);
       setSelectedDayDetails({ ...selectedDayDetails, items: dayTrans });
    }
    
    setEditingTransaction(null);
  };

  // 初始化
  useEffect(() => {
    try {
      let savedData = localStorage.getItem(STORAGE_KEY);
      const foundKeys = LEGACY_KEYS.filter(k => localStorage.getItem(k));
      setFoundLegacyKeys(foundKeys);

      if (!savedData && foundKeys.length > 0) {
         savedData = localStorage.getItem(foundKeys[0]);
      }

      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.fixedItemsByMonth) setFixedItemsByMonth(parsed.fixedItemsByMonth);
        else if (parsed.fixedItems) {
            const migrated = {};
            for (let i = 0; i < 12; i++) migrated[`${new Date().getFullYear()}-${i}`] = parsed.fixedItems;
            setFixedItemsByMonth(migrated);
        }
        if(parsed.allTodos) setAllTodos(parsed.allTodos);
        if(parsed.allMeals) setAllMeals(parsed.allMeals);
        if(parsed.transactions) setTransactions(parsed.transactions);
        if(parsed.exchangeRate) setExchangeRate(parsed.exchangeRate);
        if(parsed.monthlyRates) setMonthlyRates(parsed.monthlyRates);
        if(parsed.inventory) setInventory(parsed.inventory);
        if(parsed.wishlist) setWishlist(parsed.wishlist);
        if(parsed.showBalance !== undefined) setShowBalance(parsed.showBalance);
        if(parsed.lang) setLang(parsed.lang);
        if(parsed.goalsByYear) setGoalsByYear(parsed.goalsByYear);
        else if(parsed.yearlyGoals) setGoalsByYear({ [new Date().getFullYear()]: parsed.yearlyGoals }); 
        if(parsed.yearlyReview) setYearlyReview(parsed.yearlyReview);
        if(parsed.monthlyPhotos) setMonthlyPhotos(parsed.monthlyPhotos);
        if(parsed.urgentTodos) setUrgentTodos(parsed.urgentTodos);
        if(parsed.categories) {
            setCategories(parsed.categories);
            if(parsed.categories.length > 0) setSelectedCategory(parsed.categories[0]);
        }
      }
      setQuote(DAILY_QUOTES[Math.floor(Math.random() * DAILY_QUOTES.length)]);
    } catch (e) { console.error("Init error", e); }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ fixedItemsByMonth, allTodos, allMeals, transactions, exchangeRate, monthlyRates, inventory, wishlist, showBalance, lang, goalsByYear, yearlyReview, monthlyPhotos, urgentTodos, categories }));
  }, [fixedItemsByMonth, allTodos, allMeals, transactions, exchangeRate, monthlyRates, inventory, wishlist, showBalance, lang, goalsByYear, yearlyReview, monthlyPhotos, urgentTodos, categories]);

  // --- Views ---

  if (view === 'supplies') return (
    <AppWrapper>
       <div className="bg-[#f2e6ce] sticky top-0 z-50 shadow-sm border-b border-[#e6dcc0] py-3 px-4">
         <button onClick={() => setView('year')} className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm hover:text-[#5c524b]"><HomeIcon size={16}/> {t.backHome}</button>
       </div>
       <div className="px-4 mt-6 space-y-6 pb-20">
          <div className="mb-4"><h1 className="text-2xl font-black text-[#6d5e50] flex items-center gap-3"><span className="text-[#e6b422]"><ShoppingBagIcon size={24}/></span> {t.supplies}</h1></div>
          <div className="flex flex-col gap-6">
             <Card title={t.inventory} icon={<RefrigeratorIcon size={18}/>} className="bg-white">
                <div className="space-y-3">
                   {inventory.map(item => (
                     <div key={item.id} className="flex items-center gap-2 p-3 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8] group">
                        <input value={item.name} readOnly className="flex-1 text-sm bg-transparent outline-none font-medium" />
                        <input value={item.quantity} onChange={(e) => updateInventoryQty(item.id, e.target.value)} placeholder={t.qty} className="w-16 text-xs text-right text-[#b09f8d] bg-transparent outline-none placeholder-[#dccab0] focus:text-[#e6b422]" />
                        <button onClick={() => deleteInventory(item.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={16}/></button>
                     </div>
                   ))}
                   <div className="relative mt-2"><div className="absolute left-3 top-3 text-[#dccab0]"><PlusIcon size={16}/></div><input onKeyDown={addInventory} placeholder={t.inventoryPlaceholder} className="w-full pl-9 pr-4 py-2.5 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm focus:border-[#e6b422] outline-none transition-all focus:bg-white" /></div>
                </div>
             </Card>
             <Card title={t.wishlist} icon={<GiftIcon size={18}/>} className="bg-white">
                <div className="space-y-3">
                   {wishlist.map(item => (
                     <div key={item.id} className="flex justify-between items-center p-3 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8] group">
                        <div className="flex flex-col"><span className="text-sm font-medium">{item.name}</span><span className="text-xs text-[#e6b422] font-mono font-bold mt-0.5">{item.price}</span></div>
                        <button onClick={() => deleteWishlist(item.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={16}/></button>
                     </div>
                   ))}
                   <form onSubmit={addWishlist} className="flex gap-2 mt-2">
                      <input name="name" placeholder={t.wishlistPlaceholder} required className="flex-1 p-2 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm outline-none focus:border-[#e6b422] focus:bg-white" />
                      <input name="price" type="text" placeholder="¥..." className="w-20 p-2 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm outline-none focus:border-[#e6b422] focus:bg-white" />
                      <button className="bg-[#e6b422] text-white rounded-xl w-10 flex items-center justify-center hover:bg-[#d4a51e] shadow-sm"><PlusIcon size={18}/></button>
                   </form>
                </div>
             </Card>
          </div>
       </div>
    </AppWrapper>
  );

  if (view === 'goals') return (
    <AppWrapper>
      <div className="bg-[#f2e6ce] sticky top-0 z-50 shadow-sm border-b border-[#e6dcc0] py-3 px-4">
         <div className="max-w-3xl mx-auto">
           <button onClick={() => setView('year')} className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm hover:text-[#5c524b]"><HomeIcon size={16}/> {t.backHome}</button>
         </div>
       </div>
       <div className="px-4 mt-6 space-y-6 pb-20">
          <div className="mb-4"><h1 className="text-2xl font-black text-[#6d5e50] flex items-center gap-3"><span className="text-[#e6b422]"><TargetIcon size={24}/></span> {t.yearlyGoalsTitle}</h1></div>
          <div className="flex flex-col gap-6">
             <Card title={t.myGoals} icon={<CheckSquareIcon size={18}/>} className="bg-white">
                <div className="space-y-3">
                   {activeYearGoals.map(g => (
                     <div key={g.id} className="flex items-start gap-3 p-2 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8]">
                        <input type="checkbox" checked={g.completed} onChange={() => toggleYGoal(g.id)} className="mt-1 accent-[#e6b422]" />
                        {/* 修改为可编辑 Input */}
                        <input 
                            value={g.text} 
                            onChange={(e) => updateYGoal(g.id, e.target.value)}
                            className="flex-1 text-sm text-[#5c524b] bg-transparent outline-none border-b border-transparent focus:border-[#e6b422]" 
                        />
                        <button onClick={()=>deleteYGoal(g.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={16}/></button>
                     </div>
                   ))}
                   <div className="relative mt-2"><div className="absolute left-3 top-3 text-[#dccab0]"><PlusIcon size={16}/></div><input onKeyDown={addYGoal} placeholder={t.addYearlyGoal} className="w-full pl-9 pr-4 py-2.5 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm focus:outline-none focus:border-[#e6b422]" /></div>
                   {completedYearGoals.length > 0 && (
                      <details className="mt-4 group">
                         <summary className="flex items-center gap-2 text-xs text-[#b09f8d] cursor-pointer select-none">
                            <ChevronRightIcon size={12} className="group-open:rotate-90 transition-transform"/>
                            {t.completedGoals} ({completedYearGoals.length})
                         </summary>
                         <div className="mt-2 space-y-2 pl-4 border-l border-dashed border-[#efeadd]">
                            {completedYearGoals.map(g => (
                              <div key={g.id} className="flex items-start gap-2 text-xs text-[#b09f8d]">
                                 <input type="checkbox" checked={g.completed} onChange={() => toggleYGoal(g.id)} className="mt-0.5 accent-[#e6b422]" />
                                 <span className="flex-1 line-through">{g.text}</span>
                                 <button onClick={()=>deleteYGoal(g.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={12}/></button>
                              </div>
                            ))}
                         </div>
                      </details>
                   )}
                </div>
             </Card>
             <Card title={t.photoGallery} icon={<CameraIcon size={18}/>} className="bg-white">
                <div className="text-xs text-[#b09f8d] mb-4">{t.photoGallerySub}</div>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const photoKey = `${selectedYear}-${i}`;
                    const photo = monthlyPhotos[photoKey];
                    return (
                      <div 
                        key={i} 
                        onClick={() => photo && setPreviewImage(photo)}
                        className={`aspect-square bg-[#fdfcf8] rounded-lg border border-[#f7f3e8] relative overflow-hidden flex items-center justify-center group ${photo ? 'cursor-pointer' : ''}`}
                      >
                        {photo ? <img src={photo} className="w-full h-full object-cover" /> : <span className="text-xs text-[#dccab0] font-bold">{i+1}</span>}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity pointer-events-none">
                           <span className="text-white text-xs">{i+1}{t.month}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
             </Card>
             <div className="flex flex-col gap-6">
               <Card title={t.yearReview} icon={<PenToolIcon size={18}/>} className="bg-white">
                  <textarea value={yearlyReview} onChange={(e)=>setYearlyReview(e.target.value)} placeholder={t.reviewPlaceholder} className="w-full h-32 p-3 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm focus:outline-none focus:border-[#e6b422] resize-none" />
               </Card>
               <Card title={t.topPurchases} icon={<TrophyIcon size={18}/>} className="bg-white">
                  <div className="text-xs text-[#b09f8d] mb-2">{t.topPurchasesSub}</div>
                  <div className="space-y-2">
                     {topPurchases.map(item => (
                       <div key={item.id} className="flex justify-between items-center text-sm p-2 bg-[#fdfcf8] rounded-lg border border-[#f7f3e8]">
                          <span className="truncate flex-1 pr-2">{item.name}</span>
                          <span className="font-mono text-[#e07a5f] font-bold">{formatMoney(toJPY(item.amount, item.currency))}</span>
                       </div>
                     ))}
                  </div>
               </Card>
             </div>
          </div>
       </div>
    </AppWrapper>
  );

  if (view === 'year') return (
    <AppWrapper>
      <div className="bg-[#f2e6ce] sticky top-0 z-50 shadow-sm border-b border-[#e6dcc0] py-4 px-4">
        <div className="flex flex-col gap-4">
           <div className="flex justify-between items-start">
             <div>
               <h1 className="text-xl font-black text-[#6d5e50] flex items-center gap-2"><span className="text-[#e6b422]"><WalletIcon size={22}/></span> {t.appTitle}</h1>
               <div className="text-[#8c7b6d] text-xs mt-1 ml-1 opacity-80 max-w-[180px] leading-tight">{quote}</div>
             </div>
             
             {/* 顶部菜单 */}
             <div className="flex items-center gap-2 relative">
               <button onClick={() => setView('goals')} className="bg-white/80 p-2 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422]"><TargetIcon size={18}/></button>
               <button onClick={() => setMenuOpen(!menuOpen)} className="bg-white/80 p-2 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422]"><MenuIcon size={18}/></button>
               
               {/* 菜单弹窗 */}
               {menuOpen && (
                 <>
                   <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)}></div>
                   <div className="absolute top-10 right-0 z-50 bg-white rounded-xl shadow-xl border border-[#efeadd] w-40 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-200">
                     <button onClick={() => { toggleLang(); setMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#5c524b] hover:bg-[#fffbf0] flex items-center gap-2"><GlobeIcon size={14}/> {t.switchLang}</button>
                     <button onClick={() => { setShowBalance(!showBalance); setMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#5c524b] hover:bg-[#fffbf0] flex items-center gap-2">{showBalance ? <><EyeIcon size={14}/> {t.hideBalance}</> : <><EyeOffIcon size={14}/> {t.showBalance}</>}</button>
                     <div className="h-px bg-[#efeadd] mx-2"></div>
                     <button onClick={() => { exportData(); setMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#5c524b] hover:bg-[#fffbf0] flex items-center gap-2"><DownloadIcon size={14}/> {t.exportData}</button>
                     <button onClick={() => { setRestoreModalOpen(true); setMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#e07a5f] hover:bg-[#fffbf0] flex items-center gap-2"><ArchiveRestoreIcon size={14}/> {t.restoreData}</button>
                     <button onClick={() => { resetAllData(); setMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-[#fffbf0] flex items-center gap-2"><Trash2Icon size={14}/> {t.resetData}</button>
                   </div>
                 </>
               )}
             </div>
           </div>
           
           <div className="flex items-center justify-between gap-4 bg-white/50 px-4 py-2 rounded-full border border-[#efeadd]">
              <button onClick={() => setSelectedYear(selectedYear - 1)} className="hover:text-[#e6b422]"><ChevronLeftIcon size={20}/></button>
              <span className="text-lg font-bold font-mono text-[#5c524b]">{selectedYear}</span>
              <button onClick={() => setSelectedYear(selectedYear + 1)} className="hover:text-[#e6b422]"><ChevronRightIcon size={20}/></button>
           </div>
        </div>
      </div>
      
      <div className="px-4 mt-4 pb-20">
         <div className="flex flex-col gap-4 mb-4">
            <div className="bg-[#4a403a] text-[#f2e6ce] p-5 rounded-3xl shadow-lg flex flex-col justify-between min-h-[140px] relative overflow-hidden">
               <div>
                 <div className="flex items-center gap-2 text-xs opacity-80 mb-2"><PieChartIcon size={14}/> {showBalance ? t.totalBalance : t.totalExpense}</div>
                 <div className={`text-2xl sm:text-3xl font-mono font-bold tracking-tight break-all ${showBalance && annualStats.totalBalConverted < 0 ? 'text-[#e07a5f]' : 'text-[#e6b422]'}`} style={{maxWidth: '100%'}}>
                    {displayCurrency === 'JPY' 
                       ? formatMoneySimple(showBalance ? annualStats.totalBalConverted : annualStats.totalExpConverted)
                       : formatMoney(showBalance ? annualStats.totalBalConverted : annualStats.totalExpConverted)
                    }
                 </div>
               </div>
               
               <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1 relative z-10">
                 <div className="text-[10px] opacity-60 mb-1">{t.actualBreakdown}:</div>
                 <div className="flex flex-col gap-0.5 font-mono text-sm">
                    <div className="flex justify-between">
                       <span>JPY</span>
                       <span>¥{Math.abs((showBalance ? annualStats.incJPY - annualStats.expJPY : annualStats.expJPY)).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                       <span>CNY</span>
                       <span>¥{Math.abs((showBalance ? annualStats.incRMB - annualStats.expRMB : annualStats.expRMB)).toLocaleString()}</span>
                    </div>
                 </div>
                 
                 <div className="flex justify-between items-end mt-3">
                   <div className="flex items-baseline gap-2">
                      <span className="text-xs opacity-60">1 JPY ≈</span>
                      <input type="number" value={exchangeRate} onChange={(e)=>setExchangeRate(e.target.value)} className="w-24 bg-transparent border-b border-[#e6b422] text-center font-mono font-bold outline-none text-[#e6b422]" />
                      <span className="text-xs opacity-60">RMB</span>
                   </div>
                   <button onClick={() => setDisplayCurrency(displayCurrency === 'JPY' ? 'CNY' : 'JPY')} className="bg-white/20 px-2 py-1 rounded text-xs hover:bg-white/30 transition-colors flex items-center gap-1">
                      <RefreshIcon size={12}/> {displayCurrency}
                   </button>
                 </div>
               </div>
            </div>
         </div>

         <div className="mb-4">
             <div className="bg-[#fff9c4] rounded-xl border border-[#f9e79f] p-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#d4ac0d] font-bold text-sm mb-2">
                   <AlertCircleIcon size={16}/> {t.urgentMemo}
                </div>
                <div className="space-y-1">
                   {activeUrgentTodos.map(todo => (
                     <div key={todo.id} className="flex items-start gap-2 text-sm">
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleUrgent(todo.id)} className="mt-1 accent-[#f1c40f]" />
                        {/* 修改为可编辑 Input */}
                        <input 
                            value={todo.text} 
                            onChange={(e) => updateUrgentTodo(todo.id, e.target.value)}
                            className="flex-1 bg-transparent outline-none border-b border-transparent focus:border-[#d4ac0d] text-[#5c524b]"
                        />
                        <button onClick={() => deleteUrgent(todo.id)} className="text-[#f9e79f] hover:text-[#d4ac0d]"><Trash2Icon size={14}/></button>
                     </div>
                   ))}
                   <input onKeyDown={addUrgentTodo} placeholder={t.addUrgent} className="w-full bg-transparent border-b border-dashed border-[#f9e79f] text-sm focus:outline-none placeholder-[#f9e79f] focus:border-[#d4ac0d] mt-2" />
                   
                   {completedUrgentTodos.length > 0 && (
                      <details className="mt-2 group">
                         <summary className="flex items-center gap-1 text-[10px] text-[#d4ac0d]/60 cursor-pointer select-none">
                            <ChevronRightIcon size={10} className="group-open:rotate-90 transition-transform"/>
                            {t.completedGoals} ({completedUrgentTodos.length})
                         </summary>
                         <div className="mt-1 pl-3 border-l border-[#f9e79f] space-y-1">
                            {completedUrgentTodos.map(todo => (
                              <div key={todo.id} className="flex items-start gap-2 text-sm opacity-50">
                                  <input type="checkbox" checked={todo.completed} onChange={() => toggleUrgent(todo.id)} className="mt-1 accent-[#f1c40f]" />
                                  <span className="flex-1 line-through">{todo.text}</span>
                                  <button onClick={() => deleteUrgent(todo.id)} className="text-[#f9e79f] hover:text-[#d4ac0d]"><Trash2Icon size={14}/></button>
                              </div>
                            ))}
                         </div>
                      </details>
                   )}
                </div>
             </div>
         </div>

         <div onClick={() => setView('supplies')} className="bg-white rounded-3xl border-2 border-[#efeadd] shadow-sm p-5 cursor-pointer hover:shadow-md transition-all group mb-6">
            <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2 text-[#8c7b6d] font-bold text-base"><ShoppingBagIcon size={18}/> {t.supplies}</div><ArrowRightIcon size={16} className="text-[#dccab0] group-hover:text-[#e6b422] transition-colors"/></div>
            <div className="space-y-3">
               <div className="flex items-center justify-between text-sm"><span className="text-[#5c524b] flex items-center gap-2"><RefrigeratorIcon size={14} className="text-[#b09f8d]"/> {t.inventory}</span><span className="font-mono font-bold text-[#e6b422] bg-[#fffbf0] px-2 py-0.5 rounded-md">{inventory.length}</span></div>
               <div className="flex items-center justify-between text-sm"><span className="text-[#5c524b] flex items-center gap-2"><GiftIcon size={14} className="text-[#b09f8d]"/> {t.wishlist}</span><span className="font-mono font-bold text-[#e6b422] bg-[#fffbf0] px-2 py-0.5 rounded-md">{wishlist.length}</span></div>
            </div>
            <div className="text-xs text-[#dccab0] mt-3 text-center border-t border-dashed border-[#efeadd] pt-2">{t.clickToManage}</div>
         </div>

         <h3 className="text-[#8c7b6d] font-bold text-lg mb-4 flex items-center gap-2"><CalendarIcon size={18}/> {selectedYear} {t.monthly} <span className="text-xs bg-[#efeadd] text-[#8c7b6d] px-2 py-0.5 rounded-full ml-2">{showBalance ? t.modeBalance : t.modeExpenditure}</span></h3>
         
         <div className="grid grid-cols-2 gap-3">
           {Array.from({ length: 12 }).map((_, index) => {
             const stats = getMonthStats(selectedYear, index);
             const isFuture = selectedYear > new Date().getFullYear() || (selectedYear === new Date().getFullYear() && index > new Date().getMonth());
             const photo = monthlyPhotos[`${selectedYear}-${index}`];
             const isDeficit = stats.balance < 0;
             return (
               <Card key={index} className={`relative overflow-hidden group hover:border-[#e6b422] h-[160px] flex flex-col justify-between ${isFuture ? 'opacity-60 grayscale-[0.3]' : ''}`}>
                  <div className="flex justify-between items-start z-10">
                     <div className="flex flex-col" onClick={() => handleMonthClick(index)}>
                        <span className={`text-2xl font-black transition-colors ${showBalance ? (isDeficit ? 'text-[#e07a5f]/80' : 'text-[#e6dcc0] group-hover:text-[#7ca982]/30') : 'text-[#e6dcc0] group-hover:text-[#e6b422]/20'}`}>{index + 1}<span className="text-sm ml-0.5 font-bold opacity-60">{t.month}</span></span>
                     </div>
                     <div className="relative">
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-20 w-8 h-8" onChange={(e) => handlePhotoUpload(e, index)} />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-all ${photo ? 'bg-[#e6b422] text-white' : 'bg-[#fffbf0] text-[#dccab0] hover:text-[#e6b422] border border-[#efeadd]'}`}>{photo ? <ImageIcon size={14}/> : <CameraIcon size={14}/>}</div>
                     </div>
                  </div>
                  <div className="space-y-1 mt-1 z-10" onClick={() => handleMonthClick(index)}>
                     {showBalance ? (
                       <>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.income}</span><span className="font-mono">{formatMoneySimple(stats.fixedIncome)}</span></div>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.expense}</span><span className="font-mono">{formatMoneySimple(stats.totalExpense)}</span></div>
                         <div className="h-px bg-[#efeadd] my-1 border-t border-dashed border-[#dccab0]/50"></div>
                         <div className="flex justify-between text-xs font-bold text-[#5c524b]"><span className="text-[10px] self-center text-[#8c7b6d]">±</span><span className={`font-mono ${isDeficit ? 'text-[#e07a5f]' : 'text-[#7ca982]'}`}>{formatMoneySimple(stats.balance)}</span></div>
                       </>
                     ) : (
                       <>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.fixedExp}</span><span className="font-mono">{formatMoneySimple(stats.fixedExpense)}</span></div>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.dailyExp}</span><span className="font-mono">{formatMoneySimple(stats.monthlyDaily)}</span></div>
                         <div className="h-px bg-[#efeadd] my-1 border-t border-dashed border-[#dccab0]/50"></div>
                         <div className="flex justify-between text-xs font-bold text-[#5c524b]"><span className="text-[10px] self-center text-[#8c7b6d]">总</span><span className="font-mono text-[#e07a5f]">{formatMoneySimple(stats.totalExpense)}</span></div>
                       </>
                     )}
                  </div>
               </Card>
             );
           })}
         </div>
      </div>
      <ImageModal src={previewImage} onClose={() => setPreviewImage(null)} />
      <RestoreModal isOpen={restoreModalOpen} onClose={() => setRestoreModalOpen(false)} onRestore={handleManualRestoreWrapper} onFileUpload={handleFileImport} keys={foundLegacyKeys} t={t} />
      <FixedItemsModal 
        isOpen={fixedModalOpen} 
        onClose={() => setFixedModalOpen(false)} 
        items={getFixedItemsForMonth(currentDate.getFullYear(), currentDate.getMonth())}
        onAdd={handleFixedAdd}
        onUpdate={(id, f, v) => updateFixedItemForMonth(currentDate.getFullYear(), currentDate.getMonth(), id, f, v)}
        onDelete={(id) => deleteFixedItemForMonth(currentDate.getFullYear(), currentDate.getMonth(), id)}
        t={t}
        year={currentDate.getFullYear()}
        month={currentDate.getMonth()}
      />
    </AppWrapper>
  );

  function handleManualRestoreWrapper(key) {
    handleManualRestore(key);
  }

  // 4. Week View
  return (
    <AppWrapper>
      <div className="bg-[#f2e6ce] sticky top-0 z-50 shadow-sm border-b border-[#e6dcc0]">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <button onClick={() => setView('year')} className="flex items-center gap-1 text-[#8c7b6d] text-sm font-bold hover:text-[#5c524b] mb-2 transition-colors"><HomeIcon size={16}/> {t.backHome}</button>
            {/* 顶部菜单 */}
             <div className="flex items-center gap-2 relative">
               <button onClick={() => setMenuOpen(!menuOpen)} className="bg-white/80 p-2 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422]"><MenuIcon size={18}/></button>
               {/* 菜单弹窗 */}
               {menuOpen && (
                 <>
                   <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)}></div>
                   <div className="absolute top-10 right-0 z-50 bg-white rounded-xl shadow-xl border border-[#efeadd] w-40 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-200">
                     <button onClick={() => { setDisplayCurrency(displayCurrency === 'JPY' ? 'CNY' : 'JPY'); setMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#5c524b] hover:bg-[#fffbf0] flex items-center gap-2"><RefreshIcon size={14}/> {displayCurrency === 'JPY' ? '显示人民币' : 'Show JPY'}</button>
                     <div className="h-px bg-[#efeadd] mx-2"></div>
                     <button onClick={() => { setFixedModalOpen(true); setMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#5c524b] hover:bg-[#fffbf0] flex items-center gap-2"><SettingsIcon size={14}/> {t.clickToManage}</button>
                   </div>
                 </>
               )}
             </div>
          </div>
          
          {/* 月度汇率设置 */}
          <div className="flex items-center justify-between bg-white/60 p-2 rounded-2xl border border-[#efeadd] mb-2">
             <div className="flex items-center gap-2 text-xs text-[#8c7b6d] font-bold px-2">
               {t.monthRate}
               <input 
                  type="number" 
                  value={weekStats.thisMonthRate} 
                  onChange={(e) => setRateForMonth(e.target.value)}
                  placeholder={exchangeRate}
                  className="w-12 bg-transparent border-b border-[#e6b422] text-center text-[#e6b422] focus:outline-none"
               />
             </div>
          </div>

          <div className="flex justify-between items-center bg-white/60 p-2 rounded-2xl border border-[#efeadd]">
            <button onClick={() => changeWeek(-1)} className="p-2 hover:bg-[#e4d4b2] rounded-full transition-colors"><ChevronLeftIcon size={20}/></button>
            <div className="text-center"><div className="text-[10px] font-bold text-[#b09f8d] uppercase tracking-wider mb-0.5">{t.weekView}</div><div className="flex items-center gap-2 text-lg font-black text-[#6d5e50]"><span className="text-[#e6b422]"><CalendarIcon size={18}/></span>{formatDateShort(currentWeekStart)} - {formatDateShort(currentWeekEnd)}</div></div>
            <button onClick={() => changeWeek(1)} className="p-2 hover:bg-[#e4d4b2] rounded-full transition-colors"><ChevronRightIcon size={20}/></button>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 space-y-6 pb-20">
        <div className="flex flex-col gap-4">
           {/* 本周合计卡片 - 支持切换币种 */}
           <div className="bg-white rounded-3xl p-5 border-2 border-[#efeadd] shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-1 relative z-10">
                <div className="text-[#8c7b6d] text-sm font-bold">{t.weeklyTotal} ({displayCurrency})</div>
                <button onClick={() => setDisplayCurrency(displayCurrency === 'JPY' ? 'CNY' : 'JPY')} className="bg-[#fffbf0] px-2 py-1 rounded-lg text-[10px] text-[#e6b422] border border-[#efeadd] font-bold flex items-center gap-1 hover:bg-[#fff9c4]">
                   <RefreshIcon size={10}/> {displayCurrency === 'JPY' ? 'CNY' : 'JPY'}
                </button>
              </div>
              <div className="text-2xl font-black text-[#e6b422] font-mono tracking-tight relative z-10">
                 {displayCurrency === 'JPY' 
                   ? formatMoneySimple(weekStats.weeklyDailyTotalJPY)
                   : formatMoney(weekStats.weeklyDailyTotalJPY)
                 }
              </div>
              
              {/* 装饰背景 */}
              <div className="absolute -right-4 -bottom-4 opacity-5"><PieChartIcon size={100}/></div>

              {/* 明细卡片：始终显示两种币种的原始数值 */}
              <div className="mt-2 pt-2 border-t border-dashed border-[#efeadd] flex flex-col gap-0.5 text-xs text-[#b09f8d] font-mono relative z-10">
                 <div className="flex justify-between"><span>JPY:</span><span>¥{weekStats.jpyTotal.toLocaleString()}</span></div>
                 <div className="flex justify-between"><span>CNY:</span><span>¥{weekStats.rmbTotal.toLocaleString()} (≈ ¥{Math.round(weekStats.rmbTotal / weekStats.thisMonthRate)})</span></div>
              </div>
           </div>
           
           {/* 2. 恢复整月显示，并添加“跨月补全”逻辑 */}
           <div className="bg-white rounded-3xl border-2 border-[#efeadd] p-4 transition-all duration-300">
             <h3 className="text-[#8c7b6d] font-bold text-sm mb-3 pl-1 flex items-center gap-2"><LayoutIcon size={16}/> {t.details}</h3>
             
             {/* 日历表头：日、一、二... */}
             <div className="grid grid-cols-7 gap-1">
                {['日','一','二','三','四','五','六'].map(d => <div key={d} className="text-center text-[10px] text-[#b09f8d] mb-2">{d}</div>)}
                
                {/* 1. 渲染当月前面的空白格 */}
                {(() => {
                    const firstDayObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                    const dayOfWeek = firstDayObj.getDay(); 
                    return Array.from({length: dayOfWeek}).map((_, i) => (
                        <div key={`empty-${i}`} className="aspect-square"></div>
                    ));
                })()}

                {/* 2. 渲染当月所有日期 */}
                {Array.from({length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())}).map((_, i) => {
                   const day = i + 1;
                   const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                   const dayObj = new Date(dateStr);
                   const hasData = weekStats.dailyBreakdown[formatDateTiny(dayObj)] > 0;
                   const displayDate = `${currentDate.getMonth()+1}.${day}`;
                   const isSelected = selectedDayDetails?.date === displayDate;
                   
                   return (
                     <div 
                       key={`curr-${day}`} 
                       onClick={() => handleDayClick(dayObj, displayDate)}
                       className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-bold cursor-pointer transition-all border
                         ${isSelected
                            ? 'bg-[#e6b422] border-[#e6b422] text-white shadow-md scale-105'
                            : hasData 
                                ? 'bg-[#fffbf0] border-[#e6b422] text-[#6d5e50] shadow-sm hover:bg-[#fff9c4]' 
                                : 'bg-[#fdfcf8] border-transparent text-[#dccab0] hover:border-[#efeadd]'}
                       `}
                     >
                        <span>{day}</span>
                        {hasData && !isSelected && <div className="w-1 h-1 bg-[#e07a5f] rounded-full mt-0.5"></div>}
                     </div>
                   )
                })}

                {/* 3. 渲染下个月的前几天 (填满最后一行，解决跨月看不见的问题) */}
                {(() => {
                    const firstDayObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
                    const startDay = firstDayObj.getDay();
                    const totalCellsSoFar = startDay + daysInMonth;
                    const remainingCells = 7 - (totalCellsSoFar % 7);
                    
                    if (remainingCells < 7 && remainingCells > 0) {
                        return Array.from({length: remainingCells}).map((_, i) => {
                            const nextMonthDay = i + 1;
                            // 构造下个月的Date对象
                            const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, nextMonthDay);
                            const displayDate = `${nextMonthDate.getMonth()+1}.${nextMonthDay}`;
                            const hasData = weekStats.dailyBreakdown[formatDateTiny(nextMonthDate)] > 0;
                            const isSelected = selectedDayDetails?.date === displayDate;

                            return (
                                <div 
                                   key={`next-${nextMonthDay}`} 
                                   onClick={() => handleDayClick(nextMonthDate, displayDate)}
                                   className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-bold cursor-pointer transition-all border opacity-60 hover:opacity-100
                                     ${isSelected
                                        ? 'bg-[#e6b422] border-[#e6b422] text-white shadow-md scale-105 opacity-100'
                                        : hasData
                                            ? 'bg-[#fffbf0] border-[#e6b422] text-[#6d5e50] shadow-sm'
                                            : 'bg-[#f9f9f9] border-transparent text-[#dccab0]'}
                                   `}
                                >
                                    <span>{nextMonthDay}</span>
                                    {nextMonthDay === 1 && <span className="text-[8px] scale-75 leading-none mt-[-2px]">{nextMonthDate.getMonth()+1}月</span>}
                                    {hasData && !isSelected && <div className="w-1 h-1 bg-[#e07a5f] rounded-full mt-0.5"></div>}
                                </div>
                            );
                        });
                    }
                    return null;
                })()}
             </div>

             {/* 选中的日期明细 - 直接显示在日历下方 */}
             {selectedDayDetails && (
                <div className="mt-4 border-t border-dashed border-[#efeadd] pt-4 animate-in slide-in-from-top duration-300 fade-in">
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-[#8c7b6d] font-bold">{selectedDayDetails.date} {t.dailyTotal}</div>
                        <button onClick={() => setSelectedDayDetails(null)} className="text-[#dccab0] hover:text-[#e07a5f]"><XIcon size={16}/></button>
                    </div>
                    
                    <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar">
                        {selectedDayDetails.items.length === 0 ? (
                            <div className="text-center py-4 text-[#dccab0] text-xs">{t.noDetails}</div>
                        ) : (
                            selectedDayDetails.items.map(tr => (
                                <div key={tr.id} className="flex justify-between items-center p-2.5 rounded-xl bg-[#fdfcf8] border border-[#f7f3e8]">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-[#5c524b]">{tr.name}</span>
                                        <span className="text-[10px] text-[#b09f8d] flex items-center gap-1">
                                            {tr.category && <span className="bg-[#fffbf0] text-[#e6b422] px-1 rounded-sm">{tr.category}</span>}
                                            {tr.currency}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono font-bold text-[#6d5e50] text-sm">¥{tr.amount}</span>
                                        <button onClick={() => setEditingTransaction(tr)} className="text-[#dccab0] hover:text-[#e6b422] p-1"><EditIcon size={14}/></button>
                                        <button onClick={() => deleteTransaction(tr.id)} className="text-[#f9e79f] hover:text-[#e07a5f] p-1"><Trash2Icon size={12}/></button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
             )}
           </div>
        </div>
        
        <div className="flex flex-col gap-6">
          {/* DELETED WEEK GOAL CARD */}
          
          <Card title={t.record} icon={<ReceiptIcon size={18}/>}>
            <form onSubmit={addTransaction} className="space-y-3">
              {/* Row 1: Date & Category & Currency */}
              <div className="flex gap-2">
                {/* Date Picker (38%) */}
                <div className="relative w-[38%]">
                   <input 
                      type="date" 
                      name="date"
                      defaultValue={formatDateISO(currentDate)}
                      onChange={(e) => setRecordDate(e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full"
                   />
                   <div className="w-full p-3 bg-white border-2 border-[#efeadd] rounded-xl text-xs text-[#e6b422] font-mono font-bold text-center flex items-center justify-between cursor-pointer h-[46px]">
                     <span>{formatDateTiny(recordDate)}</span>
                   </div>
                </div>

                {/* Category Select (34%) */}
                <div className="relative w-[34%]">
                    <select 
                        value={selectedCategory} 
                        onChange={handleCategoryChange}
                        className="w-full h-[46px] bg-white border-2 border-[#efeadd] rounded-xl text-xs outline-none pl-2 pr-6 text-center text-[#5c524b] font-bold appearance-none truncate"
                    >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        <option value="__NEW__" className="text-[#e6b422] font-bold">{t.addCategory}</option>
                    </select>
                    <div className="absolute right-1 top-3.5 pointer-events-none text-[#dccab0]"><TagIcon size={12}/></div>
                    {/* 小齿轮：点击管理分类 */}
                    <div 
                        onClick={() => setCategoryManagerOpen(true)}
                        className="absolute -right-2 -top-2 bg-white rounded-full p-1 border border-[#efeadd] shadow-sm cursor-pointer hover:bg-[#fff9c4] z-20"
                    >
                        <SettingsIcon size={10} className="text-[#e6b422]"/>
                    </div>
                </div>

                {/* Currency Select (28%) */}
                <select name="currency" className="w-[28%] bg-white border-2 border-[#efeadd] rounded-xl text-xs outline-none px-1 text-center text-[#5c524b] font-bold h-[46px]"><option value="JPY">JPY</option><option value="RMB">RMB</option></select>
              </div>

              {/* Row 2: Name & Amount */}
              <div className="flex gap-2">
                <input name="name" placeholder={t.itemName} required className="w-[60%] p-3 bg-white border-2 border-[#efeadd] rounded-xl text-sm outline-none h-[46px]" />
                <input name="amount" type="number" step="0.01" placeholder={t.amount} required className="w-[40%] p-3 bg-white border-2 border-[#efeadd] rounded-xl text-sm outline-none h-[46px]" />
              </div>

              <button type="submit" className="w-full py-3 bg-[#e6b422] text-white font-bold rounded-xl shadow-md hover:bg-[#d4a51e] flex justify-center items-center gap-2 h-[46px]"><PlusIcon size={18}/> {t.recordBtn}</button>
            </form>
          </Card>
        </div>
        
        <Card title={t.mealPlan} icon={<UtensilsIcon size={18}/>}>
          <div className="space-y-3">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="bg-white rounded-xl p-3 border border-[#efeadd] shadow-sm">
                <div className="flex items-center gap-2 mb-2"><span className="text-xs font-bold text-white bg-[#e07a5f] px-2 py-0.5 rounded-full">{[t.month, 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span></div>
                <div className="grid grid-cols-3 gap-2">
                  {['b', 'l', 'd'].map((type) => (
                    <div key={type} className="relative group">
                      <input value={currentMeals[day][type]} onChange={(e) => updateMeal(day, type, e.target.value)} placeholder={type==='b'?'早':type==='l'?'午':'晚'} className="w-full text-xs p-2 bg-[#fdfcf8] rounded-lg border border-transparent hover:border-[#dccab0] focus:border-[#e6b422] focus:bg-white outline-none text-center" />
                      <div className="absolute right-1 top-1.5 opacity-20 pointer-events-none">{type==='b'?<CoffeeIcon size={10}/>:type==='l'?<SunIcon size={10}/>:<MoonIcon size={10}/>}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 分类汇总卡片 */}
        <Card title={`${currentDate.getMonth() + 1}月${t.catSummary}`} icon={<PieChartIcon size={18}/>} className="mb-6">
            <div className="space-y-3">
                {getMonthlyCategoryStats(currentDate.getFullYear(), currentDate.getMonth()).map((cat, idx) => (
                    <div key={cat.name} className="flex flex-col gap-1">
                        <div className="flex justify-between items-end text-xs">
                            <span className="font-bold text-[#5c524b]">{cat.name}</span>
                            <div className="flex gap-2">
                                <span className="text-[#b09f8d]">{cat.percent.toFixed(1)}%</span>
                                <span className="font-mono text-[#e07a5f] font-bold">
                                    {displayCurrency === 'JPY' ? formatMoneySimple(cat.value) : formatMoney(cat.value)}
                                </span>
                            </div>
                        </div>
                        <div className="w-full h-2 bg-[#fdfcf8] rounded-full overflow-hidden border border-[#efeadd]">
                            <div 
                                className="h-full bg-[#e6b422] rounded-full" 
                                style={{ width: `${cat.percent}%`, opacity: Math.max(0.3, 1 - idx * 0.1) }}
                            ></div>
                        </div>
                    </div>
                ))}
                {getMonthlyCategoryStats(currentDate.getFullYear(), currentDate.getMonth()).length === 0 && (
                    <div className="text-center text-xs text-[#dccab0] py-4">{t.noDetails}</div>
                )}
            </div>
        </Card>

        {/* 固定收支卡片 - 移动到最底部 */}
        <div className="bg-[#fffbf0] rounded-3xl p-5 border-2 border-[#efeadd] shadow-sm mb-6">
            <div className="flex justify-between items-center mb-2">
                <div className="text-[#8c7b6d] text-sm font-bold">{t.fixedMonthly}</div>
                <button 
                  onClick={() => setFixedModalOpen(true)} 
                  className="flex items-center gap-1 text-xs text-[#e6b422] bg-white border border-[#efeadd] px-2 py-1 rounded-full hover:bg-[#fff9c4] font-bold"
                >
                    <SettingsIcon size={10}/> {t.clickToManage}
                </button>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col"><span className="text-xs text-[#b09f8d] flex items-center gap-1"><TrendingDownIcon size={10}/> {t.fixedExp}</span><span className="text-lg font-bold font-mono text-[#e07a5f]">{formatMoneySimple(weekStats.fixedExpense)}</span></div>
              {showBalance && weekStats.fixedIncome > 0 && <div className="flex flex-col"><span className="text-xs text-[#b09f8d] flex items-center gap-1"><TrendingUpIcon size={10}/> {t.income}</span><span className="text-lg font-bold font-mono text-[#7ca982]">{formatMoneySimple(weekStats.fixedIncome)}</span></div>}
            </div>
        </div>
      </div>
      <ImageModal src={previewImage} onClose={() => setPreviewImage(null)} />
      <RestoreModal isOpen={restoreModalOpen} onClose={() => setRestoreModalOpen(false)} onRestore={handleManualRestoreWrapper} onFileUpload={handleFileImport} keys={foundLegacyKeys} t={t} />
      <FixedItemsModal 
        isOpen={fixedModalOpen} 
        onClose={() => setFixedModalOpen(false)} 
        items={getFixedItemsForMonth(currentDate.getFullYear(), currentDate.getMonth())}
        onAdd={handleFixedAdd}
        onUpdate={(id, f, v) => updateFixedItemForMonth(currentDate.getFullYear(), currentDate.getMonth(), id, f, v)}
        onDelete={(id) => deleteFixedItemForMonth(currentDate.getFullYear(), currentDate.getMonth(), id)}
        t={t}
        year={currentDate.getFullYear()}
        month={currentDate.getMonth()}
      />
      {/* 新增的两个弹窗组件 */}
      <CategoryManagerModal 
        isOpen={categoryManagerOpen}
        onClose={() => setCategoryManagerOpen(false)}
        categories={categories}
        onRename={handleRenameCategory}
        onDelete={handleDeleteCategory}
        t={t}
      />
      <EditTransactionModal 
        isOpen={!!editingTransaction}
        onClose={() => setEditingTransaction(null)}
        transaction={editingTransaction}
        onSave={handleSaveTransaction}
        categories={categories}
        t={t}
      />
    </AppWrapper>
  );

  function handleManualRestoreWrapper(key) {
    handleManualRestore(key);
  }
}
