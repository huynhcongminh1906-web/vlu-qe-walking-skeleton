const login = require('./login');

describe('Login Function', () => {

    test('Đăng nhập thành công khi user=admin và pass=123', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('Đăng nhập thất bại khi sai mật khẩu', () => {
        expect(login('admin', '1234')).toBe(false);
    });

    test('Đăng nhập thất bại khi sai username', () => {
        expect(login('user', '123')).toBe(false);
    });

    test('Đăng nhập thất bại khi username và password để trống', () => {
        expect(login('', '')).toBe(false);
    });

});
