export type SoundConfigType = {
    src: string;
    loop?: boolean;
    volume?: number;
    category: 'music' | 'sfx';
}
export type SoundName = 'bgMusic' | 'chop';