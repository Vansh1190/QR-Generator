import { useState } from "react";

export default function Home(props){
    function displayError (){
        setError(
          
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Input field cannot be empty</strong> 
              <button type="button" onClick={()=>setError(["DDDD"])} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         
           </div>
    
        )
      }
      // const history = useNavigate();
      const [error,setError] = useState([]);
      const [QrImgLink] = useState([])
    return(
        <>
           <div style={{position:"fixed" , top:"0"}} id="error">
        {error}
      </div>
    <div className="Center">

      <div style={{display:"flex", flexFlow:"column"}}>
      <h1>Generate QR </h1>
      <small style={{fontWeight: "650",color: "#67b587"}}>Generate a QR code in seconds for your business, event, or personal use.</small>  </div>
      <input autoComplete="off" type="text" id="link" placeholder="Drop you link here." />
      
      
      <button className="Generate" onClick={()=>{
          let c = document.getElementById("link").value 
          if(c === ""){
              displayError()
              return

            }
            
            setTimeout(async() => {
                window.location.href = ("https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=" + c)
                // history("/GenerateQr/" + c);
          
        }, 500);
      }}>
        <span>
          Generate
        </span>
      </button>

    </div>
    {QrImgLink  }
    <code id="mr">
		<small>MADE WITH 💖 BY Vansh</small> <br/>
<small>All Rights Reserved © <a style={{color: "blue"}} href="https://mrnaveenwoodoworks.w3spaces.com/"> Vansh</a> </small>

</code>

</>
    )
}