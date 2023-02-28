const Engineer = require("../lib/Engineer");

const engineer = new Engineer('Holden', '8010', 'hac0212@gmail.com', 'UTA');

test('test if we can get constructor values for Engineer object', () => {
    expect(Engineer.name).toBe('Holden');
    expect(Engineer.id).toBe('8010');
    expect(Engineer.email).toBe('hac0212@gmail.com');
    expect(Engineer.gitHub).toBe('HoldyClaus');
});

test('test if we can get name from getName', () => {
    expect(Engineer.getName()).toBe('Holden')
});

test('test if we can get name from getID', () => {
    expect(Engineer.getID()).toBe('8010')
});

test('test if we can get name from getEmail', () => {
    expect(Engineer.getEmail()).toBe('hac0212@gmail.com')
});

test('test if we can get name from getGithub', () => {
    expect(Engineer.getsGithub()).toBe('HoldyClaus')
});

test('test if we can get name from getRole', () => {
    expect(Engineer.getRole()).toBe('Engineer')
});