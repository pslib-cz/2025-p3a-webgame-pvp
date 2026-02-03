import { useState, useEffect, useRef, useCallback } from 'react';
import { Howl } from 'howler';
import type { SoundConfigType, SoundName } from '../Types/SoundType';

const SOUNDS_CONFIG: Record<string, SoundConfigType> = {
    bgMusic: {
        src: "/audio/music.mp3",
        loop: true,
        category: "music",
    },
    bgIntro: {
        src: "/audio/intro.mp3",
        loop: true,
        category: "music",
    },
    crowd: {
        src: "/audio/sfx/crowd.ogg",
        category: "sfx",
    }
};

export const useGameSounds = () => {
    const soundsRefs = useRef<Partial<Record<string, Howl>>>({});
    
    const [isMusicMuted, setIsMusicMuted] = useState<boolean>(() => localStorage.getItem('musicMuted') === 'true');
    const [isSfxMuted, setIsSfxMuted] = useState<boolean>(() => localStorage.getItem('sfxMuted') === 'true');
    const [musicVolume, setMusicVolume] = useState<number>(() => Number(localStorage.getItem('musicVolume')) || 0.3);
    const [sfxVolume, setSfxVolume] = useState<number>(() => Number(localStorage.getItem('sfxVolume')) || 0.3);

    // Synchronizace Hudby
    useEffect(() => {
        localStorage.setItem('musicMuted', isMusicMuted.toString());
        Object.keys(soundsRefs.current).forEach(key => {
            const sound = soundsRefs.current[key];
            if (sound && SOUNDS_CONFIG[key].category === 'music') {
                sound.mute(isMusicMuted);
            }
        });
    }, [isMusicMuted]);

    // Synchronizace SFX (efektů)
    useEffect(() => {
        localStorage.setItem('sfxMuted', isSfxMuted.toString());
        Object.keys(soundsRefs.current).forEach(key => {
            const sound = soundsRefs.current[key];
            // Mute aplikujeme JEN na sfx kategorii
            if (sound && SOUNDS_CONFIG[key].category === 'sfx') {
                sound.mute(isSfxMuted);
            }
        });
    }, [isSfxMuted]);

    // Cleanup při zavření aplikace (volitelné, ale doporučené)
    useEffect(() => {
        return () => {
            Object.values(soundsRefs.current).forEach(s => s?.unload());
            soundsRefs.current = {};
        };
    }, []);

    // Synchronizace hlasitosti hudby
    useEffect(() => {
        localStorage.setItem('musicVolume', musicVolume.toString());
        Object.keys(soundsRefs.current).forEach(key => {
            const sound = soundsRefs.current[key];
            if (sound && SOUNDS_CONFIG[key].category === 'music') {
                sound.volume(musicVolume);
            }
        });
    }, [musicVolume]);

    // Synchronizace hlasitosti SFX
    useEffect(() => {
        localStorage.setItem('sfxVolume', sfxVolume.toString());
        Object.keys(soundsRefs.current).forEach(key => {
            const sound = soundsRefs.current[key];
            if (sound && SOUNDS_CONFIG[key].category === 'sfx') {
                sound.volume(sfxVolume);
            }
        });
    }, [sfxVolume]);

    const getSound = useCallback((name: SoundName): Howl | null => {
        if (soundsRefs.current[name]) return soundsRefs.current[name]!;

        const config = SOUNDS_CONFIG[name];
        if (!config) return null;

        const newSound = new Howl({
            src: [config.src],
            loop: config.loop || false,
            volume: config.volume || 1.0,
            html5: config.category === 'music',
            preload: true,
            mute: config.category === 'music' ? isMusicMuted : isSfxMuted 
        });

        soundsRefs.current[name] = newSound;
        return newSound;
    }, [isMusicMuted, isSfxMuted]);


    const play = useCallback((soundName: SoundName) => {
        const sound = getSound(soundName);
        if (!sound) return;

        const config = SOUNDS_CONFIG[soundName];

        if (config.category === 'music') {
            Object.keys(soundsRefs.current).forEach((key) => {
                const currentSoundName = key as SoundName;
                if (SOUNDS_CONFIG[currentSoundName].category === 'music' && currentSoundName !== soundName) {
                    const otherSound = soundsRefs.current[currentSoundName];
                    if (otherSound) {
                        otherSound.stop();
                    }
                }
            });

            if (!sound.playing()) {
                sound.play();
            }
        } else {
            sound.play();
            console.log("Playing SFX:", soundName);
        }
    }, [getSound]);

    const stop = useCallback((soundName: SoundName) => {
        const sound = soundsRefs.current[soundName];
        if (sound) sound.stop();
    }, []);

    return {
        play,
        stop,
        isMusicMuted,
        setIsMusicMuted,
        isSfxMuted,
        setIsSfxMuted,
        musicVolume,
        setMusicVolume,
        sfxVolume,
        setSfxVolume,
    };
};