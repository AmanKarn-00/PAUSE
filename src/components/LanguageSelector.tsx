import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const isNepali = i18n.language?.startsWith('ne');

  const toggle = () => {
    const newLang = isNepali ? 'en' : 'ne';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    localStorage.setItem('pause-language', newLang);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105"
      style={{
        background: isNepali ? 'rgba(30, 76, 91, 0.1)' : 'rgba(201, 58, 58, 0.1)',
        border: `1px solid ${isNepali ? 'rgba(30, 76, 91, 0.3)' : 'rgba(201, 58, 58, 0.3)'}`,
        color: isNepali ? '#1e4c5b' : '#c93a3a',
        cursor: 'pointer',
        minHeight: 36,
      }}
      aria-label={`Switch to ${isNepali ? 'English' : 'नेपाली'}`}
    >
      <span className="text-sm">🇳🇵</span>
      <span>{isNepali ? 'English' : 'नेपाली'}</span>
    </button>
  );
}
