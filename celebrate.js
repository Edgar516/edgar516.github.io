document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const hearts = [];

    function createHeart() {
        return {
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 100,
            size: Math.random() * 12 + 8,
            speed: Math.random() * 1.2 + 0.6,
            opacity: Math.random() * 0.6 + 0.4
        };
    }

    for (let i = 0; i < 35; i++) {
        hearts.push(createHeart());
    }

    function drawHeart(x, y, size, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "hotpink";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x - size, y - size, x - size * 1.4, y + size / 2, x, y + size);
        ctx.bezierCurveTo(x + size * 1.4, y + size / 2, x + size, y - size, x, y);
        ctx.fill();
        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach(h => {
            drawHeart(h.x, h.y, h.size, h.opacity);
            h.y -= h.speed;

            if (h.y < -30) {
                h.x = Math.random() * canvas.width;
                h.y = canvas.height + 30;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
});

/* music button still works */
function playMusic() {
    document.getElementById("song").play();
}
