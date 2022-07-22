window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var name = document.getElementById('UserName')
var password = document.getElementById('Password')
var loginPeople =[{
    UserName: "PManager",
    Password: "PManager1",
},
{
    UserName: "Foreman",
    Password: "Foreman1",
},
{
    UserName: "Employee",
    Password: "Employee1",
}]


function validate()
{
    // var username=document.getElementById("UserName").value;
    // var password=document.getElementById("Password").value;
    username = "PManager";
    password = "PManager1";


for(i=0;i<loginPeople.length;i++){
    if(username == loginPeople[i].UserName && password == loginPeople[i].Password){
        alert("sucess")
        window.location.href="manager/dashboard.html";
        return
    }
}
alert("login failed");
}

    // if(username=="admin" && password=="user"){
    //     alert("login successfully");
    //     return false;
    // }else{
    //     alert("login failed");
    // }}
