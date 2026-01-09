const text = `
I want to start by saying I’m really sorry. I know you’re upset, and I understand why. I realize I didn’t take the time to ask about your phone, and in doing so, I made it seem like I didn’t care about something important to you. That was never my intention. I care about every little detail in your life, even the things that might seem small, because they matter to you, and that makes them matter to me.

I want you to know that my love for you isn’t just in words—it’s in every thought I have of you, in every moment I think about making you smile, in every hope I have for our future together. When I didn’t ask about your phone, I wasn’t ignoring you or dismissing you; I simply failed to express my interest the way I should have. I love learning about every part of your life, the things you love, the things you care about. Because it’s a part of your world, your little universe, and being part of your universe means everything to me.

You mean more to me than I can ever fully express. Sometimes I get caught up in my own thoughts, my own distractions, and I forget to pause and check in with the most important person in my life—you. I never want you to feel neglected or unloved, because nothing could be further from the truth. Your happiness, your feelings, your little joys and frustrations—they all matter to me in ways I can’t always put into words, but I promise I’m feeling them, I’m thinking about them, and I’m learning how to be better for you every single day.

I love you not just for the big things, but for the small things too—the way you say chisom, the little quirks that make you unique, the way you laugh, the funny faces you make when doing a selfie. Even when I make mistakes, even when I fail to notice something as simple as your phone, my heart is always with you. I want to listen, to ask, to share, to be present, because you are important to me.

Please know that my love for you is endless, and my desire to make you feel cherished, valued, and safe is constant. I’m sorry for the hurt I caused, for making you feel like I wasn’t paying attention. That was never my intention. I promise to do better, to ask, to listen, and to care about every little thing that matters to you, because everything that matters to you matters to me.


You are my Love 
The one I call The Paragon of Beauty
An Epitome of Perfection 
The Beauty that transcends mortal bounds
My Dazzling Princess
My Gorgeous Queen

I love you more than words can fully capture, and I never want a moment to pass where you feel anything less than loved, adored, and deeply cared for. 



`;

let index = 0;
const speed = window.innerWidth < 480 ? 40 : 25;
const typingElement = document.getElementById("typing-text");

function scrollToBottom() {
    // Scroll the text container to show latest text
    typingElement.scrollTop = typingElement.scrollHeight;
    
    // Also check if we need to scroll the whole page
    const elementBottom = typingElement.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    // If text container is near the bottom of the viewport, scroll page
    if (elementBottom > windowHeight - 100) {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }
}

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        
        // Scroll to show the latest typed text
        scrollToBottom();
        
        setTimeout(typeText, speed);
    }
}

// Start typing when page loads
window.addEventListener('load', typeText);

// Adjust scrolling on window resize
window.addEventListener('resize', function() {
    if (index > 0) {
        scrollToBottom();
    }
});