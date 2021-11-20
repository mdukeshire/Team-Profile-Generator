const Employee = require("../lib/employee");
const employee = new Employee('Jordan', 1, 'email@email.com');

describe('employee', () => {
    test('Name is correct', () => {
        expect(employee.getName()).toBe('Jordan');
    })

    test('Id is correct', () => {
        expect(employee.getId()).toBe(1);
    })

    test('email is correct', () => {
        expect(employee.getEmail()).toBe('email@email.com');
    })

    test('Role is correct', () => {
        expect(employee.getRole()).toBe('Employee');
    })
})