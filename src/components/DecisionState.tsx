import { useTranslation } from 'react-i18next';
import type { DecisionOutcome } from '../data/scenarios';

interface DecisionStateProps {
  outcome: DecisionOutcome;
  showAction?: boolean;
}

const config = {
  VERIFIED: {
    icon: '✓',
    titleKey: 'decision.verified.title',
    descriptionKey: 'decision.verified.description',
    actionKey: 'decision.verified.action',
    colors: {
      bg: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.4)',
      iconBg: 'rgba(16, 185, 129, 0.2)',
      iconColor: '#059669',
      titleColor: '#065f46',
      glow: '0 4px 14px rgba(16, 185, 129, 0.15)',
    },
  },
  MISMATCH: {
    icon: '⚠',
    titleKey: 'decision.mismatch.title',
    descriptionKey: 'decision.mismatch.description',
    actionKey: 'decision.mismatch.action',
    colors: {
      bg: 'rgba(245, 158, 11, 0.1)',
      border: 'rgba(245, 158, 11, 0.4)',
      iconBg: 'rgba(245, 158, 11, 0.2)',
      iconColor: '#d97706',
      titleColor: '#92400e',
      glow: '0 4px 14px rgba(245, 158, 11, 0.15)',
    },
  },
  CANNOT_VERIFY: {
    icon: '?',
    titleKey: 'decision.cannotVerify.title',
    descriptionKey: 'decision.cannotVerify.description',
    actionKey: 'decision.cannotVerify.action',
    colors: {
      bg: 'rgba(107, 114, 128, 0.1)',
      border: 'rgba(156, 163, 175, 0.4)',
      iconBg: 'rgba(156, 163, 175, 0.2)',
      iconColor: '#6b7280',
      titleColor: '#374151',
      glow: '0 4px 14px rgba(156, 163, 175, 0.1)',
    },
  },
};

export default function DecisionState({ outcome, showAction = true }: DecisionStateProps) {
  const { t } = useTranslation();
  const c = config[outcome];

  return (
    <div
      className="rounded-2xl p-6 sm:p-8 animate-fade-in-up"
      style={{
        background: c.colors.bg,
        border: `1px solid ${c.colors.border}`,
        boxShadow: c.colors.glow,
      }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold"
          style={{
            background: c.colors.iconBg,
            color: c.colors.iconColor,
          }}
        >
          {c.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl sm:text-2xl font-bold text-center mb-3"
        style={{ color: c.colors.titleColor }}
      >
        {t(c.titleKey)}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-600 text-center leading-relaxed mb-4">
        {t(c.descriptionKey)}
      </p>

      {/* Action */}
      {showAction && (
        <div
          className="rounded-xl p-4 mt-4"
          style={{
            background: 'rgba(0, 0, 0, 0.03)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          <p className="text-sm font-medium text-center" style={{ color: c.colors.iconColor }}>
            {t(c.actionKey)}
          </p>
        </div>
      )}
    </div>
  );
}
