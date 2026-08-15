export interface VerificationRoute {
  id: string;
  titleKey: string;
  authority: string;
  url: string;
  category: 'job-search' | 'agency' | 'pre-permission' | 'feims' | 'country' | 'complaint';
  descriptionKey: string;
  fieldsToCompare: string[];
  lastChecked: string;
  icon: string;
}

export const verificationRoutes: VerificationRoute[] = [
  {
    id: 'dofe-main',
    titleKey: 'routes.dofe.title',
    authority: 'Department of Foreign Employment (DOFE)',
    url: 'https://dofe.gov.np/',
    category: 'job-search',
    descriptionKey: 'routes.dofe.description',
    fieldsToCompare: ['Services directory', 'Current announcements', 'Contact information'],
    lastChecked: '2026-08-15',
    icon: '🏛️',
  },
  {
    id: 'dofe-foreign-job',
    titleKey: 'routes.foreignJob.title',
    authority: 'DOFE Foreign Job Search',
    url: 'https://foreignjob.dofe.gov.np/Home/Index',
    category: 'job-search',
    descriptionKey: 'routes.foreignJob.description',
    fieldsToCompare: [
      'Country & destination',
      'Employer name',
      'Recruiting agency',
      'Job title / post',
      'Salary range',
      'Work location',
      'Interview date/venue',
    ],
    lastChecked: '2026-08-15',
    icon: '🔍',
  },
  {
    id: 'dofe-agency',
    titleKey: 'routes.agency.title',
    authority: 'DOFE Recruitment Agency Search',
    url: 'https://foreignjob.dofe.gov.np/Home/RecruitmentAgency',
    category: 'agency',
    descriptionKey: 'routes.agency.description',
    fieldsToCompare: [
      'Agency name',
      'Permission number',
      'License status',
    ],
    lastChecked: '2026-08-15',
    icon: '🏢',
  },
  {
    id: 'dofe-pre-permission',
    titleKey: 'routes.prePermission.title',
    authority: 'DOFE Pre-Permission Detail Search',
    url: 'https://foreignjob.dofe.gov.np/Home/PrePermissionDetail',
    category: 'pre-permission',
    descriptionKey: 'routes.prePermission.description',
    fieldsToCompare: [
      'Lot number',
      'Pre-approval details',
    ],
    lastChecked: '2026-08-15',
    icon: '📋',
  },
  {
    id: 'dofe-feims',
    titleKey: 'routes.feims.title',
    authority: 'DOFE FEIMS',
    url: 'https://feims.dofe.gov.np/',
    category: 'feims',
    descriptionKey: 'routes.feims.description',
    fieldsToCompare: [
      'Labour approval information',
    ],
    lastChecked: '2026-08-15',
    icon: '📊',
  },
  {
    id: 'dofe-countries',
    titleKey: 'routes.countries.title',
    authority: 'DOFE Recognized Countries',
    url: 'https://dofe.gov.np/pages/recognized-country/',
    category: 'country',
    descriptionKey: 'routes.countries.description',
    fieldsToCompare: [
      'Recognized destination list',
    ],
    lastChecked: '2026-08-15',
    icon: '🌍',
  },
];
