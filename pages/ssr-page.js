import React, { useEffect } from "react";
import fetch from 'isomorphic-unfetch';

const SSRpage = ( props ) => {
    console.log(props);
    useEffect(() => {
        console.log(window.location);
    }, []);

    return(
        <div>
        </div>
    );
}

SSRpage.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars : json.stargazer_count}
}

export default SSRpage;