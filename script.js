let interview = [];
let rejected = [];

let totalJob = document.getElementById("total-count");
let interviewcount = document.getElementById("interview-count");
let rejectedcount = document.getElementById("rejected-count");
let totaljobcount = document.getElementById("card-root")

let maincontainer = document.querySelector("#card-root")

let allfilterbtn = document.getElementById("all-filter-btn")
let interviewfilterbtn = document.getElementById("interview-filter-btn")
let rejectedfilterbtn = document.getElementById("rejected-filter-btn")

function calculatcount(){
    totalJob.innerText = totaljobcount.children.length;
    interviewcount.innerText = interview.length;
    rejectedcount.innerText = rejected.length;
}
calculatcount()

function  toggolestyle(id){
    allfilterbtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewfilterbtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedfilterbtn.classList.remove('bg-[#3B82F6]','text-white')

    allfilterbtn.classList.add('bg-white','text-black')
    interviewfilterbtn.classList.add('bg-white','text-black')
    rejectedfilterbtn.classList.add('bg-white','text-black')

    let seleted = document.getElementById(id)

    seleted.classList.remove('bg-white','text-black')
    seleted.classList.add('bg-[#3B82F6]','text-white')
}

function deleted(id) {
  let card = document.getElementById(id);
  card.remove();
  calculatcount()
}

maincontainer.addEventListener("click",function(event){
    let parent = event.target.parentNode.parentNode
     let title = parent.querySelector("h2").innerText;
    let work = parent.querySelector("#work").innerText;
    let type = parent.querySelector("#type").innerText;
    let location = parent.querySelector("#location").innerText;
    let status = parent.querySelector("#status");
    let description = parent.querySelector("#description").innerText;
    let interviewbtns = parent.querySelector("#interview-btn").innerText;
    let rejectedbtns = parent.querySelector("#rejected-btn").innerText;
    
})

// function jobcount() {
//   let totaljobcount = document.getElementById("card-root").childElementCount;
//   totalJob.innerText = totaljobcount;

//   let interviewscounts = interview.length;

//   interviewcount.innerText = interviewscounts;

//   let rejectedscounts = rejected.length;

//   rejectedcount.innerText = rejectedscounts;
// }
// jobcount();

// // delete button function



// let interviewbtn = document.querySelectorAll("#interview-btn");
// let rejectedbtn = document.querySelectorAll("#rejected-btn");

// let interviewSection = document.getElementById("interview-section");
// let rejectedSection = document.getElementById("rejected-section");

// interviewbtn.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     let card = e.target.closest(".card");
//     let title = card.querySelector("h2").innerText;
//     let work = card.querySelector("#work").innerText;
//     let type = card.querySelector("#type").innerText;
//     let location = card.querySelector("#location").innerText;
//     let status = card.querySelector("#status");
//     let description = card.querySelector("#description").innerText;
//     let interviewbtns = card.querySelector("#interview-btn").innerText;
//     let rejectedbtns = card.querySelector("#rejected-btn").innerText;

//     let jobs = {
//       title,
//       work,
//       type,
//       location,
//       statust: "Applied",
//       description,
//       interviewbtns,
//       rejectedbtns,
//     };

//     let exist = interview.find((data) => data.title == jobs.title);

//     if (!exist) {
//       interview.push(jobs);
//       status.innerText = jobs.statust;
//       status.classList.add("bg-green-200");
//       status.classList.remove("bg-red-200");
//     }

//     jobcount();
//   });
// });

// rejectedbtn.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     let card = e.target.closest(".card");
//     let title = card.querySelector("h2").innerText;
//     let work = card.querySelector("#work").innerText;
//     let type = card.querySelector("#type").innerText;
//     let location = card.querySelector("#location").innerText;
//     let status = card.querySelector("#status");
//     let description = card.querySelector("#description").innerText;
//     let interviewbtns = card.querySelector("#interview-btn").innerText;
//     let rejectedbtns = card.querySelector("#rejected-btn").innerText;

//     let jobs = {
//       title,
//       work,
//       type,
//       location,
//       statustt: "Not Applied",
//       description,
//       interviewbtns,
//       rejectedbtns,
//     };

//     let exist = rejected.find((data) => data.title == jobs.title);

//     if (!exist) {
//       rejected.push(jobs);
//       status.innerText = jobs.statustt;
//       status.classList.add("bg-red-200");
//       status.classList.remove("bg-green-200");
//     }

//     jobcount();
//   });
// });
