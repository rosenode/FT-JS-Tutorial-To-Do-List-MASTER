// CODE EXPLAINED channel
const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");

const list = document.getElementById("list");

const input = document.getElementById("input");

const list = document.getElementById("list");

function addToDo(toDo) {
    const text = <li class="item">
        <i class="co fa fa-circle-thin" job="complete"></i>
        <p class="text">${toDo}</p>
        <i class="de fa fa-trash-o" job="delete"></i>
    </li>

    const position = "beforeend"
    list.insertAdjacentHTML(position, text);
}

const input = document.getElementById("input");

document.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo,IdleDeadline, fakse, false);
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                }
            );
            input.value = "";
            id++;
        }
    }
});

let LIST = [];
let id = 0;

LIST = [{},{}, ...];

LIST[0] ->
{
    name: "Drink Coffee",
    id: 0,
    done: false,
    trash: false
}

LIST [1] -> {
    name: "Workout",
    id: 1,
    done: true,
    trash: false
}