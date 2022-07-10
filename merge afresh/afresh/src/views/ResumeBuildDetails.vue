
<template>
    <div class="background">
        <div class="avatar">
            <img style="height:40px;" src="../assets/avatar.png">
            Elmo 
        </div>
        <div class="sidebar">
            <img style="height:auto; width:200px; margin-top:15px; margin-bottom:70px" src="../assets/logo.png" alt="logo">
            <p class="nav-label">
                <img class='icon' src="../assets/home.png">
                Home
            </p>
            <p class="nav-label">
                <img class='icon' src="../assets/compass.png">
                Discover
            </p>
            <p class="nav-label selected">
                <img class='icon' src="../assets/career.png">
                Careers
            </p>
            <p class="nav-label">
                <img class='icon' src="../assets/home.png">
                Settings
            </p>
        </div>
        <div>
            <div>
                <h1 style="text-align:left;margin-top:40px;margin-left:50px">Resume Builder</h1>
            </div>
            <img style="width:550px;margin-left:130px;margin-bottom:20px" src="../assets/progress_bar.jpg">
            <div style="display:flex; flex-direction:column; margin-left:132px">
                <div class="elab-box">
                    <img style="width:25px;margin-left:20px;margin-top:20px" src="../assets/tool.png">
                    <p style="margin-left:20px;margin-top:10px">What do you want to achieve with your resume?</p>
                    <input style="width:92%;margin-left:4%;border-radius:0px;height:80px" type="text">
                </div>
                <div class="normal-box">
                    <div style="display:flex;flex-direction:row:">
                        <img style="width:25px;height:25px;margin-left:20px;margin-top:20px" src="../assets/tool.png">
                        <p class="title">Work Experience</p>
                    </div>
                    <div style="display:flex;flex-direction:row:">
                        <p style="margin-left:20px;margin-top:10px">Include all relevant working experiences here</p>
                        <p style="margin-left:auto;margin-top:10px;margin-right:20px;font-size:16px">+</p>
                    </div>
                </div>
                <div class="normal-box">
                    <div style="display:flex;flex-direction:row:">
                        <img style="width:25px;height:25px;margin-left:20px;margin-top:20px" src="../assets/tool.png">
                        <p class="title">Education Experience</p>
                    </div>
                    <div style="display:flex;flex-direction:row:">
                        <p style="margin-left:20px;margin-top:10px">Include all education and certifications here</p>
                        <p style="margin-left:auto;margin-top:10px;margin-right:20px;font-size:16px">+</p>
                    </div>
                </div>
                <div class="normal-box">
                    <div style="display:flex;flex-direction:row:">
                        <img style="width:25px;height:25px;margin-left:20px;margin-top:20px" src="../assets/tool.png">
                        <p class="title">Interest</p>
                    </div>
                    <div style="display:flex;flex-direction:row:">
                        <p style="margin-left:20px;margin-top:10px">Indicate interests and hobbies here.</p>
                        <p style="margin-left:auto;margin-top:10px;margin-right:20px;font-size:16px">+</p>
                    </div>
                </div>
            </div>
            <div class="button">
                <button  style="cursor:pointer" @click="$router.push('/resumebuild2')" class="submit"> Next Step</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumeBuildDetails',
    data() {
        return {
            name: 'Elmo'
        }
    }
}
</script>

<style scoped>
.background {
    background-color: #F0F7FF;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.icon {
    color:rgba(171,171,171,0.8); 
    height:auto; 
    width:18px; 
    padding-bottom:2px;
    margin-right: 3px;
}

.sidebar {
    width: 24%;
    display: flex;
    flex-direction: column;
}

.nav-label {
    font-size: 20px;
    font-weight: bold;
    font-family: "open-sans";
    color: #8a8a8a;
    margin-bottom: 23px;
    cursor: pointer;
}

.selected {
    color: #0077FF;
    font-size: 22px;
}

.elab-box {
    width: 100%;
    height: 190px;
    background-color: #FFFDFD;
    text-align: left;
    border-radius: 10px;
    border-width: 0px;
    box-shadow: 2px 5px 3px 1px rgba(171,171,171,0.8);
    margin-bottom: 25px;
}

.normal-box {
    width: 100%;
    height: 90px;
    background-color: #FFFDFD;
    text-align: left;
    border-radius: 10px;
    border-width: 0px;
    box-shadow: 2px 5px 3px 1px rgba(171,171,171,0.8);
    margin-bottom: 25px;
}

.title {
    display: inline-block;
    padding-top: 23px;
    padding-left: 17px;
    font-family: "open-sans";
    font-weight: bold;
    font-size: 20px;
}

.submit {
    display: flex;
    background-color:rgb(82,133,242);
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 4px 0 rgba(92, 92, 92, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
    font-family: "open-sans";
    margin-left:50%;
}

.avatar {
    background-color:#F0F7FF;
    color: black;
    width: 150px;
    height: 50px;
    margin-left: 40%;
    margin-bottom: 13px;
    /* margin-top: 8%; */
    font-weight: bold;
    border-radius: 10px;
    padding-top: 5px;
    position: absolute;
    top: 20px;
    left: 550px;
}
</style>
