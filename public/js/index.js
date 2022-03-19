/**************************** main_section ****************************/
let container_main = document.querySelector(".container_main");
let container_select = document.querySelector(".container_select");

let main_func = (() => {
  let main_bg_count = [0,1,2,3];
  
  let change_main_bg = () => {
    main_bg_count.push(main_bg_count.shift());
    container_main.style.backgroundImage = 'url("../img/main_bg_' + main_bg_count[0] + '.jpg")';
  }

  setInterval(change_main_bg,5000);

  container_main.addEventListener("click",()=>{
    container_main.style.display = "none";
    container_select.style.display = "block";
  })
})();
/**************************** main section ****************************/


/*************************** select section ***************************/
let nav_list = document.querySelectorAll(".header_nav > li");
let item_category = document.querySelectorAll(".menu_area > div");
let inner_right = document.querySelectorAll(".inner_right");

// 카테고리 클릭시 효과 & 아이템 나오기
nav_list.forEach((v,i,a) => {
  v.addEventListener("click", () => {
    nav_list.forEach(v=>v.classList.remove("selected"));
    item_category.forEach(v=>v.style.display = "none");
    v.classList.add("selected");
    item_category[i].style.display = "flex";
  })
})

/*************************** select section ***************************/


/*************************** 아이템 뿌리기 ***************************/

let item_obj = {
  new : [
    {name: "에그 프렌치 토스트", price: "5000", img: "../img/toast.jpg"},
    {name: "초콜릿크림브레드", price: "4000", img: "../img/bread.jpg"},
    {name: "레드빈브레드", price: "6000", img: "../img/pang.jpg"}
  ]
}



class Make_item_box {

  constructor(menu_box,img,name,price,this_obj,classname) {
    this.menu_box = menu_box;
    this.img = img;
    this.name = name;
    this.price = price;
    this.this_obj = this_obj;
    this.classname =classname;
  }

  make_box() {
    this.menu_box.innerHTML += `<div class = "item_box${this.classname}">
    <img src = "${this.img}"></img><p class = "this_item_name">${this.name}</p>
    <p class = "this_item_price">${this.price}</p><span class = "this_item_won">원</div>`;
  }
}
let menu_box = document.querySelectorAll(".menu_box");

let make_item_box0 = new Make_item_box(menu_box[0],item_obj.new[0].img,item_obj.new[0].name,item_obj.new[0].price,item_obj.new[0],0);
let make_item_box1 = new Make_item_box(menu_box[0],item_obj.new[1].img,item_obj.new[1].name,item_obj.new[1].price,item_obj.new[1],1);
let make_item_box2 = new Make_item_box(menu_box[0],item_obj.new[2].img,item_obj.new[2].name,item_obj.new[2].price,item_obj.new[2],2);

let make_item_box3 = new Make_item_box(menu_box[1],item_obj.new[0].img,item_obj.new[0].name,item_obj.new[0].price,item_obj.new[0],0);
let make_item_box4 = new Make_item_box(menu_box[1],item_obj.new[1].img,item_obj.new[1].name,item_obj.new[1].price,item_obj.new[1],1);
let make_item_box5 = new Make_item_box(menu_box[1],item_obj.new[2].img,item_obj.new[2].name,item_obj.new[2].price,item_obj.new[2],2);

make_item_box0.make_box();
make_item_box1.make_box();
make_item_box2.make_box();

make_item_box3.make_box();
make_item_box4.make_box();
make_item_box5.make_box();




/*************************** 아이템 클릭시 ***************************/

let option_display_box = document.querySelector(".option_display_box");
let item_box = document.querySelectorAll("[class *= item_box]");
let now_item;

item_box.forEach((v,i,a) => {
  v.addEventListener("click", () => {
    now_item = v;
    option_display_box.style.display = "block"; // 옵션창뿌리기

    let all_option_btn = document.querySelectorAll(".option_display_box > ul > li > button");
    all_option_btn.forEach(v=>v.style.background = "lightgray")

    ice_option = "";
    shot_option = "";
    size_option = "";
    sugar_option = "";
    cup_option = "";
  })
})



/*************************** 옵션창에서 놀거 ***************************/

