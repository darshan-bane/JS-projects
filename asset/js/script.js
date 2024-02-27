const endDate = "28 February 2024 6:00 pm"
document.getElementById("end-Date").innerHTML = endDate
const inputs = document.querySelectorAll('input')

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end);
    // console.log(now);
    const diff = (end - now) / 1000       // 1000 beacuse it coverts milli seconds to seconds

    if(diff<0) return;

    // console.log(diff);
    inputs[0].value=(Math.floor(diff/3600/24)); //days
    inputs[1].value=(Math.floor(diff/3600) % 24); //hours
    inputs[2].value=(Math.floor(diff/60) % 60);  //minutes
    inputs[3].value=(Math.floor(diff) % 60);  //seconds

}

clock()


setInterval(
    () => {
        clock()
    },
    1000
)

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */