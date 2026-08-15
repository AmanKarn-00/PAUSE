import { useTranslation } from 'react-i18next';

const steps = [
  { letter: 'P', className: 'pause-p' },
  { letter: 'A', className: 'pause-a' },
  { letter: 'U', className: 'pause-u' },
  { letter: 'S', className: 'pause-s' },
  { letter: 'E', className: 'pause-e' },
] as const;

interface PauseProgressProps {
  currentStep: number; // 0-4 index
  completedSteps?: number[];
}

export default function PauseProgress({ currentStep, completedSteps = [] }: PauseProgressProps) {
  const { t } = useTranslation();

  const pauseKeys: Record<string, string> = {
    P: 'pause.provider.label',
    A: 'pause.authenticate.label',
    U: 'pause.incentive.label',
    S: 'pause.rush.label',
    E: 'pause.evidence.label',
  };

  return (
    <div className="w-full" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={5}>
      {/* Step indicators */}
      <div className="flex items-center justify-between gap-1 mb-2">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = completedSteps.includes(index) || index < currentStep;

          return (
            <div key={step.letter} className="flex flex-col items-center flex-1">
              {/* Circle */}
              <div
                className={`
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                  text-base sm:text-lg font-bold transition-all duration-300
                  ${step.className}
                `}
                style={{
                  background: isActive || isCompleted ? 'var(--step-color)' : 'var(--step-bg)',
                  color: isActive || isCompleted ? '#ffffff' : 'var(--step-color)',
                  boxShadow: isActive ? `0 0 20px color-mix(in srgb, var(--step-color) 40%, transparent)` : 'none',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  opacity: isCompleted && !isActive ? 0.7 : 1,
                }}
              >
                {isCompleted && !isActive ? '✓' : step.letter}
              </div>

              {/* Label - hidden on small screens */}
              <span
                className="hidden sm:block text-[10px] sm:text-xs mt-1 text-center font-medium transition-colors duration-200 truncate max-w-[72px]"
                style={{
                  color: isActive ? 'var(--step-color)' : isCompleted ? 'var(--color-primary-500)' : 'var(--color-primary-400)',
                }}
              >
                {t(pauseKeys[step.letter])}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-slate-200 rounded-full overflow-hidden mt-1">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentStep + 1) / 5) * 100}%`,
            background: 'linear-gradient(90deg, #1e4c5b, #c93a3a, #de8c28, #4e9a51, #1a64a3)',
          }}
        />
      </div>
    </div>
  );
}