let  ice_select = document.querySelectorAll(".option_display_box > ul > li > .ice_select");
let  shot_select = document.querySelectorAll(".option_display_box > ul > li > .shot_select");
let  size_select = document.querySelectorAll(".option_display_box > ul > li > .size_select");
let  sugar_select = document.querySelectorAll(".option_display_box > ul > li > .sugar_select");
let  cup_select = document.querySelectorAll(".option_display_box > ul > li > .cup_select");

let ice_option = "";
let shot_option = "";
let size_option = "";
let sugar_option = "";
let cup_option = "";

let option_array = [];

ice_select.forEach((v,i,a) => {
  v.addEventListener("click", () => {
    for(let i=0; i<a.length; i++) {
      a[i].style.background = "lightgray";
    }
    v.style.background = "red";
    ice_option = v.innerHTML;
  })
})

shot_select.forEach((v,i,a) => {
  v.addEventListener("click", () => {
    for(let i=0; i<a.length; i++) {
      a[i].style.background = "lightgray";
    }
    v.style.background = "red";
    shot_option = v.innerHTML;
  })
})

size_select.forEach((v,i,a) => {
  v.addEventListener("click", () => {
    for(let i=0; i<a.length; i++) {
      a[i].style.background = "lightgray";
    }
    v.style.background = "red";
    size_option = v.innerHTML;
  })
})

sugar_select.forEach((v,i,a) => {
  v.addEventListener("click", () => {
    for(let i=0; i<a.length; i++) {
      a[i].style.background = "lightgray";
    }
    v.style.background = "red";
    sugar_option = v.innerHTML;
  })
})

cup_select.forEach((v,i,a) => {
  v.addEventListener("click", () => {
    for(let i=0; i<a.length; i++) {
      a[i].style.background = "lightgray";
    }
    v.style.background = "red";
    cup_option = v.innerHTML;
  })
})

let option_footer_btn = document.querySelectorAll(".option_footer > button");

option_footer_btn[0].addEventListener("click", () => {
  option_display_box.style.display = "none"; // 옵션창 제거
})

let count = 0;
let coffee_item;

/*************************** 옵션담기 눌렀을때***************************/

option_footer_btn[1].addEventListener("click", () => {
  // 옵션 선택안했을때 디폴트값
  if(ice_option == "") ice_option = "많게";
  if(shot_option == "") shot_option = "기본";
  if(size_option == "") size_option = "스탠다드";
  if(sugar_option == "") sugar_option = "보통";
  if(cup_option == "") cup_option = "일회용";
  //

  let little_array = [ice_option, shot_option, size_option, sugar_option, cup_option];
  option_array.push(little_array); // 현재 옵션담기
    
  console.log(option_array); // 전체옵션 들어있음, 리스트 인덱스로 맞춰서 빼야됨
  option_display_box.style.display = "none";
    
  let inform_box = document.querySelector(".coffee_list");
    
  let classname = now_item.className;
  let item_name = document.querySelector(`.${classname} > .this_item_name`);
  let item_price = document.querySelector(`.${classname} > .this_item_price`);
  inform_box.innerHTML += `<li class="coffee_item${count}">
    <div class="item_name">${item_name.innerHTML}</div>
    <div class="item_option"><button>옵션</button></div>
    <div class="item_button"><i class="xi-minus"></i></div>
    <div class="item_count">1</div>
    <div class="item_gae">개</div>
    <div class="item_button"><i class="xi-plus"></i></div>
    <div class="item_money">${item_price.innerHTML}</div>
    <div class="item_won">원</div>
    <div class="item_button"><i class="xi-close"></i></div>
    </li>`; // 주문내역 리스트 만들기 . 클래스이름은 coffee_item+index
    
  inner_right[0].innerHTML = Number(inner_right[0].innerHTML) + 1;
  inner_right[1].innerHTML = Number(inner_right[1].innerHTML) + Number(item_price.innerHTML);
  count++;


  /*************************** 주문내역 가지고놀기***************************/
  coffee_list = document.querySelectorAll("[class *= coffee_item]");

  coffee_list.forEach((v,i,a)=>{

    v.addEventListener("mouseover", ()=>{
      let now_coffee_list = v;
      let v_class_name = v.className;
      let v_index = Number(v_class_name.substring(11,v_class_name.length)); // 지금 주문리스트 인덱스


      let inform_btn = document.querySelectorAll(`.${v_class_name} > .item_button > i`);
      let item_count = document.querySelector(`.${v_class_name} > .item_count`);
      let item_money = document.querySelector(`.${v_class_name} > .item_money`);
      let count_value = Number(item_count.innerHTML);


      inform_btn[0].addEventListener("click",() => {
        if(item_count.innerHTML == 1) item_count.innerHTML = 1;
        else item_count.innerHTML = --count_value;
        change_count_money();
      })
      inform_btn[1].addEventListener("click", () => {
        item_count.innerHTML = ++count_value;
        change_count_money();
      })
      inform_btn[2].addEventListener("click", () => {
        now_coffee_list.remove();
        coffee_list = document.querySelectorAll("[class *= coffee_item]");
        change_count_money();
      })
      
      let change_count_money = () => {
        let all_count = document.querySelectorAll(".item_count");
        let all_money = document.querySelectorAll(".item_money");
        let result_count = 0;
        let result_money = 0;
        all_count.forEach((v,i,a)=> {
          result_count += Number(v.innerHTML);
          result_money += (Number(v.innerHTML)) * (Number(all_money[i].innerHTML));
        })
        inner_right[0].innerHTML = result_count;
        inner_right[1].innerHTML = result_money;
      }

      let item_option_btn = document.querySelector(`.${v_class_name} > .item_option > button`);
      let option_show = document.querySelector(`.option_show`);
      

    /*************************** 리스트 옵션버튼 클릭할때***************************/

      item_option_btn.addEventListener("mouseover", () => {
        option_show.style.display = "block";

        let option_check = document.querySelectorAll(".option_show > ul > li > .option_check");
        option_check.forEach((v,i,a) => {
          v.innerHTML = option_array[v_index][i];
        })
      })

      item_option_btn.addEventListener("mouseout", () => {
        option_show.style.display = "none";
      })
    })
  })
})

      /*************************** 주문하기 버튼 클릭할때***************************/

