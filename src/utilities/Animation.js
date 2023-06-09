export default class Animation {
  static animation = new Animation();

  FadeInScreen = (screen_name) => {
    let screen = document.getElementById(screen_name);
    if (!screen || !screen_name) return;
    screen.style.opacity = "5";
    screen.style.transform = "translateY(1px)";
  };
}
