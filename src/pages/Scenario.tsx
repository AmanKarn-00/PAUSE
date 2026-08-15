import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { scenarios } from '../data/scenarios';
import PauseProgress from '../components/PauseProgress';
import DecisionState from '../components/DecisionState';

type Phase = 'intro' | 'choice' | 'proceed-warning' | 'pause-steps' | 'evidence' | 'result';

export default function Scenario() {
  const { scenarioId } = useParams<{ scenarioId: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scenario = scenarios.find((s) => s.id === scenarioId);
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!scenario) {
    return (
      <div className="page-container text-center">
        <h1 className="page-title">Scenario not found</h1>
        <Link to="/practice" className="btn btn-primary mt-4">{t('scenario.backToScenarios')}</Link>
      </div>
    );
  }

  const step = scenario.steps[currentStep];

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    setAnswered(true);
    const option = step.options.find((o) => o.id === selectedOption);
    if (option?.isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNextStep = () => {
    setCompletedSteps((prev) => [...prev, currentStep]);
    setSelectedOption(null);
    setAnswered(false);
    if (currentStep < scenario.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setPhase('evidence');
    }
  };

  // ===== INTRO PHASE =====
  if (phase === 'intro') {
    return (
      <div className="page-container">
        <button onClick={() => navigate('/practice')} className="btn btn-ghost text-sm mb-4 p-0">
          ← {t('scenario.backToScenarios')}
        </button>

        <div className="animate-fade-in-up">
          <h1 className="page-title">{t(scenario.titleKey)}</h1>

          {/* Message preview */}
          <div className="card mb-6" style={{ borderLeft: '3px solid var(--color-accent-500)' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{scenario.channelIcon}</span>
              <span className="text-sm font-medium text-slate-500">
                {t('scenario.channel')}: {scenario.channel}
              </span>
            </div>
            <p className="text-sm text-slate-800 italic leading-relaxed">
              "{t(scenario.messagePreviewKey)}"
            </p>
          </div>

          {/* Offer details */}
          <div className="card mb-6">
            <h3 className="font-bold text-base mb-4 text-slate-900">{t('scenario.offerDetails')}</h3>
            <div className="space-y-3">
              {[
                { key: 'scenario.country', value: scenario.country, icon: '🌍' },
                { key: 'scenario.employer', value: scenario.employer, icon: '🏢' },
                { key: 'scenario.agency', value: scenario.agency, icon: '📋' },
                { key: 'scenario.post', value: scenario.post, icon: '💼' },
                { key: 'scenario.salary', value: scenario.salary, icon: '💰' },
                { key: 'scenario.fee', value: scenario.fee, icon: '💸' },
              ].map((item) => (
                <div key={item.key} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <span className="text-slate-600">{t(item.key)}: </span>
                    <span className="text-slate-800 font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency text */}
            <div
              className="mt-4 p-3 rounded-lg"
              style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
            >
              <p className="text-sm text-red-600 font-medium">⏰ {scenario.urgencyText}</p>
            </div>
          </div>

          <button onClick={() => setPhase('choice')} className="btn btn-primary w-full">
            {t('common.next')} →
          </button>
        </div>
      </div>
    );
  }

  // ===== CHOICE PHASE =====
  if (phase === 'choice') {
    return (
      <div className="page-container">
        <div className="animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 text-slate-900">{t('scenario.choiceTitle')}</h2>
          <p className="text-sm text-slate-600 text-center mb-8">{t(scenario.descriptionKey)}</p>

          <div className="space-y-4">
            {/* Proceed immediately */}
            <button
              onClick={() => setPhase('proceed-warning')}
              className="card w-full text-left cursor-pointer group"
              style={{ border: '1px solid rgba(239, 68, 68, 0.2)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold text-base text-red-600">{t('scenario.proceedNow')}</h3>
                  <p className="text-xs text-slate-600 mt-1">Pay the fee and proceed immediately</p>
                </div>
              </div>
            </button>

            {/* PAUSE */}
            <button
              onClick={() => { setPhase('pause-steps'); setCurrentStep(0); }}
              className="card w-full text-left cursor-pointer group"
              style={{ border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.05)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 gradient-accent"
                  style={{ color: '#0f172a' }}>
                  ✋
                </div>
                <div>
                  <h3 className="font-bold text-base text-amber-600">{t('scenario.pauseNow')}</h3>
                  <p className="text-xs text-slate-600 mt-1">{t('pause.subtitle')}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== PROCEED WARNING =====
  if (phase === 'proceed-warning') {
    return (
      <div className="page-container">
        <div className="animate-fade-in-up text-center py-8">
          <div className="text-6xl mb-6">🛑</div>
          <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">{t('scenario.proceedWarning')}</h2>
          <p className="text-sm text-slate-600 mb-8 max-w-md mx-auto">
            {t('pause.rush.description')}
          </p>
          <button
            onClick={() => { setPhase('pause-steps'); setCurrentStep(0); }}
            className="btn btn-primary text-base px-8"
          >
            ✋ {t('scenario.pauseNow')}
          </button>
        </div>
      </div>
    );
  }

  // ===== PAUSE STEPS =====
  if (phase === 'pause-steps') {
    return (
      <div className="page-container">
        {/* Progress */}
        <div className="mb-6">
          <PauseProgress currentStep={currentStep} completedSteps={completedSteps} />
        </div>

        <div className="animate-slide-in-right" key={currentStep}>
          {/* Step header */}
          <div className={`flex items-center gap-3 mb-4 pause-${step.letter.toLowerCase()}`}>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
              style={{ background: 'var(--step-color)', color: '#ffffff' }}
            >
              {step.letter}
            </div>
            <div>
              <p className="text-xs text-slate-600">
                {t('scenario.stepOf', { current: currentStep + 1, total: 5 })}
              </p>
              <h2 className="text-lg font-bold" style={{ color: 'var(--step-color)' }}>
                {t(step.questionKey)}
              </h2>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {step.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const showResult = answered;
              const isCorrect = option.isCorrect;

              let borderColor = 'var(--color-surface-300)';
              let bg = 'var(--color-surface-200)';

              if (isSelected && !showResult) {
                borderColor = 'rgba(245, 158, 11, 0.5)';
                bg = 'rgba(245, 158, 11, 0.1)';
              }
              if (showResult && isCorrect) {
                borderColor = 'rgba(16, 185, 129, 0.5)';
                bg = 'rgba(16, 185, 129, 0.1)';
              }
              if (showResult && isSelected && !isCorrect) {
                borderColor = 'rgba(239, 68, 68, 0.5)';
                bg = 'rgba(239, 68, 68, 0.1)';
              }

              return (
                <button
                  key={option.id}
                  onClick={() => { if (!answered) setSelectedOption(option.id); }}
                  disabled={answered}
                  className="w-full text-left rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: bg,
                    border: `1px solid ${borderColor}`,
                    cursor: answered ? 'default' : 'pointer',
                    opacity: showResult && !isCorrect && !isSelected ? 0.5 : 1,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                      style={{
                        borderColor: isSelected ? (showResult ? (isCorrect ? '#059669' : '#dc2626') : '#d97706') : 'rgba(0,0,0,0.1)',
                        background: isSelected ? (showResult ? (isCorrect ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)') : 'rgba(245,158,11,0.2)') : 'transparent',
                        color: showResult && isCorrect ? '#059669' : showResult && isSelected ? '#dc2626' : '#d97706',
                      }}
                    >
                      {showResult && isCorrect && '✓'}
                      {showResult && isSelected && !isCorrect && '✗'}
                    </div>
                    <span className="text-sm text-slate-800">{t(option.textKey)}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Check / Next buttons */}
          {!answered ? (
            <button
              onClick={handleCheckAnswer}
              disabled={!selectedOption}
              className="btn btn-primary w-full"
              style={{ opacity: selectedOption ? 1 : 0.5 }}
            >
              {t('scenario.checkAnswer')}
            </button>
          ) : (
            <div className="space-y-4">
              {/* Feedback */}
              <div
                className="rounded-xl p-4 animate-fade-in"
                style={{
                  background: step.options.find(o => o.id === selectedOption)?.isCorrect
                    ? 'rgba(16, 185, 129, 0.08)'
                    : 'rgba(239, 68, 68, 0.08)',
                  border: `1px solid ${step.options.find(o => o.id === selectedOption)?.isCorrect
                    ? 'rgba(16, 185, 129, 0.2)'
                    : 'rgba(239, 68, 68, 0.2)'}`,
                }}
              >
                <p className="text-sm font-bold mb-1" style={{
                  color: step.options.find(o => o.id === selectedOption)?.isCorrect ? '#059669' : '#dc2626'
                }}>
                  {step.options.find(o => o.id === selectedOption)?.isCorrect
                    ? t('scenario.correct')
                    : t('scenario.incorrect')}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {t(step.options.find(o => o.id === selectedOption)?.isCorrect
                    ? step.feedbackCorrectKey
                    : step.feedbackIncorrectKey)}
                </p>
              </div>

              <button onClick={handleNextStep} className="btn btn-primary w-full">
                {currentStep < 4 ? t('scenario.nextQuestion') + ' →' : t('scenario.viewResults') + ' →'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ===== EVIDENCE PHASE =====
  if (phase === 'evidence') {
    return (
      <div className="page-container">
        <div className="animate-fade-in-up">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🔍</div>
            <h2 className="text-xl font-bold text-slate-900">{t('scenario.verificationStep')}</h2>
            <p className="text-sm text-slate-600 mt-1">{t('scenario.verifyInstruction')}</p>
          </div>

          {/* Evidence comparison table */}
          <div className="space-y-3 mb-6">
            {scenario.evidenceItems.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  borderLeft: `3px solid ${item.matches ? '#34d399' : '#f87171'}`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase">{t(item.labelKey)}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.matches
                      ? 'bg-emerald-500/10 text-emerald-600'
                      : 'bg-red-500/10 text-red-600'
                  }`}>
                    {item.matches ? '✓ Match' : '✗ Mismatch'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-black/5 rounded-lg p-2">
                    <span className="text-slate-600 block mb-0.5">Claimed</span>
                    <span className="text-slate-800">{item.claimedValue}</span>
                  </div>
                  <div className="bg-black/5 rounded-lg p-2">
                    <span className="text-slate-600 block mb-0.5">Official</span>
                    <span className={item.matches ? 'text-emerald-600' : 'text-red-600'}>
                      {item.officialValue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setPhase('result')} className="btn btn-primary w-full">
            {t('scenario.viewResults')} →
          </button>
        </div>
      </div>
    );
  }

  // ===== RESULT PHASE =====
  return (
    <div className="page-container">
      <div className="animate-fade-in-up">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">{t('scenario.completed')}</h2>
          <p className="text-sm text-slate-600 mt-1">
            {t('scenario.yourScore')}: {score} {t('scenario.outOf', { total: 5 })}
          </p>
        </div>

        {/* Score visualization */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {scenario.steps.map((s, i) => (
            <div
              key={s.letter}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold pause-${s.letter.toLowerCase()}`}
              style={{
                background: completedSteps.includes(i) ? 'var(--step-color)' : 'var(--step-bg)',
                color: completedSteps.includes(i) ? '#ffffff' : 'var(--step-color)',
              }}
            >
              {s.letter}
            </div>
          ))}
        </div>

        {/* Decision state */}
        <div className="mb-6">
          <DecisionState outcome={scenario.outcome} />
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link to="/verify" className="btn btn-secondary w-full">
            🔍 {t('home.verifyCta')}
          </Link>
          <Link to="/practice" className="btn btn-ghost w-full">
            {t('scenario.tryAnother')}
          </Link>
        </div>
      </div>
    </div>
  );
}
