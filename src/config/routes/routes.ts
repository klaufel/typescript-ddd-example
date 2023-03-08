export const routes = {
  HOME: "/",
  RECIPE_LIST: "/recipes",
  RECIPE_DETAIL: "/recipe/{id}",
  RECIPE_ADD: "/recipe/upsert",
  RECIPE_EDIT: "/recipe/upsert/{id}",
  USER_RECIPES: "/user/recipes",
  USER_FAVORITES: "/user/favorites",
};

export const getRoute = (
  routeName: keyof typeof routes,
  options?: Record<string, string>
) => {
  if (!options) return routes[routeName];

  const params = Object.entries(options ?? {});

  const route = params.reduce(
    (route, [key, value]) => route.replace(`{${key}}`, value),
    routes[routeName]
  );

  return route;
};
