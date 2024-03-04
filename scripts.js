// const loadCategory = async(searchText) =>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
//     const data = await res.json();
//     const category = data.posts;
//     // console.log(data);
//     display(category);

// }

// const display = category =>{
//     // console.log(category)
//     category.forEach(item =>{
//         console.log(item);

//         const categoryContainer = document.getElementById('category-container');
//         categoryContainer.textContent = '';

//         const showAllContainer = document.getElementById('show-all-category');
//         if(category.length > 1){
//             showAllContainer.classList.remove('hidden');
//         }
//         else{
//             showAllContainer.classList.add('hidden');
//         }
        
//         category = category.slice(0,3);

//         const categoryCard = document.createElement('div');
//         categoryCard.classList = `card w-3/4 bg-gray-200 shadow-xl mt-10`;
//         categoryCard.innerHTML = `
        
//             <div class="lg:flex justify-center items-center">
//         <figure>
//             <img class="w-[72px] h-[72px] rounded-lg m-5" src="${item.image}" alt=""/>
//         </figure>
//             <div class="card-body">
//             <div class="flex justify-start gap-6">
//                 <div>
//                 <p>#<span>  </span>${item.category}</p>
//                 </div>
//                 <div>
//                 <p>Author:<span>  </span>${item.author.name}</p>
//                 </div>
//             </div>
//                 <h2 class="card-title">${item.title}</h2>
//                 <p>${item.description}</p>
//                 <div class="card-actions justify-start">
//                     <p><i class="fa-regular fa-comment-dots"></i>
//                     <span>  </span>${item.comment_count}</p>
//                     <p><i class="fa-regular fa-eye"></i>
//                     <span>  </span>${item.view_count}</p>
//                     <p><i class="fa-regular fa-clock"></i>
//                     <span>  </span>${item.posted_time}</p>
//                 </div>
//             </div>
        
        
//         `;
//         categoryContainer.appendChild(categoryCard);
//         toggleLoadingSpinner(false);
//     });

// }

// // Handle Search Button
// const handleSearch = () =>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     console.log(searchText);
//     loadCategory(searchText);
// }

// const toggleLoadingSpinner = (isLoading) =>{
//     const loadingSpinner = document.getElementById('loading-spinner');
//     if(isLoading){
//         loadingSpinner.classList.remove('hidden');
//     }
//     else{
//         loadingSpinner.classList.add('hidden');
//     }
// }

// loadCategory();


// Latest Posts Functionality
const loadLatestPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    const latestPosts = data;
    console.log(latestPosts);
    // calling a function for display posts
    diplayLatestPosts(latestPosts)
}
// function for display latest post
const diplayLatestPosts = latestPosts => {
    // loop latest posts
    latestPosts.forEach(latestPost => {
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
        const latestPostContainer = document.getElementById('latest-post-container');
        // create a div
        const latestPostCard = document.createElement('div')
        // add classes in div
        latestPostCard.classList = ``
        //  set inner html
        latestPostCard.innerHTML = `
            <div>
                <div class="card  bg-base-100 shadow-xl border p-5 space-y-3">
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
    })
}


loadLatestPosts();








// const loadPost = async() =>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
//     const data = await res.json();
//     // console.log(data);
//     displayPosts(data);

// }

// const displayPosts = data =>{
//     // console.log(data)

//     const postContainer = document.getElementById('post-container');

//     data.forEach(items =>{
//         console.log(items);
//     })

//     const postCard = document.createElement('div');
//     postCard.classList = `card w-full bg-gray-200 shadow-xl mt-10`;
//     postCard.innerHTML = `
//     <figure>
//         <img src="" alt="Shoes" />
//     </figure>
//     <div class="card-body">
//         <h2 class="card-title">${cover_image}</h2>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div class="card-actions justify-end">
//             <button class="btn btn-primary">Buy Now</button>
//         </div>
//     </div>
//     `;
//     postContainer.appendChild(postCard);
// }

// loadPost();









