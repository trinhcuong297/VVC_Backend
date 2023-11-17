import express from 'express';
import mongoose from 'mongoose';

const Home_Route = express.Router();
const Home_Data = {
    Hero: [
        {
            img_url: "https://chungcu-thesun.com.vn/wp-content/uploads/2019/02/chung-cu-the-sun-me-tri.jpg",
            cover: "Quản lý tòa nhà",
            detail: "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
        },
        {
            img_url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            cover: "The Beauty of Nature 2",
            detail: "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
        }
    ],
    Intro: {
        left: "Lời giới thiệu",
        right: "Công ty TNHH VVC GREEN tên thương hiệu là VVC xin gửi tới Quý khách hàng lời chúc tốt đẹp nhất. Kính chúc Quý khách hàng và gia đình sức khỏe, thành công, hạnh phúc trong cuộc sống!<br/>Mọi hoạt động của VVC đều hướng tới xây dựng sự tin tưởng và đem lại lợi ích tối đa tới đối tác và khách hàng; luôn tâm huyết, sáng tạo trong quá trình xây dựng và phát triển thương hiệu; coi đó là lợi ích cốt lõi của chính công ty.<br/>Ban lãnh đạo VVC  cam kết bằng sự tận tâm, nhiệt huyết của cũng như sự đoàn kết, nỗ lực, chia sẻ của toàn thể cán bộ, nhân viên, chúng tôi tin tưởng sẽ đạt được sự hài lòng của Quý khách hàng, sự tín nhiệm của đối tác và các chủ đầu tư, phấn đấu trở thành một trong những thương hiệu mạnh tại Việt Nam trong lĩnh vực tư vấn vận hành và bảo trì hệ thống kỹ thuật tòa nhà."
    },
    Feature: {
        title: "Lĩnh vực kinh doanh",
        features: [
            {
                link: "/news",
                name: "Quản lý tòa nhà",
                detail: "Quản lý dịch vụ tòa nhà, lễ tân, bảo vệ,..."
            },
            {
                link: "/news",
                name: "Quản lý tòa nhà",
                detail: "Quản lý dịch vụ tòa nhà, lễ tân, bảo vệ,..."
            },
            {
                link: "/news",
                name: "Quản lý tòa nhà",
                detail: "Quản lý dịch vụ tòa nhà, lễ tân, bảo vệ,..."
            }
        ]
    },
    News: {
        title: "Tin tức",
        link: "/news"
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