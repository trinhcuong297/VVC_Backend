import express from 'express';
import mongoose from 'mongoose';

const AboutUs_Route = express.Router();

AboutUs_Route
    .get('/', async (req, res) => {
        try {
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
                    left: "Về VVC Green",
                    right: "Công ty TNHH VVC GREEN tên thương hiệu là VVC xin gửi tới Quý khách hàng lời chúc tốt đẹp nhất. Kính chúc Quý khách hàng và gia đình sức khỏe, thành công, hạnh phúc trong cuộc sống!<br/>Mọi hoạt động của VVC đều hướng tới xây dựng sự tin tưởng và đem lại lợi ích tối đa tới đối tác và khách hàng; luôn tâm huyết, sáng tạo trong quá trình xây dựng và phát triển thương hiệu; coi đó là lợi ích cốt lõi của chính công ty.<br/>Ban lãnh đạo VVC  cam kết bằng sự tận tâm, nhiệt huyết của cũng như sự đoàn kết, nỗ lực, chia sẻ của toàn thể cán bộ, nhân viên, chúng tôi tin tưởng sẽ đạt được sự hài lòng của Quý khách hàng, sự tín nhiệm của đối tác và các chủ đầu tư, phấn đấu trở thành một trong những thương hiệu mạnh tại Việt Nam trong lĩnh vực tư vấn vận hành và bảo trì hệ thống kỹ thuật tòa nhà."
                },
                Motto: {
                    title: "Triết lý hoạt động",
                    group: [
                        {
                            title: "Tầm nhìn",
                            cover_img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                            detail: "Trở thành tập đoàn kinh tế đa ngành tiên phong, hướng đến đầu tư sáng tạo, chất lượng, bền vững tại Việt Nam và các nước lân cận."
                        },
                        {
                            title: "Tầm nhìn",
                            cover_img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                            detail: "Trở thành tập đoàn kinh tế đa ngành tiên phong, hướng đến đầu tư sáng tạo, chất lượng, bền vững tại Việt Nam và các nước lân cận."
                        },
                        {
                            title: "Tầm nhìn",
                            cover_img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                            detail: "Trở thành tập đoàn kinh tế đa ngành tiên phong, hướng đến đầu tư sáng tạo, chất lượng, bền vững tại Việt Nam và các nước lân cận."
                        },
                    ]
                },
                Timeline: {
                    title: "Lịch sử phát triển",
                    info: [
                        {
                            time: "10/11/2023",
                            year: "2023",
                            name: "Thành lập",
                            detail: "Quản lý dịch vụ tòa nhà, lễ tân, bảo vệ,..."
                        },
                        {
                            time: "10/11/2023",
                            year: "2023",
                            name: "Quản lý tòa nhà",
                            detail: "Quản lý dịch vụ tòa nhà, lễ tân, bảo vệ,..."
                        },
                        {
                            time: "10/11/2023",
                            year: "2023",
                            name: "Quản lý tòa nhà",
                            detail: "Quản lý dịch vụ tòa nhà, lễ tân, bảo vệ,..."
                        }
                    ]
                },
                Customers: {
                    title: "Khách hàng của chúng tôi",
                    customer_logo: [
                        "http://www.theartemis.vn/Portals/28155/trangchu/logo.png",
                        "http://www.theartemis.vn/Portals/28155/trangchu/logo.png",
                        "http://www.theartemis.vn/Portals/28155/trangchu/logo.png",
                        "http://www.theartemis.vn/Portals/28155/trangchu/logo.png",
                        "http://www.theartemis.vn/Portals/28155/trangchu/logo.png",
                        "http://www.theartemis.vn/Portals/28155/trangchu/logo.png",
                        "http://www.theartemis.vn/Portals/28155/trangchu/logo.png",
                    ]
                }
            }
            return res.status(200).json(Home_Data)
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

export default AboutUs_Route;