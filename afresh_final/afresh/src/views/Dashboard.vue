
<template>
    <div class="background">
        <div class="sidebar">
            <img style="height:auto; width:200px; margin-top:15px; margin-bottom:70px" src="../assets/logo.png" alt="logo">
            <p class="nav-label selected">
                <img class='icon' src="../assets/home.png">
                Home
            </p>
            <p class="nav-label">
                <img class='icon' src="../assets/compass.png">
                Discover
            </p>
            <p class="nav-label">
                <img class='icon' src="../assets/career.png">
                Careers
            </p>
            <p class="nav-label">
                <img class='icon' src="../assets/home.png">
                Settings
            </p>
        </div>
        <div class="main">
            <input class="search-bar" type="search" placeholder="Enter Search Term…" />
            <div class="content">
                <div class="grid-item-1">
                    <div class="banner">
                        Welcome back, {{ name }}
                        <img style="height:175px; position: absolute; top:15%; left:55%" src="../assets/human.png" alt="">
                    </div>
                </div>
                <div class="grid-item-2">
                    <div class="recommend">
                        <div class="title">
                            <span>Reintegrate with Ease!</span>
                            <span style="color:#0077FF; cursor:pointer;margin-left:auto">View all</span>
                        </div>
                        <div class="cell">
                            <img class="mini-view" src="../assets/singpass.png" alt="">
                            <div style="padding-left:10px">
                                <p style="font-weight:bold; margin:0px">Singpass Feature Updates</p>
                                <p style="font-size:10px; color:#8A8A8A">Explore new features on Singpass and refresh your memory with this short tutorial! New features include accessing CPF, HDB and signing digital documents with QR Code. </p>
                            </div>
                        </div>
                        <div class="cell">
                            <img class="mini-view" src="../assets/part-time.png" alt="">
                            <div style="padding-left:10px">
                                <p style="font-weight:bold; margin:0px">All about Gigs!</p>
                                <p style="font-size:10px; color:#8A8A8A">The gig economy has been on the rise in Singapore since 2020. Learn the basics of being a gig worker and earn with Grab, Foodpanda and Gojek. </p>
                            </div>
                        </div>
                        <div class="cell" style="border-width: 0px">
                            <img class="mini-view" src="../assets/flats.png" alt="">
                            <div style="padding-left:10px">
                                <p style="font-weight:bold; margin:0px">BTO Basics</p>
                                <p style="font-size:10px; color:#8A8A8A">Want to buy a BTO flat and don’t know where to start? This article is the comprehensive guide for BTO application so that you can own a flat!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item-3">
                    <div class="progress">
                        <div class="title">
                            <span>Completion Progress</span>
                        </div>
                        <div class="progress-entry">
                            <p><strong>Int. Data Science<br><span style="font-size:13px; color:#8A8A8A">Chapter 3</span></strong></p>
                            <p style="color:#DED500; margin-left:auto; padding-top:10px; font-weight:bold; font-size:13px">75%</p>
                        </div>
                        <div class="progress-entry">
                            <p><strong>Python Fund.<br><span style="font-size:13px; color:#8A8A8A">Chapter 5</span></strong></p>
                            <p style="color:#4BC500; margin-left:auto; padding-top:10px; font-weight:bold; font-size:13px">91%</p>
                        </div>
                        <div class="progress-entry">
                            <p><strong>A lvl Math<br><span style="font-size:13px; color:#8A8A8A">Chapter 4</span></strong></p>
                            <p style="color:#FF0000; margin-left:auto; padding-top:10px; font-weight:bold; font-size:13px">25%</p>
                        </div>
                        <div class="progress-entry">
                            <p><strong>Int. English<br><span style="font-size:13px; color:#8A8A8A">Chapter 7</span></strong></p>
                            <p style="color:#4BC500; margin-left:auto; padding-top:10px; font-weight:bold; font-size:13px">96%</p>
                        </div>
                    </div>
                </div>
                <div class="grid-item-4">
                    <div class="notification">
                        <div class="title">
                            <span>Notifications</span>
                            <span style="color:#0077FF; cursor:pointer;margin-left:auto">View all</span>
                        </div>
                        <div class="message">
                            <p style="font-weight:bold; font-size:10px; color:#8A8A8A; margin:0px;">Introduction to Data Science Course Chapter 3 with Mark Lee is starting in 30 minutes. </p>
                            <p style="font-size:10px; color:#8A8A8A">Click here to access the zoom link: <span style="color:#0077FF; cursor:pointer;">tinyurl.com/afresh2743E</span></p>
                        </div>
                        <div class="message">
                            <p style="font-weight:bold; font-size:10px; color:#8A8A8A; margin:0px;">You may have missed: </p>
                            <p style="font-size:10px; color:#8A8A8A">Are NFTs a Scam? Learn about Blockchain Technology. Sign Up here:<span style="color:#0077FF; cursor:pointer;">tinyurl.com/afresh1312G</span></p>
                        </div>
                        <div class="message">
                            <p style="font-weight:bold; font-size:10px; color:#8A8A8A; margin:0px;">Want to buy a BTO flat and don’t know where to start? </p>
                            <p style="font-size:10px; color:#8A8A8A"><span style="color:#0077FF; cursor:pointer; font-weight:bold">This article</span> is the comprehensive guide for BTO application so that you can own a flat!</p>
                        </div>
                    </div>
                </div>
                <div class="grid-item-5">
                    <div class="certifications">
                        <div class="title" style="border:0">
                            <span>Certifications</span>
                        </div>
                        <div class="cert">
                            <img class="mini-view" src="../assets/linkedin.png" alt="">
                            <div style="padding-left:10px">
                                <p style="font-weight:bold; margin:0px">LinkedIn</p>
                                <p style="font-size:10px; color:#8A8A8A; font-weight:bold">Microsoft Excel (Skill Assessment) </p>
                            </div>
                        </div>
                        <div class="cert">
                            <img class="mini-view" src="../assets/hackerrank.png" alt="">
                            <div style="padding-left:10px">
                                <p style="font-weight:bold; margin:0px">Hackerrank</p>
                                <p style="font-size:10px; color:#8A8A8A; font-weight:bold">Python Programming basics </p>
                            </div>
                        </div>
                        <div class="cert">
                            <img class="mini-view" src="../assets/linkedin.png" alt="">
                            <div style="padding-left:10px">
                                <p style="font-weight:bold; margin:0px">LinkedIn</p>
                                <p style="font-size:10px; color:#8A8A8A; font-weight:bold">Microsoft Powerpoint (Skill Assessment) </p>
                            </div>
                        </div>
                        <div class="cert">
                            <img class="mini-view" src="../assets/google.png" alt="">
                            <div style="padding-left:10px">
                                <p style="font-weight:bold; margin:0px">Google</p>
                                <p style="font-size:10px; color:#8A8A8A; font-weight:bold">Intro. to Google Drive </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tracker">
            <div class="avatar">
                <img style="height:40px;" src="../assets/avatar.png">
                Elmo 
            </div>
            <div style="display: flex; flex-direction: column; margin-bottom:10px">
                <p style="display:flex; flex-direction: row">
                    <span style="font-size:17px; font-weight:bold">Upcoming Activities</span>
                    <span style="margin-left:auto; margin-top:2px; color:#0077FF; cursor: pointer">see all</span>
                </p>
            </div>
            <div style="display: flex; flex-direction:column">
                <div class="activity">
                    <div id="circle">10</div>
                    <div style="display:flex; flex-direction:column; text-align:left">
                        <p style="font-size:15px; font-weight:bold; margin:0px">Introduction to Data science</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A; margin:0px">10th July 2022</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A">Virtual(Zoom)</p>
                    </div>
                </div>
                <div class="activity">
                    <div id="circle">12</div>
                    <div style="display:flex; flex-direction:column; text-align:left">
                        <p style="font-size:15px; font-weight:bold; margin:0px">Python fundamentals</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A; margin:0px">12th July 2022</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A">Virtual(Zoom)</p>
                    </div>
                </div>
                <div class="activity">
                    <div id="circle">17</div>
                    <div style="display:flex; flex-direction:column; text-align:left">
                        <p style="font-size:15px; font-weight:bold; margin:0px">Introduction to film</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A; margin:0px">17th July 2022</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A">Virtual(Zoom)</p>
                    </div>
                </div>
                <div class="activity">
                    <div id="circle">22</div>
                    <div style="display:flex; flex-direction:column; text-align:left">
                        <p style="font-size:15px; font-weight:bold; margin:0px">Technical Writing</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A; margin:0px">22th July 2022</p>
                        <p style="font-size:12px; font-weight:bold; color:#8A8A8A">Sengkang Community Centre</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashBoard',
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

