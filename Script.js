document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 2;
            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, size, size);
        }
    }

    drawStars();
    setInterval(drawStars, 1000);

    window.showForm = function(giftType) {
        document.getElementById('formSection').classList.remove('hidden');
        let description = '';
        switch(giftType) {
            case 'personal':
                description = 'Send this star personally to your loved one.';
                break;
            case 'birthday':
                description = 'A special star gift for a birthday.';
                break;
            case 'friend':
                description = 'A star gift for a special friend.';
                break;
        }
        document.getElementById('giftTypeDescription').innerText = description;
    };

    const sendSound = new Audio('send-sound.mp3'); // تأكد من وجود ملف الصوت في نفس مسار المشروع

    document.getElementById('giftForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // إعداد الرسالة وإرسالها إلى واتساب
        const phoneNumber = '07736583592'; // ضع رقم الهاتف هنا
        const message = `Star Name: ${data.starName}\nRecipient's Name: ${data.recipientName}\nAddress: ${data.address}\nPhone: ${data.phone}\nMessage: ${data.message}`;

        // إعداد رابط واتساب
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // عرض النجم الساطع وتشغيل الصوت
        showBrightStar();
        sendSound.play();

        // توجيه المستخدم لفتح واتساب
        window.open(whatsappLink, '_blank');

        alert('Your gift has been sent!');
        document.getElementById('formSection').classList.add('hidden');
        document.getElementById('giftForm').reset();
    });

    function showBrightStar() {
        const star = document.createElement('div');
        star.classList.add('bright-star');
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2000);  // النجم يختفي بعد ثانيتين
    }
});
