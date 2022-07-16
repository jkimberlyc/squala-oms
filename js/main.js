// for card hover
const cards = document.querySelectorAll(".card");

// for(let i=0; i < cards.length-1; i++){
//     cards[i].addEventListener("mouseover", function(){
//         this.lastElementChild.lastElementChild.classList.remove("btn-danger", "text-white");
//         this.lastElementChild.lastElementChild.classList.add("btn-dark");
//     })
//     cards[i].addEventListener("mouseout", function(){
//         this.lastElementChild.lastElementChild.classList.remove("btn-dark");
//         this.lastElementChild.lastElementChild.classList.add("btn-danger", "text-white");
//     })
// }

//display project overview
const projectList = JSON.parse(localStorage.getItem("projects"));
const employeeList = JSON.parse(localStorage.getItem("employees"));
const taskList = JSON.parse(localStorage.getItem("tasks"));
const toolsList = JSON.parse(localStorage.getItem("tools"));
const modalBtns = document.querySelectorAll(".modalBtn"); //get all Open Project buttons

for (let i = 0; i < modalBtns.length; i++) {
	modalBtns[i].addEventListener("click", function() {
		let projectID = this.id; //project id  (placed in the Open button of a project)

		let thisProject = projectList.filter((obj) => obj.id == projectID); //get the object that matches the project id; filter() returns an array
		document.getElementById("projName").innerHTML = thisProject[0].projectName;
		document.getElementById("projAddress").innerHTML = thisProject[0].projectAddress;

		//to display foreman, parse employee -> filter with foreman ID -> display name 
		let foremanID = thisProject[0].projectForeman;
		let thisForeman = employeeList.filter((obj) => obj.id == foremanID);
		document.getElementById("projForeman").innerHTML = thisForeman[0].firstName + " " + thisForeman[0].lastName;

		//start date
		document.getElementById("projStart").innerHTML = thisProject[0].projectStart;

		//end date
		document.getElementById("projEnd").innerHTML = thisProject[0].projectEnd;

		//to display rest of workers, loop the workers array in thisProject -> filter employees by each workers id -> display
		let teamTable = document.getElementById("workers");
		let teamArray = thisProject[0].workers;

		teamTable.innerHTML = "<th>Name</th><th>Designation</th><th>Number</th><th></th><th></th>";
		for (i in teamArray) {
			let thisWorker = employeeList.filter((obj) => obj.id == teamArray[i]);
			let tr = document.createElement("tr");
			tr.style.padding = "5px";

			let name = document.createElement("td");
			name.innerHTML = thisWorker[0].firstName + " " + thisWorker[0].lastName;
			name.setAttribute("data-label", "Name"); //for display purposes

			let designation = document.createElement("td");
			designation.innerHTML = thisWorker[0].designation;
			designation.setAttribute("data-label", "Designation");

			let number = document.createElement("td");
			number.innerHTML = thisWorker[0].contact;
			number.setAttribute("data-label", "Number");

			let profile = document.createElement("td");
			let profileBtn = document.createElement("a");
			profileBtn.classList.add("btn", "btn-outline-info", "w-100", "px-0");
			profileBtn.innerHTML = "Profile";
			profileBtn.type = "button";
			profileBtn.style.fontSize = "12px";
			profileBtn.addEventListener("click", function() {
				//show profile function
			})
			profile.appendChild(profileBtn);

			let remove = document.createElement("td");
			let removeBtn = document.createElement("button");
			removeBtn.classList.add("btn", "btn-outline-danger", "w-100", "px-0");
			removeBtn.innerHTML = "Delete";
			removeBtn.type = "button";
			removeBtn.style.fontSize = "12px"
			removeBtn.addEventListener("click", function() {
				// remove function
			});
			remove.appendChild(removeBtn);

			teamTable.appendChild(tr);
			tr.appendChild(name);
			tr.appendChild(designation);
			tr.appendChild(number);
			tr.appendChild(profile);
			tr.appendChild(remove);
		}

		addPeopleButton();

		//to display tasks, loop the tasks array in thisProject, filter tasks object from localStorage by each tasks element, then display
		let taskArray = thisProject[0].tasks;
		let taskTable = document.getElementById("tasks");
		taskTable.innerHTML = "<th>Task Item</th><th>Target</th><th>Status</th><th></th>";

		for (i in taskArray) {
			let thisTask = taskList.filter((obj) => obj.id == taskArray[i]);
			let tr = document.createElement("tr");

			let taskItem = document.createElement("td");
			taskItem.innerHTML = thisTask[0].taskName;
			taskItem.setAttribute("data-label", "Task Item");

			let targetDate = document.createElement("td");
			targetDate.innerHTML = thisTask[0].targetDate;
			targetDate.setAttribute("data-label", "Target");

			let status = document.createElement("td");
			let statusSelect = document.createElement("select");
			statusSelect.classList.add("form-select", "form-select-sm")
			status.setAttribute("data-label", "Status");
			status.appendChild(statusSelect);

			statusSelect.addEventListener("change", function() {
				//do something when user changes value of select
				//maybe update localStorage with new value
			})

			//create options
			let ongoingOption = document.createElement("option");
			ongoingOption.value = "Ongoing";
			ongoingOption.text = "Ongoing";

			let incompleteOption = document.createElement("option");
			incompleteOption.value = "Incomplete";
			incompleteOption.text = "Incomplete";

			let completeOption = document.createElement("option");
			completeOption.value = "Complete";
			completeOption.text = "Complete";

			statusSelect.appendChild(ongoingOption);
			statusSelect.appendChild(incompleteOption);
			statusSelect.appendChild(completeOption);

			let remove = document.createElement("td");
			let removeBtn = document.createElement("button");
			removeBtn.classList.add("btn", "btn-outline-danger", "w-100", "px-0");
			removeBtn.innerHTML = 'Delete';
			removeBtn.type = "button";
			removeBtn.style.fontSize = "12px"
			removeBtn.addEventListener("click", function() {
				// remove function
			});
			remove.appendChild(removeBtn);

			taskTable.appendChild(tr);
			tr.appendChild(taskItem);
			tr.appendChild(targetDate);
			tr.appendChild(status);
			tr.appendChild(remove);


			//extra effort to make sure the task ID is selected
			// for(let i=0; statusSelect.options.length; i++){

			//     // if(statusSelect.options[0].value == thisTask[0].status){
			//     //     console.log("it worked!")
			//     //     break;
			//     // }
			// }
		}

		//add task button
		addTaskButton();

		//display tools/materials the same way
		let toolsArray = thisProject[0].tools;
		let toolsTable = document.getElementById("tools");
		toolsTable.innerHTML = "<th>Item</th><th>Quantity</th><th>Status</th>";

		for (i in toolsArray) {
			let thisTool = toolsList.filter((obj) => obj.id == toolsArray[i]);
			let tr = document.createElement("tr");

			if (thisTool[0] == undefined) break;
			let itemName = document.createElement("td");
			itemName.innerHTML = thisTool[0].tool;
			itemName.setAttribute("data-label", "Item");
			// itemName.style.width = "60%";

			let quantity = document.createElement("td");
			quantity.innerHTML = '<input class="form-control form-control-sm" type="number" value="' + thisTool[0].quantity + '">'
			quantity.setAttribute("data-label", "Quantity");
			// quantity.style.width = "15%";

			let status = document.createElement("td");
			let statusSelect = document.createElement("select");
			statusSelect.classList.add("form-select", "form-select-sm")
			status.setAttribute("data-label", "Status");
			status.appendChild(statusSelect);
			// status.style.width = "15%";


			statusSelect.addEventListener("change", function() {
				//do something when user changes value of select
				//maybe update localStorage with new value
			})

			//create options
			let availableOption = document.createElement("option");
			availableOption.value = "Available";
			availableOption.text = "Available";

			let unavailableOption = document.createElement("option");
			unavailableOption.value = "Unavailable";
			unavailableOption.text = "Unavailable";

			statusSelect.appendChild(availableOption);
			statusSelect.appendChild(unavailableOption);

			let remove = document.createElement("td");
			let removeBtn = document.createElement("button");
			removeBtn.classList.add("btn", "btn-outline-danger", "w-100", "px-0");
			removeBtn.innerHTML = 'Delete';
			removeBtn.type = "button";
			removeBtn.style.fontSize = "12px"
			removeBtn.addEventListener("click", function() {
				// remove function
			});
			remove.appendChild(removeBtn);

			toolsTable.appendChild(tr);
			tr.appendChild(itemName);
			tr.appendChild(quantity);
			tr.appendChild(status);
			tr.appendChild(remove);
		}

		addToolsButton();
	});
}

