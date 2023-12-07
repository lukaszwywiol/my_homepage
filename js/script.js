{
  const welcome = () => {
    console.log("Witaj na mojej autorskiej stronie!");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const nextColorName = document.querySelector(".js-nextColorName");
    body.classList.toggle("body--grey");
    nextColorName.innerText = body.classList.contains("body--grey")
      ? "białe"
      : "ciemne";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(
      ".changeBackgroundButton"
    );
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
