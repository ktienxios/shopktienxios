// products.js

// --- CẤU HÌNH HỆ THỐNG ---
const KTIENXIOS_CONFIG = {
    musicUrl: "https://scared-aquamarine-wzjsbpfpzz.edgeone.app/snaptt.me-48765111.mp3",
    musicTitle: "BGM - KTIENXIOS SYSTEM",
    autoPlayOnTouch: true // Kích hoạt chế độ chạm để phát nhạc
};

const KTIENXIOS_PRODUCTS = [
    {
        id: 1,
        name: "IPA BYPASS V3 NEW",
        img: "https://cdn.phototourl.com/member/2026-05-01-8ac76032-e981-4768-9d91-427baa3b16b8.jpg",
        desc: "Hỗ trợ Full chức năng, nghe gọi cho mọi dòng iPhone/iPad.",
        hot: true,
        options: [
            { label: "Gói Ngày", price: "5.000đ" },
            { label: "Gói Tuần", price: "20.000đ" },
            { label: "Gói Tháng", price: "50.000đ" }
        ]
    },
    {
        id: 2, // ID tiếp theo là 2
        name: "ACC CLONE FREE FIRE",
        img: "https://cdn.phototourl.com/member/2026-05-01-f9052ff4-5ae0-4d37-af5e-98ab57098349.gif", // Ông có thể thay link ảnh tùy ý
        desc: "Acc clone trắng thông tin, ngâm lâu, cực kỳ ổn định.",
        hot: true,
        price: 4000, // Giá 4.000đ một acc
        isClone: true // Đánh dấu để xử lý nhập số lượng ở file index
    }
];
