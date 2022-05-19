const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html>
  <head>
      <title>Responsive Website in HTML, CSS and Bootstrap</title>
      <style>
      *{
      margin: 0;
      padding: 0;
  }
  .header
  {
      height: 100vh;
  }
  .navbar-style
  {
      box-shadow:0 5px 10px #efefef;
      text-transform: uppercase;
  }
  .logo
  {
      height: 48px;
      padding: 2px 10px;
  }
  .icon-bar
  {
      background: darkorange;
  }
  
  li a
  {
      color : #333;
  }
  .big-text
  {
      margin: 20px 0;
      color: darkorange;
  }
  
  a.btn
  {
      margin: 30px 10px;
      width: 150px;
      padding: 10px;
      border-radius: 20px;
  }
  
  /*a.btn-first
  {
      background-color: darkorange;
      color: #fff;
  }*/
  
  a.btn-first
  {
      background: transparent;
      border: 1px solid darkorange;
      color: #333;
  }
  
  a.btn:hover
  {
      background: darkorange;
      border: none;
      color: #fff;
      box-shadow: 5px 5px 10px #999;
      transition: 0.3s;
  }
  .banner-info, .banner-image
  {
      margin: 30px 0;
  }
  
  
  
  
      </style>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>
  
  <body>
      <header class"header">
      <nav class="navbar navbar-style">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#micon">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span> 
                  <span class="icon-bar"></span> 
                  </button>
              
              <a href=""><img class="logo" src="/logo.jpg"></a>
              </div>
              <div class="collapse navbar-collapse" id="micon">
              <ul class="nav navbar-nav navbar-right">
              <li> <a href="">Home</a></li>
              <li> <a href="">Admission</a></li>
              <li> <a href="">Placement</a></li>
              <li> <a href="">Gallery</a></li>
              <li> <a href="">Contact Us</a></li>
              </ul>
              </div>
          </div>	
      </nav>
      
      <div class="container">
      <div class="row">
          <div class="col-sm-6 banner-info">
              <h1 class="big-text">Smt. Kashibai Navale College of Engineering</h1>
              <h2 class="big-text">Vadgaon-411046</h2>
              <p>Smt. Kashibai Navale College Engineering (SKNCOE) is private unaided institution that was established in the year 2001.</p>
              <a class="btn btn-first" href="#">Admission</a>
              <a class="btn btn-first" href="#">Contact us</a>
          </div>	
          <div class="col-sm-6 banner-image">
          <img src="/image.jpg" class="img-responsive">
          
          </div>
      </div>
      </div>
      </header>
  
  
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});