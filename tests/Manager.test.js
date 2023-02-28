const Manager = require("../lib/Manager");

const manager = new Manager('Holden', '3586', 'hac0212@gmail.com', '123');

test('test if we can get constructor values for Manager object', () => {
    expect(Manager.name).toBe('Holden');
    expect(Manager.id).toBe('3856');
    expect(Manager.email).toBe('hac0212@gmail.com');
    expect(Manager.officeNumber).toBe('123');
});

test('test if we can get name from getName', () => {
    expect(Manager.getName()).toBe('Holden')
});

test('test if we can get name from getID', () => {
    expect(Manager.getID()).toBe('3865')
});

test('test if we can get name from getEmail', () => {
    expect(Manager.getEmail()).toBe('hac0212@gmail.com')
});

test('test if we can get name from getOfficeNumber', () => {
    expect(Manager.getEmail()).toBe('123')
});

test('test if we can get name from getRole', () => {
    expect(Manager.getRole()).toBe('Manager')
});