let order_button = document.querySelector(".pay_right_area");
let container_order = document.querySelector(".container_order");
let result_money = document.querySelector(".result_money");
let sum_money = 0;
    
order_button.addEventListener("click", () => {
    container_select.style.display = "none";
    container_order.style.display = "block";
    point_display.style.visibility = "hidden"; // 이전누르고 다시 주문하기 누르면 포인트사용칸 hidden
    
    let order_list_box = document.querySelector(".order_list_box > ul");
    sum_money = 0;

    order_list_box.innerHTML = "";

  coffee_list.forEach((v,i,a) => {
    let v_class_name = v.className;
    console.log(v_class_name);
    let v_index = Number(v_class_name.substring(11,v_class_name.length));
    let menu_name = document.querySelector(`.coffee_item${v_index} > .item_name`);
    let menu_count = document.querySelector(`.coffee_item${v_index} > .item_count`);
    let menu_money = document.querySelector(`.coffee_item${v_index} > .item_money`);
    
    order_list_box.innerHTML += `
    <li><span>${menu_name.innerHTML}</span><span>${menu_count.innerHTML}</span><span><span class="item_total_money">${(menu_money.innerHTML)*(menu_count.innerHTML)}</span> 원</span></li>
    `;

    sum_money += (menu_money.innerHTML)*(menu_count.innerHTML);
    
  })

  result_money.innerHTML = sum_money;
})

let exit_btn = document.querySelector(".exit_btn");

exit_btn.addEventListener("click", () => {
  container_order.style.display = "none";
  container_select.style.display = "block";
})

//  카드결제페이지
let pay_box = document.querySelectorAll(".pay_box");
let receipt_output_box = document.querySelector(".receipt_output_box");

pay_box[0].addEventListener("click", () => {
  let payment_box = document.querySelector(".payment_box");
  payment_box.style.display = "block";

    // 영수증 페이지
    let open_receipt = () => {
      payment_box.style.display = "none";
      receipt_output_box.style.display = "block";
    }
    
    let timer = setTimeout(open_receipt, 3000);

  let previous_btn = document.querySelector(".previous_btn");
  previous_btn.addEventListener("click", () => {
    payment_box.style.display = "none";
    clearTimeout(timer);
  })

})

