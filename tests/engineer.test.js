const Engineer = require('../lib/engineer');

describe('engineer test', () => {
  test('tests if constructor values for the Engineer class will be returned', () => {
    const name = 'joe';
    const id = 2;
    const email = 'joebloggs@mail.com';
    const gitHub = 'joe123';
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.gitHub).toEqual(gitHub);
  });

  test('test that the getGitHub() method returns GitHub username', () => {
    const name = 'joe';
    const id = 2;
    const email = 'joebloggs@gmail.com';
    const gitHub = 'joe123';
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getGitHub()).toEqual(gitHub);
  });

  test('test that the getRole() method returns Engineer', () => {
    const name = 'joe';
    const id = 2;
    const email = 'joebloggs@gmail.com';
    const gitHub = 'joe123';
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
