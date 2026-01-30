import { ClientInfo, Touchpoint } from '@/types';

// Mock client data for demonstration
export const mockClientData: ClientInfo = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@example.com',
  installDate: '2023-03-15',
  amc: {
    tier: 'Gold',
    status: 'Active',
    startDate: '2024-01-01',
    endDate: '2025-01-01',
  },
};

// Mock touchpoints data
export const mockTouchpoints: Touchpoint[] = [
  {
    id: '1',
    type: 'quarterly_call',
    title: 'Q1 2025 Quarterly Review Call',
    scheduledDate: '2025-03-15',
    status: 'upcoming',
    description: 'Scheduled quarterly check-in to review system performance and address any concerns.',
  },
  {
    id: '2',
    type: 'six_month_visit',
    title: '6-Month On-Site Visit',
    scheduledDate: '2025-07-01',
    status: 'upcoming',
    description: 'Comprehensive on-site visit for system maintenance and optimization.',
  },
  {
    id: '3',
    type: 'annual_renewal',
    title: 'Annual AMC Renewal',
    scheduledDate: '2025-01-01',
    status: 'upcoming',
    description: 'Annual contract renewal discussion and planning for the upcoming year.',
  },
  {
    id: '4',
    type: 'quarterly_call',
    title: 'Q4 2024 Quarterly Review Call',
    scheduledDate: '2024-12-15',
    status: 'completed',
    description: 'Quarterly review completed successfully.',
  },
];

// Calculate days until expiry
export function getDaysUntilExpiry(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
