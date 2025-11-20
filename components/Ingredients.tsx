import React from 'react';
import { Sprout, Droplet, Sun, Leaf, FlaskConical, Search, ShieldCheck, Microscope } from 'lucide-react';

const Ingredients: React.FC = () => {
  const ingredients = [
    {
      name: "Prekese",
      scientific: "Tetrapleura tetraptera",
      role: "The Vascular Dilator",
      desc: "Native to West Africa, this fruit is rich in flavonoids essential for cardiovascular health and blood flow regulation.",
      compounds: ["Flavonoids", "Tannins", "Zinc"],
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800", // Spice/Dark texture
      potency: 98
    },
    {
      name: "African Mahogany",
      scientific: "Khaya senegalensis",
      role: "The Stamina Bark",
      desc: "A legendary bark used for centuries to enhance physical endurance, reduce fatigue, and boost male vitality.",
      compounds: ["Saponins", "Sterols", "Iron"],
      image: "https://images.unsplash.com/photo-1546816564-440b528c7572?auto=format&fit=crop&q=80&w=800", // Bark texture
      potency: 95
    },
    {
      name: "Ginger Root",
      scientific: "Zingiber officinale",
      role: "The Bio-Activator",
      desc: "Warms the body and drastically improves the absorption of other herbs while soothing the digestive tract.",
      compounds: ["Gingerol", "Shogaol", "Magnesium"],
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800", // Ginger
      potency: 92
    },
    {
      name: "Pure Wild Honey",
      scientific: "Apis mellifera",
      role: "The Natural Preservative",
      desc: "Acts as a natural carrier for the herbal extracts, providing instant energy and immune support.",
      compounds: ["Enzymes", "Amino Acids", "Vitamins"],
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800", // Honey
      potency: 100
    }
  ];

  return (
    <section id="ingredients" className="py-24 bg-[#111] relative overflow-hidden">
      {/* Dark Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gray-800 border border-gray-700 mb-6">
             <div className="bg-[#FFD700] rounded-full p-1.5 mr-3">
               <FlaskConical className="h-4 w-4 text-black" />
             </div>
             <span className="text-gray-300 text-xs font-mono uppercase tracking-widest pr-4">Formulated by Nature</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-agombia text-white uppercase tracking-wide">
            The Agombia <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#D4AF37]">Apothecary</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-light text-lg">
            We don't use synthetic fillers. We harness the raw, unadulterated power of the rainforest. 
            Every capsule is a masterpiece of botanical engineering.
          </p>
        </div>

        {/* The Extraction Pipeline (Process Visual) */}
        <div className="hidden md:flex justify-between items-center max-w-4xl mx-auto mb-20 relative">
           {/* Connecting Line */}
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>
           
           {[
             { icon: Search, title: "Sourcing", desc: "Hand-picked Roots" },
             { icon: FlaskConical, title: "Extraction", desc: "Cold-Press Process" },
             { icon: ShieldCheck, title: "Purification", desc: "Removal of Impurities" },
             { icon: Microscope, title: "Potency", desc: "Lab Tested Quality" }
           ].map((step, idx) => (
             <div key={idx} className="flex flex-col items-center bg-[#111] px-4">
                <div className="w-16 h-16 rounded-full border-2 border-[#C8102E] bg-[#1A1A1A] flex items-center justify-center text-[#FFD700] mb-3 shadow-[0_0_15px_rgba(200,16,46,0.3)]">
                   <step.icon className="h-7 w-7" />
                </div>
                <h4 className="text-white font-agombia uppercase tracking-wide">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
             </div>
           ))}
        </div>

        {/* The Botanical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-gray-800 hover:border-[#FFD700] transition-colors duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-50 group-hover:brightness-40 saturate-50 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                
                {/* Default View (Bottom) */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                   <div className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.scientific}</div>
                   <h3 className="text-3xl font-agombia text-white mb-1">{item.name}</h3>
                   <div className="h-1 w-12 bg-[#C8102E] rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>
                   <p className="text-gray-300 font-agombia text-lg uppercase tracking-wide text-opacity-80">{item.role}</p>
                </div>

                {/* Reveal on Hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                   <p className="text-gray-400 text-sm leading-relaxed mb-4 border-l-2 border-[#FFD700] pl-3">
                     {item.desc}
                   </p>
                   
                   {/* Compounds Tags */}
                   <div className="flex flex-wrap gap-2 mb-4">
                      {item.compounds.map((c, i) => (
                        <span key={i} className="px-2 py-1 bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#FFD700] text-[10px] uppercase rounded">
                          {c}
                        </span>
                      ))}
                   </div>

                   {/* Potency Meter */}
                   <div className="w-full">
                      <div className="flex justify-between text-xs text-gray-400 uppercase mb-1">
                        <span>Bio-Availability</span>
                        <span>{item.potency}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#FFD700] h-full rounded-full" style={{width: `${item.potency}%`}}></div>
                      </div>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;