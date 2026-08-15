import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { scenarios } from '../data/scenarios';

const difficultyColors = {
  beginner: { bg: 'rgba(16, 185, 129, 0.15)', text: '#059669', label: 'Beginner' },
  intermediate: { bg: 'rgba(245, 158, 11, 0.15)', text: '#d97706', label: 'Intermediate' },
  advanced: { bg: 'rgba(239, 68, 68, 0.15)', text: '#b91c1c', label: 'Advanced' },
};

export default function Practice() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1 className="page-title animate-fade-in-up">{t('practice.title')}</h1>
      <p className="page-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {t('practice.subtitle')}
      </p>

      <p className="text-sm text-slate-500 mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        {t('practice.scenarioCount', { count: scenarios.length })}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
        {scenarios.map((scenario) => {
          const diff = difficultyColors[scenario.difficulty];

          return (
            <Link
              key={scenario.id}
              to={`/practice/${scenario.id}`}
              className="card block no-underline group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {t(scenario.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {t(scenario.descriptionKey)}
                  </p>
                </div>
                <span className="text-2xl flex-shrink-0">{scenario.channelIcon}</span>
              </div>

              {/* Details row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: diff.bg, color: diff.text }}
                >
                  {diff.label}
                </span>
                <span className="text-xs text-slate-600 px-2.5 py-1 rounded-full bg-black/5">
                  {scenario.channelIcon} {scenario.channel}
                </span>
                <span className="text-xs text-slate-600 px-2.5 py-1 rounded-full bg-black/5">
                  🌍 {scenario.country}
                </span>
              </div>

              {/* Key info */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                <div className="bg-black/5 rounded-lg p-2">
                  <span className="text-slate-500">{t('scenario.post')}</span>
                  <p className="text-slate-800 font-medium">{scenario.post}</p>
                </div>
                <div className="bg-black/5 rounded-lg p-2">
                  <span className="text-slate-500">{t('scenario.salary')}</span>
                  <p className="text-slate-800 font-medium">{scenario.salary}</p>
                </div>
              </div>

              {/* Start button */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  5 {t('pause.title').split(' ')[0]} steps
                </span>
                <span className="btn btn-primary text-xs px-4 py-2 min-h-0">
                  {t('practice.startScenario')} →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
