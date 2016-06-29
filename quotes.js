window.onload = function() {
    displayQuote();
};

var lastQuote;

function selectQuote() {
    var num = quotes.length - 1;
    var quoteIndex = Math.floor(Math.random() * (num - 0 + 1)) + 0;

    return quoteIndex;
};

function displayQuote() {
    var quoteIndex = selectQuote();
    if(quoteIndex == lastQuote) {
        quoteIndex = selectQuote();
    };
    var selectedQuote = quotes[quoteIndex];

    $("#quote").text('"' + selectedQuote.quote + '"' );
    $("#author").text("- " + selectedQuote.author);

    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + '"' + selectedQuote.quote + " - " + selectedQuote.author);

    lastQuote = quoteIndex;

    generateRGB();

    console.log(quoteIndex);

};

// A better way to pick colors would be to have an array of colors to choose from
// This would ensure that the font is always readable on the background.
function generateRGB() {
    var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

    var color = "rgb("+r+","+g+","+b+")";

    $("body").css("background-color", color);
    $("#quote").css("color", color);
    $("#author").css("color", color);
    $("#newQuote").css("background-color", color);
    $("i").css("color", color);
};



var quotes = [
    { 
        quote: "I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.", 
        author: "Elayne Boosler" 
    },
    { 
        quote: "Always borrow money from a pessimist. He won't expect it back.", 
        author: "Oscar Wilde" 
    },
    {
        quote: "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.",
        author: "Mark Russell"
    },
    {
        quote: "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.",
        author: "Robert Bloch"
    },
    {
        quote: "First the doctor told me the good news: I was going to have a disease named after me.",
        author: "Steve Martin"
    },
    {
        quote: "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.",
        author: "Lana Turner",
    },
    {
        quote: "My therapist told me the way to achieve true inner peace is to finish what I start. So far I've finished two bags of M&Ms and a chocolate cake. I feel better already.",
        author: "Dave Barry"
    },
    {
        quote: "Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",
        author: "Miles Kington"
    },
    {
        quote: "I love deadlines. I like the whooshing sound they make as they fly by.",
        author: "Douglas Adams"
    },
    {
        quote: "By all means, marry. If you get a good wife, you'll become happy; if you get a bad one, you'll become a philosopher.",
        author: "Socrates"
    },
    {
        quote: "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.",
        author: "Emo Philips"
    }
];


