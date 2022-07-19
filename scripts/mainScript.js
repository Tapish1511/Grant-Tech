const blogEl = document.querySelector(".blog-els");
const sponsorEl = document.querySelector(".sponsors-els")
fetch("https://raw.githubusercontent.com/Tapish1511/Grant-Tech/main/posts.json").then(
    (response)=> response.json()
).then(
    (data)=>{
        const blogData = data.posts
        let blogHtml = "";
        blogData.forEach(card => {
            blogHtml += `
            <div class="blog-card">
                <img src=${card.img} alt="blog image">
                <ul class="card-social-el">
                    <li><a href="#"><i class="fa fa-user"></i></a> by: <span> ${card.author}</span></li>
                    <li><a href="#"><i class="fa fa-heart"></i> </a> <span>25</span></li>
                    
                    <li><a href=""><i class="fa fa-comment"></i></a> <span>${card.comment_count}</span></li>
                </ul>
                <h2 class="card-heading"><a href="#">${card.title}</a></h2>
                <p class="card-text">${card.desc}</p>
                <p class="right-align"><a href="#">Read More...</a></p>
                <a href="" class="blog-date">${card.datetime}</a>
            </div>
            `
        });
        blogEl.innerHTML = blogHtml;

        const sponsorData = data.sponsor;
        let sponsorHtml = "";
        sponsorData.forEach(sponsor=>{
            sponsorHtml += `
            <div class="sponsor-item">
                <a href=${sponsor.link}"><img src=${sponsor.img} alt="sponsor"></a>
            </div>
            `
        })
        sponsorEl.innerHTML = sponsorHtml;
    }
)