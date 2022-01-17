new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        const srcs = {
            1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        }

        return {
            column: 'Đang thực hiện',
            listColumn: [
                'Đang thực hiện',
                'Đã hoàn thành',
                'Đã hủy bỏ',
                'Ngoài kế hoạch',
            ],
            meeting: 'Họp VPCP',
            listMeeting: [
                'Họp VPCP',
                'Họp 1',
                'Họp 2',
                'Họp 3',
            ],

            cardName: "Xây dựng UI",

            //date input
            dateStart: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            dateEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu2: false,
            completion: 0,

            //thành viên
            autoUpdate: true,
            friends: ['Nguyễn Văn A', 'Trần Thị B'],
            isUpdating: false,
            name: 'Nguyễn Văn A',
            people: [{
                    name: 'Nguyễn Văn A',
                    group: 'Group 1',
                    avatar: srcs[1]
                },
                {
                    name: 'Trần Thị B',
                    group: 'Group 1',
                    avatar: srcs[2]
                },
                {
                    name: 'Lê Thị D',
                    group: 'Group 1',
                    avatar: srcs[3]
                },
                {
                    name: 'Trần Thị C',
                    group: 'Group 1',
                    avatar: srcs[2]
                },
            ],

            //validate input
            rules: [
                value => !!value || 'Không được để trống',
            ],
        }
    },
    created() {

    },
    mounted() {
        $('#workPopup').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var id = button.data('id'); // Extract info from data-* attributes
            var modal = $(this);
            // modal.find('.modal-title').text(id);
        });

        $('#workPopup').modal('show');
    },
    methods: {
        remove(item) {
            const index = this.friends.indexOf(item.name)
            if (index >= 0) this.friends.splice(index, 1)
        },
    },
})