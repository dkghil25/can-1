const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..'); // project root where your html/css/js live

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.map': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon'
};

module.exports = (req, res) => {
  // Force no-cache headers
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0, s-maxage=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  // get path from query (rewrites set ?path=...)
  const requested = (req.query && req.query.path) || '';
  // prevent directory traversal
  const safePath = path.normalize('/' + requested).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(root, safePath);

  // If the path is a directory or empty, serve index.html
  try {
    if (!requested || requested === '' || requested.endsWith('/')) {
      filePath = path.join(root, 'index.html');
    } else {
      // If requested file doesn't exist but requested has no extension, try adding .html
      if (!fs.existsSync(filePath) && path.extname(filePath) === '') {
        const tryHtml = filePath + '.html';
        if (fs.existsSync(tryHtml)) filePath = tryHtml;
      }
    }

    if (!fs.existsSync(filePath) || !filePath.startsWith(root)) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mime[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);

    const buffer = fs.readFileSync(filePath);
    res.statusCode = 200;
    res.end(buffer);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Server error');
  }
};
