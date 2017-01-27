const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const config = {
  Bucket: 'rsclosets.ca',
  CacheControl: '1800'
};

function uploadFile(key, body, contentType) {
  s3.putObject({
    Bucket: config.Bucket,
    Key: key,
    Body: body,
    ContentType: contentType,
    CacheControl: `max-age=${config.CacheControl}`
  }, (err, data) => {
    if(err) {
      console.log(`error uploading key ${key}`, err);
    } else {
      console.log(`success uploading key ${key}`);
    }
  });
}

const index = fs.readFileSync(__dirname + '/../build/index.html');
const assetManifest = fs.readFileSync(__dirname + '/../build/asset-manifest.json');
uploadFile('index.html', index, 'text/html');
uploadFile('asset-manifest.json', assetManifest, 'text/json');

fs.readdir(__dirname + '/../build/static/js', (err, files) => {
  files.forEach(file => {
    const body = fs.readFileSync(__dirname + '/../build/static/js/' + file);
    uploadFile(`static/js/${file}`, body, 'application/javascript');
  });
});

fs.readdir(__dirname + '/../build/static/css', (err, files) => {
  files.forEach(file => {
    const body = fs.readFileSync(__dirname + '/../build/static/css/' + file);
    uploadFile(`static/css/${file}`, body, 'text/css');
  });
});
