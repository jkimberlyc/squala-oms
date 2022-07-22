const projectList = JSON.parse(localStorage.getItem("projects"));
const employeeList = JSON.parse(localStorage.getItem("employees"));
const taskList = JSON.parse(localStorage.getItem("tasks"));
const toolsList = JSON.parse(localStorage.getItem("tools"));
var addTempWorker = []
var addTempTask = []
var addTempInputTask =[]
var tempWorkerId = []
var addTempTools=[]
var viewTempTask =[]

 //project ID
const getProjectItem = localStorage.getItem("projects");
const addProjData =getProjectItem != null ? JSON.parse(getProjectItem) : []; //Multi Dimentional obj
var projectID = addProjData != null ? addProjData.length+1 : "1";
 
 

export function projOnload(){
    const projectList = JSON.parse(localStorage.getItem("projects"));
    
    var card = document.getElementById("projCard");
    card.innerHTML="";
    // let anchor = document.createElement("a");
    
    if (projectList != null){
        for(let i =0 ; i < projectList.length;i++){
            
                var str = '<div class="card ms-sm-0 me-sm-3 mx-auto mt-sm-0 mt-3 border-2 border-danger bg-white shadow" style="width: 18rem"><img src="../../img/project-thumb.jpg" class="card-img-top" alt="..." />'
                str += '<div class="card-body">'
                str +='<h5 class="card-title">' +projectList[i].projectName+ '<span class="badge text-bg-success ms-1">Ongoing</span></h5>';
                str +='<p class="card-text small"><b>Location:</b> '+projectList[i].projectAddress+'<br /><b>Start:</b> '+projectList[i].projectStart+'<br /><b>End: </b>'+projectList[i].projectEnd+'</p>';
                str +='<div id="buttonLoc"></div>'
                str +='<a id="'+projectList[i].id+'" data-id="'+projectList[i].id+'" href="#" class="modalBtn btn btn-danger text-white" data-bs-toggle="modal"data-bs-target="#projectOneModal">View/Edit</a>'
                str +='</div></div>'
                card.insertAdjacentHTML( 'afterbegin', str );
        
            }
    }
        
        
       
    
}
    
    //EVENTLISTENERS
