const search = () => {
  const input = document.querySelector(".search-block > input");
  const searchBtn = document.querySelector(".search-block > button");
  // console.log('input: ', input);
  // console.log('searchBtn: ', searchBtn);

  try {
    input.addEventListener('input', (event) => {
      console.log(event.target.value);
    })
    searchBtn.addEventListener('click', () => {
      console.log(input.value);
    })    
  } catch (error) {
    // console.error(error.message);
    console.error('Уважаемый верстальщик, верните класс, пожалуйста))))')
  }
};

search();
