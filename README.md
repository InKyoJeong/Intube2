# Intube

![intube](./intro.png)

## Technologies

ES6, NodeJS(Express), MongoDB(mongoose), Webpack, Pug, Scss

## Features

- [x] Video Upload/ Delete/ Search
- [x] Github Login
- [x] Add Comment
<!-- - [ ] Kakao Login -->

## Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

<!-- ```
$ heroku config:push
```

```
git add .
git commit -m""
git push heroku master

``` -->

## Amazon S3

- Upload Video
- Upload Avatar Image

## Structure

```

INTUBE
├── assets
│ ├── js
│ └── scss
│ ├── config
│ ├── pages
│ ├── partials
│ ├── main.scss
│ └── styles.scss
├── controller
│ ├── userController.js
│ └── videoController.js
├── models
│ ├── Commnet.js
│ ├── User.js
│ └── Video.js
├── routers
│ ├── globalRouter.js
│ ├── userRouter.js
│ └── videoRouter.js
├── views
│ ├── layouts
│ │ └── main.pug
│ ├── mixins
│ │ └── videoBlock.pug
│ ├── partials
│ │ ├── footer.pug
│ │ ├── header.pug
│ │ └── socialLogin.pug
│ ├── changePassword.pug
│ ├── deleteVideo.pug
│ ├── editProfile.pug
│ ├── editVideo.pug
│ ├── home.pug
│ ├── join.pug
│ ├── login.pug
│ ├── logout.pug
│ ├── search.pug
│ ├── upload.pug
│ ├── userDetail.pug
│ └── videoDetail.pug
├── app.js
├── babel.config.json
├── db.js
├── init.js
├── middlewares.js
├── package.json
├── package-lock.json
├── webpack.config.js
├── routes.js
├── passport.js
├── .eslintrc.js
├── .env
└── .gitigonore

```

## To Do

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [x] Upload
- [x] Video Detail
- [x] Edit Video
- [x] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Save video files in S3

## Run

```

$ npm run dev:server
$ npm run dev:assets

```

```

```
