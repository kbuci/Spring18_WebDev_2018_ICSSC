/*var todo = [];
document.getElementById('new-add').onclick = function () {
    todo.push(
        {
            'body': document.getElementById('new-body').value,
            'time': new Date()
        }
    );
    document.getElementById('new-body').value = '';
    refresh();
}
function refresh() {
    document.getElementById('list').innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
        var item = document.createElement('div');
        item.className = 'item';
        document.getElementById('list').appendChild(item);
        var itemBody = document.createElement('p');
        itemBody.className = 'item-body';
        itemBody.innerText = todo[i]['body'];
        item.appendChild(itemBody);
        var itemTime = document.createElement('p');
        itemTime.className = 'item-time';
        itemTime.innerText = todo[i]['time'];
        item.appendChild(itemTime);
        var itemDelete = document.createElement('button');
        itemDelete.innerText = 'Delete';
        item.appendChild(itemDelete);
        itemDelete.onclick = function () {
            todo.splice(i, 1);
            refresh();
        }
    }
}
*/
/*
        var todo = [];
        var list_parent = document.getElementById("list");

        var add_submit = document.getElementById("new-add");
        var button_parent = add_submit.parentNode;
        var add_rank = document.createElement("input");
        add_rank.id = "add_rank";
        add_rank.placeholder = 'rank ' + (todo.length.toString());
        button_parent.insertBefore(add_rank, add_submit);


        function addList(des, rank){
                todo.splice(rank, 0, {'activity' : des, 'date': Date()});
        }

        function drawRanks(node, rank){
            for(var i = rank; i < todo.length; ++i){

                node.childNodes[i].childNodes[1].innerHTML = i ;

            }
            add_rank.placeholder = 'rank ' + (todo.length.toString());
            
        }


        function make_delete_button(del_div){
            var to_del = document.createElement('button');
            to_del.innerHTML = "delete";

            to_del.onclick = function() {todo.splice(rank, 1); console.log(todo); list_parent.removeChild(del_div); drawRanks(list_parent, rank); };
            
            return to_del;

            
        }

        function make_pin_button(pin_div, rank){
            var pin_button = document.createElement("button");
            pin_button.innerHTML = "Pin";
            var to_del = todo[rank];
            pin_button.onclick = function() {todo.splice(rank, 1); todo.splice(0, 0, to_del); list_parent.insertBefore(pin_div, list_parent.childNodes[0]); list_parent.removeChild(pin_div); drawRanks(list_parent, 0) ; }
            return pin_button;
        }

        function pin_i(pin_div){
            todo.splice(pin_div,1);
        }
        function drawList(){
            
            var des = document.getElementById('new-body').value;
            var rank = add_rank.value;

            addList(des, rank);
            add_rank.placeholder = 'rank ' + (todo.length.toString());
            var new_div = document.createElement('div');
            new_div.className = 'item';
            var p = document.createElement('p');
	        p.className = 'item-body';
            var rank_num = document.createElement('p');
            p.innerHTML = des;
            rank_num.innerHTML = rank;
            new_div.appendChild(p);
            new_div.appendChild(rank_num);
            var delete_button = make_delete_button(new_div, rank);
            var pin_button = make_pin_button(new_div, rank);
            new_div.appendChild(delete_button);
            new_div.appendChild(pin_button);
            var date_p = document.createElement('p');
            date_p.innerHTML = todo[rank].date;
            date_p.className = 'item-time';
            new_div.appendChild(date_p);
            new_div.list_index = rank;
            list_parent.insertBefore(new_div, list_parent.childNodes[rank]);


            drawRanks(list_parent, rank);
            
        }

        add_submit.onclick = drawList;

    */

    /*
    console.log("hello world");
    
    var num = 2;
    console.log("2");

    function operator(i, j, op){
        if (op === '+'){
            return i + j;
        }

        if (op === '-') {
            return i - j;
        }


    }

    function compare_f(i, j){
        if (j === i){
            console.log('same');
        }
        
        if (i >= j) {
            console.log('greater than or equal');
        }

        if (i <= j){
            console.log('less than or equal');
        }

    }

    var lst = [1, 2, 3];

    lst.push(4);
    lst.splice(1, 1);
    var student = {id : 1, name: 'Peter Anteater', major : 'CS'};
    console.log(student.name);
    console.log(lst);
   
*/

var list_div = document.getElementById('list');
var description_input = document.getElementById('new-body');
var submit_input = document.getElementById('new-add');

var activity1 = document.createElement('p');
activity1.innerHTML = "eating";

list_div.appendChild(activity1);
activity1.parentNode.removeChild(activity1);

var todo = [];

function createDelButton(i, parent_div){
    var del_button = document.createElement('button');
    del_button.onclick = function (){todo.splice(i, 1); list_div.removeChild(parent_div); drawList(i);};
    del_button.innerHTML = 'delete';
    return del_button;
}

function addItem(){
    var new_des = description_input.value;
    todo.push({des: new_des, date: Date()});
    drawList(todo.length   - 1);
}
function drawList(s){
    //list_div.innerHTML = '';
    while(list_div.childNodes.length > s){
        list_div.removeChild(list_div.childNodes[s]);
    }

    for(var i = s; i < todo.length; ++i){
        var ith_div = document.createElement('div');
        
        var ith_des = todo[i].des;
        var ith_date = todo[i].date;
        var des_p = document.createElement('p');
        var date_p = document.createElement('p');
        var del_button = createDelButton(i, ith_div);

        /* test delete, show i doesnt update
        var del_button = document.createElement('button');
        del_button.onclick = function (){console.log(i) ;};
        del_button.innerHTML = 'delete';

        */
        des_p.innerHTML = ith_des;
        date_p.innerHTML = ith_date;
        ith_div.appendChild(des_p);
        ith_div.appendChild(date_p);
        ith_div.appendChild(del_button);
        list_div.appendChild(ith_div);
        
        
    }

    description_input.value = '';

}
submit_input.onclick = addItem; 

