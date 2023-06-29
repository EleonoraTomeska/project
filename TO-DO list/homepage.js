const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const listContainers = document.getElementById("list-containers");
const savedTask = document.getElementById("saved-task");
const eventDate = document.getElementById("event-date");
const closeBtn = document.getElementById("close-btn");
const removeButtonX = document.getElementById("remove-button");


function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }

    else {
        let space = document.createElement("span");
        space.innerHTML = " ";
        listContainer.appendChild(space);

        let span = document.createElement("span");
        span.innerHTML = listContainers.innerHTML + time.value + " " + inputBox.value;
        listContainer.appendChild(span);

        let div = document.createElement("div");
        div.innerHTML = "Description: " + taskDescription.value;
        listContainer.appendChild(div);

        const removeButton = document.createElement('span')
        removeButton.innerHTML = removeButtonX.innerHTML;
        removeButton.addEventListener("click", function () {
            space.remove();
            span.remove();
            div.remove();

            const taskToRemove = removeButton.parentNode.parentNode;
            if (taskToRemove) {
                taskToRemove.remove();
            }
        });

        space.appendChild(removeButton);


    }
}


function saveTasks() {

    let div = document.createElement("div");
    div.innerHTML = "Date " + eventDate.value;
    savedTask.appendChild(div);
    div.style.fontWeight = "bold";
    div.style.color = "#050d66";
    div.style.fontSize = "16px";

    let space = document.createElement("span");
    space.innerHTML = " ";
    savedTask.appendChild(space);

    let dataModal = document.createElement("div");
    dataModal.innerHTML = listContainer.innerHTML;
    savedTask.appendChild(dataModal);

    let lessMoreBtn = document.createElement("button");
    lessMoreBtn.innerHTML = "Show Less";
    savedTask.appendChild(lessMoreBtn);
    lessMoreBtn.style.borderRadius = '14px'
    lessMoreBtn.style.backgroundColor = '#050d66';
    lessMoreBtn.style.color = '#fff';
    lessMoreBtn.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.6), inset 0 4px 8px rgba(0, 0, 0, 0.4), inset 0 6px 12px rgba(0, 0, 0, 0.2), inset 0 8px 16px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.08)";

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = 'DELETE';
    deleteButton.style.backgroundColor = '#050d66';
    deleteButton.style.color = '#fff';
    deleteButton.style.borderRadius = '14px';
    deleteButton.style.padding = '8px 16px';
    deleteButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.6), inset 0 4px 8px rgba(0, 0, 0, 0.4), inset 0 6px 12px rgba(0, 0, 0, 0.2), inset 0 8px 16px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.08)';



    deleteButton.addEventListener("click", function () {
        dataModal.remove();
        div.remove();
        space.remove();
        lessMoreBtn.remove();
    });

    space.appendChild(deleteButton);


    lessMoreBtn.addEventListener("click", function () {
        if (dataModal.style.display === "none") {
            dataModal.style.display = ""; // Show the element
            lessMoreBtn.innerHTML = "Show Less";
        } else {
            dataModal.style.display = "none"; // Hide the element
            lessMoreBtn.innerHTML = "Show More";
        }
    })
}


function clearAllBtn() {
    if (savedTask.innerHTML.trim() === "") {
        alert("There are nothing to clear")
    } else {
        savedTask.innerHTML = "";
    }
}

function closeBtns() {
    inputBox.value = '';
    taskDescription.value = '';
    eventDate.value = '';
    time.value = '';
    listContainer.innerHTML = '';
}





