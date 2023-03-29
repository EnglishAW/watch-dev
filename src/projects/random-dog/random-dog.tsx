import React, { useEffect,  useState } from 'react';
import {ReactComponent as RefreshIcon} from 'assets/icons/refresh-icon.svg';
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
    const [isImageCover, setIsImageCover] = useState(true)
    const [imgSrc, setImgSrc] = useState("")
    const [breedName, setBreedName] = useState("")
    const [clickDelayTimer, setClickDelayTimer] = useState<string | number | NodeJS.Timeout>(0)
    
    // const [isLoading, setIsLoading] = useState(true)


    const getRandomDogPic = () => {
        
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setImgSrc(data.message)
            const regex = /(breeds\/)(.*)(\/)/;
            const match = data.message.match(regex);
            // console.log(match)
            const breedString = capitalizeWords(match[2].replace('-', ' '))

            setBreedName(breedString)
            
        })
        .catch(error => {
            console.error(error)
        });
    }

    useEffect(() => {
        getRandomDogPic()
    },[])

    const showMetaClassName = showMetaTag ? "" : "hidden"
    const imageSizeClassName = isImageCover ? "image-cover" : "image-fit"
    // const imageLoadingClassName = isLoading ? "image-loading" : ""

    const onClickImage = (event: any) => {
        if(event.detail == 2){
			console.log("Double Clicked")
            clearTimeout(clickDelayTimer)
            setIsImageCover((currState) => !currState)
            return
		}

        const timer = setTimeout(()=> {
            setShowMetaTag((currState) => !currState)
        },300)
        setClickDelayTimer(timer)
    }

  return (
    <div className="layout">
        <img className={`${imageSizeClassName}`} src={imgSrc} alt={breedName} onClick={onClickImage} />
        <div className={`meta-tag ${showMetaClassName}`}>
            <h1>{breedName}</h1>
            <RefreshIcon fill="white" width="30px" height="30px" onClick={getRandomDogPic}/>
        </div>
        
    </div>
  );
}

export default RandomDogProject;
