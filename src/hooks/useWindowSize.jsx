import { useEffect, useState } from 'react'

export const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const onResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", () => onResize() );

        return () => {
            window.removeEventListener("resize", () => () => onResize());
        };
    }, [])

    return [ width, height ] 
}