.main {
    width: 59%;
    /* background-color: lightpink; */
    text-align: left;
}

.search-bar{
    margin-top: 30px;
    width: 420px;
    border-radius: 30px;
    border-width: 0px;
    background: url('../assets/search.png') no-repeat scroll 7px 7px;
    background-size: 18px;
    padding-left:30px;
    background-color: white;
}

.content {
    display: grid;
}

.grid-item-1 {
    grid-column: 1 / 3;
    margin-top: 30px;
}

.banner {
    height: 140px;
    background-color: #82ABDA;
    margin-right: 30px;
    font-size: 35px;
    font-family: 'open-sans';
    font-weight: bold;
    color: white;
    padding-left: 30px;
    padding-top: 20px;
    border-radius: 20px;
}

.recommend {
    height: 295px;
    background-color: white;
    margin-top: 20px;
    width: 380px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 15px;
    padding-left: 25px;
    padding-right: 30px;
}

.notification {
    height: 280px;
    background-color: white;
    margin-top: 20px;
    width: 380px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 15px;
    padding-left: 25px;
    padding-right: 30px;
    margin-bottom: 40px;
}

.title{
    font-family:'open-sans'; 
    font-size:15px; 
    font-weight:bold; 
    display:flex; 
    padding-bottom:10px;
    border-bottom: 2px solid #e0dfdf;
}

