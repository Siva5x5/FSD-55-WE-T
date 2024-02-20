const result = document.querySelector(".res-div");
const result_2 = document.querySelector(".res-div_2");
const result_3 = document.querySelector(".res-div_3");

function Sample(){
setTimeout ( () => {
    result_2.innerText = "10";
    setTimeout(() => {
        result_2.innerText = "9";
        setTimeout(() => {
            result_2.innerText = "8";
            setTimeout(() => {
                result_2.innerText = "7";
                setTimeout(() => {
                    result_2.innerText = "6";
                    setTimeout(() => {
                        result_2.innerText = "5";
                        setTimeout(() => {
                            result_2.innerText = "4";
                            setTimeout(() => {
                                result_2.innerText = "3";
                                setTimeout(() => {
                                    result_2.innerText = "2";
                                    setTimeout(() => {
                                        result_2.innerText = "1";
                                        setTimeout(() => {
                                              result.textContent = "Happy";
                                              result_2.textContent = "Independence";
                                              result_3.textContent = "Day";
                                        }, 1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
};
Sample()

// function exe_alert() {
//     alert(" Hello This is my way");
// }
// function exe_confirm() {ś
//     const con_result = confirm("Confirm this is Kesika's way");
//     if (con_result) {
//         result.innerText = "Yes, I confirm this is Kesika's way";
//     } else {
//         result.innerText = "Okay";
//     }
// }