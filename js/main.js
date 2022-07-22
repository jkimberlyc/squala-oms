import * as test from "./manager/dashboard.js"; 


test.projOnload()


const cards = document.querySelectorAll(".card");

const projectList = JSON.parse(localStorage.getItem("projects"));
const employeeList = JSON.parse(localStorage.getItem("employees"));
const taskList = JSON.parse(localStorage.getItem("tasks"));
const toolsList = JSON.parse(localStorage.getItem("tools"));
const modalBtns = document.querySelectorAll(".modalBtn"); //get all Open Project buttons

function searchTable(inputElement, tableElement) {
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
    window.location.href = "dashboard.html";
})

function addProject(){
test.addProject()
}


