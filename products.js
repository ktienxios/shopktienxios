// products.js
const KTIENXIOS_PRODUCTS = [
    {
        id: 1,
        name: "Key Bypass Premium",
        img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=500",
        desc: "Hỗ trợ Full chức năng, nghe gọi cho mọi dòng iPhone/iPad.",
        price: "150.000đ",
        hot: true
    }, // <-- Có dấu phẩy
    {
        id: 2,
        name: "Tool Tối Ưu FPS",
        img: "https://images.unsplash.com/photo-1510511459019-5dee2c1b1c6b?q=80&w=500",
        desc: "Phần mềm can thiệp sâu hệ thống giúp chơi game mượt mà.",
        price: "50.000đ",
        hot: false
    }, // <-- Có dấu phẩy
    {
        id: 3,
        name: "Netflix Premium",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500",
        desc: "Tài khoản chính chủ, xem phim 4K cực nét.",
        price: "30.000đ",
        hot: false
    }, // <-- PHẢI CÓ DẤU PHẨY Ở ĐÂY (Lỗi của ông nằm ở đây)
    {
        id: 4,
        name: "YouTube Premium",
        img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=500",
        desc: "Xem video không quảng cáo, nghe nhạc background.",
        price: "25.000đ",
        hot: false
    } 
    // Phần tử cuối cùng thì có dấu phẩy hay không cũng được, nhưng tốt nhất nên có để lần sau dán tiếp không bị quên.
];
