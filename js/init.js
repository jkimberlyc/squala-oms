const projects = [
    {   
        id: "1",
        projectName: "Project 1",
        projectAddress: "Lot 1, Block 2, Lorem Street, Ipsum City",
        projectStart: "June, 2022",
        projectEnd: "",
        projectForeman: "1",
        workers: [
            {
                id: "1",
                Name: "Joe Poe",
                designation: "Foreman",
                number: "19121122122",
                old_id: "1"
            },
            {
                id: "2",
                Name: "Jocelyn Phils",
                designation: "Skilled",
                number: "09121122122",
                old_id: "2"
            }
        ],
        tasks: [
            {
                id: "1",
                projectId: "1",
                taskName: "Excavation of Column Footing A",
                targetDate: "November",
                status: "Ongoing"
            },
            {
                id: "2",
                projectId: "1",
                taskName: "Excavation of Footing Tie Beam A",
                targetDate: "August",
                status: "Incomplete"
            },
            {
                id: "3",
                projectId: "1",
                taskName: "Assembly of Column Rebars A",
                targetDate: "September",
                status: "Incomplete"
            }],
        tools: [
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
        ],
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
        tasks: [
            {
                id: "1",
                projectId: "1",
                taskName: "Excavation of Column Footing A",
                targetDate: "November",
                status: "Ongoing"
            },
            {
                id: "2",
                projectId: "1",
                taskName: "Excavation of Footing Tie Beam A",
                targetDate: "August",
                status: "Incomplete"
            },
            {
                id: "3",
                projectId: "1",
                taskName: "Assembly of Column Rebars A",
                targetDate: "September",
                status: "Incomplete"
            }],
        tools: [
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
        ],
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
    },
    {
        id: "1",
        firstName: "Midoriya",
        lastName: "Deku",
        contact: "19121122122",
        address: "Davao City",
        designation: "Foreman",
        skills: ["Carpenter"]
    },
    {
        id: "2",
        firstName: "Jocelyn",
        lastName: "Phils",
        contact: "09121122122",
        address: "Davao City",
        designation: "Skilled",
        skills: ["Mason"]
    },
    {
        id: "3",
        firstName: "Axie",
        lastName: "Infinity",
        contact: "19121122122",
        address: "Quezon City",
        designation: "Helper",
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

const accounts = [
    {
        id: 1,
        username: "manager",
        password: "1234",
        employeeId: "admin"
    },
    {
        id: 2,
        username: "employee1",
        password: "1234",
        employeeId: "1"
    },
    {
        id: 3,
        username: "employee2",
        password: "1234",
        employeeId: "2"
    }
]

localStorage.setItem("projects", JSON.stringify(projects));
localStorage.setItem("employees", JSON.stringify(employees));
localStorage.setItem("attendance", JSON.stringify(attendance));
localStorage.setItem("accounts", JSON.stringify(accounts));
sessionStorage.setItem("createAlert", JSON.stringify(""));
sessionStorage.setItem("editAlert", JSON.stringify(""));
sessionStorage.setItem("createAlert1", JSON.stringify(""));
sessionStorage.setItem("editAlert1", JSON.stringify(""));