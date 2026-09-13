import logoText from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white mt-16 sm:mt-20 pt-12 pb-8 w-full">
      {/* Side padding matched to px-2 sm:px-3 lg:px-4 */}
      <div className="w-full px-2 sm:px-3 lg:px-4 max-w-7xl mx-auto">
        
        {/* MOBILE LAYOUT (Shows on mobile, hides on sm and up) */}
        <div className="block sm:hidden text-center space-y-6">
          <div className="flex flex-col items-center space-y-3">
            <img src={logoText} alt="Dev Stack" className="h-7 object-contain mx-auto" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center justify-center gap-3 text-xs font-semibold text-slate-500 pt-1">
              <a href="#" className="hover:text-slate-900">GitHub</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-900">Twitter</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          <div className="border-t border-slate-100 w-full pt-6" />

          <div className="flex flex-col items-center gap-2 text-[11px] text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-4 pt-1">
              <a href="#" className="hover:text-slate-600">Privacy</a>
              <a href="#" className="hover:text-slate-600">Terms</a>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT (Hides on mobile, shows on sm and up) */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-100">
            <div className="sm:col-span-2 space-y-4">
              <img src={logoText} alt="Dev Stack" className="h-7 object-contain" />
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Curated tools, technologies, and resources for developers building modern software.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-slate-500">
                <a href="#" className="hover:text-slate-900">GitHub</a>
                <a href="#" className="hover:text-slate-900">Twitter</a>
                <a href="#" className="hover:text-slate-900">LinkedIn</a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Product</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-slate-900">Home</a></li>
                <li><a href="#" className="hover:text-slate-900">Technologies</a></li>
                <li><a href="#" className="hover:text-slate-900">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Company</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-slate-900">About</a></li>
                <li><a href="#" className="hover:text-slate-900">Careers</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Legal</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-row items-center justify-between text-[11px] text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-600">Privacy</a>
              <a href="#" className="hover:text-slate-600">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}