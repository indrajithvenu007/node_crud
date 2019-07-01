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
            id: Math.ceil(Math.random()*10),
            text: text
        });
    } else {
        const json = JSON.parse(data);
        const newId = Math.ceil(Math.random()*10);
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
   
    for(i in json){
        
        const val =Object.values(json[i]);
        const val1=val[0];
        const val2=val[1];
        // console.log(val);
         
      
      var newjson = json.filter(function(id1) {
        return id1.id!=idd;
      });
      
         
}
console.log(newjson);

fs.writeFileSync(config.todo_file, JSON.stringify(newjson), 'utf-8');
}
    
//function to display list
const list =() => {
    const data = readFromFile();
    let json = JSON.parse(data);
    
    // console.log(json);
    // console.log(JSON.stringify(json));
    var c=0;
    for(i in json)
    {
        if(json[i]!= null){
     console.log(Object.values(json[i]) +" ");
        }
        else{
            console.log("null value");
        }
        
        //  }
       
    }
   
}
//  export default readFromFile();
//  export default writeToFile();
//  export default readFromFile();
//  export default edit();
//  export default Done();
//  export default list();
  
 module.exports={readFromFile,writeToFile,list,Done,edit};
