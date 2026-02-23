let interview = [];
let rejected = [];

let totalJob = document.getElementById("total-count");
let interviewcount = document.getElementById("interview-count");
let rejectedcount = document.getElementById("rejected-count");
let totaljobcount = document.getElementById("card-root");

let maincontainer = document.querySelector("#card-root");

let allfilterbtn = document.getElementById("all-filter-btn");
let interviewfilterbtn = document.getElementById("interview-filter-btn");
let rejectedfilterbtn = document.getElementById("rejected-filter-btn");

let interviewfilter = document.getElementById("interview-section");

let rejectedfilter =  document.getElementById("rejected-section");

function calculatcount() {
  totalJob.innerText = totaljobcount.children.length;
  interviewcount.innerText = interview.length;
  rejectedcount.innerText = rejected.length;
}
calculatcount();

function toggolestyle(id) {
  allfilterbtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewfilterbtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedfilterbtn.classList.remove("bg-[#3B82F6]", "text-white");

  allfilterbtn.classList.add("bg-white", "text-black");
  interviewfilterbtn.classList.add("bg-white", "text-black");
  rejectedfilterbtn.classList.add("bg-white", "text-black");

  let seleted = document.getElementById(id);

  seleted.classList.remove("bg-white", "text-black");
  seleted.classList.add("bg-[#3B82F6]", "text-white");

  if(id == 'interview-filter-btn'){
    maincontainer.classList.add('hidden');
    interviewfilter.classList.remove('hidden')
    rejectedfilter.classList.add('hidden')
  }else if(id == 'all-filter-btn'){
    maincontainer.classList.remove('hidden');
    interviewfilter.classList.add('hidden')
    rejectedfilter.classList.add('hidden')
  }else if(id=='rejected-section'){
    rejectedfilter.classList.remove('hidden')
    maincontainer.classList.add('hidden');
    interviewfilter.classList.add('hidden')
  }
}

function deleted(id) {
  let card = document.getElementById(id);
  card.remove();
  calculatcount();
}

maincontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    console.log()
    let parent = event.target.parentNode.parentNode;
    let title = parent.querySelector("h2").innerText;
    let work = parent.querySelector("#work").innerText;
    let type = parent.querySelector("#type").innerText;
    let location = parent.querySelector("#location").innerText;
    let status = parent.querySelector("#status");
    let description = parent.querySelector("#description").innerText;
    // let interviewbtns = parent.querySelector("#interview-btn").innerText;
    // let rejectedbtns = parent.querySelector("#rejected-btn").innerText;

    let jobs = {
      title,
      work,
      type,
      location,
      statust: "Applied",
      description,
      //   interviewbtns,
      //   rejectedbtns,
    };
    let exist = interview.find((data) => data.title == jobs.title);

    if (!exist) {
      interview.push(jobs);
      status.innerText = jobs.statust;
      status.classList.add("bg-green-200");
      status.classList.remove("bg-red-200");
    }
    // console.log(interview)
    calculatcount();
    renderinterview();
  }else if (event.target.classList.contains("rejected-btn")) {
    console.log()
    let parent = event.target.parentNode.parentNode;
    let title = parent.querySelector("h2").innerText;
    let work = parent.querySelector("#work").innerText;
    let type = parent.querySelector("#type").innerText;
    let location = parent.querySelector("#location").innerText;
    let status = parent.querySelector("#status");
    let description = parent.querySelector("#description").innerText;
    // let interviewbtns = parent.querySelector("#interview-btn").innerText;
    // let rejectedbtns = parent.querySelector("#rejected-btn").innerText;

    let jobs = {
      title,
      work,
      type,
      location,
      statust: "Rejected",
      description,
      //   interviewbtns,
      //   rejectedbtns,
    };
    let exist = rejected.find((data) => data.title == jobs.title);

    if (!exist) {
      rejected.push(jobs);
      status.innerText = jobs.statust;
      status.classList.add("bg-red-200");
    //   status.classList.remove("bg--200");
    }
    // console.log(interview)
    calculatcount();
    renderrejected();
  }
});

function renderinterview() {
  interviewfilter.innerHTML = "";

  for (let interviews of interview) {
    console.log(interviews)
    let newelement = document.createElement("div");
    newelement.classList ="card bg-gray-100 rounded-xl shadow-md p-6 border border-gray-200";
    newelement.innerHTML = `
             <div class="flex justify-between">
                    <h2 class="text-lg font-semibold text-gray-800">${interviews.title}</h2>
                    <button  onclick="deleted('card-1')" id="delete-btn" class="text-gray-400 hover:text-red-500"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                
                <p id="work" class="text-gray-500 text-sm mt-1">${interviews.work}</p>
                <p id="type" class="text-gray-500 text-sm mt-2">${interviews.type}</p>
                <p id="location" class="text-gray-500 text-sm mt-2">${interviews.location}</p>
                <div class="mt-4"><span id="status" class="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md">${interviews.statust}
                        </span></div>
                <p id="description" class="text-gray-600 text-sm mt-4">${interviews.description}</p>
                <div class="flex gap-3 mt-5">
                    <button id="interview-btn"
                        class="interview-btn border border-green-500 text-green-600 px-4 py-1.5 rounded-md text-sm">Interview</button>
                    <button id="rejected-btn" class="rejected-btn border border-red-500 text-red-600 px-4 py-1.5 rounded-md text-sm">Rejected</button>
                </div>
        `;
    interviewfilter.appendChild(newelement);
  }
}

function renderrejected() {
  rejectedfilter.innerHTML = "";

  for (let rejecteds of rejected) {
    // console.log(interviews)
    let newelement = document.createElement("div");
    newelement.classList ="card bg-gray-100 rounded-xl shadow-md p-6 border border-gray-200";
    newelement.innerHTML = `
             <div class="flex justify-between">
                    <h2 class="text-lg font-semibold text-gray-800">${rejecteds.title}</h2>
                    <button  onclick="deleted('card-1')" id="delete-btn" class="text-gray-400 hover:text-red-500"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                
                <p id="work" class="text-gray-500 text-sm mt-1">${rejecteds.work}</p>
                <p id="type" class="text-gray-500 text-sm mt-2">${rejecteds.type}</p>
                <p id="location" class="text-gray-500 text-sm mt-2">${rejecteds.location}</p>
                <div class="mt-4"><span id="status" class="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md">${rejecteds.statust}
                        </span></div>
                <p id="description" class="text-gray-600 text-sm mt-4">${rejecteds.description}</p>
                <div class="flex gap-3 mt-5">
                    <button id="interview-btn"
                        class="interview-btn border border-green-500 text-green-600 px-4 py-1.5 rounded-md text-sm">Interview</button>
                    <button id="rejected-btn" class="rejected-btn border border-red-500 text-red-600 px-4 py-1.5 rounded-md text-sm">Rejected</button>
                </div>
        `;
    rejectedfilter.appendChild(newelement);
  }
}

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
