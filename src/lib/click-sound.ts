const SOUND_SRC = "/button-click-sound.wav";

let sourceAudio: HTMLAudioElement | null = null;

function getSourceAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!sourceAudio) {
    sourceAudio = new Audio(SOUND_SRC);
    sourceAudio.preload = "auto";
    sourceAudio.volume = 0.55;
  }
  return sourceAudio;
}

export function playButtonClickSound() {
  const source = getSourceAudio();
  if (!source) return;

  const sound = source.cloneNode(true) as HTMLAudioElement;
  sound.volume = source.volume;
  void sound.play().catch(() => {
    // Autoplay can be blocked before a user gesture; ignore.
  });
}

const CLICK_CONTROL_SELECTOR = [
  "button",
  "[role='button']",
  "input[type='button']",
  "input[type='submit']",
  "input[type='reset']",
  "a[data-click-sound]",
].join(",");

export function isClickSoundControl(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const control = target.closest(CLICK_CONTROL_SELECTOR);
  if (!control) return false;
  if (control instanceof HTMLButtonElement || control instanceof HTMLInputElement) {
    return !control.disabled;
  }
  return true;
}
