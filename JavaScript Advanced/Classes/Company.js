class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        let tokens = [username, salary, position, department];
        tokens.some(t => {
            if (t == '' || t == undefined || t == null) {
                throw new Error('Invalid input!');
            }
        });
        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({
            username, 
            salary, 
            position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepName = '';
        let bestAverageSalary = 0;
        for (let depart in this.departments) {
            let currentAverageSalary = (this.departments[depart].reduce((acc, curr) => acc + curr.salary, 0)) / (this.departments[depart].length);
            if (currentAverageSalary > bestAverageSalary) {
                bestAverageSalary = currentAverageSalary;
                bestDepName = depart;
            }
        }
        let output = `Best Department is: ${bestDepName}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`;
        this.departments[bestDepName].sort((a, b) => {
            let result = b.salary - a.salary;
            if (result == 0) {
                result = a.username.localeCompare(b.username);
            }
            return result;
        });

        this.departments[bestDepName].forEach(emp => {
            output += `${emp.username} ${emp.salary} ${emp.position}\n`
        });
        return output.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());