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
            <span class="nav-active">Discover</span>
          </div>
          <div class="navbar">
            <img class="icon" src="src/assets/career.jpeg">
            <span class="nav">Career</span>
          </div>
          <div class="navbar">
            <img class="icon" src="src/assets/home.jpeg">
            <span class="nav">Settings</span>
          </div>
          <div class="signout">
            <img class="icon" src="src/assets/signout.png">
            <span class="nav" style="color:red";>Sign Out</span>
          </div>
        </div>
      </div>
        

      <div class='box2'>
        <div class="wrap">
          <form method="POST">
            <div class="searchbar">
              <input
                type="search"
                aria-label="Search"
                name="search"
                class="searchTerm"
                placeholder="Search for Courses"
              />
              <button type="submit" class="searchButton">Go!</button>

              <!-- <span>
                <img src="src/assets/avatar.jpeg" id="avatar">
              </span> -->
            </div>


          </form>


        </div>

      
        <img id="toggle" src="src/assets/toggle.jpeg">


        <ul class="cards">
          <li>
            <div  class="card">
              <div class="image">
                <img class="stock" src="src/assets/gig.jpeg">
              </div>
              <div class="description">
                <h4 class="title"> All about Gigs!</h4>
                <p class="elaboration"> Learn the basics of being a gig worker in this gig economy and earn with Grab, Foodpanda and Gojek. </p>
                <a>
                  <button class="viewmore">View More</button>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div  class="card">
              <div class="image">
                <img class="stock" src="src/assets/bto.png">
              </div>
              <div class="description">
                <h4 class="title"> BTO Basics</h4>
                <p class="elaboration"> Buying a flat shouldn’t be difficult! This comprehensive guide for BTO application teaches you how.</p>
                <a>
                  <button class="viewmore">View More</button>
                </a>
              </div>
            </div>
          </li>          
          <li>
            <div  class="card">
              <div class="image">
                <img class="stock" src="src/assets/nft.png">
              </div>
              <div class="description">
                <h4 class="title">Are NFTs a Scam?</h4>
                <p class="elaboration"> Cryptocurrencies and NFTs are becoming increasingly popular. Know all about it with this quick course.</p>
                <a>
                  <button class="viewmore">View More</button>
                </a>
              </div>
            </div>
          </li>   
          <li>
            <div  class="card">
              <div class="image">
                <img class="stock" src="src/assets/singpass1.png">
              </div>
              <div class="description">
                <h4 class="title"> Singpass Updates</h4>
                <p class="elaboration"> Explore new features on Singpass and refresh your memory with this guided tutorial!</p>
                <a>
                  <button class="viewmore">View More</button>
                </a>
              </div>
            </div>
          </li>                 
          <li>
            <div  class="card">
              <div class="image">
                <img class="stock" src="src/assets/taxes.png">
              </div>
              <div class="description">
                <h4 class="title">Managing Taxes 101</h4>
                <p class="elaboration"> Tax Management can be daunting at times. This course teaches you many tips and tricks for easy tax filing.</p>
                <a>
                  <button class="viewmore">View More</button>
                </a>
              </div>
            </div>
          </li>          
          <li>
            <div  class="card">
              <div class="image">
                <img class="stock" src="src/assets/office.png">
              </div>
              <div class="description">
                <h4 class="title">Microsoft Office!</h4>
                <p class="elaboration"> Probably the most used application in the world today, Microsoft Office is essential to the modern world.</p>
                <a>
                  <button class="viewmore">View More</button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
    name: 'Discover'
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

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
          gap: 2vw;
          padding-top: 0;
          padding-left: 0;
          list-style-type: none;
          font-size: 20px;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        }


        .card {
          position: relative;
          display: block;
          height: 50vh;
          border-radius: 5px;
          overflow: hidden;
          text-decoration: none;
          background: white;
        }

        .wrap {
          float: left;
        }

        .description {
          position: relative;
          padding: 5px;
        }
        
        .image {
          padding: 0px;
          align-items: center;
        }

        .title {
          font-size: medium;
          margin: 0;
        }

        .viewmore {
          display: flex;
          margin-left: auto;
          background-color:rgb(85, 85, 85);
          color: white;
          border: none;
          padding: 5px 15px;
          border-radius: 5px;
        }

        .elaboration {
          font-size: small;
          margin: 5px;
          margin-left: 0px;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        .stock {
          width: 22vw;
          height: 25vh;
          align-items: center;
          border-radius: 10px;
        }

        .searchButton {
          background-color: rgb(82,133,242);
          color: white;
          border: none;
          border-radius: 7px;
          padding: 3px;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        .searchTerm {
          width: 300px;
          height: 25px;
          border-radius: 5px;
          border: 0;
        }

        #toggle {
          width:60vw;
          padding-left: 10px;
        }

        #avatar {
          height: 40px;
          padding-left: 60vw;
        }



    </style>

  
