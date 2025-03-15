const funnyCorrections = [
    "I still use Internet Explorer.",
    "I thought WiFi was a vegetable.",
    "I once lost a fight to a door.",
    "I Google 'how to boil water' daily.",
    "I type 'lol' but never laugh in real life.",
    "I tried to charge my phone in the microwave.",
    "I clapped when my phone turned on.",
    "I use dark mode because my future is bright.",
    "I once searched for 'Google' on Google.",
    "I thought PDF stood for 'Pretty Damn Fast.'",
    "I put my phone in rice, but it still can't cook.",
    "I lost an argument with Siri.",
    "I thought 'Ctrl + Z' worked in real life.",
    "I once tried to exit a Zoom call by closing my laptop.",
    "I waved back at a mannequin once.",
    "I tried to swipe up on a printed photo.",
    "I microwaved ice to make hot ice cubes.",
    "I thought Bluetooth was a dental disease.",
    "I once believed my pet goldfish would learn tricks.",
    "I set an alarm for a nap and still slept for 8 hours.",
    "I mistook a glue stick for chapstick.",
    "I thought WiFi signals could be washed like clothes.",
    "I Googled 'how to Google things' once.",
    "I installed 10 ad blockers but still get ads.",
    "I tried to copy-paste on paper.",
    "I use my phone flashlight to find my phone.",
    "I thought Elon Musk invented electricity.",
    "I once watched an entire YouTube ad because I didn't know I could skip it.",
    "I waved at someone waving at someone behind me.",
    "I use 'password' as my password.",
    "I thought HTML was a disease.",
    "I once tried to click on a hyperlink in a book.",
    "I tried to screenshot my dreams by blinking twice.",
    "I thought Mount Everest was man-made.",
    "I put the TV remote in the fridge.",
    "I argued with my GPS and still got lost.",
    "I mistook my AirPods case for dental floss.",
    "I asked my mom for her password to unlock the fridge.",
    "I set my phone brightness to 100% to see in the dark.",
    "I tried to text my calculator once.",
    "I thought headphones needed WiFi.",
    "I once said 'thank you' to a vending machine.",
    "I tried to charge my phone with a potato.",
    "I believed 'Ctrl + Alt + Del' would fix my life.",
    "I thought the moon had WiFi.",
    "I tried to take a selfie with a laptop.",
    "I thought USB stood for 'U See Bro.'",
    "I lost a game of chess to myself.",
    "I thought Antarctica was fake.",
    "I whispered into my mic thinking my teacher wouldn't hear me.",
    "I once ordered food online and forgot to hit 'Place Order.'",
    "I wear glasses but still squint at my phone.",
    "I believed closing my eyes made me invisible.",
    "I thought auto-correct had feelings.",
    "I read an entire page in a book and forgot everything.",
    "I once put sugar in my spaghetti thinking it was salt.",
    "I tried to vacuum my phone screen.",
    "I attempted to charge my AirPods with a straw.",
    "I thought Bluetooth worked under water.",
    "I use my phone calculator for 2+2.",
    "I once took a screenshot of an empty gallery.",
    "I tried to close a window by blowing at it.",
    "I turned my phone on airplane mode and expected it to fly.",
    "I thought pizza was a vegetable because of tomatoes.",
    "I once searched 'where am I?' on Google Maps.",
    "I kept pressing the elevator button thinking it would come faster.",
    "I lost a bet against myself and still paid up.",
    "I wrote 'hehe' in a text but didn't actually laugh.",
    "I once forgot how to spell 'cat' under pressure.",
    "I put milk in the pantry and cereal in the fridge.",
    "I yelled at my phone when it froze.",
    "I thought dinosaurs were still alive but just hiding.",
    "I tried to charge my phone with a banana.",
    "I tried to zoom in on a printed photo.",
    "I thought 5G was a boyband.",
    "I once argued with an online chatbot.",
    "I bought an expensive notebook and still used my phone for notes.",
    "I thought the Titanic was just a movie.",
    "I mistook a crayon for a snack.",
    "I thought black holes were just plot devices in movies.",
    "I put my headphones on backward and wondered why the music was weird.",
    "I thought an avocado was an exotic apple.",
    "I mistook an onion for an apple and took a big bite.",
    "I tried to click on a car’s touchscreen thinking it was a Tesla.",
    "I thought clouds were made of cotton candy as a kid.",
    "I use a calculator to confirm simple math answers.",
    "I tried to plug in my charger with my eyes closed.",
    "I thought ‘Ctrl + S’ saved my life progress.",
    "I mistook a glue stick for lip balm and used it.",
    "I thought the 'S' in GPS stood for 'Speed.'",
    "I tried to talk to my TV remote as if it was Alexa.",
    "I tried to change the font size on a book.",
    "I thought the brain was a muscle I could exercise.",
    "I used voice command on my microwave.",
    "I once accidentally brushed my teeth with soap.",
    "I thought ‘Ctrl + P’ could print money.",
    "I tried to swipe on a newspaper like a tablet.",
    "I held my breath while passing by a graveyard because someone dared me to.",
    "I tried to tap my phone screen while wearing gloves.",
    "I tried to fix my WiFi by shaking my router.",
    "I once thought my reflection was another person.",
    "I use the front camera just to check if I look weird.",
    "I once spent 30 minutes looking for my glasses while I was wearing them.",
    "I mistook a car’s headlight for the moon.",
    "I still don't understand the stock market, but I pretend I do.",
    "I mistook an iPad for a dinner tray.",
    "I once tripped on my own shoelaces while wearing slip-ons.",
    "I still believe my school calculator is smarter than me."
];

function lieAutocorrect() {
    let userInput = document.getElementById("userInput").value;
    let outputText = document.getElementById("outputText");

    if (userInput.trim() === "") {
        outputText.textContent = "";
        outputText.style.opacity = "0";
        return;
    }

    let randomLie = funnyCorrections[Math.floor(Math.random() * funnyCorrections.length)];
    
    outputText.textContent = randomLie;
    outputText.style.opacity = "1";
    outputText.style.transform = "scale(1)";
    
    outputText.classList.add("shake");
    
    setTimeout(() => {
        outputText.classList.remove("shake");
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container').classList.add('loaded');
});
