import React from 'react';
import { Download, WifiOff, UserX, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const DOWNLOAD_LINK = "https://npr2t23ep2.feishu.cn/wiki/NsyVwd8x2ia3xukCP8vcxSYdnc0";

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-brand-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
          局域网传输神器
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
          <span className="block mb-4">QuickSend</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 leading-tight">
            让传输回归简单
          </span>
        </h1>

        <p className="mt-4 max-w-4xl text-xl text-slate-400 mb-10 leading-relaxed">
          一款轻量级、高性能的局域网文件传输工具。无需互联网、无需登录账号，打开即用。让文件在电脑、手机、平板之间自由流转。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={DOWNLOAD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-full text-slate-900 bg-brand-500 hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1"
          >
            <Download className="w-6 h-6" />
            立即下载
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-500 text-sm font-medium uppercase tracking-wider">
          <div className="flex flex-col items-center gap-2">
            <WifiOff className="w-6 h-6 text-slate-400" />
            <span>无需互联网</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserX className="w-6 h-6 text-slate-400" />
            <span>无需登录账号</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-slate-400" />
            <span>数据私有安全</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-6 h-6 text-slate-400" />
            <span>打开即用</span>
          </div>
        </div>
      </div>
    </div>
  );
};