import { Howl } from 'howler';
// Composable pro nastavení hlasitosti zvuku v aplikaci
export const useSoundSettings = () => {
    console.log("useSoundSettings loaded");
    const soundsettings = (volumenum) => {
        Howler.volume(volumenum);
    }

    return { soundsettings };
}