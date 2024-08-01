import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getFirestore, doc, updateDoc, getDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCEWW9CFzq7gr3oy0nynaiJ1oBpXZpNI0I",
  authDomain: "twhg-db.firebaseapp.com",
  projectId: "twhg-db",
  storageBucket: "twhg-db.appspot.com",
  messagingSenderId: "275846443952",
  appId: "1:275846443952:web:4f5ff88b8c29551d4c1c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

signInAnonymously(auth)
  .then((userCredential) => {
    console.log('User signed in:', userCredential.user);
  })
  .catch((error) => {
    console.error('Error signing in:', error.message);
  });



var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["121ac6c3-d66b-461b-acb6-9f41e7099f91","cefc04c5-2ce5-4143-885b-f43d3bdb2472","656aabd3-e5a6-4c74-bc5a-ba5adec478e8","ab37be27-c9cf-4d73-9003-38ccf16611c5","ea0253b9-607f-4d22-a5eb-42ee72a1997a","454ee94e-44af-424c-bcd0-d8d0ce99cac5","e3ac4e38-008f-451e-af5e-690a6706f6c9"],"propsByKey":{"121ac6c3-d66b-461b-acb6-9f41e7099f91":{"name":"blackCircle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MxjFeT_efWrbZHXdegsyV99WPOn30F45","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/121ac6c3-d66b-461b-acb6-9f41e7099f91.png"},"cefc04c5-2ce5-4143-885b-f43d3bdb2472":{"name":"redCircle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4wbwoH4OLH2Zwouicc0M0frJ.3UphTcv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/cefc04c5-2ce5-4143-885b-f43d3bdb2472.png"},"656aabd3-e5a6-4c74-bc5a-ba5adec478e8":{"name":"goldCircle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7dAnbQuNRMdF47URjwlwkwphAvzMmFa9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/656aabd3-e5a6-4c74-bc5a-ba5adec478e8.png"},"ab37be27-c9cf-4d73-9003-38ccf16611c5":{"name":"purpleCircle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ywMwa6.4i1jJV.UUwkfz1_KnudUFfmy9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ab37be27-c9cf-4d73-9003-38ccf16611c5.png"},"ea0253b9-607f-4d22-a5eb-42ee72a1997a":{"name":"innerRed","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wGjvGyQhYVzuN3C4DQ9k5V.CvVSXdOs6","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ea0253b9-607f-4d22-a5eb-42ee72a1997a.png"},"454ee94e-44af-424c-bcd0-d8d0ce99cac5":{"name":"midRed","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"1lt4xTC93UHGRLW_Z2vvweg7CtJP9hma","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/454ee94e-44af-424c-bcd0-d8d0ce99cac5.png"},"e3ac4e38-008f-451e-af5e-690a6706f6c9":{"name":"centerRed","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"xbUwlKhoSA6l0s4VVRsnvjh.G8X827Q_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e3ac4e38-008f-451e-af5e-690a6706f6c9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


// The World's Hardest Game Walmart Version
// Started November 2nd, 2021

// **To view level 7 directly, go to the bottom right corner of level select**
// **To go to the hidden level, touch the left wall of the leaderboard screen**

var leaderboardDates = ["","","","",""];
var leaderboardScores = [0,0,0,0,0];
const leaderboardDoc = doc(db, 'twhg', 'leaderboard');

function updateLeaderboard() {
  
  getDoc(leaderboardDoc).then((docSnap) => {
    if(docSnap.exists) {
      const sData = docSnap.data();
      console.log("pulled leaderboard:")
      console.log(sData)
      leaderboardDates = sData.dates;
      leaderboardScores = sData.scores;
    } else {
      console.log("leaderboard document doesn't exist!")
    }
  }).catch((err) => {
    console.error("Error getting document: "+err.message);
  })
  }

  // Listen to live updates from the database
  onSnapshot(leaderboardDoc, () => {
    updateLeaderboard();
  })


//global variables{
var gameStarted = false;
var loopCount = 0;
var level = 0;
var keyCount = 0;
var score = 0;
var deaths = 0;
var respawnX;
var respawnY;
var deathLoopCount = -50;
var hardModeOn = false;
var checkpointReached = false;
var eLevel;
var eSafe;
var totalLooped = 0;
var topScore = 0;
var negLoop = 0;
var backColor = rgb(180,180,255);
var textColor = 'black';
var titleColor = 'white';
var wallColor = 'navy';
var midColor = rgb(160,140,245);
var safeColor = 'lightgreen';
var switchColor = 'lightblue';
var playingSong = [false,false,false,false,false,false,false,false,false,false
,false,false,false,false,false,false,false,false,false,false,false,false];
var songColor = 'white';
var sTextColor = 'black';
var songsLoaded = false;
var introLevel = false;
var oneLoop=true;
//}

//sprites{
//credits sprites (14){
  var vertWall04 = createSprite(240,360,10,50);
  var horizWall04 = createSprite(310,335,150,10);
  vertWall04.shapeColor=horizWall04.shapeColor='navy';
  var back04 = createSprite(355,362.5,60,45);
  back04.shapeColor='lightblue';
  vertWall04.visible=horizWall04.visible=back04.visible=false;
//}
//endless level select sprites (94){
  var back94 = createSprite(215,250,60,50);
  var hardSkip94 = createSprite(75,250,120,50);
   back94.shapeColor=hardSkip94.shapeColor='lightblue'; 
var eLevel1Btn = createSprite(60,150,70,30);
var eLevel2Btn = createSprite(140,150,70,30);
var eLevel3Btn = createSprite(220,150,70,30);
var eLevel4Btn = createSprite(300,150,70,30);
var eLevel5Btn = createSprite(340,195,70,30);
var eLevel6Btn = createSprite(340,235,70,30);
var eLevel7Btn = createSprite(340,275,70,30);
var eLevel8Btn = createSprite(340,315,70,30);
var eLevel9Btn = createSprite(300,360,70,30);
var eLevel10Btn = createSprite(220,360,70,30);
var eLevel11Btn = createSprite(140,360,70,30);
var eLevel12Btn = createSprite(60,360,70,30);
eLevel1Btn.shapeColor = eLevel2Btn.shapeColor = eLevel3Btn.shapeColor = 
eLevel4Btn.shapeColor = eLevel5Btn.shapeColor = eLevel6Btn.shapeColor = 
eLevel7Btn.shapeColor = eLevel8Btn.shapeColor = eLevel9Btn.shapeColor = 
eLevel10Btn.shapeColor = eLevel11Btn.shapeColor = eLevel12Btn.shapeColor = 'lightGreen';

  back94.visible=eLevel1Btn.visible=eLevel2Btn.visible=eLevel3Btn.visible=eLevel4Btn.visible=
  eLevel5Btn.visible=eLevel6Btn.visible=eLevel7Btn.visible=eLevel8Btn.visible=eLevel9Btn.visible=
  eLevel10Btn.visible=eLevel11Btn.visible=eLevel12Btn.visible=hardSkip94.visible=false;
//}
//customization sprites (95){
  var back95 = createSprite(347.5,251.25,55,105);
  var reset95 = createSprite(45,251.25,40,60);
  var dark95 = createSprite(90,170,48,40);
  var  halloween95 = createSprite(160,170,48,40);
  var light95 = createSprite(230,170,48,40);
  var jungle95 = createSprite(300,170,48,40);
  var ocean95 = createSprite(90,335,48,40);
  var electric95 = createSprite(160,335,48,40);
  var desert95 = createSprite(230,335,48,40);
  var lava95 = createSprite(300,335,48,40);
  dark95.shapeColor=rgb(40,40,40);electric95.shapeColor='yellow';halloween95.shapeColor='orange';
  jungle95.shapeColor='darkgreen';ocean95.shapeColor=rgb(0,75,150);light95.shapeColor='white';
  back95.shapeColor='lightblue';reset95.shapeColor=rgb(140,140,215);desert95.shapeColor=rgb(194, 178, 128);
  lava95.shapeColor='red';
  back95.visible=dark95.visible=reset95.visible=electric95.visible=halloween95.visible=
  jungle95.visible=ocean95.visible=light95.visible=desert95.visible=lava95.visible=false;
//}
//hidden level sprites (96){
  var back96 = createSprite(355,211.25,60,80);
  var safe96 = createSprite(200, 211.25, 50, 50);
  back96.shapeColor='lightblue';safe96.shapeColor='lightgreen';
  back96.visible=safe96.visible=false;
    var keys96 = createGroup();
    for(var x=0;x<12;x++){
    keys96.add(createSprite(35+(x*30),60));
    keys96.add(createSprite(35+(x*30),90));
    keys96.add(createSprite(35+(x*30),120));
    keys96.add(createSprite(35+(x*30),150));
    keys96.add(createSprite(35+(x*30),270));
    keys96.add(createSprite(35+(x*30),300));
    keys96.add(createSprite(35+(x*30),330));
    keys96.add(createSprite(35+(x*30),360));
    }
    for(var x=0;x<5;x++){
      keys96.add(createSprite(35+(x*30),180));
      keys96.add(createSprite(35+(x*30),210));
      keys96.add(createSprite(35+(x*30),240));
    }
     for(var x=0;x<3;x++){
      keys96.add(createSprite(245+(x*30),180));
      keys96.add(createSprite(245+(x*30),210));
      keys96.add(createSprite(245+(x*30),240));
    }
    
    keys96.setAnimationEach('goldCircle');
    keys96.setVisibleEach(false);
    keys96.setScaleEach(0.2);
//}
//level 0 sprites{
var circle0Left = createSprite(25,50);var circle0Right = createSprite(375,50);
soloCircleSetup(circle0Left,"blackCircle",0.15);soloCircleSetup(circle0Right,"blackCircle",0.15);
var start0 = createSprite(200, 357.5, 180, 35);
start0.shapeColor='lightgreen';
var backTitle = createSprite(200,106,330,135);
backTitle.shapeColor=rgb(130,200,255);
var directions0 = createSprite(335, 325, 75, 100);
var levelSelect0 = createSprite(65, 325, 75, 100);
directions0.shapeColor = levelSelect0.shapeColor = 'lightblue';
var endlessMode = createSprite(65,230,75,70);
var hardMode = createSprite(335,230,75,70);
endlessMode.shapeColor='lightblue';
hardMode.shapeColor=rgb(255,160,160);
var wallMid0 = createSprite(200, 180, 400, 10);
var wallTop = createSprite(200, 0, 400, 75);
var wallLeft = createSprite(0, 200, 30, 400);
var wallBottom = createSprite(200, 400, 400, 30);
var wallRight = createSprite(400, 200, 30, 400);
wallTop.shapeColor = wallBottom.shapeColor =
wallRight.shapeColor = wallLeft.shapeColor = 
wallMid0.shapeColor = 'navy';
directions0.visible=levelSelect0.visible=endlessMode.visible=hardMode.visible=
start0.visible=wallMid0.visible=wallTop.visible=wallRight.visible=wallLeft.visible=
wallBottom.visible=backTitle.visible=false;
//}
//level 11 (directions) sprites{
var back01 = createSprite(90, 350, 130, 50);
back01.shapeColor='lightblue';
var safe01 = createSprite(35, 255, 40, 110);
var safe02 = createSprite(365, 255, 40, 110);
safe01.shapeColor=safe02.shapeColor='lightgreen';
var danger01 = createSprite(300, 300, 150, 60);
danger01.shapeColor='white';
var respawn01 = createSprite(160, 255, 30, 110);
respawn01.shapeColor = 'lightblue';
var key01 = createSprite(175, 255, 20, 20);
key01.setAnimation('goldCircle'); key01.scale=0.2;
key01.setCollider("circle");
var key02 = createSprite(285, 365, 20, 20);
key02.setAnimation('goldCircle'); key02.scale=0.2;
key02.setCollider("circle");
var key03 = createSprite(285, 145, 20, 20);
key03.setAnimation('goldCircle'); key03.scale=0.2;
key03.setCollider("circle");
var point01 = createSprite(115, 140, 20, 20);
point01.setAnimation('purpleCircle'); point01.scale=0.2;
point01.setCollider("circle");
var avoid01 = createSprite(230, 290, 20, 20);
avoid01.setAnimation('blackCircle'); avoid01.scale=0.15;
avoid01.setCollider("circle");
var avoid02 = createSprite(200, 300, 20, 20);
avoid02.setAnimation('blackCircle'); avoid02.scale=0.15;
avoid02.setCollider("circle");
var avoid03 = createSprite(70, 210, 20, 20);
avoid03.setAnimation('blackCircle'); avoid03.scale=0.15;
avoid03.setCollider("circle");
var wallMid01 = createSprite(200, 120, 400, 10);
wallMid01.shapeColor = 'navy';
var cornerWalls = createGroup();
cornerWalls.add(createSprite(135,160,240,80));
cornerWalls.add(createSprite(135,350,240,80));
cornerWalls.add(createSprite(350,160,70,80));
cornerWalls.add(createSprite(350,350,70,80));
var cornerWalls2 = createGroup();
cornerWalls2.add(createSprite(50,160,70,80));
cornerWalls2.add(createSprite(135,350,240,80));
cornerWalls2.add(createSprite(350,350,70,80));
cornerWalls2.add(createSprite(265,160,240,80));
cornerWalls.setVisibleEach(false);cornerWalls2.setVisibleEach(false);
cornerWalls.setColorEach('navy');cornerWalls2.setColorEach('navy');
var key04 = createSprite(285, 255, 20, 20);
key04.setAnimation('goldCircle'); key04.scale=0.2;
key04.setCollider("circle");
var key05 = createSprite(285, 365, 20, 20);
key05.setAnimation('goldCircle'); key05.scale=0.2;
key05.setCollider("circle");
var key06 = createSprite(115, 255, 20, 20);
key06.setAnimation('goldCircle'); key06.scale=0.2;
key06.setCollider("circle");
back01.visible = key01.visible = point01.visible = key02.visible=key03.visible=
key04.visible = key05.visible=key06.visible=
avoid01.visible = wallMid01.visible = danger01.visible = 
safe01.visible = safe02.visible = respawn01.visible = avoid02.visible=
avoid03.visible=false;
//}
//level 12 (level select) sprites{
var level1Btn = createSprite(100,170,70,30);
var level2Btn = createSprite(200,170,70,30);
var level3Btn = createSprite(300,170,70,30);
var level4Btn = createSprite(100,340,70,30);
var level5Btn = createSprite(200,340,70,30);
var level6Btn = createSprite(300,340,70,30);
level1Btn.shapeColor = level2Btn.shapeColor = level3Btn.shapeColor = 
level4Btn.shapeColor = level5Btn.shapeColor = level6Btn.shapeColor = 'lightgreen';

var back02 = createSprite(345,255,60,100);
back02.shapeColor='lightBlue'; 
var credits02 = createSprite(55,255,60,100);
credits02.shapeColor='lightBlue'; 
level1Btn.visible = level2Btn.visible = 
level3Btn.visible = level4Btn.visible = level5Btn.visible = 
level6Btn.visible = back02.visible = credits02.visible=false;

var main0 = createSprite(200,250,20,20);
main0.visible=false; main0.shapeColor='red';
//}
//level 13 (intro) sprites{
  var wallMidGroup03 = createGroup();
  wallMidGroup03.add(createSprite(200,90,400,130));
  wallMidGroup03.add(createSprite(200,320,400,150));
  wallMidGroup03.add(createSprite(200,155,175,50));
  wallMidGroup03.add(createSprite(200,245,175,50));
  
  wallMidGroup03.setVisibleEach(false);
  wallMidGroup03.setColorEach('navy');
  var safe031 = createSprite(64,200,98,90);
  var safe032 = createSprite(336,200,98,90);
  safe031.visible=safe032.visible=false;
  safe031.shapeColor=safe032.shapeColor='lightgreen';
  
  var black03 = createSprite(200,200,400,400);
  black03.visible=false; black03.shapeColor = 'black';
var main01 = createSprite(60,200,20,20);
main01.visible=false; main01.shapeColor='red';

//}
//endless mode intro sprites (98){
  var back98 = createSprite(345,265,60,50);
  var lSelect98 = createSprite(345,320,60,50);
  var scores98 = createSprite(55,265,60,50);
  var custom98 = createSprite(55,320,60,50);
  var startEndless = createSprite(200, 357.5, 180, 35);
  startEndless.shapeColor='lightgreen';
  var background98 = createSprite(200,180,310,110);
  background98.shapeColor=rgb(240,240,240);
  custom98.shapeColor=lSelect98.shapeColor='lightblue';
  back98.visible=startEndless.visible=background98.visible=
  scores98.visible=custom98.visible=lSelect98.visible=false;
//}
//endless mode leaderboard sprites (97){
  var back97 = createSprite(350,362.5,70,45);
  var wallMid97 = createSprite(200, 340, 400, 10);
  back97.shapeColor=scores98.shapeColor=back98.shapeColor='lightblue';
  wallMid97.shapeColor='navy';
  var background97 = createSprite(200,150,300,35);
  var background971 = createSprite(200,190,300,35);
  var background972 = createSprite(200,230,300,35);
  var background973 = createSprite(200,270,300,35);
  var background974 = createSprite(200,310,300,35);
  background97.shapeColor='gold';background971.shapeColor='silver';
  background972.shapeColor=rgb(176,141,87);background973.shapeColor=rgb(230,230,230);
  background974.shapeColor=rgb(230,230,230);
  back97.visible = wallMid97.visible=background97.visible=
  background971.visible=background972.visible=background973.visible=
  background974.visible=false;
//}
//endless mode sprites (99){
  var eSafe1 = createSprite(40,62,50,50);
  var eSafe2 = createSprite(360,62,50,50);
  var eSafe3 = createSprite(40,360,50,50);
  var eSafe4 = createSprite(360,360,50,50);
    eSafe1.shapeColor =  eSafe2.shapeColor = 
    eSafe3.shapeColor = eSafe4.shapeColor ='lightgreen';
  //eLevel 1{
  var eWall10 = createSprite(200,117,210,160);
  var eWall11 = createSprite(200,338,370,111);
  eWall10.shapeColor=eWall11.shapeColor='navy';
  var eAvoid10 = createGroup();
  var eAvoid11 = createGroup();
  var eAvoid12 = createGroup();
  var eAvoid13 = createGroup();
  
  for(var x=0;x<2;x++){
    eAvoid10.add(createSprite(25,105+(55*x),20,20));
    eAvoid10.add(createSprite(315,132.5+(55*x),20,20));
    eAvoid11.add(createSprite(85,132.5+(55*x),20,20));
     eAvoid11.add(createSprite(375,105+(55*x),20,20));
  }for(var x=0;x<4;x++){
    eAvoid12.add(createSprite(102.5+(55*x),272.5,20,20));
    eAvoid13.add(createSprite(130+(55*x),207.5,20,20));
  }
  avoidCircleSetup(eAvoid10);avoidCircleSetup(eAvoid11);
  avoidCircleSetup(eAvoid12);avoidCircleSetup(eAvoid13);
  eWall10.visible=eWall11.visible=false;
  //}
  //eLevel 2 {
    var eWall21 = createSprite(90,201,10,227.5);
    var eWall22 = createSprite(200,271.25,70,227.5);
    var eWall23 = createSprite(310,201,10,227.5);
    var eWall24 = createSprite(200,62.25,230,50.5);
    eWall21.shapeColor=eWall22.shapeColor=eWall23.shapeColor=
    eWall24.shapeColor='navy';
    var eAvoid2 = createGroup();
    for(var x=0;x<5;x++){
      eAvoid2.add(createSprite(350,122.5+(x*56),20,20));
    }
    var eWallAvoid2 = createGroup();
    for(var x=0;x<15;x++){
      eWallAvoid2.add(createSprite(22,96+(x*20),10,10));
    }for(var x=0;x<6;x++){
      eWallAvoid2.add(createSprite(42+(x*19),377,10,10));
    }for(var x=0;x<12;x++){
      eWallAvoid2.add(createSprite(77,96+(x*20.25),10,10));
    }for(var x=0;x<12;x++){
      eWallAvoid2.add(createSprite(102,96+(x*20.25),10,10));
    }for(var x=0;x<11;x++){
      eWallAvoid2.add(createSprite(157,170+(x*20.6),10,10));
    }for(var x=0;x<5;x++){
      eWallAvoid2.add(createSprite(157+(x*21.5),150,10,10));
    }for(var x=0;x<8;x++){
      eWallAvoid2.add(createSprite(122+(x*21.75),96,10,10));
    }for(var x=0;x<6;x++){
      eWallAvoid2.add(createSprite(263+(x*19),377,10,10));
    }for(var x=0;x<11;x++){
      eWallAvoid2.add(createSprite(243,170+(x*20.6),10,10));
    }for(var x=0;x<12;x++){
      eWallAvoid2.add(createSprite(297,96+(x*20.25),10,10));
    }for(var x=0;x<12;x++){
      eWallAvoid2.add(createSprite(322,96+(x*20.25),10,10));
    }for(var x=0;x<15;x++){
      eWallAvoid2.add(createSprite(378,96+(x*20),10,10));
    }
    avoidCircleSetup(eWallAvoid2);
    eWallAvoid2.setScaleEach(0.1);
    avoidCircleSetup(eAvoid2);
    eWall21.visible=eWall22.visible=eWall23.visible=eWall24.visible=false;
  //}
  //eLevel 3{
   var eSpin3mid=createSprite(200,211.25,20,20);
   
   var eSpin3top1=createSprite(200,51.25,20,20);
   var eSpin3bot1=createSprite(200,371.25,20,20);
   var eSpin3left1=createSprite(40,211.25,20,20);
   var eSpin3right1=createSprite(360,211.25,20,20);
   
   var eSpin3top2=createSprite(200,91.25,20,20);
   var eSpin3bot2=createSprite(200,331.25,20,20);
   var eSpin3left2=createSprite(80,211.25,20,20);
   var eSpin3right2=createSprite(320,211.25,20,20);
   
    var eSpin3top3=createSprite(200,131.25,20,20);
   var eSpin3bot3=createSprite(200,291.25,20,20);
   var eSpin3left3=createSprite(120,211.25,20,20);
   var eSpin3right3=createSprite(280,211.25,20,20); 
   
    var eSpin3top4=createSprite(200,171.25,20,20);
   var eSpin3bot4=createSprite(200,251.25,20,20);
   var eSpin3left4=createSprite(160,211.25,20,20);
   var eSpin3right4=createSprite(240,211.25,20,20); 
   
   soloCircleSetup(eSpin3mid,"redCircle",0.25);
   
   soloCircleSetup(eSpin3top1,"blackCircle",0.25);soloCircleSetup(eSpin3bot1,"blackCircle",0.25);
   soloCircleSetup(eSpin3left1,"blackCircle",0.25);soloCircleSetup(eSpin3right1,"blackCircle",0.25);
   
   soloCircleSetup(eSpin3top2,"midRed",0.25);soloCircleSetup(eSpin3bot2,"midRed",0.25);
   soloCircleSetup(eSpin3left2,"midRed",0.25);soloCircleSetup(eSpin3right2,"midRed",0.25);
   
   soloCircleSetup(eSpin3top3,"innerRed",0.25);soloCircleSetup(eSpin3bot3,"innerRed",0.25);
   soloCircleSetup(eSpin3left3,"innerRed",0.25);soloCircleSetup(eSpin3right3,"innerRed",0.25);
   
   soloCircleSetup(eSpin3top4,"centerRed",0.25);soloCircleSetup(eSpin3bot4,"centerRed",0.25);
   soloCircleSetup(eSpin3left4,"centerRed",0.25);soloCircleSetup(eSpin3right4,"centerRed",0.25);
   
   var avoidCorners3 = createGroup();
   avoidCorners3.add(createSprite(296,46,20,20));
   avoidCorners3.add(createSprite(322,64,20,20));
   avoidCorners3.add(createSprite(347,88,20,20));
   avoidCorners3.add(createSprite(365,114,20,20));
   avoidCorners3.add(createSprite(377,144,20,20));
   avoidCorners3.add(createSprite(107,375,20,20));
   avoidCorners3.add(createSprite(79,356,20,20));
   avoidCorners3.add(createSprite(56,334,20,20));
   avoidCorners3.add(createSprite(37,306,20,20));
   avoidCorners3.add(createSprite(24,275,20,20));

   avoidCircleSetup(avoidCorners3);
  //}
  //eLevel 4{
    var eWall4Left = createSprite(40,236,50,298);
    var eWall4Right = createSprite(360,186,50,298);
    eWall4Left.shapeColor=eWall4Right.shapeColor='navy';
    eWall4Left.visible=eWall4Right.visible=false;
    var stillDotsE4 = createGroup();
    for(var x=0;x<9;x++){
      for(var y=0;y<12;y++){
        stillDotsE4.add(createSprite(80+(x*30),46+(y*30),20,20));
      }
    }
    avoidCircleSetup(stillDotsE4);
    stillDotsE4.setScaleEach(0.13);
    var e4G1 = createGroup();var e4G2 = createGroup();var e4G3 = createGroup();
    var e4G4 = createGroup(); var e4G5 = createGroup();var e4G6 = createGroup(); 
    var e4G7 = createGroup();var e4G8 = createGroup(); var e4G9 = createGroup();
    var e4G10 = createGroup();var e4G11 = createGroup();var e4G12 = createGroup();
    var e4G13 = createGroup();var e4G14 = createGroup();var e4G15 = createGroup();
    var e4G16 = createGroup();var e4G17 = createGroup();var e4G18 = createGroup();
    var e4G19 = createGroup();var e4G20 = createGroup();var e4G21 = createGroup();
    var e4G22 = createGroup();var e4G23 = createGroup();var e4G24 = createGroup();
    var e4G25 = createGroup();var e4G26 = createGroup();var e4G27 = createGroup();
    var e4G28 = createGroup();var e4G29 = createGroup();var e4G30 = createGroup();
    var e4G31 = createGroup();var e4G32 = createGroup();var e4G33 = createGroup();
    var e4G34 = createGroup();
    
    e4G1.add(stillDotsE4.get(0));e4G2.add(stillDotsE4.get(12));e4G3.add(stillDotsE4.get(13));
    e4G4.add(stillDotsE4.get(14));e4G4.add(stillDotsE4.get(25));e4G5.add(stillDotsE4.get(15));
    e4G5.add(stillDotsE4.get(37));e4G6.add(stillDotsE4.get(27));e4G6.add(stillDotsE4.get(49));
    e4G7.add(stillDotsE4.get(39));e4G7.add(stillDotsE4.get(61));e4G8.add(stillDotsE4.get(51));
    e4G8.add(stillDotsE4.get(73));e4G9.add(stillDotsE4.get(63));e4G9.add(stillDotsE4.get(85));
    e4G10.add(stillDotsE4.get(62));e4G10.add(stillDotsE4.get(97));e4G10.add(stillDotsE4.get(86));
    e4G11.add(stillDotsE4.get(87));e4G12.add(stillDotsE4.get(88));e4G13.add(stillDotsE4.get(89));
    e4G14.add(stillDotsE4.get(77));e4G14.add(stillDotsE4.get(90));e4G15.add(stillDotsE4.get(65));
    e4G15.add(stillDotsE4.get(91));e4G16.add(stillDotsE4.get(53));e4G16.add(stillDotsE4.get(79));
    e4G17.add(stillDotsE4.get(41));e4G18.add(stillDotsE4.get(29));e4G19.add(stillDotsE4.get(17));
    e4G20.add(stillDotsE4.get(18));e4G21.add(stillDotsE4.get(19));e4G22.add(stillDotsE4.get(20));
    e4G23.add(stillDotsE4.get(32));e4G24.add(stillDotsE4.get(44));e4G24.add(stillDotsE4.get(33));
    e4G25.add(stillDotsE4.get(43));e4G25.add(stillDotsE4.get(34));e4G26.add(stillDotsE4.get(55));
    e4G26.add(stillDotsE4.get(22));e4G26.add(stillDotsE4.get(46));e4G27.add(stillDotsE4.get(58));
    e4G28.add(stillDotsE4.get(70));e4G29.add(stillDotsE4.get(69));e4G30.add(stillDotsE4.get(81));
    e4G31.add(stillDotsE4.get(93));e4G32.add(stillDotsE4.get(94));e4G33.add(stillDotsE4.get(106));
    e4G34.add(stillDotsE4.get(107));  
    
    stillDotsE4.remove(stillDotsE4.get(107));stillDotsE4.remove(stillDotsE4.get(106));
    stillDotsE4.remove(stillDotsE4.get(97));stillDotsE4.remove(stillDotsE4.get(94));
    stillDotsE4.remove(stillDotsE4.get(93));stillDotsE4.remove(stillDotsE4.get(91));
    stillDotsE4.remove(stillDotsE4.get(90));stillDotsE4.remove(stillDotsE4.get(89));
    stillDotsE4.remove(stillDotsE4.get(88));stillDotsE4.remove(stillDotsE4.get(87));
    stillDotsE4.remove(stillDotsE4.get(86));stillDotsE4.remove(stillDotsE4.get(85));
    stillDotsE4.remove(stillDotsE4.get(81));stillDotsE4.remove(stillDotsE4.get(79));
    stillDotsE4.remove(stillDotsE4.get(77));stillDotsE4.remove(stillDotsE4.get(73));
    stillDotsE4.remove(stillDotsE4.get(70));stillDotsE4.remove(stillDotsE4.get(69));
    stillDotsE4.remove(stillDotsE4.get(65));stillDotsE4.remove(stillDotsE4.get(63));
    stillDotsE4.remove(stillDotsE4.get(62));stillDotsE4.remove(stillDotsE4.get(61));
    stillDotsE4.remove(stillDotsE4.get(58));stillDotsE4.remove(stillDotsE4.get(55));
    stillDotsE4.remove(stillDotsE4.get(53));stillDotsE4.remove(stillDotsE4.get(51));
    stillDotsE4.remove(stillDotsE4.get(49));stillDotsE4.remove(stillDotsE4.get(46));
    stillDotsE4.remove(stillDotsE4.get(44));stillDotsE4.remove(stillDotsE4.get(43));
    stillDotsE4.remove(stillDotsE4.get(41));stillDotsE4.remove(stillDotsE4.get(39));
    stillDotsE4.remove(stillDotsE4.get(37));stillDotsE4.remove(stillDotsE4.get(34));
    stillDotsE4.remove(stillDotsE4.get(33));stillDotsE4.remove(stillDotsE4.get(32));
    stillDotsE4.remove(stillDotsE4.get(29));stillDotsE4.remove(stillDotsE4.get(27));
    stillDotsE4.remove(stillDotsE4.get(25));stillDotsE4.remove(stillDotsE4.get(22));
    stillDotsE4.remove(stillDotsE4.get(20));stillDotsE4.remove(stillDotsE4.get(19));
    stillDotsE4.remove(stillDotsE4.get(18));stillDotsE4.remove(stillDotsE4.get(17));
    stillDotsE4.remove(stillDotsE4.get(15));stillDotsE4.remove(stillDotsE4.get(14));
    stillDotsE4.remove(stillDotsE4.get(13));stillDotsE4.remove(stillDotsE4.get(12));
    stillDotsE4.remove(stillDotsE4.get(0));

  //}
  //eLevel 5{
  var eWall51 = createSprite(135,211.25,240,10);
  var eWall52 = createSprite(355,200,60,400);
  var eWall53 = createSprite(40,211.25,50,247.5);
    eWall51.shapeColor = eWall52.shapeColor=eWall53.shapeColor='navy';
    eWall51.visible=eWall52.visible=eWall53.visible=false;
    
    var e5AvoidSwirl1 = createGroup();
    var e5AvoidSwirl2 = createGroup();
 
    e5AvoidSwirl1.add(createSprite(78,50));
    e5AvoidSwirl1.add(createSprite(248,50));
    e5AvoidSwirl1.add(createSprite(163,135));
    e5AvoidSwirl1.add(createSprite(163,230));
    e5AvoidSwirl1.add(createSprite(78,315));
    e5AvoidSwirl1.add(createSprite(248,315));

    e5AvoidSwirl2.add(createSprite(163,50));
    e5AvoidSwirl2.add(createSprite(78,135));
    e5AvoidSwirl2.add(createSprite(248,135));
    e5AvoidSwirl2.add(createSprite(78,230));
    e5AvoidSwirl2.add(createSprite(248,230));
    e5AvoidSwirl2.add(createSprite(163,315));

    
    avoidCircleSetup(e5AvoidSwirl1);avoidCircleSetup(e5AvoidSwirl2);
  //}
  //eLevel 6{
    var eWall61 = createSprite(65,211.25,100,247.5);
    var eWall62 = createSprite(335,211.25,100,247.5);
    eWall61.shapeColor=eWall62.shapeColor='navy';
    eWall61.visible=eWall62.visible=false;
    
    var avoidGroupE6 = createGroup();
    avoidGroupE6.add(createSprite(285,47,20,20));
    avoidGroupE6.add(createSprite(285,77,20,20));
    avoidGroupE6.add(createSprite(285,375,20,20));
    avoidGroupE6.add(createSprite(285,345,20,20));
    avoidCircleSetup(avoidGroupE6);
    var e6SpinMid = createGroup();
    e6SpinMid.add(createSprite(200,162,20,20));
    e6SpinMid.add(createSprite(200,260,20,20));
    e6SpinMid.add(createSprite(125,211,20,20));
    e6SpinMid.add(createSprite(275,211,20,20));
    avoidCircleSetup(e6SpinMid);
    e6SpinMid.get(0).setAnimation("innerRed");
    e6SpinMid.get(1).setAnimation("innerRed");
    //top spinning circles
    var e6SpinOutTopDown = createSprite(200,195,20,20);
    var e6SpinOutTopUp = createSprite(200,227.5,20,20);
    var e6SpinInTopUp = createSprite(200,195,20,20);
    var e6SpinInTopDown = createSprite(200,227.5,20,20);
    soloCircleSetup(e6SpinOutTopUp,"blackCircle",0.15);
    soloCircleSetup(e6SpinInTopUp,"midRed",0.15);
    soloCircleSetup(e6SpinOutTopDown,"blackCircle",0.15);
    soloCircleSetup(e6SpinInTopDown,"midRed",0.15);
    //right spinning circles
    var e6SpinOutRightUp = createSprite(256,128);
    var e6SpinOutRightDown = createSprite(256,290);
    var e6SpinInRightUp = createSprite(229,145);
    var e6SpinInRightDown = createSprite(229,276);
    soloCircleSetup(e6SpinOutRightUp,"blackCircle",0.15);
    soloCircleSetup(e6SpinInRightUp,"midRed",0.15);
    soloCircleSetup(e6SpinOutRightDown,"blackCircle",0.15);
    soloCircleSetup(e6SpinInRightDown,"midRed",0.15);
    //left spinning circles
    var e6SpinOutLeftUp = createSprite(144,128);
    var e6SpinOutLeftDown = createSprite(144,292);
    var e6SpinInLeftUp = createSprite(173,146);
    var e6SpinInLeftDown = createSprite(173,275);
    soloCircleSetup(e6SpinOutLeftUp,"blackCircle",0.15);
    soloCircleSetup(e6SpinInLeftDown,"midRed",0.15);
    soloCircleSetup(e6SpinOutLeftDown,"blackCircle",0.15);
    soloCircleSetup(e6SpinInLeftUp,"midRed",0.15);
  //}
  //eLevel 7{
    var eWall71 = createSprite(225,360,320,50);
    var eWall72 = createSprite(175,62,320,50);
    
    eWall71.shapeColor=eWall72.shapeColor="navy";
    eWall71.visible=eWall72.visible=false;
    
    var shiftAvoid71 = createGroup();
    var shiftAvoid72 = createGroup();
    var shiftAvoid73 = createGroup();
    var shiftAvoid74 = createGroup();
    var shiftAvoid75 = createGroup();

    
    for(var x=0;x<2;x++){
      shiftAvoid71.add(createSprite(138+(x*160),102.5,20,20));
      shiftAvoid71.add(createSprite(138+(x*160),320,20,20));
    }
    for(var x=0;x<3;x++){
    shiftAvoid72.add(createSprite(58+(x*130),132.5,20,20));
    shiftAvoid72.add(createSprite(58+(x*130),290,20,20));
    }
    for(var x=0;x<5;x++){
   shiftAvoid73.add(createSprite(58+(x*26),162.5,20,20));
   shiftAvoid73.add(createSprite(260+(x*26),162.5,20,20));
   shiftAvoid73.add(createSprite(58+(x*26),260,20,20));
   shiftAvoid73.add(createSprite(260+(x*26),260,20,20));
    }
    for(var x=0;x<2;x++){
    shiftAvoid74.add(createSprite(138+(x*160),192.5,20,20));
    shiftAvoid75.add(createSprite(138+(x*160),230,20,20));
    }
    
    avoidCircleSetup(shiftAvoid71);avoidCircleSetup(shiftAvoid72);
    avoidCircleSetup(shiftAvoid73);avoidCircleSetup(shiftAvoid74);
    avoidCircleSetup(shiftAvoid75);
  //}
  //eLevel 8{
    var avoidE8BotSide = createGroup();
    var avoidE8Mid = createGroup();
    var avoidE8BotLeft = createGroup();
    var avoidE8BotRight = createGroup();

    for(var x=0;x<3;x++){
      avoidE8BotSide.add(createSprite(35+(x*30),315));
      avoidE8BotSide.add(createSprite(305+(x*30),315));
      avoidE8Mid.add(createSprite(170+(x*30),107.5));
      avoidE8BotLeft.add(createSprite(185,255+(x*30)));
      avoidE8BotRight.add(createSprite(215,255+(x*30)));
      avoidE8BotRight.add(createSprite(30,107.5+(x*30)));
      avoidE8BotLeft.add(createSprite(370,107.5+(x*30)));
    }
    avoidCircleSetup(avoidE8BotSide); avoidCircleSetup(avoidE8BotLeft);
    avoidCircleSetup(avoidE8Mid); avoidCircleSetup(avoidE8BotRight); 

    
    var eWall81 = createSprite(130,211.25,30,50);
    var eWall82 = createSprite(270,211.25,30,50);
    eWall81.shapeColor=eWall82.shapeColor='navy';
    eWall81.visible=eWall82.visible=false;  
  //}
  //eLevel 9{
    var eWall91 = createSprite(360,285,50,100);
    var eWall92 = createSprite(40,285,50,100);
    var eWall93 = createSprite(200,135,370,200);
    eWall91.visible=eWall92.visible=eWall93.visible=false;
    eWall91.shapeColor=eWall92.shapeColor=eWall93.shapeColor='navy';
    var avoidE9TopLeft = createGroup();
    avoidE9TopLeft.add(createSprite(75,245));avoidE9TopLeft.add(createSprite(210,245));
    var avoidE9BotLeft = createGroup();
    avoidE9BotLeft.add(createSprite(75,375));avoidE9BotLeft.add(createSprite(210,375));
    var avoidE9TopRight = createGroup();
    avoidE9TopRight.add(createSprite(190,245));avoidE9TopRight.add(createSprite(325,245));
    var avoidE9BotRight = createGroup();
    avoidE9BotRight.add(createSprite(190,375));avoidE9BotRight.add(createSprite(325,375));
    
    avoidCircleSetup(avoidE9TopLeft);avoidCircleSetup(avoidE9TopRight);
    avoidCircleSetup(avoidE9BotLeft);avoidCircleSetup(avoidE9BotRight);
  //}
  //eLevel 10{
    var eWall101 = createSprite(200,360,270,50);
    var eWall102 = createSprite(200,275,10,180);
    var eWall103 = createSprite(200,85,370,100);
    eWall101.visible = eWall102.visible = eWall103.visible=false;
    eWall101.shapeColor = eWall102.shapeColor = eWall103.shapeColor='navy';
    var avoidE10Top = createGroup();
    var avoidE10Bot = createGroup();
    for(var x=0;x<2;x++){
      avoidE10Bot.add(createSprite(95+(x*85),325));
      avoidE10Top.add(createSprite(30+(x*85),300));
      avoidE10Bot.add(createSprite(95+(x*85),275));
      avoidE10Top.add(createSprite(30+(x*85),250));
      avoidE10Bot.add(createSprite(95+(x*85),225));
      avoidE10Top.add(createSprite(30+(x*85),200));

      avoidE10Bot.add(createSprite(285+(x*85),325));
      avoidE10Top.add(createSprite(220+(x*85),300));
      avoidE10Bot.add(createSprite(285+(x*85),275));
      avoidE10Top.add(createSprite(220+(x*85),250));
      avoidE10Bot.add(createSprite(285+(x*85),225));
      avoidE10Top.add(createSprite(220+(x*85),200));

    }
    avoidCircleSetup(avoidE10Top);avoidCircleSetup(avoidE10Bot);
    avoidE10Top.setScaleEach(0.1);avoidE10Bot.setScaleEach(0.1);
    var avoidE10Top2 = createSprite(25,145);
    var avoidE10Bot2 = createSprite(375,175);
    soloCircleSetup(avoidE10Top2,"blackCircle",0.15);
    soloCircleSetup(avoidE10Bot2,"blackCircle",0.15);
  //}
  //eLevel 11{
    var eWall111 = createSprite(345,211,100,247.5);
    var eWall112 = createSprite(65,211,100,348);
    eWall111.shapeColor = eWall112.shapeColor = 'navy';
    eWall111.visible = eWall112.visible = false;
    
    var stillDots11 = createGroup();
    stillDots11.add(createSprite(130,48));stillDots11.add(createSprite(180,73));
    stillDots11.add(createSprite(230,98));stillDots11.add(createSprite(280,123));
    stillDots11.add(createSprite(155,123));stillDots11.add(createSprite(205,148));
    stillDots11.add(createSprite(255,173));stillDots11.add(createSprite(255,48));
    stillDots11.add(createSprite(130,173));stillDots11.add(createSprite(180,198));
    stillDots11.add(createSprite(230,223));stillDots11.add(createSprite(280,248));
    stillDots11.add(createSprite(155,248));stillDots11.add(createSprite(205,273));
    stillDots11.add(createSprite(255,298));stillDots11.add(createSprite(130,298));
    stillDots11.add(createSprite(180,323));stillDots11.add(createSprite(230,348));
    stillDots11.add(createSprite(155,373));stillDots11.add(createSprite(280,373));
    avoidCircleSetup(stillDots11);stillDots11.setScaleEach(0.1);
    
    var e11AvoidLeft = createGroup();
    var e11AvoidRight = createGroup();
    for(var x=0;x<3;x++){
      e11AvoidLeft.add(createSprite(130+(x*25),373));
      e11AvoidRight.add(createSprite(230+(x*25),48));
    }
    avoidCircleSetup(e11AvoidLeft);
    avoidCircleSetup(e11AvoidRight);
  //}
  //eLevel 12{
    var eWall12 = createGroup();
    for(var x=0;x<4;x++){
      eWall12.add(createSprite(345-(x*15),320-(x*31.4),80+(x*30),32));
      eWall12.add(createSprite(345-(x*15),103+(x*31.4),80+(x*30),32));
    }
    eWall12.add(createSprite(70,211.25,120,350));
    eWall12.setVisibleEach(false);
    eWall12.setColorEach('navy');
    
    var e12Avoid1 = createGroup();
    e12Avoid1.add(createSprite(140,375));//324
    e12Avoid1.add(createSprite(140,48));//324
    var e12Avoid2 = createGroup();
    e12Avoid2.add(createSprite(324,348));//140
    e12Avoid2.add(createSprite(324,75));//140
    var e12Avoid3 = createGroup();
    e12Avoid3.add(createSprite(140,320));//294
    e12Avoid3.add(createSprite(140,105));//294
    var e12Avoid4 = createGroup();
    e12Avoid4.add(createSprite(264,288));//140
    e12Avoid4.add(createSprite(264,137));//140
    var e12Avoid5 = createGroup();
    e12Avoid5.add(createSprite(140,168));//234
    e12Avoid5.add(createSprite(140,257));//234
    var e12Avoid6 = createGroup();
    e12Avoid6.add(createSprite(204,200));//204
    e12Avoid6.add(createSprite(204,225));//204
    
    avoidCircleSetup(e12Avoid1);avoidCircleSetup(e12Avoid2);
    avoidCircleSetup(e12Avoid3);avoidCircleSetup(e12Avoid4);
    avoidCircleSetup(e12Avoid5);avoidCircleSetup(e12Avoid6);
  //}
  var eMain = createSprite(eSafe1.x,eSafe1.y,20,20);
  eMain.shapeColor='red';
  eSafe1.visible=eSafe2.visible=eSafe3.visible=eSafe4.visible=
  eMain.visible=false;
//}
//level 1 {
var safe11 = createSprite(30,63, 30, 50);
var safe12 = createSprite(360, 63, 50, 50);
safe11.shapeColor = safe12.shapeColor = 'lightgreen';
var background1 = createSprite(360,362.5,50,45);
background1.shapeColor='steelblue';
//points and keys
var key11 = createSprite(140,215, 20, 20);
var key12 = createSprite(320, 215, 20, 20);
var key13 = createSprite(30, 215, 20, 20);
var point1 = createSprite(375, 362.5, 20, 20);

key11.setAnimation('goldCircle');
key12.setAnimation('goldCircle');
key13.setAnimation('goldCircle');
point1.setAnimation("purpleCircle");

key11.scale = key12.scale = key13.scale = point1.scale = 0.2;
key11.visible = key12.visible = key13.visible = point1.visible = 
background1.visible=false;

var wallMid11 = createSprite(90, 185,10, 310);
var wallMid12 = createSprite(215, 151.5,60, 125);
var wallMid13 = createSprite(30, 143,30, 110);
var wallMid14 = createSprite(30, 285,30, 110);
var wallMid15 = createSprite(360, 214,50, 252);
wallMid11.shapeColor = wallMid12.shapeColor = wallMid13.shapeColor = 
wallMid14.shapeColor = wallMid15.shapeColor = 'navy';

safe11.visible = safe12.visible = wallMid11.visible = wallMid12.visible = 
wallMid13.visible = wallMid14.visible = wallMid15.visible = false;
//
//level 1     moving
var main = createSprite(30, 63, 20, 20);
main.shapeColor = 'red';

var avoidGroup11 = createGroup();
avoidGroup11.add(createSprite(55,43,15,15));
avoidGroup11.add(createSprite(75,43,15,15));

var avoidGroup1Bot = createGroup();
avoidGroup1Bot.add(createSprite(20,350,15,15));
avoidGroup1Bot.add(createSprite(20,375,15,15));
avoidGroup1Bot.add(createSprite(32.5,362.5,15,15));
avoidGroup1Bot.add(createSprite(45,350,15,15));
avoidGroup1Bot.add(createSprite(45,375,15,15));

var avoidGroup1MidUp = createGroup();
avoidGroup1MidUp.add(createSprite(110,274,15,15));
avoidGroup1MidUp.add(createSprite(170,274,15,15));
avoidGroup1MidUp.add(createSprite(230,274,15,15));
avoidGroup1MidUp.add(createSprite(140,151,15,15));
avoidGroup1MidUp.add(createSprite(260,151,15,15));

avoidGroup1MidUp.add(createSprite(320,151,15,15));
avoidGroup1MidUp.add(createSprite(290,274,15,15));

var avoidGroup1MidDown = createGroup();
avoidGroup1MidDown.add(createSprite(140,274,15,15));
avoidGroup1MidDown.add(createSprite(200,274,15,15));
avoidGroup1MidDown.add(createSprite(260,274,15,15));
avoidGroup1MidDown.add(createSprite(110,151,15,15));
avoidGroup1MidDown.add(createSprite(170,151,15,15));

avoidGroup1MidDown.add(createSprite(320,274,15,15));
avoidGroup1MidDown.add(createSprite(290,151,15,15));

avoidCircleSetup(avoidGroup1MidDown);
avoidCircleSetup(avoidGroup1MidUp);
avoidCircleSetup(avoidGroup1Bot);
avoidCircleSetup(avoidGroup11);
main.visible = false;

//}
//level 2 {
var safe21 = createSprite(50, 350, 70, 70);
var safe22 = createSprite(350, 73, 70, 70);
safe21.shapeColor = safe22.shapeColor = 'lightgreen';

var wallMid21 = createSprite(175, 310,320, 10);
var wallMid22 = createSprite(225, 230,320, 10);
var wallMid23 = createSprite(25, 230,20, 10);
var midBackground2 = createSprite(50,82,70,90);
var respawn2 = createSprite(50,176,70,99);

var wallMidGroup21Bot = createGroup();
for(var x = 0; x<4;x++){
  wallMidGroup21Bot.add(createSprite(130+(30*x),225-((30*(x+1))/2),30,30*(x+1)));
}
wallMidGroup21Bot.add(createSprite(310,165,150,120));

var wallMidGroup21Top = createGroup();
for(var x = 0;x<3;x++){
   wallMidGroup21Top.add(createSprite(100+(30*x),82-(30*x)/2,30,90-(30*(x))));
}

wallMidGroup21Bot.setColorEach('navy');
wallMidGroup21Top.setColorEach('navy');
wallMid21.shapeColor = wallMid22.shapeColor = wallMid23.shapeColor = 'navy';
midBackground2.shapeColor = 'steelblue';
respawn2.shapeColor = 'lightblue';
safe21.visible = safe22.visible = midBackground2.visible = 
wallMid21.visible = wallMid22.visible = respawn2.visible = 
wallMid23.visible = false;
wallMidGroup21Bot.setVisibleEach(false);
wallMidGroup21Top.setVisibleEach(false);

//points and keys
var key21 = createSprite(160, 115, 20, 20);
var key22 = createSprite(200, 270, 20, 20);
var key23 = createSprite(350, 310, 20, 20);
var point2 = createSprite(50, 50, 20, 20);

key21.setAnimation('goldCircle');
key22.setAnimation('goldCircle');
key23.setAnimation('goldCircle');
point2.setAnimation("purpleCircle");

key21.scale = key22.scale = key23.scale = point2.scale = 0.2;
key21.visible = key22.visible = key23.visible = point2.visible = false;
//stationary avoid circles
var avoidWallGroup2 = createGroup();
for(var x = 0; x<12;x++) (avoidWallGroup2.add(createSprite(95+(x*21),325,20,20)));
for(var x = 0; x<14;x++) (avoidWallGroup2.add(createSprite(95+(x*21.5),375,20,20)));
for(var x = 0; x<7;x++) (avoidWallGroup2.add(createSprite(375,375-(x*21.5),20,20)));
for(var x = 0; x<15;x++) (avoidWallGroup2.add(createSprite(75+(x*21.5),245,20,20)));
for(var x = 0; x<15;x++) (avoidWallGroup2.add(createSprite(26+(x*21.5),295,20,20)));
for(var x = 0; x<3;x++) (avoidWallGroup2.add(createSprite(25,295-(x*25),20,20)));
for(var x = 0; x<4;x++) (avoidWallGroup2.add(createSprite(27,112-(x*21),20,20)));
for(var x = 0; x<4;x++) (avoidWallGroup2.add(createSprite(73,112-(x*21),20,20)));
for(var x = 0; x<6;x++) (avoidWallGroup2.add(createSprite(190+(x*22),47,20,20)));
for(var x = 0; x<5;x++) (avoidWallGroup2.add(createSprite(215+(x*22),95,20,20)));
avoidCircleSetup(avoidWallGroup2);

//stationary blinking square tiles
var tileGroup21 = createGroup();
tileGroup21.add(createSprite(100,350,20,20));
tileGroup21.add(createSprite(310,350,20,20));
tileGroup21.add(createSprite(245,270,20,20));
tileGroup21.add(createSprite(52,249,20,20));

var tileGroup22 = createGroup();
tileGroup22.add(createSprite(121,350,20,20));
tileGroup22.add(createSprite(331,350,20,20));
tileGroup22.add(createSprite(223.6,270,20,20));

var tileGroup23 = createGroup();
tileGroup23.add(createSprite(142,350,20,20));
tileGroup23.add(createSprite(352,350,20,20));
tileGroup23.add(createSprite(202.2,270,20,20));

var tileGroup24 = createGroup();
tileGroup24.add(createSprite(163,350,20,20));
tileGroup24.add(createSprite(352,323,20,20));
tileGroup24.add(createSprite(180.8,270,20,20));

var tileGroup25 = createGroup();
tileGroup25.add(createSprite(184,350,20,20));
tileGroup25.add(createSprite(352,296,20,20));
tileGroup25.add(createSprite(159.4,270,20,20));

var tileGroup26 = createGroup();
tileGroup26.add(createSprite(205,350,20,20));
tileGroup26.add(createSprite(352,270,20,20));
tileGroup26.add(createSprite(137.6,270,20,20));

var tileGroup27 = createGroup();
tileGroup27.add(createSprite(226,350,20,20));
tileGroup27.add(createSprite(330.6,270,20,20));
tileGroup27.add(createSprite(116.2,270,20,20));

var tileGroup28 = createGroup();
tileGroup28.add(createSprite(247,350,20,20));
tileGroup28.add(createSprite(309.2,270,20,20));
tileGroup28.add(createSprite(94.8,270,20,20));

var tileGroup29 = createGroup();
tileGroup29.add(createSprite(268,350,20,20));
tileGroup29.add(createSprite(287.8,270,20,20));
tileGroup29.add(createSprite(73.4,270,20,20));

var tileGroup210 = createGroup();
tileGroup210.add(createSprite(289,350,20,20));
tileGroup210.add(createSprite(266.4,270,20,20));
tileGroup210.add(createSprite(52,270,20,20));


tileGroup21.setVisibleEach(false);tileGroup26.setVisibleEach(false); 
tileGroup22.setVisibleEach(false); tileGroup27.setVisibleEach(false); 
tileGroup23.setVisibleEach(false); tileGroup28.setVisibleEach(false); 
tileGroup24.setVisibleEach(false); tileGroup29.setVisibleEach(false); 
tileGroup25.setVisibleEach(false); tileGroup210.setVisibleEach(false); 

//
//level 2     moving
var main2 = createSprite(50, 350, 20, 20);
main2.shapeColor = 'red';
main2.visible = false;

var avoid21 = createSprite(100,220,20,20);
var avoid22 = createSprite(130,220,20,20);
var avoid23 = createSprite(160,220,20,20);
var avoid24 = createSprite(190,220,20,20);
avoid21.setAnimation("blackCircle"); avoid22.setAnimation("blackCircle");
avoid23.setAnimation("blackCircle"); avoid24.setAnimation("blackCircle");
avoid21.scale = avoid22.scale = avoid23.scale = avoid24.scale = 0.2;
avoid21.setCollider('circle'); avoid22.setCollider('circle');
avoid23.setCollider('circle'); avoid24.setCollider('circle');
avoid21.visible = avoid22.visible = avoid23.visible = avoid24.visible = false;

//}
//level 3 {
var key31 = createSprite(115, 90, 20, 20);
var key32 = createSprite(200, 275, 20, 20);
var key33 = createSprite(115, 325, 20, 20);

key31.setAnimation('goldCircle');
key32.setAnimation('goldCircle');
key33.setAnimation('goldCircle');

key31.scale = key32.scale = key33.scale = 0.2;

var wallMid31 = createSprite(50, 213, 70, 10);
var wallMid32 = createSprite(90, 213, 10, 100);
var wallMid33 = createSprite(205, 168, 220, 10);
var wallMid34 = createSprite(205, 258, 220, 10);
var midBackground3 = createSprite(205,213,220,80);
wallMid31.shapeColor = wallMid32.shapeColor = 
wallMid33.shapeColor = wallMid34.shapeColor = 'navy';
midBackground3.shapeColor='steelblue';
var point3 = createSprite(110, 213, 20, 20);
point3.setAnimation("purpleCircle");
point3.scale = 0.2;

var safe31 = createSprite(50, 186, 70, 45);
var safe32 = createSprite(50, 240, 70, 45);
var respawn3 = createSprite(350, 213, 70, 100);
safe31.shapeColor = safe32.shapeColor = 'lightgreen';
respawn3.shapeColor = 'lightblue';
safe31.visible = safe32.visible = respawn3.visible = wallMid31.visible =
    wallMid32.visible = key31.visible = key32.visible = key33.visible = 
    point3.visible = wallMid33.visible = wallMid34.visible = 
    midBackground3.visible = false;
//
//level 3     moving
var main3 = createSprite(50, 190, 20, 20);
main3.shapeColor = 'red';
main3.visible = false;
var avoidMid3 = createSprite(100, 180, 20, 20);
avoidMid3.setAnimation("blackCircle");
avoidMid3.scale=0.15;
avoidMid3.visible = false;
var spinnerGroupInner3 = createGroup();
for (var x = 0; x < 3; x++) {
    spinnerGroupInner3.add(createSprite(75 + (x * 125), 100, 20, 20));
}
for (var x = 0; x < 3; x++) {
    spinnerGroupInner3.add(createSprite(75 + (x * 125), 325, 20, 20));
}

//middle spinners
var spinnerGroupMidTop3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupMidTop3.add(createSprite(75 + (x * 125), 76, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupMidTop3.add(createSprite(75 + (x * 125), 301, 20, 20)));

var spinnerGroupMidBot3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupMidBot3.add(createSprite(75 + (x * 125), 124, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupMidBot3.add(createSprite(75 + (x * 125), 349, 20, 20)));

var spinnerGroupMidLeft3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupMidLeft3.add(createSprite(51 + (x * 125), 100, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupMidLeft3.add(createSprite(51 + (x * 125), 325, 20, 20)));

var spinnerGroupMidRight3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupMidRight3.add(createSprite(99 + (x * 125), 100, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupMidRight3.add(createSprite(99 + (x * 125), 325, 20, 20)));

//outer spinners
var spinnerGroupOuterTop3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupOuterTop3.add(createSprite(75 + (x * 125), 52, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupOuterTop3.add(createSprite(75 + (x * 125), 277, 20, 20)));

var spinnerGroupOuterBot3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupOuterBot3.add(createSprite(75 + (x * 125), 148, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupOuterBot3.add(createSprite(75 + (x * 125), 373, 20, 20)));

var spinnerGroupOuterLeft3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupOuterLeft3.add(createSprite(27 + (x * 125), 100, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupOuterLeft3.add(createSprite(27 + (x * 125), 325, 20, 20)));

var spinnerGroupOuterRight3 = createGroup();
for (var x = 0; x < 3; x++) (spinnerGroupOuterRight3.add(createSprite(123 + (x * 125), 100, 20, 20)));
for (var x = 0; x < 3; x++) (spinnerGroupOuterRight3.add(createSprite(123 + (x * 125), 325, 20, 20)));

spinnerGroupInner3.setAnimationEach("innerRed");
spinnerGroupMidTop3.setAnimationEach("midRed");
spinnerGroupMidBot3.setAnimationEach("midRed");
spinnerGroupMidLeft3.setAnimationEach("midRed");
spinnerGroupMidRight3.setAnimationEach("midRed");
spinnerGroupOuterTop3.setAnimationEach("blackCircle");
spinnerGroupOuterBot3.setAnimationEach("blackCircle");
spinnerGroupOuterLeft3.setAnimationEach("blackCircle");
spinnerGroupOuterRight3.setAnimationEach("blackCircle");

spinnerGroupInner3.setScaleEach(0.2);
spinnerGroupMidTop3.setScaleEach(0.2);
spinnerGroupMidBot3.setScaleEach(0.2);
spinnerGroupMidLeft3.setScaleEach(0.2);
spinnerGroupMidRight3.setScaleEach(0.2);
spinnerGroupOuterTop3.setScaleEach(0.2);
spinnerGroupOuterBot3.setScaleEach(0.2);
spinnerGroupOuterLeft3.setScaleEach(0.2);
spinnerGroupOuterRight3.setScaleEach(0.2);

spinnerGroupInner3.setColliderEach("circle");
spinnerGroupMidTop3.setColliderEach("circle");
spinnerGroupMidBot3.setColliderEach("circle");
spinnerGroupMidLeft3.setColliderEach("circle");
spinnerGroupMidRight3.setColliderEach("circle");
spinnerGroupOuterTop3.setColliderEach("circle");
spinnerGroupOuterBot3.setColliderEach("circle");
spinnerGroupOuterLeft3.setColliderEach("circle");
spinnerGroupOuterRight3.setColliderEach("circle");

spinnerGroupInner3.setVisibleEach(false);
spinnerGroupMidTop3.setVisibleEach(false);
spinnerGroupMidBot3.setVisibleEach(false);
spinnerGroupMidLeft3.setVisibleEach(false);
spinnerGroupMidRight3.setVisibleEach(false);
spinnerGroupOuterTop3.setVisibleEach(false);
spinnerGroupOuterBot3.setVisibleEach(false);
spinnerGroupOuterLeft3.setVisibleEach(false);
spinnerGroupOuterRight3.setVisibleEach(false);
//}
//level 4 {
var wallMid4 = createSprite(200, 245, 10, 310);
wallMid4.shapeColor = 'navy';

var safe4 = createSprite(200, 64, 80, 52);
safe4.shapeColor = 'lightgreen';

var key41 = createSprite(370, 370, 20, 20);
var key42 = createSprite(250, 280, 20, 20);
var key43 = createSprite(30, 160, 20, 20);
key41.setAnimation('goldCircle');
key42.setAnimation('goldCircle');
key43.setAnimation('goldCircle');
key41.scale = key42.scale = key43.scale = 0.2;
safe4.visible = key41.visible = key42.visible = key43.visible =
    wallMid4.visible = false;

var point41 = createSprite(30, 370, 20, 20);
point41.setAnimation('purpleCircle');
point41.scale = 0.2;
point41.visible = false;
//
//level 4     moving
var main4 = createSprite(200, 60, 20, 20);
main4.shapeColor = 'red';
main4.visible = false;

var avoidGroup41 = createGroup();
for (var x = 0; x < 5; x++) {
    avoidGroup41.add(createSprite(20, 100 + (x * 60), 20, 20));
}

var avoidGroup42 = createGroup();
for (var x = 0; x < 5; x++) {
    avoidGroup42.add(createSprite(380, 130 + (x * 60), 20, 20));
}

var avoidGroup43 = createGroup();
for (var x = 0; x < 3; x++) {
    avoidGroup43.add(createSprite(30 + (x * 60), 40, 20, 20));
}
for (var x = 0; x < 3; x++) {
    avoidGroup43.add(createSprite(250 + (x * 60), 40, 20, 20));
}
avoidGroup41.setAnimationEach("blackCircle");avoidGroup42.setAnimationEach("blackCircle");
avoidGroup43.setAnimationEach("blackCircle");
avoidGroup41.setScaleEach(0.2);avoidGroup42.setScaleEach(0.2);
avoidGroup43.setScaleEach(0.2);
avoidGroup41.setColliderEach("circle");avoidGroup42.setColliderEach("circle");
avoidGroup43.setColliderEach("circle");
avoidGroup41.setVisibleEach(false);avoidGroup42.setVisibleEach(false);
avoidGroup43.setVisibleEach(false);
//}
//level 5 {
var safe51 = createSprite(40,62.75, 50, 50.5);
var safe52 = createSprite(90,372.5,150, 25);
safe51.shapeColor = safe52.shapeColor = 'lightgreen';
var respawn5 = createSprite(355,170,60,30);
respawn5.shapeColor = 'lightblue';

safe51.visible = safe52.visible = respawn5.visible = 
false;

var key51 = createSprite(300, 140, 20, 20);
var key52 = createSprite(280, 210, 20, 20);
var key53 = createSprite(30, 280, 20, 20);
key51.setAnimation('goldCircle');
key52.setAnimation('goldCircle');
key53.setAnimation('goldCircle');
key51.scale = key52.scale = key53.scale = 0.2;
key51.visible = key52.visible = key53.visible = false;

var avoidOuterCircle5 = createGroup();
//bigger circle
  avoidOuterCircle5.add(createSprite(380,280,15,15));
  avoidOuterCircle5.add(createSprite(376,255,15,15));
  avoidOuterCircle5.add(createSprite(368,230,15,15));
  avoidOuterCircle5.add(createSprite(306,185,15,15));
  avoidOuterCircle5.add(createSprite(280,180,15,15));
  avoidOuterCircle5.add(createSprite(254,184,15,15));
  avoidOuterCircle5.add(createSprite(192,230,15,15));
  avoidOuterCircle5.add(createSprite(184,255,15,15));
  avoidOuterCircle5.add(createSprite(180,280,15,15));
  avoidOuterCircle5.add(createSprite(184,307,15,15));
  avoidOuterCircle5.add(createSprite(193,330,15,15));
  avoidOuterCircle5.add(createSprite(209,351,15,15));
  avoidOuterCircle5.add(createSprite(230,367,15,15));
  avoidOuterCircle5.add(createSprite(254,376,15,15));
  avoidOuterCircle5.add(createSprite(280,380,15,15));
  avoidOuterCircle5.add(createSprite(306,376,15,15));
  avoidOuterCircle5.add(createSprite(331,367,15,15));
  avoidOuterCircle5.add(createSprite(351,352,15,15));
  avoidOuterCircle5.add(createSprite(368,330,15,15));
  avoidOuterCircle5.add(createSprite(378,305,15,15));
  //smaller circle
  avoidOuterCircle5.add(createSprite(320,280,15,15));
  avoidOuterCircle5.add(createSprite(316,260,15,15));
  avoidOuterCircle5.add(createSprite(301,245,15,15));
  avoidOuterCircle5.add(createSprite(280,240,15,15));
  avoidOuterCircle5.add(createSprite(261,245,15,15));
  avoidOuterCircle5.add(createSprite(246,261,15,15));
  avoidOuterCircle5.add(createSprite(240,280,15,15));
  avoidOuterCircle5.add(createSprite(246,302,15,15));
  avoidOuterCircle5.add(createSprite(261,315,15,15));
  avoidOuterCircle5.add(createSprite(280,320,15,15));
  avoidOuterCircle5.add(createSprite(301,315,15,15));
  avoidOuterCircle5.add(createSprite(315,301,15,15));
  
avoidCircleSetup(avoidOuterCircle5);
var wallMid51 = createSprite(40,90,50,10);
var wallMid52 = createSprite(60,125,10,70);
var wallMid53 = createSprite(190,160,270,10);
var wallMid54 = createSprite(170,290,10,190);
var backgroundMid51 = createSprite(35,130,40,70);
var wallBlinking5 = createSprite(35,140,40,10);
backgroundMid51.shapeColor='steelblue';
wallBlinking5.shapeColor = 'black';
wallMid51.shapeColor = wallMid52.shapeColor = wallMid53.shapeColor = 
wallMid54.shapeColor = 'navy';
wallMid51.visible = wallMid52.visible = wallMid53.visible = 
wallMid54.visible = wallBlinking5.visible = backgroundMid51.visible = false;

var point5 = createSprite(35, 115, 20, 20);
point5.setAnimation('purpleCircle');
point5.scale = 0.2;
point5.visible = false;
//
//level 5     moving
var main5 = createSprite(40, 63, 20, 20);
main5.shapeColor = 'red';

var avoidGroupMazeTop = createGroup();
var avoidGroupMazeBot = createGroup();
for(var x=0;x<4;x++) (avoidGroupMazeTop.add(createSprite(130,50+(x*20),15,15)));
for(var x=0;x<4;x++) (avoidGroupMazeBot.add(createSprite(200,85+(x*20),15,15)));
for(var x=0;x<4;x++) (avoidGroupMazeTop.add(createSprite(270,50+(x*20),15,15)));
for(var x=0;x<4;x++) (avoidGroupMazeBot.add(createSprite(340,85+(x*20),15,15)));

avoidCircleSetup(avoidGroupMazeTop);
avoidCircleSetup(avoidGroupMazeBot);

  var innerCircle51 = createSprite(280,210,15,15);
  var innerCircle52 = createSprite(245,220,15,15);
  var innerCircle53 = createSprite(220,245,15,15);
  var innerCircle54 = createSprite(210,280,15,15);
  var innerCircle57 = createSprite(280,350,15,15);
  var innerCircle58 = createSprite(315,340,15,15);
  var innerCircle59 = createSprite(340,315,15,15);
  var innerCircle510 = createSprite(350,280,15,15);
innerCircle51.setAnimation("blackCircle"); innerCircle52.setAnimation("blackCircle");
innerCircle53.setAnimation("blackCircle"); innerCircle54.setAnimation("blackCircle");
innerCircle57.setAnimation("blackCircle"); innerCircle58.setAnimation("blackCircle");
innerCircle59.setAnimation("blackCircle"); innerCircle510.setAnimation("blackCircle");

innerCircle51.scale = innerCircle52.scale = innerCircle53.scale = innerCircle54.scale = 
innerCircle57.scale = innerCircle58.scale = innerCircle59.scale = 
innerCircle510.scale = 0.15;

innerCircle51.setCollider("circle"); innerCircle52.setCollider("circle"); 
innerCircle53.setCollider("circle"); innerCircle54.setCollider("circle");
innerCircle57.setCollider("circle"); innerCircle58.setCollider("circle");
innerCircle59.setCollider("circle"); innerCircle510.setCollider("circle");

innerCircle51.visible = innerCircle52.visible = innerCircle53.visible = innerCircle54.visible = 
innerCircle57.visible = innerCircle58.visible = innerCircle59.visible = 
innerCircle510.visible = false;


var avoidGroupMazeLeft = createGroup();
var avoidGroupMazeRight = createGroup();
for(var x=0;x<6;x++) (avoidGroupMazeLeft.add(createSprite(25+(x*20),236,15,15)));
for(var x=0;x<6;x++) (avoidGroupMazeRight.add(createSprite(55+(x*20),319,15,15)));

avoidCircleSetup(avoidGroupMazeLeft); avoidCircleSetup(avoidGroupMazeRight);

main5.visible = false;
//}
//level 6 {
  var safe61 = createSprite(360,63, 50, 50);
var safe62 = createSprite(370,320,30, 130);
safe61.shapeColor = safe62.shapeColor = 'lightgreen';
  
  var key61 = createSprite(105, 200, 20, 20);
  var key62 = createSprite(50, 65, 20, 20);
  var key63 = createSprite(217, 280, 20, 20);
  key61.setAnimation('goldCircle');
  key62.setAnimation('goldCircle');
  key63.setAnimation('goldCircle');
  key61.scale = key62.scale = key63.scale = 0.2;
  key61.visible = key62.visible = key63.visible = false;
  
  var respawn6 = createSprite(45,315,60,140);
  var backgroundMid6 = createSprite(360,200,50,100);  
  var wallMid61 = createSprite(250,250,350,10);
  var wallMid62 = createSprite(330,62.5,10,50);
  var wallMid63 = createSprite(330,200,10,100);
  var wallMid64 = createSprite(215,320,280,10);
  
  wallMid61.shapeColor=wallMid62.shapeColor=wallMid63.shapeColor=wallMid64.shapeColor='navy';
  backgroundMid6.shapeColor='steelBlue'; respawn6.shapeColor='lightblue';
  
  var point6 = createSprite(360, 235, 20, 20);
  point6.setAnimation('purpleCircle');
  point6.scale = 0.2;
  point6.visible = false;

  safe61.visible=safe62.visible=wallMid61.visible=wallMid62.visible=
  backgroundMid6.visible=respawn6.visible=wallMid63.visible=wallMid64.visible=
  false;
//
//level 6     moving
var mazeGroup6 = createGroup();
for(var x=0;x<5;x++){
  mazeGroup6.add(createSprite(315,(x*18)+160,20,20));
}for(var x=0;x<3;x++){
  mazeGroup6.add(createSprite(315,(x*18)+45,20,20));
}for(var x=0;x<14;x++){
  mazeGroup6.add(createSprite(80+(x*18),232,20,20));
}for(var x=0;x<11;x++){
  mazeGroup6.add(createSprite(80+(x*18),177,20,20));
}for(var x=0;x<2;x++){
  mazeGroup6.add(createSprite(80,(x*18)+195,20,20));
}for(var x=0;x<17;x++){
  mazeGroup6.add(createSprite(26+(x*18),45,20,20));
}for(var x=0;x<4;x++){
  mazeGroup6.add(createSprite(260,(x*18)+107,20,20));
}for(var x=0;x<4;x++){
  mazeGroup6.add(createSprite(206,(x*18)+63,20,20));
}for(var x=0;x<4;x++){
  mazeGroup6.add(createSprite(152,(x*18)+107,20,20));
}for(var x=0;x<4;x++){
  mazeGroup6.add(createSprite(80,(x*18)+63,20,20));
}for(var x=0;x<4;x++){
  mazeGroup6.add(createSprite(98,(x*18)+63,20,20));
}for(var x=0;x<11;x++){
  mazeGroup6.add(createSprite(26,(x*18)+45,20,20));
}

mazeGroup6.setColliderEach("circle"); mazeGroup6.setAnimationEach("blackCircle");
mazeGroup6.setScaleEach(0.1); 
var pointAvoid6 = createSprite(342,157,20,20);
pointAvoid6.setAnimation("blackCircle"); pointAvoid6.scale=0.15;
pointAvoid6.setCollider("circle"); 

var avoidBotGroup6 = createGroup();
var avoidTopGroup6 = createGroup();
for(var x=0;x<4;x++){
  avoidTopGroup6.add(createSprite(85+(20*x),265,20,20));
}for(var x=0;x<4;x++){
  avoidTopGroup6.add(createSprite(185+(20*x),265,20,20));
}for(var x=0;x<4;x++){
  avoidTopGroup6.add(createSprite(285+(20*x),265,20,20));
}
avoidBotGroup6.add(createSprite(165,375,20,20));
avoidBotGroup6.add(createSprite(265,375,20,20));

avoidBotGroup6.setAnimationEach("blackCircle"); avoidBotGroup6.setColliderEach("circle");
avoidBotGroup6.setScaleEach(0.15); avoidTopGroup6.setAnimationEach("blackCircle"); 
avoidTopGroup6.setColliderEach("circle");avoidTopGroup6.setScaleEach(0.15); 

var main6 = createSprite(360,65,20,20);
 main6.shapeColor='red';
 
 main6.visible=pointAvoid6.visible=false;
 mazeGroup6.setVisibleEach(false);
 avoidBotGroup6.setVisibleEach(false);
 avoidTopGroup6.setVisibleEach(false);
//}
//level 7 {
  var wallMid71=createSprite(222.5,156,335,10);
  var wallMid72=createSprite(222.5,266,335,10);
  wallMid71.shapeColor='black';wallMid72.shapeColor='black';
  var safe71=createSprite(35,211,40,120);
  var safe72=createSprite(365,211,40,100);
  safe71.shapeColor='lightgreen';safe72.shapeColor='lightgreen';
  var avoidMid7 = createGroup();
  for(var x=0;x<2;x++){
    avoidMid7.add(createSprite(198,200+(x*20),20,20));
  }
  avoidCircleSetup(avoidMid7);
  //keys
  var key71 = createSprite(220, 140, 20, 20);
  var key72 = createSprite(375, 90, 20, 20);
  var key73 = createSprite(220, 283, 20, 20);
  var key74 = createSprite(375, 327, 20, 20);
  key71.setAnimation('goldCircle');key73.setAnimation('goldCircle');
  key72.setAnimation('goldCircle');key74.setAnimation('goldCircle');

  key71.scale = key72.scale = key73.scale = key74.scale = 0.2;
  key71.visible = key72.visible = key73.visible = key74.visible = false;
  wallMid71.visible=wallMid72.visible=safe71.visible=safe72.visible=false;
//
//level 7     moving
  var main7 = createSprite(35,211,20,20);
  main7.shapeColor='red'; 
  var avoidSwirlGroup71 =createGroup();
  for(var x=0;x<3;x++){
    avoidSwirlGroup71.add(createSprite(30+(120*x),82,20,20));
    avoidSwirlGroup71.add(createSprite(90+(120*x),139,20,20));
    avoidSwirlGroup71.add(createSprite(30+(120*x),315,20,20));
    avoidSwirlGroup71.add(createSprite(90+(120*x),372,20,20));
  }
  avoidCircleSetup(avoidSwirlGroup71);
  var avoidSwirlGroup72 =createGroup();
  for(var x=0;x<3;x++){
    avoidSwirlGroup72.add(createSprite(30+(120*x),108,20,20));
    avoidSwirlGroup72.add(createSprite(90+(120*x),49,20,20));
    avoidSwirlGroup72.add(createSprite(30+(120*x),341,20,20));
    avoidSwirlGroup72.add(createSprite(90+(120*x),282,20,20));
  }
   avoidCircleSetup(avoidSwirlGroup72);
   
   var avoid7TopLeft = createGroup();
   for(var x=0;x<2;x++){
     avoid7TopLeft.add(createSprite(65+(x*145),170,20,20));
   }
    avoidCircleSetup(avoid7TopLeft);
    
   var avoid7TopRight = createGroup();
   for(var x=0;x<2;x++){
     avoid7TopRight.add(createSprite(185+(x*145),170,20,20));
   }
    avoidCircleSetup(avoid7TopRight);
    
   var avoid7BotLeft = createGroup();
   for(var x=0;x<2;x++){
     avoid7BotLeft.add(createSprite(65+(x*145),252,20,20));
   }
    avoidCircleSetup(avoid7BotLeft);
    
   var avoid7BotRight = createGroup();
   for(var x=0;x<2;x++){
     avoid7BotRight.add(createSprite(185+(x*145),252,20,20));
   }
    avoidCircleSetup(avoid7BotRight);
   
  main7.visible=false;
//}
//misc {
    var introCircles = createGroup();
    for(var x=0;x<20;x++){
      introCircles.add(createSprite(420,(x*20)));
    }
    avoidCircleSetup(introCircles);
    
    var blackout = createSprite(200,200,404,404);
    var beginBtn = createSprite(200,200,120,30);
    blackout.shapeColor="black";
    beginBtn.shapeColor="white";
    //}

//}

/////////////////////////////--draw starts--///////////////////////////////////
//soundtrack
/*
playSound("assets/Music/Tidal Force.mp3",false);
playSound("assets/Music/Antlers.mp3",false);
playSound("assets/Music/Disconnect.mp3",false);
playSound("assets/Music/Plume.mp3",false);
playSound("assets/Music/Sunrise.mp3",false);
playSound("assets/Music/Wake.mp3",false);
playSound("assets/Music/Gravity.mp3",false);
playSound("assets/Music/Indolence.mp3",false);
playSound("assets/Music/Planet IV.mp3",false);
playSound("assets/Music/Polar bear.mp3",false);
playSound("assets/Music/Ropes.mp3",false);
playSound("assets/Music/Seahorse Dreams.mp3",false);
playSound("assets/Music/Mellow.mp3",false);
playSound("assets/Music/Spiritdancer.mp3",false);
playSound("assets/Music/Cronos.mp3",false);
playSound("assets/Music/Cascade.mp3"",false);
playSound("assets/Music/Compass.mp3",false);
playSound("assets/Music/Ember.mp3",false);
playSound("assets/Music/Cartridge.mp3",false);
playSound("assets/Music/Sleet.mp3",false);
playSound("assets/Music/Overworld.mp3",false);
*/
function draw() {
    if (!gameStarted) {
      if(mouseIsOver(beginBtn)){
        beginBtn.shapeColor="white";
        beginBtn.scale=1.05;
      } else {
        beginBtn.shapeColor=rgb(220,220,220);
        beginBtn.scale=1;
      }

      drawSprites();
      textAlign(CENTER,CENTER);
      fill("black");stroke("black");strokeWeight(1);textSize(25);
      text("Start",200,200);
      if(mousePressedOver(beginBtn)){
        playSound("assets/category_app/app_interface_button_3.mp3", false);
        gameStarted = true;
        blackout.visible=beginBtn.visible=false;
        
      }
    }
    else {
           if (level == 0) {
      loopCount+=1;
     if(!songsLoaded){
          //load soundtrack
          if(loopCount==1){
playSound("assets/Music/Bright Matter.mp3", false);
playSound("assets/Music/Tidal Force.mp3",false);
playSound("assets/Music/Antlers.mp3", false);
playSound("assets/Music/Disconnect.mp3",false);
playSound("assets/Music/Plume.mp3",false);
playSound("assets/Music/Sunrise.mp3",false);
playSound("assets/Music/Wake.mp3",false);
playSound("assets/Music/Gravity.mp3",false);
playSound("assets/Music/Indolence.mp3",false);
playSound("assets/Music/Planet IV.mp3",false);
playSound("assets/Music/Polar bear.mp3",false);
playSound("assets/Music/Ropes.mp3",false);
playSound("assets/Music/Seahorse Dreams.mp3",false);
playSound("assets/Music/Spiritdancer.mp3",false);
playSound("assets/Music/Cronos.mp3",false);
playSound("assets/Music/Cascade.mp3",false);
playSound("assets/Music/Compass.mp3",false);
playSound("assets/Music/Ember.mp3",false);
playSound("assets/Music/Cartridge.mp3",false);
playSound("assets/Music/Overworld.mp3",false);
playSound("assets/Music/Sleet.mp3", false);
}
        stopSongs();
        if(loopCount<=100){
        background("navy");
        drawSprites();
        fill("steelBlue");
        stroke("darkGreen"); strokeWeight(3);
        rect(15, 50, 370, 300);
        fill("grey");stroke("black");strokeWeight(2);
        rect(50,210,300,30);
        stroke("black"); strokeWeight(0);
        textAlign("left","Top");
        textSize(50);fill("Black");
        textFont("times new roman");
        if(loopCount%60<20){
          text("Loading.",90,180);
        }else if(loopCount%60>=20&&loopCount%60<40){
          text("Loading..",90,180);
        }else{
          text("Loading...",90,180);
        }
        fill("lightGreen");
        rect(55,215,loopCount*2.9,20);
        }else if(loopCount==101){
          main0.visible = directions0.visible = endlessMode.visible = 
          start0.visible = wallMid0.visible = hardMode.visible =
          levelSelect0.visible = wallTop.visible=wallRight.visible=wallLeft.visible=
          wallBottom.visible=backTitle.visible=circle0Left.visible=circle0Right.visible=true;
          circle0Left.velocityY=3;circle0Right.velocityY=3;
        }else{
           if(circle0Left.isTouching(wallTop)){
          circle0Left.velocityY=circle0Right.velocityY=3;
        }else if(circle0Left.isTouching(wallMid0)){
          circle0Left.velocityY=circle0Right.velocityY=-3;
        }
          background("steelBlue");
          drawSprites();
          textAlign(CENTER, TOP);
           fill("black");textFont('times new roman');
        textSize(43);stroke("black"); strokeWeight(1);
        text("World's Hardest", 55, 50, 300, 100);
        text("Game v2", 55, 100, 300, 100);
        textSize(27);strokeWeight(0);
        text("Start Game",start0.x,start0.y-14);
        text("How\nTo\nPlay",directions0.x,directions0.y-48);
        text("Use arrows or wasd to move",200,147);
        text("Hard\nMode",hardMode.x,hardMode.y-30);
        textSize(24);
        text("Level\nSelect",levelSelect0.x-1,levelSelect0.y-28);
        textSize(21);
        text("Endless\nMode",endlessMode.x,endlessMode.y-24);
          fill(rgb(255,255,255,0.8));
          if(loopCount>195){
          rect(-1,-1,(401-(loopCount-195)*5.5),401);
          }else{
            rect(-1,-1,401,401);
          }
          fill("black");stroke("black");strokeWeight(1);
          textFont("times new roman");
          textSize(45);
          if(loopCount>=100&&loopCount<120){
            if(loopCount==102)(playSound("assets/category_transition/whoosh.mp3", false));
            text("The",(-80+((loopCount-100)*10)),120);
            text("World's",(440-((loopCount-100)*10)),120);
          }else if(loopCount>=120&&loopCount<140){
            if(loopCount==122)(playSound("assets/category_transition/whoosh.mp3", false));
          text("The",120,120);
            text("World's",240,120);fill("crimson");stroke("crimson");
            text("Hardest",200,420-((loopCount-120)*12));
          }else if(loopCount>=140&&loopCount<160){
            if(loopCount==142)(playSound("assets/category_transition/whoosh.mp3", false));
            fill("black");stroke("black");
          text("The",120,120);
            text("World's",240,120);
            text("Game",(-40+((loopCount-140)*10)),240);
            text("V2",(460-((loopCount-140)*10)),240);
            fill("crimson");stroke("crimson");
            text("Hardest",200,180);
          }
          else if(loopCount>=160&&loopCount<193){
             fill("black");stroke("black");
          text("The",120,120);
            text("World's",240,120);
            text("Game",160,240);
            text("V2",260,240);
            fill("crimson");stroke("crimson");
            text("Hardest",200,180);
          }else if(loopCount==193){
            fill("black");stroke("black");
          text("The",120,120);
            text("World's",240,120);
            text("Game",160,240);
            text("V2",260,240);
            fill("crimson");stroke("crimson");
            text("Hardest",200,180);
            introCircles.setVisibleEach(true);
            introCircles.setVelocityXEach(-5.5);
          }else if(loopCount>193&&loopCount<210){
            fill("black");stroke("black");
          text("The",120,120);
            text("World's",240,120);
            text("Game",160,240);
            text("V2",260,240);
            fill("crimson");stroke("crimson");
            text("Hardest",200,180);
          }else if(loopCount>=210){
          
          if(loopCount==275){
            songsLoaded=true;
            loopCount=0;
            introCircles.setVisibleEach(false);
            introCircles.setVelocityXEach(0);
          }
          }
        }
      }
      else if(loopCount==1){
        if(!playingSong[0]){
               playSound("assets/Music/Sleet.mp3", true);
               playingSong[0]=true;
             }
         main0.visible = directions0.visible = endlessMode.visible = 
        start0.visible = wallMid0.visible = hardMode.visible =
        levelSelect0.visible = wallTop.visible=wallRight.visible=wallLeft.visible=
        wallBottom.visible=backTitle.visible=circle0Left.visible=circle0Right.visible=true;
        circle0Left.velocityY=3;circle0Right.velocityY=3;
      }else{
        //level 6 reset code
         if(mazeGroup6.get(0).x==315)(mazeGroup6.setVelocityEach(0,0));
          else if(mazeGroup6.get(0).x<315)(mazeGroup6.setVelocityEach(0.75,0.75));
          else (mazeGroup6.setVelocityEach(-0.75,-0.75));
        background('steelblue');
        if(circle0Left.isTouching(wallTop)){
          circle0Left.velocityY=3;circle0Right.velocityY=3;
        }else if(circle0Left.isTouching(wallMid0)){
          circle0Left.velocityY=-3;circle0Right.velocityY=-3;
        }
        //check to start game
        if(main0.isTouching(start0)&&start0.visible){
        level = 13; playSound("assets/category_digital/power_up.mp3",false);
        main0.visible = directions0.visible = hardMode.visible =
        start0.visible = wallMid0.visible = endlessMode.visible =
        levelSelect0.visible = backTitle.visible=circle0Left.visible=circle0Right.visible=false;
        circle0Left.velocityY=circle0Right.velocityY=0;
        score=0;stopSound("assets/Music/Sleet.mp3");
        keyCount=0;playingSong[0]=false;
        deaths=0;
        loopCount=0;
        checkpointReached=false;
        }
        if(main0.isTouching(hardMode)){
          main0.x=200;playSound("assets/category_app/app_interface_button_3.mp3", false);
          main0.y=225;
          hardModeOn = !hardModeOn;
          deathLoopCount=loopCount;
        }
        if(hardModeOn){
          hardMode.shapeColor=rgb(160,255,160);
        }else{
          hardMode.shapeColor=rgb(255,160,160);
        }
        
        if(main0.isTouching(endlessMode)){
        level = 98;playSound("assets/category_app/app_interface_button_3.mp3", false);
        directions0.visible = hardMode.visible =
        start0.visible = endlessMode.visible =
        levelSelect0.visible = wallMid0.visible = backTitle.visible=
        circle0Left.visible=circle0Right.visible=false;
        circle0Left.velocityY=circle0Right.velocityY=0;
        loopCount=0;stopSound("assets/Music/Sleet.mp3");
        deathLoopCount=0;playingSong[0]=false;
        setWallColor();
        }
        
        else if(main0.isTouching(directions0)){
          level=11;playSound("assets/category_app/app_interface_button_3.mp3", false);
        directions0.visible = hardMode.visible =
        start0.visible = wallMid0.visible = endlessMode.visible =
        levelSelect0.visible =backTitle.visible= 
        circle0Left.visible=circle0Right.visible=false;
        circle0Left.velocityY=circle0Right.velocityY=0;
        main0.x=30;
        main0.y=255;
        respawnX=30;
        respawnY=255;
        loopCount=0;
        deathLoopCount=-50;
        }
        else if(main0.isTouching(levelSelect0)){
          level=12;playSound("assets/category_app/app_interface_button_3.mp3", false);
        directions0.visible = endlessMode.visible = 
        start0.visible = wallMid0.visible = hardMode.visible =
        levelSelect0.visible = backTitle.visible=
        circle0Left.visible=circle0Right.visible=false;
        circle0Left.velocityY=circle0Right.velocityY=0;
        main0.x=200;
        main0.y=250;
        respawnX=200;
        respawnY=250;
        loopCount=0;
        deathLoopCount=0;
        }
       
        main0.collide(wallTop); main0.collide(wallBottom);
        main0.collide(wallLeft); main0.collide(wallRight);
        main0.collide(wallMid0);
        mainCharacterMovement(main0);
        
        drawSprites();
        textAlign(CENTER, TOP);
        fill("black");textFont('times new roman');
        textSize(43);stroke("black"); strokeWeight(1);
        text("World's Hardest", 55, 50, 300, 100);
        text("Game v2", 55, 100, 300, 100);
        textSize(27);strokeWeight(0);
        text("Start Game",start0.x,start0.y-14);
        text("How\nTo\nPlay",directions0.x,directions0.y-48);
        text("Use arrows or wasd to move",200,147);
        text("Hard\nMode",hardMode.x,hardMode.y-30);
        textSize(24);
        text("Level\nSelect",levelSelect0.x-1,levelSelect0.y-28);
        textSize(21);
        text("Endless\nMode",endlessMode.x,endlessMode.y-24);
        if(deathLoopCount+50<loopCount){
           }
           else{
             strokeWeight(0.5);stroke("black");
             if(hardModeOn){
               textSize(25);
               text("Keys will reset\nwith each death",200,270);
             }else{
               textSize(25);
               text("Keys will\nnot reset",200,270);
             }
           }
          showSong();
    stopSound("assets/Music/Bright Matter.mp3");
    stopSound("assets/Music/Antlers.mp3");
    stopSound("assets/Music/Disconnect.mp3");
    stopSound("assets/Music/Plume.mp3");
    stopSound("assets/Music/Sunrise.mp3");
    stopSound("assets/Music/Tidal Force.mp3");
    stopSound("assets/Music/Wake.mp3");
    stopSound("assets/Music/Gravity.mp3");
    stopSound("assets/Music/Indolence.mp3");
    stopSound("assets/Music/Planet IV.mp3");
    stopSound("assets/Music/Polar bear.mp3");
    stopSound("assets/Music/Ropes.mp3");
    stopSound("assets/Music/Seahorse Dreams.mp3");
    stopSound("assets/Music/Mellow.mp3");
    stopSound("assets/Music/Spiritdancer.mp3");
    stopSound("assets/Music/Cronos.mp3");
    stopSound("assets/Music/Cascade.mp3");
    stopSound("assets/Music/Compass.mp3");
    stopSound("assets/Music/Ember.mp3");
    stopSound("assets/Music/Cartridge.mp3");
    stopSound("assets/Music/Overworld.mp3");
      }
    }else if (level == 11){
      loopCount+=1;
      background('steelblue');
      textAlign("center","center");
      noStroke();
      if(!introLevel){
     if(loopCount==1){
       //visibility statements
      wallMid01.visible = safe01.visible = safe02.visible =
      key01.visible=key02.visible=key03.visible=avoid01.visible=true;
      cornerWalls.setVisibleEach(true);
      main0.setVelocity(0,0);avoid01.velocityY=-2.9;
     }else if(loopCount>=120&&loopCount<210){
     if(main0.x<365){
       main0.velocityX=4;
     }else{
       main0.velocityX=0;
     }
     }else if(loopCount==300){
      main0.velocityX=-4;
     }else if(loopCount>=300&&loopCount<=520){
      if(main0.x>365){
        main0.velocityX=0;
     }else if(main0.x<=285&&main0.velocityX==-4){
       main0.setVelocity(0,-4);
     }else if(main0.y<=145&&main0.velocityY==-4){
       main0.setVelocity(0,4);
     }else if(main0.y>=365&&main0.velocityY==4){
       main0.setVelocity(0,-4);
     }else if(main0.y==255&&main0.x==282&&main0.velocityY==-4&&loopCount>400){
       main0.setVelocity(4,0);
     }
      }
      drawSprites();textAlign('center','center');
      textSize(45);textFont("times new roman");
      fill(rgb(130,200,255));
      rect(15,37.5,370,77.5);
      fill('black');
      text("Tutorial",200,70);
      textSize(25);
      text("Press backspace to exit",200,103);
      textSize(20);
      fill("white");
      if(loopCount<=210){
        text("Dodge obstacles and reach\nthe other goal to win",130,160);
        textSize(22);
        text("Important game info is\ndisplayed at the top",130,350);
      }else if(loopCount>=230){
        textSize(20);
        text("Collect keys by moving into\nthem, you have one already!",130,160);
        textSize(22);
        text("You will need all three\nkeys to pass each level",130,350);
      }
      gameInfoText();
      showSong();
      main0.collide(wallTop); main0.collide(wallBottom); 
      main0.collide(wallLeft); main0.collide(wallRight);
      main0.collide(wallMid01); main0.collide(cornerWalls);
      //avoid circle movement
      if(avoid01.isTouching(cornerWalls.get(0))){
        avoid01.velocityY=2.9;
      }else if(avoid01.isTouching(cornerWalls.get(1))){
        avoid01.velocityY=-2.9;
      }
      if((main0.isTouching(safe02)&&keyCount==3)||loopCount==520){
        playSound("sound://category_digital/power_up.mp3",false);
        keyCount=0;loopCount=0;main0.x=safe02.x;main0.y=safe02.y;
        introLevel=true; respawnX=safe02.x;respawnY=safe02.y;
         key01.visible=point01.visible=
        key02.visible=key03.visible=avoid01.visible=false;
        cornerWalls.setVisibleEach(false);avoid01.y=290;
        main0.setVelocity(0,0);avoid01.setVelocity(0,0);
      }else if(main0.isTouching(key01)&&key01.visible){
        key01.visible=false;
        keyCount++;playSound("sound://category_digital/coin_3.mp3", false);
      }else if(main0.isTouching(key02)&&key02.visible){
        key02.visible=false;
        keyCount++;playSound("sound://category_digital/coin_3.mp3", false);
      }else if(main0.isTouching(key03)&&key03.visible){
        key03.visible=false;
        keyCount++;playSound("sound://category_digital/coin_3.mp3", false);
      }
    
      if(keyDown("backspace")){
            level=0; main0.x=200;main0.y=250;
            main0.setVelocity(0,0);
           key01.visible=point01.visible=safe02.visible=avoid01.visible=
        safe01.visible=key02.visible=key03.visible=wallMid01.visible=false;
        cornerWalls.setVisibleEach(false);
        avoid01.setVelocity(0,0);avoid01.y=290;
          loopCount=0;keyCount=0; introLevel=false;
          respawnX=safe01.x;respawnY=safe01.y;
          playSound("sound://category_app/app_interface_button_3.mp3", false);
          }
      
      }else{
        if(loopCount==1){
          //visibility statements
          key04.visible = point01.visible = key05.visible=key06.visible=
          avoid02.visible=avoid03.visible=respawn01.visible=true;
          cornerWalls2.setVisibleEach(true);
          oneLoop=true;
          avoid02.velocityY=-3;avoid03.velocityY=3;
        }else if(loopCount==120)(main0.velocityX=-4);
        else if(loopCount>120&&loopCount<=240){
          if(main0.x==285&&main0.velocityX==-4){
            main0.setVelocity(0,4);
          }else if(main0.y>=365&&main0.velocityY==4){
             main0.setVelocity(0,-4);
          }else if(main0.y<=255&&main0.velocityY==-4){
             main0.setVelocity(-4,0);
          }else if(main0.x<=200&&main0.velocityX==-4){
            main0.setVelocity(0,0);
          }
        }else if(loopCount>310&&loopCount<520){
          if(main0.x>respawn01.x){
            main0.velocityX=-4;
          }else{
            main0.setVelocity(0,0);
          }
        }else if(loopCount==520){
          main0.velocityX=-4;
        }else if(loopCount>520){
        if(main0.x<115&&main0.velocityX==-4&&loopCount<=580){
          main0.setVelocity(0,-4);
        }else if(main0.y<145&&main0.velocityY==-4){
          main0.setVelocity(0,4);
        }else if(main0.y>=255&&main0.velocityY==4){
          main0.setVelocity(-4,0);
        }else if(loopCount==710){
          main0.setVelocity(-4,0);
        }
        }
        drawSprites();textAlign('center','center');
      textSize(45);textFont("times new roman");
      fill(rgb(130,200,255));
      rect(15,37.5,370,77.5);
      fill('black');
      text("Tutorial",200,70);
      textSize(25);
      text("Press backspace to exit",200,103);
      fill("white");
      gameInfoText();
      showSong();
      main0.collide(wallTop); main0.collide(wallBottom); 
      main0.collide(wallLeft); main0.collide(wallRight);
      main0.collide(wallMid01); main0.collide(cornerWalls2);
      textSize(17);textAlign('center','center');noStroke();
      if(loopCount<=300){
        text("Hitting an obstacle adds a\ndeath and resets your position",265,160);
        textSize(18);
        text("Touching blue squares saves\nyour respawn location",135,350);
      }else if(loopCount>320&&loopCount<=860){
        text("Collect one point per level\nby moving into it",265,160);
        text("This adds to your score,\nwhich unlocks level 7",135,350);
      }
      
      if((main0.isTouching(safe01)&&keyCount==3)||loopCount>840){
        if(oneLoop){
          playSound("sound://category_digital/power_up.mp3",false);
          oneLoop=false;
        }
      fill('navy');noStroke();
      rect(15,125,370,260);
      fill('white');textSize(30);
      text("Tutorial Complete\nReturning to Main Menu...",200,250);
      if(loopCount==880){
         main0.x=200;main0.y=250;level=0;
            main0.setVelocity(0,0);playSound("sound://category_app/app_interface_button_3.mp3", false);
        avoid01.setVelocity(0,0);
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          introLevel=false;avoid02.y=300;avoid03.y=210;
          key04.visible = point01.visible = key05.visible=key06.visible=
          avoid02.visible=avoid03.visible=respawn01.visible=
          safe01.visible=safe02.visible=wallMid01.visible=false;
          cornerWalls2.setVisibleEach(false);
          avoid02.velocityY=0;avoid03.velocityY=0;
          cornerWalls2.setVisibleEach(false);
          respawnX=safe01.x;respawnY=safe01.y;
      }
      }
      if(main0.isTouching(point01)&&point01.visible){
        point01.visible=false;
        score++;playSound("sound://category_digital/coin_1.mp3", false);
      }else if(main0.isTouching(key04)&&key04.visible){
        key04.visible=false;
        keyCount++;playSound("sound://category_digital/coin_3.mp3", false);
      }else if(main0.isTouching(key05)&&key05.visible){
        key05.visible=false;
        keyCount++;playSound("sound://category_digital/coin_3.mp3", false);
      }else if(main0.isTouching(key06)&&key06.visible){
        key06.visible=false;
        keyCount++;playSound("sound://category_digital/coin_3.mp3", false);
      }
      //avoid circle movement
      if(avoid02.isTouching(cornerWalls2.get(3))){
        avoid02.velocityY=3;
      }else if(avoid02.isTouching(cornerWalls2.get(1))){
        avoid02.velocityY=-3;
      }if(avoid03.isTouching(cornerWalls2.get(0))){
        avoid03.velocityY=3;
      }else if(avoid03.isTouching(cornerWalls2.get(1))){
        avoid03.velocityY=-3;
      }
          if(deathLoopCount+50<loopCount){
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main0.visible=true;
             }else{
               main0.visible=false;
             }
             main0.velocityX=0;
             main0.velocityY=0;
           }
          if(main0.isTouching(respawn01)){
        respawnX=respawn01.x;
        respawnY=respawn01.y;
         }
         else if(keyDown("backspace")){
            level=0; main0.x=200;main0.y=250;
            main0.setVelocity(0,0);playSound("sound://category_app/app_interface_button_3.mp3", false);
        avoid01.setVelocity(0,0);
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          introLevel=false;avoid02.y=300;avoid03.y=210;
          key04.visible = point01.visible = key05.visible=key06.visible=
          avoid02.visible=avoid03.visible=respawn01.visible=safe01.visible=safe02.visible=
          wallMid01.visible=false;
          cornerWalls2.setVisibleEach(false);
          avoid02.velocityY=0;avoid03.velocityY=0;
          cornerWalls2.setVisibleEach(false);
          respawnX=safe01.x;respawnY=safe01.y;
          }
          else if(main0.isTouching(avoid02)||main0.isTouching(avoid03)){
        deaths++;playSound("sound://category_digital/fail.mp3", false);
        main0.x=respawnX;
        main0.y=respawnY;
        deathLoopCount=loopCount;
      }
      }
      
    } else if (level == 12){
      loopCount+=1;
      if(loopCount==1){
        wallMid01.visible = level1Btn.visible = level2Btn.visible = 
        level3Btn.visible = level4Btn.visible = level5Btn.visible = 
        level6Btn.visible = back02.visible = credits02.visible=true;
      }else{
        background('steelblue');
        mainCharacterMovement(main0);
        main0.collide(wallMid01);
        main0.collide(wallTop);
        main0.collide(wallBottom);
        main0.collide(wallLeft);
        main0.collide(wallRight);
        if(main0.isTouching(back02)){
          level=0;playSound("assets/category_app/app_interface_button_3.mp3", false);
          main0.x=200;
          main0.y=250;
        wallMid01.visible = level1Btn.visible = level2Btn.visible = 
        level3Btn.visible = level4Btn.visible = level5Btn.visible = 
        level6Btn.visible = back02.visible = credits02.visible=false;
        loopCount=0;
        deathLoopCount=-50;
        }else if(main0.isTouching(credits02)){
          level=14;playSound("assets/category_app/app_interface_button_3.mp3", false);
          main0.x=265;
          main0.y=360;
        wallMid01.visible = level1Btn.visible = level2Btn.visible = 
        level3Btn.visible = level4Btn.visible = level5Btn.visible = 
        level6Btn.visible = back02.visible = credits02.visible=false;
        loopCount=0;
        }
         else if(keyDown("backspace")){
            level=0; main0.x=200;main0.y=250;
            main0.setVelocity(0,0);playSound("assets/category_app/app_interface_button_3.mp3", false);
         wallMid01.visible = level1Btn.visible = level2Btn.visible = 
        level3Btn.visible = level4Btn.visible = level5Btn.visible = 
        level6Btn.visible = back02.visible = credits02.visible=false;
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          }
        else if(main0.isTouching(level1Btn)){
          respawnX = 50;
          respawnY = 350;
          level=1;
           levelSelectReset();
        }else if(main0.isTouching(level2Btn)){
          respawnX = safe11.x;
          respawnY = safe11.y;
          level=2;
           levelSelectReset();
        }else if(main0.isTouching(level3Btn)){
          respawnX = safe31.x;
          respawnY = safe31.y;
          level=3;
           levelSelectReset();
        }else if(main0.isTouching(level4Btn)){
          respawnX = safe4.x;
          respawnY = safe4.y;
          level=4;
           levelSelectReset();
        }else if(main0.isTouching(level5Btn)){
          respawnX = safe51.x;
          respawnY = safe51.y;
          level=5;
           levelSelectReset();
        }else if(main0.isTouching(level6Btn)){
          level=6;
          respawnX = 360;
          respawnY = 65;
           levelSelectReset();
        }else if(main0.x==375&&main0.y==375){
          level=7;
          respawnX=safe71.x;
          respawnY=safe72.y;
          levelSelectReset();
          score=6;
        }
        drawSprites();
        textAlign("left","center");
      noStroke();
      textSize(45);
      fill(rgb(130,200,255));
      rect(15,37.5,370,77.5);
      fill('black');textFont("times new roman");
        text("Level Select",90,80);
        textSize(20);
        text("Level 1",69,170);
        text("Level 2",169,170);
        text("Level 3",269,170);
        text("Level 4",69,340);
        text("Level 5",169,340);
        text("Level 6",269,340);
        textSize(19);
        text("Credits",27,254);
        textSize(24);
        text("Back",319,253);
        showSong();
        fill('red');strokeWeight(0);
        rect(382,382,3,3);
      }
    } else if (level == 13){
      loopCount+=1;
      if(loopCount==1){
        if(!playingSong[2]){
               playSound("assets/Music/Bright Matter.mp3", true);
               playingSong[2]=true;
             }
        wallMidGroup03.setVisibleEach(true);
        main01.visible = black03.visible = safe031.visible=
        safe032.visible=true;
        main01.x=safe031.x;main01.y=safe031.y;
      }else{
        black03.shapeColor=("black");
        background('white');
        if(loopCount<=50){
          drawSprites();
          textSize(40);
          fill('white');
          text("New Game",110,200);
        }else if(loopCount<150&&loopCount>50){
          black03.shapeColor=rgb(0,0,0,1-((loopCount-50)/100));
          drawSprites();
          textSize(30);
          fill(rgb((loopCount-50)*2.56,(loopCount-50)*2.56,(loopCount-50)*2.56));
          text("There are 7 levels",80,100);
          text("Avoid obstacles and collect \n\t\tpoints to win the game",20,310);
        }else{
          black03.visible=false;
          main01.collide(wallLeft); main01.collide(wallRight);
        main01.collide(wallTop); main01.collide(wallBottom);
        main01.collide(wallMidGroup03);
          mainCharacterMovement(main01);
          drawSprites();
          textSize(30);
          fill('white');
          text("There are 7 levels",80,100);
          text("Avoid obstacles and collect \n\t\tpoints to win the game",20,310);
          showSong();
        }
        if(main01.isTouching(safe032)){
          playSound("assets/category_digital/power_up.mp3",false);
          level=1;  main01.setVelocity(0,0);
          main01.visible=safe032.visible=safe031.visible=black03.visible=false;
          wallMidGroup03.setVisibleEach(false);
          loopCount=0;
          stopSound("assets/Music/Bright Matter.mp3");
          playingSong[2]=false;
          deathLoopCount=0;
          respawnX=safe21.x;
          respawnY=safe21.y;
        }
        if(keyDown("backspace")){
          level=0; main0.x=200;main0.y=250;
          main01.setVelocity(0,0);playSound("assets/category_app/app_interface_button_3.mp3", false);
          main01.visible=safe032.visible=safe031.visible=black03.visible=false;
          wallMidGroup03.setVisibleEach(false);
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          stopSound("assets/Music/Bright Matter.mp3");
          playingSong[2]=false;
          }
      }
    } else if (level == 14){
    loopCount++;    
      if(loopCount==1){
        vertWall04.visible=horizWall04.visible=back04.visible=true;
      }else{
       background('steelBlue');
       mainCharacterMovement(main0);
       if(main0.isTouching(back04)){
         playSound("assets/category_app/app_interface_button_3.mp3", false);
         level=12;loopCount=0;
         vertWall04.visible=horizWall04.visible=back04.visible=false;
         main0.x=200;main0.y=250;
       }else if(keyDown("backSpace")){
         playSound("assets/category_app/app_interface_button_3.mp3", false);
         level=12;loopCount=0;
         vertWall04.visible=horizWall04.visible=back04.visible=false;
         main0.x=200;main0.y=250;
       }
       main0.collide(wallRight);main0.collide(wallBottom);
       main0.collide(vertWall04);main0.collide(horizWall04);
       drawSprites();
       fill('black');textSize(20);
       textAlign('center','top');
       text('Back',355,355);
       fill('navy');
       rect(50,130,300,50);
       rect(50,195,300,50);
       rect(50,260,300,50);
       fill(rgb(240,240,240)); 
       rect(55,135,290,40);
       rect(55,200,290,40);
       rect(55,265,290,40);
       fill(rgb(130,200,255));
       rect(37.5,50,325,65);
       fill('black');textSize(50);
       textFont("times new roman");
       text('Credits',200,60);
       textSize(30);
       text('Made by Andrew',200,140);
       text('Music by Kubbi',200,270);
       textSize(23);
       text('Inspiration: Coolmath Games',200,210);
       showSong();
      }
    } else if (level == 94){
    loopCount++;  
     if(loopCount==1){
      //visibility statements
      wallMid01.visible=back94.visible=eLevel1Btn.visible=eLevel2Btn.visible=eLevel3Btn.visible=eLevel4Btn.visible=
  eLevel5Btn.visible=eLevel6Btn.visible=eLevel7Btn.visible=eLevel8Btn.visible=eLevel9Btn.visible=
  eLevel10Btn.visible=eLevel11Btn.visible=eLevel12Btn.visible=hardSkip94.visible=true; main0.y=195;
     }else{ 
     background(backColor);
     mainCharacterMovement(main0);
     if(main0.isTouching(back94)||keyDown("backspace")){
       level=98;
       loopCount=0;main0.visible=false;main0.setVelocity(0,0);
  playSound("assets/category_app/app_interface_button_3.mp3", false);
   wallMid01.visible=back94.visible=eLevel1Btn.visible=eLevel2Btn.visible=eLevel3Btn.visible=eLevel4Btn.visible=
  eLevel5Btn.visible=eLevel6Btn.visible=eLevel7Btn.visible=eLevel8Btn.visible=eLevel9Btn.visible=
  eLevel10Btn.visible=eLevel11Btn.visible=eLevel12Btn.visible=hardSkip94.visible=false;
     }else if(main0.isTouching(eLevel1Btn)){
       eLevel=1;eSafe=1;
       eLevelSelectReset(1);
     }else if(main0.isTouching(eLevel2Btn)){
       eLevel=2;eSafe=1;
       eLevelSelectReset(1);
     }else if(main0.isTouching(eLevel3Btn)){
       eLevel=3;eSafe=1;
       eLevelSelectReset(1);
     }else if(main0.isTouching(eLevel4Btn)){
       eLevel=4;eSafe=1;
       eLevelSelectReset(1);
     }else if(main0.isTouching(eLevel5Btn)){
       eLevel=5;eSafe=1;
       eLevelSelectReset(1);
     }else if(main0.isTouching(eLevel6Btn)){
       eLevel=6;eSafe=1;
       eLevelSelectReset(1);
     }else if(main0.isTouching(eLevel7Btn)){
       eLevel=7;eSafe=3;
       eLevelSelectReset(3);
     }else if(main0.isTouching(eLevel8Btn)){
       eLevel=8;eSafe=3;
       eLevelSelectReset(3);
     }else if(main0.isTouching(eLevel9Btn)){
       eLevel=9;eSafe=3;
       eLevelSelectReset(3);
     }else if(main0.isTouching(eLevel10Btn)){
       eLevel=10;eSafe=3;
       eLevelSelectReset(3);
     }else if(main0.isTouching(eLevel11Btn)){
       eLevel=11;eSafe=2;
       eLevelSelectReset(2);
     }else if(main0.isTouching(eLevel12Btn)){
       eLevel=12;eSafe=2;
       eLevelSelectReset(2);
     }
     
     main0.collide(wallLeft);main0.collide(wallTop);main0.collide(wallMid01);
     main0.collide(wallRight);main0.collide(wallBottom);main0.collide(hardSkip94);
     drawSprites();  
     textSize(40);
      fill(midColor);noStroke();
      rect(15,37.5,370,77.5);
      fill(textColor);textFont("times new roman");
    textAlign("center","top");
    text("Level Select",200,60);
    textSize(20);fill(sTextColor);
    text("lvl 1",eLevel1Btn.x,eLevel1Btn.y-8);
    text("lvl 2",eLevel2Btn.x,eLevel2Btn.y-8);
    text("lvl 3",eLevel3Btn.x,eLevel3Btn.y-8);
    text("lvl 4",eLevel4Btn.x,eLevel4Btn.y-8);
    text("lvl 5",eLevel5Btn.x,eLevel5Btn.y-8);
    text("lvl 6",eLevel6Btn.x,eLevel6Btn.y-8);
    text("lvl 7",eLevel7Btn.x,eLevel7Btn.y-8);
    text("lvl 8",eLevel8Btn.x,eLevel8Btn.y-8);
    text("lvl 9",eLevel9Btn.x,eLevel9Btn.y-8);
    text("lvl 10",eLevel10Btn.x,eLevel10Btn.y-8);
    text("lvl 11",eLevel11Btn.x,eLevel11Btn.y-8);
    text("lvl 12",eLevel12Btn.x,eLevel12Btn.y-8);
    text("Back",215,240);
    text("Hard mode:",75,230);
    if(topScore<10){
      textSize(16);
    text("Locked, "+topScore+"/10",75,254);
    showSong();
    }else{
      textSize(16);
    text("Unlocked",75,254);
    }
     }
    } else if (level == 95){
      loopCount++;
      if(loopCount==1){
        //visibility statements
        back95.visible=dark95.visible=reset95.visible=electric95.visible=halloween95.visible=
  jungle95.visible=ocean95.visible=light95.visible=desert95.visible=lava95.visible=true;
      }else{
        background(backColor);
        mainCharacterMovement(main0);
        
        if(main0.isTouching(back95)||keyDown("backspace")){
          playSound("assets/category_app/app_interface_button_3.mp3", false);
          level=98; loopCount=0; main0.x=200;main0.y=270;
          back95.visible=dark95.visible=reset95.visible=electric95.visible=halloween95.visible=
  jungle95.visible=ocean95.visible=light95.visible=desert95.visible=lava95.visible=false;
        }if(main0.isTouching(dark95)){
          backColor=rgb(80,80,80);
          textColor='white';titleColor='white';
          wallColor='black';songColor="white";
          midColor=rgb(60,60,60);
          safeColor=rgb(255,120,120);switchColor=rgb(160,70,70);
          setWallColor();
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(reset95)){
          backColor = rgb(180,180,255);
          textColor = 'black';titleColor='white';
          wallColor = 'navy';songColor='white';
          midColor = rgb(160,140,245);
          safeColor = 'lightgreen';
          setWallColor();switchColor='lightblue';
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(electric95)){
          backColor = rgb(255,255,100);
          textColor = 'black';titleColor='black';
          wallColor = rgb(215,215,0);songColor='black';
          midColor = rgb(240,240,40);
          safeColor = rgb(140,140,255);switchColor=rgb(100,100,255);
          setWallColor();
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(halloween95)){
          backColor = rgb(220,160,0);
          textColor = 'black';titleColor='white';
          wallColor = rgb(0,0,0);songColor='white';
          midColor = rgb(190,130,0);
          safeColor = rgb(230,230,0);
          setWallColor();switchColor=rgb(190,130,40);
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(light95)){
          backColor = 'white';
          textColor = 'black';titleColor='black';
          wallColor = rgb(210,210,210);songColor='black';
          midColor = rgb(230,230,230);
          safeColor = rgb(200,200,255);
          setWallColor();switchColor=rgb(160,160,255);
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(jungle95)){
          backColor = rgb(30,160,30);
          textColor = 'black';titleColor='white';
          wallColor = 'darkgreen';songColor='white';
          midColor = rgb(5,140,5);
          safeColor = rgb(255,140,140);switchColor=rgb(255,100,100);
          setWallColor();
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(ocean95)){
          backColor = rgb(60,110,220);
          textColor = 'white';titleColor='white';
          wallColor = rgb(0,80,150);songColor='white';
          midColor = rgb(20,90,180);
          safeColor = rgb(194, 178, 128);switchColor=rgb(160,140,90);
          setWallColor();
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(desert95)){
          backColor = rgb(194, 178, 128);
          textColor = 'black';titleColor='white';
          wallColor = rgb(160,140,90);songColor='white';
          midColor = rgb(180,160,110);
          safeColor = rgb(60,170,60);switchColor=rgb(100,200,100);
          setWallColor();
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }if(main0.isTouching(lava95)){
          backColor = rgb(170,0,0);
          textColor = 'black';titleColor='white';
          wallColor = rgb(60,0,0);songColor='white';
          midColor = rgb(150,0,0);
          safeColor = rgb(130,0,0);switchColor=rgb(140,0,0);
          setWallColor();
          if(deathLoopCount<=loopCount){
            playSound("assets/category_app/app_interface_button_3.mp3", false);
          }
          deathLoopCount=loopCount+2;
        }
        main0.collide(wallLeft);main0.collide(wallTop);main0.collide(wallMid01);
        main0.collide(wallRight);main0.collide(wallBottom);
        drawSprites();
        textSize(40);
        fill(midColor);noStroke();
      rect(15,37.5,370,77.5);
      fill(textColor);textFont("times new roman");
        text("Customization",80,90);
        textSize(20);
        text("Dark",dark95.x-22,dark95.y-25);
        text("Light",light95.x-22,light95.y-25);
        text("Jungle",jungle95.x-28,jungle95.y-25);
        text("Reset",reset95.x-25,reset95.y-35);
        text("Electric",electric95.x-32,electric95.y+40);
        text("Ocean",ocean95.x-32,ocean95.y+40);
        text("Desert",desert95.x-28,desert95.y+40);
        text("Lava",lava95.x-20,lava95.y+40);
        textSize(17);
        text("Halloween",halloween95.x-40,halloween95.y-26);
        fill(sTextColor);textSize(20);
        text("Back",back95.x-22,back95.y+8);
        showSong();
      }
    } else if (level == 96){
    loopCount+=1;
    if(loopCount==1){
      //visibility statements
    safe96.visible=back96.visible=true;
    keys96.setVisibleEach(true);
    
    }else{
     mainCharacterMovement(main0);
      background(backColor);
      if(main0.isTouching(back96)||keyDown("backspace")){
        level=97;loopCount=0;
        main0.x=30;main0.y=365;playSound("assets/category_app/app_interface_button_3.mp3", false);
        safe96.visible=back96.visible=false;
        keys96.setVisibleEach(false);
      }
      //key collision
      for(var x=0;x<120;x++){
      if(main0.isTouching(keys96.get(x))&&keys96.get(x).visible==true){
        keys96.get(x).visible=false;
        keyCount++;
        playSound("assets/category_digital/coin_3.mp3", false);
      }
      }
      main0.collide(wallBottom);main0.collide(wallTop);
      main0.collide(wallLeft);main0.collide(wallRight);
      drawSprites();
      textSize(20);textAlign("center","bottom");
      fill("black");
      text("Back",355,220);
    stroke("white");
    fill("white");
    textSize(20);
    strokeWeight(1);
    text("Level: " + level + "   Keys: " + keyCount,200, 30);
    showSong();
    }
    } else if (level == 98){
      loopCount+=1;
      if(loopCount==1){
        if(!playingSong[1]){
               playSound("assets/Music/Overworld.mp3", true);
               playingSong[1]=true;
             }
      main0.x=200; main0.y=270;
      //visibility statements
        main0.visible = back98.visible = startEndless.visible = scores98.visible = 
        wallMid01.visible = background98.visible = custom98.visible = lSelect98.visible = true;
      }else{
        mainCharacterMovement(main0);
        background(backColor);
        if(main0.isTouching(back98)){
          level=0;playSound("assets/category_app/app_interface_button_3.mp3", false);
          main0.x=200;
          stopSound("assets/Music/Overworld.mp3");
          playingSong[1]=false;
          main0.y=250;
          loopCount=0;
          deathLoopCount=-50;
          back98.visible = startEndless.visible = scores98.visible = 
          wallMid01.visible = background98.visible=custom98.visible = lSelect98.visible = false;
          wallMid01.shapeColor=wallBottom.shapeColor=wallTop.shapeColor=
          wallLeft.shapeColor=wallRight.shapeColor='navy';
        }else if(main0.isTouching(lSelect98)){
        level=94; playSound("assets/category_app/app_interface_button_3.mp3", false);
        main0.x=160;main0.y=195;
        loopCount=0;
        back98.visible = startEndless.visible = scores98.visible = 
          wallMid01.visible = background98.visible=custom98.visible = lSelect98.visible = false;
        }else if(main0.isTouching(startEndless)){
          level=99;main0.setVelocity(0,0);
          playSound("assets/category_digital/power_up.mp3",false);
          loopCount=0;score=0;
          deathLoopCount=0;
          stopSound("assets/Music/Overworld.mp3");
          playingSong[1]=false;
         var randomNum = randomNumber(1,4);
         eSafe=randomNum;
         randomChallenge(randomNum);
         if(randomNum==1){
           eMain.x=eSafe1.x;eMain.y=eSafe1.y;
         }else if(randomNum==2){
           eMain.x=eSafe2.x;eMain.y=eSafe2.y;
         }if(randomNum==3){
           eMain.x=eSafe3.x;eMain.y=eSafe3.y;
         }if(randomNum==4){
           eMain.x=eSafe4.x;eMain.y=eSafe4.y;
         }
          back98.visible=startEndless.visible=scores98.visible = 
          wallMid01.visible=background98.visible=main0.visible=
          custom98.visible = lSelect98.visible = false;
        }else if(main0.isTouching(scores98)){
          level=97;playSound("assets/category_app/app_interface_button_3.mp3", false);
          loopCount=0;main0.x=200;main0.y=365;
          back98.visible=startEndless.visible= scores98.visible = 
          background98.visible=eSafe1.visible=eSafe2.visible=
          custom98.visible = lSelect98.visible = false;
        }else if(main0.isTouching(custom98)){
          level=95;playSound("assets/category_app/app_interface_button_3.mp3", false);
          loopCount=0;main0.x=200;main0.y=251.25;
          back98.visible=startEndless.visible= scores98.visible = 
          background98.visible=eSafe1.visible=eSafe2.visible=
          custom98.visible = lSelect98.visible = false; deathLoopCount=0;
        }
        main0.collide(wallTop); main0.collide(wallBottom);
        main0.collide(wallRight); main0.collide(wallLeft);
        main0.collide(wallMid01);main0.collide(background98);
        drawSprites();
        textSize(40);
         fill(midColor);noStroke();
      rect(15,37.5,370,77.5);
      fill(textColor);textFont("times new roman");
        text("Endless Mode",85,90);
        fill(sTextColor);
        textSize(25);
        text("Start Game",140,365);
        textSize(20);
        text("Back",324,272);
        textSize(19);
        text("Level\nSelect",322,315);
        text("\t Top\n Scores",25,260); 
        text(" Colors",24,325);
        textSize(17);
        textAlign(LEFT,TOP);
        text("\t\t\t\t\t\t\t\t\t\t\tIn Endless Mode:\n- Challenges are picked randomly\n- One death ends the game\n- The game can be infinitely long\n- Harder levels are more common after 10",52,130);
        showSong();
      }
    } else if (level == 97){ 
      loopCount+=1;
      if(loopCount==1){
       //visibility statements
       back97.visible=wallMid97.visible=background97.visible=
       background971.visible=background972.visible=background973.visible=
      background974.visible=wallMid01.visible=true;
      }else{
        mainCharacterMovement(main0);
        background(backColor);
        if(main0.isTouching(back97)||keyDown("backspace")){
          playSound("assets/category_app/app_interface_button_3.mp3", false);
          level=98; loopCount=0; main0.x=200;main0.y=270;
          back97.visible=wallMid97.visible=background97.visible=
          background971.visible=background972.visible=background973.visible=
          background974.visible=false;
        }
        if(main0.x==25){
          level=96;loopCount=0; main0.x=200;main0.y=211.25;
          keyCount=0;playSound("assets/category_app/app_interface_button_3.mp3", false);
          back97.visible=wallMid97.visible=background97.visible=
          background971.visible=background972.visible=background973.visible=
          background974.visible=wallMid01.visible=false;
        }
        main0.collide(wallTop); main0.collide(wallBottom);
        main0.collide(wallRight); main0.collide(wallLeft);
        main0.collide(wallMid97);
       drawSprites();
        textSize(31);
        fill(midColor);noStroke();
      rect(15,37.5,370,77.5);
      fill(textColor);textFont("times new roman");
        text("Endless Mode Leaderboard",25,88);
        textSize(26);
        fill("black");
        text("Back",325,370);
        text("1.  "+leaderboardScores[0],65,160);
        text("2.  "+leaderboardScores[1],65,200);
        text("3.  "+leaderboardScores[2],65,240);
        text("4.  "+leaderboardScores[3],65,280);
        text("5.  "+leaderboardScores[4],65,320);
        textSize(17);
        text(leaderboardDates[0],260,160);
        text(leaderboardDates[1],260,200);
        text(leaderboardDates[2],260,240);
        text(leaderboardDates[3],260,280);
        text(leaderboardDates[4],260,320);
        showSong();
        fill(switchColor);strokeWeight(0);
        rect(15,345,3,40);
      }
    } else if (level == 99){
      loopCount+=1;
      if(loopCount<100){
        fill(textColor);
        textSize(50);
        background(backColor);
        drawSprites();
        text('Endless...', 85, 200);
        textSize(25);
        text('Highest Score: '+leaderboardScores[0], 100, 235);
        text('This Session: '+topScore, 100, 270);

      }else if(loopCount==100){
        eMain.visible=true;
        //topScore=10;
      }else{
        background(backColor);
        totalLooped+=1;
        //pause character each challenge
        if(deathLoopCount+50<loopCount){
           mainCharacterMovement(eMain);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               eMain.visible=true;
             }else{
               eMain.visible=false;
             }
             eMain.velocityX=0;
             eMain.velocityY=0;
           }
        if(eLevel==1){
          if(loopCount==101){
            pickSong();
            eSafe1.x=55; eSafe2.x=345;
            eSafe1.width=80;eSafe2.width=80;
            if(eSafe==1)(eMain.x+=15);
            else(eMain.x-=15);
            //visibility statements
            eSafe1.visible = eSafe2.visible = eWall10.visible = eWall11.visible = true;
            eAvoid10.setVisibleEach(true);eAvoid11.setVisibleEach(true);
            eAvoid12.setVisibleEach(true);eAvoid13.setVisibleEach(true);
            eAvoid10.setVelocityEach(2.5,0);eAvoid11.setVelocityEach(-2.5,0);
            eAvoid12.setVelocityEach(0,-2.5);eAvoid13.setVelocityEach(0,2.5);
          }else{
            //avoid circle movement
            if(eAvoid10.get(0).isTouching(wallLeft)){
              eAvoid10.setVelocityXEach(2.5);
            }else if(eAvoid10.get(0).isTouching(eWall10)){
              eAvoid10.setVelocityXEach(-2.5);
            }if(eAvoid11.get(0).isTouching(wallLeft)){
              eAvoid11.setVelocityXEach(2.5);
            }else if(eAvoid11.get(0).isTouching(eWall10)){
              eAvoid11.setVelocityXEach(-2.5);
            }if(eAvoid12.get(3).isTouching(eWall11)){
              eAvoid12.setVelocityYEach(-2.5);
            }else if(eAvoid12.get(3).isTouching(eWall10)){
              eAvoid12.setVelocityYEach(2.5);
            }if(eAvoid13.get(3).isTouching(eWall11)){
              eAvoid13.setVelocityYEach(-2.5);
            }else if(eAvoid13.get(3).isTouching(eWall10)){
              eAvoid13.setVelocityYEach(2.5);
            }
            //collision
            if(eMain.isTouching(eAvoid10)||eMain.isTouching(eAvoid11)||
            eMain.isTouching(eAvoid12)||eMain.isTouching(eAvoid13)||keyDown("backspace")){
              stopSongs();
              level=100;playSound("assets/category_digital/fail.mp3", false);
              eSafe1.width=50; eSafe2.width=50;
              eSafe1.x=40; eSafe2.x=360;
              loopCount=0;
              deathLoopCount=0;
              eWall10.visible = eWall11.visible = eMain.visible=eSafe1.visible=eSafe2.visible=false;
            eAvoid10.setVisibleEach(false);eAvoid11.setVisibleEach(false);
            eAvoid12.setVisibleEach(false);eAvoid13.setVisibleEach(false);
            eAvoid10.setVelocityEach(0,0);eAvoid11.setVelocityEach(0,0);
            eAvoid12.setVelocityEach(0,0);eAvoid13.setVelocityEach(0,0);
            eMain.setVelocity(0,0);
            
            }
            //check if eLevel 1 is passed
            if((eSafe==1)&&(eMain.isTouching(eSafe2))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=2;
              randomChallenge(2);
              eSafe1.width=50; eSafe2.width=50;
              eSafe1.x=40; eSafe2.x=360;
              eMain.x=eSafe2.x;eMain.y=eSafe2.y;
              loopCount=100;
              deathLoopCount=loopCount;
              eSafe1.visible = eSafe2.visible = 
            eWall10.visible = eWall11.visible = false;
            eAvoid10.setVisibleEach(false);eAvoid11.setVisibleEach(false);
            eAvoid12.setVisibleEach(false);eAvoid13.setVisibleEach(false);
            eAvoid10.setVelocityEach(0,0);eAvoid11.setVelocityEach(0,0);
            eAvoid12.setVelocityEach(0,0);eAvoid13.setVelocityEach(0,0);
            }else if((eSafe==2)&&(eMain.isTouching(eSafe1))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=1;
              randomChallenge(1);
              eSafe1.width=50; eSafe2.width=50;
              eSafe1.x=40; eSafe2.x=360;
              eMain.x=eSafe1.x;eMain.y=eSafe1.y;
              loopCount=100;
              deathLoopCount=loopCount;
              eSafe1.visible = eSafe2.visible = 
              eWall10.visible = eWall11.visible = false;
              eAvoid10.setVisibleEach(false);eAvoid11.setVisibleEach(false);
              eAvoid12.setVisibleEach(false);eAvoid13.setVisibleEach(false);
              eAvoid10.setVelocityEach(0,0);eAvoid11.setVelocityEach(0,0);
            eAvoid12.setVelocityEach(0,0);eAvoid13.setVelocityEach(0,0);
            }
            eMain.collide(eWall10);eMain.collide(eWall11);
          }
        }else if(eLevel==2){
          if(loopCount==101){
            pickSong();
             eSafe1.x=50; eSafe2.x=350;
            eSafe1.width=70;eSafe2.width=70;
             if(eSafe==1)(eMain.x+=10);
            else(eMain.x-=10);
            //visibility statements
            eSafe1.visible = eSafe2.visible = eWall21.visible = 
            eWall22.visible=eWall23.visible=eWall24.visible=true;
            eWallAvoid2.setVisibleEach(true);
            eAvoid2.setVisibleEach(true);
            eAvoid2.setVelocityXEach(-5);
          }else{
            //avoid circle movement
           if(eAvoid2.isTouching(wallLeft)){
            eAvoid2.setVelocityXEach(5);
           }else if(eAvoid2.isTouching(wallRight)){
            eAvoid2.setVelocityXEach(-5);
           }
            //collision
            if(eMain.isTouching(eAvoid2)||eMain.isTouching(eWallAvoid2)
            ||keyDown("backspace")){
              stopSongs();
              level=100;playSound("assets/category_digital/fail.mp3", false);
              loopCount=0;
              deathLoopCount=0;
              eMain.visible=eSafe1.visible=eSafe2.visible=eWall21.visible = 
              eWall22.visible=eWall23.visible=eWall24.visible=false;
              eWallAvoid2.setVisibleEach(false);
              eAvoid2.setVisibleEach(false);
            eSafe1.width=50; eSafe2.width=50;
              eSafe1.x=40; eSafe2.x=360;
            eMain.setVelocity(0,0);
            eAvoid2.setVelocityXEach(0);
            }
            
            //check if eLevel 2 is passed
            if((eSafe==1)&&(eMain.isTouching(eSafe2))){
              playSound("assets/category_digital/power_up.mp3",false);
              eSafe1.width=50; eSafe2.width=50;
              eSafe1.x=40; eSafe2.x=360;
              score+=1; eSafe=2;
              randomChallenge(2);
              eMain.x=eSafe2.x;eMain.y=eSafe2.y;
              loopCount=100;
              deathLoopCount=loopCount;
              eSafe1.visible = eSafe2.visible = eWall21.visible = 
              eWall22.visible=eWall23.visible=eWall24.visible=false;
              eWallAvoid2.setVisibleEach(false);
              eAvoid2.setVisibleEach(false);
            eAvoid2.setVelocityXEach(0);
            }else if((eSafe==2)&&(eMain.isTouching(eSafe1))){
              playSound("assets/category_digital/power_up.mp3",false);
              eSafe1.width=50; eSafe2.width=50;
              eSafe1.x=40; eSafe2.x=360;
              score+=1; eSafe=1;
              randomChallenge(1);
              eMain.x=eSafe1.x;eMain.y=eSafe1.y;
              loopCount=100;
              deathLoopCount=loopCount;
              eSafe1.visible = eSafe2.visible = eWall21.visible = 
              eWall22.visible=eWall23.visible=eWall24.visible=false;
              eWallAvoid2.setVisibleEach(false);
              eAvoid2.setVisibleEach(false);
              eAvoid2.setVelocityXEach(0);
            }
            eMain.collide(eWall21);eMain.collide(eWall22);
            eMain.collide(eWall23);eMain.collide(eWall24);
          }
        }else if(eLevel==3){
         if(loopCount==101){
           pickSong();
            //visibility statements
            eSafe1.visible = eSafe4.visible = eSpin3mid.visible = 
            eSpin3left1.visible = eSpin3top1.visible = eSpin3bot1.visible = 
            eSpin3right1.visible = eSpin3left2.visible = eSpin3top2.visible = 
            eSpin3bot2.visible = eSpin3right2.visible = eSpin3left3.visible = 
            eSpin3top3.visible = eSpin3bot3.visible = eSpin3right3.visible = 
            eSpin3left4.visible = eSpin3top4.visible = eSpin3bot4.visible = 
            eSpin3right4.visible = true;
            avoidCorners3.setVisibleEach(true);
            negLoop=0;
          }else{
            negLoop--;
            noStroke();
            fill(midColor);
            arc(200,211.25,520,520,0,360);
            fill(backColor);
            arc(200,211.25,380,380,0,360);
            
            //avoid movement
            eSpin3top1.setSpeedAndDirection(4,(negLoop*1.43)-180);
            eSpin3right1.setSpeedAndDirection(4,(negLoop*1.43)-90);
            eSpin3bot1.setSpeedAndDirection(4,(negLoop*1.43));
            eSpin3left1.setSpeedAndDirection(4,(negLoop*1.43)+90);
            eSpin3top2.setSpeedAndDirection(3,(loopCount-101.5)*1.43);
            eSpin3right2.setSpeedAndDirection(3,((loopCount-101.5)*1.43)+90);
            eSpin3bot2.setSpeedAndDirection(3,((loopCount-101.5)*1.43)-180);
            eSpin3left2.setSpeedAndDirection(3,((loopCount-101.5)*1.43)-90);
            eSpin3top3.setSpeedAndDirection(2,(negLoop*1.43)-180);
            eSpin3right3.setSpeedAndDirection(2,(negLoop*1.43)-90);
            eSpin3bot3.setSpeedAndDirection(2,(negLoop*1.43));
            eSpin3left3.setSpeedAndDirection(2,(negLoop*1.43)+90);
            eSpin3top4.setSpeedAndDirection(1,(loopCount-101.5)*1.43);
            eSpin3right4.setSpeedAndDirection(1,((loopCount-101.5)*1.43)+90);
            eSpin3bot4.setSpeedAndDirection(1,((loopCount-101.5)*1.43)-180);
            eSpin3left4.setSpeedAndDirection(1,((loopCount-101.5)*1.43)-90);
            
            //collision
            if(eMain.isTouching(avoidCorners3)||eMain.isTouching(eSpin3left1)||eMain.isTouching(eSpin3top1)
            ||eMain.isTouching(eSpin3right1)||eMain.isTouching(eSpin3bot1)||eMain.isTouching(eSpin3left2)||
            eMain.isTouching(eSpin3top2)||eMain.isTouching(eSpin3right2)||eMain.isTouching(eSpin3bot2)
            ||eMain.isTouching(eSpin3left3)||eMain.isTouching(eSpin3top3)||eMain.isTouching(eSpin3right3)||
            eMain.isTouching(eSpin3bot3)||eMain.isTouching(eSpin3left4)||eMain.isTouching(eSpin3top4)
            ||eMain.isTouching(eSpin3right4)||eMain.isTouching(eSpin3bot4)||eMain.isTouching(eSpin3mid)
            ||keyDown("backspace")){
              stopSongs();
              level=100;playSound("assets/category_digital/fail.mp3", false);
              loopCount=0;
              deathLoopCount=0;
               eMain.visible = eSafe1.visible = eSafe4.visible = eSpin3mid.visible = 
            eSpin3left1.visible = eSpin3top1.visible = eSpin3bot1.visible = 
            eSpin3right1.visible = eSpin3left2.visible = eSpin3top2.visible = 
            eSpin3bot2.visible = eSpin3right2.visible = eSpin3left3.visible = 
            eSpin3top3.visible = eSpin3bot3.visible = eSpin3right3.visible = 
            eSpin3left4.visible = eSpin3top4.visible = eSpin3bot4.visible = 
            eSpin3right4.visible = false;
            avoidCorners3.setVisibleEach(false);
            spinnerE3Reset();
            eMain.setVelocity(0,0);
            }
            
            //check if eLevel 3 is passed
            if((eSafe==1)&&(eMain.isTouching(eSafe4))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=4;
              randomChallenge(4);
              eMain.x=eSafe4.x;eMain.y=eSafe4.y;
              loopCount=100;
              deathLoopCount=loopCount;
              eMain.visible = eSafe1.visible = eSafe4.visible = eSpin3mid.visible = 
            eSpin3left1.visible = eSpin3top1.visible = eSpin3bot1.visible = 
            eSpin3right1.visible = eSpin3left2.visible = eSpin3top2.visible = 
            eSpin3bot2.visible = eSpin3right2.visible = eSpin3left3.visible = 
            eSpin3top3.visible = eSpin3bot3.visible = eSpin3right3.visible = 
            eSpin3left4.visible = eSpin3top4.visible = eSpin3bot4.visible = 
            eSpin3right4.visible = false;
            avoidCorners3.setVisibleEach(false);
            spinnerE3Reset();
            }else if((eSafe==4)&&(eMain.isTouching(eSafe1))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=1;
              randomChallenge(1);
              eMain.x=eSafe1.x;eMain.y=eSafe1.y;
              loopCount=100;
              deathLoopCount=loopCount;
               eMain.visible = eSafe1.visible = eSafe4.visible = eSpin3mid.visible = 
            eSpin3left1.visible = eSpin3top1.visible = eSpin3bot1.visible = 
            eSpin3right1.visible = eSpin3left2.visible = eSpin3top2.visible = 
            eSpin3bot2.visible = eSpin3right2.visible = eSpin3left3.visible = 
            eSpin3top3.visible = eSpin3bot3.visible = eSpin3right3.visible = 
            eSpin3left4.visible = eSpin3top4.visible = eSpin3bot4.visible = 
            eSpin3right4.visible = false;
            avoidCorners3.setVisibleEach(false);
            spinnerE3Reset();
            }
          }
        }else if(eLevel==4){
          if(loopCount==101){
            pickSong();
          //visibility statements
          eSafe1.visible = eSafe4.visible = eWall4Left.visible = eWall4Right.visible = 
          true;
          negLoop=10300;
          stillDotsE4.setVisibleEach(true);
          }else{
            var loopVar=0;
            if(eSafe==1){
            loopVar = (loopCount+130)%340;
            }else if(eSafe==4){
            loopVar = negLoop%340;
            negLoop--;
            }
            //dot maze conditionals
            if((loopVar>=0)&&(loopVar<=40))(e4G1.setVisibleEach(false));
            else(e4G1.setVisibleEach(true));
            if((loopVar>=10)&&(loopVar<=50))(e4G2.setVisibleEach(false));
            else(e4G2.setVisibleEach(true));
            if((loopVar>=20)&&(loopVar<=60))(e4G3.setVisibleEach(false));
            else(e4G3.setVisibleEach(true));
            if((loopVar>=30)&&(loopVar<=70))(e4G4.setVisibleEach(false));
            else(e4G4.setVisibleEach(true));
            if((loopVar>=40)&&(loopVar<=80))(e4G5.setVisibleEach(false));
            else(e4G5.setVisibleEach(true));
            if((loopVar>=50)&&(loopVar<=90))(e4G6.setVisibleEach(false));
            else(e4G6.setVisibleEach(true));
            if((loopVar>=60)&&(loopVar<=100))(e4G7.setVisibleEach(false));
            else(e4G7.setVisibleEach(true));
            if((loopVar>=70)&&(loopVar<=110))(e4G8.setVisibleEach(false));
            else(e4G8.setVisibleEach(true));
            if((loopVar>=80)&&(loopVar<=120))(e4G9.setVisibleEach(false));
            else(e4G9.setVisibleEach(true));
            if((loopVar>=90)&&(loopVar<=130))(e4G10.setVisibleEach(false));
            else(e4G10.setVisibleEach(true));
            if((loopVar>=100)&&(loopVar<=140))(e4G11.setVisibleEach(false));
            else(e4G11.setVisibleEach(true));
            if((loopVar>=110)&&(loopVar<=150))(e4G12.setVisibleEach(false));
            else(e4G12.setVisibleEach(true));
            if((loopVar>=120)&&(loopVar<=160))(e4G13.setVisibleEach(false));
            else(e4G13.setVisibleEach(true));
            if((loopVar>=130)&&(loopVar<=170))(e4G14.setVisibleEach(false));
            else(e4G14.setVisibleEach(true));
            if((loopVar>=140)&&(loopVar<=180))(e4G15.setVisibleEach(false));
            else(e4G15.setVisibleEach(true));
            if((loopVar>=150)&&(loopVar<=190))(e4G16.setVisibleEach(false));
            else(e4G16.setVisibleEach(true));
            if((loopVar>=160)&&(loopVar<=200))(e4G17.setVisibleEach(false));
            else(e4G17.setVisibleEach(true));
            if((loopVar>=170)&&(loopVar<=210))(e4G18.setVisibleEach(false));
            else(e4G18.setVisibleEach(true));
            if((loopVar>=180)&&(loopVar<=220))(e4G19.setVisibleEach(false));
            else(e4G19.setVisibleEach(true));
            if((loopVar>=190)&&(loopVar<=230))(e4G20.setVisibleEach(false));
            else(e4G20.setVisibleEach(true));
            if((loopVar>=200)&&(loopVar<=240))(e4G21.setVisibleEach(false));
            else(e4G21.setVisibleEach(true));
            if((loopVar>=210)&&(loopVar<=250))(e4G22.setVisibleEach(false));
            else(e4G22.setVisibleEach(true));
            if((loopVar>=220)&&(loopVar<=260))(e4G23.setVisibleEach(false));
            else(e4G23.setVisibleEach(true));
            if((loopVar>=230)&&(loopVar<=270))(e4G24.setVisibleEach(false));
            else(e4G24.setVisibleEach(true));
            if((loopVar>=240)&&(loopVar<=280))(e4G25.setVisibleEach(false));
            else(e4G25.setVisibleEach(true));
            if((loopVar>=250)&&(loopVar<=290))(e4G26.setVisibleEach(false));
            else(e4G26.setVisibleEach(true));
            if((loopVar>=260)&&(loopVar<=300))(e4G27.setVisibleEach(false));
            else(e4G27.setVisibleEach(true));
            if((loopVar>=270)&&(loopVar<=310))(e4G28.setVisibleEach(false));
            else(e4G28.setVisibleEach(true));
            if((loopVar>=280)&&(loopVar<=320))(e4G29.setVisibleEach(false));
            else(e4G29.setVisibleEach(true));
            if((loopVar>=290)&&(loopVar<=330))(e4G30.setVisibleEach(false));
            else(e4G30.setVisibleEach(true));
            if((loopVar>=300)||(loopVar==0))(e4G31.setVisibleEach(false));
            else(e4G31.setVisibleEach(true));
            if((loopVar>=310)||(loopVar<=10))(e4G32.setVisibleEach(false));
            else(e4G32.setVisibleEach(true));
            if((loopVar>=320)||(loopVar<=20))(e4G33.setVisibleEach(false));
            else(e4G33.setVisibleEach(true));
            if((loopVar>=330)||(loopVar<=30))(e4G34.setVisibleEach(false));
            else(e4G34.setVisibleEach(true));
            
            
            //collision
            if((eMain.isTouching(e4G1)&&e4G1.get(0).visible==true)||(eMain.isTouching(e4G18)&&e4G18.get(0).visible==true)||
            (eMain.isTouching(e4G2)&&e4G2.get(0).visible==true)||(eMain.isTouching(e4G19)&&e4G19.get(0).visible==true)||
            (eMain.isTouching(e4G3)&&e4G3.get(0).visible==true)||(eMain.isTouching(e4G20)&&e4G20.get(0).visible==true)||
            (eMain.isTouching(e4G4)&&e4G4.get(0).visible==true)||(eMain.isTouching(e4G21)&&e4G21.get(0).visible==true)||
            (eMain.isTouching(e4G5)&&e4G5.get(0).visible==true)||(eMain.isTouching(e4G22)&&e4G22.get(0).visible==true)||
            (eMain.isTouching(e4G6)&&e4G6.get(0).visible==true)||(eMain.isTouching(e4G23)&&e4G23.get(0).visible==true)||
            (eMain.isTouching(e4G7)&&e4G7.get(0).visible==true)||(eMain.isTouching(e4G24)&&e4G24.get(0).visible==true)||
            (eMain.isTouching(e4G8)&&e4G8.get(0).visible==true)||(eMain.isTouching(e4G25)&&e4G25.get(0).visible==true)||
            (eMain.isTouching(e4G9)&&e4G9.get(0).visible==true)||(eMain.isTouching(e4G26)&&e4G26.get(0).visible==true)||
            (eMain.isTouching(e4G10)&&e4G10.get(0).visible==true)||(eMain.isTouching(e4G27)&&e4G27.get(0).visible==true)||
            (eMain.isTouching(e4G11)&&e4G11.get(0).visible==true)||(eMain.isTouching(e4G28)&&e4G28.get(0).visible==true)||
            (eMain.isTouching(e4G12)&&e4G12.get(0).visible==true)||(eMain.isTouching(e4G29)&&e4G29.get(0).visible==true)||
            (eMain.isTouching(e4G13)&&e4G13.get(0).visible==true)||(eMain.isTouching(e4G30)&&e4G30.get(0).visible==true)||
            (eMain.isTouching(e4G14)&&e4G14.get(0).visible==true)||(eMain.isTouching(e4G31)&&e4G31.get(0).visible==true)||
            (eMain.isTouching(e4G15)&&e4G15.get(0).visible==true)||(eMain.isTouching(e4G32)&&e4G32.get(0).visible==true)||
            (eMain.isTouching(e4G16)&&e4G16.get(0).visible==true)||(eMain.isTouching(e4G33)&&e4G33.get(0).visible==true)||
            (eMain.isTouching(e4G17)&&e4G17.get(0).visible==true)||(eMain.isTouching(e4G34)&&e4G34.get(0).visible==true)||
            (eMain.isTouching(stillDotsE4))||keyDown("backspace")){
              stopSongs();
              level=100;eMain.visible=false;
              loopCount=0; dotFieldE4Reset();
              deathLoopCount=0;playSound("assets/category_digital/fail.mp3", false);
              eMain.setVelocity(0,0);
              stillDotsE4.setVisibleEach(false);
              eSafe1.visible = eSafe4.visible = eWall4Left.visible = eWall4Right.visible = false;
            }
            //check if eLevel4 is passed
            if((eSafe==1)&&(eMain.isTouching(eSafe4))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=4;
              randomChallenge(4);
              eMain.x=eSafe4.x;eMain.y=eSafe4.y;
              loopCount=100;dotFieldE4Reset();
              deathLoopCount=loopCount;
              eSafe1.visible = eSafe4.visible = eWall4Left.visible = eWall4Right.visible = false;
          stillDotsE4.setVisibleEach(false);
            }else if((eSafe==4)&&(eMain.isTouching(eSafe1))){
              playSound("assets/category_digital/power_up.mp3",false);
              dotFieldE4Reset();
              score+=1; eSafe=1;
              randomChallenge(1);
              eMain.x=eSafe1.x;eMain.y=eSafe1.y;
              loopCount=100;
              deathLoopCount=loopCount;
               eSafe1.visible = eSafe4.visible = eWall4Left.visible = eWall4Right.visible = false;
          stillDotsE4.setVisibleEach(false);
            }
            eMain.collide(eWall4Left); eMain.collide(eWall4Right);
          }
        }else if(eLevel==5){
          if(loopCount==101){
            pickSong();
            //visibility statements
          eSafe1.visible = eSafe3.visible = eWall51.visible = eWall52.visible=
          eWall53.visible=true;
          e5AvoidSwirl1.setVelocityEach(0,3);
          e5AvoidSwirl2.setVelocityEach(3,0);

        e5AvoidSwirl1.setVisibleEach(true);e5AvoidSwirl2.setVisibleEach(true);
          }else{
            //avoid swirl movement
            if(e5AvoidSwirl1.get(0).y>108&&e5AvoidSwirl1.get(0).velocityY==3){
            e5AvoidSwirl1.setVelocityEach(3,0);
            }else if(e5AvoidSwirl1.get(0).x>143&&e5AvoidSwirl1.get(0).velocityX==3){
            e5AvoidSwirl1.setVelocityEach(0,-3);
            }else if(e5AvoidSwirl1.get(0).y<53&&e5AvoidSwirl1.get(0).velocityY==-3){
            e5AvoidSwirl1.setVelocityEach(-3,0);
            }else if(e5AvoidSwirl1.get(0).x<78&&e5AvoidSwirl1.get(0).velocityX==-3){
            e5AvoidSwirl1.setVelocityEach(0,3);
            }
             if(e5AvoidSwirl2.get(0).y>108&&e5AvoidSwirl2.get(0).velocityY==3){
            e5AvoidSwirl2.setVelocityEach(-3,0);
            }else if(e5AvoidSwirl2.get(0).x>228&&e5AvoidSwirl2.get(0).velocityX==3){
            e5AvoidSwirl2.setVelocityEach(0,3);
            }else if(e5AvoidSwirl2.get(0).y<53&&e5AvoidSwirl2.get(0).velocityY==-3){
            e5AvoidSwirl2.setVelocityEach(3,0);
            }else if(e5AvoidSwirl2.get(0).x<163&&e5AvoidSwirl2.get(0).velocityX==-3){
            e5AvoidSwirl2.setVelocityEach(0,-3);
            }
            //collision
            if(eMain.isTouching(e5AvoidSwirl1)||eMain.isTouching(e5AvoidSwirl2)||keyDown("backspace")){
              level=100;eMain.visible=false;
              stopSongs();
              loopCount=0; playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=0;
              eMain.setVelocity(0,0);
              eSafe1.visible = eSafe3.visible = 
              eWall51.visible = eWall52.visible=eWall53.visible=false;
              e5AvoidSwirl1.setVelocityEach(0,0);
              e5AvoidSwirl2.setVelocityEach(0,0);
               e5AvoidSwirl1.setVisibleEach(false);e5AvoidSwirl2.setVisibleEach(false);
            }
            //check if eLevel5 is passed
            if((eSafe==1)&&(eMain.isTouching(eSafe3))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=3;
              randomChallenge(3);
              eMain.x=eSafe3.x;eMain.y=eSafe3.y;
              loopCount=100;
              deathLoopCount=loopCount;
              eSafe1.visible = eSafe3.visible = eWall51.visible = 
              eWall52.visible=eWall53.visible=false;
              e5AvoidSwirl1.setVelocityEach(0,0);
              e5AvoidSwirl2.setVelocityEach(0,0);
           e5AvoidSwirl1.setVisibleEach(false);e5AvoidSwirl2.setVisibleEach(false);
            }else if((eSafe==3)&&(eMain.isTouching(eSafe1))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=1;
               randomChallenge(1);
              eMain.x=eSafe1.x;eMain.y=eSafe1.y;
              loopCount=100;
              deathLoopCount=loopCount;
              e5AvoidSwirl1.setVelocityEach(0,0);
              e5AvoidSwirl2.setVelocityEach(0,0);
               eSafe1.visible = eSafe3.visible = eWall51.visible = 
               eWall52.visible=eWall53.visible=false;
               e5AvoidSwirl1.setVisibleEach(false);e5AvoidSwirl2.setVisibleEach(false);
            }
            eMain.collide(eWall51);eMain.collide(eWall52);eMain.collide(eWall53);
          }
          
        }else if(eLevel==6){
          if(loopCount==101){
            pickSong();
            //visibility statements
          eSafe1.visible = eSafe3.visible = eWall61.visible = 
          eWall62.visible = e6SpinOutTopUp.visible=
          e6SpinOutTopUp.visible=e6SpinOutTopDown.visible=
          e6SpinInTopUp.visible=e6SpinInTopDown.visible=
          e6SpinOutRightUp.visible=e6SpinOutRightDown.visible=
          e6SpinInRightUp.visible=e6SpinInRightDown.visible=
          e6SpinOutLeftUp.visible=e6SpinOutLeftDown.visible=
          e6SpinInLeftUp.visible=e6SpinInLeftDown.visible=true;
          avoidGroupE6.setVisibleEach(true);
          avoidGroupE6.setVelocityXEach(-4);
          e6SpinMid.setVisibleEach(true);
          negLoop=0;
          }else{
            negLoop--;
           //avoid circle movement
           if(avoidGroupE6.get(0).isTouching(eSafe1)){
              avoidGroupE6.setVelocityXEach(4);
           }else if(avoidGroupE6.get(0).isTouching(wallRight)){
          avoidGroupE6.setVelocityXEach(-4);
           }
           //spinners
            e6SpinOutTopDown.setSpeedAndDirection(4,((loopCount-101)*3.55));
            e6SpinInTopDown.setSpeedAndDirection(2,((loopCount-101)*3.55));
            e6SpinOutRightDown.setSpeedAndDirection(4,((loopCount-101)*3.55)+120);
            e6SpinInRightDown.setSpeedAndDirection(2,((loopCount-101)*3.55)+120);
            e6SpinOutLeftDown.setSpeedAndDirection(4,((loopCount-101)*3.55)-120);
            e6SpinInLeftDown.setSpeedAndDirection(2,((loopCount-101)*3.55)-120);
            e6SpinOutTopUp.setSpeedAndDirection(4,(negLoop*3.55));
            e6SpinInTopUp.setSpeedAndDirection(2,(negLoop*3.55));
            e6SpinOutRightUp.setSpeedAndDirection(4,(negLoop*3.55)-120);
            e6SpinInRightUp.setSpeedAndDirection(2,(negLoop*3.55)-120);
            e6SpinOutLeftUp.setSpeedAndDirection(4,(negLoop*3.55)+120);
            e6SpinInLeftUp.setSpeedAndDirection(2,(negLoop*3.55)+120);
            
           //collision
           if(eMain.isTouching(e6SpinOutTopUp)||eMain.isTouching(e6SpinOutTopDown)||
           eMain.isTouching(e6SpinInTopUp)||eMain.isTouching(e6SpinInTopDown)||
           eMain.isTouching(e6SpinOutRightUp)||eMain.isTouching(e6SpinInRightUp)||
           eMain.isTouching(e6SpinOutRightDown)||eMain.isTouching(e6SpinInRightDown)||
           eMain.isTouching(e6SpinOutLeftUp)||eMain.isTouching(e6SpinInLeftUp)||
           eMain.isTouching(e6SpinOutLeftDown)||eMain.isTouching(e6SpinInLeftDown)||
           eMain.isTouching(e6SpinMid)||eMain.isTouching(avoidGroupE6)||keyDown("backspace")){
              level=100;eMain.visible=false;
              stopSongs();
              loopCount=0; negLoop=0;
              deathLoopCount=0;playSound("assets/category_digital/fail.mp3", false);
              eMain.setVelocity(0,0);
               eSafe1.visible = eSafe3.visible = eWall61.visible = 
          eWall62.visible = e6SpinOutTopUp.visible=
          e6SpinOutTopUp.visible=e6SpinOutTopDown.visible=
          e6SpinInTopUp.visible=e6SpinInTopDown.visible=
          e6SpinOutRightUp.visible=e6SpinOutRightDown.visible=
          e6SpinInRightUp.visible=e6SpinInRightDown.visible=
          e6SpinOutLeftUp.visible=e6SpinOutLeftDown.visible=
          e6SpinInLeftUp.visible=e6SpinInLeftDown.visible=false;
          avoidGroupE6.setVisibleEach(false);
          avoidGroupE6.setVelocityXEach(0);
          e6SpinMid.setVisibleEach(false);
          spinnerE6Reset();
            }
            //check if eLevel6 is passed
            if((eSafe==1)&&(eMain.isTouching(eSafe3))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=3;
              randomChallenge(3);
              eMain.x=eSafe3.x;eMain.y=eSafe3.y;
              loopCount=100;
              deathLoopCount=loopCount;
             eSafe1.visible = eSafe3.visible = eWall61.visible = 
          eWall62.visible = e6SpinOutTopUp.visible=
          e6SpinOutTopUp.visible=e6SpinOutTopDown.visible=
          e6SpinInTopUp.visible=e6SpinInTopDown.visible=
          e6SpinOutRightUp.visible=e6SpinOutRightDown.visible=
          e6SpinInRightUp.visible=e6SpinInRightDown.visible=
          e6SpinOutLeftUp.visible=e6SpinOutLeftDown.visible=
          e6SpinInLeftUp.visible=e6SpinInLeftDown.visible=false;
          avoidGroupE6.setVisibleEach(false);
          avoidGroupE6.setVelocityXEach(0);
          e6SpinMid.setVisibleEach(false);
          spinnerE6Reset();
            }else if((eSafe==3)&&(eMain.isTouching(eSafe1))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=1;
              randomChallenge(1);
              eMain.x=eSafe1.x;eMain.y=eSafe1.y;
              loopCount=100;
              deathLoopCount=loopCount;
              eSafe1.visible = eSafe3.visible = eWall61.visible = 
          eWall62.visible = e6SpinOutTopUp.visible=
          e6SpinOutTopUp.visible=e6SpinOutTopDown.visible=
          e6SpinInTopUp.visible=e6SpinInTopDown.visible=
          e6SpinOutRightUp.visible=e6SpinOutRightDown.visible=
          e6SpinInRightUp.visible=e6SpinInRightDown.visible=
          e6SpinOutLeftUp.visible=e6SpinOutLeftDown.visible=
          e6SpinInLeftUp.visible=e6SpinInLeftDown.visible=false;
          avoidGroupE6.setVisibleEach(false);
          avoidGroupE6.setVelocityXEach(0);
          e6SpinMid.setVisibleEach(false);
          spinnerE6Reset();
            }
           eMain.collide(eWall61);eMain.collide(eWall62);
          }
        }else if(eLevel==7){
          if(loopCount==101){
            pickSong();
          //visibility statements
          eSafe2.visible = eSafe3.visible =  eWall71.visible=eWall72.visible=true;
          shiftAvoid71.setVisibleEach(true);shiftAvoid72.setVisibleEach(true);
          shiftAvoid73.setVisibleEach(true);shiftAvoid74.setVisibleEach(true);
          shiftAvoid75.setVisibleEach(true);
        
          shiftAvoid71.setVelocityEach(3,0);shiftAvoid72.setVelocityEach(-2.5,0);
          shiftAvoid73.setVelocityEach(1.5,0);shiftAvoid74.setVelocityEach(-4,0);
          shiftAvoid75.setVelocityEach(4,0);
          }else{
            //avoid movement
            if(shiftAvoid71.get(0).isTouching(wallLeft)){
              shiftAvoid71.setVelocityEach(3,0);
            }else if(shiftAvoid71.get(2).isTouching(wallRight)){
              shiftAvoid71.setVelocityEach(-3,0);
            } if(shiftAvoid72.get(0).isTouching(wallLeft)){
              shiftAvoid72.setVelocityEach(2.5,0);
            }else if(shiftAvoid72.get(5).isTouching(wallRight)){
              shiftAvoid72.setVelocityEach(-2.5,0);
            } if(shiftAvoid73.get(0).isTouching(wallLeft)){
              shiftAvoid73.setVelocityEach(1.5,0);
            }else if(shiftAvoid73.get(17).isTouching(wallRight)){
              shiftAvoid73.setVelocityEach(-1.5,0);
            } if(shiftAvoid74.get(0).isTouching(wallLeft)){
              shiftAvoid74.setVelocityEach(4,0);
            }else if(shiftAvoid74.get(1).isTouching(wallRight)){
              shiftAvoid74.setVelocityEach(-4,0);
            } if(shiftAvoid75.get(0).isTouching(wallLeft)){
              shiftAvoid75.setVelocityEach(4,0);
            }else if(shiftAvoid75.get(1).isTouching(wallRight)){
              shiftAvoid75.setVelocityEach(-4,0);
            }
            
              //collision
              if(eMain.isTouching(shiftAvoid71)||eMain.isTouching(shiftAvoid72)||
              eMain.isTouching(shiftAvoid73)||eMain.isTouching(shiftAvoid74)||
              eMain.isTouching(shiftAvoid75)||keyDown("backspace")){
                level=100;eMain.visible=false;
                stopSongs();
              loopCount=0; playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=0;
              eMain.setVelocity(0,0);
             eSafe2.visible = eSafe3.visible =  eWall71.visible=eWall72.visible=false;
          shiftAvoid71.setVisibleEach(false);shiftAvoid72.setVisibleEach(false);
          shiftAvoid73.setVisibleEach(false);shiftAvoid74.setVisibleEach(false);
          shiftAvoid75.setVisibleEach(false);
          shiftAvoid71.setVelocityEach(0,0);shiftAvoid72.setVelocityEach(0,0);
          shiftAvoid73.setVelocityEach(0,0);shiftAvoid74.setVelocityEach(0,0);
          shiftAvoid75.setVelocityEach(0,0);
              }
              //check if eLevel7 is passed
              if((eSafe==3)&&(eMain.isTouching(eSafe2))){
                playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=2;
              randomChallenge(2);
              eMain.x=eSafe2.x;eMain.y=eSafe2.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
             eSafe2.visible = eSafe3.visible =  eWall71.visible=eWall72.visible=false;
          shiftAvoid71.setVisibleEach(false);shiftAvoid72.setVisibleEach(false);
          shiftAvoid73.setVisibleEach(false);shiftAvoid74.setVisibleEach(false);
          shiftAvoid75.setVisibleEach(false);
          shiftAvoid71.setVelocityEach(0,0);shiftAvoid72.setVelocityEach(0,0);
          shiftAvoid73.setVelocityEach(0,0);shiftAvoid74.setVelocityEach(0,0);
          shiftAvoid75.setVelocityEach(0,0);
            }else if((eSafe==2)&&(eMain.isTouching(eSafe3))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=3;
              randomChallenge(3);
              eMain.x=eSafe3.x;eMain.y=eSafe3.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
             eSafe2.visible = eSafe3.visible =  eWall71.visible=eWall72.visible=false;
          shiftAvoid71.setVisibleEach(false);shiftAvoid72.setVisibleEach(false);
          shiftAvoid73.setVisibleEach(false);shiftAvoid74.setVisibleEach(false);
          shiftAvoid75.setVisibleEach(false);
          shiftAvoid71.setVelocityEach(0,0);shiftAvoid72.setVelocityEach(0,0);
          shiftAvoid73.setVelocityEach(0,0);shiftAvoid74.setVelocityEach(0,0);
          shiftAvoid75.setVelocityEach(0,0);
            }
              
          eMain.collide(eWall72); eMain.collide(eWall71);
          }
        }else if(eLevel==8){
          if(loopCount==101){
            pickSong();
          //visibility statements
          eSafe2.visible = eSafe3.visible = eWall71.visible=eWall72.visible=
          eWall81.visible=eWall82.visible=true;
          avoidE8BotSide.setVisibleEach(true); avoidE8Mid.setVisibleEach(true);
          avoidE8BotRight.setVisibleEach(true);avoidE8BotLeft.setVisibleEach(true);
          avoidE8BotSide.setVelocityYEach(-3.375);avoidE8Mid.setVelocityYEach(3.375);
          avoidE8BotLeft.setVelocityXEach(-2.5);avoidE8BotRight.setVelocityXEach(2.5);
          }else{
            //avoid circle movement
            if(avoidE8BotSide.get(0).y<107.5){
              avoidE8BotSide.setVelocityYEach(3.375);
            }else if(avoidE8BotSide.get(0).y>315){
              avoidE8BotSide.setVelocityYEach(-3.375);
            } if(avoidE8Mid.get(0).y<107.5){
              avoidE8Mid.setVelocityYEach(3.375);
            }else if(avoidE8Mid.get(0).y>315){
              avoidE8Mid.setVelocityYEach(-3.375);
            }if(avoidE8BotLeft.get(0).x<30){
              avoidE8BotLeft.setVelocityXEach(2.5);
            }else if(avoidE8BotLeft.get(0).x>=185){
              avoidE8BotLeft.setVelocityXEach(-2.5);
            }if(avoidE8BotRight.get(0).x<=215){
              avoidE8BotRight.setVelocityXEach(2.5);
            }else if(avoidE8BotRight.get(0).x>370){
              avoidE8BotRight.setVelocityXEach(-2.5);
            }
            //collision
            if(eMain.isTouching(avoidE8BotSide)||eMain.isTouching(avoidE8Mid)||
            eMain.isTouching(avoidE8BotRight)||eMain.isTouching(avoidE8BotLeft)||keyDown("backspace")){
                level=100;eMain.visible=false;
                stopSongs();
              loopCount=0; playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=0;
              eMain.setVelocity(0,0);
             eSafe2.visible = eSafe3.visible = eWall71.visible=eWall72.visible=
          eWall81.visible=eWall82.visible=false;
          avoidE8BotSide.setVisibleEach(false); avoidE8Mid.setVisibleEach(false);
          avoidE8BotRight.setVisibleEach(false);avoidE8BotLeft.setVisibleEach(false);
          avoidE8BotSide.setVelocityYEach(0);avoidE8Mid.setVelocityYEach(0);
          avoidE8BotLeft.setVelocityXEach(0);avoidE8BotRight.setVelocityXEach(0);
              }
              //check if eLevel7 is passed
              if((eSafe==3)&&(eMain.isTouching(eSafe2))){
                playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=2;
              randomChallenge(2);
              eMain.x=eSafe2.x;eMain.y=eSafe2.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
             eSafe2.visible = eSafe3.visible = eWall71.visible=eWall72.visible=
          eWall81.visible=eWall82.visible=false;
          avoidE8BotSide.setVisibleEach(false); avoidE8Mid.setVisibleEach(false);
          avoidE8BotRight.setVisibleEach(false);avoidE8BotLeft.setVisibleEach(false);
          avoidE8BotSide.setVelocityYEach(0);avoidE8Mid.setVelocityYEach(0);
          avoidE8BotLeft.setVelocityXEach(0);avoidE8BotRight.setVelocityXEach(0);
            }else if((eSafe==2)&&(eMain.isTouching(eSafe3))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=3;
              randomChallenge(3);
              eMain.x=eSafe3.x;eMain.y=eSafe3.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
             eSafe2.visible = eSafe3.visible = eWall71.visible=eWall72.visible=
          eWall81.visible=eWall82.visible=false;
          avoidE8BotSide.setVisibleEach(false); avoidE8Mid.setVisibleEach(false);
          avoidE8BotRight.setVisibleEach(false);avoidE8BotLeft.setVisibleEach(false);
          avoidE8BotSide.setVelocityYEach(0);avoidE8Mid.setVelocityYEach(0);
          avoidE8BotLeft.setVelocityXEach(0);avoidE8BotRight.setVelocityXEach(0);
            }
            eMain.collide(eWall71);eMain.collide(eWall72);
            eMain.collide(eWall81);eMain.collide(eWall82);
          }
        }else if(eLevel==9){
          if(loopCount==101){
            pickSong();
            //visibility statements
          eSafe3.visible = eSafe4.visible = eWall91.visible = eWall92.visible = 
          eWall93.visible = true;
        avoidE9TopLeft.setVisibleEach(true);avoidE9TopRight.setVisibleEach(true);
        avoidE9BotLeft.setVisibleEach(true);avoidE9BotRight.setVisibleEach(true);
        avoidE9TopLeft.setVelocityEach(1,5);avoidE9TopRight.setVelocityEach(-1,5);
        avoidE9BotLeft.setVelocityEach(1,-5);avoidE9BotRight.setVelocityEach(-1,-5);
          }else{
          //avoid circle movement
          if(avoidE9TopLeft.get(0).x>190){
            avoidE9TopLeft.setVelocityXEach(-1);
          }else if(avoidE9TopLeft.get(0).x<75){
            avoidE9TopLeft.setVelocityXEach(1);
          }if(avoidE9TopLeft.get(0).y<245){
            avoidE9TopLeft.setVelocityYEach(5);
          }else if(avoidE9TopLeft.get(0).y>375){
            avoidE9TopLeft.setVelocityYEach(-5);
          }if(avoidE9TopRight.get(0).x>190){
            avoidE9TopRight.setVelocityXEach(-1);
          }else if(avoidE9TopRight.get(0).x<75){
            avoidE9TopRight.setVelocityXEach(1);
          }if(avoidE9TopRight.get(0).y<245){
            avoidE9TopRight.setVelocityYEach(5);
          }else if(avoidE9TopRight.get(0).y>375){
            avoidE9TopRight.setVelocityYEach(-5);
          }if(avoidE9BotLeft.get(0).x>190){
            avoidE9BotLeft.setVelocityXEach(-1);
          }else if(avoidE9BotLeft.get(0).x<75){
            avoidE9BotLeft.setVelocityXEach(1);
          }if(avoidE9BotLeft.get(0).y<245){
            avoidE9BotLeft.setVelocityYEach(5);
          }else if(avoidE9BotLeft.get(0).y>375){
            avoidE9BotLeft.setVelocityYEach(-5);
          }if(avoidE9BotRight.get(0).x>190){
            avoidE9BotRight.setVelocityXEach(-1);
          }else if(avoidE9BotRight.get(0).x<75){
            avoidE9BotRight.setVelocityXEach(1);
          }if(avoidE9BotRight.get(0).y<245){
            avoidE9BotRight.setVelocityYEach(5);
          }else if(avoidE9BotRight.get(0).y>375){
            avoidE9BotRight.setVelocityYEach(-5);
          }
          //collision 
          if(eMain.isTouching(avoidE9TopLeft)||eMain.isTouching(avoidE9TopRight)||
          eMain.isTouching(avoidE9BotLeft)||eMain.isTouching(avoidE9BotRight)||keyDown("backspace")){
                level=100;eMain.visible=false;
                stopSongs();
              loopCount=0; playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=0;
              eMain.setVelocity(0,0);
            eSafe3.visible = eSafe4.visible = eWall91.visible = eWall92.visible = 
          eWall93.visible = false;
        avoidE9TopLeft.setVisibleEach(false);avoidE9TopRight.setVisibleEach(false);
        avoidE9BotLeft.setVisibleEach(false);avoidE9BotRight.setVisibleEach(false);
        avoidE9TopLeft.setVelocityEach(0,0);avoidE9TopRight.setVelocityEach(0,0);
        avoidE9BotLeft.setVelocityEach(0,0);avoidE9BotRight.setVelocityEach(0,0);
              }
              //check if eLevel9 is passed
              if((eSafe==3)&&(eMain.isTouching(eSafe4))){
                playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=4;
              randomChallenge(4);
              eMain.x=eSafe4.x;eMain.y=eSafe4.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
                    eSafe3.visible = eSafe4.visible = eWall91.visible = eWall92.visible = 
          eWall93.visible = false;
             avoidE9TopLeft.setVisibleEach(false);avoidE9TopRight.setVisibleEach(false);
        avoidE9BotLeft.setVisibleEach(false);avoidE9BotRight.setVisibleEach(false);
        avoidE9TopLeft.setVelocityEach(0,0);avoidE9TopRight.setVelocityEach(0,0);
        avoidE9BotLeft.setVelocityEach(0,0);avoidE9BotRight.setVelocityEach(0,0);
            }else if((eSafe==4)&&(eMain.isTouching(eSafe3))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=3;
              randomChallenge(3);
              eMain.x=eSafe3.x;eMain.y=eSafe3.y;
              loopCount=100;
              deathLoopCount=loopCount;
            eMain.setVelocity(0,0);
            eSafe3.visible = eSafe4.visible = eWall91.visible = eWall92.visible = 
            eWall93.visible = false;
            avoidE9TopLeft.setVisibleEach(false);avoidE9TopRight.setVisibleEach(false);
            avoidE9BotLeft.setVisibleEach(false);avoidE9BotRight.setVisibleEach(false);
            avoidE9TopLeft.setVelocityEach(0,0);avoidE9TopRight.setVelocityEach(0,0);
            avoidE9BotLeft.setVelocityEach(0,0);avoidE9BotRight.setVelocityEach(0,0);
            }
          eMain.collide(eWall91);eMain.collide(eWall92);
          eMain.collide(eWall93);
          }
        }else if(eLevel==10){
           if(loopCount==101){
             pickSong();
            //visibility statements
          eSafe3.visible = eSafe4.visible = eWall101.visible = eWall102.visible=
          eWall103.visible=avoidE10Top2.visible=avoidE10Bot2.visible=true;
          avoidE10Top.setVisibleEach(true);
          avoidE10Bot.setVisibleEach(true);
          avoidE10Top.setVelocityEach(2.5,0);avoidE10Bot.setVelocityEach(-2.5,0);
          avoidE10Top2.setVelocity(2,0);avoidE10Bot2.setVelocity(-2,0);
          }else{
           //avoid circle movement
           if(avoidE10Top2.x<25){
             avoidE10Top2.setVelocity(2,0);
           }else if(avoidE10Top2.x>375){
             avoidE10Top2.setVelocity(-2,0);
           }if(avoidE10Bot2.x<25){
             avoidE10Bot2.setVelocity(2,0);
           }else if(avoidE10Bot2.x>375){
             avoidE10Bot2.setVelocity(-2,0);
           }
           if(avoidE10Top.get(0).x>95&&avoidE10Top.get(0).velocityX==2.5){
             avoidE10Top.setVelocityEach(0,3);
           }else if(avoidE10Top.get(0).y>325&&avoidE10Top.get(0).velocityY==3){
            avoidE10Top.setVelocityEach(0,-3);
           }else if(avoidE10Top.get(0).y<300&&avoidE10Top.get(0).velocityY==-3){
            avoidE10Top.setVelocityEach(-2.5,0);
           }else if(avoidE10Top.get(0).x<30&&avoidE10Top.get(0).velocityX==-2.5){
          avoidE10Top.setVelocityEach(2.5,0);
           }
           if(avoidE10Bot.get(0).x<30&&avoidE10Bot.get(0).velocityX==-2.5){
             avoidE10Bot.setVelocityEach(0,-3);
           }else if(avoidE10Bot.get(0).y<300&&avoidE10Bot.get(0).velocityY==-3){
            avoidE10Bot.setVelocityEach(0,3);
           }else if(avoidE10Bot.get(0).y>325&&avoidE10Bot.get(0).velocityY==3){
            avoidE10Bot.setVelocityEach(2.5,0);
           }else if(avoidE10Bot.get(0).x>95&&avoidE10Bot.get(0).velocityX==2.5){
          avoidE10Bot.setVelocityEach(-2.5,0);
           }
            //collision
            if(eMain.isTouching(avoidE10Top)||eMain.isTouching(avoidE10Bot)
            ||eMain.isTouching(avoidE10Bot2)||eMain.isTouching(avoidE10Top2)
            ||keyDown("backspace")){
              stopSongs();
                level=100;eMain.visible=false;
              loopCount=0; playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=0;
              eMain.setVelocity(0,0);
            eSafe3.visible = eSafe4.visible = eWall101.visible = eWall102.visible=
          eWall103.visible=avoidE10Top2.visible=avoidE10Bot2.visible=false;
          avoidE10Top.setVisibleEach(false);
          avoidE10Bot.setVisibleEach(false);
          avoidE10Top.setVelocityEach(0,0);avoidE10Bot.setVelocityEach(0,0);
          avoidE10Top2.setVelocity(0,0);avoidE10Bot2.setVelocity(0,0);
              }
              //check if eLevel9 is passed
              if((eSafe==3)&&(eMain.isTouching(eSafe4))){
                playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=4;
              randomChallenge(4);
              eMain.x=eSafe4.x;eMain.y=eSafe4.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
                  eSafe3.visible = eSafe4.visible = eWall101.visible = eWall102.visible=
          eWall103.visible=avoidE10Top2.visible=avoidE10Bot2.visible=false;
          avoidE10Top.setVisibleEach(false);
          avoidE10Bot.setVisibleEach(false);
          avoidE10Top.setVelocityEach(0,0);avoidE10Bot.setVelocityEach(0,0);
          avoidE10Top2.setVelocity(0,0);avoidE10Bot2.setVelocity(0,0);
            }else if((eSafe==4)&&(eMain.isTouching(eSafe3))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=3;
              randomChallenge(3);
              eMain.x=eSafe3.x;eMain.y=eSafe3.y;
              loopCount=100;
              deathLoopCount=loopCount;
            eMain.setVelocity(0,0);
            eSafe3.visible = eSafe4.visible = eWall101.visible = eWall102.visible=
          eWall103.visible=avoidE10Top2.visible=avoidE10Bot2.visible=false;
          avoidE10Top.setVisibleEach(false);
          avoidE10Bot.setVisibleEach(false);
          avoidE10Top.setVelocityEach(0,0);avoidE10Bot.setVelocityEach(0,0);
          avoidE10Top2.setVelocity(0,0);avoidE10Bot2.setVelocity(0,0);
            }
            
            eMain.collide(eWall101);eMain.collide(eWall102);eMain.collide(eWall103);
          }
        }else if(eLevel==11){
           if(loopCount==101){
             pickSong();
            //visibility statements
          eSafe2.visible = eSafe4.visible = eWall111.visible=eWall112.visible=true;
          stillDots11.setVisibleEach(true);
          e11AvoidLeft.setVisibleEach(true);e11AvoidRight.setVisibleEach(true);
          e11AvoidLeft.setVelocityYEach(-3);e11AvoidRight.setVelocityYEach(3);
          }else{
            //avoid circle movement
            if(e11AvoidLeft.get(0).y>373){
              e11AvoidLeft.setVelocityYEach(-3);
            }else if(e11AvoidLeft.get(0).y<48){
              e11AvoidLeft.setVelocityYEach(3);
            }if(e11AvoidRight.get(0).y>373){
              e11AvoidRight.setVelocityYEach(-3);
            }else if(e11AvoidRight.get(0).y<48){
              e11AvoidRight.setVelocityYEach(3);
            }
           //collision
           if(eMain.isTouching(e11AvoidRight)||eMain.isTouching(e11AvoidLeft)||
            eMain.isTouching(stillDots11)||keyDown("backspace")){
                level=100;eMain.visible=false;
                stopSongs();
              loopCount=0; playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=0;
              eMain.setVelocity(0,0);
             eSafe2.visible = eSafe4.visible = eWall111.visible=eWall112.visible=false;
          stillDots11.setVisibleEach(false);
          e11AvoidLeft.setVisibleEach(false);e11AvoidRight.setVisibleEach(false);
          e11AvoidLeft.setVelocityYEach(0);e11AvoidRight.setVelocityYEach(0);
              }
              //check if eLevel11 is passed
              if((eSafe==4)&&(eMain.isTouching(eSafe2))){
                playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=2;
              randomChallenge(2);
              eMain.x=eSafe2.x;eMain.y=eSafe2.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
             eSafe2.visible = eSafe4.visible = eWall111.visible=eWall112.visible=false;
          stillDots11.setVisibleEach(false);
          e11AvoidLeft.setVisibleEach(false);e11AvoidRight.setVisibleEach(false);
          e11AvoidLeft.setVelocityYEach(0);e11AvoidRight.setVelocityYEach(0);
            }else if((eSafe==2)&&(eMain.isTouching(eSafe4))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=4;
              randomChallenge(4);
              eMain.x=eSafe4.x;eMain.y=eSafe4.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
           eSafe2.visible = eSafe4.visible = eWall111.visible=eWall112.visible=false;
          stillDots11.setVisibleEach(false);
          e11AvoidLeft.setVisibleEach(false);e11AvoidRight.setVisibleEach(false);
          e11AvoidLeft.setVelocityYEach(0);e11AvoidRight.setVelocityYEach(0);
            }
           eMain.collide(eWall111);eMain.collide(eWall112);
          }
        }else if(eLevel==12){
           if(loopCount==101){
             pickSong();
            //visibility statements
          eSafe2.visible = eSafe4.visible = true;
          eWall12.setVisibleEach(true);
          e12Avoid1.setVisibleEach(true);e12Avoid2.setVisibleEach(true);
          e12Avoid3.setVisibleEach(true);e12Avoid4.setVisibleEach(true);
          e12Avoid5.setVisibleEach(true);e12Avoid6.setVisibleEach(true);
            e12Avoid1.setVelocityXEach(5);e12Avoid2.setVelocityXEach(-5);
            e12Avoid3.setVelocityXEach(4.268);e12Avoid4.setVelocityXEach(-3.3696);
            e12Avoid5.setVelocityXEach(2.5543);e12Avoid6.setVelocityXEach(-1.7391);
          }else{
           //avoid circle movement
          if(e12Avoid1.get(0).x>324){
            e12Avoid1.setVelocityXEach(-5);
          }else if(e12Avoid1.get(0).x<140){
            e12Avoid1.setVelocityXEach(5);
          }if(e12Avoid2.get(0).x>324){
            e12Avoid2.setVelocityXEach(-5);
          }else if(e12Avoid2.get(0).x<140){
            e12Avoid2.setVelocityXEach(5);
          }if(e12Avoid3.get(0).x>294){
            e12Avoid3.setVelocityXEach(-4.268);
          }else if(e12Avoid3.get(0).x<140){
            e12Avoid3.setVelocityXEach(4.268);
          }if(e12Avoid4.get(0).x>264){
            e12Avoid4.setVelocityXEach(-3.3696);
          }else if(e12Avoid4.get(0).x<140){
            e12Avoid4.setVelocityXEach(3.3696);
          }if(e12Avoid5.get(0).x>234){
            e12Avoid5.setVelocityXEach(-2.5543);
          }else if(e12Avoid5.get(0).x<140){
            e12Avoid5.setVelocityXEach(2.5543);
          }if(e12Avoid6.get(0).x>204){
            e12Avoid6.setVelocityXEach(-1.7391);
          }else if(e12Avoid6.get(0).x<140){
            e12Avoid6.setVelocityXEach(1.7391);
          }
          //collision
          if(eMain.isTouching(e12Avoid1)||eMain.isTouching(e12Avoid2)||
            eMain.isTouching(e12Avoid3)||eMain.isTouching(e12Avoid4)||
            eMain.isTouching(e12Avoid5)||eMain.isTouching(e12Avoid6)||keyDown("backspace")){
              stopSongs();
                level=100;eMain.visible=false;
              loopCount=0; playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=0;
              eMain.setVelocity(0,0);
             eSafe2.visible = eSafe4.visible = false;
          eWall12.setVisibleEach(false);
          e12Avoid1.setVisibleEach(false);e12Avoid2.setVisibleEach(false);
          e12Avoid3.setVisibleEach(false);e12Avoid4.setVisibleEach(false);
          e12Avoid5.setVisibleEach(false);e12Avoid6.setVisibleEach(false);
            e12Avoid1.setVelocityXEach(0);e12Avoid2.setVelocityXEach(0);
            e12Avoid3.setVelocityXEach(0);e12Avoid4.setVelocityXEach(0);
            e12Avoid5.setVelocityXEach(0);e12Avoid6.setVelocityXEach(0);
              }
              //check if eLevel12 is passed
              if((eSafe==4)&&(eMain.isTouching(eSafe2))){
                playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=2;
              randomChallenge(2);
              eMain.x=eSafe2.x;eMain.y=eSafe2.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
              eSafe2.visible = eSafe4.visible = false;
          eWall12.setVisibleEach(false);
          e12Avoid1.setVisibleEach(false);e12Avoid2.setVisibleEach(false);
          e12Avoid3.setVisibleEach(false);e12Avoid4.setVisibleEach(false);
          e12Avoid5.setVisibleEach(false);e12Avoid6.setVisibleEach(false);
            e12Avoid1.setVelocityXEach(0);e12Avoid2.setVelocityXEach(0);
            e12Avoid3.setVelocityXEach(0);e12Avoid4.setVelocityXEach(0);
            e12Avoid5.setVelocityXEach(0);e12Avoid6.setVelocityXEach(0);
            }else if((eSafe==2)&&(eMain.isTouching(eSafe4))){
              playSound("assets/category_digital/power_up.mp3",false);
              score+=1; eSafe=4;
              randomChallenge(4);
              eMain.x=eSafe4.x;eMain.y=eSafe4.y;
              loopCount=100;
              deathLoopCount=loopCount;
                   eMain.setVelocity(0,0);
            eSafe2.visible = eSafe4.visible = false;
          eWall12.setVisibleEach(false);
          e12Avoid1.setVisibleEach(false);e12Avoid2.setVisibleEach(false);
          e12Avoid3.setVisibleEach(false);e12Avoid4.setVisibleEach(false);
          e12Avoid5.setVisibleEach(false);e12Avoid6.setVisibleEach(false);
            e12Avoid1.setVelocityXEach(0);e12Avoid2.setVelocityXEach(0);
            e12Avoid3.setVelocityXEach(0);e12Avoid4.setVelocityXEach(0);
            e12Avoid5.setVelocityXEach(0);e12Avoid6.setVelocityXEach(0);
            }
          eMain.collide(eWall12);
          }
        
        
        }
        eMain.collide(wallTop); eMain.collide(wallBottom);
        eMain.collide(wallRight); eMain.collide(wallLeft);
        drawSprites();
        textAlign(CENTER, TOP);
        stroke(titleColor);
        fill(titleColor);
        textSize(18);
        strokeWeight(0.5);
        if(score<10&&topScore<10){
        text("Difficulty: Easy    Challenge " + eLevel+" / 12     Score: " + score, 200, 10);
        }else{
        if(score>99)(text("Difficulty: Hard    Challenge " + eLevel+" / 12    Score: " + score, 200, 10));
        else(text("Difficulty: Hard    Challenge " + eLevel+" / 12     Score: " + score, 200, 10));
        }
        showSong();
      }
    } else if (level == 100){
      loopCount+=1;
      if(loopCount<125){
        fill(textColor);
        textAlign('center');
            textSize(50);
            background(backColor);
            drawSprites();
            text("Game Over", 200, 200);
            textSize(25);
            let pointsText = ""
            if (score == 1) {
              pointsText = 'You scored 1 point';
            } else {
              pointsText = 'You scored '+score+' points';
            }

            var totalTime = Math.round(totalLooped/30);
            if(totalTime<60){
              if(totalTime == 1){
                text(pointsText+'\nand lasted '+totalTime+' second', 200, 250);
              } else {
                text(pointsText+'\nand lasted '+totalTime+' seconds', 200, 250);
              }
            }else if(totalTime%60<10){
            text(pointsText+'\nand lasted for '+((totalTime-(totalTime%60))/60)+':0'+totalTime%60, 200, 250);
            }else{
              text(pointsText+'\nand lasted for '+((totalTime-(totalTime%60))/60)+':'+totalTime%60, 200, 250);
            }

      }else{
        // update the database if necessary
        for (let i = 0; i < 5; i++) {
          if(leaderboardScores[i] <= score) {
            // add the new score, delete the bottom one
            leaderboardScores.splice(i, 0, score);
            leaderboardScores = leaderboardScores.slice(0,5);
            
            // get and add the date, delete the bottom one
            let date = month()+"/"+day()+"/"+year();
            leaderboardDates.splice(i, 0, date);
            leaderboardDates = leaderboardDates.slice(0,5);

            //update the database 
            let newData = {dates: leaderboardDates, scores: leaderboardScores};
            updateDoc(leaderboardDoc, newData).then(() => {
              console.log("leaderboard updated successfully. New data:")
              console.log(newData)
            }).catch((err) => {
              console.error("Error updating leaderboard document: "+err);
            });

            break;
          }
        }



        if(topScore<score){
          topScore=score;
        }
        loopCount=0;
        score=0;
        level=98;
        totalLooped=0;
      }
    } else if (level == 1) {
    loopCount += 1;
        if (loopCount < 100) {
           fill('black');
            textSize(50);
            background("white");
            drawSprites();
            text('GOOD LUCK.', 45, 200);
            textSize(25);
            text('(You may need it)', 100, 250);
        } else if(loopCount==100){
          if(!playingSong[3]){
               playSound("assets/Music/Mellow.mp3", true);
               playingSong[3]=true;
             }
          //visibility statements      
      safe21.visible = main2.visible = safe22.visible = midBackground2.visible =
          wallMid21.visible = wallMid22.visible = respawn2.visible = avoid21.visible = 
          avoid22.visible = avoid23.visible = avoid24.visible = wallMid23.visible = 
          key21.visible = key22.visible = key23.visible = point2.visible = true;
          wallMidGroup21Bot.setVisibleEach(true);
          wallMidGroup21Top.setVisibleEach(true);
          avoidWallGroup2.setVisibleEach(true);
          avoid21.velocityY=avoid22.velocityY=avoid23.velocityY=avoid24.velocityY=2;
          main2.x=safe21.x;main2.y=safe21.y;
        }else{
           background('white');
           if(deathLoopCount+50<loopCount){
           mainCharacterMovement(main2);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main2.visible=true;
             }else{
               main2.visible=false;
             }
             main2.velocityX=0;
             main2.velocityY=0;
           }
           //avoid mid movement
           if(avoid21.isTouching(wallMidGroup21Bot)||avoid21.isTouching(wallMid22))(avoid21.velocityY=-2);
           else if(avoid21.isTouching(wallMidGroup21Top))(avoid21.velocityY=2);
           if(avoid22.isTouching(wallMidGroup21Bot)||avoid22.isTouching(wallMid22))(avoid22.velocityY=-2);
           else if(avoid22.isTouching(wallMidGroup21Top))(avoid22.velocityY=2);
           if(avoid23.isTouching(wallMidGroup21Bot)||avoid23.isTouching(wallMid22))(avoid23.velocityY=-2);
           else if(avoid23.isTouching(wallMidGroup21Top))(avoid23.velocityY=2);
           if(avoid24.isTouching(wallMidGroup21Bot)||avoid24.isTouching(wallMid22))(avoid24.velocityY=-2);
           else if(avoid24.isTouching(wallTop))(avoid24.velocityY=2);
           
           //blinking tiles conditional statements
          if((loopCount%80>=0)&&(loopCount%80<=40))(tileGroup21.setVisibleEach(false));
          else(tileGroup21.setVisibleEach(true));
          if((loopCount%80>=8)&&(loopCount%80<=48))(tileGroup22.setVisibleEach(false));
          else(tileGroup22.setVisibleEach(true));  
          if((loopCount%80>=16)&&(loopCount%80<=56))(tileGroup23.setVisibleEach(false));
          else(tileGroup23.setVisibleEach(true));  
          if((loopCount%80>=24)&&(loopCount%80<=64))(tileGroup24.setVisibleEach(false));
          else(tileGroup24.setVisibleEach(true));  
          if((loopCount%80>=32)&&(loopCount%80<=72))(tileGroup25.setVisibleEach(false));
          else(tileGroup25.setVisibleEach(true));  
          if((loopCount%80>=40)||(loopCount%80==0))(tileGroup26.setVisibleEach(false));
          else(tileGroup26.setVisibleEach(true));  
          if((loopCount%80>=48)||(loopCount%80<=8))(tileGroup27.setVisibleEach(false));
          else(tileGroup27.setVisibleEach(true));  
          if((loopCount%80>=56)||(loopCount%80<=16))(tileGroup28.setVisibleEach(false));
          else(tileGroup28.setVisibleEach(true));  
          if((loopCount%80>=64)||(loopCount%80<=24))(tileGroup29.setVisibleEach(false));
          else(tileGroup29.setVisibleEach(true));  
          if((loopCount%80>=72)||(loopCount%80<=32))(tileGroup210.setVisibleEach(false));
          else(tileGroup210.setVisibleEach(true));  
    
          //collision
          if((main2.isTouching(tileGroup21)&&(tileGroup21.get(0).visible))||(main2.isTouching(tileGroup22)&&(tileGroup22.get(0).visible))
          ||(main2.isTouching(tileGroup23)&&(tileGroup23.get(0).visible))||(main2.isTouching(tileGroup24)&&(tileGroup24.get(0).visible))
          ||(main2.isTouching(tileGroup25)&&(tileGroup25.get(0).visible))||(main2.isTouching(tileGroup26)&&(tileGroup26.get(0).visible))
          ||(main2.isTouching(tileGroup27)&&(tileGroup27.get(0).visible))||(main2.isTouching(tileGroup28)&&(tileGroup28.get(0).visible))
          ||(main2.isTouching(tileGroup29)&&(tileGroup29.get(0).visible))||(main2.isTouching(tileGroup210)&&(tileGroup210.get(0).visible))
          ||main2.isTouching(avoid21)||main2.isTouching(avoid22)||main2.isTouching(avoid23)
           ||main2.isTouching(avoid24)||main2.isTouching(avoidWallGroup2)){
             main2.x = respawnX;
             main2.y = respawnY;
             deaths+=1;playSound("assets/category_digital/fail.mp3", false);
             deathLoopCount=loopCount;
             if(hardModeOn){
            if(!key21.visible){
              keyCount--;
              key21.visible=true;
            }if(!key22.visible&&!checkpointReached){
              keyCount--;
              key22.visible=true;
            }if(!key23.visible&&!checkpointReached){
               keyCount--;
              key23.visible=true;
            }if(!point2.visible){
               score--;
              point2.visible=true;
            }
             }
          }
           if(main2.isTouching(respawn2)){
             respawnX = 50;
             respawnY = 176;
             checkpointReached=true;
           }
           if(main2.isTouching(point2)&&point2.visible==true){
             point2.visible=false;
             score+=1;playSound("assets/category_digital/coin_1.mp3", false);
           } else if(main2.isTouching(key21)&&key21.visible==true){
             key21.visible=false;
             keyCount+=1;playSound("assets/category_digital/coin_3.mp3", false);
           } else if(main2.isTouching(key22)&&key22.visible==true){
             key22.visible=false;
             keyCount+=1;playSound("assets/category_digital/coin_3.mp3", false);
           } else if(main2.isTouching(key23)&&key23.visible==true){
             key23.visible=false;
             keyCount+=1;playSound("assets/category_digital/coin_3.mp3", false);
           }
           main2.collide(wallLeft); main2.collide(wallBottom); 
           main2.collide(wallRight); main2.collide(wallTop);
          main2.collide(wallMid21); main2.collide(wallMid22);
          main2.collide(wallMidGroup21Bot); main2.collide(wallMidGroup21Top);
          main2.collide(wallMid23);
          
          //check if level 1 is passed
          if((keyCount==3)&&main2.isTouching(safe22)){
            playSound("assets/category_digital/power_up.mp3",false);
            stopSound("assets/Music/Mellow.mp3", true);
            playingSong[3]=false;
          level=2;main2.setVelocity(0,0);
          safe21.visible = main2.visible = safe22.visible = midBackground2.visible =
          wallMid21.visible = wallMid22.visible = respawn2.visible = avoid21.visible = 
          avoid22.visible = avoid23.visible = avoid24.visible = wallMid23.visible = 
          key21.visible = key22.visible = key23.visible = point2.visible = false;
          wallMidGroup21Bot.setVisibleEach(false);
          wallMidGroup21Top.setVisibleEach(false);
          avoidWallGroup2.setVisibleEach(false);
          tileGroup21.setVisibleEach(false);tileGroup22.setVisibleEach(false);
          tileGroup23.setVisibleEach(false); tileGroup24.setVisibleEach(false);
          tileGroup25.setVisibleEach(false); tileGroup26.setVisibleEach(false);
          tileGroup27.setVisibleEach(false); tileGroup28.setVisibleEach(false);
          tileGroup29.setVisibleEach(false);  tileGroup210.setVisibleEach(false);
          avoid21.setVelocity(0,0);avoid22.setVelocity(0,0);
          avoid23.setVelocity(0,0);avoid24.setVelocity(0,0);
          avoid21.y=avoid22.y=avoid23.y=avoid24.y=220;
          respawnX = 30;
          respawnY = 63;
          loopCount=0;
          keyCount=0;
          deathLoopCount=0;
          checkpointReached=false;
          }
          if(keyDown("backspace")){
            level=0; main0.x=200;main0.y=250;
            main2.setVelocity(0,0);
            stopSound("assets/Music/Mellow.mp3", true);
            playingSong[3]=false;
          safe21.visible = main2.visible = safe22.visible = midBackground2.visible =
          wallMid21.visible = wallMid22.visible = respawn2.visible = avoid21.visible = 
          avoid22.visible = avoid23.visible = avoid24.visible = wallMid23.visible = 
          key21.visible = key22.visible = key23.visible = point2.visible = false;
          wallMidGroup21Bot.setVisibleEach(false);
          wallMidGroup21Top.setVisibleEach(false);
          avoidWallGroup2.setVisibleEach(false);
          tileGroup21.setVisibleEach(false);tileGroup22.setVisibleEach(false);
          tileGroup23.setVisibleEach(false); tileGroup24.setVisibleEach(false);
          tileGroup25.setVisibleEach(false); tileGroup26.setVisibleEach(false);
          tileGroup27.setVisibleEach(false); tileGroup28.setVisibleEach(false);
          tileGroup29.setVisibleEach(false);  tileGroup210.setVisibleEach(false);
          avoid21.setVelocity(0,0);avoid22.setVelocity(0,0);
          avoid23.setVelocity(0,0);avoid24.setVelocity(0,0);
          avoid21.y=avoid22.y=avoid23.y=avoid24.y=220;
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          }
           drawSprites();
           gameInfoText();
           showSong();
        }
    
    } else if (level == 2) {
        loopCount += 1;
        if (loopCount < 100) {
           fill('black');
            textSize(40);
            background("white");
            drawSprites();
            text("Now That You're", 50, 200);
            textSize(40);
            text('Warmed Up...', 80, 250);
        } else if (loopCount == 100){
            if(!playingSong[4]){
               playSound("assets/Music/Spiritdancer.mp3", true);
               playingSong[4]=true;
             }
          avoidGroup1MidUp.setVelocityYEach(-3);
          avoidGroup1MidDown.setVelocityYEach(3);
          avoidGroup11.setVelocityYEach(6);
          avoidGroup1Bot.setVelocityXEach(7);
          //visibility statements
          main.visible = safe11.visible = safe12.visible = wallMid11.visible = wallMid12.visible = 
          wallMid13.visible = wallMid14.visible = wallMid15.visible = background1.visible=
          key11.visible = key12.visible = key13.visible = point1.visible = true;
          avoidGroup11.setVisibleEach(true);
          avoidGroup1Bot.setVisibleEach(true);
          avoidGroup1MidUp.setVisibleEach(true);
          avoidGroup1MidDown.setVisibleEach(true);
          main.x=safe11.x;main.y=safe11.y;
        }
          else{
           background("white");
            if(deathLoopCount+50<loopCount){
           mainCharacterMovement(main);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main.visible=true;
             }else{
               main.visible=false;
             }
             main.velocityX=0;
             main.velocityY=0;
           }
           //avoid sprite movement
           if(avoidGroup11.isTouching(wallTop)){
             avoidGroup11.setVelocityYEach(6);
           } else if(avoidGroup11.get(1).y>=331){
              avoidGroup11.setVelocityYEach(-6);
           }
           if(avoidGroup1Bot.isTouching(wallLeft)){
            avoidGroup1Bot.setVelocityXEach(7);
           } else if(avoidGroup1Bot.isTouching(wallRight)){
            avoidGroup1Bot.setVelocityXEach(-7);
           }
           if(avoidGroup1MidUp.get(4).y<97){
             avoidGroup1MidUp.setVelocityYEach(3);
           }
           else if(avoidGroup1MidUp.get(0).y>333){
             avoidGroup1MidUp.setVelocityYEach(-3);
           }
           if(avoidGroup1MidDown.get(4).y<97){
             avoidGroup1MidDown.setVelocityYEach(3);
           }
           else if(avoidGroup1MidDown.get(0).y>333){
             avoidGroup1MidDown.setVelocityYEach(-3);
           }
           main.collide(wallTop); main.collide(wallBottom);
           main.collide(wallRight); main.collide(wallLeft);
           main.collide(wallMid11); main.collide(wallMid12); 
           main.collide(wallMid13); main.collide(wallMid14);
           main.collide(wallMid15);
           
           //avoid group collision
           if(main.isTouching(avoidGroup1Bot)||main.isTouching(avoidGroup11)
           ||main.isTouching(avoidGroup1MidUp)||main.isTouching(avoidGroup1MidDown)){
             deaths+=1;playSound("assets/category_digital/fail.mp3", false);
             main.x = respawnX;
             main.y = respawnY;
             deathLoopCount=loopCount;
             if(hardModeOn){
            if(!key11.visible){
              keyCount--;
              key11.visible=true;
            }if(!key12.visible){
              keyCount--;
              key12.visible=true;
            }if(!key13.visible){
               keyCount--;
              key13.visible=true;
            }if(!point1.visible){
               score--;
              point1.visible=true;
            }
             }
           }
           if(main.isTouching(point1)&&point1.visible==true){
             point1.visible=false;
             score+=1;playSound("assets/category_digital/coin_1.mp3", false);
           } else if(main.isTouching(key11)&&key11.visible==true){
             key11.visible=false;
             keyCount+=1;playSound("assets/category_digital/coin_3.mp3", false);
           } else if(main.isTouching(key12)&&key12.visible==true){
             key12.visible=false;
             keyCount+=1;playSound("assets/category_digital/coin_3.mp3", false);
           } else if(main.isTouching(key13)&&key13.visible==true){
             key13.visible=false;
             keyCount+=1;playSound("assets/category_digital/coin_3.mp3", false);
           }
           
           //check if level 2 is passed
           if((keyCount==3)&&main.isTouching(safe12)){
             stopSound("assets/Music/Spiritdancer.mp3", true);
               playingSong[4]=false;
             playSound("assets/category_digital/power_up.mp3",false);
             level=3; main.setVelocity(0,0);
             main.visible = safe11.visible = safe12.visible = wallMid11.visible = wallMid12.visible = 
          wallMid13.visible = wallMid14.visible = wallMid15.visible = background1.visible=
          key11.visible = key12.visible = key13.visible = point1.visible = false;
         
          avoidGroup1Bot.setVisibleEach(false); avoidGroup11.setVisibleEach(false);
          avoidGroup1MidUp.setVisibleEach(false);avoidGroup1MidDown.setVisibleEach(false);  
          avoidGroup1Bot.setVelocityEach(0,0);avoidGroup1MidUp.setVelocityEach(0,0);
          avoidGroup11.setVelocityEach(0,0);avoidGroup1MidDown.setVelocityEach(0,0);
              respawnX = safe31.x;
              respawnY = safe31.y;
             keyCount=0;
             loopCount=0;
             deathLoopCount=0;
             checkpointReached=false;
           }
           if(keyDown("backspace")){
             stopSound("assets/Music/Spiritdancer.mp3", true);
               playingSong[4]=false;
            level=0; main0.x=200;main0.y=250;
            main.setVelocity(0,0);
         main.visible = safe11.visible = safe12.visible = wallMid11.visible = wallMid12.visible = 
          wallMid13.visible = wallMid14.visible = wallMid15.visible = background1.visible=
          key11.visible = key12.visible = key13.visible = point1.visible = false;
         
          avoidGroup1Bot.setVisibleEach(false); avoidGroup11.setVisibleEach(false);
          avoidGroup1MidUp.setVisibleEach(false);avoidGroup1MidDown.setVisibleEach(false);  
          avoidGroup1Bot.setVelocityEach(0,0);avoidGroup1MidUp.setVelocityEach(0,0);
          avoidGroup11.setVelocityEach(0,0);avoidGroup1MidDown.setVelocityEach(0,0);
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          }
           drawSprites();
           gameInfoText();
           showSong();
        }
    } else if (level == 3) {
      loopCount+=1;
     if (loopCount < 100) {
            fill('black');
            textSize(40);
            background("white");
            drawSprites();
            text("Don't Get Dizzy.", 60, 210);
            textSize(25);
            text('', 110, 250);
     }
      else if(loopCount==100){
        if(!playingSong[5]){
               playSound("assets/Music/Cronos.mp3", true);
               playingSong[5]=true;
             }
        avoidMid3.setVelocity(4,4);
        //visibility statements
            main3.visible = wallMid31.visible = wallMid32.visible = safe31.visible =
            safe32.visible = respawn3.visible = key31.visible = key32.visible =
            key33.visible = wallMid33.visible = wallMid34.visible = point3.visible = 
            midBackground3.visible = avoidMid3.visible = true;
            spinnerGroupInner3.setVisibleEach(true);
            spinnerGroupMidTop3.setVisibleEach(true);
            spinnerGroupMidBot3.setVisibleEach(true);
            spinnerGroupMidLeft3.setVisibleEach(true);
            spinnerGroupMidRight3.setVisibleEach(true);
            spinnerGroupOuterTop3.setVisibleEach(true);
            spinnerGroupOuterBot3.setVisibleEach(true);
            spinnerGroupOuterLeft3.setVisibleEach(true);
            spinnerGroupOuterRight3.setVisibleEach(true);
            main3.x=safe31.x;main3.y=safe31.y;
      }else{
            background('white');
             if(deathLoopCount+50<loopCount){
           mainCharacterMovement(main3);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main3.visible=true;
             }else{
               main3.visible=false;
             }
             main3.velocityX=0;
             main3.velocityY=0;
           }
            spinnerGroupMidTop3.setSpeedAndDirectionEach(1.5, (loopCount - 100) * 3.6);
            spinnerGroupOuterTop3.setSpeedAndDirectionEach(3, (loopCount - 100) * 3.6);
            spinnerGroupMidLeft3.setSpeedAndDirectionEach(1.5, ((loopCount - 100) * 3.6) - 90);
            spinnerGroupOuterLeft3.setSpeedAndDirectionEach(3, ((loopCount - 100) * 3.6) - 90);
            spinnerGroupMidRight3.setSpeedAndDirectionEach(1.5, ((loopCount - 100) * 3.6) + 90);
            spinnerGroupOuterRight3.setSpeedAndDirectionEach(3, ((loopCount - 100) * 3.6) + 90);
            spinnerGroupMidBot3.setSpeedAndDirectionEach(1.5, ((loopCount - 100) * 3.6) - 180);
            spinnerGroupOuterBot3.setSpeedAndDirectionEach(3, ((loopCount - 100) * 3.6) - 180);

            if(avoidMid3.isTouching(wallMid32))(avoidMid3.velocityX=4);
            if(avoidMid3.isTouching(respawn3))(avoidMid3.velocityX=-4);
            if(avoidMid3.isTouching(wallMid33))(avoidMid3.velocityY=4);
            if(avoidMid3.isTouching(wallMid34))(avoidMid3.velocityY=-4);
            
            if (main3.isTouching(spinnerGroupMidTop3) || main3.isTouching(spinnerGroupMidBot3) ||
                main3.isTouching(spinnerGroupMidLeft3) || main3.isTouching(spinnerGroupMidRight3) ||
                main3.isTouching(spinnerGroupOuterTop3) || main3.isTouching(spinnerGroupOuterBot3) ||
                main3.isTouching(spinnerGroupOuterLeft3) || main3.isTouching(spinnerGroupOuterRight3)||
                main3.isTouching(avoidMid3)) {
                main3.x = respawnX;
                main3.y = respawnY;
                deaths += 1;playSound("assets/category_digital/fail.mp3", false);
                deathLoopCount=loopCount;
                if(hardModeOn){
            if(!key31.visible&&!checkpointReached){
              keyCount--;
              key31.visible=true;
            }if(!key32.visible){
              keyCount--;
              key32.visible=true;
            }if(!key33.visible){
               keyCount--;
              key33.visible=true;
            }if(!point3.visible){
               score--;
              point3.visible=true;
            }
                }
            } else if (main3.isTouching(respawn3)) {
                respawnX = 350;
                respawnY = 210;
                checkpointReached=true;
            }
            if (main3.isTouching(key33)&&key33.visible==true) {
                key33.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main3.isTouching(key32)&&key32.visible==true) {
                key32.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main3.isTouching(key31)&&key31.visible==true) {
                key31.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main3.isTouching(point3)&&point3.visible==true) {
                point3.visible=false;
                score += 1;playSound("assets/category_digital/coin_3.mp3", false);
            }
            main3.collide(wallTop); main3.collide(wallBottom);
            main3.collide(wallRight); main3.collide(wallLeft);
            main3.collide(wallMid32); main3.collide(wallMid31);
            main3.collide(wallMid33); main3.collide(wallMid34);
            
            //check if level 3 is passed
            if((keyCount==3)&&main3.isTouching(safe32)){
              stopSound("assets/Music/Cronos.mp3", true);
               playingSong[5]=false;
              playSound("assets/category_digital/power_up.mp3",false);
              level=4;main3.setVelocity(0,0);
                 main3.visible = wallMid31.visible = wallMid32.visible = safe31.visible =
            safe32.visible = respawn3.visible = key31.visible = key32.visible =
            key33.visible = wallMid33.visible = wallMid34.visible = point3.visible = 
            midBackground3.visible = avoidMid3.visible = false;
            spinner3Reset();
            avoidMid3.setVelocity(0,0);
              respawnX = 200;
              respawnY = 60;
              keyCount=0; checkpointReached=false;
              loopCount=0;
              deathLoopCount=0;
            }
             if(keyDown("backspace")){
                stopSound("assets/Music/Cronos.mp3", true);
               playingSong[5]=false;
            level=0; main0.x=200;main0.y=250;
            main3.setVelocity(0,0);
         main3.visible = wallMid31.visible = wallMid32.visible = safe31.visible =
            safe32.visible = respawn3.visible = key31.visible = key32.visible =
            key33.visible = wallMid33.visible = wallMid34.visible = point3.visible = 
            midBackground3.visible = avoidMid3.visible = false;
           spinner3Reset();
            avoidMid3.setVelocity(0,0);
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          }
            drawSprites();
            gameInfoText();
            showSong();
      }
    } else if (level == 4) {
        loopCount += 1;
        if (loopCount < 100) {
            fill('black');
            textSize(40);
            background("white");
            drawSprites();
            text("It Will Only ", 100, 200);
            text('Get Harder.', 100, 250);
        } else if(loopCount==100){
          if(!playingSong[6]){
               playSound("assets/Music/Cascade.mp3", true);
               playingSong[6]=true;
             }
            avoidGroup41.setVelocityXEach(8);
            avoidGroup42.setVelocityXEach(-8);
            avoidGroup43.setVelocityYEach(3);
        //visibility statements
            main4.visible = safe4.visible = key41.visible = key42.visible = key43.visible =
            point41.visible = wallMid4.visible = true;
            avoidGroup41.setVisibleEach(true);
            avoidGroup42.setVisibleEach(true);
            avoidGroup43.setVisibleEach(true);
            main4.x=safe4.x;main4.y=safe4.y;
        }else{
             if(deathLoopCount+50<loopCount){
           mainCharacterMovement(main4);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main4.visible=true;
             }else{
               main4.visible=false;
             }
             main4.velocityX=0;
             main4.velocityY=0;
           }
            background('white');

            //avoid group movement:
            if (avoidGroup41.isTouching(wallLeft)) {
                avoidGroup41.setVelocityEach(8, 0);
            } else if (avoidGroup41.isTouching(wallRight)) {
                avoidGroup41.setVelocityEach(-8, 0);
            }
            if (avoidGroup42.isTouching(wallRight)) {
                avoidGroup42.setVelocityEach(-8, 0);
            } else if (avoidGroup42.isTouching(wallLeft)) {
                avoidGroup42.setVelocityEach(8, 0);
            }
            if (avoidGroup43.isTouching(wallTop)) {
                avoidGroup43.setVelocityEach(0, 3);
            } else if (avoidGroup43.isTouching(wallBottom)) {
                avoidGroup43.setVelocityEach(0, -3);
            }

            //keys and points
            if (main4.isTouching(key43)&&key43.visible==true) {
                key43.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main4.isTouching(key42)&&key42.visible==true) {
                key42.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main4.isTouching(key41)&&key41.visible==true) {
                key41.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main4.isTouching(point41)&&point41.visible==true) {
                point41.visible=false;
                score += 1;playSound("assets/category_digital/coin_1.mp3", false);
            }

            if (main4.isTouching(avoidGroup41) || main4.isTouching(avoidGroup42) ||
                main4.isTouching(avoidGroup43)) {
                main4.x = 200;
                main4.y = 60;
                deaths += 1;playSound("assets/category_digital/fail.mp3", false);
                deathLoopCount=loopCount;
                if(hardModeOn){
            if(!key41.visible){
              keyCount--;
              key41.visible=true;
            }if(!key42.visible){
              keyCount--;
              key42.visible=true;
            }if(!key43.visible){
               keyCount--;
              key43.visible=true;
            }if(!point41.visible){
               score--;
              point41.visible=true;
            }
                }
            }
            main4.collide(wallLeft);
            main4.collide(wallRight);
            main4.collide(wallMid4);
            main4.collide(wallTop);
            main4.collide(wallBottom);

            //check if level 4 is passed
            if ((keyCount == 3) && main4.isTouching(safe4)) {
              stopSound("assets/Music/Cascade.mp3", true);
               playingSong[6]=false;
              playSound("assets/category_digital/power_up.mp3",false);
                level = 5;main4.setVelocity(0,0);
                 main4.visible = safe4.visible = key41.visible = key42.visible = key43.visible =
            point41.visible = wallMid4.visible = false;
            avoidGroup41.setVisibleEach(false);
            avoidGroup42.setVisibleEach(false);
            avoidGroup43.setVisibleEach(false);
            avoidGroup41.setVelocityEach(0,0);
            avoidGroup42.setVelocityEach(0,0);
            avoidGroup43.setVelocityEach(0,0);
                main4.x = main4.y = 200;
                keyCount = 0;
                loopCount = 0;
                respawnX = safe51.x;
                respawnY = safe51.y;
                deathLoopCount=0;
                checkpointReached=false;
            }
             if(keyDown("backspace")){
               stopSound("assets/Music/Cascade.mp3", true);
               playingSong[6]=false;
            level=0; main0.x=200;main0.y=250;
            main4.setVelocity(0,0);
        main4.visible = safe4.visible = key41.visible = key42.visible = key43.visible =
            point41.visible = wallMid4.visible = false;
            avoidGroup41.setVisibleEach(false);
            avoidGroup42.setVisibleEach(false);
            avoidGroup43.setVisibleEach(false);
            avoidGroup41.setVelocityEach(0,0);
            avoidGroup42.setVelocityEach(0,0);
            avoidGroup43.setVelocityEach(0,0);
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          }
            drawSprites();
            gameInfoText();
            showSong();
        }
    } else if (level == 5) {
        loopCount += 1;
        if (loopCount < 100) {
            background("white");
            fill('black');
            textSize(50);
            drawSprites();
            text('You Were\n Warned.', 90, 190);
        } else if(loopCount==100){
          if(!playingSong[7]){
               playSound("assets/Music/Compass.mp3", true);
               playingSong[7]=true;
             }
          avoidGroupMazeTop.setVelocityXEach(3);
          avoidGroupMazeBot.setVelocityXEach(3);
          avoidGroupMazeLeft.setVelocityYEach(3);
          avoidGroupMazeRight.setVelocityYEach(-3);
          //visibility statements
           main5.visible = wallMid51.visible = wallMid52.visible = wallMid53.visible = 
            respawn5.visible = safe51.visible = safe52.visible = wallMid54.visible = 
            innerCircle51.visible = innerCircle52.visible = innerCircle53.visible = innerCircle54.visible = 
            innerCircle57.visible = innerCircle58.visible = innerCircle59.visible = 
            innerCircle510.visible = wallBlinking5.visible = backgroundMid51.visible = 
            key51.visible = key52.visible = key53.visible = point5.visible = 
            true;
            avoidGroupMazeTop.setVisibleEach(true);
            avoidGroupMazeBot.setVisibleEach(true);
            avoidGroupMazeRight.setVisibleEach(true);
            avoidGroupMazeLeft.setVisibleEach(true);
            avoidOuterCircle5.setVisibleEach(true);
            main5.x=safe51.x;main5.y=safe51.y;
        } else{
            background('white');
            strokeWeight(2);
            noFill();
            arc(280, 280, 200, 200, -105, -75);
             fill(rgb(225,225,225));
            arc(280, 280, 200, 200, -30, 210);
            fill('gray');
            arc(280, 280, 80, 80, 0, 360);
            stroke('black');
            strokeWeight(3);
            line(innerCircle51.x, innerCircle51.y,innerCircle52.x,innerCircle52.y);
            line(innerCircle52.x, innerCircle52.y,innerCircle53.x,innerCircle53.y);
            line(innerCircle53.x, innerCircle53.y,innerCircle54.x,innerCircle54.y);
            
            line(innerCircle57.x, innerCircle57.y,innerCircle58.x,innerCircle58.y);
            line(innerCircle58.x, innerCircle58.y,innerCircle59.x,innerCircle59.y);
            line(innerCircle59.x, innerCircle59.y,innerCircle510.x,innerCircle510.y);
          
            innerCircle51.setSpeedAndDirection(3.5,(loopCount-100)*2.9);
            innerCircle52.setSpeedAndDirection(3.5,((loopCount-100)*2.9)-30);
            innerCircle53.setSpeedAndDirection(3.5,((loopCount-100)*2.9)-60);
            innerCircle54.setSpeedAndDirection(3.5,((loopCount-100)*2.9)-90);
            innerCircle57.setSpeedAndDirection(3.5,((loopCount-100)*2.9)-180);
            innerCircle58.setSpeedAndDirection(3.5,((loopCount-100)*2.9)-210);
            innerCircle59.setSpeedAndDirection(3.5,((loopCount-100)*2.9)-240);
            innerCircle510.setSpeedAndDirection(3.5,((loopCount-100)*2.9)-270);
            
             if(deathLoopCount+50<loopCount){
           mainCharacterMovement(main5);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main5.visible=true;
             }else{
               main5.visible=false;
             }
             main5.velocityX=0;
             main5.velocityY=0;
           }
            if(avoidGroupMazeTop.get(0).x<75)
              avoidGroupMazeTop.setVelocityXEach(3);
             else if(avoidGroupMazeTop.isTouching(wallRight))
              avoidGroupMazeTop.setVelocityXEach(-3);
             if(avoidGroupMazeBot.get(0).x<75)
              avoidGroupMazeBot.setVelocityXEach(3);
             else if(avoidGroupMazeBot.isTouching(wallRight))
              avoidGroupMazeBot.setVelocityXEach(-3);
              
            if(avoidGroupMazeLeft.isTouching(safe52))
            avoidGroupMazeLeft.setVelocityYEach(-3);
            else if(avoidGroupMazeLeft.get(0).y<203)
            avoidGroupMazeLeft.setVelocityYEach(3);
            if(avoidGroupMazeRight.isTouching(safe52))
            avoidGroupMazeRight.setVelocityYEach(-3);
            else if(avoidGroupMazeRight.get(0).y<203)
            avoidGroupMazeRight.setVelocityYEach(3);
             if (main5.isTouching(key53)&&key53.visible==true) {
                key53.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main5.isTouching(key52)&&key52.visible==true) {
                key52.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main5.isTouching(key51)&&key51.visible==true) {
                key51.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main5.isTouching(point5)&&point5.visible==true) {
                point5.visible=false;
                score += 1;playSound("assets/category_digital/coin_1.mp3", false);
            }
            if(main5.isTouching(respawn5)){
              respawnX = respawn5.x;
              respawnY = respawn5.y;
              checkpointReached=true;
            }
            //collision
            if(main5.isTouching(avoidGroupMazeTop)||main5.isTouching(avoidGroupMazeBot)
            ||main5.isTouching(avoidOuterCircle5)||main5.isTouching(innerCircle51)
            ||main5.isTouching(innerCircle52)||main5.isTouching(innerCircle53)||main5.isTouching(innerCircle54)
            ||main5.isTouching(innerCircle57)||main5.isTouching(innerCircle58)||main5.isTouching(innerCircle59)
            ||main5.isTouching(innerCircle510)||main5.isTouching(avoidGroupMazeRight)
            ||main5.isTouching(avoidGroupMazeLeft)){
              main5.x = respawnX;
              main5.y = respawnY;
              deaths++;playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=loopCount;
              if(hardModeOn){
            if(!key51.visible&&!checkpointReached){
              keyCount--;
              key51.visible=true;
            }if(!key52.visible){
              keyCount--;
              key52.visible=true;
            }if(!key53.visible){
               keyCount--;
              key53.visible=true;
            }if(!point5.visible){
               score--;
              point5.visible=true;
            }
                }
            }
            if(loopCount%80<20)(wallBlinking5.visible=false);
            else (wallBlinking5.visible=true);
            if(main5.isTouching(wallBlinking5)&&wallBlinking5.visible){
               main5.x = respawnX;
              main5.y = respawnY;
              deaths++;playSound("assets/category_digital/fail.mp3", false);
              deathLoopCount=loopCount;
            }
            //check if level 5 is passed
            if ((keyCount == 3) && main5.isTouching(safe52)){
              stopSound("assets/Music/Compass.mp3", true);
               playingSong[7]=false;
              playSound("assets/category_digital/power_up.mp3",false);
             level = 6;main5.setVelocity(0,0);
              main5.visible = wallMid51.visible = wallMid52.visible = wallMid53.visible = 
            respawn5.visible = safe51.visible = safe52.visible = wallMid54.visible = 
             wallBlinking5.visible = backgroundMid51.visible = 
            key51.visible = key52.visible = key53.visible = point5.visible = 
            false;
            spinner5Reset();
            avoidGroupMazeTop.setVisibleEach(false);
            avoidGroupMazeBot.setVisibleEach(false);
            avoidGroupMazeRight.setVisibleEach(false);
            avoidGroupMazeLeft.setVisibleEach(false);
            avoidOuterCircle5.setVisibleEach(false);
            avoidGroupMazeTop.setVelocityEach(0,0);
            avoidGroupMazeBot.setVelocityEach(0,0);
            avoidGroupMazeRight.setVelocityEach(0,0);
            avoidGroupMazeLeft.setVelocityEach(0,0);
            spinner5Reset();
            for(var y=0;y<4;y++){
              avoidGroupMazeTop.get(y).x=130;
              avoidGroupMazeBot.get(y).x=200;
              avoidGroupMazeTop.get(y+4).x=270;
              avoidGroupMazeBot.get(y+4).x=340;
            } 
      
              loopCount=0;checkpointReached=false;
              keyCount=0;
              respawnX=360;
              respawnY=65;
              deathLoopCount=0;
            }
            if(keyDown("backspace")){
              stopSound("assets/Music/Compass.mp3", true);
               playingSong[7]=false;
            level=0; main0.x=200;main0.y=250;
            main5.setVelocity(0,0);
        main5.visible = wallMid51.visible = wallMid52.visible = wallMid53.visible = 
            respawn5.visible = safe51.visible = safe52.visible = wallMid54.visible = 
             wallBlinking5.visible = backgroundMid51.visible = 
            key51.visible = key52.visible = key53.visible = point5.visible = 
            false;
            avoidGroupMazeTop.setVisibleEach(false);
            avoidGroupMazeBot.setVisibleEach(false);
            avoidGroupMazeRight.setVisibleEach(false);
            avoidGroupMazeLeft.setVisibleEach(false);
            avoidOuterCircle5.setVisibleEach(false);
            avoidGroupMazeTop.setVelocityEach(0,0);
            avoidGroupMazeBot.setVelocityEach(0,0);
            avoidGroupMazeRight.setVelocityEach(0,0);
            avoidGroupMazeLeft.setVelocityEach(0,0);
            spinner5Reset();
            for(var z=0;z<4;z++){
              avoidGroupMazeTop.get(z).x=130;
              avoidGroupMazeBot.get(z).x=200;
              avoidGroupMazeTop.get(z+4).x=270;
              avoidGroupMazeBot.get(z+4).x=340;
            } 
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          }
            main5.collide(wallTop); main5.collide(wallLeft); 
            main5.collide(wallRight); main5.collide(wallBottom);
            main5.collide(wallMid51); main5.collide(wallMid52); 
            main5.collide(wallMid53); main5.collide(wallMid54);

            drawSprites();
            gameInfoText();
            showSong();
        }
    
    } else if (level == 6) {
        loopCount+=1;
        if(loopCount<100){
          background('white');
          drawSprites(); 
          fill('black');
            textSize(50);
            text('Impossible.', 80,220);
        }else if(loopCount==100){
          if(!playingSong[8]){
               playSound("assets/Music/Ember.mp3", true);
               playingSong[8]=true;
             }
          //visibility statements
          main6.visible=wallMid61.visible=wallMid62.visible=safe61.visible=safe62.visible=
          backgroundMid6.visible=respawn6.visible=wallMid63.visible=wallMid64.visible=
          key61.visible=key62.visible=key63.visible=point6.visible=pointAvoid6.visible=
          true;
          mazeGroup6.setVisibleEach(true); 
          avoidBotGroup6.setVisibleEach(true); avoidTopGroup6.setVisibleEach(true);
          avoidBotGroup6.setVelocityYEach(-5);avoidTopGroup6.setVelocityYEach(5);
           main6.x=safe61.x;main6.y=safe61.y;
          pointAvoid6.velocityX=7;
        }else{
          background('white');
          
           if(deathLoopCount+50<loopCount){
           mainCharacterMovement(main6);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main6.visible=true;
             }else{
               main6.visible=false;
             }
             main6.velocityX=0;
             main6.velocityY=0;
           }
          //bottom avoid movement
          if(avoidTopGroup6.get(0).isTouching(wallBottom)){
            avoidTopGroup6.setVelocityYEach(-5);
          }else if(avoidTopGroup6.get(0).isTouching(wallMid61)){
            avoidTopGroup6.setVelocityYEach(5);
          } if(avoidBotGroup6.get(0).isTouching(wallBottom)){
            avoidBotGroup6.setVelocityYEach(-5);
          }else if(avoidBotGroup6.get(0).isTouching(wallMid61)){
            avoidBotGroup6.setVelocityYEach(5);
          }
          //maze movement
          if(loopCount%70<=52&&loopCount%70>=20){
            mazeGroup6.setVelocityEach(-0.75,-0.75);
          }else if(loopCount%70>=55||loopCount%70<=17){
            mazeGroup6.setVelocityEach(0.75,0.75);
          }else{
            mazeGroup6.setVelocityEach(0,0);
          }
          //point avoid movement
          if(pointAvoid6.y>230&&pointAvoid6.velocityY==7){
            pointAvoid6.velocityX=-7;
            pointAvoid6.velocityY=0;
          } else if(pointAvoid6.y<160&&pointAvoid6.velocityY==-7){
            pointAvoid6.velocityX=7;
            pointAvoid6.velocityY=0;
          }
            if(pointAvoid6.x<347&&pointAvoid6.velocityX==-7){
            pointAvoid6.velocityX=0;
            pointAvoid6.velocityY=-7;
          }else if(pointAvoid6.x>375&&pointAvoid6.velocityX==7){
            pointAvoid6.velocityX=0;
            pointAvoid6.velocityY=7;
          }
          
          //collision detection
          if(main6.isTouching(mazeGroup6)||main6.isTouching(pointAvoid6)||
          main6.isTouching(avoidBotGroup6)||main6.isTouching(avoidTopGroup6)){
            main6.x=respawnX;
            main6.y=respawnY;
            deathLoopCount=loopCount-1;
            deaths++;playSound("assets/category_digital/fail.mp3", false);
            if(hardModeOn){
            if(!key61.visible&&!checkpointReached){
              keyCount--;
              key61.visible=true;
            }if(!key62.visible&&!checkpointReached){
              keyCount--;
              key62.visible=true;
            }if(!key63.visible){
               keyCount--;
              key63.visible=true;
            }if(!point6.visible&&!checkpointReached){
               score--;
              point6.visible=true;
            }
                }
          }
          if(main6.isTouching(respawn6)){
            respawnX=respawn6.x;
            respawnY=respawn6.y;
            checkpointReached=true;
          }
          //keys and points
       if (main6.isTouching(key63)&&key63.visible==true) {
                key63.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main6.isTouching(key62)&&key62.visible==true) {
                key62.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main6.isTouching(key61)&&key61.visible==true) {
                key61.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main6.isTouching(point6)&&point6.visible==true) {
                point6.visible=false;
                score += 1;playSound("assets/category_digital/coin_1.mp3", false);
            }
          //check if level 6 is passed
          if(main6.isTouching(safe62)&&keyCount==3){
            stopSound("assets/Music/Ember.mp3", true);
               playingSong[8]=false;
            playSound("assets/category_digital/power_up.mp3",false);
            level=7; keyCount=0;main6.setVelocity(0,0);
            loopCount=0; checkpointReached=false;
            deathLoopCount=0;
            respawnX=safe71.x;
            respawnY=safe71.y;
            main6.visible=wallMid61.visible=wallMid62.visible=safe61.visible=safe62.visible=
          backgroundMid6.visible=respawn6.visible=wallMid63.visible=wallMid64.visible=
          key61.visible=key62.visible=key63.visible=point6.visible=pointAvoid6.visible=
          false;
          mazeGroup6.setVisibleEach(false); 
          avoidBotGroup6.setVisibleEach(false); avoidTopGroup6.setVisibleEach(false);
           
          pointAvoid6.setVelocity(0,0);
          avoidBotGroup6.setVelocityEach(0,0); avoidTopGroup6.setVelocityEach(0,0);
          }
           if(keyDown("backspace")){
             stopSound("assets/Music/Ember.mp3", true);
               playingSong[8]=false;
            level=0; main0.x=200;main0.y=250;
            main6.setVelocity(0,0);
        main6.visible=wallMid61.visible=wallMid62.visible=safe61.visible=safe62.visible=
          backgroundMid6.visible=respawn6.visible=wallMid63.visible=wallMid64.visible=
          key61.visible=key62.visible=key63.visible=point6.visible=pointAvoid6.visible=
          false;
          mazeGroup6.setVisibleEach(false); 
          avoidBotGroup6.setVisibleEach(false); avoidTopGroup6.setVisibleEach(false);
         
           pointAvoid6.setVelocity(0,0);
          avoidBotGroup6.setVelocityEach(0,0); avoidTopGroup6.setVelocityEach(0,0);
          loopCount=0;keyCount=0;
          deathLoopCount=-50;checkpointReached=false;
          }
          main6.collide(wallTop); main6.collide(wallBottom);
          main6.collide(wallLeft); main6.collide(wallRight);
          main6.collide(wallMid61); main6.collide(wallMid62);
          main6.collide(wallMid63); main6.collide(wallMid64);
          drawSprites();
          
          gameInfoText();
          showSong();
        }
      
    } else if (level == 7) {
      loopCount+=1;
      if(loopCount<300){
        //level 6 reset code
        if(mazeGroup6.get(0).x==315)(mazeGroup6.setVelocityEach(0,0));
          else if(mazeGroup6.get(0).x<315)(mazeGroup6.setVelocityEach(0.75,0.75));
          else (mazeGroup6.setVelocityEach(-0.75,-0.75));
        background('white');
          drawSprites();
          fill('black');textAlign('center');
            textSize(37);
            text('6 Levels Complete!', 200,180);
            textSize(28);
            text('Unlock level 7 with a \nscore of 6 and less \nthan 100 deaths',200,240);
      }
      else{
        if(score!=6||deaths>=100){
        level = 0;
          loopCount=0; deathLoopCount=-50;
          keyCount=0;
          score=0;
          deaths=0;
          main0.x=200;
          main0.y=250;
        }
        }
        if(score==6&&deaths<100&&loopCount>=150&&loopCount<=210){
          background("white");
          drawSprites();
          fill('black');textAlign('left');
            textSize(45);
          if(loopCount<=175){
            text(' Wait...', 40,200);
          } else if(loopCount>175&&loopCount<=185){
            text(' Wait... there', 40,200);
          }else if(loopCount>185&&loopCount<=190){
            text(' Wait... there is', 40,200);
          }else if(loopCount>190&&loopCount<=200){
            text(' Wait... there is \none', 40,200);
          }else if(loopCount>200&&loopCount<=210){
            text(' Wait... there is \none more', 40,200);
          }
        
        }
        if(score==6&&deaths<100&&loopCount==210){
          playSound("assets/category_transition/game_transition_musical_reverse_2.mp3", false);
        }else if(score==6&&deaths<100&&loopCount>210&&loopCount<310){
          wallTop.shapeColor=wallBottom.shapeColor=wallLeft.shapeColor=
          wallRight.shapeColor='black';
          if(loopCount%4<=1){
            wallTop.setVelocity(2,2);wallBottom.setVelocity(2,2);
            wallLeft.setVelocity(2,2);wallRight.setVelocity(2,2);
          }else{
            wallTop.setVelocity(-2,-2);wallBottom.setVelocity(-2,-2);
            wallLeft.setVelocity(-2,-2);wallRight.setVelocity(-2,-2);
          }
          background(rgb(255,220,220));
          drawSprites();
          fill('black');textAlign('left');
            textSize(45);
          text(' Wait... there is \none more level...', 40,200);
        }
        else if(score==6&&deaths<100&&loopCount==310){
          if(!playingSong[9]){
               playSound("assets/Music/Cartridge.mp3", true);
               playingSong[9]=true;
             }
          wallTop.height=74;
          main7.x=safe71.x;main7.y=safe71.y;
          //visibility statements
          main7.visible=wallMid71.visible=wallMid72.visible=safe71.visible=
          safe72.visible=key71.visible=key72.visible=key73.visible=key74.visible=true;
          avoidSwirlGroup71.setVisibleEach(true);
          avoidSwirlGroup72.setVisibleEach(true);
          avoid7TopLeft.setVisibleEach(true);
          avoid7TopRight.setVisibleEach(true);
          avoid7BotLeft.setVisibleEach(true);
          avoid7BotRight.setVisibleEach(true);
          avoidMid7.setVisibleEach(true);
          
          wallTop.setVelocity(0,0);wallBottom.setVelocity(0,0);
          wallLeft.setVelocity(0,0);wallRight.setVelocity(0,0);
          wallTop.x=200;wallBottom.x=200;
          wallLeft.x=0;wallRight.x=400;
          wallTop.y=0;wallBottom.y=400;
          wallLeft.y=200;wallRight.y=200;
          avoid7TopLeft.setVelocityEach(1,4);
          avoid7TopRight.setVelocityEach(-1,4);
          avoid7BotLeft.setVelocityEach(1,-4);
          avoid7BotRight.setVelocityEach(-1,-4);
        
          avoidSwirlGroup71.setVelocityXEach(3);
          avoidSwirlGroup72.setVelocityXEach(3);
        }
        else if(score==6&&deaths<100&&loopCount>280){
          background(rgb(255,220,220));
          
           if(deathLoopCount+50<loopCount){
           mainCharacterMovement(main7);
           }
           else{
             if((loopCount%20<10)||(deathLoopCount+50==loopCount)){
               main7.visible=true;
             }else{
               main7.visible=false;
             }
             main7.velocityX=0;
             main7.velocityY=0;
           }
          //left side avoid movement
          if(avoid7TopLeft.isTouching(wallMid71)){
            avoid7TopLeft.setVelocityYEach(4);
            avoid7BotLeft.setVelocityYEach(-4);
          }else if(avoid7TopLeft.isTouching(wallMid72)){
            avoid7TopLeft.setVelocityYEach(-4);
            avoid7BotLeft.setVelocityYEach(4);
          }
          if(avoid7TopLeft.get(0).x<63){
            avoid7TopLeft.setVelocityXEach(1);
            avoid7BotLeft.setVelocityXEach(1);
          }else if(avoid7TopLeft.get(0).x>185){
            avoid7TopLeft.setVelocityXEach(-1);
            avoid7BotLeft.setVelocityXEach(-1);
          }
          
          //right side avoid movement
          if(avoid7TopRight.isTouching(wallMid71)){
            avoid7TopRight.setVelocityYEach(4);
            avoid7BotRight.setVelocityYEach(-4);
          }else if(avoid7TopRight.isTouching(wallMid72)){
            avoid7TopRight.setVelocityYEach(-4);
            avoid7BotRight.setVelocityYEach(4);
          }
          if(avoid7TopRight.get(0).x<63){
            avoid7TopRight.setVelocityXEach(1);
            avoid7BotRight.setVelocityXEach(1);
          }else if(avoid7TopRight.get(0).x>185){
            avoid7TopRight.setVelocityXEach(-1);
            avoid7BotRight.setVelocityXEach(-1);
          }
          //swirl movement code
          if(avoidSwirlGroup71.get(0).velocityX==3&&avoidSwirlGroup71.get(0).x>65){
            avoidSwirlGroup71.setVelocityEach(0,-3);
          }else if(avoidSwirlGroup71.get(0).velocityY==-3&&avoidSwirlGroup71.get(0).y<48){
          avoidSwirlGroup71.setVelocityEach(-3,0); 
          }else if(avoidSwirlGroup71.get(0).velocityX==-3&&avoidSwirlGroup71.get(0).x<34){
          avoidSwirlGroup71.setVelocityEach(0,3); 
          }else if(avoidSwirlGroup71.get(0).velocityY==3&&avoidSwirlGroup71.get(0).y>83){
          avoidSwirlGroup71.setVelocityEach(3,0); 
          }
          if(avoidSwirlGroup72.get(0).velocityX==3&&avoidSwirlGroup72.get(0).x>65){
            avoidSwirlGroup72.setVelocityEach(0,3);
          }else if(avoidSwirlGroup72.get(0).velocityY==3&&avoidSwirlGroup72.get(0).y>141){
          avoidSwirlGroup72.setVelocityEach(-3,0); 
          }else if(avoidSwirlGroup72.get(0).velocityX==-3&&avoidSwirlGroup72.get(0).x<34){
          avoidSwirlGroup72.setVelocityEach(0,-3); 
          }else if(avoidSwirlGroup72.get(0).velocityY==-3&&avoidSwirlGroup72.get(0).y<106){
          avoidSwirlGroup72.setVelocityEach(3,0); 
          }
          //collision detection
          if(main7.isTouching(avoidSwirlGroup72)||main7.isTouching(avoidSwirlGroup71)
          ||main7.isTouching(avoid7TopLeft)||main7.isTouching(avoid7TopRight)||main7.isTouching(avoid7BotLeft)||
          main7.isTouching(avoid7BotRight)||main7.isTouching(wallTop)||main7.isTouching(wallRight)||
          main7.isTouching(wallLeft)||main7.isTouching(wallBottom)||main7.isTouching(wallMid71)||
          main7.isTouching(wallMid72)||main7.isTouching(avoidMid7)){
            deaths++;playSound("assets/category_digital/fail.mp3", false);
            deathLoopCount=loopCount;
            main7.x=respawnX;
            main7.y=respawnY;
            if(hardModeOn){
            if(!key71.visible){
              keyCount--;
              key71.visible=true;
            }if(!key72.visible){
              keyCount--;
              key72.visible=true;
            }if(!key73.visible){
               keyCount--;
              key73.visible=true;
            }if(!key74.visible){
               keyCount--;
              key74.visible=true;
            }
                }
          }
          //keys collision
          if (main7.isTouching(key73)&&key73.visible==true) {
                key73.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main7.isTouching(key72)&&key72.visible==true) {
                key72.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            } else if (main7.isTouching(key71)&&key71.visible==true) {
                key71.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            }else if (main7.isTouching(key74)&&key74.visible==true) {
                key74.visible=false;
                keyCount += 1;playSound("assets/category_digital/coin_3.mp3", false);
            }
            //check if level 7 is passed
            if(main7.isTouching(safe72)&&keyCount==4){
              stopSound("assets/Music/Cartridge.mp3", true);
               playingSong[9]=false;
              playSound("assets/category_digital/power_up.mp3",false);
              level=8;main7.setVelocity(0,0);
              main7.visible=wallMid71.visible=wallMid72.visible=safe71.visible=
          safe72.visible=key71.visible=key72.visible=key73.visible=key74.visible=false;
          avoidSwirlGroup71.setVisibleEach(false);
          avoidSwirlGroup72.setVisibleEach(false);
          avoid7TopLeft.setVisibleEach(false);
          avoid7TopRight.setVisibleEach(false);
          avoid7BotLeft.setVisibleEach(false);
          avoid7BotRight.setVisibleEach(false);
           avoidSwirlGroup71.setVelocityEach(0,0);
          avoidSwirlGroup72.setVelocityEach(0,0);
          avoid7TopLeft.setVelocityEach(0,0);
          avoid7TopRight.setVelocityEach(0,0);
          avoid7BotLeft.setVelocityEach(0,0);
          avoid7BotRight.setVelocityEach(0,0);
          avoidMid7.setVisibleEach(false);
              wallTop.shapeColor=wallBottom.shapeColor=wallLeft.shapeColor=wallRight.shapeColor=
              'navy';
              loopCount=0; keyCount=0;
              deathLoopCount=0; score=0;
              }
              if(keyDown("backspace")){
                stopSound("assets/Music/Cartridge.mp3", true);
               playingSong[9]=false;
            level=0; main0.x=200;main0.y=250;
            main7.setVelocity(0,0);
             main7.visible=wallMid71.visible=wallMid72.visible=safe71.visible=
          safe72.visible=key71.visible=key72.visible=key73.visible=key74.visible=false;
          avoidSwirlGroup71.setVisibleEach(false);
          avoidSwirlGroup72.setVisibleEach(false);
          avoid7TopLeft.setVisibleEach(false);
          avoid7TopRight.setVisibleEach(false);
          avoid7BotLeft.setVisibleEach(false);
          avoid7BotRight.setVisibleEach(false);
           avoidSwirlGroup71.setVelocityEach(0,0);
          avoidSwirlGroup72.setVelocityEach(0,0);
          avoid7TopLeft.setVelocityEach(0,0);
          avoid7TopRight.setVelocityEach(0,0);
          avoid7BotLeft.setVelocityEach(0,0);
          avoid7BotRight.setVelocityEach(0,0);
          avoidMid7.setVisibleEach(false);
              wallTop.shapeColor=wallBottom.shapeColor=wallLeft.shapeColor=wallRight.shapeColor=
              'navy';
          loopCount=0;keyCount=0;score=0;
          deathLoopCount=-50;checkpointReached=false;
          }
          
          drawSprites();
          gameInfoText();
          showSong();
        }
    } else if (level == 8) {
      loopCount+=1;
      if(loopCount<300){
          background('white');
          drawSprites();
          fill('black');textAlign('center');
            textSize(50);
            text('CONGRATS', 200,160);
            textSize(25);
            
            if(!hardModeOn){
              text('You beat the game \nwith '+deaths+" deaths\nand hard mode OFF",200,200);
            textSize(20);
            text('(Now try hard mode!)',200,300);
            }else{
              text('You beat the game \nwith '+deaths+" deaths\nand hard mode ON",200,200);
              textSize(20);
              text('(That was impressive!)',200,300);
            }
        }else{
          level = 0;
          loopCount=0; deathLoopCount=-50;
          keyCount=0;
          score=0;
          deaths=0;
          main0.x=200;
          main0.y=250;
          }
    
    showSong();
    }
  }
}
//resets level select screen
function levelSelectReset(){
        playSound("assets/category_digital/power_up.mp3",false);
         main0.visible = wallMid01.visible = level1Btn.visible = level2Btn.visible = 
        level3Btn.visible = level4Btn.visible = level5Btn.visible = 
        level6Btn.visible = back02.visible = credits02.visible=false;
        loopCount=0; main0.setVelocity(0,0);
        score=0;
        keyCount=0;
        deathLoopCount=0;
        deaths=0;
        stopSound("assets/Music/Sleet.mp3");
        playingSong[0]=false;
}
//sets up avoid circle groups
function avoidCircleSetup(groupName) {
    groupName.setAnimationEach("blackCircle");
    groupName.setScaleEach(0.15);
    groupName.setColliderEach("circle");
    groupName.setVisibleEach(false);
}
//sets up avoid circle sprites
function soloCircleSetup(spriteName,animation,scale){
  spriteName.setAnimation(animation);
  spriteName.scale=scale;
  spriteName.setCollider("circle");
  spriteName.visible=false;
}
//enables movement for red square
function mainCharacterMovement(charName) {
    if (keyDown("UP_ARROW")||keyDown("w"))(charName.velocityY = -4);
    else if (keyDown("DOWN_ARROW")||keyDown("s"))(charName.velocityY = 4);
    else(charName.velocityY = 0);
    if (keyDown("LEFT_ARROW")||keyDown("a"))(charName.velocityX = -4);
    else if (keyDown("RIGHT_ARROW")||keyDown("d"))(charName.velocityX = 4);
    else(charName.velocityX = 0);
}
//text at the top showing game info
function gameInfoText() {
    textAlign(CENTER, TOP);
    if(!hardModeOn){
      stroke('white');
      fill("white");
    }
  else {
  stroke(rgb(255,190,190));
  fill(rgb(255,200,200));
  }
    textSize(20);
    strokeWeight(0.5);
    if(deaths>99)(text("Deaths: " + deaths + " Level: " + level + "   Keys: " + keyCount +
        "   Score: " + score, 200, 10));
    else if(deaths>9)(text("Deaths: " + deaths + "    Level: " + level + "   Keys: " + keyCount +
        "   Score: " + score, 200, 10));
    else(text("Deaths: " + deaths + "     Level: " + level + "   Keys: " + keyCount +
        "   Score: " + score, 200, 10));
    
}
//chooses random eLevel for endless mode
function randomChallenge(homeSafe){
  var rChallenge = randomNumber(1,12);
  if(homeSafe==1){
    if(score<10&&topScore<10){
      if(rChallenge<=3)(eLevel=1);
      else if(rChallenge==4)(eLevel=2);
      if(rChallenge>=5&&rChallenge<=7)(eLevel=3);
      else if(rChallenge==8)(eLevel=4);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=5);
      else if(rChallenge==12)(eLevel=6);
  }
    else {
  if(rChallenge<=3)(eLevel=2);
      else if(rChallenge==4)(eLevel=1);
      if(rChallenge>=5&&rChallenge<7)(eLevel=4);
      else if(rChallenge==8)(eLevel=3);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=6);
      else if(rChallenge==12)(eLevel=5);
  }
  }
 if(homeSafe==2){
   if(score<10&&topScore<10){
      if(rChallenge<=3)(eLevel=1);
      else if(rChallenge==4)(eLevel=2);
      if(rChallenge>=5&&rChallenge<=7)(eLevel=8);
      else if(rChallenge==8)(eLevel=7);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=11);
      else if(rChallenge==12)(eLevel=12);
  }
    else {
 if(rChallenge<=3)(eLevel=2);
      else if(rChallenge==4)(eLevel=1);
      if(rChallenge>=5&&rChallenge<=7)(eLevel=7);
      else if(rChallenge==8)(eLevel=8);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=12);
      else if(rChallenge==12)(eLevel=11);
  }
 }
  if(homeSafe==3){
    if(score<10&&topScore<10){
      if(rChallenge<=3)(eLevel=5);
      else if(rChallenge==4)(eLevel=6);
      if(rChallenge>=5&&rChallenge<=7)(eLevel=8);
      else if(rChallenge==8)(eLevel=7);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=9);
      else if(rChallenge==12)(eLevel=10);
  }
    else {
  if(rChallenge<=3)(eLevel=6);
      else if(rChallenge==4)(eLevel=5);
      if(rChallenge>=5&&rChallenge<=7)(eLevel=7);
      else if(rChallenge==8)(eLevel=8);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=10);
      else if(rChallenge==12)(eLevel=9);
  }
  }
  if(homeSafe==4){
    if(score<10&&topScore<10){
      if(rChallenge<=3)(eLevel=3);
      else if(rChallenge==4)(eLevel=4);
      if(rChallenge>=5&&rChallenge<=7)(eLevel=11);
      else if(rChallenge==8)(eLevel=12);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=9);
      else if(rChallenge==12)(eLevel=10);}
    else {
 if(rChallenge<=3)(eLevel=4);
      else if(rChallenge==4)(eLevel=3);
      if(rChallenge>=5&&rChallenge<=7)(eLevel=12);
      else if(rChallenge==8)(eLevel=11);
      if(rChallenge>=9&&rChallenge<=11)(eLevel=10);
      else if(rChallenge==12)(eLevel=9);
  }
  }
}
//resets spinners from level 3
function spinner3Reset(){
   spinnerGroupInner3.setVisibleEach(false);
            spinnerGroupMidTop3.setVisibleEach(false);
            spinnerGroupMidBot3.setVisibleEach(false);
            spinnerGroupMidLeft3.setVisibleEach(false);
            spinnerGroupMidRight3.setVisibleEach(false);
            spinnerGroupOuterTop3.setVisibleEach(false);
            spinnerGroupOuterBot3.setVisibleEach(false);
            spinnerGroupOuterLeft3.setVisibleEach(false);
            spinnerGroupOuterRight3.setVisibleEach(false);
            
            spinnerGroupInner3.setVelocityEach(0,0);
            spinnerGroupMidTop3.setVelocityEach(0,0);
            spinnerGroupMidBot3.setVelocityEach(0,0);
            spinnerGroupMidLeft3.setVelocityEach(0,0);
            spinnerGroupMidRight3.setVelocityEach(0,0);
            spinnerGroupOuterTop3.setVelocityEach(0,0);
            spinnerGroupOuterBot3.setVelocityEach(0,0);
            spinnerGroupOuterLeft3.setVelocityEach(0,0);
            spinnerGroupOuterRight3.setVelocityEach(0,0);
            
            for(var x =0;x<3;x++){
              //top and bot
              spinnerGroupMidTop3.get(x).x=(75+(x*125));
              spinnerGroupMidTop3.get(x+3).x=(75+(x*125));
              spinnerGroupMidBot3.get(x).x=(75+(x*125));
              spinnerGroupMidBot3.get(x+3).x=(75+(x*125));
              spinnerGroupOuterTop3.get(x).x=(75+(x*125));
              spinnerGroupOuterTop3.get(x+3).x=(75+(x*125));
              spinnerGroupOuterBot3.get(x).x=(75+(x*125));
              spinnerGroupOuterBot3.get(x+3).x=(75+(x*125));
              
              spinnerGroupMidTop3.get(x).y=(76);
              spinnerGroupMidTop3.get(x+3).y=(301);
              spinnerGroupMidBot3.get(x).y=(124);
              spinnerGroupMidBot3.get(x+3).y=(349);
              spinnerGroupOuterTop3.get(x).y=(52);
              spinnerGroupOuterTop3.get(x+3).y=(277);
              spinnerGroupOuterBot3.get(x).y=(148);
              spinnerGroupOuterBot3.get(x+3).y=(373);
              
              //left and right
               spinnerGroupMidLeft3.get(x).x=(51+(x*125));
              spinnerGroupMidLeft3.get(x+3).x=(51+(x*125));
              spinnerGroupMidRight3.get(x).x=(99+(x*125));
              spinnerGroupMidRight3.get(x+3).x=(99+(x*125));
              spinnerGroupOuterLeft3.get(x).x=(27+(x*125));
              spinnerGroupOuterLeft3.get(x+3).x=(27+(x*125));
              spinnerGroupOuterRight3.get(x).x=(123+(x*125));
              spinnerGroupOuterRight3.get(x+3).x=(123+(x*125));
              
              spinnerGroupMidLeft3.get(x).y=(100);
              spinnerGroupMidLeft3.get(x+3).y=(325);
              spinnerGroupMidRight3.get(x).y=(100);
              spinnerGroupMidRight3.get(x+3).y=(325);
              spinnerGroupOuterLeft3.get(x).y=(100);
              spinnerGroupOuterLeft3.get(x+3).y=(325);
              spinnerGroupOuterRight3.get(x).y=(100);
              spinnerGroupOuterRight3.get(x+3).y=(325);
            }
}
//resets spinner for level 5
function spinner5Reset(){
  innerCircle51.x=280;innerCircle51.y=210;
  innerCircle52.x=245;innerCircle52.y=220;
  innerCircle53.x=220;innerCircle53.y=245;
  innerCircle54.x=210;innerCircle54.y=280;
  innerCircle57.x=280;innerCircle57.y=350;
  innerCircle58.x=315;innerCircle58.y=340;
  innerCircle59.x=340;innerCircle59.y=315;
  innerCircle510.x=350;innerCircle510.y=280;
  
  innerCircle51.setVelocity(0,0); innerCircle52.setVelocity(0,0);
  innerCircle53.setVelocity(0,0); innerCircle54.setVelocity(0,0);
  innerCircle57.setVelocity(0,0); innerCircle58.setVelocity(0,0);
  innerCircle59.setVelocity(0,0); innerCircle510.setVelocity(0,0);

  innerCircle51.visible = innerCircle52.visible = innerCircle53.visible = innerCircle54.visible = 
  innerCircle57.visible = innerCircle58.visible = innerCircle59.visible = 
  innerCircle510.visible =false;
}
//resets spinner from eLevel 3
function spinnerE3Reset(){
  eSpin3top1.setVelocity(0,0); eSpin3left1.setVelocity(0,0);
  eSpin3bot1.setVelocity(0,0);eSpin3right1.setVelocity(0,0);
   eSpin3top2.setVelocity(0,0); eSpin3left2.setVelocity(0,0);
  eSpin3bot2.setVelocity(0,0);eSpin3right2.setVelocity(0,0); 
  eSpin3top3.setVelocity(0,0); eSpin3left3.setVelocity(0,0);
  eSpin3bot3.setVelocity(0,0);eSpin3right3.setVelocity(0,0); 
  eSpin3top4.setVelocity(0,0); eSpin3left4.setVelocity(0,0);
  eSpin3bot4.setVelocity(0,0);eSpin3right4.setVelocity(0,0);
  
  eSpin3top1.x=200;eSpin3top1.y=51.25;
  eSpin3bot1.x=200;eSpin3bot1.y=371.25;
  eSpin3left1.x=40;eSpin3left1.y=211.25;
  eSpin3right1.x=360;eSpin3right1.y=211.25;
   
   eSpin3top2.x=200;eSpin3top2.y=91.25;
  eSpin3bot2.x=200;eSpin3bot2.y=331.25;
  eSpin3left2.x=80;eSpin3left2.y=211.25;
  eSpin3right2.x=320;eSpin3right2.y=211.25;
  
  eSpin3top3.x=200;eSpin3top3.y=131.25;
  eSpin3bot3.x=200;eSpin3bot3.y=291.25;
  eSpin3left3.x=120;eSpin3left3.y=211.25;
  eSpin3right3.x=280;eSpin3right3.y=211.25;
  
 eSpin3top4.x=200;eSpin3top4.y=171.25;
  eSpin3bot4.x=200;eSpin3bot4.y=251.25;
  eSpin3left4.x=160;eSpin3left4.y=211.25;
  eSpin3right4.x=240;eSpin3right4.y=211.25;
}
//resets dot field for eLevel 4
function dotFieldE4Reset(){
  e4G1.setVisibleEach(false);e4G2.setVisibleEach(false);e4G3.setVisibleEach(false);
  e4G4.setVisibleEach(false);e4G5.setVisibleEach(false);e4G6.setVisibleEach(false);
  e4G7.setVisibleEach(false);e4G8.setVisibleEach(false);e4G9.setVisibleEach(false);
  e4G10.setVisibleEach(false);e4G11.setVisibleEach(false);e4G12.setVisibleEach(false);
  e4G13.setVisibleEach(false);e4G14.setVisibleEach(false);e4G15.setVisibleEach(false);
  e4G16.setVisibleEach(false);e4G17.setVisibleEach(false);e4G18.setVisibleEach(false);
  e4G19.setVisibleEach(false);e4G20.setVisibleEach(false);e4G21.setVisibleEach(false);
  e4G22.setVisibleEach(false);e4G23.setVisibleEach(false);e4G24.setVisibleEach(false);
  e4G25.setVisibleEach(false);e4G26.setVisibleEach(false);e4G27.setVisibleEach(false);
  e4G28.setVisibleEach(false);e4G29.setVisibleEach(false);e4G30.setVisibleEach(false);
  e4G31.setVisibleEach(false);e4G32.setVisibleEach(false);e4G33.setVisibleEach(false);
  e4G34.setVisibleEach(false);
}
//resets spinners from eLevel 6
function spinnerE6Reset(){
  e6SpinOutTopDown.setVelocity(0,0);e6SpinOutTopUp.setVelocity(0,0);
  e6SpinInTopUp.setVelocity(0,0);e6SpinInTopDown.setVelocity(0,0);
  e6SpinOutRightUp.setVelocity(0,0);e6SpinOutRightDown.setVelocity(0,0);
  e6SpinInRightUp.setVelocity(0,0);e6SpinInRightDown.setVelocity(0,0);
  e6SpinOutLeftUp.setVelocity(0,0);e6SpinOutLeftDown.setVelocity(0,0);
  e6SpinInLeftUp.setVelocity(0,0);e6SpinInLeftDown.setVelocity(0,0);
  
  e6SpinOutTopDown.x=200;e6SpinOutTopDown.y=195;
  e6SpinOutTopUp.x=200;e6SpinOutTopUp.y=227.5;
  e6SpinInTopUp.x=200;e6SpinInTopUp.y=195;
  e6SpinInTopDown.x=200;e6SpinInTopDown.y=227.5;
  e6SpinOutRightUp.x=256;e6SpinOutRightUp.y=128;
  e6SpinOutRightDown.x=256;e6SpinOutRightDown.y=290;
  e6SpinInRightUp.x=229;e6SpinInRightUp.y=145;
  e6SpinInRightDown.x=229;e6SpinInRightDown.y=276;
  e6SpinOutLeftUp.x=144;e6SpinOutLeftUp.y=128;
  e6SpinOutLeftDown.x=144;e6SpinOutLeftDown.y=292;
  e6SpinInLeftUp.x=173;e6SpinInLeftUp.y=146;
  e6SpinInLeftDown.x=173;e6SpinInLeftDown.y=275;
}
//sets wall colors for endless mode
function setWallColor(){
  wallMid01.shapeColor=wallBottom.shapeColor=wallTop.shapeColor=
  wallLeft.shapeColor=wallRight.shapeColor=wallMid97.shapeColor=
  eWall10.shapeColor=eWall11.shapeColor=eWall21.shapeColor=
  eWall22.shapeColor=eWall23.shapeColor=eWall24.shapeColor=eWall4Left.shapeColor=
  eWall4Right.shapeColor=eWall51.shapeColor=eWall52.shapeColor=eWall53.shapeColor=
  eWall61.shapeColor=eWall62.shapeColor=eWall71.shapeColor=eWall72.shapeColor=
  eWall81.shapeColor=eWall82.shapeColor=eWall91.shapeColor=eWall92.shapeColor=
  eWall93.shapeColor=eWall101.shapeColor=eWall102.shapeColor=eWall103.shapeColor=
  eWall111.shapeColor=eWall112.shapeColor=wallColor;
  eWall12.setColorEach(wallColor);
  eSafe1.shapeColor=eSafe2.shapeColor=eSafe3.shapeColor=eSafe4.shapeColor=safe96.shapeColor=
  startEndless.shapeColor=eLevel1Btn.shapeColor = eLevel2Btn.shapeColor = eLevel3Btn.shapeColor = 
eLevel4Btn.shapeColor = eLevel5Btn.shapeColor = eLevel6Btn.shapeColor = 
eLevel7Btn.shapeColor = eLevel8Btn.shapeColor = eLevel9Btn.shapeColor = 
eLevel10Btn.shapeColor = eLevel11Btn.shapeColor = eLevel12Btn.shapeColor=
safeColor;
  back95.shapeColor=back96.shapeColor=back98.shapeColor=scores98.shapeColor=custom98.shapeColor=
  back97.shapeColor=lSelect98.shapeColor=back94.shapeColor=hardSkip94.shapeColor=switchColor;
}
//Shows the song name at the bottom of the screen
function showSong(){
  textAlign(RIGHT, TOP);
  textFont("arial");
  if(level==95||level==96||level==97||level==98||level==99||level==100){
  stroke(songColor);
  fill(songColor);
  }else{
    stroke("white");
    fill("white");
  }
  textSize(13);
  strokeWeight(0.25);
if(playingSong[0]){
  text("Playing: Kubbi - Sleet",380,387);
}else if(playingSong[1]){
  text("Playing: Kubbi - Overworld",380,387);
}else if(playingSong[2]){
  text("Playing: Kubbi - Bright Matter",380,387);
}else if(playingSong[3]){
  text("Playing: Kubbi - Mellow",380,387);
}else if(playingSong[4]){
  text("Playing: Kubbi - Spiritdancer",380,387);
}else if(playingSong[5]){
  text("Playing: Kubbi - Cronos",380,387);
}else if(playingSong[6]){
  text("Playing: Kubbi - Cascade",380,387);
}else if(playingSong[7]){
  text("Playing: Kubbi - Compass",380,387);
}else if(playingSong[8]){
  text("Playing: Kubbi - Ember",380,387);
}else if(playingSong[9]){
  text("Playing: Kubbi - Cartridge",380,387);
}else if(playingSong[10]){
  text("Playing: Kubbi - Tidal Force",380,387);
}else if(playingSong[11]){
  text("Playing: Kubbi - Antlers",380,387);
}else if(playingSong[12]){
  text("Playing: Kubbi - Disconnect",380,387);
}else if(playingSong[13]){
  text("Playing: Kubbi - Plume",380,387);
}else if(playingSong[14]){
  text("Playing: Kubbi - Sunrise",380,387);
}else if(playingSong[15]){
  text("Playing: Kubbi - Wake",380,387);
}else if(playingSong[16]){
  text("Playing: Kubbi - Gravity",380,387);
}else if(playingSong[17]){
  text("Playing: Kubbi - Indolence",380,387);
}else if(playingSong[18]){
  text("Playing: Kubbi - Planet IV",380,387);
}else if(playingSong[19]){
  text("Playing: Kubbi - Polar Bear",380,387);
}else if(playingSong[20]){
  text("Playing: Kubbi - Ropes",380,387);
}else if(playingSong[21]){
  text("Playing: Kubbi - Seahorse Dreams",380,387);
}
}
//randomly selects a song for endless mode
function pickSong(){
  if(score%5==0){
    stopSongs();
    var rSong = randomNumber(1,6);
    if(score<10&&topScore<10){
      if(rSong==1){playSound("assets/Music/Tidal Force.mp3",true);
      playingSong[10]=true;}
      else if(rSong==2){playSound("assets/Music/Antlers.mp3",true);
      playingSong[11]=true;}
      else if(rSong==3){playSound("assets/Music/Disconnect.mp3",true);
      playingSong[12]=true;} 
      else if(rSong==4){playSound("assets/Music/Plume.mp3",true);
      playingSong[13]=true;} 
      else if(rSong==5){playSound("assets/Music/Sunrise.mp3",true);
      playingSong[14]=true;}
      else if(rSong==6){playSound("assets/Music/Wake.mp3",true);
      playingSong[15]=true;} 
    }else{
      if(rSong==1){playSound("assets/Music/Gravity.mp3",true);
      playingSong[16]=true;} 
      else if(rSong==2){playSound("assets/Music/Indolence.mp3",true);
      playingSong[17]=true;} 
      else if(rSong==3){playSound("assets/Music/Planet IV.mp3",true);
      playingSong[18]=true;} 
      else if(rSong==4){playSound("assets/Music/Polar bear.mp3",true);
      playingSong[19]=true;} 
      else if(rSong==5){playSound("assets/Music/Ropes.mp3",true);
      playingSong[20]=true;} 
      else if(rSong==6){playSound("assets/Music/Seahorse Dreams.mp3",true);
      playingSong[21]=true;} 
    }
  }
}
//stops all songs
function stopSongs(){
    stopSound("assets/Music/Bright Matter.mp3");
    stopSound("assets/Music/Antlers.mp3");
    stopSound("assets/Music/Disconnect.mp3");
    stopSound("assets/Music/Plume.mp3");
    stopSound("assets/Music/Sunrise.mp3");
    stopSound("assets/Music/Tidal Force.mp3");
    stopSound("assets/Music/Wake.mp3");
    stopSound("assets/Music/Gravity.mp3");
    stopSound("assets/Music/Indolence.mp3");
    stopSound("assets/Music/Planet IV.mp3");
    stopSound("assets/Music/Polar bear.mp3");
    stopSound("assets/Music/Ropes.mp3");
    stopSound("assets/Music/Seahorse Dreams.mp3");
    stopSound("assets/Music/Mellow.mp3");
    stopSound("assets/Music/Spiritdancer.mp3");
    stopSound("assets/Music/Cronos.mp3");
    stopSound("assets/Music/Cascade.mp3");
    stopSound("assets/Music/Compass.mp3");
    stopSound("assets/Music/Ember.mp3");
    stopSound("assets/Music/Cartridge.mp3");
    stopSound("assets/Music/Overworld.mp3");
    stopSound("assets/Music/Sleet.mp3");
    stopSound("assets/Music/Bright Matter.mp3");
    stopSound("assets/Music/Antlers.mp3");
    stopSound("assets/Music/Disconnect.mp3");
    stopSound("assets/Music/Plume.mp3");
    stopSound("assets/Music/Sunrise.mp3");
    stopSound("assets/Music/Tidal Force.mp3");
    stopSound("assets/Music/Wake.mp3");
    stopSound("assets/Music/Gravity.mp3");
    stopSound("assets/Music/Indolence.mp3");
    stopSound("assets/Music/Planet IV.mp3");
    stopSound("assets/Music/Polar bear.mp3");
    stopSound("assets/Music/Ropes.mp3");
    stopSound("assets/Music/Seahorse Dreams.mp3");
    stopSound("assets/Music/Mellow.mp3");
    stopSound("assets/Music/Spiritdancer.mp3");
    stopSound("assets/Music/Cronos.mp3");
    stopSound("assets/Music/Cascade.mp3");
    stopSound("assets/Music/Compass.mp3");
    stopSound("assets/Music/Ember.mp3");
    stopSound("assets/Music/Cartridge.mp3");
    stopSound("assets/Music/Overworld.mp3");
    playingSong = [false,false,false,false,false,false,false,false,false,false
,false,false,false,false,false,false,false,false,false,false,false];
}
//resets endless mode level select
function eLevelSelectReset(eSafe){
  loopCount=0;main0.visible=false;main0.setVelocity(0,0);
  level=99;score=0;
  if(eSafe==1){
  eMain.x=eSafe1.x;eMain.y=eSafe1.y;
  }else if(eSafe==2){
  eMain.x=eSafe2.x;eMain.y=eSafe2.y;
  }else if(eSafe==3){
  eMain.x=eSafe3.x;eMain.y=eSafe3.y;
  }else if(eSafe==4){
  eMain.x=eSafe4.x;eMain.y=eSafe4.y;
  }
  playSound("assets/category_digital/power_up.mp3",false); deathLoopCount=0;
   wallMid01.visible=back94.visible=eLevel1Btn.visible=eLevel2Btn.visible=eLevel3Btn.visible=eLevel4Btn.visible=
  eLevel5Btn.visible=eLevel6Btn.visible=eLevel7Btn.visible=eLevel8Btn.visible=eLevel9Btn.visible=
  eLevel10Btn.visible=eLevel11Btn.visible=eLevel12Btn.visible=hardSkip94.visible=false;
  stopSound("assets/Music/Overworld.mp3");
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
