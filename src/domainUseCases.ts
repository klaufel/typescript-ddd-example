export type UseCases = typeof useCases;

const useCases = {
  create_recipe_use_case: () =>
    import('./contexts/recipe/useCases/factories/createRecipeUseCase'),
  update_recipe_use_case: () =>
    import('./contexts/recipe/useCases/factories/updateRecipeUseCase'),
  delete_recipe_use_case: () =>
    import('./contexts/recipe/useCases/factories/deleteRecipeUseCase'),
  get_recipe_detail_use_case: () =>
    import('./contexts/recipe/useCases/factories/getRecipeDetailUseCase'),
  get_recipe_list_use_case: () =>
    import('./contexts/recipe/useCases/factories/getRecipeListUseCase'),
};

export default useCases;
