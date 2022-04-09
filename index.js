let employee = {
    name: "Marco",
    streetAddress: "Dortmund, Germany"
}

let updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {
        ...employee,
        [key]: value
    }
}

let destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}
