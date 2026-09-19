function login(user, pass) {
    return user === 'admin' && pass === '1234';
}

// Cho phép Jest import hàm login để kiểm thử
if (typeof module !== 'undefined' && module.exports) {
    module.exports = login;
}
