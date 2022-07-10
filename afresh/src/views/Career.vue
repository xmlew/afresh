<template> 
  <body bgcolor='F0F7FF'>
    <div class='container'>
      <div class='box1'>
        <img class="logo" src="src/assets/afresh_logo_blue.png"/>
        <div class="boxwithin">
          <div class="navbar">
            <img class="icon" src="src/assets/home.jpeg">
            <span class="nav">Home</span>
          </div>
          <div class="navbar">
            <img class="icon" src="src/assets/discover.jpeg">
            <span class="nav">Discover</span>
          </div>
          <div class="navbar">
            <img class="icon" src="src/assets/career.jpeg">
            <span class="nav-active">Career</span>
          </div>
          <div class="navbar">
            <img class="icon" src="src/assets/home.jpeg">
            <span class="nav">Settings</span>
          </div>
          <div class="signout">
            <img class="icon" src="src/assets/signout.png">
            <span class="nav" style="color:red;">Sign Out</span>
          </div>
        </div>
      </div>
        

      <div class='box2'>
        <ul class="cards">
          <li>
            <div class="card">
                <div class="image" style="padding:0;">
                    <img class="stock" src="src/assets/career1.png">
                </div>
                <div class="text" style="padding:0;">
                    <p class="title">Career Support</p>
                    <p class="elaboration">Kickstart your career with our carefully curated Support Programs!</p>
                </div>
            </div>
          </li>
          <li>
            <div class="card">
                <div class="image" style="padding:0;">
                    <img class="stock" src="src/assets/resume.png">
                </div>
                <div class="text" style="padding:0;">
                    <p class="title">Resume builder</p>
                    <p class="elaboration">Accelerate your job hunting process with our tried and tested resume support tools!</p>
                </div>
            </div>
          </li>
        </ul>
      </div>

      <div class='box3'>
        <ul class="cards2">
            <li>
              <div class="card2">
                  <div class="card2box1" style="padding:0;">
                      <img class="stock2" src="src/assets/zen.png">
                  </div>
                  <div class="card2box2" style="padding:0;">
                      <p class="title2">View Job Listings</p>
                      <p class="elaboration2">Find the right job for you with our partnered organizations!</p>
                      <button class="learnmore">Learn More</button>
                    </div>
              </div>
            </li>
            <li>
                <div class="card2">
                    <div class="card2box1" style="padding:0;">
                        <img class="stock2" src="src/assets/step.png">
                    </div>
                    <div class="card2box2" style="padding:0;">
                        <p class="title2">Obtain Mentorship</p>
                        <p class="elaboration2">Gain meaningful insights into finding a job with our Mentorship platform, where we’ll link you up with career guidance specialists.</p>
                        <button class="learnmore">Learn More</button>
                      </div>
                </div>
              </li>
              <li>
                <div class="card2">
                    <div class="card2box1" style="padding:0;">
                        <img class="stock2" src="src/assets/resumenice.png">
                    </div>
                    <div class="card2box2" style="padding:0;">
                        <p class="title2">Autofill your Resume</p>
                        <p class="elaboration2">Fill up your details according to a form and we’ll autofill a Resume for you! You can always edit it if it’s not to your liking later.</p>
                        <button class="learnmore">Learn More</button>
                      </div>
                </div>
              </li>
              <li>
                <div class="card2">
                    <div class="card2box1" style="padding:0;">
                        <img class="stock2" src="src/assets/diy.png">
                    </div>
                    <div class="card2box2" style="padding:0;">
                        <p class="title2">Create your own Resume</p>
                        <p class="elaboration2">Find a resume template you like and fill up your relevant details! Create your custom headers or choose among our own.</p>
                        <button class="learnmore">Learn More</button>
                      </div>
                </div>
              </li>
          </ul>
      </div>

      <div class='box4'>
          <img style="width:10vw; padding-top:10px;" src="src/assets/avatar.jpeg">
      </div>
    </div>
  </body>

</template>

<script>
export default {
    name: 'Career'
}
</script>



<style>
    .container{
      display:flex;
      align-items: stretch;
    }

    .card2 {
        display:flex;
        height: 14.65vh;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 4px 4px 0 rgba(92, 92, 92, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
        text-decoration: none;
        background:#D7E3FB;
    }

    .card2box1 {
        flex: 1;
        text-align: center;
    }
    
    .card2box2 {
        flex: 5;
        margin-left: 10px;
    }

    .container div {
      padding: 10px;
    }

    .box1 {
      flex:1;
    }

    .box2 {
      flex:1;
    }
    
    .box3 {
      flex:3;
    }

    .box4 {
      flex:1;
    }


    .logo {
      width:15vw;
    }

    .icon {
      width: 1.7vw;
      float: left;
    }

    .nav {
      margin-top: 10px;
      padding-left: 10px;
      text-align: center;
      color: rgb(85, 85, 85);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .nav-active {
      margin-top: 10px;
      padding-left: 10px;
      text-align: center;
      color: #0077ff;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    .boxwithin{
      margin-left: 20px;
    }

    /* .navbar {
      position: fixed;
    } */

    .signout {
      margin-top: 40vh;
      position: fixed;
    }


    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
      gap: 1vw;
      padding-top: 50px;
      margin-left: auto;
      margin-top: 5px;
      list-style-type: none;
      font-size: 20px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    .cards2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
      gap: 1vw;
      padding-top: 50px;
      padding-left: 0;
      margin-left: auto;
      margin-top: 5px;
      list-style-type: none;
      font-size: 20px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    .card {
      position: relative;
      display: block;
      height: 35vh;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 4px 4px 0 rgba(92, 92, 92, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
      text-decoration: none;
      background:#D7E3FB;
    }

    .image {
      margin: 0;
      text-align: center;
    }

    .stock {
        width: 17vw;
    }

    .stock2 {
        width: 6vw;
    }

    .text{
        text-align: center;
    }

    .title{
        margin:0;
        font-size: medium;
    }

    .title2{
        margin:0;
        font-size: medium;
    }

    .elaboration{
        margin:0;
        font-size: small;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .elaboration2{
        margin:0;
        font-size: small;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .learnmore {
      display: flex;
      margin-left: auto;
      margin-top: 10px;
      background-color:rgb(85, 85, 85);
      color: white;
      border: none;
      padding: 5px 15px;
      border-radius: 5px;
      font-size: small;
    }


</style>
