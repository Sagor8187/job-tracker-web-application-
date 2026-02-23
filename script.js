let totalJob = document.getElementById("total-count");
let interviewcount = document.getElementById("interview-count");
let rejectedcount = document.getElementById("rejected-count");



let interviewbtn = document.querySelectorAll("#interview-btn")
let rejectedbtn = document.querySelectorAll("#rejected-btn")

let interviewSection = document.getElementById("interview-section")
let rejectedSection = document.getElementById("rejected-section")


let interview = [];

let rejected = [];

function jobcount(){
    let totaljobcount = document.getElementById("card-root").childElementCount;
    totalJob.innerText = totaljobcount;

    let interviewscounts = interview.length;
    
    interviewcount.innerText=interview.length;

    let rejectedscounts = rejected.length;

    rejectedcount.innerText = rejectedscounts
}
jobcount()

// delete button function

function deleted(id){
    let card = document.getElementById(id)
    card.remove();
    jobcount()
    
}

interviewbtn.forEach(btn => {
    btn.addEventListener("click",function(e){
        let card = e.target.closest(".card");
        let title = card.querySelector("h2").innerText;
        let work =card.querySelector("#work").innerText;
        let type =card.querySelector("#type").innerText;
        let location =card.querySelector("#location").innerText;
        let status = card.querySelector("#status").innerText;
        let description = card.querySelector("#description").innerText;
        let interviewbtns = card.querySelector("#interview-btn").innerText;
        let rejectedbtns = card.querySelector("#rejected-btn").innerText;
        
        let jobs ={
            title,
            work,
            type,
            location,
            status,
            description,
            interviewbtns,
            rejectedbtns
        }
        console.log(jobs)

       
    })
})



