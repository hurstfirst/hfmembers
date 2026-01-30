export interface AMCInfo {
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  status: 'Active' | 'Expiring Soon' | 'Expired' | 'Pending';
  startDate: string;
  endDate: string;
}

export interface ClientInfo {
  id: string;
  name: string;
  email: string;
  installDate: string;
  amc: AMCInfo | null;
}

export interface Touchpoint {
  id: string;
  type: 'quarterly_call' | 'six_month_visit' | 'annual_renewal';
  title: string;
  scheduledDate: string;
  status: 'upcoming' | 'completed' | 'overdue';
  description: string;
}

export interface AMCRegistrationRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  desiredTier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  message?: string;
}
