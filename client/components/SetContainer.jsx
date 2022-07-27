import React, { useState, useEffect } from 'react'

const SetContainer = () => {
    
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
     fetch('localhost:3000/sets')
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
       });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  return (
    <div>SetContainer</div>
  )
}

export default SetContainer