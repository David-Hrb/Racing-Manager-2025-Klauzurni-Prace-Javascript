import { Howl } from 'howler';
let clickSound = null;
// funkce pro přehrání zvuku dalšího kroku
export const useClickSoundNext = () => {
  //const volume = useState('settings-volume', () => 0.5);
  if (!clickSound) {
    clickSound = new Howl({
      src: ['/music/clicksound/pluck_002.ogg'],
      html5: true
    });
  }

  const play = () => {
    clickSound?.play();
  };
  return {
    play
  };
}