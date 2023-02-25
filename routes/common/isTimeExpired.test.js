const { dateFaker } = require('date-faker');

describe('helpers -> isTeacherExpired', () => {

  test('time is expired', async () => {
    const expirationTime = 1637530042;
    const isTimeExpired = require('./isTimeExpired');
    expect(isTimeExpired(expirationTime)).toBeTruthy();
  })

  test('teacher account not expired', async () => {
    const expirationDate = '2021-01-02 00:00:00';
    const currentDate = '2021-01-01 00:00:00';
    dateFaker.set(currentDate);
    const accountExpiration = Math.floor((new Date(expirationDate)).getTime()/1000);
    const isTimeExpired = require('./isTimeExpired');
    expect(isTimeExpired(expirationDate)).toBeFalsy();
    dateFaker.reset();
  })

})
