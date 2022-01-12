
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".ctr_Btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('ctr_Decrease')){
            count--
        }
        else if(styles.contains('ctr_Reset')){
            count = 0;
        }
        else{
            count++
        }
        if(count > 0){
            value.style.color = "#8c52ff";
        }
        if(count === 0){
            value.style.color = '#252934';
        }
        if(count < 0){
            value.style.color = 'grey';
        }
        value.textContent = count; 
    });
});