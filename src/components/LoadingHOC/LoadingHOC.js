import React,{useState} from 'react';
import Loader from "react-loader-spinner";

export const LoadingHOC = (WrappedComponent) => {
  
  function HOC(props) {
      const [isLoading,setLoading] = useState(true);
      
    return (
      <>
        {isLoading && <Loader type="Oval" color="#00BFFF" height={50} width={50} className="absolute top-1/2 left-1/2" />}
        <WrappedComponent {...props} loading={isLoading} setLoading={setLoading} />
      </>
    )
  }

  return HOC;
    
}


export default LoadingHOC;
