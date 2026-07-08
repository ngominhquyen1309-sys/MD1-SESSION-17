let items = document.querySelectorAll('.color-item');
items.forEach((el) => {
  el.onmouseover = function () {
    let bgColor = el.getAttribute('id'); // lấy dữ liệu ở thuộc tính id của thẻ
    document.body.style.backgroundColor = bgColor;
  };
});