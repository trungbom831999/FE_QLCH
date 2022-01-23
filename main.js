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
            people: [
                { header: 'Nhóm thiết kế' },
                {
                    name: 'Nguyễn Văn A',
                    group: 'Nhóm thiết kế',
                    avatar: srcs[1]
                },
                {
                    name: 'Trần Thị B',
                    group: 'Nhóm thiết kế',
                    avatar: srcs[2]
                },
                {
                    name: 'Lê Thị D',
                    group: 'Nhóm thiết kế',
                    avatar: srcs[3]
                },
                {
                    name: 'Trần Thị C',
                    group: 'Nhóm thiết kế',
                    avatar: srcs[2]
                },
                { header: 'Nhóm lập trình' },
                {
                    name: 'Nguyễn Văn A',
                    group: 'Nhóm lập trình',
                    avatar: srcs[1]
                },
                {
                    name: 'Trần Thị B',
                    group: 'Nhóm lập trình',
                    avatar: srcs[2]
                },
                {
                    name: 'Lê Thị D',
                    group: 'Nhóm lập trình',
                    avatar: srcs[3]
                },
            ],

            commentList: [{
                    avatar: '/img/avt1.png',
                    userName: 'Trần Văn A',
                    content: 'Hoàn thành công việc 1'
                },
                {
                    avatar: '/img/avt2.png',
                    userName: 'Trần Văn B',
                    content: 'Đang thực hiện phần 2'
                },
                {
                    avatar: '/img/avt3.png',
                    userName: 'Trần Văn C',
                    content: 'Đang code gọi api'
                },
            ],
            pageComment: 1,
            lengthComment: 6,

            pageFile: 1,
            lengthFile: 6,
            fileList: [{
                    avatar: '/img/avt1.png',
                    userName: 'Trần Văn A',
                    files: ['upload/direct/mb/lưu trữ.xslx', 'upload/direct/mb/báo_cáo.docx']
                },
                {
                    avatar: '/img/avt2.png',
                    userName: 'Trần Văn B',
                    files: ['upload/direct/mb/api.xslx']
                },
                {
                    avatar: '/img/avt3.png',
                    userName: 'Trần Văn C',
                    files: ['upload/direct/mb/slide.pdf']
                },
            ],

            // color picker 
            color: '#1976D2FF',
            mask: '!#XXXXXXXX',
            menuColor: false,
            //validate input
            rules: [
                value => !!value || 'Không được để trống',
            ],
        }
    },
    computed: {
        swatchStyle() {
            const {
                color,
                menu
            } = this
            return {
                backgroundColor: color,
                cursor: 'pointer',
                height: '25px',
                width: '60px',
                borderRadius: menu ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out'
            }
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

        // $('#workPopup').modal('show');
    },
    methods: {
        remove(item) {
            const index = this.friends.indexOf(item.name)
            if (index >= 0) this.friends.splice(index, 1)
        },

        addNewCard() {
            $('#workPopup').modal('show');
        },

        createFileName(fileName) {
            return fileName.split("/").at(-1);
        }

    },
})