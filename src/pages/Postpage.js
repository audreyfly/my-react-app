import {useEffect,useState} from "react";
import {useParams}from "react-router-dom";
export default function Postpage(){
    const [postInfo,setPostInfo]=useState(null);
    const{id}=useParams();
context;{'userContext'};

useEffect(()=>


console.log(id),
fetch('http://localhost:3000 /post/${id}'
.then(response=> {
response.json().then(postInfo=>{
setPostInfo(postInfo);

});
}),
),[]);
return(
    <div>post page here</div>
)
}








   
    
    
    
        

              
    
            
   
    
    


    

 
    


    