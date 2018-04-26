
//Store data in array objecct  <-Model
//Refresh to generate HTML elements based on content in list <-View
//Add, delete, and pin buttons modify array object <- Controller
//Refresh again to generate different HTML content
var list_div = document.getElementById('list');
var description_input = document.getElementById('new-body');
var submit_input = document.getElementById('new-add');
var dueDateInput = document.createElement('input');
dueDateInput.placeholder = 'Month/Day/Year';
dueDateInput.id = 'new-due-date';
document.getElementById('new').insertBefore(dueDateInput, submit_input);
var activity1 = document.createElement('p');
activity1.innerHTML = "eating";

list_div.appendChild(activity1);
activity1.parentNode.removeChild(activity1);

var todo = [];

list_div.innerHTML = '';
function createDelButton(i, parent_div){
    var del_button = document.createElement('button');
    del_button.onclick = function (){todo.splice(i, 1); list_div.removeChild(parent_div); drawList(i);};
    del_button.innerHTML = 'delete';
    return del_button;
}

function entry(des, dueDate){
    this.des = des;
    this.date = new Date();
    this.dueDate = new Date(dueDate);
    this.pinned = false;
}
function addItem(){
    var new_des = description_input.value;
    todo.push(new entry(new_des, dueDateInput.value));
    drawList(todo.length   - 1);
}

function createPin(i, parent_div){
    var pin_button = document.createElement('button');
    pin_button.onclick = function (){var divEntry = todo[i]; divEntry.pinned = true;
        todo.splice(i, 1); todo.splice(0, 0, divEntry); drawList(0); pin_button.parentNode.removeChild(pin_button);};

    pin_button.innerHTML = 'pin';
    return pin_button;
}
function drawList(s){
    //list_div.innerHTML = '';
    while(list_div.childNodes.length > s){
        list_div.removeChild(list_div.childNodes[s]);
    }

    for(let i = s; i < todo.length; ++i){
        var ith_div = document.createElement('div');
        
        var ith_des = todo[i].des;
        var ith_date = todo[i].date;
        var ith_due_date = todo[i].dueDate;
        var des_p = document.createElement('p');
        var date_p = document.createElement('p');
        var dueDate_p = document.createElement('p');
        var del_button = createDelButton(i, ith_div);
        var pin_button = createPin(i, ith_div);
        /* test delete, show i doesnt update
        var del_button = document.createElement('button');
        del_button.onclick = function (){console.log(i) ;};
        del_button.innerHTML = 'delete';

        */
        des_p.innerHTML = ith_des;
        date_p.innerHTML = ith_date;
        dueDate_p.innerHTML = ith_due_date.getMonth() + "/" + ith_due_date.getDate() + "/" + ith_due_date.getFullYear();

        des_p.classList.add("item-body");
        date_p.classList.add("item-time");
        ith_div.classList.add("item");
        
        ith_div.appendChild(des_p);
        ith_div.appendChild(date_p);
        ith_div.appendChild(dueDate_p);
        ith_div.appendChild(del_button);
        if(todo[i].pinned){
            ith_div.style.backgroundColor = "red";
            
        }
        else{
            ith_div.appendChild(pin_button);
        }
        
       
        list_div.appendChild(ith_div);
        
        
    }

    description_input.value = '';

}
submit_input.onclick = addItem; //no need to add other onlick, since other buttons havent been necessairly consturcted yet

