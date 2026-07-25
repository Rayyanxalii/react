import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    
    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, [])

    return (
        <div className='text-center h-screen w-screen text-white text-3xl bg-gray-800 flex items-center justify-center'>
            Github Followers: {data ? data.followers : 'Loading...'}
            <img src={data ? data.avatar_url : ''} alt="Github Avatar" width="300" />
        </div>
    )
}

export default Github

export const githubInfoLoader = () => {
    return fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response) => response.json())
}
