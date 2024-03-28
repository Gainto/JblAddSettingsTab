Shopware.Component.register('sw-settings-example-item', () => import('./page/sw-settings-cumulated-weight'));

const { Module } = Shopware;

Module.register('sw-settings-example-item', {
    type: 'plugin',
    name: 'Example Item',
    title: 'Example Item',
    description: 'Example Item',
    color: '#9AA8B5',
    icon: 'regular-analytics',
    favicon: 'icon-module-settings.png',

    routes: {
        index: {
            component: 'sw-settings-example-item',
            path: 'index',
            meta: {
                parentPath: 'sw.settings.index'
            },
        },
    },

    settingsItem: {
        group: 'example',
        to: 'sw.settings.example.item.index',
        icon: 'regular-analytics',
        favicon: 'regular-analytics',
        id: 'sw-settings-example-item',
        name: 'example-item',
        label: 'Example Item',
    },
});