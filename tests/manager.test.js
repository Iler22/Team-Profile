const Manager = require('../lib/manager');

describe('manager test', () => {
  test('tests if constructor values for the Manager class will be returned', () => {
    const name = 'anna';
    const id = 4;
    const email = 'anna@yahoo.com';
    const officeNumber = '123';
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.officeNumber).toEqual(officeNumber);
  });

  test('test that the getOfficeNumber() method returns office number', () => {
    const name = 'anna';
    const id = 4;
    const email = 'anna@yahoo.com';
    const officeNumber = 123;
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
  });

  test('test that get getRole() method returns manager', () => {
    const name = 'anna';
    const id = 4;
    const email = 'anna@yahoo.com';
    const officeNumber = 123;
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getRole()).toEqual('Manager');
  });
});
