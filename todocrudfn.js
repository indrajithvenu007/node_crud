const fs = require('fs');
//function to read from the file

const config = {
    todo_file: "./todo.list.json"
};
const readFromFile = () => {
    try {
        const json = fs.readFileSync(config.todo_file, 'utf-8');
        return json;
    } catch (e) {
        console.error(e);
        return false;
    }
}

//function to write to a file
const writeToFile = (text) => {
    let jsonData = [];
    const data = readFromFile();
    if(!data) {
        jsonData.push({
            id: 1,
            text: text
        });
    } else {
        const json = JSON.parse(data)
        const newId = json.length;
        jsonData = [ ... json ];
        jsonData.push({
            id: newId,
            text
        });
    }
    fs.writeFileSync(config.todo_file, JSON.stringify(jsonData), 'utf-8');
    return;
}

//function to update
const edit =(idd,txt)=>{
    const data = readFromFile();
    const json = JSON.parse(data);
    jsonData = [ ... json ];
    if(idd > (json.length-1) || (idd <0)){
        console.log("Can't  Edit");
}   else{
        for(i in json)
        if(i==idd){
            json[i].text=txt;         
         fs.writeFileSync(config.todo_file, JSON.stringify(json), 'utf-8');
           
        }  
}
}
//function to delete
const Done = (idd) => {
    const data = readFromFile();
    const json = JSON.parse(data);
    if(idd > (json.length-1) ){
        console.log("invalid entry");
    }else{
        delete json[idd];
         
         fs.writeFileSync(config.todo_file, JSON.stringify(json), 'utf-8');
         

    }
}
//function to display list
const list =() => {
    const data = readFromFile();
    const json = JSON.parse(data);
    
    // console.log(json);
    // console.log(JSON.stringify(json));
    var c=0;
    for(i in json)
    {
        for (j in i){
     console.log(Object.values(json[i]) +" ");
        
         }
       
    }
   
}
//  export default readFromFile();
//  export default writeToFile();
//  export default readFromFile();
//  export default edit();
//  export default Done();
//  export default list();
  
 module.exports={readFromFile,writeToFile,list,Done,edit};
