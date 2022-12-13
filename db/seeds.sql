INSERT INTO department
VALUES ("Engineering"),
       ("Acounting manager"),
       ("Sales "),
       ("Legal Team"),
       ("Lawyer");

INSERT INTO roles (id, title, salary, department_id)
VALUES 
(1, "Sales Lead", 100000, 1),
(2, "Salesperson", 80000, 1),
(3, "Lead Engineer", 150000, 2),
(4, "Software Engineer", 120000, 2),
(5, "Accountant", 125000, 3),
(6, "Legal Team Lead", 250000, 4),
(7, "Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES 
('Kingsley', 'Bob', 1, NULL),
('Jason', 'Amose', 2, 1),
('Emma', 'Roberts', 3, 2),
('Jennifer', 'kool', 4, NULL),
('Bill', 'Sams', 5, 4)
('Emily','Vaga' 6, NULL),
('Lily', 'snaps', 7, NULL);
       