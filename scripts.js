const loadCategory = async (searchText = "") => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
    );
    const data = await res.json();
    const category = data.posts;
    display(category);
};

    
    const display = (category) => {
    // console.log(category)
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.textContent = "";
  
category.forEach((item) => {
    console.log(item);
    // create a div
    const categoryCard = document.createElement("div");
    categoryCard.classList = `lg:flex justify-center items-center bg-gray-200 rounded-3xl p-4 shadow-2xl`;
    // set innerHTML
    categoryCard.innerHTML = `
        <figure class="pt-8 pr-8 pl-8 pb-2 lg:p-4">
            <div class="bg-white w-24 h-24 rounded-xl relative">
                <img class=" w-24 h-24 rounded-xl" src='${item.image}'>
            <div>
            <div>
            <i class="fa-solid fa-circle absolute -right-1 -top-1 ${
              item.isActive ? "text-green-500" : "text-red-500"
            }"></i>
            </div>
        </figure>
        <div class="card-body">
            <div class="lg:flex justify-start gap-6">
                <div>
                    <p class="text-[16px] font-inter font-medium">#<span> </span>${item.category}</p>
                </div>
                <div>
                    <p class="text-[16px] font-inter font-medium">Author:<span> </span>${item.author.name}</p>
                </div>
            </div>
            <h2 class="card-title text-[20px] font-bold">${item.title}</h2>
            <p class="text-[16px] font-inter">${item.description}</p>
            <div class="card-actions items-center justify-start">
                <p class="text-[16px] font-inter font-medium"><i class="fa-regular fa-comment-dots"></i>
                    <span> </span>${item.comment_count}
                </p>
                <p class="text-[16px] font-inter font-medium"><i class="fa-regular fa-eye"></i>
                    <span> </span>${item.view_count}
                </p>
                <p class="text-[16px] font-inter font-medium"><i class="fa-regular fa-clock"></i>
                    <span> </span>${item.posted_time}
                </p>
                <p>
                    <button class="btn bg-green-500 rounded-full">
                        <i class="fa-solid fa-envelope-open text-white text-xl"></i>
                    </button>
                </p>
            </div>
        </div>
        `;
    // append child
    categoryContainer.appendChild(categoryCard);
  });
};

// Handle Search Button
const handleSearch = () => {
    // console.log("clicked");
    // toggleLoadingSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
    loadCategory(searchText);
};

// const toggleLoadingSpinner = (isLoading) =>{
//     const loadingSpinner = document.getElementById('loading-spinner');
//     if(isLoading){
//         loadingSpinner.classList.remove('hidden');
//     }
//     else{
//         loadingSpinner.classList.add('hidden');
//     }
// }

loadCategory();




// loadCategory();

// Latest Posts Functionality
const loadLatestPosts = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  );
  const data = await res.json();
  const latestPosts = data;
  console.log(latestPosts);
  // calling a function for display posts
  displayLatestPosts(latestPosts);
};
// function for display latest post
const displayLatestPosts = (latestPosts) => {
  // loop latest posts
  latestPosts.forEach((latestPost) => {
    console.log(latestPost);
    // get image, author & category
    const latestPostCoverImage = latestPost.cover_image;
    const latestPostPostedDate = latestPost.author.posted_date;
    const latestPostTitle = latestPost.title;
    const latestPostDescription = latestPost.description;
    const latestPostUserImage = latestPost.profile_image;
    const postAuthorName = latestPost.author.name;
    const postDesignation = latestPost.author.designation;

    // select latest post Container
    const latestPostContainer = document.getElementById(
      "latest-post-container"
    );
    // create a div
    const latestPostCard = document.createElement("div");
    // add classes in div
    latestPostCard.classList = ``;
    //  set inner html
    latestPostCard.innerHTML = `
            <div>
                <div class="card w-full bg-base-100 space-y-3 shadow-xl border p-5">
                <figure>
                <div class="bg-[#F3F3F4] w-full h-40">
                <img src="${latestPostCoverImage}">
                </div>
                </figure>
                <div class="mt-2 text-gray-500"><i class="fa-solid fa-calendar-days"></i> <span id="no-posted-date"></span> ${latestPostPostedDate}</div>
                <div class="">
                <h1 class="font-bold text-lg">${latestPostTitle}</h1>
                <p>${latestPostDescription}</p>
                <div class="flex mt-3 items-center">
                <div class="w-[50px]"><img src="${latestPostUserImage}" class="border-2  rounded-full "></div>
                <div class="flex flex-col ml-4">
                <div><span class="font-bold">${postAuthorName}</span></div>
                <div><span class="text-sm">${postDesignation}</span></div>
                </div>
                </div>
                </div>
                </div>
            </div>
         `;
    // append to post Container
    latestPostContainer.appendChild(latestPostCard);
  });
};

loadLatestPosts();
