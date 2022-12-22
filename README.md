SQL Challenge: Employee Tracker

Description
The challenge for this week was to build a command-line application that manage a company's employee database, using Node.js, Inquirer, and MySQL.
Because this application won’t be deployed, I've created a walkthrough video that demonstrates its functionality and all acceptance criteria being met.

User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

Demonstration
https://drive.google.com/file/d/194334tRJeD4YOBD66rNs4ColATUq1zXz/view

Screenshots
<img width="1100" alt="Screenshot 2022-12-21 at 8 45 43 PM" src="https://user-images.githubusercontent.com/112598840/209037280-83a0970c-4dea-4cab-b70b-3908482349d4.png">
<img width="1470" alt="Screenshot 2022-12-21 at 8 45 31 PM" src="https://user-images.githubusercontent.com/112598840/209037290-a8cb4c13-7c57-402a-bf88-f7aedec2f796.png">
