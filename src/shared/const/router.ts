export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAIL = 'article_details',
    ARTICLES_CREATE = 'article_create',
    ARTICLES_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // must be last
    NOTFOUND = 'notfaund',
}

export const getRouteMain: () => string = () => '/';
export const getRouteAbout: () => string = () => '/about';
export const getRouteProfile: (id: string) => string = (id: string) =>
    `/profile/${id}`;
export const getRouteArticles: () => string = () => '/articles';
export const getRouteArticleDetail: (id: string) => string = (id: string) =>
    `/articles/${id}`;
export const getRouteArticleCreate: () => string = () => '/articles/new';
export const getRouteArticleEdit: (id: string) => string = (id: string) =>
    `/articles/${id}/edit`;
export const getRouteAdmin: () => string = () => '/admin';
export const getRouteForbidden: () => string = () => '/restrictaccess';
export const getRouteNotfound: () => string = () => '*';