function addTaskButton() {
	let taskTable = document.getElementById("tasks");
	let addTr = document.createElement("tr");
	let addTd = document.createElement("td");
	let addBtn = document.createElement("button");
	addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
	addBtn.innerHTML = "Add New Task"
	addBtn.addEventListener("click", addTask);

	addTd.appendChild(addBtn);
	addTd.colSpan = 4;
	addTr.appendChild(addTd);
	addTr.classList.add("border-0");
	taskTable.appendChild(addTr);
}

function addTask() {
	let taskTable = document.getElementById("tasks");
	let tr = this.parentNode.parentNode;
	this.parentNode.remove();

	let taskItem = document.createElement("td");
	let taskInput = document.createElement("input");
	taskInput.type = "text";
	taskInput.placeholder = "Enter task";
	taskInput.classList.add("form-control");
	taskInput.required = true;
	taskItem.appendChild(taskInput);
	taskItem.colSpan = 2;

	let target = document.createElement("td");
	let targetInput = document.createElement("input");
	targetInput.type = "date";
	targetInput.classList.add("form-control");
	targetInput.required = true;
	targetInput.size = "10";
	target.appendChild(targetInput);

	let add = document.createElement("td");
	let btn = document.createElement("button");
	btn.classList.add("btn", "btn-sm", "btn-outline-danger", "w-100");
	btn.innerHTML = "Add Task";
	btn.type = "submit";
	add.appendChild(btn);

	btn.addEventListener("click", function() {
		//add to localStorage? update table?
	})

	let label = document.createElement("tr");
	label.innerHTML = '<td colspan="4"><small class="text-info">New Task </small><td>';
	label.classList.remove("border-0")

	taskTable.appendChild(label);
	taskTable.appendChild(tr);
	tr.appendChild(taskItem);
	tr.appendChild(target);
	tr.appendChild(add);
}

