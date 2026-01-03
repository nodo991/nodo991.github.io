document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Snowfall Logic (თავიდან გაჩერებულია) ---
    const snowContainer = document.getElementById('snow-container');
    const snowSymbol = '•'; 
    let snowInterval = null; // ეს ცვლადი აკონტროლებს თოვას

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = snowSymbol;
        
        snowflake.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 10 + 5;
        snowflake.style.fontSize = size + 'px'; 
        snowflake.style.opacity = Math.random() * 0.4 + 0.1; 
        
        const duration = Math.random() * 10 + 5; 
        snowflake.style.animationDuration = duration + 's';

        if(size < 8) {
            snowflake.style.filter = 'blur(1px)';
        }

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }

    // --- 2. Key Press "Easter Egg" ---
    document.addEventListener('keydown', (event) => {
        // ვამოწმებთ, დააჭირა თუ არა მომხმარებელმა "S" ღილაკს (დიდს ან პატარას)
        if (event.key === 's' || event.key === 'S') {
            
            if (snowInterval) {
                // თუ უკვე თოვს -> გავაჩეროთ
                clearInterval(snowInterval);
                snowInterval = null;
                console.log("Snow stopped"); // კონსოლში რომ დაინახო
            } else {
                // თუ არ თოვს -> დავიწყოთ
                snowInterval = setInterval(createSnowflake, 100);
                console.log("Let it snow!"); // კონსოლში რომ დაინახო
            }
        }
    });


    // --- 3. Accordion Logic (უცვლელი) ---
    const triggers = document.querySelectorAll('.message.analysis');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.toggle('active');
            const wrapper = trigger.closest('.content-wrapper');
            const panel = wrapper.querySelector('.analysis-panel');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});