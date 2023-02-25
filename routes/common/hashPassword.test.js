const { nanoid } = require('nanoid');
const NANOID_RETURN_VALUE = 'salt';
jest.mock('nanoid')

describe('hashPassword', () => {

  const password = 'password';

  beforeEach(() => {
    nanoid.mockReset();
  })

  test('returns password hash and salt', async () => {
    nanoid.mockReturnValue(NANOID_RETURN_VALUE);
    const hashPassword = require('./hashPassword');
    const response = await hashPassword(password);
    const expectedHash = 'fc05d6fa0f0d42e75b5087aa705f3055f2cba380cc9f1df1808f4c5dbaa77aaab39dd8e2fb8f6eeffcfc9eca88c82fe1058282d60be06b74d985dca6c9017cae'
    expect(response.passwordHash).toEqual(expectedHash);
    expect(response.salt).toEqual(NANOID_RETURN_VALUE);
  })

})
