// var inputbox = document.getElementById("input_box");
// var listcontainer = document.getElementById("list_container");

// function addTask() {
//     if (inputbox.value === "") {
//         alert("You must write something");
//     } else {
//         var li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);

//         var span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputbox.value = "";
//     saveData();
// }

// listcontainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked"); // fixed typo here
//         saveData();
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove(); // fixed typo here
//         saveData();
//     }
// }, false);

// function saveData() {
//     localStorage.setItem("data", listcontainer.innerHTML);
// }

// function showTask() {
//     listcontainer.innerHTML = localStorage.getItem("data");
// }

// showTask();

function addTask() {
    var input = document.getElementById("input_box");
    var task = input.value;

    if (task !== "") {
        var li = document.createElement("li");
        li.innerHTML = task;

        // Append li to the list
        document.getElementById("list_container").appendChild(li);

        // Create span for delete
        var span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for ×
        li.appendChild(span);

        // Correct delete functionality
        span.onclick = function() {
            li.remove();
        };

        // Clear input
        input.value = "";
    }
    else{
        if (task=== "") {
            alert("You must write something")
        }
    }
}
