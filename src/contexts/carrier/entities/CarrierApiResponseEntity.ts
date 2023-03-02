export type CarrierApiResponseEntity = {
  id: string;
  countryIds: string[];
  createdAt: string | null;
  removedAt: string | null;
  title: string;
  trackingRequired: 0 | 1;
  trackingUrl: string;
  updatedAt: string | null;
};
