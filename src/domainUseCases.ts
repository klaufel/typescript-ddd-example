export type UseCases = typeof useCases;

const useCases = {
  get_carrier_list_use_case: () =>
    import('./contexts/carrier/useCases/factories/getCarrierListUseCase'),
};

export default useCases;
