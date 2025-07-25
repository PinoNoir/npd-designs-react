import { Deliverable, ProjectStep } from './types';

export const strettoEballotDeliverables: Deliverable[] = [
  {
    id: 'stretto-eballot-1',
    title: 'Legacy E-Ballot setup UI - WYSIWYG text editor',
    imageSrc: '/assets/img/work_images/stretto/stretto-ca-legacy-wysiwyg-editor.png',
    imageAlt: 'Legacy E-ballot setup interface',
  },
  {
    id: 'stretto-eballot-2',
    title: 'Redesigned E-Ballot setup UI',
    imageSrc: '/assets/img/work_images/stretto/stretto-ca-eballot-redesign.png',
    imageAlt: 'Redesigned E-ballot setup interface',
  },
  {
    id: 'stretto-eballot-3',
    title: 'E-Ballot overview UI design',
    imageSrc: '/assets/img/work_images/stretto/stretto-ca-eballot-overview.png',
    imageAlt: 'E-Ballot Overview interface',
  },
  {
    id: 'stretto-eballot-4',
    title: 'E-Ballot grouping UI design',
    imageSrc: '/assets/img/work_images/stretto/stretto-ca-eballot-grouping.png',
    imageAlt: 'E-ballot Grouping interface',
  },
  {
    id: 'stretto-eballot-5',
    title: 'Existing EBW interface',
    imageSrc: '/assets/img/work_images/stretto/stretto-ebw-legacy.png',
    imageAlt: 'Legacy E-ballot website interface',
  },
];

export const strettoEballotCaseAdminProblems: ProjectStep[] = [
  {
    id: 'stretto-ca-problem-1',
    text: 'Training new employees to learn the legacy system was costly and time-consuming.',
  },
  {
    id: 'stretto-ca-problem-2',
    text: 'If users made an error setting up an E-ballot, there was no immediate feedback to inform users of the system\'s status.',
  },
  {
    id: 'stretto-ca-problem-3',
    text: 'Users had to write HTML markup in the WYSIWYG editor, a skill many did not have, but were forced to learn to prepare ballots.',
  },
  {
    id: 'stretto-ca-problem-4',
    text: 'Users were forced to select each ballot to view or edit via dropdown menu—some cases had up to 30 ballots!',
  },
  {
    id: 'stretto-ca-problem-5',
    text: 'E-Ballots couldn\'t be previewed before they were published—which increased the chance of errors visible to creditors.',
  },
  {
    id: 'stretto-ca-problem-6',
    text: 'Case Admin lacked a mechanism to generate alternate URLs for creditors to request a password to access a ballot to vote.',
  },
  {
    id: 'stretto-ca-problem-7',
    text: 'Users didn\'t have the ability to group and separate ballots for certain types of creditors.',
  },
];

export const strettoEballotCaseAdminSolutions: ProjectStep[] = [
  {
    id: 'stretto-ca-solution-1',
    text: 'Keep existing tools users were familiar with intact such as Microsoft Word, for example.',
  },
  {
    id: 'stretto-ca-solution-2',
    text: 'Reinvent the E-ballot setup process by using a 3rd party Word document to PDF generator.',
  },
  {
    id: 'stretto-ca-solution-3',
    text: 'Introduce an Overview page where users could see a list of all E-ballots related to their case.',
  },
  {
    id: 'stretto-ca-solution-4',
    text: 'Separate the UI by grouping each task users had to perform into individual sections.',
  },
  {
    id: 'stretto-ca-solution-5',
    text: 'Allow users to preview their prepared word doc (E-ballot) in a PDF viewer before publishing it live.',
  },
];

export const strettoEballotWebsiteProblems: ProjectStep[] = [
  {
    id: 'stretto-ebw-problem-1',
    text: 'Creditors who were unknown to Stretto\'s internal system couldn\'t log into the site.',
  },
  {
    id: 'stretto-ebw-problem-2',
    text: 'The system lacked secure single-sign-on capability—creditors were forced to log into each ballot separately to vote.',
  },
  {
    id: 'stretto-ebw-problem-3',
    text: 'Creditors couldn\'t upload documents to the system and verify their identity or edit/add information needed by the case team.',
  },
  {
    id: 'stretto-ebw-problem-4',
    text: 'Creditors didn\'t have the ability to view ballots in PDF format, which made the voting process cumbersome.',
  },
]; 