import Loader from "react-loader-spinner";
import React from 'react'

const Spinner = () => {
    return (
        <div>
            <Loader
            type="Watch"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
      </div>
    )
}

export default Spinner
