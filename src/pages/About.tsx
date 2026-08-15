import { useTranslation } from 'react-i18next';

const sources = [
  { name: 'Department of Foreign Employment (DOFE)', url: 'https://dofe.gov.np/' },
  { name: 'DOFE Foreign Job Search', url: 'https://foreignjob.dofe.gov.np/Home/Index' },
  { name: 'DOFE Recruitment Agency Search', url: 'https://foreignjob.dofe.gov.np/Home/RecruitmentAgency' },
  { name: 'DOFE Pre-Permission Detail Search', url: 'https://foreignjob.dofe.gov.np/Home/PrePermissionDetail' },
  { name: 'Foreign Employment Information Management System (FEIMS)', url: 'https://feims.dofe.gov.np/' },
  { name: 'DOFE Recognized Countries', url: 'https://dofe.gov.np/pages/recognized-country/' },
];

export default function About() {
  const { t } = useTranslation();
  const principles = t('about.principlesList', { returnObjects: true }) as string[];
  const notItems = t('about.notWhatItems', { returnObjects: true }) as string[];

  return (
    <div className="page-container">
      <h1 className="page-title animate-fade-in-up">{t('about.title')}</h1>
      <p className="page-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {t('about.builtFor')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
        {/* What is PAUSE */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-3">{t('about.whatIs')}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{t('about.whatIsText')}</p>
        </div>

        {/* What PAUSE is NOT */}
        <div className="card" style={{ borderLeft: '3px solid #f87171' }}>
          <h2 className="text-lg font-bold text-red-600 mb-3">{t('about.notWhat')}</h2>
          <ul className="space-y-2">
            {Array.isArray(notItems) && notItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-red-600 flex-shrink-0 mt-1">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Methodology */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-3">{t('about.methodology')}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{t('about.methodologyText')}</p>
        </div>

        {/* Content Principles */}
        <div className="card" style={{ borderLeft: '3px solid #fbbf24' }}>
          <h2 className="text-lg font-bold text-amber-600 mb-3">{t('about.principles')}</h2>
          <ul className="space-y-2">
            {Array.isArray(principles) && principles.map((principle, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-amber-600 flex-shrink-0 mt-1">•</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sources */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-3">{t('about.sources')}</h2>
          <div className="space-y-2">
            {sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors no-underline p-2 rounded-lg hover:bg-black/5"
              >
                <span className="text-slate-400">🔗</span>
                <span className="truncate">{source.name}</span>
                <span className="text-slate-400 flex-shrink-0 text-xs">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* PAUSE framework summary */}
        <div
          className="card text-center p-8 md:col-span-2"
          style={{
            background: 'linear-gradient(135deg, var(--color-surface-100), var(--color-surface-200))',
            border: '1px solid var(--color-surface-300)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {['P', 'A', 'U', 'S', 'E'].map((letter) => (
              <div
                key={letter}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold pause-${letter.toLowerCase()}`}
                style={{ background: 'var(--step-color)', color: '#ffffff' }}
              >
                {letter}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 italic">
            "When a foreign-employment opportunity asks you to act, PAUSE."
          </p>
        </div>
      </div>
    </div>
  );
}
