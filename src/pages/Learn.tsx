import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const steps = [
  { key: 'provider', letter: 'P', className: 'pause-p' },
  { key: 'authenticate', letter: 'A', className: 'pause-a' },
  { key: 'incentive', letter: 'U', className: 'pause-u' },
  { key: 'rush', letter: 'S', className: 'pause-s' },
  { key: 'evidence', letter: 'E', className: 'pause-e' },
] as const;

export default function Learn() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [mode, setMode] = useState<'overview' | 'walkthrough'>('overview');
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  if (mode === 'walkthrough') {
    const step = steps[walkthroughStep];

    return (
      <div className="page-container">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          {steps.map((s, i) => (
            <div
              key={s.letter}
              className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${s.className}`}
              style={{
                background: i <= walkthroughStep ? 'var(--step-color)' : 'var(--color-surface-300)',
              }}
            />
          ))}
        </div>

        <div className="animate-slide-in-right" key={walkthroughStep}>
          {/* Step header */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-extrabold ${step.className}`}
              style={{
                background: 'var(--step-color)',
                color: '#ffffff',
                boxShadow: `0 8px 20px color-mix(in srgb, var(--step-color) 40%, transparent)`,
              }}
            >
              {step.letter}
            </div>
            <div>
              <div className="text-sm font-medium text-slate-500">
                {t('scenario.stepOf', { current: walkthroughStep + 1, total: 5 })}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--step-color)' }}>
                {t(`pause.${step.key}.label`)}
              </h2>
            </div>
          </div>

          {/* Question */}
          <div
            className="card mb-6"
            style={{ borderLeft: '3px solid var(--step-color)' }}
          >
            <h3 className="text-lg font-bold mb-2 text-slate-800">
              {t(`pause.${step.key}.question`)}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              {t(`pause.${step.key}.description`)}
            </p>
            <div
              className="rounded-lg p-3 mt-3"
              style={{ background: 'var(--step-bg)' }}
            >
              <p className="text-xs font-medium" style={{ color: 'var(--step-color)' }}>
                💡 {t(`pause.${step.key}.tip`)}
              </p>
            </div>
          </div>

          {/* Emphasis */}
          <div className="card mb-8" style={{ background: 'var(--color-surface-200)' }}>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">{t(`pause.${step.key}.emphasis`)}</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (walkthroughStep > 0) setWalkthroughStep(walkthroughStep - 1);
                else setMode('overview');
              }}
              className="btn btn-secondary flex-1"
            >
              {walkthroughStep > 0 ? t('pause.prevStep') : t('pause.backToOverview')}
            </button>
            {walkthroughStep < 4 ? (
              <button
                onClick={() => setWalkthroughStep(walkthroughStep + 1)}
                className="btn btn-primary flex-1"
              >
                {t('pause.nextStep')} →
              </button>
            ) : (
              <Link to="/practice" className="btn btn-primary flex-1">
                {t('pause.startPractice')} →
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Overview mode
  return (
    <div className="page-container">
      <h1 className="page-title animate-fade-in-up">{t('pause.title')}</h1>
      <p className="page-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {t('pause.subtitle')}
      </p>

      {/* Start walkthrough button */}
      <button
        onClick={() => { setMode('walkthrough'); setWalkthroughStep(0); }}
        className="btn btn-primary w-full sm:w-auto mb-8 animate-fade-in-up"
        style={{ animationDelay: '0.15s' }}
      >
        📖 {t('common.getStarted')}
      </button>

      {/* Expandable cards — grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
        {steps.map((step, index) => {
          const isActive = activeStep === index;

          return (
            <div key={step.letter} className={step.className}>
              <button
                onClick={() => setActiveStep(isActive ? null : index)}
                className="card w-full text-left cursor-pointer"
                style={{
                  borderLeft: '3px solid var(--step-color)',
                  background: isActive ? 'var(--step-bg)' : undefined,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{
                      background: isActive ? 'var(--step-color)' : 'var(--step-bg)',
                      color: isActive ? '#ffffff' : 'var(--step-color)',
                    }}
                  >
                    {step.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base" style={{ color: 'var(--step-color)' }}>
                      {t(`pause.${step.key}.label`)}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5 truncate">
                      {t(`pause.${step.key}.question`)}
                    </p>
                  </div>
                  <span className="text-slate-500 text-lg flex-shrink-0 transition-transform duration-200" style={{ transform: isActive ? 'rotate(180deg)' : 'none' }}>
                    ▾
                  </span>
                </div>

                {/* Expanded content */}
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {t(`pause.${step.key}.description`)}
                    </p>
                    <div className="rounded-lg p-3" style={{ background: 'var(--color-surface-200)' }}>
                      <p className="text-xs font-semibold" style={{ color: 'var(--step-color)' }}>
                        💡 {t(`pause.${step.key}.tip`)}
                      </p>
                    </div>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 text-center">
        <Link to="/practice" className="btn btn-primary">
          {t('pause.startPractice')} →
        </Link>
      </div>
    </div>
  );
}
