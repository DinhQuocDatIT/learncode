const arrQuestionHtmls = {
  id: 1,
  title: "HTML",
  questions: [
    {
      id: 11,
      title: "Inline-block element là gì?",
      level: "CƠ BẢN",
      summary:
        "Kết hợp đặc tính inline và block: hiển thị trên cùng dòng như inline nhưng có thể set width/height/margin/padding như block.",
      points: [
        "Dùng CSS `display: inline-block`. Ứng dụng phổ biến: tạo navigation menu ngang, grid layout đơn giản, buttons cạnh nhau.",
        "Khác inline: có thể set kích thước.",
        "Khác block: không chiếm hết dòng.",
      ],
      example: null,
    },
    {
      id: 12,
      title: "Attribute là gì? Cho ví dụ?",
      level: "CƠ BẢN",
      summary:
        'Attribute cung cấp thông tin bổ sung cho HTML element, viết trong thẻ mở theo cú pháp <code>name="value"</code>.',
      points: [],
      example: '<a href="https://example.com" target="_blank">Link</a>',
    },
    {
    id: 19,
    title: "`<header>`, `<footer`, `<nav>`, `<main>`, `<aside>` dùng khi nào?",
    level: "CƠ BẢN",
    summary: 
      "`<header>`: phần giới thiệu/navigation của trang hoặc section (có thể dùng nhiều lần). `<footer`: thông tin cuối trang (copyright, liên hệ, links). `<nav>`: navigation links chính — screen readers cho phép nhảy thẳng đến đây. `<main>`: nội dung chính, duy nhất 1 per page, bỏ qua cho screen readers. `<aside>`: nội dung liên quan gián tiếp (sidebar, related posts, ads).",
    points: [
      "Lưu ý: `<header>` và `<footer>` không nhất thiết chỉ dùng ở top/bottom trang — mỗi `<article>` cũng có thể có header riêng."
    ],
    example: null
  },
  {
    id: 20,
    title: "`<figure>` và `<figcaption>` dùng để làm gì?",
    level: "CƠ BẢN",
    summary: 
      "`<figure>` nhóm nội dung minh họa có thể tách ra mà không ảnh hưởng luồng văn bản chính: ảnh, biểu đồ, code snippet, video. `<figcaption>` là chú thích mô tả, đặt đầu hoặc cuối `<figure>`.",
    points: [
      "`<figcaption>` thay thế `alt` cho screen readers nên không cần lặp thông tin."
    ],
    example: '<figure>\n  <img src="chart.png" alt="...">\n  <figcaption>Biểu đồ doanh thu Q1</figcaption>\n</figure>'
  },
  {
    id: 21,
    title: "Sự khác biệt giữa `<b>` và `<strong>`?",
    level: "CƠ BẢN",
    summary: 
      "Cả hai đều làm chữ in đậm, nhưng `<b>` chỉ mang tính chất trình bày (bold), còn `<strong>` mang ý nghĩa quan trọng về nội dung (semantic importance).",
    points: [
      "Screen readers sẽ nhấn mạnh giọng đọc khi gặp thẻ `<strong>`.",
      "Nên ưu tiên dùng `<strong>` cho các cảnh báo hoặc nội dung then chốt."
    ],
    example: "<strong>Cảnh báo:</strong> Dữ liệu sẽ bị xóa vĩnh viễn!"
  }
  ],
};
export default arrQuestionHtmls;
