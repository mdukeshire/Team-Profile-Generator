const Engineer = require('../lib/engineer');
const engineer = new Engineer('Jordan', 1, 'email@email.com', 'jdukeshire');

describe('engineer', () => {
    test('Name is correct', () => {
        expect(engineer.getName()).toBe('Jordan');
    })

    test('Id is correct', () => {
        expect(engineer.getId()).toBe(1);
    })

    test('Email is correct', () => {
        expect(engineer.getEmail()).toBe('email@email.com');
    })

    test('Role is correct', () => {
        expect(engineer.getRole()).toBe('Engineer');
    })

    test('GitHub is correct', () => {
        expect(engineer.getGithub()).toBe('jdukeshire');
    })
})