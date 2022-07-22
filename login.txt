const name = document.getElementById('UserName')
const password = document.getElementById('Password')
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
    var username=document.getElementById("UserName").value;
    var password=document.getElementById("Password").value;


for(i=0;i<loginPeople.length;i++){
    if(username == loginPeople[i].UserName && password == loginPeople[i].Password){
        alert("login successfully");
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
