import React, { useState } from 'react';
import { Zap, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  // The link provided by the user for download
  const DOWNLOAD_LINK = "https://npr2t23ep2.feishu.cn/wiki/NsyVwd8x2ia3xukCP8vcxSYdnc0";

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-brand-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-slate-900 fill-current" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">QuickSend</span>
            </div>
          </div>
          <div>
            <a 
              href={DOWNLOAD_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-500 text-slate-900 hover:bg-brand-400 font-bold px-6 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download size={18} />
              下载应用
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};