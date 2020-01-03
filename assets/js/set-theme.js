// 切换主题功能的实现
function checkTheme() {
  theme = $.cookie("theme");
  if (theme == undefined) {
    $.cookie("theme", "white", { expires: 7, path: "/" });
  } else {
    if (theme == "black") {
      $(".mdui-color-white").addClass("mdui-color-grey-800");
      $(".mdui-color-grey-800").removeClass("mdui-color-white");
      $(".mdui-theme-accent-indigo").addClass("mdui-theme-accent-cyan")
      $(".mdui-theme-accent-cyan").removeClass("mdui-theme-accent-indigo")
      $("#theme-btn").prop("checked", true);
    } else {
      $(".mdui-color-grey-800").addClass("mdui-color-white");
      $(".mdui-color-white").removeClass("mdui-color-grey-800");
      $(".mdui-theme-accent-cyan").addClass("mdui-theme-accent-indigo")
      $(".mdui-theme-accent-indigo").removeClass("mdui-theme-accent-cyan")
      $("#theme-btn").prop("checked", false);
    }
  }
}
checkTheme()  // 立即运行一次
$("#theme-btn").on('click', function() {
  if ($(this).is(":checked")) {
    $.cookie("theme", "black", { expires: 7, path: "/" });
    checkTheme();
  } else {
    $.cookie("theme", "white", { expires: 7, path: "/" });
    checkTheme();
  }
});