import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const pauseSteps = [
  { letter: 'P', className: 'pause-p', stepKey: 'provider', icon: '👥' },
  { letter: 'A', className: 'pause-a', stepKey: 'authenticate', icon: '🛡️' },
  { letter: 'U', className: 'pause-u', stepKey: 'incentive', icon: '💡' },
  { letter: 'S', className: 'pause-s', stepKey: 'rush', icon: '⏰' },
  { letter: 'E', className: 'pause-e', stepKey: 'evidence', icon: '📋' },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100dvh-64px)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(30,76,91,0.06) 0%, transparent 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left mb-10 lg:mb-0 animate-fade-in-up">
              {/* PAUSE letters animated */}
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6">
                {pauseSteps.map((item, i) => (
                  <div
                    key={item.letter}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-extrabold ${item.className}`}
                    style={{
                      background: 'var(--step-color)',
                      color: '#ffffff',
                      animationDelay: `${i * 0.1}s`,
                      boxShadow: `0 4px 14px color-mix(in srgb, var(--step-color) 40%, transparent)`,
                    }}
                  >
                    {item.letter}
                  </div>
                ))}
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                <span className="gradient-text">{t('home.headline')}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-3 max-w-xl mx-auto lg:mx-0">
                {t('home.subheadline')}
              </p>

              {/* Action line — styled like the red banner in the image */}
              <div
                className="inline-block px-4 py-2 rounded-lg mb-6 text-sm sm:text-base font-semibold"
                style={{ background: 'rgba(201, 58, 58, 0.1)', color: '#c93a3a', border: '1px solid rgba(201, 58, 58, 0.3)' }}
              >
                ⚠️ {t('home.actionLine')}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link to="/learn" className="btn btn-primary w-full sm:w-auto text-base px-8 py-4">
                  📖 {t('home.primaryCta')}
                </Link>
                <Link to="/practice" className="btn btn-secondary w-full sm:w-auto text-base px-8 py-4">
                  🎯 {t('home.secondaryCta')}
                </Link>
              </div>
            </div>

            {/* Right: Decision outcomes preview — from the right side of the PAUSE card */}
            <div className="animate-fade-in-up hidden lg:block" style={{ animationDelay: '0.3s' }}>
              <div className="card p-6" style={{ borderTop: '4px solid #1e4c5b' }}>
                <h3 className="text-lg font-bold text-center mb-5" style={{ color: '#1e4c5b' }}>
                  {t('pause.title')}
                </h3>
                <div className="space-y-3">
                  {pauseSteps.map((item, i) => (
                    <div
                      key={item.letter}
                      className={`flex items-center gap-3 p-3 rounded-lg ${item.className}`}
                      style={{ background: 'var(--step-bg)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ background: 'var(--step-color)', color: '#fff' }}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-sm" style={{ color: 'var(--step-color)' }}>
                          {t(`pause.${item.stepKey}.label`)}
                        </span>
                        <p className="text-xs text-slate-600 mt-0.5 truncate">
                          {t(`pause.${item.stepKey}.question`)}
                        </p>
                      </div>
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PAUSE — mobile version (shown on screens < lg) */}
      <section className="lg:hidden py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">{t('pause.title')}</h2>
          <p className="text-slate-600 text-center mb-8">{t('home.heroDescription')}</p>
          <div className="space-y-3 stagger-children">
            {pauseSteps.map((item) => (
              <div
                key={item.letter}
                className={`card flex items-start gap-4 ${item.className}`}
                style={{ borderLeft: '4px solid var(--step-color)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-lg font-bold"
                  style={{ background: 'var(--step-color)', color: '#fff' }}
                >
                  {item.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: 'var(--step-color)' }}>
                    {t(`pause.${item.stepKey}.label`)}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {t(`pause.${item.stepKey}.question`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Outcomes — from the right side of the PAUSE card image */}
      <section className="py-12 sm:py-16 px-4" style={{ background: 'rgba(30, 76, 91, 0.04)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2" style={{ color: '#1e4c5b' }}>
            {t('decision.title', { defaultValue: 'निर्णयको नतिजा' })}
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto text-sm">
            {t('home.heroDescription')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {/* Verified */}
            <div className="card text-center p-6" style={{ borderTop: '4px solid #059669' }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl"
                style={{ background: 'rgba(16, 185, 129, 0.15)' }}>✅</div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#065f46' }}>
                {t('decision.verified.title')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('decision.verified.description')}
              </p>
            </div>
            {/* Mismatch */}
            <div className="card text-center p-6" style={{ borderTop: '4px solid #d97706' }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl"
                style={{ background: 'rgba(245, 158, 11, 0.15)' }}>⚠️</div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#92400e' }}>
                {t('decision.mismatch.title')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('decision.mismatch.description')}
              </p>
            </div>
            {/* Cannot Verify */}
            <div className="card text-center p-6" style={{ borderTop: '4px solid #6b7280' }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl"
                style={{ background: 'rgba(107, 114, 128, 0.15)' }}>❓</div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#374151' }}>
                {t('decision.cannotVerify.title')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('decision.cannotVerify.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 lg:gap-6">
          {[
            { value: '2', label: t('home.statsScenarios'), icon: '🎯' },
            { value: '6', label: t('home.statsVerification'), icon: '🔗' },
            { value: '2', label: t('home.statsLanguages'), icon: '🌐' },
          ].map((stat) => (
            <div key={stat.label} className="card text-center py-6 lg:py-8">
              <div className="text-2xl lg:text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="card p-8 sm:p-10 lg:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(30,76,91,0.08), rgba(30,76,91,0.03))',
              border: '1px solid rgba(30,76,91,0.2)',
            }}
          >
            <p className="text-sm font-medium mb-2" style={{ color: '#c93a3a' }}>
              {t('home.actionLine')}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#1e4c5b' }}>
              {t('pause.subtitle')}
            </h2>
            <p className="text-slate-600 text-sm mb-6 italic">
              "देखि-दैमा वास्तविक हुँदैन — कार्य गर्नुअघि पुष्टि गर्नुहोस्।"
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/learn" className="btn btn-primary">📖 {t('home.primaryCta')}</Link>
              <Link to="/practice" className="btn btn-secondary">🎯 {t('home.secondaryCta')}</Link>
              <Link to="/verify" className="btn btn-ghost">🔍 {t('home.verifyCta')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
