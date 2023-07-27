

class Github{

    // istek atmak için gerekli veriler
    constructor() {
        this.clientId = "11661521d3a603ba29e0";
        this.clientSecret = "e3b583025cfb7788b75dfed994dfda9db4eec2b2";
        this.perPage=10;
        this.sort="asc"

    }

    async getUser(username){
        const profileRes=await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

   
        const profile = await profileRes.json();
        const repos= await reposRes.json();
        
        return {
            profile,
            repos,
        };
    }
}


export default Github