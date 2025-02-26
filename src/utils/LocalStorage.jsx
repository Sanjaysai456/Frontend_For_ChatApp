// src/utils/LocalStorage.js
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Complete project report",
        taskDescription: "Prepare the final report for the project and submit it by end of the week.",
        taskDate: "2024-10-30",
        category: "Project",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend the weekly team meeting to discuss project updates.",
        taskDate: "2024-10-25",
        category: "Meeting",
      },

      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Review the client feedback received and make necessary adjustments.",
        taskDate: "2024-10-20",
        category: "Feedback",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 15,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update documentation",
        taskDescription: "Update the project documentation based on the latest changes.",
        taskDate: "2024-11-01",
        category: "Documentation",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Create a presentation for the upcoming client meeting.",
        taskDate: "2024-11-05",
        category: "Presentation",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Ishita",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review the code submitted by the team and provide feedback.",
        taskDate: "2024-10-29",
        category: "Review",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test new features",
        taskDescription: "Conduct testing on the new features implemented in the application.",
        taskDate: "2024-10-15",
        category: "Testing",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Schedule interviews",
        taskDescription: "Coordinate and schedule interviews for the open positions.",
        taskDate: "2024-10-28",
        category: "HR",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market research",
        taskDescription: "Conduct market research for the new product launch.",
        taskDate: "2024-11-10",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Monthly report",
        taskDescription: "Prepare and submit the monthly sales report.",
        taskDate: "2024-10-01",
        category: "Reporting",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Raj",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup team goals",
        taskDescription: "Set up team goals for the next quarter during the planning session.",
        taskDate: "2024-11-02",
        category: "Planning",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Follow up with clients",
        taskDescription: "Follow up with clients to gather feedback on recent services.",
        taskDate: "2024-10-30",
        category: "Client",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
  },
];
const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
  try {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  } catch (error) {
    console.error('Error saving to local storage', error);
  }
};

export const getLocalStorage = () => {
  try {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || {};
    return { employees, admin };
  } catch (error) {
    console.error(error);
    return { employees: [], admin: {} };
  }
};