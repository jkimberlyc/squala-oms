const employeeTable = document.getElementById("displayEmployee");

function showAllEmployees() {
    for(i in employeeList){
        var employee = document.createElement("tr");
        var name = document.createElement("td");
        var address = document.createElement("td");
        var contact = document.createElement("td");
        var project = document.createElement("td");
        var designation = document.createElement("td");
        var skills = document.createElement("td");
        var action = document.createElement("td");
        
        name.innerHTML = employeeList[i].firstName + " " + employeeList[i].lastName;
        address.innerHTML = employeeList[i].address;
        contact.innerHTML = employeeList[i].contact;
        designation.innerHTML = employeeList[i].designation
        
        //we are only provided with project ID so we must go to the projects table 
        //and find the element that matches the provided ID
        var projectID = employeeList[i].projectId;
        var thisProject = projectList.filter((obj) => obj.id == projectID);
        project.innerHTML = thisProject[0].projectName;

        //display each element of skills array
        var skillsArray = employeeList[i].skills;
        var skillString = "";
        for(j in skillsArray){
            if(j!=skillsArray.length-1){ //include a comma except for the last element
                skillString += skillsArray[j] + ", "
            } else {
                skillString += skillsArray[j]
            }
        }
        skills.innerHTML = skillString;

        //add edit and dismiss button with bootstrap modal activation
        action.innerHTML = "<div class='btn-group' role='group' aria-label='Employee Action'> <button type='button' class='btn btn-outline-info btn-sm btn-edit' data-bs-toggle='modal' data-bs-target='#editEmployeeModal''><i class='bx bxs-edit align-middle'></i> Edit</button><button type='button' class='btn btn-outline-danger btn-sm'><i class='bx bx-user-x align-middle'></i> Dismiss</button></div>"

        //provide additional data attribute for responsive view purposes
        name.setAttribute("data-label", "Name");
        address.setAttribute("data-label", "Address");
        contact.setAttribute("data-label", "Contact Number");
        project.setAttribute("data-label", "Project");
        designation.setAttribute("data-label", "Designation");
        skills.setAttribute("data-label", "Skills");

        //lastly, give the tr element an ID of the employee
        employee.id = employeeList[i].id;

        employeeTable.appendChild(employee);
        employee.appendChild(name);
        employee.appendChild(address);
        employee.appendChild(contact);
        employee.appendChild(project);
        employee.appendChild(designation);
        employee.appendChild(skills);
        employee.appendChild(action);
    }
}

showAllEmployees();

const editBtns = document.querySelectorAll(".btn-edit");
const skillsCheck = document.querySelectorAll(".btn-check");

for(let i=0; i<editBtns.length; i++){
    
    editBtns[i].addEventListener("click", () => {
        //reset skills checkboxes
        for(skill of skillsCheck){
            skill.checked = false;
        }
        
        var employeeID = event.target.closest("tr").id; //get the employee id located in each tr
        
        //locate the employee in the employees table with the provided id
        var thisEmployee = employeeList.filter((obj) => obj.id == employeeID);
        
        //populate modal fields with existing record of employee
        var fName = document.getElementById("inputFirstName");
        var lName = document.getElementById("inputLastName");
        var address = document.getElementById("inputAddress");
        var contact = document.getElementById("inputContact");
        var project = document.getElementById("inputProject");
        var designation = document.getElementById("inputDesignation");

        fName.value = thisEmployee[0].firstName;
        lName.value = thisEmployee[0].lastName;
        address.value = thisEmployee[0].address;
        contact.value = thisEmployee[0].contact;

        var projectID = thisEmployee[0].projectId;
        var thisProject = projectList.filter((obj) => obj.id == projectID);
        project.value = thisProject[0].projectName;

        //select the employee designation based on the record
        for(let i=0; i<designation.options.length; i++){
            if(designation.options[i].value.includes(thisEmployee[0].designation)){
            designation.options[i].selected = true;
          }
        }

        //check the checkboxes that match with employee's skills
        var skills = thisEmployee[0].skills;
        for(let i=0; i<skillsCheck.length; i++){
            for(let j=0; j<skills.length; j++){
                if(skillsCheck[i].id == skills[j]) skillsCheck[i].checked = true;
            }
        }
    })
}

// document.getElementById("editProfile").addEventListener("click", () => {
//     var modalForm = document.getElementById
// });

