let color = "red";
let check = false;
const arr = ["pink","orange","red"];



console.log(arr.forEach(item => item==="red"));





  console.log("tempfilterarray"+tempFilterArray)  Red,orange,pink
        console.log("filterlist"+filterList) Red
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    
