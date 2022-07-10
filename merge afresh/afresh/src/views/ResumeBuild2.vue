<template>

    <body bgcolor='F0F7FF'>
    <div class='container'>
      <div class='box1'>
        <img class="logo" src="../assets/afresh_logo_blue.png"/>
        <div class="boxwithin">
          <div class="navbar">
            <img class="icon" src="../assets/home.jpeg">
            <span class="nav">Home</span>
          </div>
          <div class="navbar">
            <img class="icon" src="../assets/discover.jpeg">
            <span class="nav">Discover</span>
          </div>
          <div class="navbar">
            <img class="icon" src="../assets/career.jpeg">
            <span class="nav-active">Career</span>
          </div>
          <div class="navbar">
            <img class="icon" src="../assets/home.jpeg">
            <span class="nav">Settings</span>
          </div>
          <div class="signout">
            <img class="icon" src="../assets/signout.png">
            <span class="nav" style="color:red;">Sign Out</span>
          </div>
        </div>
      </div>
        

      <div class='box2'>
        <div class="wrap">
          <h1 class="page"> Resume Builder</h1>
        </div>
        <img class="resumenumber" src="../assets/resumenum3.jpeg">
        <h2 class="title"> Select a Template</h2>
        <ul class="cards">
            <li>
                <img class="image" src="../assets/template1.png">
            </li>
  
            <li>
                <img class="image" src="../assets/template7.png">
            </li>
  
            <li>
                <img class="image" src="../assets/template8.png">
            </li>
  
            <li>
                <img class="image" src="../assets/template2.png">
            </li>
  
  
            <li>
                <img class="image" src="../assets/template3.png">
            </li>
  
            <li>
                <img class="image" src="../assets/template4.png">
            </li>
  
            <li>
                <img class="image" src="../assets/template5.png">
            </li>
  
            <li>
              <img class="image" src="../assets/template6.png">
            </li>
          </ul>
        <div class="button">
            <button class="submit"> Download Resume</button>
        </div>
      </div>

      <div class='box4'>
        <img style="width:10vw; padding-top:10px;" src="../assets/avatar.jpeg">
    </div>
    </div>
    </body> 
</template> 

<script>
export default {
    name: 'ResumeBuild2'
}
</script>


    <style>
        .container{
          display:flex;
          align-items: stretch;
        }

        .container div {
          padding: 10px;
        }

        .box1 {
          flex:1;
        }

        .box2 {
          flex:5;
        }

        .box3 {
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

        .page{
            font-family: Arial, Helvetica, sans-serif;
            margin: 5px;
            font-weight: 700;
        }

        .title{
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 25vw;
            font-weight: 700;
        }

        .resumenumber {
            width:45vw;
            padding-left: 10vw;
        } 

        .button {
            margin-left: 24vw;
        }

        .submit {
            display: flex;
            background-color:rgb(82,133,242);
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 4px 0 rgba(92, 92, 92, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
          gap: 1.5vw;
          padding-top: 20px;
          padding-left: 0;
          margin-top: 5px;
          list-style-type: none;
          font-size: 20px;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        }

        .image {
          width: 15vw;
          margin: 0;
          padding:0;
        }

    </style>