function addToolsButton() {
	let toolsTable = document.getElementById("tools");
	let addTr = document.createElement("tr");
	let addTd = document.createElement("td");
	let addBtn = document.createElement("button");
	addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
	addBtn.innerHTML = "Add New Tool";
	addBtn.addEventListener("click", addTool);

	toolsTable.appendChild(addTr);
	addTr.appendChild(addTd);
	addTr.classList.add("border-0");
	addTd.appendChild(addBtn);
	addTd.colSpan = 4;
}

function addTool() {
	let toolsTable = document.getElementById("tools");
	let tr = this.parentNode.parentNode;
	this.parentNode.remove();

	let toolItem = document.createElement("td");
	let toolInput = document.createElement("input");
	toolInput.type = "text";
	toolInput.placeholder = "Enter tool";
	toolInput.classList.add("form-control");
	toolInput.required = true;
	toolItem.appendChild(toolInput);
	toolItem.colSpan = 2;

	let quantity = document.createElement("td");
	let quantityInput = document.createElement("input");
	quantityInput.type = "number";
	quantityInput.placeholder = "Enter quantity";
	quantityInput.classList.add("form-control");
	quantityInput.required = true;
	quantity.appendChild(quantityInput);

	let add = document.createElement("td");
	let btn = document.createElement("button");
	btn.classList.add("btn", "btn-sm", "btn-outline-danger", "w-100");
	btn.innerHTML = "Add Tool";
	btn.type = "submit";
	add.appendChild(btn);

	btn.addEventListener("click", function() {
		//add to localStorage? update table?
	})

	let label = document.createElement("tr");
	label.innerHTML = '<td colspan="4"><small class="text-info">New Tool </small><td>';
	label.classList.remove("border-0")

	toolsTable.appendChild(label);
	toolsTable.appendChild(tr);
	tr.appendChild(toolItem);
	tr.appendChild(quantity);
	tr.appendChild(add);
}

