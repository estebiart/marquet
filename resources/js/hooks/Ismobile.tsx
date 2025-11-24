import { useState, useEffect } from "react";

export function IsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < breakpoint);

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, [breakpoint]);

    return isMobile;
}
