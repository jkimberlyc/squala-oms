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
        skills: ["Carpenter"],
        allProjects: ["1"] //project ID history
    },
    {
        id: "2",
        projectId: "1",
        firstName: "Jocelyn",
        lastName: "Phils",
        contact: "09121122122",
        address: "Davao City",
        designation: "Skilled",
        skills: ["Mason"],
        allProjects: ["1"]
    }
]

const attendance = [
    {
        id: "1",
        employeeId: "1",
        projectId: "1",
        date: "",
        timeIn: "",
        timeOut: "",
        status: "Present"
    },
    {
        id: "2",
        employeeId: "2",
        projectId: "1",
        date: "",
        timeIn: "",
        timeOut: "",
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

localStorage.setItem("projects", JSON.stringify(projects));
localStorage.setItem("employees", JSON.stringify(employees));
localStorage.setItem("attendance", JSON.stringify(attendance));
localStorage.setItem("tasks", JSON.stringify(tasks));
localStorage.setItem("tools", JSON.stringify(tools));