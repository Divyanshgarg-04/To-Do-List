document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        window.alert("Kindly Enter Task Name!!!!");
    }

    else{
        document.querySelector('#tasks').innerHTML += 
        `
            <div class="task">
                <input type="checkbox" id="task1" name="checked" value="value1">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>

                <button class="delete">
                    <i class="far fa-trash-alt"><strong> X </strong></i>
                </button>
            </div>`;

            
            document.querySelector('#newtask input').value = "";
        
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