function addPeopleButton() {
	let teamTable = document.getElementById("workers");
	let addTr = document.createElement("tr");
	let addTd = document.createElement("td");
	let addBtn = document.createElement("button");
	addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
	addBtn.innerHTML = "Add People";
	addBtn.addEventListener("click", addPeople);

	teamTable.appendChild(addTr);
	addTr.appendChild(addTd);
	addTr.classList.add("border-0");
	addTd.appendChild(addBtn);
	addTd.colSpan = 5;
}

function addPeople() {
	let teamTable = document.getElementById("workers");
	let tr = this.parentNode.parentNode;
	this.parentNode.remove();

	let worker = document.createElement("td");
	let name = document.createElement("input");
	name.type = "text";
	name.placeholder = "Enter name";
	name.classList.add("form-control");
	name.required = true;
	worker.appendChild(name);
	worker.colSpan = 3;

	let designation = document.createElement("td");
	let designationInput = document.createElement("input");
	designationInput.type = "text";
	designationInput.placeholder = "Enter designation";
	designationInput.classList.add("form-control");
	designationInput.required = true;
	designation.appendChild(designationInput);

	let add = document.createElement("td");
	let btn = document.createElement("button");
	btn.classList.add("btn", "btn-sm", "btn-outline-danger", "w-100");
	btn.innerHTML = "Add Employee";
	btn.type = "submit";
	add.appendChild(btn);

	btn.addEventListener("click", function() {
		//add to localStorage? update table?
	})

	let label = document.createElement("tr");
	label.innerHTML = '<td colspan="5"><small class="text-info">New Employee</small><td>';
	label.classList.remove("border-0")

	teamTable.appendChild(label);
	teamTable.appendChild(tr);
	tr.appendChild(worker);
	tr.appendChild(designation);
	tr.appendChild(add);
}

function searchTable(inputElement, tableElement) {
	var input, filter, found, table, tr, td, i, j;
	input = document.getElementById(inputElement);
	filter = input.value.toUpperCase();
	table = document.getElementById(tableElement);
	tr = table.getElementsByTagName("tr");

	if (input.value == "Filter by project") location.reload();
	else {
        if(inputElement == "filter") document.getElementById("datePicker").valueAsDate = null;
        
		for (i = 1; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td");
			for (j = 0; j < td.length; j++) {
				if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
					found = true;
				}
			}
			if (found) {
				tr[i].style.display = "";
				found = false;
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

document.addEventListener("DOMContentLoaded", function(event) {

	const showNavbar = (toggleId, navId, bodyId, headerId) => {
		const toggle = document.getElementById(toggleId),
			nav = document.getElementById(navId),
			bodypd = document.getElementById(bodyId),
			headerpd = document.getElementById(headerId)

		// Validate that all variables exist
		if (toggle && nav && bodypd && headerpd) {
			toggle.addEventListener('click', () => {
				// show navbar
				nav.classList.toggle('showNav')
				// change icon
				toggle.classList.toggle('bx-x')
				// add padding to body
				bodypd.classList.toggle('body-pd')
				// add padding to header
				headerpd.classList.toggle('body-pd')
				// hide logo icon
				// document.getElementById("logo-icon").classList.toggle("d-none");
			})
		}
	}

	showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

	/*===== LINK ACTIVE =====*/
	const linkColor = document.querySelectorAll('.nav_link')

	function colorLink() {
		if (linkColor) {
			linkColor.forEach(l => l.classList.remove('active'))
			this.classList.add('active')
		}
	}
	linkColor.forEach(l => l.addEventListener('click', colorLink))

	// Your code to run since DOM is loaded and ready
});



const showOnPx = 100;
const backToTopButton = document.getElementById("topBtn");

const scrollContainer = () => {
    return document.querySelector(".row") || document.documentElement;
}

scrollContainer().addEventListener("scroll", () => {
	if (scrollContainer().scrollTop > showOnPx) {
		backToTopButton.classList.remove("d-none")
	} else {
		backToTopButton.classList.add("d-none")
	}
})

document.querySelector(".nav_logo-name").addEventListener("click", () => {
    window.location.href = "../index.html";
})