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

let deleteFromEmployeeByKey = (employee, key) => {
    let employeeCopy = { ...employee };
    delete employeeCopy[key];
    return employeeCopy
}

