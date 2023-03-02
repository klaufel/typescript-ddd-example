import FromCarrierApiResponseToCarrierEntityMapper from './FromCarrierApiResponseToCarrierEntityMapper';

export const fromCarrierApiResponseToCarrierEntityMapper =
  (): FromCarrierApiResponseToCarrierEntityMapper => {
    return new FromCarrierApiResponseToCarrierEntityMapper();
  };
