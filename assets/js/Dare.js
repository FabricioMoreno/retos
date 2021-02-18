function Dare(){
    this.lastActivity = null
}

Dare.prototype.getJson = function(){
    return fetch('http://www.boredapi.com/api/activity?type=social&participants=1')
    .then((res)=>res.json())
    .then((json)=>{
        if(json.activity == this.lastActivity){
            return this.getJson()
        }
        else{
            console.log(json.activity,'|',this.lastActivity)
            const actualActivity = json.activity
            this.lastActivity = actualActivity;
            return json
        }
    })
    
}
Dare.prototype.init = async function(){
    const json = await this.getJson()
    const myActivity = json.activity
    this.myActivity = myActivity
}
Dare.prototype.getActivity = function(){
    return this.myActivity
}
function putActivityIntoPElement(text){
    p.textContent = text
}

export default Dare;