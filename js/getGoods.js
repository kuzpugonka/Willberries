const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link"); //сначала получаем все ссылки из меню

  const getData = (value, category) => {
    fetch("/db/db.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data: ", data);

        const array = category
          ? data.filter((item) => item[category] === value)
          : data;

        localStorage.setItem("goods", JSON.stringify(array));
      });
  };
  // используем функции
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // убираем стандартное поведение ссылки
      const linkValue = link.textContent;
      // console.log('linkValue: ', linkValue);
      const category = link.dataset.field;
      // console.log('category: ', category);
      getData(linkValue, category);
    });
  });
};

getGoods();
