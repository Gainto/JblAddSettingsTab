import './module/sw-settings';
import './module/sw-settings-cumulated-weight';

Shopware.Module.register('sw-settings-index-example', {
    routeMiddleware(next, currentRoute) {
        if (currentRoute.name === 'sw.settings.index') {

            currentRoute.children.push({
                name: 'sw.settings.index.example',
                path: '/sw/settings/index/example',
                component: 'sw-settings-index',
                meta: {
                    parentPath: "sw.settings.index"
                }
            });

        }
        next(currentRoute);
    },
});
