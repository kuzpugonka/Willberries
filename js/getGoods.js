const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link"); //сначала получаем переменную
  // описываем функции
  const getData = () => {
    fetch("/db/db.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        localStorage.setItem('data', JSON.stringify(data))
      });
  };
  // используем функции
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      getData();
    });
  });
  
};

getGoods();
