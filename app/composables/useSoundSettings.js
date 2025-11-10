import { Howl } from 'howler';
export const useSoundSettings = () => {
    const soundsettings = (volumenum) => {
        Howler.volume(volumenum);
    }

    return { soundsettings };
}