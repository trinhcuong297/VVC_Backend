import express from 'express';

const Home_Route = express.Router();
const Home_Data = {
    Hero: [
        {
            img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
            cover: "Trao giá trị - Tạo niềm tin",
            detail: ""
        },
        {
            img_url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            cover: "Trung thực - Tận tâm - Trách nhiệm",
            detail: ""
        }
    ],
    Intro: {
        left: "GIỚI THIỆU",
        right: "Công ty TNHH VVC GREEN tên thương hiệu là VVC xin gửi tới Quý khách hàng lời chúc tốt đẹp nhất. Kính chúc Quý khách hàng và gia đình sức khỏe, thành công, hạnh phúc trong cuộc sống!<br/>Mọi hoạt động của VVC đều hướng tới xây dựng sự tin tưởng và đem lại lợi ích tối đa tới đối tác và khách hàng; luôn tâm huyết, sáng tạo trong quá trình xây dựng và phát triển thương hiệu; coi đó là lợi ích cốt lõi của chính công ty.<br/>Ban lãnh đạo VVC  cam kết bằng sự tận tâm, nhiệt huyết của cũng như sự đoàn kết, nỗ lực, chia sẻ của toàn thể cán bộ, nhân viên, chúng tôi tin tưởng sẽ đạt được sự hài lòng của Quý khách hàng, sự tín nhiệm của đối tác và các chủ đầu tư, phấn đấu trở thành một trong những thương hiệu mạnh tại Việt Nam trong lĩnh vực tư vấn vận hành và bảo trì hệ thống kỹ thuật tòa nhà."
    },
    Feature: {
        title: "LĨNH VỰC KINH DOANH",
        features: [
            {
                link: "/Projects",
                name: "QUẢN LÝ TÒA NHÀ",
                detail: "Quản lý vận hành tòa nhà"
            },
            {
                link: "/Projects",
                name: "THI CÔNG XÂY LẮP",
                detail: "Thi công xây lắp tòa nhà"
            },
            {
                link: "/Projects",
                name: "Đào tạo nghiệp vụ",
                detail: "Đào tạo nghiệp vụ quản lý, vận hành"
            }
        ]
    },
    News: {
        title: "Tin tức",
    }
}

Home_Route
    .get('/', async (req, res) => {
        try {
            return res.status(200).json(Home_Data)
        } catch (err) {
            console.log(err);
        }
    })

export default Home_Route;