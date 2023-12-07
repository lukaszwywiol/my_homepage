{
  const welcome = () => {
    console.log("Witaj na mojej autorskiej stronie!");
  };

  const toggleBackground = () => {
    const body = document.documentElement;
    const nextColorName = document.querySelector(".js-nextColorName");
    body.classList.toggle("body--grey");
    nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "ciemny";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
