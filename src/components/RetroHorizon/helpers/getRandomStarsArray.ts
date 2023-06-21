import getRandomIntWithinLimits from "./getRandomIntWithinLimits.ts";

const getRandomStarsArray = () => {
    const arraySize = getRandomIntWithinLimits(30, 50);

    const windowWidth  = window.innerWidth;
    const windowHeight = window.innerHeight;

    const arrayOfStars = [...Array(arraySize).keys()].map((key) => ({
        key: key,
        sizeInPixels: getRandomIntWithinLimits(1, 5),
        posX: getRandomIntWithinLimits(0, windowWidth),
        posY: getRandomIntWithinLimits(0, windowHeight / 2)
    }));

    return arrayOfStars;
}

export default getRandomStarsArray;