import Github from './github.js';
import UI from './ui.js';
// Github classın dan obje oluşturma
const github=new Github();

// UI objesi
const ui=new UI();

// Html den geleneler
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");
const themeBtn=document.getElementById("theme-btn");
const body=document.querySelector("body");

searchInput.addEventListener("keypress",(e)=>{
    if(e.code ==="Enter"){
        getInput();
    }
});

searchButton.addEventListener("click",getInput);

themeBtn.addEventListener("click",changeTheme);

// temayı değiştirme
function changeTheme(){
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-bg-dark");

    if(body.classList.contains("bg-dark")){
        themeBtn.innerHTML="Açık Mod";
    }else{
        themeBtn.innerHTML="Koyu Mod";
    }
}


function getInput(){
// Gelen değer boş değilse
    if(searchInput.value!==""){
        
        github.getUser(searchInput.value)
        .then((data)=>{
            if(data.profile.message==="Not Found"){
                ui.showAlert("Aradığınız kullanıcı bulunamadı.","alert-danger");
            }else{
                ui.showAlert("Kullanıcı başarıyla bulundu.","alert-success");
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            
           
        });
        return;
    }

    ui.showAlert("Form alanı boş olmaz.","alert-info");
    
}