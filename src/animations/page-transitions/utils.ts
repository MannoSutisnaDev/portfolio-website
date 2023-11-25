export const diagonalClosePageTransition = async (
  currentPageElement: HTMLElement,
  newPageElement: HTMLElement,
  transitionElement: HTMLElement,
  transitionElement2: HTMLElement
) => {
  const pageRect = currentPageElement.getBoundingClientRect();
  const scale =
    pageRect.width > pageRect.height
      ? pageRect.width / 100
      : pageRect.height / 100;

  const duration = 1200;
  const animationSteps = [
    {
      transform: "rotate(45deg) scale(0)",
      easing: "ease",
    },
    {
      transform: `rotate(45deg) scale(${scale})`,
      easing: "ease",
    },
    {
      transform: "rotate(45deg) scale(0)",
      easing: "ease",
    },
  ];

  const animationOptions = {
    duration,
  };

  await Promise.all([
    new Promise<void>((resolve) =>
      setTimeout(() => {
        currentPageElement.classList.remove("visible");
        newPageElement.classList.add("visible");
        resolve();
      }, duration / 2)
    ),
    transitionElement.animate(animationSteps, animationOptions).finished,
    transitionElement2.animate(animationSteps, animationOptions).finished,
  ]);
};
