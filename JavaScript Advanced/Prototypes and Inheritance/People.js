function people() {
    const TASKS = {
        Junior: [' is working on a simple task.'],
        Senior: [' is working on a complicated task.',
            ' is taking time off work.',
            ' is supervising junior workers.'],
        Manager: [' scheduled a meeting.',
            ' is preparing a quarterly report.']

    }

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot be instantiated');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.index = 0;
        }
        work() {
            console.log(this.name + this.tasks[this.index++]);
            if (this.index == this.tasks.length) {
                this.index = 0;
            }
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = TASKS.Junior;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = TASKS.Senior;
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = TASKS.Manager;
            this.dividend = 0;
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}