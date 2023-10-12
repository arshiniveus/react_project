import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Followers () {
    // const [ data, setData ] = useState([]);
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })


    // }, [])
    const data = useLoaderData()

    return (
        <div className='bg-black m-4  p-4 font-semibold text-white text-center'>Followers:{data.followers}
        </div>
    )
}
export const gitloader = async () => {
    const res = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return res.json();
}

export default Followers

