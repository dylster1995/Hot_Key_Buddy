# Hot_Key_Buddy
BootCamp Project #3 - Hot Key Binding

## INTRODUCTION

write intro

![](insert image)

## INSTALLATION

You can start today by creating an account on our deployed website [here](insert link).

### TO RUN LOCALLY - to be updated
1. Clone/download the code in this repo
2. Navigate to the location of the code downloaded in your terminal
3. Rename ".env.EXAMPLE" to ".env"
4. Input your mySQL password in .env
5. Run query found in db/schema.sql in your mySQL shell
6. Run the following command in your terminal (make sure you're in the root directory of the application)
```git
npm i && npm start
```
7. Navigate to localhost:3001 in your browser 

## TECHNOLOGY
### MySQL

Our server uses mySQL database to store users' confidential credentials, drawings, and comments. The following schema is used to show how each model references one another.

![](./asset/schema.png)

### API?
Our drawing application is engineered with the Canvas API. Canvas provides a means for drawing graphics via JavaScript and the HTML canvas element. 
You can learn more about Canvas by reading this [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
The main drawing JavaScript functionality can be examined with the following code:
```javascript
function start(event) {  // activate drawing by listening to a mouseclick down
  is_drawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function draw(event) { // start drawing on your mouse's coordinate spaces
  if (is_drawing) {
    ctx.lineTo(getX(event), getY(event));
    ctx.strokeStyle = stroke_color;
    ctx.lineWidth = stroke_width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
  event.preventDefault();
}
```

### Tailwind CSS?
Tailwind CSS makes it quicker to write and maintain the code of our application. By using this utility-first framework, we were able to provide a polished user interface for our customers:

![](/asset/homepage.png)

### Sequelize and Express?
By using Sequelize ORM, we were able to consistently store data such as drawings and comments by updating queries, so our Express server can respond back to user's requests. Our social network service is entirely built on this stack to retrieve, store, and render data back to our client.

![](/asset/network.png)

## COLLABORATORS -TBD

[Brandon Villasenor](https://github.com/Nodnarbrones)

[John Lopez](https://github.com/Think-Again-Coder)

[Andy Liu](https://github.com/Tojomojo)

[Tyler Oats](https://github.com/Atlas548)

[Nhan Nguyen](https://github.com/nhanng19)

## Submission -TBD
This project was uploaded to GitHub at the following repository link:
[https://github.com/nhanng19/Draw.me](https://github.com/nhanng19/Draw.me)

Deployed Web Application Link: TBD
[https://draw-me.herokuapp.com/](https://draw-me.herokuapp.com/)
