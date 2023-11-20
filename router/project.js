import express from 'express';
import mongoose from 'mongoose';

const Project_Route = express.Router();

const Project_Data = [
    {
        img_url: "https://jobsgo.vn/media/img/employer/10574-cover-app.jpg",
        cover: "Trương Định Plaza",
        detail: `Là TTTM quy mô đầu tiên tại quận Hoàng Mai.
• TTTM cung cấp đầy đủ các ngành hàng, đem
đến sự lựa chọn mua sắm, vui chơi, giải trí
phong phú và đa dạng cho khách hàng.
• Chủ đầu tư uy tín.
• Tổng diện tích sàn(kể cả tầng hầm): 16.682 m2
• Tổng diện tích sàn các phần nổi: 10.820 m`,
        post: {
            head: "Là TTTM quy mô đầu tiên tại quận Hoàng Mai. TTTM cung cấp đầy đủ các ngành hàng, đem đến sự lựa chọn mua sắm, vui chơi, giải trí phong phú và đa dạng cho khách hàng.",
            check1: "Chủ đầu tư uy tín",
            check2: "Tổng diện tích sàn(kể cả tầng hầm): 16.682 m2",
            check3: "Tổng diện tích sàn các phần nổi: 10.820 m"
        },
        link: ""
    },
    {
        img_url: "https://file.maumau.vn/public/nhadatvui/0/1680484874076/6a8ac6a5-e57a-4550-9034-15f748ecf5dc.jpg",
        cover: "Tổ hợp TTTM, Chung cư, văn phòng cho thuê Tòa nhà SME Hoàng Gia",
        detail: `Tòa nhà SME Hoàng Gia là dự án tổ hợp trung tâm thương mại, căn hộ chung cư, văn phòng cho thuê với phong cách thiết kế kiến trúc hiện đại và thiết bị nội thất cao cấp.
Đây là tòa nhà duy nhất tại khu vực quận Hà Đông được Bộ Quốc phòng cấp phép cho đỗ máy bay trực thăng tại nóc tòa nhà.
• Quy mô dự án:
+ Tổng diện tích đất: 2.272 m2
+ Diện tích đất xây dựng: 1200 m2
+ Số tầng: 38 tầng
+ Sở hữu nhiều tiện ích công cộng: Nhà hàng, hệ thống TTTM, spa, Khu vui chơi giải trí, hệ thống trường học, bệnh viện … `,
        post: {
            head: "Tòa nhà SME Hoàng Gia là dự án tổ hợp trung tâm thương mại, căn hộ chung cư, văn phòng cho thuê với phong cách thiết kế kiến trúc hiện đại và thiết bị nội thất cao cấp. Đây là tòa nhà duy nhất tại khu vực quận Hà Đông được Bộ Quốc phòng cấp phép cho đỗ máy bay trực thăng tại nóc tòa nhà.",
            check1: "Tổng diện tích đất: 2.272 m2 với 1200 m2 đất xây dựng",
            check2: "Số tầng: 38 tầng",
            check3: "Sở hữu nhiều tiện ích công cộng: Nhà hàng, hệ thống TTTM, spa, Khu vui chơi giải trí, hệ thống trường học, bệnh viện …"
        },
        link: ""
    },
    {
        img_url: "https://bizweb.dktcdn.net/100/328/216/files/image.jpg?v=1617681076305",
        cover: "Chung cư cao cấp Mulberry Lane",
        detail: `Chung cư Mulberry Lane là tổ hợp chung cư cao cấp có thiết kế hiện đại và sang trọng, thể hiện phong cách sống đẳng cấp của chủ nhân.
• Chủ Đầu tư: Tập đoàn Capitaland Singapore cùng phối hợp với Công ty Cổ phần Đầu tư và phát triển hạ tầng Hoàng Thành.
• Dự án là chung cư duy nhất tại Hà Nội nhận chứng nhận Công trình Xanh do Bộ Xây dựng Singapore trao tặng
• Quy mô dự án: 24.466m2
• Gồm 5 tòa tháp có chiều cao 27-35 tầng
• Tổng số căn hộ: 1.478 căn hộ
• Dự án chung cư Mulberry Lane được ví như một thành phố thu nhỏ với đầy đủ tiện ích toàn diện: Hồ bơi trẻ em, khu tắm trắng, khu tập Gym, khu tập thể dục thể thao….`,
        post: {
            head: "Chung cư Mulberry Lane là tổ hợp chung cư cao cấp có thiết kế hiện đại và sang trọng, thể hiện phong cách sống đẳng cấp của chủ nhân. Dự án là chung cư duy nhất tại Hà Nội nhận chứng nhận Công trình Xanh do Bộ Xây dựng Singapore trao tặng. Chủ Đầu tư: Tập đoàn Capitaland Singapore cùng phối hợp với Công ty Cổ phần Đầu tư và phát triển hạ tầng Hoàng Thành.",
            check1: "Quy mô dự án: 24.466m2. Gồm 5 tòa tháp có chiều cao 27-35 tầng.",
            check2: "Tổng số căn hộ: 1.478 căn hộ",
            check3: "Dự án chung cư Mulberry Lane được ví như một thành phố thu nhỏ với đầy đủ tiện ích toàn diện: Hồ bơi trẻ em, khu tắm trắng, khu tập Gym, khu tập thể dục thể thao…."
        },
        link: ""
    },

    {
        img_url: "https://lh4.googleusercontent.com/-x8ALYL7-Ixg/Wpy0GFgtakI/AAAAAAAAMhE/9aZj_K7aOJUGsKLRl1MwH4_HsWwXs7iwwCLcBGAs/s1600/chung-cu-the-sun-me-tri.png",
        cover: "Tổ hợp Chung cư The Sun - Mễ Trì",
        detail: `Chung cư The Sun Mễ Trì được đầu tư bởi Công ty cổ phần Đầu tư và Sản xuất Thái Dương, là tổ hợp văn phòng, thương mại dịch vụ và căn hộ hiện đại - một nơi an cư lý tưởng cho cư dân khu vực phía Tây thủ đô.
• Chủ Đầu tư: Tập đoàn Capitaland Singapore cùng phối hợp với Công ty Cổ phần Đầu tư và phát triển hạ tầng Hoàng Thành.
• Quy mô dự án: 
+ Tổng diện tích dự án: 37.000m2
+ Tổng diện tích xây dựng: 22.000m2
+ Đất dành cho khuôn viên, hạ tầng, cây xanh, đường nội bộ: 15.000m2
• 01 tòa tháp cao 35 tầng, 03 tầng hầm
• Tổng số căn hộ: 270 căn hộ
• Hệ thống tiện ích nội khu chất lượng gồm: bể bơi, spa, khu phòng gym, TTTM, vườn hoa, khu sinh hoạt cộng đồng, đường đi bộ, nhà trẻ, hệ thống thang máy hiện đại.`,
        post: {
            head: "Chung cư The Sun Mễ Trì được đầu tư bởi Công ty cổ phần Đầu tư và Sản xuất Thái Dương, là tổ hợp văn phòng, thương mại dịch vụ và căn hộ hiện đại - một nơi an cư lý tưởng cho cư dân khu vực phía Tây thủ đô. Chủ Đầu tư: Tập đoàn Capitaland Singapore cùng phối hợp với Công ty Cổ phần Đầu tư và phát triển hạ tầng Hoàng Thành",
            check1: "Tổng diện tích dự án: 37.000m2, diện tích xây dựng: 22.000m2. Đất dành cho khuôn viên, hạ tầng, cây xanh, đường nội bộ: 15.000m2",
            check2: "01 tòa tháp cao 35 tầng, 03 tầng hầm. Tổng số căn hộ: 270 căn hộ.",
            check3: "Hệ thống tiện ích nội khu chất lượng gồm: bể bơi, spa, khu phòng gym, TTTM, vườn hoa, khu sinh hoạt cộng đồng, đường đi bộ, nhà trẻ, hệ thống thang máy hiện đại."
        },
        link: ""
    },

    {
        img_url: "https://file.maumau.vn/public/nhadatvui/0/1671871256165/capital-garden-102-truong-chinh-kinh-do.jpg",
        cover: "Chung cư Capital Garden 102 Trường Chinh",
        detail: `Chung cư Capital Garden 102 Trường Chinh là Tòa nhà TTTM - Văn phòng - Căn hộ cao cấp được thiết kế phù hợp, hiện đại, tiện nghi kết hợp kiến trúc hợp lý theo nguyên tắc phong thủy.
• Quy mô dự án: 5.065m2
+ Tổng diện tích xây dựng: 2.126m2
+ Mật độ xây dựng: 43%
• 02 tòa tháp cao 27 tầng (25 tầng căn hộ + 02 tầng TTTM, dịch vụ), 03 tầng hầm có sức chứa lớn
• Tổng số căn hộ: 312 căn hộ
• Sở hữu hệ thống tiện ích hiện đại: Trung tâm thể thao, bể bơi bốn mùa, khu massage và spa đẳng cấp...`,
        post: {
            head: "Chung cư Capital Garden 102 Trường Chinh là Tòa nhà TTTM - Văn phòng - Căn hộ cao cấp được thiết kế phù hợp, hiện đại, tiện nghi kết hợp kiến trúc hợp lý theo nguyên tắc phong thủy.",
            check1: "Quy mô dự án: 5.065m2. Tổng diện tích xây dựng: 2.126m2. Mật độ xây dựng: 43%",
            check2: "02 tòa tháp cao 27 tầng (25 tầng căn hộ + 02 tầng TTTM, dịch vụ), 03 tầng hầm có sức chứa lớn",
            check3: "Sở hữu hệ thống tiện ích hiện đại: Trung tâm thể thao, bể bơi bốn mùa, khu massage và spa đẳng cấp..."
        },
        link: ""
    },

    {
        img_url: "https://media.baodautu.vn/Images/manhcuong/2020/05/26/du-an-chung-cu-tan-tay-do1590457992.jpg",
        cover: "Tổ hợp Chung cư CT2A - CT2B Khu Đô thị Tân Tây Đô",
        detail: `Nằm trong quần thể Khu Đô thị mới Tân Tây Đô, được mệnh danh là Khu Đô thị tri thức trẻ với kiến trúc hiện đại và đa dạng gồm tổ hợp khu thương mại - dịch vụ - văn phòng.
• Quy mô dự án: 21ha
• 02 tòa tháp 26 tầng trong đó có 01 tầng hầm, 03 tầng TTTM, 22 tầng căn hộ
• Tổng số căn hộ: 800 căn hộ
• Hội tụ đầy đủ các dịch vụ tiện ích: Trường mầm non, đài phun nước, phòng khám, sân tennis, vườn hoa, công viên cây xanh, siêu thị, nhà hàng...`,
        post: {
            head: "Nằm trong quần thể Khu Đô thị mới Tân Tây Đô, được mệnh danh là Khu Đô thị tri thức trẻ với kiến trúc hiện đại và đa dạng gồm tổ hợp khu thương mại - dịch vụ - văn phòng.",
            check1: "Quy mô dự án: 21ha",
            check2: "02 tòa tháp 26 tầng trong đó có 01 tầng hầm, 03 tầng TTTM, 22 tầng căn hộ. Tổng số căn hộ: 800 căn hộ",
            check3: "Hội tụ đầy đủ các dịch vụ tiện ích: Trường mầm non, đài phun nước, phòng khám, sân tennis, vườn hoa, công viên cây xanh, siêu thị, nhà hàng..."
        },
        link: ""
    },

    {
        img_url: "https://file4.batdongsan.com.vn/crop/600x315/2015/06/19/20150619172641-be9b.jpg",
        cover: "TNR Goldsilk Complex",
        detail: `Goldsilk Complex là 1 tổ hợp thương mại và nhà ở lấy cảm hứng từ những thiết kế hiện đại, năng động và sang trọng theo phong cách châu Âu.
• Quy mô dự án: 
+ Tổng diện tích đất: 19.594m2
+ Diện tích mặt bằng: 9.000m2
• 02 tòa tháp 32 tầng trong đó có 01 tầng hầm, 04 tầng TTTM, dịch vụ
• Tổng số căn hộ: 748 căn hộ
• Mang đến cho Cư dân cuộc sống đẳng cấp, phong cách châu Âu với đầy đủ tiện nghi: TTTM, khu nhà trẻ, hệ thống Spa, Gym, nhà hàng, trung tâm y tế, vườn nghỉ dưỡng trên cao, bể bơi ngoài trời...`,
        post: {
            head: "Goldsilk Complex là 1 tổ hợp thương mại và nhà ở lấy cảm hứng từ những thiết kế hiện đại, năng động và sang trọng theo phong cách châu Âu.",
            check1: "Tổng diện tích đất: 19.594m2. Diện tích mặt bằng: 9.000m2.",
            check2: "02 tòa tháp 32 tầng trong đó có 01 tầng hầm, 04 tầng TTTM, dịch vụ. Tổng số căn hộ: 748 căn hộ",
            check3: "Mang đến cho Cư dân cuộc sống đẳng cấp, phong cách châu Âu với đầy đủ tiện nghi: TTTM, khu nhà trẻ, hệ thống Spa, Gym, nhà hàng, trung tâm y tế, vườn nghỉ dưỡng trên cao, bể bơi ngoài trời..."
        },
        link: ""

    },

    {
        img_url: "https://chungcuhn24h.net/wp-content/uploads/2023/06/phoi-canh-gemek-tower-1.jpg",
        cover: "Chung cư Gemek Tower",
        detail: `Một tổ hợp trung tâm thương mại,văn phòng và chung cư cao cấp với kiến trúc hiện đại và đầy đủ các tiện ích dịch vụ của một cuộc sống hiện đại và năng động.
• Quy mô dự án: 
+ Tổng diện tích đất: 8.295m2
+ Diện tích sàn sử dụng: 140.728m2
• 02 tòa tháp 34 tầng trong đó có 03 tầng hầm, 05 tầng TTTM, dịch vụ
• Tổng số căn hộ: 1300 căn hộ
• Không gian sống hiện đại, tiện nghi với đầy đủ những tiện ích phục vụ dân sinh: TTTM, vườn hoa, công viên cây xanh, siêu thị, nhà hàng, hệ thống trường học, bể bơi bốn mùa, khu vui chơi trẻ em, sân tennis...`,
        post: {
            head: "Một tổ hợp trung tâm thương mại,văn phòng và chung cư cao cấp với kiến trúc hiện đại và đầy đủ các tiện ích dịch vụ của một cuộc sống hiện đại và năng động.",
            check1: "Tổng diện tích đất: 8.295m2. Diện tích sàn sử dụng: 140.728m2",
            check2: "02 tòa tháp 34 tầng trong đó có 03 tầng hầm, 05 tầng TTTM, dịch vụ. Tổng số căn hộ: 1300 căn hộ",
            check3: "Không gian sống hiện đại, tiện nghi với đầy đủ những tiện ích phục vụ dân sinh: TTTM, vườn hoa, công viên cây xanh, siêu thị, nhà hàng, hệ thống trường học, bể bơi bốn mùa, khu vui chơi trẻ em, sân tennis..."
        },
        link: ""

    },

    {
        img_url: "https://ngoaigiaodoan.vn/wp-content/uploads/sites/176/2022/05/Ngoai-giao-doan-dem-1-e1653639441657.jpg",
        cover: "Chung cư Ngoại Giao Đoàn",
        detail: `Khu Đô thị hiện đại, đạt tiêu chuẩn quốc tế do Tổng Công ty Xây dựng Hà Nội làm Chủ Đầu tư, mang đến không gian sống chuẩn mực, chốn an cư hoàn hảo cho cộng đồng cư dân Thủ Đô.
• Quy mô dự án: 
+ Tổng diện tích: 62.8 ha
• 23 tòa được xây dựng từ 21-45 tầng
• Quy mô dân số toàn khu: 9700 người
• Được quy hoạch đồng bộ với hệ thống cảnh quan cây xanh thoáng mát cộng hưởng hệ thống tiện ích dịch vụ nội ngoại khu đồng bộ mang đến cuộc sống tiện nghi bậc nhất cho cư dân: TTTM, phòng tập yoga, gym, spa, hệ thống trường học, khu phức hợp thể thao...`,
        post: {
            head: "Khu Đô thị hiện đại, đạt tiêu chuẩn quốc tế do Tổng Công ty Xây dựng Hà Nội làm Chủ Đầu tư, mang đến không gian sống chuẩn mực, chốn an cư hoàn hảo cho cộng đồng cư dân Thủ Đô.",
            check1: "Tổng diện tích: 62.8 ha",
            check2: "23 tòa được xây dựng từ 21-45 tầng. Quy mô dân số toàn khu: 9700 người",
            check3: "Được quy hoạch đồng bộ với hệ thống cảnh quan cây xanh thoáng mát cộng hưởng hệ thống tiện ích dịch vụ nội ngoại khu đồng bộ mang đến cuộc sống tiện nghi bậc nhất cho cư dân: TTTM, phòng tập yoga, gym, spa, hệ thống trường học, khu phức hợp thể thao..."
        },
        link: ""
    },

    {
        img_url: "https://cdn.guland.vn/files/163273496461518ef45e6ad.jpg",
        cover: "Chung cư Golden Westlake",
        detail: `Dự án căn hộ và biệt thự cao cấp được thiết kế để trở thành một trong những tổ hợp căn hộ sang trọng, văn phòng đẳng cấp, cơ sở vật chất hiện đại nhất Hà Nội, từ vị trí của tòa nhà có thể nhìn thẳng ra Hồ Tây.
• Quy mô dự án: 
+ Tổng diện tích: 2 ha
• 02 tòa tháp cao 27 tầng, 03 tầng hầm để xe
• Tổng số căn hộ: 370 căn hộ và 16 biệt thự đơn lập
• Tiện ích: chỗ chơi cho trẻ nhỏ, sân tennis, trung tâm thể dục thể thao 2 tầng, bể bơi ngoài trời, sân bóng chuyền bãi biển nhân tạo, khu tập luyện đánh golf, 02 sân tennis, 02 sân cầu lông, khu nấu ăn ngoài trời...`,
        post: {
            head: "Dự án căn hộ và biệt thự cao cấp được thiết kế để trở thành một trong những tổ hợp căn hộ sang trọng, văn phòng đẳng cấp, cơ sở vật chất hiện đại nhất Hà Nội, từ vị trí của tòa nhà có thể nhìn thẳng ra Hồ Tây.",
            check1: "Tổng diện tích: 2 ha",
            check2: "02 tòa tháp cao 27 tầng, 03 tầng hầm để xe. Tổng số căn hộ: 370 căn hộ và 16 biệt thự đơn lập",
            check3: "Tiện ích: chỗ chơi cho trẻ nhỏ, sân tennis, trung tâm thể dục thể thao 2 tầng, bể bơi ngoài trời, sân bóng chuyền bãi biển nhân tạo, khu tập luyện đánh golf, 02 sân tennis, 02 sân cầu lông, khu nấu ăn ngoài trời..."
        },
        link: ""
    },
]

Project_Route
    .get('/', async (req, res) => {
        try {
            return res.status(200).json(Project_Data)
        } catch (err) {
            console.log(err);
        }
    })
    .post('/', async (req, res) => {
        try {
            const DeviceModel = mongoose.model(`device_owner`, Device_Owner);
            const get_Test_Data = await DeviceModel.find({ username: req.params.user });
            return res.status(200).json(get_Test_Data);
        } catch (err) {
            console.log(err);
        }
    });

export default Project_Route;