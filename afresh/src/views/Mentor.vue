
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
        <div class="searchbar">
            <input
              type="search"
              aria-label="Search"
              name="search"
              class="searchTerm"
              placeholder="Search for Courses"
            />
            <button type="submit" class="searchButton">Go!</button>
        </div>
        <button class="allmentors"> All Mentors </button>
        <div class="checkbox1">
            <p class="checkboxtitle">Tags</p>
            <hr/>
            <form class="check">
                <input type="checkbox" value="BM">
                <label for="BM"> Business Mentor</label><br>
                <input type="checkbox" value="C">
                <label for="C"> C-level Executive</label><br>
                <input type="checkbox" value="TM">
                <label for="TM"> Technical Mentor</label><br>
                <input type="checkbox" value="EA">
                <label for="EA"> Environmental Advocate</label><br>
                <input type="checkbox" value="CG">
                <label for="CG"> Career Guidance</label><br>
                <input type="checkbox" value="NM">
                <label for="NM"> Networking Mentor</label><br>
            </form>
        </div>

        <div class="checkbox1">
            <p class="checkboxtitle">Industry</p>
            <hr/>
            <form class="check">
                <input type="checkbox">
                <label> Information Technology</label><br>
                <input type="checkbox">
                <label> Health Care</label><br>
                <input type="checkbox">
                <label> Finance</label><br>
                <input type="checkbox">
                <label> Consumer Essential Goods</label><br>
                <input type="checkbox">
                <label> Communication Service</label><br>
                <input type="checkbox">
                <label> Industrials</label><br>
                <input type="checkbox">
                <label> Energy</label><br>
                <input type="checkbox">
                <label> Utilities</label><br>
                <input type="checkbox">
                <label> Real Estate</label><br>
                <input type="checkbox">
                <label> Materials</label><br>
                <input type="checkbox">
                <label> Others</label><br>
            </form>
        </div>

      </div>

      <div class='box3'>
        <h2 class="page"> afresh Mentorship Programme</h2>
        <div class="description">
            <p style="margin:0;"> The mentorship program allows you to network with industry experts and business executives to get a better understanding of your selected industry and the desirable skills to enter it. Start connecting with a mentor today!</p>
        </div>
        <div>
            <ul class="cards">
                <li>
                  <div  class="card">
                    <div class="image">
                      <img class="stock" src="src/assets/dudea.png">
                    </div>
                    <div class="description2">
                      <h4 class="name"> Kevin M Howard</h4>
                      <p class="role"> Real Estate Consultant </p>
                      <a>
                        <button class="role2">Career Guidance</button>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                    <div  class="card">
                      <div class="image">
                        <img class="stock" src="src/assets/dudeb.png">
                      </div>
                      <div class="description2">
                        <h4 class="name"> Ryan K Soares</h4>
                        <p class="role"> Head of Product at Pear Co. </p>
                        <a>
                          <button class="role2">C-Level Executive</button>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div  class="card">
                      <div class="image">
                        <img class="stock" src="src/assets/dudec.png">
                      </div>
                      <div class="description2">
                        <h4 class="name"> Jeffrey C Young</h4>
                        <p class="role">Senior Materials Engineer, Terra </p>
                        <a>
                          <button class="role2">Technical Mentor</button>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div  class="card">
                      <div class="image">
                        <img class="stock" src="src/assets/duded.png">
                      </div>
                      <div class="description2">
                        <h4 class="name"> Gerald Soh</h4>
                        <p class="role"> Product Manager at Beta </p>
                        <a>
                          <button class="role2">Business Mentor</button>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div  class="card">
                      <div class="image">
                        <img class="stock" src="src/assets/dudef.png">
                      </div>
                      <div class="description2">
                        <h4 class="name"> Robert Williams</h4>
                        <p class="role"> Business Dev. Executive, AHQ </p>
                        <a>
                          <button class="role2">Business Mentor</button>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div  class="card">
                      <div class="image">
                        <img class="stock" src="src/assets/dudeg.png">
                      </div>
                      <div class="description2">
                        <h4 class="name"> Sarah Tan</h4>
                        <p class="role"> Senior Software Engineer, Luna </p>
                        <a>
                          <button class="role2">Technical Mentor</button>
                        </a>
                      </div>
                    </div>
                  </li>
              </ul>
        </div>
      </div>
  </div>
  </body>

</template>

<script>
export default {
    name: 'Mentor'
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
          flex:1.2;
        }

        .box3 {
          flex:4;
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
            font-size: x-large;
            color:rgb(85, 85, 85);
        }

        .resumenumber {
            width:45vw;
            padding-left: 10vw;
        }

        .check, .checkboxtitle {
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
        }

        .check {
            font-size: small;
        }

        .description {
            background-color: white;
            box-shadow: 0 4px 4px 0 rgba(92, 92, 92, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
            border-radius: 10px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin-top: 10px;
            font-size: small;
            margin-bottom:0px;
        }

        .checkboxtitle {
            margin-bottom: 0;
        }

        .allmentors {
            margin-left: 10px;
            padding: 10px 68px;
            background-color: rgb(82,133,242);
            color: white;
            border: none;
            border-radius: 7px;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        .searchButton {
          background-color: rgb(82,133,242);
          color: white;
          border: none;
          border-radius: 7px;
          padding: 3px 5px;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
          gap: 2vw;
          padding-top: 0;
          padding-left: 0;
          margin-top: 5px;
          list-style-type: none;
          font-size: 20px;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        }


        .card {
          position: relative;
          display: block;
          height: 30vh;
          box-shadow: 0 4px 4px 0 rgba(92, 92, 92, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
          border-radius: 5px;
          overflow: hidden;
          text-decoration: none;
          background: white;
        }

        .stock {
          width: 5vw;
        
        }

        .image {
            text-align: center;
        }

        .description2 {
          position: relative;
          padding: 5px;
        }

        .name {
            font-size: small;
            text-align: center;
            margin: 0px;
        }

        .role {
            font-size: small;
            text-align: center;
            margin: 0px;
            padding: 0px;
            margin-bottom: 5px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .role2 {
          display: flex;
          background-color:rgb(82,133,242);
          color: white;
          border: none;
          margin: auto;
          padding: 2px 8px;
          text-align: center;
          align-items: center;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

    </style>