import { useTranslation } from 'react-i18next';
import { verificationRoutes } from '../data/verificationRoutes';

export default function Verify() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1 className="page-title animate-fade-in-up">{t('verify.title')}</h1>
      <p className="page-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {t('verify.subtitle')}
      </p>

      {/* Important note */}
      <div
        className="card mb-6 animate-fade-in-up"
        style={{
          animationDelay: '0.15s',
          borderLeft: '3px solid #f59e0b',
          background: 'rgba(245, 158, 11, 0.1)',
        }}
      >
        <div className="flex items-start gap-3">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-sm text-amber-600 mb-1">{t('verify.importantNote')}</h3>
            <p className="text-xs text-slate-700 leading-relaxed">{t('verify.importantNoteText')}</p>
          </div>
        </div>
      </div>

      {/* Verification route cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
        {verificationRoutes.map((route) => (
          <div key={route.id} className="card">
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl flex-shrink-0">{route.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base text-slate-900">{t(route.titleKey)}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{route.authority}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 mb-3">{t(route.descriptionKey)}</p>

            {/* Fields to compare */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">
                {t('verify.fieldsToCompare')}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {route.fieldsToCompare.map((field) => (
                  <span
                    key={field}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{
                      background: 'rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      color: '#475569',
                    }}
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
              <span className="text-[10px] text-slate-500">
                {t('verify.lastChecked')}: {route.lastChecked}
              </span>
              <a
                href={route.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xs px-4 py-2 min-h-0"
              >
                {t('verify.visitSite')} ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
          {t('verify.disclaimer')}
        </p>
      </div>
    </div>
  );
}
