const getGoods = () => {
  // console.log('hi');

  const links = document.querySelectorAll(".navigation-link"); //сначала получаем переменную
  // console.log('links: ', links);
  // описываем функции
  const getData = () => {
    fetch("/db/db.json")
      .then((res) => res.json())
      // .then((res) => {
      //   console.log("res: ", res);
      //   return res.json();
      // })
      .then((data) => {
        console.log("data: ", data);
      });
  };
  // используем функции
  links.forEach((link) => {
    // console.log('link: ', link);

    link.addEventListener("click", (e) => {
      // console.log('hi');
      e.preventDefault();
      getData();
    });
  });

  // localStorage.setItem("goods", JSON.stringify({ name: "all" }));
  localStorage.setItem("goods", JSON.stringify([1, 2, 3, 4, 5]));
  console.log(localStorage.getItem("goods")); //выведет строку
  console.log(JSON.parse(localStorage.getItem("goods"))); //выведет массив

  const goods = JSON.parse(localStorage.getItem("goods"));
  console.log("goods: ", goods);

  localStorage.removeItem('goods')
  console.log('localStorage: ', localStorage);
};

getGoods();
