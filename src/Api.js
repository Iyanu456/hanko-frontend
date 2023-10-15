import postData from "./postdata";

export default function Api() {
  // Adjust the apiUrl to point to the specific API route
  let apiUrl = 'https://llama-gpt.vercel.app/api/hello'; // Replace with your app's URL and the correct path

  return (
    <>
      <button onClick={(event) => {
        event.preventDefault();

        const dataToSend = {
          message: "your API works",
        };

        // Make a POST request using postData function
        postData(apiUrl, dataToSend) // Use the updated apiUrl
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
