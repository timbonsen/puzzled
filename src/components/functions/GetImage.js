import https from "../../http-common";
import {useEffect, useState} from "react";
import PuzzleCard from "../puzzleDisplay/PuzzleCard";
import LargePuzzleCard from "../puzzleDisplay/LargePuzzleCard";

function GetImage({ puzzle, format }) {
    console.log(puzzle.im)
    const [image, setImage] = useState({
        data: {
            data: null
        }
    });
    const [response, setResponse] = useState(
        <></>
    );

    async function fetchImage() {
        try {
            const result = await https.get(`/users/puzzles/image/${puzzle.image.id}`,{
                responseType: "blob"
            });
            console.log(result);
            setImage(result);
        } catch (e) {
            console.error(e);
        }
    }

    function determineResponse() {
        if (format === "large") {
            return <LargePuzzleCard input={puzzle} image={image}/>
        } else if (format === "small") {
            return <PuzzleCard input={puzzle} image={image}/>
        }
    }

    useEffect(fetchImage, [])
    useEffect(() => {
        setResponse(
            determineResponse()
        )
    }, [image]);

    return response;
}

export default GetImage;