const passwordService = require('../password')

test('Test long : home', () => {
    expect(passwordService.length('home')).toBe(4);
})