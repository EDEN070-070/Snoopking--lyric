const lyricsData = [
    { time: 0, text: "(intro)" },
    { time: 23, text: "Snoop...." },
    { time: 29, text: "ตะวันส่องแสงอ่อนลงซะเดียวดาย ภาพนิมิตในใจก็เริ่มตาย" },
    { time: 36, text: "เพียงหลับตาเพื่อฝันใหม่ เธอไม่ใช่ขวัญใจ" },
    { time: 39, text: "ก็ไม่ได้ทำให้ฉันตาย จะหลับตาเพื่อฝันใหม่... โอ้" },
    { time: 43, text: "ตั้งแต่อ้ายจากบ้านมา" },
    { time: 45, text: "กลิ่นลมหนาวของบ้านมามันพาคิดถึงในทันตา" },
    { time: 48, text: "จะหลับตาเพื่อวันใหม่ เธอไม่ใช่ขวัญใจ" },
    { time: 51, text: "ก็ไม่ได้ทำให้ฉันตาย จะหลับตาเพื่อวันใหม่...โอ้" },
    { time: 54, text: "เดินทางเข้ากรุงเทพฯตามคำกล่าว" },
    { time: 56, text: "จากแม่สายขึ้นรถบัส ยัดเสื้อผ้าใส่ลังเปล่า" },
    { time: 60, text: "เมื่อเห็นเหงื่อไหลลงพื้น ร่วงลงดินที่ผมยืน" },
    { time: 63, text: "กลับห้องไปเขียนเพลงก็ยังมีข้าวให้ผมกลืน" },
    { time: 67, text: "นั่งขัดรองเท้าเก่ากับซักเสื้อที่มีคราบเปื้อน" },
    { time: 70, text: "อัดเพลงเข้ายันเช้าเพราะกลัวฝันมันคลาดเคลื่อน" },
    { time: 73, text: "เวลาผมเคลื่อนที่ คุณฟังผมแต่วิวไม่เคลื่อนที่" },
    { time: 76, text: "ไม่มีใครปลอบใจ แต่ได้โปรดน้องจงเชื่อพี่ yeah..." },
    { time: 78, text: "แต่ก่อนนี้ก็เราอยู่ด้วยกัน ตอนเธอเหงาเธอชอบฟังเพลงฉัน" },
    { time: 84, text: "เกลียดวันที่ไม่มีเธอทั้งวัน" },
    { time: 87, text: "ปิดเพลงผมไปถ้ามันไม่สำคัญ (แค่ไม่รู้จะก้าว....)" },
    { time: 91, text: "แม้หลับตาลงในวันที่อยากจะฝันใหม่ ใจไม่รู้ว่าหล่นอยู่ตรงไหน" },
    { time: 96, text: "ไม่มีเธอมันก็ยังไม่เห็นตาย" },
    { time: 99, text: "แกล้งหลับตาจนไม่รู้ว่าไปทางไหน..." },
    { time: 102, text: "ตะวันส่องแสงอ่อนลงซะเดียวดาย" },
    { time: 105, text: "ภาพนิมิตในใจก็เริ่มตาย" },
    { time: 108, text: "เพียงหลับตาเพื่อฝันใหม่ เธอไม่ใช่ขวัญใจ" },
    { time: 112, text: "ก็ไม่ได้ทำให้ฉันตาย จะหลับตาเพื่อฝันใหม่... โอ้" },
    { time: 116, text: "ตั้งแต่อ้ายจากบ้านมา" },
    { time: 118, text: "กลิ่นลมหนาวของบ้านมามันพาคิดถึงในทันตา" },
    { time: 121, text: "จะหลับตาเพื่อวันใหม่ เธอไม่ใช่ขวัญใจ" },
    { time: 124, text: "ก็ไม่ได้ทำให้ฉันตาย จะหลับตาเพื่อวันใหม่...โอ้" },
    { time: 129, text: "จากบ้านนอกบ้านนา ฤดูหนาวที่เข้ามา มันพาคิดถึงในทันตา" },
    { time: 135, text: "ดอกไม้ที่ผลิบาน ลำธารที่ไหลผ่าน" },
    { time: 138, text: "แอ่วเล่นโฮงเฮียนเก่า" },
    { time: 141, text: "ความหลังที่มันไม่ดิบไม่ดี บางคนก็คิดไม่ดี" },
    { time: 144, text: "บางวันก็ทำไม่ดี" },
    { time: 147, text: "มีกัญชาเป็นเพื่อนใจ ยังดีกว่ามีเธอแล้วเสียใจ..." },
    { time: 151, text: "ตะวันส่องแสงอ่อนลงซะเดียวดาย ภาพนิมิตในใจก็เริ่มตาย" },
    { time: 157, text: "เพียงหลับตาเพื่อฝันใหม่ เธอไม่ใช่ขวัญใจ" },
    { time: 159, text: "ก็ไม่ได้ทำให้ฉันตาย จะหลับตาเพื่อฝันใหม่... โอ้" },
    { time: 165, text: "ตั้งแผ่อ้ายจากบ้านมา" },
    { time: 167, text: "กลิ่นลมหนาวของบ้านมามันพาคิดถึงในทันตา" },
    { time: 170, text: "จะหลับตาเพื่อวันใหม่ เธอไม่ใช่ขวัญใจ" },
    { time: 172, text: "ก็ไม่ได้ทำให้ฉันตาย จะหลับตาเพื่อวันใหม่...โอ้" },
    { time: 177, text: "ตั้งแผ่อ้ายจากบ้านมา" },
    { time: 178, text: "กลิ่นลมหนาวของบ้านมามันพาคิดถึงในทันตา" },
    { time: 183, text: "จะหลับตาเพื่อวันใหม่ ถึงไม่มีเเธอเป็นขวัญใจ" },
    { time: 186, text: "ก็ไม่ได้ทำให้ฉันตาย...." },
    { time: 189, text: "(outro)" }
];

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const lyricsContainer = document.getElementById('lyrics-container');

