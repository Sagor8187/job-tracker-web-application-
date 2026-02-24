let interview = [];
let rejected = [];

// all id doreci html page er
const totalJobCountDisplay = document.getElementById("total-count");
const interviewCountDisplay = document.getElementById("interview-count");
const rejectedCountDisplay = document.getElementById("rejected-count");
const mainContainer = document.getElementById("card-root");
const interviewContainer = document.getElementById("interview-section");
const rejectedContainer = document.getElementById("rejected-section");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// counter update function 
function calculatcount() {
    totalJobCountDisplay.innerText = mainContainer.children.length;
    interviewCountDisplay.innerText = interview.length;
    rejectedCountDisplay.innerText = rejected.length;
}



//delte function 
function deleted(cardId, title) {
    const card = document.getElementById(cardId);
    if (card) card.remove();

    // array theke remove kora
    interview = interview.filter(item => item.title !== title);
    rejected = rejected.filter(item => item.title !== title);

    calculatcount();
    renderLists();
}

// filter toogle and style change use id
function toggolestyle(id) {
    // intial filter btn theke class remove
    [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
        btn.classList.remove("bg-[#3B82F6]", "text-white");
        btn.classList.add("bg-white", "text-black");
    });

    // click btn e active status add kora
    const selectedBtn = document.getElementById(id);
    if (selectedBtn) {
        selectedBtn.classList.remove("bg-white", "text-black");
        selectedBtn.classList.add("bg-[#3B82F6]", "text-white");
    }

    // section hide and show
    mainContainer.parentElement.classList.add('hidden');
    interviewContainer.classList.add('hidden');
    rejectedContainer.classList.add('hidden');

    if (id === 'all-filter-btn') {
        mainContainer.parentElement.classList.remove('hidden');
    } else if (id === 'interview-filter-btn') {
        interviewContainer.classList.remove('hidden');
    } else if (id === 'rejected-filter-btn') {
        rejectedContainer.classList.remove('hidden');
    }
}

// global flow handle er jonno
document.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("interview-btn") || target.classList.contains("rejected-btn")) {
        const card = target.closest(".card");
        const title = card.querySelector("h2").innerText;
        const work = card.querySelector("#work").innerText;
        const type = card.querySelector("#type").innerText;
        const location = card.querySelector("#location").innerText;
        const description = card.querySelector("#description").innerText;
        const statusSpan = card.querySelector("#status");

        const jobData = { title, work, type, location, description };

        if (target.classList.contains("interview-btn")) {
            // jodi interview section e thake tahole return korbe
            if (interview.find(j => j.title === title)) return;

            jobData.statust = "Interviewed";
            interview.push(jobData);
            rejected = rejected.filter(j => j.title !== title);

            // status updated
            statusSpan.innerText = "Applied";
            statusSpan.className = "bg-green-100 text-green-800 text-xs px-3 py-1 rounded-md";
        } 
        else if (target.classList.contains("rejected-btn")) {
            if (rejected.find(j => j.title === title)) return;

            jobData.statust = "Rejected";
            rejected.push(jobData);
            interview = interview.filter(j => j.title !== title);

            statusSpan.innerText = "Rejected";
            statusSpan.className = "bg-red-100 text-red-800 text-xs px-3 py-1 rounded-md";
        }

        calculatcount();
        renderLists();
    }
});

//render function
function renderLists() {
    renderSpecificList(interview, interviewContainer, "Interviewed");
    renderSpecificList(rejected, rejectedContainer, "Rejected");
}

function renderSpecificList(dataArray, container, type) {
    container.innerHTML = "";

    // Check if there are no jobs in this category
    if (dataArray.length === 0) {
        container.classList.remove('grid-cols-1', 'md:grid-cols-2'); 
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 w-full text-center bg-gray-50 rounded-xl border-2  border-gray-200">
                <i class="fa-solid fa-folder-open text-5xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-700">No jobs available</h3>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }

    // add grid layout if it was removed for the empty state
    container.classList.add('grid-cols-1');
    if (window.innerWidth >= 768) container.classList.add('md:grid-cols-2');

    dataArray.forEach((job, index) => {
        const div = document.createElement("div");
        const uniqueId = `${type.toLowerCase()}-${index}`;
        div.id = uniqueId;
        div.className = "card bg-white rounded-xl shadow-md p-6 border border-gray-200";
        
        const isCurrentlyInterviewed = (type === "Interviewed");
        
        div.innerHTML = `
            <div class="flex justify-between">
                <h2 class="text-lg font-semibold text-gray-800">${job.title}</h2>
                <button onclick="deleted('${uniqueId}', '${job.title}')" class="text-gray-400 hover:text-red-500">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <p id="work" class="text-gray-500 text-sm mt-1">${job.work}</p>
            <p id="type" class="text-gray-500 text-sm mt-2">${job.type}</p>
            <p id="location" class="text-gray-500 text-sm mt-2">Location: ${job.location}</p>
            <div class="mt-4">
                <span id="status" class="${isCurrentlyInterviewed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} text-xs px-3 py-1 rounded-md">
                    ${type.toUpperCase()}
                </span>
            </div>
            <p id="description" class="text-gray-600 text-sm mt-4">${job.description}</p>
            <div class="flex gap-3 mt-5">
                <button class="interview-btn border border-green-500 text-green-600 px-4 py-1.5 rounded-md text-sm ${isCurrentlyInterviewed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-50'}" 
                    ${isCurrentlyInterviewed ? 'disabled' : ''}>
                    Interview
                </button>
                <button class="rejected-btn border border-red-500 text-red-600 px-4 py-1.5 rounded-md text-sm ${!isCurrentlyInterviewed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-50'}" 
                    ${!isCurrentlyInterviewed ? 'disabled' : ''}>
                    Rejected
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

calculatcount();
renderLists()


