const Intern = require("../lib/Intern");

const intern = new Intern('Holden2', '3855', 'hac0212@gmail.com', 'UTA');

test('test if we can get constructor values for Intern object', () => {
    expect(Intern.name).toBe('Holden2');
    expect(Intern.id).toBe('3855');
    expect(Intern.email).toBe('hac0212@gmail.com');
    expect(Intern.school).toBe('UTA');
});

test('test if we can get name from getName', () => {
    expect(Intern.getName()).toBe('Holden2')
});

test('test if we can get name from getID', () => {
    expect(Intern.getID()).toBe('3855')
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