function Send(data , type) {
    

    async function SendData(data , type) {
      console.log("here at " + type)
      const res = await fetch("http://localhost:9000/data/" + type , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: data,
          test: "this is test message",
        }),
      });
      res.json().then((info) => {
        console.log(info);
      });
    }
    
    console.log(type)
    SendData(data , type);
  }
  
  export default Send;
  