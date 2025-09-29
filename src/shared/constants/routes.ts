// Application routes constants
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  BLOG: '/blog',
  CAREERS: '/careers',
  SERVICES: {
    CONSULTING: '/services/consulting',
    DEVELOPMENT: '/services/development',
    DESIGN: '/services/design'
  }
} as const;
export type RouteKey = keyof typeof ROUTES;
export type RouteValue = typeof ROUTES[RouteKey];