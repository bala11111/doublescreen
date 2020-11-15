const FETCH_URL = "FETCH_URL";

export function fetchLink(urlLink){
    return(dispatch) => {
        const url = urlLink;
        fetch(url)
         .then((response)=> response.json()
         )
          .then((data)=>{
              console.log('data',data.success);
          })
    }
}