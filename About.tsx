import React from 'react';
import { Briefcase, Printer, Image, WifiOff } from 'lucide-react';

export const About: React.FC = () => {
  const scenarios = [
    {
      title: "办公协作",
      text: "办公室同事间快速分享文档、表格或演示文稿，无需登录即时通讯软件。",
      icon: Briefcase
    },
    {
      title: "打印服务",
      text: "打印店顾客直接传输文件到打印电脑，避免使用 U 盘带来的病毒风险。",
      icon: Printer
    },
    {
      title: "媒体流转",
      text: "将手机拍摄的高清照片或视频秒传至电脑进行剪辑处理，无需数据线。",
      icon: Image
    },
    {
      title: "离线环境",
      text: "在没有互联网连接的完全离线网络环境中，依然可以进行高速数据交换。",
      icon: WifiOff
    }
  ];

  return (
    <div className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            适用场景
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            无论工作还是生活，QuickSend 都能为您提供最便捷的传输方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((item, index) => (
            <div key={index} className="flex items-start p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-brand-500/30 transition-all">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500/10 text-brand-500">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-base text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};