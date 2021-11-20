const Intern = require('../lib/intern');
const intern1 = new Intern('Jordan', 1, 'email@email.com', 'OSU');

describe('intern', () => {
    test('Name is correct', () => {
        expect(intern1.getName()).toBe('Jordan');
    })

    test('Id is correct', () => {
        expect(intern1.getId()).toBe(1);
    })

    test('Email is correct', () => {
        expect(intern1.getEmail()).toBe('email@email.com');
    })

    test('Role is correct', () => {
        expect(intern1.getRole()).toBe('Intern');
    })

    test('GitHub is correct', () => {
        expect(intern1.getSchool()).toBe('OSU');
    })
})