var viewModal = document.getElementById('projectOneModal')
    if (viewModal != null) {
        viewModal.addEventListener('show.bs.modal', function (event) {//Check if modal is shown
            // var bookId = event.relatedTarget.data('bs-id');
            
            modalOnLoad(event.relatedTarget.dataset.id);
            
            editPeopleButton()
            editTaskButton()
            editToolsButton()
        })   
}
var addModal = document.getElementById('addProjectModal')
    
   
    if (addModal != null) {
        addModal.addEventListener('show.bs.modal', function (event) {//Check if modal is shown
            // var bookId = event.relatedTarget.data('bs-id');
        document.getElementById('addSavebtn').addEventListener("click", function (event) {
            
        addProject()
        }
        )
        document.getElementById('addWorkers').addEventListener("click", function (event) {
        displayWorkers()}
        )
        document.getElementById('projectModalClose').addEventListener("click", function (event) {
        clearFields()}
        )
        document.getElementById('addCloseModal').addEventListener("click", function (event) {
        clearFields()}
        )
        document.getElementById('searchEmpBtn').addEventListener("click", function (event) {
        searchTab('searchEmp', 'workerList')}
        )
       
      
        getEmployeeList()
        manPower()
        addModTask()
        addModTools()
    

    
        })


    }
   
    export function modalOnLoad(id){
   
        if (projectList == null || projectList.length == 0){
    
        }else{
            setTimeout(function(){
           
                let projectID = id; //project id  (placed in the Open button of a project)
               
                const projectList = JSON.parse(localStorage.getItem("projects"));
               
               
                let thisProject = projectList.filter((obj) => obj.id == projectID); //get the object that matches the project id; filter() returns an array
               
                // document.getElementById("projName").innerHTML = thisProject[0].projectName;
                //to display foreman, parse employee -> filter with foreman ID -> display name 
                
                let foremanID = thisProject[0].projectForeman;
               
                let thisForeman = employeeList.filter((obj) => obj.id == foremanID);
                
               
                document.getElementById("viewProjName").innerHTML = thisProject[0].projectName;
                document.getElementById("viewProjAddress").innerHTML = thisProject[0].projectAddress;
                document.getElementById("viewProjForeman").innerHTML = thisForeman[0].firstName + "," + thisForeman[0].lastName;
            
                //start date
                document.getElementById("viewProjStart").innerHTML =thisProject[0].projectStart;
        
                //end date
                document.getElementById("viewProjectEnd").innerHTML = thisProject[0].projectEnd;
        
                //to display rest of workers, loop the workers array in thisProject -> filter employees by each workers id -> display
                let teamTable = document.getElementById("editWorkers");
               
                let teamArray = thisProject[0].workers;
               
                teamTable.innerHTML = "<th>Name</th><th>Designation</th><th>Number</th><th></th><th></th>";
              
               for (let i = 0; i < teamArray.length; i++) {
              console.log(teamArray)
                    let thisWorker = employeeList.filter((obj) => obj.id == teamArray[i].old_id);
                    console.log("thisWorker",thisWorker)
                    let tr = document.createElement("tr");
        
                    let name = document.createElement("td");
                    name.innerHTML = thisWorker[0].firstName + " " +  thisWorker[0].lastName;
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
                    profileBtn.type="button";
                    profileBtn.style.fontSize = "12px";
                    profileBtn.addEventListener("click", function(){
                        //show profile function
                    })
                    profile.appendChild(profileBtn);
        
                    let remove = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.classList.add("btn","btn-outline-danger", "w-100", "px-0");
                    removeBtn.innerHTML = 'Delete';
                    removeBtn.type="button";
                    removeBtn.style.fontSize = "12px"
                    removeBtn.addEventListener("click", function(){ 
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
                let taskArray = thisProject[0].task;
                let taskTable = document.getElementById("editTasks");
                taskTable.innerHTML = "<th>Task Item</th><th>Target</th><th>Status</th><th></th>";
                for (let i=0; i<taskArray.length; i++){
                
                  
                    let thisTask = taskList.filter((obj) => obj.id == taskArray[i]);
                    if (thisTask.length != 0){
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
        
                    statusSelect.addEventListener("change", function(){
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
                    removeBtn.classList.add("btn","btn-outline-danger", "w-100", "px-0");
                    removeBtn.innerHTML = 'Delete';
                    removeBtn.type="button";
                    removeBtn.style.fontSize = "12px"
                    removeBtn.addEventListener("click", function(){ 
                        // remove function
                    });
                    remove.appendChild(removeBtn);
        
                    taskTable.appendChild(tr);
                    tr.appendChild(taskItem);
                    tr.appendChild(targetDate);
                    tr.appendChild(status);
                    tr.appendChild(remove);
                    }
                    
                }

                let toolsArray = thisProject[0].tools;
                let toolsTable = document.getElementById("editTools");
                toolsTable.innerHTML = "<th>Item</th><th>Quantity</th><th>Status</th>";
        
                for(let i =0;i<toolsArray.length;i++){
                    let thisTool = toolsList.filter((obj) => obj.id == toolsArray[i]);
                    let tr = document.createElement("tr");
        
                    if(thisTool[0] == undefined) break;
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
                    
        
                    statusSelect.addEventListener("change", function(){
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
                    removeBtn.classList.add("btn","btn-outline-danger", "w-100", "px-0");
                    removeBtn.innerHTML = 'Delete';
                    removeBtn.type="button";
                    removeBtn.style.fontSize = "12px"
                    removeBtn.addEventListener("click", function(){ 
                        // remove function
                    });
                    remove.appendChild(removeBtn);
        
                    toolsTable.appendChild(tr);
                    tr.appendChild(itemName);
                    tr.appendChild(quantity);
                    tr.appendChild(status);
                    tr.appendChild(remove);
                }
                
            })

       
        }
        
    
        
    } 
    
    
    //Add Project
  function addProject(){
        
    const getProjectItem = localStorage.getItem("projects");
   
    const addProjData =getProjectItem != null ? JSON.parse(getProjectItem) : []; //Multi Dimentional obj
    var projectLoc = document.getElementById("projectAdd");
    var projectName = document.getElementById("projectName");
    var projectFman = document.getElementById("selectForeman");
    var projectStart = document.getElementById("projStartNew");
    var projectEnd = document.getElementById("projectEnd");
    var projectID = addProjData != null ? addProjData.length+1 : "1";
    console.log("addProjData",addProjData);
    // for (let i=0; i< addProjData.length;i++){
    //     console.log("Project",addProjData)
    // }
    let addNewProject = {
        id: projectID.toString(),
        projectAddress: projectLoc != null ? projectLoc.value : "",
        projectEnd: projectEnd != null ? projectEnd.value : "",
        projectForeman: projectFman != null ? projectFman.value : "",
        projectName: projectName != null ? projectName.value : "",
        projectStart: projectStart != null ? projectStart.value : "" ,
        workers: tempWorkerId,
        task: addTempInputTask,
        tools: addTempTools,
    }
    addProjData.push(addNewProject);
    localStorage.setItem("projects", JSON.stringify(addProjData));
    document.getElementById("projectModalClose").click()  
    
    projOnload()
    clearFields()
    
    }



    
export function getEmployeeList(){
        var empList = JSON.parse(localStorage.getItem("employees"));
        var temp = document.getElementById("selectForeman")
        temp.innerHTML=""
        for(let i =0;i<empList.length;i++){
            if(addTempWorker.includes(empList[i].id)){

            }else{
                if (empList[i].designation == "Foreman"){
                    var str = "<option value='" + empList[i].id + "'>" + empList[i].lastName + ", " + empList[i].firstName+ "</option>"
                    var selectEmp = document.getElementById("selectForeman")
                    
                    temp.insertAdjacentHTML( 'afterbegin', str )
                    }
            }
         
    
        }
     
    }

    

    
export function manPower(){
    var workersList = JSON.parse(localStorage.getItem("employees"));
    var temp = document.getElementById("empWorkers")
    temp.innerHTML=""
    console.log("tempWorkerId",tempWorkerId)
    console.log("workersList",workersList)
    for(let i =0;i<workersList.length;i++){
        let findIndex = tempWorkerId.find(obj=> obj.old_id == workersList[i].id)
        if (workersList[i].designation != "Foreman"){
            
            if (findIndex == undefined){
                
                var str = "<option value='" + workersList[i].id + "'>" + workersList[i].lastName + ", " + workersList[i].firstName+ "</option>"
                var selectEmp = document.getElementById("empWorkers")
                
                temp.insertAdjacentHTML( 'afterbegin', str )
            }else{

            }
        }
        
        
    }
}
    
    
export function displayWorkers(){
        let teamTable = document.getElementById("workerList");
        let teamArray = document.getElementById("empWorkers")
        const workerList = JSON.parse(localStorage.getItem("employees"));
        let tempWork = tempWorkerId.length + 1;
        console.log("Hello",teamArray)
            let thisWorker = workerList.filter((obj) => obj.id == teamArray.value);
          
            let tr = document.createElement("tr");
            tr.setAttribute("id", "idempWorker_" + tempWork);
            
            let name = document.createElement("td");
            let workerName = thisWorker[0].firstName + " " + thisWorker[0].lastName;
            name.innerHTML = workerName
            
            name.setAttribute("data-label", "Name"); //for display purposes
    
            let designation = document.createElement("td");
            let wDesig = thisWorker[0].designation;
            designation.innerHTML = wDesig
            designation.setAttribute("data-label", "Designation");
    
            let number = document.createElement("td");
            let nWorker =thisWorker[0].contact;
            number.innerHTML = nWorker
            number.setAttribute("data-label", "Number");
    
            let profile = document.createElement("td");
            let profileBtn = document.createElement("a");
            profileBtn.classList.add("btn", "btn-outline-info", "w-100", "px-0");
            profileBtn.innerHTML = "Profile";
            profileBtn.type="button";
            profileBtn.style.fontSize = "12px";
            profileBtn.addEventListener("click", function(){
                //show profile function
            })
            profile.appendChild(profileBtn);
    
            let remove = document.createElement("td");
            let remBtn = document.createElement("button");
            remBtn.classList.add("btn","btn-outline-danger", "w-100", "px-0");
            remBtn.innerHTML = 'Delete';
            remBtn.type="button";
            remBtn.style.fontSize = "12px"
            remBtn.addEventListener("click", function(){ 
                // remove function
                removeWorkers(tempWork)
            });

            function removeWorkers(id){
                console.log("id", id)
                let remId = document.getElementById("idempWorker_" + id)
                console.log("tempWorkerId",tempWorkerId)
                for (let i = 0; i < tempWorkerId.length; i++) {
                    
                    if (tempWorkerId[i].id == id) {
                        tempWorkerId.splice(i,1)
                    
                    }else{

                    }
                    
                }
                remId.remove()
                for (let i = 0; i <addTempWorker.length;i++) {
                  
                    if (id == addTempWorker[i]) {
                        addTempWorker.splice(i,1)
                    }
                }
                console.log("addTempWorker",addTempWorker)
                console.log("teamArray",teamArray)
                manPower()


            }

            let tempWorkDeets = {
                id: tempWork.toString(),
                Name: workerName,
                designation: wDesig,
                number: nWorker,
                old_id: thisWorker[0].id,
                
            }

            tempWorkerId.push(tempWorkDeets)
            
            remove.appendChild(remBtn);
    
            teamTable.appendChild(tr);
            tr.appendChild(name);
            tr.appendChild(designation);
            tr.appendChild(number);
            tr.appendChild(profile);
            tr.appendChild(remove);
    
    
   
            manPower()

    }


    function editTaskButton() {
        let taskTable = document.getElementById("editTasks");
        taskTable.innerHTML=""
        let addTr = document.createElement("tr");
        let addTd = document.createElement("td");
        let addBtn = document.createElement("button");
        addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
        addBtn.innerHTML = "Edit Task"
        addBtn.addEventListener("click", editTask);
    
        addTd.appendChild(addBtn);
        addTd.colSpan = 4;
        addTr.appendChild(addTd);
        addTr.classList.add("border-0");
        taskTable.appendChild(addTr);
    }

    function editTask() {
        let taskTable = document.getElementById("editTasks");
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
        btn.type = "button";
        add.appendChild(btn);
    
        btn.addEventListener("click", function(event) {
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

 
    function editToolsButton() {
        let toolsTable = document.getElementById("editTools");
        toolsTable.innerHTML=""
        let addTr = document.createElement("tr");
        let addTd = document.createElement("td");
        let addBtn = document.createElement("button");
        addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
        addBtn.innerHTML = "Edit Tool";
        addBtn.addEventListener("click", editTool);
    
        toolsTable.appendChild(addTr);
        addTr.appendChild(addTd);
        addTr.classList.add("border-0");
        addTd.appendChild(addBtn);
        addTd.colSpan = 4;
    }

    function editTool() {
        let toolsTable = document.getElementById("editTools");
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
    
    function editPeopleButton() {
        let teamTable = document.getElementById("editWorkers");
        teamTable.innerHTML="";
        let addTr = document.createElement("tr");
        let addTd = document.createElement("td");
        let addBtn = document.createElement("button");
        addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
        addBtn.innerHTML = "Edit People";
        addBtn.addEventListener("click", editPeople);
    
        teamTable.appendChild(addTr);
        addTr.appendChild(addTd);
        addTr.classList.add("border-0");
        addTd.appendChild(addBtn);
        addTd.colSpan = 5;
    }
    
    function editPeople() {
        let teamTable = document.getElementById("editWorkers");
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


function clearFields(){
    document.getElementById("projectName").value=""
    document.getElementById("projectName").value=""
    document.getElementById("projectAdd").value=""
    document.getElementById("selectForeman").innerHTML=""
    document.getElementById("projStartNew").value=""
    document.getElementById("projectEnd").value=""
    document.getElementById("empWorkers").innerHTML=""
    document.getElementById("workerList").innerHTML=""
    addTempWorker=[]

}

function searchTab(inputElement, tableElement) {
	var input, filter, found, table, tr, td, i, j;
	input = document.getElementById(inputElement);
	filter = input.value.toUpperCase();
	table = document.getElementById(tableElement);
	tr = table.getElementsByTagName("tr");

	if (input.value == "Filter by project") location.reload();
	else {
        if(inputElement == "filter" && tableElement == "attendance") document.getElementById("datePicker").valueAsDate = null;
        
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

//Add Module - Add TASK/TOOLS

function addModTask() {
    
    let taskTable = document.getElementById("fTask");
    taskTable.innerHTML=""
    let addTr = document.createElement("tr");
    let addTd = document.createElement("td");
    let addBtn = document.createElement("button");
    addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
    addBtn.innerHTML = "Add New Task";
    addBtn.addEventListener("click", addNewTask);

    addTd.appendChild(addBtn);
    addTd.colSpan = 4;
    addTr.appendChild(addTd);
    addTr.classList.add("border-0");
    taskTable.appendChild(addTr);
    
}

function addNewTask() {
    let taskTable = document.getElementById("addTask");
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
    addTempTask = taskInput.value
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
    btn.type = "button";
    add.appendChild(btn);

    
    

    btn.addEventListener("click", function(event) {
        //add to localStorage? update table?
        
        taskData()
        
    })
    
    function taskData(){
        let tempTaskId = addTempInputTask.length + 1;
        const getTask = localStorage.getItem("tasks");
        const taskdeets =getTask != null ? JSON.parse(getTask) : []; //Multi Dimentional obj
    
    
        var taskID = taskdeets != null ? taskdeets.length + 1 : "1";

          //  to display tasks, loop the tasks array in thisProject, filter tasks object from localStorage by each tasks element, then display
        // const taskList = JSON.parse(localStorage.getItem("tasks"));
        // let thisProject = taskList.filter((obj) => obj.id == taskID); //get the object that matches the project id; filter() returns an array
        //  console.log("thisProject",taskList);
        // let taskArray = thisProject[0].id;
		// let taskTable = document.getElementById("addTask");
		// taskTable.innerHTML = "<th>Task Item</th><th>Target</th><th>Status</th><th></th>";

			let taskItem = document.createElement("td");
            let tr = document.createElement("tr");
            tr.setAttribute("id","idrowtask_" + tempTaskId) 
			taskItem.innerHTML = taskInput.value;
			taskItem.setAttribute("data-label", "Task Item");

			let targetDate = document.createElement("td");
			targetDate.innerHTML = targetInput.value;
			targetDate.setAttribute("data-label", "Target");

			let status = document.createElement("td");
			let statusSelect = document.createElement("input");
			statusSelect.value="Ongoing";
            statusSelect.setAttribute("disabled", "disabled");
			status.appendChild(statusSelect);

			//create options

			let remove = document.createElement("td");
			let removeBtn = document.createElement("button");
			removeBtn.classList.add("btn", "btn-outline-danger", "w-100", "px-0");
			removeBtn.innerHTML = 'Delete';
			removeBtn.type = "button";
			removeBtn.style.fontSize = "12px"
			removeBtn.addEventListener("click", function() {
				// remove function
                removeTask(tempTaskId)
			});

            function removeTask(id){
                let remID = document.getElementById("idrowtask_" + id)
                
                for (let i = 0; i < addTempInputTask.length; i++) {
                if (addTempInputTask[i].id == remID) {
                    addTempInputTask.splice(i,1)
                    
                }else{

                }
                
                
            }
                remID.remove();
               
            
            }
			remove.appendChild(removeBtn);

            
			
            taskTable.appendChild(tr);
            
			tr.appendChild(taskItem);
			tr.appendChild(targetDate);
			tr.appendChild(status);
			tr.appendChild(remove);
            taskInput.value=""	
            targetInput.value=""
            
            let taskDetails= {
                id: tempTaskId.toString(),
                projectId: projectID,
                taskName: taskInput.value,
                targetDate: targetInput.value,
                dateAdded: "",
                status: statusSelect.value,
                }
           
            addTempInputTask.push(taskDetails)
           
            console.log("taskDetails",addTempInputTask)
}

    let label = document.createElement("tr");
    
    label.classList.remove("border-0")

    taskTable.appendChild(label);
    taskTable.appendChild(tr);
    tr.appendChild(taskItem);
    tr.appendChild(target);
    tr.appendChild(add);

}

//Add task insert to Local storage 



function addModTools() {
    let toolsTable = document.getElementById("fTools");
    toolsTable.innerHTML=""
    let addTr = document.createElement("tr");
    let addTd = document.createElement("td");
    let addBtn = document.createElement("button");
    addBtn.classList.add("w-100", "btn", "btn-sm", "btn-outline-danger");
    addBtn.innerHTML = "Add New Tool";
    addBtn.addEventListener("click", addModTool);

    addTd.appendChild(addBtn);
    addTd.colSpan = 4;
    addTr.appendChild(addTd);
    addTr.classList.add("border-0");
    toolsTable.appendChild(addTr);
}

function addModTool() {
    let toolsTable = document.getElementById("addTools");
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
    quantityInput.type = "input";
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

    btn.addEventListener("click", function(event) {
        //add to localStorage? update table?
        toolsList()
        
    })

    function toolsList(){

        let tempToolsId = addTempTools.length + 1;
        const getTools = localStorage.getItem("tools");
        const toolsDeets =getTools != null ? JSON.parse(getTools) : []; //Multi Dimentional obj


        var taskID = toolsDeets != null ? toolsDeets.length + 1 : "1";

        let toolsItem = document.createElement("td");
        let tr = document.createElement("tr");
        tr.setAttribute("id","idrowtask_" + tempToolsId) 
        toolsItem.innerHTML = toolInput.value;
        toolsItem.setAttribute("data-label", "Tools");
        let toolsInput = document.createElement("td");
        toolsInput.innerHTML = quantityInput.value;
        toolsInput.setAttribute("data-label", "Target");
        console.log("toolsInput",toolsInput)
        let status = document.createElement("td");
        let statusSelect = document.createElement("input");
        statusSelect.value="Available";
        statusSelect.setAttribute("disabled", "disabled");
        status.appendChild(statusSelect);

        //create options

        let remove = document.createElement("td");
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-outline-danger", "w-100", "px-0");
        removeBtn.innerHTML = 'Delete';
        removeBtn.type = "button";
        removeBtn.style.fontSize = "12px"
        removeBtn.addEventListener("click", function() {
            // remove function
            removeTools(tempToolsId)
        });

            function removeTools(id){
                let remID = document.getElementById("idrowtask_" + id)
                
                for (let i = 0; i < addTempTools.length; i++) {
                if (addTempTools[i].id == remID) {
                    addTempTools.splice(i,1)
                    
                }else{

                }
                
                
            }
                remID.remove();
               
            
            }
			remove.appendChild(removeBtn);
            toolsTable.appendChild(tr);
			tr.appendChild(toolsItem);
			tr.appendChild(toolsInput);
			tr.appendChild(status);
			tr.appendChild(remove);
            toolInput.value=""	
            quantityInput.value=""
           
            
            let toolsDetails= {
                id: tempToolsId.toString(),
                projectId: projectID,
                tool: toolInput.value,
                quantity: quantityInput.value,
                status: statusSelect.value,
                }
           
            addTempTools.push(toolsDetails)
     console.log(addTempTools)
        }   
    

    let label = document.createElement("tr");
    
    toolsTable.appendChild(label);
    toolsTable.appendChild(tr);
    tr.appendChild(toolItem);
    tr.appendChild(quantity);
    tr.appendChild(add);


}

