// products.js - BẢN CHUẨN ĐÃ FIX ĐỊNH DẠNG SỐ (DÙNG CHO TÍNH TOÁN)

const KTIENXIOS_CONFIG = {
    musicUrl: "https://scared-aquamarine-wzjsbpfpzz.edgeone.app/snaptt.me-48765111.mp3",
    musicTitle: "BGM - KTIENXIOS SYSTEM",
    autoPlayOnTouch: true 
};

const KTIENXIOS_PRODUCTS = [
    {
        id: 1,
        name: "IPA BYPASS V3 NEW",
        img: "https://cdn.phototourl.com/member/2026-05-01-8ac76032-e981-4768-9d91-427baa3b16b8.jpg",
        desc: "Hỗ trợ Full chức năng, nghe gọi cho mọi dòng iPhone/iPad.",
        hot: true,
        options: [
            { label: "Gói Ngày", price: 5000 },
            { label: "Gói Tuần", price: 20000 },
            { label: "Gói Tháng", price: 50000 }
        ]
    },
    {
        id: 2,
        name: "ACC CLONE FREE FIRE",
        img: "https://cdn.phototourl.com/member/2026-05-01-f9052ff4-5ae0-4d37-af5e-98ab57098349.gif",
        desc: "Acc clone trắng thông tin, ngâm lâu, cực kỳ ổn định.",
        hot: true,
        price: 4000,
        isClone: true 
    },
    {
        id: 3,
        name: "ALL MENU IPA MOD",
        img: "https://cdn.phototourl.com/member/2026-05-02-50cdf1ab-7c35-402c-990e-e09fabfc8205.png",
        desc: "Tổng hợp các bản Mod IPA chất lượng cao, Anti-ban mạnh mẽ.",
        isRedirect: true,
        targetUrl: "ipa.html"
    },
    {
        id: 4,
        name: "ALL MENU TIPA MOD",
        img: "https://cdn.phototourl.com/member/2026-05-02-af16c4d6-4cbe-4557-aba6-4a8ca66ffccf.png",
        desc: "Tổng hợp các bản Mod TIPA dành riêng cho TrollStore.",
        isRedirect: true,
        targetUrl: "tipa.html"
    }
];

const IPA_PRODUCTS = [
    {
        id: "ipa_v1",
        name: "KEY MENU FLUORITE",
        img: "https://cdn.phototourl.com/member/2026-05-02-90a1bec9-ad8c-4639-8360-9783f59942d7.jpg",
        desc: "Aimbot 100%, ESP Line, Hiện khoảng cách, Chống khóa acc.",
        options: [
            { label: "Key 1 Ngày", price: 100000 },
            { label: "Key 7 Ngày", price: 290000 },
            { label: "Key 30 Ngày", price: 450000 }
        ]
    },
    {
        id: "ipa_v2",
        name: "KEY MENU MIGUL LITE",
        img: "https://cdn.phototourl.com/member/2026-05-02-b023ed4e-d3dc-4fe3-951a-b3dc402a5ff4.jpg",
        desc: "Bản VIP: Gom tâm, Chạy nhanh, Nhảy cao, Xuyên tường nhẹ.",
        options: [
            { label: "Key 7 Ngày", price: 150000 },
            { label: "Key 30 Ngày", price: 350000 }
        ]
    },
    {
        id: "ipa_v3",
        name: "KEY MENU MIGUL PRO",
        img: "https://cdn.phototourl.com/member/2026-05-02-057ce145-3a60-43dd-9fa3-7d3cd0574215.jpg",
        desc: "Bản VIP: Gom tâm, Chạy nhanh, Nhảy cao, Xuyên tường nhẹ.",
        options: [
            { label: "Key 7 Ngày", price: 220000 },
            { label: "Key 30 Ngày", price: 450000 }
        ]
    }
];

const TIPA_PRODUCTS = [
    {
        id: "tipa_v1",
        name: "KEY TIPA IGUIDECHEAT",
        img: "https://cdn.phototourl.com/member/2026-05-02-09234322-9c22-4dea-9f5b-9d0e9de08876.jpg",
        desc: "Dành riêng cho TrollStore: Bypass 100% các loại Anti-cheat.",
        options: [
            { label: "Key 30 Ngày", price: 200000 },
            { label: "Key 60 Ngày", price: 300000 }
        ]
    },
    {
        id: "tipa_v2",
        name: "KEY TIPA MIGUL",
        img: "https://cdn.phototourl.com/member/2026-05-02-f9d26495-c9f9-4f39-b147-3986fa34686f.jpg",
        desc: "Dành riêng cho TrollStore: Bypass 100% các loại Anti-cheat.",
        options: [
            { label: "Key 7 Ngày", price: 100000 },
            { label: "Key 30 Ngày", price: 150000 }
        ]
    }
];
