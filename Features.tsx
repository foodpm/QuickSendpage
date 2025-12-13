import React from 'react';
import { Zap, Globe, Layout, ClipboardList, Shield, HardDrive } from 'lucide-react';

const features = [
  {
    name: '极速传输，无界互联',
    description: '基于局域网直连技术，速度仅受路由带宽限制。无论是文档还是 10GB 高清视频，眨眼间完成传输，告别限速。',
    icon: Zap,
  },
  {
    name: '跨平台，零门槛',
    description: '完美支持 Windows、macOS 和 NAS。任意手机或平板只需扫描二维码或输入地址即可连接，无需安装客户端。',
    icon: Globe,
  },
  {
    name: '现代化交互体验',
    description: '极简 UI 设计，拒绝繁杂。支持文件和文件夹拖拽上传，批量处理更加高效便捷。',
    icon: Layout,
  },
  {
    name: '剪贴板共享',
    description: '支持文字和链接的快速跨设备共享，让“手机复制，电脑粘贴”成为现实。',
    icon: ClipboardList,
  },
  {
    name: '安全可控',
    description: '所有文件仅在局域网内传输，数据掌握在自己手中。支持设置访问密码，防止陌生设备误连。',
    icon: Shield,
  },
  {
    name: '强大且灵活',
    description: '内置 16GB+ 单文件传输支持。自动优选最佳网络接口，智能识别局域网 IP，省去繁琐配置。',
    icon: HardDrive,
  },
];

export const Features: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-400 font-semibold tracking-wide uppercase">Why QuickSend</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            核心亮点
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            专为解决跨设备传输难题而生，打造极致的局域网传输体验。
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-slate-800/50 rounded-2xl px-6 pb-8 border border-slate-700 hover:border-brand-500/50 transition-colors duration-300 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-500 rounded-xl shadow-lg">
                        <feature.icon className="h-6 w-6 text-slate-900" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};