const prod = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    BACKEND_URL: prod ? '/AUTH-NEXT' : '',
  },
}