// State
let isPlaying = false;

// Initialize Lyrics
function initLyrics() {
    lyricsContainer.innerHTML = '';
    lyricsData.forEach((line, index) => {
        const div = document.createElement('div');
        div.classList.add('lyric-line');
        div.textContent = line.text;
        div.dataset.index = index;
        div.dataset.time = line.time;

        // Allow clicking a line to seek
        div.addEventListener('click', () => {
            audioPlayer.currentTime = line.time;
            audioPlayer.play();
            updatePlayState(true);
        });

        lyricsContainer.appendChild(div);
    });
}

const repeatBtn = document.getElementById('repeat-btn');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

// Ensure volume slider matches default audio volume
volumeSlider.value = audioPlayer.volume;
let lastVolume = 1;

// Volume Control (Slider)
volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
    audioPlayer.muted = false; // Unmute if sliding
    updateVolumeIcon();
});

// Mute Toggle (Click Icon)
volumeIcon.addEventListener('click', () => {
    if (audioPlayer.muted || audioPlayer.volume === 0) {
        // Unmute
        audioPlayer.muted = false;
        audioPlayer.volume = lastVolume || 1;
        volumeSlider.value = audioPlayer.volume;
    } else {
        // Mute
        lastVolume = audioPlayer.volume;
        audioPlayer.muted = true;
        volumeSlider.value = 0;
    }
    updateVolumeIcon();
});

// Mouse Wheel Control
volumeSlider.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.05 : -0.05; // Up = louder, Down = quieter
    let newVolume = parseFloat(audioPlayer.volume) + delta;
    newVolume = Math.min(Math.max(newVolume, 0), 1); // Clamp between 0 and 1

    audioPlayer.volume = newVolume;
    volumeSlider.value = newVolume;
    audioPlayer.muted = false;
    updateVolumeIcon();
});

function updateVolumeIcon() {
    if (audioPlayer.muted || audioPlayer.volume === 0) {
        volumeIcon.style.opacity = '0.4'; // Dim icon when muted
    } else {
        volumeIcon.style.opacity = '1';
    }
}

const currentTimeEl = document.getElementById('current-time');
const durationTimeEl = document.getElementById('duration-time');

let isRepeat = false;

// Format Time (seconds -> mm:ss)
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Controls
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        updatePlayState(true);
    } else {
        audioPlayer.pause();
        updatePlayState(false);
    }
});

repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    if (isRepeat) {
        repeatBtn.classList.add('active');
    } else {
        repeatBtn.classList.remove('active');
    }
});

function updatePlayState(playing) {
    isPlaying = playing;
    const icon = playPauseBtn.querySelector('svg');
    const vinylRecord = document.getElementById('vinyl-record');
    const rippleContainer = document.querySelector('.ripple-container');

    if (playing) {
        // Pause icon
        icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        if (vinylRecord) vinylRecord.classList.add('playing');
        if (rippleContainer) rippleContainer.classList.add('playing');
    } else {
        // Play icon
        icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
        if (vinylRecord) vinylRecord.classList.remove('playing');
        if (rippleContainer) rippleContainer.classList.remove('playing');
    }
}

