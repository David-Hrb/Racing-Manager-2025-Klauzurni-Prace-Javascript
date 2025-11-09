import { Howl } from 'howler';
let clickSound = null;
export const useClickSound = () => {
  if (!clickSound) {
    clickSound = new Howl({
      src: ['/music/clicksound/select_007.ogg'],
      volume: 0.5,
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