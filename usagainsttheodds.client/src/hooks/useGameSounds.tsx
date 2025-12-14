import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import type { SoundConfigType, SoundName } from '../Types/SoundType';




const SOUNDS_CONFIG: Record<string, SoundConfigType> = {
    //hudba
    bgMusic: {
        src: "/audio/Circus-Theme-Entry-of-the-Gladiators.mp3",
        loop: true,
        volume: 0.3,
        category: "music",
    },

    //sfx
    chop: {
        src: "/audio/chop.ogg",
        category: "sfx",
    }
};


export const useGameSounds = () => {
    const soundsRefs = useRef<Partial<Record<string, Howl>>>({})

    const [isMusicMuted, setIsMusicMuted] = useState<boolean>(false);
    const [isSfxMuted, setIsSfxMuted] = useState<boolean>(false);


    //inicializace zvuku
    useEffect(() => {

        Object.keys(SOUNDS_CONFIG).forEach((key) => {
            const config = SOUNDS_CONFIG[key];
            soundsRefs.current[key] = new Howl({
                src: [config.src],
                loop: config.loop || false,
                volume: config.volume || 1.0,
            });
        });

        return () => {
            Object.values(soundsRefs.current).forEach((sound) => {
                if (sound) sound.unload();
            });
        }
    }, []);


    //všechny music zvuky mute/unmute
    useEffect(() => {
        Object.keys(soundsRefs.current).forEach((key) => {
            const config = SOUNDS_CONFIG[key];
            if (config.category === 'music') {
                const sound = soundsRefs.current[key];
                if (sound) sound.mute(isMusicMuted);
            }
    });
    }, [isMusicMuted]);


    //všechny sfx zvuky mute/unmute
    useEffect(() => {
        Object.keys(soundsRefs.current).forEach((key) => {
            const config = SOUNDS_CONFIG[key];
            if (config.category === 'sfx') {
                const sound = soundsRefs.current[key];
                if (sound) sound.mute(isSfxMuted);
            }
    });
    }, [isSfxMuted]);


    //funkce pro přehrání zvuku
    const play = (soundName: SoundName) => {
        const sound = soundsRefs.current[soundName];
        const config = SOUNDS_CONFIG[soundName];


        //jessti existuje
        if (!sound || !config)  return;


        //zkontrola mute stavu podle kategorie
        const shouldBeMuted = (config.category === 'music' && isMusicMuted) ||
                                (config.category === 'sfx' && isSfxMuted);

        sound.mute(shouldBeMuted);


        //sfx se přehraje vždy, music jen pokud ještě nehraje aby se nepřekrývala
        if (config.category === 'music' && !sound.playing()) {
            sound.play();
        } else if (config.category === 'sfx') {
            sound.play();
        }
    };

    const stop = (soundName: SoundName) => {
        const sound = soundsRefs.current[soundName];
        if (sound) sound.stop();
    };


    //vrácení funkcí  pro použití
    return {
        play,
        stop,
        isMusicMuted,
        setIsMusicMuted,
        isSfxMuted,
        setIsSfxMuted,
    };
};