.mini-view {
    height: 35px;
}

.cell{
    font-family:'open-sans'; 
    font-size: 15px;
    padding-bottom:10px;
    border-bottom: 2px solid #e0dfdf;
    padding-top: 7px;
    display: flex;
    flex-direction: row;
}

.cert{
    font-family:'open-sans'; 
    font-size: 15px;
    padding-bottom:10px;
    padding-top: 7px;
    display: flex;
    flex-direction: row;
    margin-bottom: 2px;
}

.progress {
    width: 250px;
    height: 296px;
    background-color: white;
    margin-top: 19px;
    /* margin-right: 70px; */
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 15px;
    padding-left: 25px;
    padding-right: 30px;
}

.progress-entry {
    font-family:'open-sans'; 
    font-size: 15px;
    padding-top: 7px;
    display: flex;
    flex-direction: row;
}

.message {
    background-color: #F0F7FF;
    margin-top: 10px;
    border-radius: 7px;
    padding: 10px;
}

.certifications {
    width: 250px;
    height: 282px;
    background-color: white;
    margin-top: 19px;
    /* margin-right: 70px; */
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 15px;
    padding-left: 25px;
    padding-right: 30px;
}

.tracker {
    background-color: white;
    width:25%;
    /* flex-grow: 1;s */
    padding: 20px;
    border-top-left-radius:30px;
    border-bottom-left-radius:30px;
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
}

.activity {
    background-color: #F0F7FF;
    width: 100%;
    font-family: 'open-sans';
    padding: 10px;
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 21px;
}

#circle {
    width: 40px;
    height: 40px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    background: #0077FF;
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-right: 7px;
    margin-top: 7px;
}
</style>
