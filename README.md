# Intube

## Technologies

ES6, NodeJS(Express), MongoDB(mongoose), Webpack, Pug, Scss

## Features

- [x] Video Upload/ Delete/ Search
- [x] Github Login
<!-- - [ ] Kakao Login -->

<!-- ## Deploy

- Heroku -->

## Structure

```
INTUBE
├── assets
│   ├── js
│   └── scss
│       ├── config
│       ├── pages
│       ├── partials
│       ├── main.scss
│       └── styles.scss
├── controller
│   ├── userController.js
│   └── videoController.js
├── models
│   ├── Commnet.js
│   ├── User.js
│   └── Video.js
├── routers
│   ├── globalRouter.js
│   ├── userRouter.js
│   └── videoRouter.js
├── views
│   ├── layouts
│   │   └── main.pug
│   ├── mixins
│   │   └── videoBlock.pug
│   ├── partials
│   │   ├── footer.pug
│   │   ├── header.pug
│   │   └── socialLogin.pug
│   ├── changePassword.pug
│   ├── deleteVideo.pug
│   ├── editProfile.pug
│   ├── editVideo.pug
│   ├── home.pug
│   ├── join.pug
│   ├── login.pug
│   ├── logout.pug
│   ├── search.pug
│   ├── upload.pug
│   ├── userDetail.pug
│   └── videoDetail.pug
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

## Pages

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [x] Upload
- [x] Video Detail
- [x] Edit Video
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password

## Run

```
$ npm run dev:server
$ npm run dev:assets
```
