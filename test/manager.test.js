const Manager = require('../lib/manager');
const manager = new Manager('Jordan', 1, 'email@email.com', 150);

describe('manager', () => {
    test('Name is correct', () => {
        expect(manager.getName()).toBe('Jordan');
    })

    test('Id is correct', () => {
        expect(manager.getId()).toBe(1);
    })

    test('Email is correct', () => {
        expect(manager.getEmail()).toBe('email@email.com');
    })

    test('Role is correct', () => {
        expect(manager.getRole()).toBe('Manager');
    })

    test('Office number is correct', () => {
        expect(manager.getOfficeNumber()).toBe(150);
    })
})