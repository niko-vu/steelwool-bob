INSERT INTO department (id, name)
VALUES (001, "Food department"),
       (002, "Health department");

       INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Production manager", 2403.04, 35193),
       (002, "Shift lead", 1705.10, 85720);

       INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Rune", "Faiwu", 50399, 11333),
       (002, "Talon", "Mahzhal", 20495, 90385);