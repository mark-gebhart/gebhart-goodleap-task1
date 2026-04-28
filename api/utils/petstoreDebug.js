const https = require('https');
const data = JSON.stringify({ id: 123456789, name: 'foo', photoUrls: ['url'], status: 'available' });
const options = {
  method: 'POST',
  hostname: 'petstore.swagger.io',
  path: '/v2/pet',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = https.request(options, (res) => {
  console.log('status', res.statusCode);
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('headers', res.headers);
    console.log('body', body.slice(0, 500));
  });
});

req.on('error', (err) => console.error('err', err));
req.write(data);
req.end();
