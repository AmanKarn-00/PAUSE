import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const navItems = [
  { path: '/', labelKey: 'nav.home', icon: '🏠' },
  { path: '/learn', labelKey: 'nav.learn', icon: '📚' },
  { path: '/practice', labelKey: 'nav.practice', icon: '🎯' },
  { path: '/verify', labelKey: 'nav.verify', icon: '🔍' },
  { path: '/about', labelKey: 'nav.about', icon: 'ℹ️' },
];

/* SVG prayer flags bunting — matches the colorful triangular flags in the PAUSE card image */
function PrayerFlags() {
  const colors = ['#c93a3a', '#1a64a3', '#4e9a51', '#de8c28', '#1e4c5b', '#c93a3a', '#1a64a3', '#4e9a51', '#de8c28', '#1e4c5b', '#c93a3a', '#1a64a3', '#4e9a51', '#de8c28', '#1e4c5b'];
  return (
    <div className="w-full overflow-hidden" style={{ height: 18, lineHeight: 0 }}>
      <svg viewBox="0 0 900 22" width="100%" height="22" preserveAspectRatio="none" style={{ display: 'block' }}>
        <line x1="0" y1="2" x2="900" y2="2" stroke="#64748b" strokeWidth="1.2" />
        {colors.map((c, i) => {
          const x = i * 60 + 5;
          return (
            <polygon
              key={i}
              points={`${x},3 ${x + 55},3 ${x + 27},20`}
              fill={c}
              opacity="0.85"
            />
          );
        })}
      </svg>
    </div>
  );
}

/* SVG mountain silhouette — matches the Himalayan mountain range footer in the PAUSE card */
function MountainSilhouette() {
  return (
    <div className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
      <svg viewBox="0 0 1440 120" width="100%" height="80" preserveAspectRatio="none" style={{ display: 'block' }}>
        <path
          d="M0,120 L0,90 L60,70 L120,85 L180,55 L240,75 L300,40 L360,60 L420,30 L480,50 L540,25 L600,45 L660,15 L720,35 L780,20 L840,40 L900,30 L960,50 L1020,35 L1080,55 L1140,45 L1200,65 L1260,50 L1320,75 L1380,60 L1440,80 L1440,120 Z"
          fill="#1e4c5b"
          opacity="0.9"
        />
        <path
          d="M0,120 L0,100 L80,85 L160,95 L240,75 L320,90 L400,65 L480,80 L560,55 L640,70 L720,50 L800,65 L880,45 L960,60 L1040,50 L1120,70 L1200,60 L1280,80 L1360,70 L1440,90 L1440,120 Z"
          fill="#1e4c5b"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export default function Layout() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Prayer flag bunting at the very top */}
      <PrayerFlags />

      {/* Top Navigation Bar */}
      <header className="glass sticky top-0 z-50" style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo with Nepal flag */}
          <NavLink to="/" className="flex items-center gap-2 no-underline">
            <span className="text-lg">🇳🇵</span>
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#1e4c5b' }}>PAUSE</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                    isActive
                      ? 'bg-[#1e4c5b] text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                <span className="mr-1.5">{item.icon}</span>
                {t(item.labelKey)}
              </NavLink>
            ))}
            <div className="ml-3 pl-3 border-l border-slate-200">
              <LanguageSelector />
            </div>
          </nav>

          {/* Mobile: Language + Menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden animate-fade-in border-t border-slate-200 pb-3 bg-white">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 text-sm font-medium no-underline transition-colors ${
                    isActive
                      ? 'text-[#1e4c5b] bg-[#1e4c5b]/5 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Mountain silhouette before footer */}
      <MountainSilhouette />

      {/* Footer — teal background matching the image bottom banner */}
      <footer style={{ background: '#1e4c5b', color: '#ffffff' }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p style={{ opacity: 0.85 }}>{t('footer.disclaimer')}</p>
          <p style={{ opacity: 0.6 }}>{t('footer.copyright')}</p>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass z-50" style={{ borderBottom: 'none', borderLeft: 'none', borderRight: 'none', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex items-center justify-around h-14">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-lg no-underline transition-colors min-w-[48px] min-h-[44px] ${
                  isActive
                    ? 'text-[#1e4c5b] font-bold'
                    : 'text-slate-500 hover:text-slate-700'
                }`
              }
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="text-[10px] font-medium leading-none">{t(item.labelKey)}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Spacer for bottom nav on mobile */}
      <div className="h-14 md:hidden" />
    </div>
  );
}
