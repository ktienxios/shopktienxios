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
        id: 2,
        name: "Tool Tối Ưu FPS",
        img: "https://images.unsplash.com/photo-1510511459019-5dee2c1b1c6b?q=80&w=500",
        desc: "Phần mềm can thiệp sâu hệ thống giúp chơi game mượt mà.",
        hot: false,
        options: [
            { label: "Gói Ngày", price: "10.000đ" },
            { label: "Gói Tuần", price: "35.000đ" },
            { label: "Gói Tháng", price: "50.000đ" }
        ]
    },
    {
        id: 3,
        name: "Netflix Premium",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500",
        desc: "Tài khoản chính chủ, xem phim 4K cực nét.",
        hot: false,
        options: [
            { label: "Gói Tháng", price: "30.000đ" },
            { label: "Gói 3 Tháng", price: "80.000đ" }
        ]
    },
    {
        id: 4,
        name: "YouTube Premium",
        img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=500",
        desc: "Xem video không quảng cáo, nghe nhạc background.",
        hot: false,
        options: [
            { label: "Gói Tháng", price: "25.000đ" },
            { label: "Gói Năm", price: "250.000đ" }
        ]
    }
];
