import React, { useEffect,  useState } from 'react';
// import {ReactComponent as RefreshIcon} from 'assets/icons/refresh-icon.svg';
import './random-dog.css'

const capitalizeWords = (string: string) => {
    const words = string.split(' ');
    const capitalizedWords = words.map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}

function RandomDogProject() {

    const [showMetaTag, setShowMetaTag] = useState(true)
    const [imgSrc, setImgSrc] = useState("")
    const [breedName, setBreedName] = useState("")

    const getRandomDogPic = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setImgSrc(data.message)
            const regex = /(?<=breeds\/)(.*)(?=\/)/g;
            const match = data.message.match(regex);
            // console.log(match)
            const breedString = capitalizeWords(match[0].replace('-', ' '))

            setBreedName(breedString)
        })
        .catch(error => console.error(error));
    }

    useEffect(() => {
        getRandomDogPic()
    },[])

    const showMetaClassName = showMetaTag ? "" : "hidden"

    const onClickImage = () => {
        setShowMetaTag((currState) => !currState)
    }
  return (
    <div className="layout">
        <img src={imgSrc} alt={breedName} onClick={onClickImage}/>
        <div className={`meta-tag ${showMetaClassName}`}>
            <h1>{breedName}</h1>
            {/* <RefreshIcon fill="white" width="30px" height="30px" onClick={getRandomDogPic}/> */}
        </div>
        
    </div>
  );
}

export default RandomDogProject;
