export type DecisionOutcome = 'VERIFIED' | 'MISMATCH' | 'CANNOT_VERIFY';

export interface EvidenceItem {
  id: string;
  labelKey: string;
  claimedValue: string;
  officialValue: string;
  sourceType: 'official' | 'independent' | 'claimed';
  matches: boolean;
}

export interface PauseOption {
  id: string;
  textKey: string;
  isCorrect: boolean;
}

export interface PauseStep {
  letter: 'P' | 'A' | 'U' | 'S' | 'E';
  questionKey: string;
  options: PauseOption[];
  explanationKey: string;
  feedbackCorrectKey: string;
  feedbackIncorrectKey: string;
}

export interface Scenario {
  id: string;
  titleKey: string;
  descriptionKey: string;
  channel: string;
  channelIcon: string;
  country: string;
  employer: string;
  agency: string;
  post: string;
  salary: string;
  fee: string;
  urgencyText: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  messagePreviewKey: string;
  evidenceItems: EvidenceItem[];
  steps: PauseStep[];
  outcome: DecisionOutcome;
  verificationRouteId: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'high-salary-dubai',
    titleKey: 'scenarios.highSalary.title',
    descriptionKey: 'scenarios.highSalary.description',
    channel: 'Facebook',
    channelIcon: '📱',
    country: 'UAE (Dubai)',
    employer: 'Al-Rashid Construction LLC',
    agency: 'Bright Future Manpower Pvt. Ltd.',
    post: 'Construction Supervisor',
    salary: 'Rs. 1,50,000/month',
    fee: 'Rs. 2,00,000',
    urgencyText: 'भोलिसम्म पैसा तिर्नुहोस्, नत्र अर्को उम्मेदवारलाई दिइन्छ!',
    difficulty: 'beginner',
    messagePreviewKey: 'scenarios.highSalary.messagePreview',
    evidenceItems: [
      {
        id: 'employer',
        labelKey: 'scenario.employer',
        claimedValue: 'Al-Rashid Construction LLC',
        officialValue: 'Al-Rashid Construction not found in DOFE records',
        sourceType: 'official',
        matches: false,
      },
      {
        id: 'agency',
        labelKey: 'scenario.agency',
        claimedValue: 'Bright Future Manpower Pvt. Ltd.',
        officialValue: 'Bright Future Manpower — license expired',
        sourceType: 'official',
        matches: false,
      },
      {
        id: 'salary',
        labelKey: 'scenario.salary',
        claimedValue: 'Rs. 1,50,000/month',
        officialValue: 'Similar posts: Rs. 40,000–60,000/month',
        sourceType: 'official',
        matches: false,
      },
      {
        id: 'fee',
        labelKey: 'scenario.fee',
        claimedValue: 'Rs. 2,00,000',
        officialValue: 'Government-set maximum varies by destination',
        sourceType: 'official',
        matches: false,
      },
    ],
    steps: [
      {
        letter: 'P',
        questionKey: 'pause.provider.question',
        options: [
          {
            id: 'p1',
            textKey: 'scenarios.highSalary.p.opt1',
            isCorrect: false,
          },
          {
            id: 'p2',
            textKey: 'scenarios.highSalary.p.opt2',
            isCorrect: true,
          },
          {
            id: 'p3',
            textKey: 'scenarios.highSalary.p.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.highSalary.p.explanation',
        feedbackCorrectKey: 'scenarios.highSalary.p.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.highSalary.p.feedbackIncorrect',
      },
      {
        letter: 'A',
        questionKey: 'pause.authenticate.question',
        options: [
          {
            id: 'a1',
            textKey: 'scenarios.highSalary.a.opt1',
            isCorrect: false,
          },
          {
            id: 'a2',
            textKey: 'scenarios.highSalary.a.opt2',
            isCorrect: false,
          },
          {
            id: 'a3',
            textKey: 'scenarios.highSalary.a.opt3',
            isCorrect: true,
          },
        ],
        explanationKey: 'scenarios.highSalary.a.explanation',
        feedbackCorrectKey: 'scenarios.highSalary.a.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.highSalary.a.feedbackIncorrect',
      },
      {
        letter: 'U',
        questionKey: 'pause.incentive.question',
        options: [
          {
            id: 'u1',
            textKey: 'scenarios.highSalary.u.opt1',
            isCorrect: true,
          },
          {
            id: 'u2',
            textKey: 'scenarios.highSalary.u.opt2',
            isCorrect: false,
          },
          {
            id: 'u3',
            textKey: 'scenarios.highSalary.u.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.highSalary.u.explanation',
        feedbackCorrectKey: 'scenarios.highSalary.u.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.highSalary.u.feedbackIncorrect',
      },
      {
        letter: 'S',
        questionKey: 'pause.rush.question',
        options: [
          {
            id: 's1',
            textKey: 'scenarios.highSalary.s.opt1',
            isCorrect: false,
          },
          {
            id: 's2',
            textKey: 'scenarios.highSalary.s.opt2',
            isCorrect: true,
          },
          {
            id: 's3',
            textKey: 'scenarios.highSalary.s.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.highSalary.s.explanation',
        feedbackCorrectKey: 'scenarios.highSalary.s.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.highSalary.s.feedbackIncorrect',
      },
      {
        letter: 'E',
        questionKey: 'pause.evidence.question',
        options: [
          {
            id: 'e1',
            textKey: 'scenarios.highSalary.e.opt1',
            isCorrect: false,
          },
          {
            id: 'e2',
            textKey: 'scenarios.highSalary.e.opt2',
            isCorrect: false,
          },
          {
            id: 'e3',
            textKey: 'scenarios.highSalary.e.opt3',
            isCorrect: true,
          },
        ],
        explanationKey: 'scenarios.highSalary.e.explanation',
        feedbackCorrectKey: 'scenarios.highSalary.e.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.highSalary.e.feedbackIncorrect',
      },
    ],
    outcome: 'MISMATCH',
    verificationRouteId: 'dofe-foreign-job',
  },
  {
    id: 'genuine-opportunity',
    titleKey: 'scenarios.genuine.title',
    descriptionKey: 'scenarios.genuine.description',
    channel: 'Recruitment Agency Office',
    channelIcon: '🏢',
    country: 'South Korea',
    employer: 'Samsung C&T Corporation',
    agency: 'Nepal EPS Manpower Pvt. Ltd.',
    post: 'Factory Worker (EPS)',
    salary: 'Rs. 80,000–1,00,000/month',
    fee: 'As per government rate',
    urgencyText: 'EPS को लागि आवेदन दिने अन्तिम मिति नजिक छ।',
    difficulty: 'intermediate',
    messagePreviewKey: 'scenarios.genuine.messagePreview',
    evidenceItems: [
      {
        id: 'employer',
        labelKey: 'scenario.employer',
        claimedValue: 'Samsung C&T Corporation',
        officialValue: 'Samsung C&T — listed in EPS Korea program',
        sourceType: 'official',
        matches: true,
      },
      {
        id: 'agency',
        labelKey: 'scenario.agency',
        claimedValue: 'Nepal EPS Manpower Pvt. Ltd.',
        officialValue: 'Nepal EPS Manpower — active license, permission verified',
        sourceType: 'official',
        matches: true,
      },
      {
        id: 'salary',
        labelKey: 'scenario.salary',
        claimedValue: 'Rs. 80,000–1,00,000/month',
        officialValue: 'EPS Korea range: Rs. 75,000–1,10,000/month',
        sourceType: 'official',
        matches: true,
      },
      {
        id: 'fee',
        labelKey: 'scenario.fee',
        claimedValue: 'As per government rate',
        officialValue: 'Government-set EPS fee schedule',
        sourceType: 'official',
        matches: true,
      },
    ],
    steps: [
      {
        letter: 'P',
        questionKey: 'pause.provider.question',
        options: [
          {
            id: 'p1',
            textKey: 'scenarios.genuine.p.opt1',
            isCorrect: true,
          },
          {
            id: 'p2',
            textKey: 'scenarios.genuine.p.opt2',
            isCorrect: false,
          },
          {
            id: 'p3',
            textKey: 'scenarios.genuine.p.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.genuine.p.explanation',
        feedbackCorrectKey: 'scenarios.genuine.p.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.genuine.p.feedbackIncorrect',
      },
      {
        letter: 'A',
        questionKey: 'pause.authenticate.question',
        options: [
          {
            id: 'a1',
            textKey: 'scenarios.genuine.a.opt1',
            isCorrect: false,
          },
          {
            id: 'a2',
            textKey: 'scenarios.genuine.a.opt2',
            isCorrect: true,
          },
          {
            id: 'a3',
            textKey: 'scenarios.genuine.a.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.genuine.a.explanation',
        feedbackCorrectKey: 'scenarios.genuine.a.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.genuine.a.feedbackIncorrect',
      },
      {
        letter: 'U',
        questionKey: 'pause.incentive.question',
        options: [
          {
            id: 'u1',
            textKey: 'scenarios.genuine.u.opt1',
            isCorrect: false,
          },
          {
            id: 'u2',
            textKey: 'scenarios.genuine.u.opt2',
            isCorrect: true,
          },
          {
            id: 'u3',
            textKey: 'scenarios.genuine.u.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.genuine.u.explanation',
        feedbackCorrectKey: 'scenarios.genuine.u.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.genuine.u.feedbackIncorrect',
      },
      {
        letter: 'S',
        questionKey: 'pause.rush.question',
        options: [
          {
            id: 's1',
            textKey: 'scenarios.genuine.s.opt1',
            isCorrect: true,
          },
          {
            id: 's2',
            textKey: 'scenarios.genuine.s.opt2',
            isCorrect: false,
          },
          {
            id: 's3',
            textKey: 'scenarios.genuine.s.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.genuine.s.explanation',
        feedbackCorrectKey: 'scenarios.genuine.s.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.genuine.s.feedbackIncorrect',
      },
      {
        letter: 'E',
        questionKey: 'pause.evidence.question',
        options: [
          {
            id: 'e1',
            textKey: 'scenarios.genuine.e.opt1',
            isCorrect: true,
          },
          {
            id: 'e2',
            textKey: 'scenarios.genuine.e.opt2',
            isCorrect: false,
          },
          {
            id: 'e3',
            textKey: 'scenarios.genuine.e.opt3',
            isCorrect: false,
          },
        ],
        explanationKey: 'scenarios.genuine.e.explanation',
        feedbackCorrectKey: 'scenarios.genuine.e.feedbackCorrect',
        feedbackIncorrectKey: 'scenarios.genuine.e.feedbackIncorrect',
      },
    ],
    outcome: 'VERIFIED',
    verificationRouteId: 'dofe-foreign-job',
  },
];
