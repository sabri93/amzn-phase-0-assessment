// 1. Write your functions here


function takeANumber(array,name){     // this function is adding custumors to the line
    
  array.push(name)
  
  console.log("Welcome, " + name + ". You are number " + (array.indexOf(name)+1) + " " + "in line") 

}



function line(array){      //this function is showing the content of the line(array)
  if(array.length === 0){
    
    return "The line is currently empty."
  }

   else{
    
    let p = ""
  
    for(let i =0; i<array.length;i++){
    p+= (i+1) + "." + array[i]+ " "
    
  
  }return  `the line is currently: ${p}`  
 

  }  
    
 
}   




function nowServing(array){     //This function is returning the first customer then remove it from the line
  
  for (let i = 0; i<array.length; i++){
   const custumor = array.shift()      
          
    console.log(`currently serving ${custumor}`)     
  }        
      
  if (array.length === 0){
  
    console.log("There is nobody waiting to be served")      
  }       
        
          
}
    









// 2. Example Usage

 //const katzDeli= []

//(takeANumber(katzDeli, "Ada"))//=> Welcome, Ada. You are number 1 in line.
//(takeANumber(katzDeli, "Grace")) //=> Welcome, Grace. You are number 2 in line.
//(takeANumber(katzDeli, "Kent")) //=> Welcome, Kent. You are number 3 in line.
 
//(line(katzDeli)) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

//(nowServing(katzDeli))//=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"