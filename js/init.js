const projects = [
    {   
        id: "1",
        projectName: "Project 1",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "",
        projectEnd: "",
        projectForeman: "1",
        workers: ["1", "2"], //employee ID
        tasks: ["1", "2", "3"], //task ID
        tools: ["1", "2", "3"], //tools ID
        completed: false
    },
    {   
        id: "2",
        projectName: "Project 2",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "",
        projectEnd: "",
        projectForeman: "",
        workers: [], //employee ID
        tasks: ["1", "2", "3"], //task ID
        tools: ["1", "2", "3"], //tools ID
        completed: false
    }
]

const employees = [
    {
        id: "1",
        projectId: "1", //project ID
        firstName: "Joe",
        lastName: "Poe",
        contact: "19121122122",
        address: "Davao City",
        designation: "Foreman",
        skills: ["Carpenter", "Painter"]
    },
    {
        id: "2",
        projectId: "1",
        firstName: "Jocelyn",
        lastName: "Phils",
        contact: "09121122122",
        address: "Davao City",
        designation: "Skilled",
        skills: ["Mason", "Carpenter"]
    }
]

const attendance = [
    {
        id: "1",
        employeeId: "1",
        projectId: "1",
        designation: "Foreman",
        date: "2022-02-21",
        timeIn: "09:00",
        timeOut: "18:00",
        status: "Present"
    },
    {
        id: "2",
        employeeId: "2",
        projectId: "1",
        designation: "Skilled",
        date: "2022-02-22",
        timeIn: "08:46",
        timeOut: "18:03",
        status: "Absent"
    }
]

const tasks = [
    {
        id: "1",
        projectId: "1",
        taskName: "Excavation of Column Footing A",
        targetDate: "November",
        dateAdded: "",
        status: "Ongoing"
    },
    {
        id: "2",
        projectId: "1",
        taskName: "Excavation of Footing Tie Beam A",
        targetDate: "August",
        dateAdded: "",
        status: "Incomplete"
    },
    {
        id: "3",
        projectId: "1",
        taskName: "Assembly of Column Rebars A",
        targetDate: "September",
        dateAdded: "",
        status: "Incomplete"
    }
]

const tools = [
    {
        id: "1",
        projectId: "1",
        tool: "Grinder",
        quantity: "2",
        status: "Available"
    },
    {
        id: "2",
        projectId: "1",
        tool: "Grinder",
        quantity: "2",
        status: "Available"
    }
]

const accounts = [
    {
        id: 1,
        username: "manager",
        password: "1234",
        employeeID: "admin"
    },
    {
        id: 2,
        username: "employee1",
        password: "1234",
        employeeID: "1"
    },
    {
        id: 3,
        username: "employee2",
        password: "1234",
        employeeID: "2"
    }
]

localStorage.setItem("projects", JSON.stringify(projects));
localStorage.setItem("employees", JSON.stringify(employees));
localStorage.setItem("attendance", JSON.stringify(attendance));
localStorage.setItem("tasks", JSON.stringify(tasks));
localStorage.setItem("tools", JSON.stringify(tools));
localStorage.setItem("accounts", JSON.stringify(accounts));
sessionStorage.setItem("createAlert", JSON.stringify(""));
sessionStorage.setItem("editAlert", JSON.stringify(""));
sessionStorage.setItem("createAlert1", JSON.stringify(""));
sessionStorage.setItem("editAlert1", JSON.stringify(""));