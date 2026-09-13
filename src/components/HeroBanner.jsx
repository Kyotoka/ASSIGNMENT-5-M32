;
import bannerStack from '../assets/banner-stack.png';

export default function HeroBanner() {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-[72.5px] py-8 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left w-full">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-center md:items-start space-y-4 sm:space-y-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-md md:max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-3 w-full pt-2">
            <button className="w-full max-w-[170px] sm:w-auto text-xs sm:text-sm font-medium text-white px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 shadow-md transition-opacity text-center whitespace-nowrap">
              Explore Technologies
            </button>
            <button className="w-full max-w-[170px] sm:w-auto text-xs sm:text-sm font-medium text-slate-700 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-center whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right Graphic Column */}
        <div className="flex justify-center md:justify-end w-full pt-4 md:pt-0">
          <img 
            src={bannerStack} 
            alt="Development Stack Illustration" 
            className="w-full max-w-[280px] sm:max-w-md md:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}