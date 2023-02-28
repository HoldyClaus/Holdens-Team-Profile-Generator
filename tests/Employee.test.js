const Employee = require("../lib/Employee");

const employee = new Employee('Holden', '8010', 'hac0212@gmail.com');

test('test if we can get constructor values for employee object', () => {
    expect(employee.name).toBe('Holden');
    expect(employee.id).toBe('8010');
    expect(employee.email).toBe('hac0212@gmail.com');
});

test('test if we can get name from getName', () => {
    expect(employee.getName()).toBe('Holden')
});

test('test if we can get name from getID', () => {
    expect(employee.getID()).toBe('8010')
});

test('test if we can get name from getEmail', () => {
    expect(employee.getEmail()).toBe('hac0212@gmail.com')
});

test('test if we can get name from getRole', () => {
    expect(employee.getRole()).toBe('Employee')
});