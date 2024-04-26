const company = {
    sales: [
        { name: 'Jhon', salary: 1000 },
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
}

function calculateTotalSalary(department) {
    let totalSalary = 0;
    if (Array.isArray(department)) {
        department.forEach(employee => {
            totalSalary += employee.salary;
        });
    } else {
        if (typeof department === 'object') {
            for (let district in department) {
                totalSalary += calculateTotalSalary(department[district]);
            }
        }
    }
    return totalSalary;
}

const total = calculateTotalSalary(company);
console.log("Total salary of company :", total);















