import express from 'express';
import mongoose from 'mongoose';

const News_Route = express.Router();

const News_data = [
    {
        id: 1,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: `  <p className="pb- 6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                            justice.Six draw
                            you him full not mean evil.Prepare garrets it expense windows shewing do an.She projection advantages
                            resolution son indulgence.Part sure on no long life am at ever.In songs above he as drawn to.Gay was
                            outlived peculiar rendered led six.</p >

                        <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
                            thoroughly
                            partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
                            attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
                            expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
                            uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
                            newspaper in advantage frankness to concluded unwilling.</p>

                        <p className="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
                            discovered
                            uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
                            spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
                            active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
                            prospect no as raptures quitting.</p>

                        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                            Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                            expression
                            unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
                            Steepest speaking up attended it as. Made neat an on be gave show snug tore.
                        </div>

                        <p className="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
                            everything.
                            Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
                            is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
                            among. Delightful remarkably new assistance saw literature mrs favourable.</p>

                        <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

                        <p className="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
                            oh he common
                            future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
                            simplicity at do projecting increasing terminated. As edward settle limits at in.</p>

                        <p className="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
                            Hundred no
                            prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
                            ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
                            connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
                            ask expense are compact. New all paid few hard pure she.</p>

                        <p className="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
                            tastes really
                            so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
                            elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
                            in cold no less been sent hard hill.</p>

                        <p className="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
                            make two real
                            miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
                            to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
                            without me.</p>`,
        tags: []
    },
    {
        id: 2,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    },
    {
        id: 3,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    },
    {
        id: 4,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    },
    {
        id: 5,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    },
    {
        id: 6,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    },
    {
        id: 7,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    },
    {
        id: 8,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    },
    {
        id: 9,
        cover_img: "https://vvc.com.vn/uploads/thumbs/370x0/6fc1d0c4804f7e11275e.jpg",
        created_time: "10/07/2023",
        title: "Điểm tin VVC",
        pre_content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        content: "Tiếp nối sự thành công của sự kiện BIM Group 5150 Phú Quốc vào tháng 11/2022, BIM Group tiếp tục đồng hành cùng Sunrise Events Vietnam, đưa giải đấu ba môn phối hợp tiêu chuẩn quốc tế IRONMAN 70.3 lần đầu tiên đến đảo ngọc Phú Quốc. Với vai trò là Nhà tài trợ Chiến lược, BIM Group kỳ vọng giải đấu sẽ góp phần quảng bá hình ảnh Phú Quốc – điểm đến du lịch thể thao nổi bật, giúp gia tăng sức cạnh tranh của đảo ngọc với các điểm đến biển đảo khác trong khu vực.",
        tags: []
    }
]

const Hero_news = {
    Hero: [
        {
            img_url: "https://chungcu-thesun.com.vn/wp-content/uploads/2019/02/chung-cu-the-sun-me-tri.jpg",
            cover: "Tin tức cập nhật",
            detail: "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
        },
        {
            img_url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            cover: "The Beauty of Nature 2",
            detail: "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
        }
    ],
}

News_Route
    .get('/all', async (req, res) => {
        try {

            const res_data = News_data
            return res.status(200).json(res_data)
        } catch (err) {
            console.log(err);
        }
    })
    .get('/hero', async (req, res) => {
        try {

            const res_data = Hero_news
            return res.status(200).json(res_data)
        } catch (err) {
            console.log(err);
        }
    })
    .get('/home_news/:count', async (req, res) => {
        try {

            const res_data = News_data.slice(0, req.params.count)
            return res.status(200).json(res_data)
        } catch (err) {
            console.log(err);
        }
    })
    .get('/page/:count', async (req, res) => {
        try {

            const res_data = News_data.slice((req.params.count - 1) * 20, req.params.count * 20)
            return res.status(200).json(res_data)
        } catch (err) {
            console.log(err);
        }
    })
    .get('/id/:count', async (req, res) => {
        try {
            const res_data = News_data.find((e) => e.id.toString() == req.params.count.toString())
            return res.status(200).json(res_data)
        } catch (err) {
            console.log(err);
        }
    })



export default News_Route;