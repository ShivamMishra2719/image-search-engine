const accesskey="GDbfUEA5tTUQw6kXehY5mrYjoM1YZCWXgHPeIp2HB6Y";
const serachform=document.getElementById("search-form");
const serachbox=document.getElementById("search-box");
const serachresult=document.getElementById("search-result");
const showbtn=document.getElementById("show-more");


let keyword="";
let page=1;
async function serachimage(){
    keyword=serachbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        serachresult.innerHTML="";
    }
    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";

       console.log(imagelink.appendChild(image));
        console.log(serachresult.appendChild(imagelink));
    })

    showbtn.style.display="block";
}

serachform.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    serachimage();
})

showbtn.addEventListener("click",()=>{
    page++;
    serachimage();
})