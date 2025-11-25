import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const GalleryStrip: React.FC = () => {
  const images = [
    "https://i.postimg.cc/MGQwRdnD/Gemini-Generated-Image-18kta218kta218kt.png",
    "https://i.postimg.cc/YqrtV6PC/Gemini-Generated-Image-1fscti1fscti1fsc.png",
    "https://i.postimg.cc/VvDP1hhL/Gemini-Generated-Image-1ujvwk1ujvwk1ujv.png",
    "https://i.postimg.cc/d0yFd4hd/Gemini-Generated-Image-2kteza2kteza2kte.png",
    "https://i.postimg.cc/wj3gx6g1/Gemini-Generated-Image-2vf93d2vf93d2vf9.png",
    "https://i.postimg.cc/nrHfyx3F/Gemini-Generated-Image-32o86v32o86v32o8.png",
    "https://i.postimg.cc/bwdpYzp8/Gemini-Generated-Image-3kvrny3kvrny3kvr.png",
    "https://i.postimg.cc/Hx1gtX5D/Gemini-Generated-Image-402q7c402q7c402q.png",
    "https://i.postimg.cc/wxVphtB8/Gemini-Generated-Image-425vge425vge425v.png",
    "https://i.postimg.cc/GmNrHZmd/Gemini-Generated-Image-48oa2o48oa2o48oa.png",
    "https://i.postimg.cc/MK6z47LX/Gemini-Generated-Image-5d5qkm5d5qkm5d5q.png",
    "https://i.postimg.cc/YSW7gbvy/Gemini-Generated-Image-5j89i45j89i45j89.png",
    "https://i.postimg.cc/C1CVr5HN/Gemini-Generated-Image-5jmf195jmf195jmf.png",
    "https://i.postimg.cc/zG38DJ8J/Gemini-Generated-Image-68gvk068gvk068gv.png",
    "https://i.postimg.cc/593VwHt6/Gemini-Generated-Image-6ztykv6ztykv6zty.png",
    "https://i.postimg.cc/VvDP1hhs/Gemini-Generated-Image-7e6nvv7e6nvv7e6n.png",
    "https://i.postimg.cc/TY3XQRy1/Gemini-Generated-Image-7wd74h7wd74h7wd7.png",
    "https://i.postimg.cc/cCsGpWXD/Gemini-Generated-Image-819re6819re6819r.png",
    "https://i.postimg.cc/NM8wCF71/Gemini-Generated-Image-90y2ij90y2ij90y2.png",
    "https://i.postimg.cc/mZwsQcgK/Gemini-Generated-Image-ac3ejkac3ejkac3e.png",
    "https://i.postimg.cc/sXPRHx96/Gemini-Generated-Image-ack1o1ack1o1ack1.png",
    "https://i.postimg.cc/j5YbhPN5/Gemini-Generated-Image-bi35qebi35qebi35.png",
    "https://i.postimg.cc/FsThQftC/Gemini-Generated-Image-ci4zn7ci4zn7ci4z.png",
    "https://i.postimg.cc/JztM71m9/Gemini-Generated-Image-dcglzodcglzodcgl.png",
    "https://i.postimg.cc/15vyZgxH/Gemini-Generated-Image-erwh6jerwh6jerwh.png",
    "https://i.postimg.cc/0Q1sCDmb/Gemini-Generated-Image-etjkxetjkxetjkxe.png",
    "https://i.postimg.cc/vZjMcpZ1/Gemini-Generated-Image-ev1s6tev1s6tev1s.png",
    "https://i.postimg.cc/fyBQZPPm/Gemini-Generated-Image-ewns9zewns9zewns.png",
    "https://i.postimg.cc/fL7hqyj3/Gemini-Generated-Image-fx4ltqfx4ltqfx4l.png",
    "https://i.postimg.cc/qMJpYsF7/Gemini-Generated-Image-h0yzksh0yzksh0yz.png",
    "https://i.postimg.cc/LXkMQ5Bh/Gemini-Generated-Image-hr8vkrhr8vkrhr8v.png",
    "https://i.postimg.cc/1t1QKw6Z/Gemini-Generated-Image-iz1au6iz1au6iz1a.png",
    "https://i.postimg.cc/SsbhGC9H/Gemini-Generated-Image-j33bkgj33bkgj33b.png",
    "https://i.postimg.cc/MHWJCwdg/Gemini-Generated-Image-j8hu5lj8hu5lj8hu.png",
    "https://i.postimg.cc/1zqS6Jgh/Gemini-Generated-Image-jwe8r1jwe8r1jwe8.png",
    "https://i.postimg.cc/7YHqc3RC/Gemini-Generated-Image-l8i0kal8i0kal8i0.png",
    "https://i.postimg.cc/JztM71m6/Gemini-Generated-Image-lhk5cclhk5cclhk5.png",
    "https://i.postimg.cc/B6f0CHDS/Gemini-Generated-Image-lu4sqplu4sqplu4s.png",
    "https://i.postimg.cc/gcDWvw00/Gemini-Generated-Image-miyy0emiyy0emiyy.png",
    "https://i.postimg.cc/02V9q6gS/Gemini-Generated-Image-mrngr6mrngr6mrng.png",
    "https://i.postimg.cc/hjRB0TxK/Gemini-Generated-Image-nnofn7nnofn7nnof.png",
    "https://i.postimg.cc/bwM8sKwN/Gemini-Generated-Image-nwa28onwa28onwa2.png",
    "https://i.postimg.cc/g25dnf24/Gemini-Generated-Image-oxpwr6oxpwr6oxpw.png",
    "https://i.postimg.cc/HW2gQJkv/Gemini-Generated-Image-p3gosrp3gosrp3go.png",
    "https://i.postimg.cc/D0239hxK/Gemini-Generated-Image-phm017phm017phm0.png",
    "https://i.postimg.cc/1XJ1Pddn/Gemini-Generated-Image-plrghhplrghhplrg.png",
    "https://i.postimg.cc/3wvhpnk9/Gemini-Generated-Image-qpsfzzqpsfzzqpsf.png",
    "https://i.postimg.cc/8PpT3RYd/Gemini-Generated-Image-rhlmthrhlmthrhlm.png",
    "https://i.postimg.cc/BQnGNq8Q/Gemini-Generated-Image-svu97nsvu97nsvu9.png",
    "https://i.postimg.cc/QtZ3q157/Gemini-Generated-Image-v1tm3qv1tm3qv1tm.png",
    "https://i.postimg.cc/LXkMQ5Bb/Gemini-Generated-Image-vzxu95vzxu95vzxu.png",
    "https://i.postimg.cc/pTMHBz8n/Gemini-Generated-Image-w7eh5w7eh5w7eh5w.png",
    "https://i.postimg.cc/K84xcZxh/Gemini-Generated-Image-wokpw3wokpw3wokp-(1).png",
    "https://i.postimg.cc/k4PmyKS0/Gemini-Generated-Image-x817rix817rix817.png",
    "https://i.postimg.cc/bNmqjGXK/Gemini-Generated-Image-xzg8j7xzg8j7xzg8.png",
    "https://i.postimg.cc/Fz9XMvDx/Gemini-Generated-Image-ym4xieym4xieym4x.png",
    "https://i.postimg.cc/Z5gZC15p/Gemini-Generated-Image-z0uxs6z0uxs6z0ux.png",
    "https://i.postimg.cc/B675NmBX/Gemini-Generated-Image-48oa2o48oa2o48oa.jpg",
    "https://i.postimg.cc/SRX6PcZp/Gemini-Generated-Image-69pp6o69pp6o69pp.jpg",
    "https://i.postimg.cc/3NyXq2tp/Gemini-Generated-Image-7wd74h7wd74h7wd7.jpg",
    "https://i.postimg.cc/T1yVsntS/Gemini-Generated-Image-8drzm88drzm88drz.jpg",
    "https://i.postimg.cc/3Rfj9tFZ/Gemini-Generated-Image-ac3ejkac3ejkac3e.jpg",
    "https://i.postimg.cc/MT30t9mH/Gemini-Generated-Image-ev1s6tev1s6tev1s.jpg",
    "https://i.postimg.cc/qRDcQ1x2/Gemini-Generated-Image-fx4ltqfx4ltqfx4l.jpg",
    "https://i.postimg.cc/904dkyLx/Gemini-Generated-Image-ghhtq2ghhtq2ghht.jpg",
    "https://i.postimg.cc/Bb8Tz2hW/Gemini-Generated-Image-gx6tz5gx6tz5gx6t.jpg",
    "https://i.postimg.cc/C5WGpdt0/Gemini-Generated-Image-igi4sigi4sigi4si.jpg",
    "https://i.postimg.cc/6q7rPCMV/Gemini-Generated-Image-jli8rrjli8rrjli8.jpg",
    "https://i.postimg.cc/8cFRYLZn/Gemini-Generated-Image-la7kr9la7kr9la7k.jpg",
    "https://i.postimg.cc/yxJmG0LP/Gemini-Generated-Image-pa2ihopa2ihopa2i.jpg",
    "https://i.postimg.cc/WzQGctyH/Gemini-Generated-Image-qk4ydyqk4ydyqk4y.jpg",
    "https://i.postimg.cc/prgfMySw/Gemini-Generated-Image-stoq8wstoq8wstoq.jpg",
    "https://i.postimg.cc/Y0J6BjVt/Gemini-Generated-Image-v38pudv38pudv38p.jpg",
    "https://i.postimg.cc/9MgP1LYD/Gemini-Generated-Image-w7eh5w7eh5w7eh5w.jpg",
    "https://i.postimg.cc/gJty4gHw/Gemini-Generated-Image-wokpw3wokpw3wokp-(1).jpg"
  ];

  // Duplicate images for infinite scroll effect
  const marqueeImages = [...images, ...images];

  return (
    <section id="gallery" className="bg-black py-16 border-b-4 border-[#D4AF37] overflow-hidden relative group/section">
      
      {/* SECTION HEADER OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none flex flex-col justify-center items-center opacity-0 group-hover/section:opacity-100 transition-opacity duration-700">
         <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
            <h3 className="text-3xl font-agombia text-white uppercase tracking-widest">The Agombia <span className="text-[#C8102E]">Lifestyle</span></h3>
            <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.3em] mt-1">Join the Movement</p>
         </div>
      </div>

      <div className="relative w-full flex">
         <div className="flex animate-[scroll_120s_linear_infinite] group-hover/section:[animation-play-state:paused]">
            {marqueeImages.map((src, index) => (
               <div key={index} className="relative w-[300px] h-[400px] flex-shrink-0 mx-2 rounded-xl overflow-hidden group/card cursor-pointer border border-gray-800 hover:border-[#FFD700] transition-all duration-300">
                  
                  {/* Image */}
                  <img 
                     src={src} 
                     alt={`Agombia Lifestyle`} 
                     className="w-full h-full object-cover object-[center_20%] filter grayscale group-hover/card:grayscale-0 transition-all duration-700 transform scale-125 group-hover/card:scale-135"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-300"></div>

                  {/* SHOP THE LOOK HOTSPOT (Center) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-30">
                     <div className="bg-white/10 backdrop-blur-md border border-white/50 p-3 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:bg-[#C8102E] hover:border-[#C8102E] transition-colors">
                        <ShoppingBag className="w-6 h-6 text-white" />
                     </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 z-30 transform translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                     <div className="text-[10px] text-[#FFD700] font-bold uppercase tracking-widest mb-1">Featured</div>
                     <div className="text-white font-agombia text-xl uppercase">Agombia</div>
                  </div>
               </div>
            ))}
         </div>
      </div>
      
      {/* Global Styles for Scroll Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default GalleryStrip;
