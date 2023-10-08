import postData from "./postdata";

export default function Api() {
  let apiUrl = 'http://localhost:3000'; // Replace with your app's URL

  return (
    <>
      <button onClick={(event) => {
        event.preventDefault();

        const dataToSend = {
          message: "your api works",
        };

        // Make a POST request using postData function
        postData(apiUrl + "/api/hello", dataToSend)
          .then((response) => {
            console.log('Response:', response);
            if (response.message) {
              console.log('Message:', response.message);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }}>Send data</button>
    </>
  );
}
