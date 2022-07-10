<template>
  <div class="display">
    <div class="deco-col">
    </div>
    <div class="signup-col">
      <div class="signup-info">
        <p class="information">
        <img style="height:70px; width:70px" src="../assets/celebration.png" />
          <span class="message">
            Thank you for believing in us!
          </span><br>
        </p>
        <p class="help-text" ><a href="/login">Log in</a> now to start your journey!</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LogIn",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login(){
      // submit data
      this.email= '',
      this.password= ''
    }
  }
}
</script>

<style scoped>
.display {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}

.deco-col {
    width: 45%;
    /* background-color: #4169e1; */
    background-image: url("../assets/background.png");
    background-size: auto;
    /* text-align: center; */
}

.signup-col {
    width: 55%;
    display: flex;
    flex-direction: column;
    background-color: white;
    /* text-align: center; */
}

.signup-info {
  padding-left: 25%;
  padding-top: 100px;
  width: 75%;
}

.information {
    text-align: left;
    margin-bottom: 20px;
}

.message {
    margin-top:30px;
    display:inline-block;
    font-weight: bold; 
    font-size:24px; 
}

.label {
  text-align: left;
  font-size: 16px;
  color: black;
}

.input-box {
  height: 40px;
  width: 100%;
  font-size: 17px;
  border-radius: 0;
  margin-bottom: 15px;
}

.logo-img {
  position: absolute;
  left: 20px;
  top: 50px;
}

.logo-elab {
  position: absolute;
  left: 10%;
  top: 200px;
  font-size: 30px;
  color: white;
}

.required-field::after {
    content: "*";
    color: red;
}

.submit {
  width: 100%;
  margin-top: 20px;
  height: 40px;
  background-color: #4169e1;
  border-width: 0;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  box-shadow: 5px 5px 5px 2px rgba(65,105,225,0.2);
  margin-bottom: 5px;
  cursor: pointer;
}

.help-text {
  font-size: 12px;
  color: rgb(171, 171, 171);
}
</style>