export default {
    template: '<span> {{account.name|| account.email}}</span>',
    data: function() {
        return {
            account: {}
        }
    },
    async mounted() {
        this.account = await this.$api.get('/service/admin/account')
    },
    methods: {}
}