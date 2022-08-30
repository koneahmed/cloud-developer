export const config = {
  "dev": {
    "username": "udagramrdsdev",
    "password": "udagramrdsdev",
    "database": "udagramrdsdev",
    "host": "udagramrdsdev.chpwfyafbeth.us-east-1.rds.amazonaws.com",
    "dialect": "postgress",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-s3-dev"
    // "username": process.env.POSTGRESS_USERNAME,
    // "password": process.env.POSTGRESS_PASSWORD,
    // "database": process.env.POSTGRESS_DATABASE,
    // "host": process.env.POSTGRESS_HOST,
    // "dialect": "postgress",
    // "aws_region": process.env.AWS_REGION,
    // "aws_profile": process.env.AWS_PROFILE,
    // "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": "helloworld"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
