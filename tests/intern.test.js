const Intern = require('../lib/intern');

describe('intern test', () => {
  test('tests if constructor values for the Intern class will be returned', () => {
    const name = 'alice';
    const id = 3;
    const email = 'aw@outlook.com';
    const school = 'manchester university';
    const intern = new Intern(name, id, email, school);
    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.school).toEqual(school);
  });

  test('test that the getSchool() method returns school', () => {
    const name = 'alice';
    const id = 3;
    const email = 'aw@outlook.com';
    const school = 'manchester university';
    const intern = new Intern(name, id, email, school);
    expect(intern.getSchool()).toEqual(school);
  });

  test('test that get getRole() method returns intern', () => {
    const name = 'alice';
    const id = 3;
    const email = 'aw@outlook.com';
    const school = 'manchester university';
    const intern = new Intern(name, id, email, school);
    expect(intern.getRole()).toEqual('Intern');
  });
});
