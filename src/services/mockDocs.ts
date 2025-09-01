// src/services/mockDocs.ts

export type Document = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Patient Report - John Doe',
    description: 'Blood test results and diagnosis summary.',
    date: '2025-09-01',
  },
  {
    id: '2',
    title: 'Medical Invoice - Jane Smith',
    description: 'Invoice for treatment and medication.',
    date: '2025-08-28',
  },
  {
    id: '3',
    title: 'Prescription - Alex Johnson',
    description: 'Medication prescribed for flu.',
    date: '2025-08-20',
  },
];
