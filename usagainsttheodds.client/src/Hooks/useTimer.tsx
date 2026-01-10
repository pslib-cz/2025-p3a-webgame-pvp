import { useState, useEffect, useRef } from 'react';

const useTimer = (initialMs: number, onExpiration?: () => void) => {
    const [msLeft, setMsLeft] = useState(initialMs);
    const [isActive, setIsActive] = useState(false);
    const milliseconds: number = Math.floor((msLeft % 1000) / 100)
    const seconds: number = Math.floor((msLeft % 60000) / 1000)
    const minutes: number = Math.floor((msLeft / 60000));
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`

    const endTimeRef = useRef<number | null>(null)

    

    const start = () => {
        endTimeRef.current = Date.now() + msLeft
        setIsActive(true)
    }

    const pause = () => {
        endTimeRef.current = null
        setIsActive(false)
    }

    const reset = () => {
        setIsActive(false)
        setMsLeft(initialMs)
    }

    const addTime = (msToAdd: number) => {
        if (isActive && endTimeRef.current) {
            endTimeRef.current += msToAdd;
            
            setMsLeft(endTimeRef.current - Date.now());
        } else {
            setMsLeft(prev => prev + msToAdd);
        }
    };

    const removeTime = (msToRemove: number) => {
        if (isActive && endTimeRef.current) {
            const newEndTime = endTimeRef.current - msToRemove;
            const now = Date.now();

            if (newEndTime <= now) {
                setMsLeft(0);
                endTimeRef.current = null;
                setIsActive(false)
                onExpiration?.()
            } else {
                endTimeRef.current = newEndTime;
                setMsLeft(newEndTime - now);
            }
        } else {
            setMsLeft(prev => Math.max(0, prev - msToRemove));
        }
    };


    useEffect(() => {
        let interval: number

        if (isActive && endTimeRef.current) {
            interval = window.setInterval(() => {
                const now = Date.now();
                const remainingMs = endTimeRef.current! - now;
                
                if (remainingMs <= 0) {
                    setMsLeft(0);
                    endTimeRef.current = null
                    setIsActive(false);
                    onExpiration?.()
                    window.clearInterval(interval);
                } else {
                    setMsLeft(remainingMs);
                }
            }, 100);
        }
        
        return () => window.clearInterval(interval)

    }, [isActive]);


    return { 
        msLeft,
        minutes,
        seconds,
        formattedTime,
        start, 
        pause,
        reset,
        addTime,
        removeTime,
    };
};

export default useTimer