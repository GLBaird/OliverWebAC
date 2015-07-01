
$("button#clickMe").click(function(e) {
    e.preventDefault();

    alert("I have been clicked");

    $("p#results")
        .css("border", "1px solid red")
        .css("background", "yellow")
        .css("padding", "1em")
        .html("Hi there from <b>JQUERY</b>!");
});

/*

javascript equivalent

document.getElementById("clickMe").addEventListener("click", handleClick);

function handleClick(e) {
    if (!e) {
        e = window.event;
    }
    e.preventDefault();

    alert("I have been clicked");

    var para = document.getElementById("results");
    para.style.border = "1px solid red";
    para.style.background = "yellow";
    para.style.padding = "1em";
    para.innerHTML = "Hi there from <b>JS</b>!";
}
*/