var users = ["Ivan", "Stepan", "Petro"];
var ov = [];
var uv = [];
var c;

/*****************************
*generate OV and UV vectors. *
*OV 4 files; UV 4 users.     *
*****************************/
function generate_vectors() {
    var rights = [0, 1, 2, 3, 4, 5];
    for (var i = 0; i < 5; i++){
    ov[i] = rights[Math.floor(Math.random() * rights.length)];
    }
    for (var j = 0; j < users.length; j++) {
        uv[j] = rights[Math.floor(Math.random() * rights.length)];
    }
    console.log("uv: "+uv);
    console.log("ov: "+ov);
    }

/********************************
* function to check user access *
********************************/
function check_rights () {
    var inpt = document.getElementById("inpt").value;
    var flag;
    
    for (var i = 0; i < users.length; i++) {
         if (inpt == users[i]){
             flag = 1;
             c = i;
             break;
         }
         else {        flag = 0;    }
    }
    if (flag == 1){
        alert("Hello, "+inpt);
        console.log("user "+inpt+" logged in.");
        load_main();
                              }
    else {
        alert("ERROR: UNKNOWN USER!");
        console.log("WARNING: UNKNOWN USER TRYING TO LOGIN");
    } 
}

function load_main() {
    var div = document.getElementById('init');
    div.style.display="none";
    var usr = document.getElementById('usr');
    usr.style.display="flex";
}

//read access if user`s security level >= file security level
//write access if user`s security level <= file sucurity level
function triggered (arg) {
               if(uv[c] >= ov[arg]) {
                 console.log("file "+(arg+1)+": read access granted");
               }
            if(uv[c] <= ov[arg]) {
                 console.log("file "+(arg+1)+": write access granted");
               }
         console.log("uv[c] "+ uv[c]+" ov[i] "+ov[arg]);
        }

function create_quit () {
    var usr = document.getElementById('usr');
        var quit = document.createElement('input');
        quit.setAttribute('type','button');
        quit.setAttribute('value','Quit');
        quit.setAttribute('class','btn btn--primary');
        quit.setAttribute('id','quit');
        quit.onclick = function() {
            console.log('user logged out.');
            var div = document.getElementById('init');
            div.style.display="flex";
            usr.style.display="none";
        }
        usr.appendChild(quit);
}

window.onload = function () {
    console.log("document is ready");
    console.log("selected users as 3");
    console.log("selected documents as 5");
    console.log("start create OV and UV");
    generate_vectors();
    create_quit();
}
