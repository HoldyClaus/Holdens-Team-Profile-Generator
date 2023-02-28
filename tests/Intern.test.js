const Intern = require("../lib/Intern");

const intern = new Intern('Holden', '8010', 'hac0212@gmail.com', 'UTA');

test('test if we can get constructor values for Intern object', () => {
    expect(Intern.name).toBe('Holden');
    expect(Intern.id).toBe('8010');
    expect(Intern.email).toBe('hac0212@gmail.com');
    expect(Intern.school).toBe('UTA');
});

test('test if we can get name from getName', () => {
    expect(Intern.getName()).toBe('Holden')
});

test('test if we can get name from getID', () => {
    expect(Intern.getID()).toBe('8010')
});

test('test if we can get name from getEmail', () => {
    expect(Intern.getEmail()).toBe('hac0212@gmail.com')
});

test('test if we can get name from getSchool', () => {
    expect(Intern.getsSchool()).toBe('UTA')
});

test('test if we can get name from getRole', () => {
    expect(Intern.getRole()).toBe('Intern')
});