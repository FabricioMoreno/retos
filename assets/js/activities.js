import Dare from './Dare.js'
const p = document.getElementById('main_activity');
const restartBtn = document.getElementById('restart')

function showActivity(text){
    p.textContent = text
}
function showLoadingMessage(message){
    p.textContent = message;
}
const app = new Dare()

async function activityApi(){
    showLoadingMessage('LOADING...')
    await app.init()
    const myActivity =  app.getActivity()
    showActivity(myActivity)
}

activityApi();

restartBtn.addEventListener('click',()=>activityApi())
