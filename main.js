 class myGithub {
   constructor() {
     this.init1()
     this.init2()
    //  this.search()
    //  this.modify()
   }
  //  search(){
  //    let s=document.getElementById("search")
  //  }
   init1() {
     const user = "mhdalmasri";
     const key = 'client_id=795b5caa7de1271e1d44&client_secret=038550c6e6d409ff4b24f7bc1d1ac69f6ba4e60e'
     const apiUrl = `https://api.github.com/users/${user}/repos?${key}`
     fetch(apiUrl)
       .then(
         resp => resp.json()
       )
       .then(
         repos => {
           console.log(repos)
           this.showAvatar(repos[0].owner.avatar_url)
           this.showName(repos[0].owner.login)
           repos.forEach(repo => this.template(repo))
         })
       .catch(
         err => console.log(`panic: ${err}`)
       )
   }
   init2() {
     const user = "mhdalmasri";
     const key = 'client_id=795b5caa7de1271e1d44&client_secret=038550c6e6d409ff4b24f7bc1d1ac69f6ba4e60e'
     const apiUrl = `https://api.github.com/users/${user}?${key}`
     fetch(apiUrl)
       .then(
         resp => resp.json()
       )
       .then(
         user => {
           console.log(user)
           this.showBio(user.bio)
           this.showLoc(user.location)
           this.showCompany(user.company)
         })
       .catch(
         err => console.log(`panic: ${err}`)
       )
   }
   template(x) {
     let git = document.createElement("div");
     git.innerHTML =
       `<div class="col-md-4">
       <div class="card mb-4 shadow-sm">
         <div class="card-body">
         <h3 class="card-title"><i class="fas fa-code-branch"></i> ${x.name}</h3>
           <p class="card-text">${(x.description == null) ? 'Info not available' : x.description}.</p>
           <div class="d-flex justify-content-between align-items-center">
             <div class="btn-group">
               <a href="${x.html_url}" type="button" class="btn btn-sm btn-outline-secondary">View</a>
             </div>
             <small class="text-muted">${(x.created_at).substr(0,10)}</small>
           </div>
         </div>
       </div>
     </div>
     `
     document.getElementById("repos").appendChild(git);
   }
   showAvatar(src) {
     document.getElementById("avatar").src = `${src}`;
   }
   showName(name) {
     document.getElementById("name").innerHTML = ` &ldquo;${name}&rdquo; Repositories`;
   }
   showBio(bio) {
     document.getElementById("bio").innerHTML = `${(bio == null) ? 'Bio not available' : bio}`;
   }
   showLoc(location) {
     document.getElementById("location").innerHTML = `${(location == null) ? 'Location not available' : location}`;
   }
   showCompany(company) {
     document.getElementById("company").innerHTML = `${(company == null) ? 'Company not availabe' : company}`;
   }
   }
 const newGitRipo = new myGithub()