// Sync Logic
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;

    // Update Time Display
    currentTimeEl.textContent = formatTime(currentTime);
    if (audioPlayer.duration) {
        durationTimeEl.textContent = formatTime(audioPlayer.duration);
    }

    // Update Progress Bar
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        const pct = (currentTime / audioPlayer.duration) * 100;
        progressBar.value = pct;
        // Update background gradient for fill effect if needed, but standard input range handles basic visual.
        // For clearer fill visual:
        progressBar.style.background = `linear-gradient(to right, #fff ${pct}%, rgba(255,255,255,0.3) ${pct}%)`;
    }

    // Find Active Lyric
    // We want the last lyric that has a time <= currentTime
    let activeIndex = -1;
    for (let i = 0; i < lyricsData.length; i++) {
        if (lyricsData[i].time <= currentTime) {
            activeIndex = i;
        } else {
            break;
        }
    }

    updateActiveLyric(activeIndex);
});

// Loaded Metadata (for Duration)
audioPlayer.addEventListener('loadedmetadata', () => {
    durationTimeEl.textContent = formatTime(audioPlayer.duration);
});

// Song Ended Logic
audioPlayer.addEventListener('ended', () => {
    if (isRepeat) {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
        updatePlayState(true);
    } else {
        updatePlayState(false);
    }
});


// Progress Bar Seek
progressBar.addEventListener('input', (e) => {
    const pct = e.target.value;
    if (audioPlayer.duration) {
        const seekTime = (pct / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
        currentTimeEl.textContent = formatTime(seekTime); // Instant update
    }
});

// --- Lyrics Scroll Handling ---
let isUserScrolling = false;
let scrollTimeout;

function handleUserScroll() {
    isUserScrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
    }, 3000); // Resume auto-scroll after 3 seconds of inactivity
}

// Detect manual scrolling (Mouse wheel or Touch)
lyricsContainer.addEventListener('wheel', handleUserScroll);
lyricsContainer.addEventListener('touchmove', handleUserScroll);

function updateActiveLyric(index) {
    // Remove active class from all
    const lines = document.querySelectorAll('.lyric-line');
    lines.forEach(line => line.classList.remove('active'));

    if (index !== -1 && lines[index]) {
        const activeLine = lines[index];
        activeLine.classList.add('active');

        // Only scroll if user isn't manually scrolling
        if (!isUserScrolling) {
            const containerHeight = lyricsContainer.clientHeight;
            const lineHeight = activeLine.clientHeight;
            const offset = activeLine.offsetTop;

            lyricsContainer.scrollTo({
                top: offset - (containerHeight / 2) + (lineHeight / 2),
                behavior: 'smooth'
            });
        }
    }
}

// Initial Setup
initLyrics();

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Check if the user is typing in an input field (unlikely in this app, but good practice)
    if (e.target.tagName === 'INPUT') return;

    if (e.code === 'Space' || e.key.toLowerCase() === 'f') {
        e.preventDefault(); // Prevent scrolling for spacebar
        // Trigger click on play/pause button to reuse logic
        playPauseBtn.click();
    }
});

// --- Audio Visualizer (Simulated for file:// compatibility) ---
// Note: Real Web Audio API mutes sound on local files due to CORS. 
// We use a simulation that looks very close to the real thing.
const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas.getContext('2d');
let isVisualizerRunning = false;

// Configuration
const barCount = 64; // Number of bars
const bars = []; // Store current heights

// Initialize bars
for (let i = 0; i < barCount; i++) {
    bars.push(Math.random() * 50);
}

function initVisualizer() {
    // Resize canvas
    function resizeCanvas() {
        // Set actual canvas size to match display size for sharp rendering
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial call

    renderFrame();
}

function renderFrame() {
    requestAnimationFrame(renderFrame);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bufferLength = barCount;
    // Calculate bar width based on canvas width
    const barWidth = (canvas.width / bufferLength);
    let x = 0;

    // Center Line
    const centerY = canvas.height / 2;

    // Beat Simulation (Removed - using CSS animation now)

    let totalEnergy = 0;

    for (let i = 0; i < bufferLength; i++) {
        // Update bar height
        if (!audioPlayer.paused) {
            // If playing, move bars randomly but smoothly
            const noise = Math.random() * 50;
            const target = noise; // Standard visualizer

            // Easing (Original smooth speed)
            bars[i] += (target - bars[i]) * 0.1;
        } else {
            // If paused, drop to near zero
            bars[i] += (5 - bars[i]) * 0.1;
        }

        const barHeight = bars[i];
        totalEnergy += barHeight;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; // Faint white

        // Draw bar centered vertically
        ctx.fillRect(x, centerY - barHeight / 2, barWidth - 1, barHeight);

        x += barWidth;
    }
    // Background update logic removed as it is now CSS-driven


}

// Start simulation on load (it will idle until play)
initVisualizer();
