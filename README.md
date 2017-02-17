# rsclosets.ca

The code for [http://rsclosets.ca](http://rsclosets.ca), a static website for a closet organizing company written in Javascript (ES6) with React.js

### Notable Features

- Quote requests from the website are emailed directly to the clients inbox containing the form information.
- Hosted on Amazon Web Services using S3 and CloudFront to provide average load times of ~450ms.
- Simple content management system for the image gallery allowing the client to upload pictures to S3 which automatically triggers an AWS Lambda function to compress & resize the images and then place them into production.
- Responsive design adjusts well to any device and screen size.