let receipt_btn = document.querySelectorAll(".select_footer > button");

receipt_btn[0].addEventListener("click", () => { // 결제완료 페이지새로고침
  location.reload();
})

receipt_btn[1].addEventListener("click", () => { // 프린트하기 예시
  window.print();
})


// 포인트 결제 페이지
let coupon_input_box = document.querySelector(".coupon_input_box");
let point_detailed = document.querySelector(".point_detailed");

pay_box[1].addEventListener("click", () => {
  let coupon_array = [];
  let number_visible = document.querySelector(".number_visible");
  number_visible.innerHTML = "";

  coupon_input_box.style.display = "block";


  let number_btn = document.querySelectorAll(".number_input_box > div");

  number_btn.forEach((v,i,a) => {
    if(i<9) {
      v.addEventListener("click", ()=> {
        if(coupon_array.length <11) {
          coupon_array.push(i+1);
        }
        input_coupon_array();
      })
    } else if( i == 9) {
      v.addEventListener("click", ()=> {
        if(coupon_array.length <1) {
          coupon_array.push(0,1,0);
        }
        input_coupon_array();
      })
    } else if( i == 10) {
      v.addEventListener("click", ()=> {
        if(coupon_array.length <11) {
          coupon_array.push(0);
        }
        input_coupon_array();
      })
    } else if( i == 11) {
      v.addEventListener("click", ()=> {
        coupon_array.pop();
        input_coupon_array();
      })
    }
  })

  let input_coupon_array = () => {
    let array_text = "";
    coupon_array.forEach((v,i,a)=> {
      if(i == 3 ) {
        array_text += '-';
      } else if( i == 7 ) {
        array_text += '-';
      } 
      array_text += v;
    })
    console.log(array_text);
    number_visible.innerHTML = array_text;
    console.log(coupon_array);
  }


  let select_btn = document.querySelectorAll(".coupon_input_box > .confirmation_box > .select_btn");

  select_btn[0].addEventListener("click", () => {
    coupon_input_box.style.display = "none";
  })

  select_btn[1].addEventListener("click", () => {
    coupon_input_box.style.display = "none";
    point_detailed.style.display = "block";

    accumulation_point_area.innerHTML = user_point;
    use_point_area.innerHTML = use_point;
    residual_point.innerHTML = user_point - use_point;
  })
})

let cancel_btn = document.querySelector(".cancel_btn");

cancel_btn.addEventListener("click", () => {
  point_detailed.style.display = "none";
})

const user_point = 5880;
let use_point = 1000;

let accumulation_point_area = document.querySelector(".accumulation_point"); //누적포인트공간
let use_point_area = document.querySelector(".use_point"); // 사용할 포인트
let residual_point = document.querySelector(".residual_point"); // 잔여 포인트

let point_display = document.querySelector(".point_display"); // 포인트사용 박스

let point_minus_btn = document.querySelector(".point_minus_btn");
let point_plus_btn = document.querySelector(".point_plus_btn");

point_minus_btn.addEventListener("click", () => { //포인트 마이너스버튼
  use_point = (use_point - 1000) >= 0 ? use_point - 1000 : 0;
  use_point_area.innerHTML = use_point;
  residual_point.innerHTML = user_point - use_point;
})

point_plus_btn.addEventListener("click", () => { // 포인트 플러스 버튼
  use_point = (use_point + 1000) <= user_point ? use_point + 1000 : user_point;//잔여액 안넘어감
  use_point = use_point > sum_money ? sum_money : use_point; //결제총금액 안넘어감
  use_point_area.innerHTML = use_point;
  residual_point.innerHTML = user_point - use_point;
})

let point_use_btn = document.querySelectorAll(".point_detailed > .confirmation_box > .select_btn");

point_use_btn[0].addEventListener("click", () => { // 사용하기버튼 클릭시
  let now_use_point = document.querySelector(".now_use_point");
  now_use_point.innerHTML =`- ${use_point}`;
  
  let point_used_money = sum_money - use_point;
  result_money.innerHTML = point_used_money;

  point_detailed.style.display = "none";
  point_display.style.visibility = "visible";
})



