document.querySelector('#push').onclick = function () {
    document.querySelector('.body1').innerHTML +=
        `
    <div class="body">
        <div class="text">
            ${document.querySelector(' input').value}
         </div>
        <i class="fa fa-trash-o" id="delete"></i>
    </div>
`;
    var current_tasks = document.querySelectorAll(".body i");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }
}



