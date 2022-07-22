const projects = [
    {   
        id: "1",
        projectName: "Project 1",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "June, 2022",
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
        projectStart: "July 22, 2022",
        projectEnd: "",
        projectForeman: "1",
        workers: ["1", "2","3"], //employee ID
        tasks: ["1", "2", "3"], //task ID
        tools: ["1", "2", "3"], //tools ID
        completed: false
    },
    {
        id: "3",
        projectName: "Project 3",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "",
        projectEnd: "",
        projectForeman: "1",
        workers: ["1"], //employee ID
        tasks: ["1", "2", "3"], //task ID
        tools: ["1", "2", "3"], //tools ID
        completed: false
    },
    {
        id: "4",
        projectName: "Project 4",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "",
        projectEnd: "",
        projectForeman: "1",
        workers: ["1"], //employee ID
        tasks: ["1", "2", "3"], //task ID
        tools: ["1", "2", "3"], //tools ID
        completed: false
    },
    {
        id: "5",
        projectName: "Project 5",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "",
        projectEnd: "",
        projectForeman: "1",
        workers: ["1"], //employee ID
        tasks: ["1", "2", "3"], //task ID
        tools: ["1", "2", "3"], //tools ID
        completed: false
    },
    {
        id: "6",
        projectName: "Project 6",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "",
        projectEnd: "",
        projectForeman: "1",
        workers: ["1"], //employee ID
        tasks: ["0"], //task ID
        tools: ["0"], //tools ID
        completed: false
    }
]

const employees = [
    {
        id: "1",
        firstName: "Joe",
        lastName: "Poe",
        contact: "19121122122",
        address: "Davao City",
        designation: "Foreman",
        skills: ["Carpenter"],
        allProjects: ["1"] //project ID history
    },
    {
        id: "1",
        firstName: "Midoriya",
        lastName: "Deku",
        contact: "19121122122",
        address: "Davao City",
        designation: "Foreman",
        skills: ["Carpenter"],
        allProjects: ["1"] //project ID history
    },
    {
        id: "2",
        firstName: "Jocelyn",
        lastName: "Phils",
        contact: "09121122122",
        address: "Davao City",
        designation: "Skilled",
        skills: ["Mason"],
        allProjects: ["1"]
    },
    {
        id: "3",
        firstName: "Axie",
        lastName: "Infinity",
        contact: "19121122122",
        address: "Quezon City",
        designation: "Helper",
        skills: ["Carpenter"],
        allProjects: ["1"] //project ID history
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

// localStorage.setItem("projects", JSON.stringify(projects));
localStorage.setItem("employees", JSON.stringify(employees));
localStorage.setItem("attendance", JSON.stringify(attendance));
localStorage.setItem("tasks", JSON.stringify(tasks));
localStorage.setItem("tools", JSON.stringify(tools));