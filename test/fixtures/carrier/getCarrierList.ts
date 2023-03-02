export const carriersApiResponse = [
  {
    id: '05171eda-b922-4913-8961-f4304d1e3d76',
    title: 'Propio',
    trackingUrl: '',
    trackingRequired: 0,
    countryIds: [
      '438f6ffc-b908-4f6c-bd79-28eeff9b3538',
      '80737031-9757-4f96-be19-53c2752e38c7',
    ],
    createdAt: '2022-07-25T11:40:07.000Z',
    updatedAt: '2022-07-25T11:40:07.000Z',
    removedAt: null,
  },
  {
    id: '2c355089-4844-4246-acf8-05ea485cb802',
    title: 'TIPSA',
    trackingUrl:
      'https://track.aftership.com/trackings?courier=tipsa&tracking-numbers={{trackingNumber}}',
    trackingRequired: 1,
    countryIds: ['80737031-9757-4f96-be19-53c2752e38c7'],
    createdAt: '2019-10-07T11:08:12.000Z',
    updatedAt: '2021-02-03T10:00:24.000Z',
    removedAt: null,
  },
];

export const carriersUseCaseResponse = [
  {
    id: '05171eda-b922-4913-8961-f4304d1e3d76',
    title: 'Propio',
    trackingUrl: '',
    trackingRequired: false,
    countryIds: [
      '438f6ffc-b908-4f6c-bd79-28eeff9b3538',
      '80737031-9757-4f96-be19-53c2752e38c7',
    ],
  },
  {
    id: '2c355089-4844-4246-acf8-05ea485cb802',
    title: 'TIPSA',
    trackingUrl:
      'https://track.aftership.com/trackings?courier=tipsa&tracking-numbers={{trackingNumber}}',
    trackingRequired: true,
    countryIds: ['80737031-9757-4f96-be19-53c2752e38c7'],
  },
];
