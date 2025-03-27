// CODE EXPLAINED channel
//const clear = document.querySelector(".clear");

//const dateElement = document.getElementById("date");

//const list = document.getElementById("list");

//const input = document.getElementById("input");

//const list = document.getElementById("list");

//const CHECK="fa-check-circle";
//const UNCHECK="fa-circle-thin";
//const LINE_THROUGH="lineThrough";

//function addToDo(toDo ,id,done ,trash) {

   // if(trash){return; }

  //  const DONE = done ? CHECK : UNCHECK;
   // const LINE = done ? LINE_THROUGH: "";

   // const text = <li class="item">
    //    <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
    //    <p class="text ${LINE}">${toDo}</p>
    //    <i class="de fa fa-trash-o" job="delete" id="${id}"></i>
   // </li>;

  //  const position = "beforeend"
   // list.insertAdjacentHTML(position, text);
//}

//const input = document.getElementById("input");

// document.addEventListener("keyup",function(event){
   // if(event.keyCode == 13){
      //  const toDo = input.value;
    //    if(toDo){
     //       addToDo(toDo,IdleDeadline, fakse, false);
      //      LIST.push(
      //          {
      //              name: toDo,
      //              id: id,
      //              done: false,
      //              trash: false
      //          }
      //      );
      //      input.value = "";
    //        id++;
  //      }
 //   }
//});

// let LIST = [];
// let id = 0;

// LIST = [{},{}, ...];

// LIST[0] ->
//{
 //   name: "Drink Coffee",
 //   id: 0,
 //   done: false,
 //   trash: false
//}

// LIST [1] -> {
  //  name: "Workout",
  //  id: 1,
 //   done: true,
  //  trash: false
//}

const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let data = localStorage.getItem("TODO");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else{
LIST = [];
id = 0;
}

function loadList(array){ 
     array.forEach(function(item){
     addToDo(item.name, item.id, item.done, item.trash);  
    })};

const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-us", options);

function addToDo(toDo, id, done, trash){

    if(trash){ return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                 <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>`;
    const position = "beforeend";

    list.insertAdjacentElement(position, item);
}

document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo);
        }
        input.value = "";
    }
})

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}


list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }

    localStorage.setItem("TODO", JSON.stringify(LIST))
});