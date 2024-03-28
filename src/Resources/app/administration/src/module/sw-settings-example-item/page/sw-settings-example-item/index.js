import template from './sw-settings-example-item.html.twig';

export default {
    template,

    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },
};
