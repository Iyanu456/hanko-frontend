import { useEffect, useMemo, useState } from "react";
import { register, Hanko } from "@teamhanko/hanko-elements";
import postData from "../postdata";

const hankoApi = `https://bd2d97b7-584f-4d05-8207-8442e86f8911.hanko.io`;

export default function HankoAuth() {
  
  const [onAuthFlowCompleted, setOnAuthFlowCompleted] = useState(false);
  const apiUrl = 'https://llama-gpt.vercel.app/api/hello';
  const devUrl = 'http:localhost:3000/api/hello'
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  useEffect(() => {
    if (onAuthFlowCompleted) {

      // Retrieve the JWT from the cookie
      const hankoCookie = document.cookie;
      const hankoToken = hankoCookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith("hanko="));

      const jwt = hankoToken ? hankoToken.split('=')[1] : null;

      // Make the API call
      const data = {
        jwt: jwt,
      };

      postData(devUrl, data)
        .then((response) => {
          console.log('Response:', response);
          if (response.message) {
            console.log('Message:', response.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [onAuthFlowCompleted, apiUrl]);

  useEffect(() => {
    hanko.onAuthFlowCompleted(() => {
      setOnAuthFlowCompleted(true);
    });

    register(hankoApi).catch((error) => {
      // Handle error
    });
  }, [hanko, apiUrl]);

  return <hanko-auth />;
}
