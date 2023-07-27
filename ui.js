class UI {
    constructor() {
        this.profile = document.getElementById("profile");
        this.reposDiv = document.getElementById("repos");
    }

    showProfile(data) {
        // console.log(data);
        this.profile.innerHTML = `
        <div class="row border p-4">
            
            <div class="col-md-3">
                <img class="img-fluid" src="${data.avatar_url}" alt="">

                <a class="btn btn-primary my-4 w-100" href="${data.html_url}">Profili Göster</a>
            </div>

            <div class="col-md-9">
                <span class="badge bg-primary fs-6 mt-1">Açık Repolar: ${data.public_repos}</span>
                <span class="badge bg-secondary fs-6 mt-1">Açık Gistler: ${data.public_gists}</span>
                <span class="badge bg-success fs-6 mt-1">Takipçiler: ${data.followers}</span>
                <span class="badge bg-info fs-6 mt-1">Takip Edilenler: ${data.following}</span>

                <ul class="list-group mt-5">
                    <li class="list-group-item">Hakkında: ${data.bio}</li>
                    <li class="list-group-item">Şirket: ${data.company}</li>
                    <li class="list-group-item">Website: ${data.blog}</li>
                    <li class="list-group-item">Konum: ${data.location}</li>
                    <li class="list-group-item">Hesap Oluşturma: ${new Date(data.created_at).toLocaleDateString()}</li>
                </ul>
            </div>

        </div>
        `;
    }

    showRepos(repos) {
        console.log(repos);
        repos.forEach((repo) => {
            console.log(repo);
            this.reposDiv.innerHTML += `
            <div class="border row p-3 mb-4">
                <div class="col-md-6">
                    <a href="${repo.html_url}">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge bg-primary">Yıldız: ${repo.stargazers_count}</span>
                    <span class="badge bg-primary">İzleyenler: ${repo.watchers_count}</span>
                    <span class="badge bg-primary">Fork'lar: ${repo.forks_count}</span>
                </div>
            </div>
            `;
        });

    }
}

export default UI;