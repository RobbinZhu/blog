export default {
    template: '<span> {{account.name}}</span>',
    data: function() {
        return {
            account: {}
        }
    },
    async mounted() {
        this.account = await this.$api.get('/service/me/account')
    },
    methods: {}
}