$("input:radio[name=theme]").click(function() {
    changeTheme($(this).val());
});

$(".panel-tab").click(function(){
  $(".container").toggleClass("push");
});

function changeTheme(value){
  $(".color").css({ color: value });
  $(".dynamic_bg").css({ background: value });
}