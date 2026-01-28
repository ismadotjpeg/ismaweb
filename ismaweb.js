window.addEventListener("load", () => {
            const loader = document.querySelector(".loader");
            
            loader.classList.add("loader--hidden");

            loader.addEventListener("transitionend",() => {
                document.body.removeChild(loader);
            });
        });
        function Guitar(){
            var sound = document.getElementById('guitaraudio');
            sound.play();
        }
        /*test vite fait*/
        function playlavid(){
            var video = document.getElementById('promokesha');
            video.play();
        }