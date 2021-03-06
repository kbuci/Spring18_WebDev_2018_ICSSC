
var list_div = document.getElementById('list');
var description_input = document.getElementById('new-body');
var submit_input = document.getElementById('new-add');

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
    del_button.onmouseenter = function () {this.style.color = "orange"};
    del_button.onmouseleave = function () {this.style.color = ""};
    del_button.classList.add("item");
    return del_button;
}

function addItem(){
    var new_des = description_input.value;
    todo.push({des: new_des, date: Date(), pinned : false});
    drawList(todo.length   - 1);
}

function createPin(i, parent_div){
    var pin_button = document.createElement('button');
    pin_button.onclick = function (){var divEntry = todo[i]; divEntry.pinned = true;
        todo.splice(i, 1); todo.splice(0, 0, divEntry); drawList(0); };
    pin_button.innerHTML = 'pin';
    return pin_button;
}

function createEditButton(i, ith_div, des_p){
    var edit_button = document.createElement('button');

}
function drawList(s){
    list_div.innerHTML = '';
    /*while(list_div.childNodes.length > s){
        list_div.removeChild(list_div.childNodes[s]);
    }
*/
    todo.forEach(function (element, i) {
        //console.log(JSON.stringify(element));
        var ith_div = document.createElement('div');
        var ith_des = element.des;
        var ith_date = element.date;
        var des_p = document.createElement('p');
        var date_p = document.createElement('p');
        var edit_button = createEditButton(i, ith_div, des_p);
        var del_button = createDelButton(i, ith_div);
       
        /* test delete, show i doesnt update
        var del_button = document.createElement('button');
        del_button.onclick = function (){console.log(i) ;};
        del_button.innerHTML = 'delete';

        */
        des_p.innerHTML = ith_des;
        date_p.innerHTML = ith_date;
        des_p.classList.add("item-body");
        date_p.classList.add("item-time");
        ith_div.classList.add("item");
        
        if(element.pinned){
            ith_div.style.backgroundColor = "red";
        }
        else{
            var pin_button = createPin(i, ith_div);
            ith_div.appendChild(pin_button);
        }
        ith_div.appendChild(des_p);
        ith_div.appendChild(date_p);
        ith_div.appendChild(del_button);
        
        list_div.appendChild(ith_div);
        
        
    }
    )
    
    description_input.value = '';

}
submit_input.onclick = addItem; 
submit_input.onmouseenter = function (event) {this.style.color = "orange";};
submit_input.onmouseleave = function (event) {for(var key in event) {console.log(event[key]);}; this.style.color = "";};
 