import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    

    return(
        <>
  <h1>Opps!!</h1>
  <h2>Something Wents Wrong </h2>
  <h2>{err.status +":" + err.statusText}</h2>
  
  </>

    )
}

export default Error;