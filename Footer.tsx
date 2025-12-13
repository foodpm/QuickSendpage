import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-brand-500 p-1.5 rounded text-slate-900">
              <Zap size={16} className="fill-current" />
            </div>
            <span className="text-lg font-bold text-white">QuickSend</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="mailto:foodpm@qq.com" className="hover:text-white transition-colors">
              联系我们：foodpm@qq.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} QuickSend 团队. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};