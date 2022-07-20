const id = JSON.parse(sessionStorage.getItem("currentIdUser"));
//console.log(id); //to check the result of id...

const thisUser = employeeList.filter((obj) => obj.id == id);

const modalBtn = document.querySelector(".modalBtn")
modalBtn.addEventListener("click", ()=>{
    let thisProject=projectList.filter((obj)=>obj.id==thisUser[0].projectId)
    console.log(thisProject[0]);
}) 