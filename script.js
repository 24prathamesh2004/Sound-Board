document.addEventListener('DOMContentLoaded', () => {
    const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
    const buttonsDiv = document.getElementById('buttons');
  
    sounds.forEach(sound => {
      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.innerText = sound;
      btn.addEventListener('click', () => {
        stopSounds();
        const audio = document.getElementById(sound);
        if (audio) {
          audio.play().catch(error => {
            console.error(`Error playing ${sound}:`, error);
          });
        } else {
          console.error(`Audio element for ${sound} not found`);
        }
      });
      buttonsDiv.appendChild(btn);
    });
  
    function stopSounds() {
      sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }
  });
  