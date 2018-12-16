Vue.component('toast', {
    template: vueTpl.widget_toast,
    props: ['model'],
    data: function() {
        return {
            icons: {
                info: '&#x2713;',
                error: '&#x2639;',
                warning: '&#xFE57;',
                notice: '&#x263b;'
            },
            timeout: null
        };
    },
    ready: function() {
        console.log(this.model);
        //this.model = JSON.stringify(this.model);
        this.model.icon = this.icons[this.model.type];
        this.$el.classList.add('toast-' + this.model.type);
        this.timeout = setTimeout(this.close.bind(this), 5000);
        setTimeout((function() {
            this.$el.classList.add('show');
        }).bind(this), 10);
    },
    methods: {
        close: function() {
            this.$dispatch('toast-remove', this.model, this.$el, this.timeout);
        }
    }
});