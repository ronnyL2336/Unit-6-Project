$(".ttl-img").show();



$(".start-button").click(function() {
	$(".ttl-img").hide();
	$(".start-button").hide();
    $(".title").hide();
    $(".message-1").text("Welcome to your world! Your objective is to defeat The Ender Dragon. You have all the armor and weapons you need.");
    $(".message-2").text("Click on The End Portal to enter 'The End' dimension.");
    $(".portal").slideDown();
});

$(".portal").click(function() {
    $(".look").show();
    $(".portal").hide();
    $("body").css("background-image", "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/End_Stone_background_BE2.png/revision/latest/scale-to-width-down/1920?cb=20210820070054')");
    $("body").css("color", "#6E388C");
    $(".message-1").text("You are now in The End dimension. However, the Dragon isn't in sight.");
    $(".message-2").text("Click on Steve to look for the Ender Dragon.");
});


$(".look").click(function() {
    $(".look").hide();
    $(".dragon").slideDown();
    $(".crystal").slideDown();
    $(".message-1").text("AHHHH! There it is! And it looks angry! Before you even attack it, you need to destroy the End Crystal that is shielding it.");
    $(".message-2").text("Double click on the end crystal to destroy it.");
});


$(".crystal").dblclick(function() {
    $(".crystal").slideUp();
    $(".dragon").css("height","500px");
    $(".message-1").text("The End Crystal is destroyed! Now its your choice how to defeat the Ender Dragon.");
    $(".message-2").text("Now choose if you would like to go in with a sword or shoot with a bow and arrow");
    $(".sword").show();
    $(".bow").show();
    $(".sword1").css("height","100px");
    $(".bow1").css("height","100px");
});

$(".sword").click(function() {
    $(".dragon").hide();
    $(".sword").hide();
    $(".bow").hide();
    $(".game-over").show();
    $(".message-1").text("PopcodeUser was slain by The Ender Dragon for getting too close.");
    $(".message-2").text("Better Luck Next time!");
});


$(".bow").click(function() {
    $(".dragon").hide();
    $(".sword").hide();
    $(".bow").hide();
    $(".win").show();
    $(".message-1").text("You Defeated the Ender Dragon! It's raining XP!!");
    $(".message-2").text("Congrats and thx for playing!");
});


