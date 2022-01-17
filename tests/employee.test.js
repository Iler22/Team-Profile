const Employee = require('../lib/employee');

describe('employee test', () => {
  test('tests if constructor values for the Employee class will be returned', () => {
    const name = 'john';
    const id = 1;
    const email = 'johndoe@gmail.com';
    const employee = new Employee(name, id, email);

    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
  });

  test('test to see that the getName() method returns name', () => {
    const name = 'john';
    const employee = new Employee(name);
    expect(employee.getName()).toEqual(name);
  });

  test('test to see that the getId() method returns id', () => {
    const name = 'john';
    const id = 1;
    const employee = new Employee(name, id);
    expect(employee.getId()).toEqual(id);
  });

  test('test to see that the getEmail() method returns email', () => {
    const name = 'john';
    const id = 1;
    const email = 'johndoe@gmail.com';
    const employee = new Employee(name, id, email);
    expect(employee.getEmail()).toEqual(email);
  });

  test('test to see that the getRole() method returns Employee', () => {
    const name = 'john';
    const id = 1;
    const email = 'johndoe@gmail.com';
    const employee = new Employee(name, email, id);
    expect(employee.getRole()).toEqual('Employee');
  });
});
