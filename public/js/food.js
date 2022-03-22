// 공통 API
const api = async (url, fn) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => fn(data))
    .catch((e) => console.log);
};

let menuList = [];
let foodList = [];

const menubar = document.getElementById("cafe-menu");
const foodmenu = document.getElementById("food-list");

const makeMenu = () => {
  menuList.forEach((item) => {
    let menu = document.createElement("div");
    menu.classList.add("menu");
    menu.id = `item-${item.id}`;
    menu.textContent = item.name;
    menu.addEventListener("click", () => {
      getCategory(item.id);
    });
    menubar.appendChild(menu);
  });
};

const getCategory = (categoryId) => {
  while (foodmenu.hasChildNodes()) {
    foodmenu.removeChild(foodmenu.firstChild);
  }

  foodList = [];
  api(`categories/${categoryId}`, (data) => {
    foodList = data.foods;
    makeFood();
  });
};

const makeFood = () => {
  foodList.forEach((item) => {
    const food = document.createElement("div");
    food.classList.add("item");
    food.id = `item-${item.id}`;
    const image = document.createElement("img");
    // image.setAttribute("src", `/img/${item.image}`);
    image.setAttribute("src", `https://picsum.photos/250/250`);
    const name = document.createElement("div");
    name.textContent = item.name;
    food.appendChild(image);
    food.appendChild(name);
    foodmenu.appendChild(food);
  });
};

(function () {
  api("categories", (data) => {
    menuList = data.categories;
    makeMenu();
  });

  getCategory(1);
})();
