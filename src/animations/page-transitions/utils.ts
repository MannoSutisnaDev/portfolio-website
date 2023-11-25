const basePageTransition = async (
  currentPageElement: HTMLElement,
  newPageElement: HTMLElement,
  genrateAnimations: (duration: number, scale: number) => Promise<Animation>[]
) => {
  const pageRect = currentPageElement.getBoundingClientRect();
  const scale =
    pageRect.width > pageRect.height
      ? pageRect.width / 100
      : pageRect.height / 100;
  const duration = 1200;

  await Promise.all([
    new Promise<void>((resolve) =>
      setTimeout(() => {
        currentPageElement.classList.remove("visible");
        newPageElement.classList.add("visible");
        resolve();
      }, duration / 2)
    ),
    ...genrateAnimations(duration, scale),
  ]);
};

export const diagonalSplitPageTransition = async (
  currentPageElement: HTMLElement,
  newPageElement: HTMLElement,
  transitionElement: HTMLElement,
  transitionElement2: HTMLElement
): Promise<void> => {
  await basePageTransition(
    currentPageElement,
    newPageElement,
    (duration: number, scale: number) => {
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

      return [
        transitionElement.animate(animationSteps, animationOptions).finished,
        transitionElement2.animate(animationSteps, animationOptions).finished,
      ];
    }
  );
};

export const verticalSplitPageTransition = async (
  currentPageElement: HTMLElement,
  newPageElement: HTMLElement,
  transitionElement: HTMLElement,
  transitionElement2: HTMLElement
) => {
  await basePageTransition(
    currentPageElement,
    newPageElement,
    (duration: number, scale: number) => {
      const animationSteps = [
        {
          transform: "scaleX(0)",
          easing: "ease",
        },
        {
          transform: `scaleX(${scale})`,
          easing: "ease",
        },
        {
          transform: "scaleX(0)",
          easing: "ease",
        },
      ];

      const animationOptions = {
        duration,
      };

      return [
        transitionElement.animate(animationSteps, animationOptions).finished,
        transitionElement2.animate(animationSteps, animationOptions).finished,
      ];
    }
  );
};

export const horizontalSplitPageTransition = async (
  currentPageElement: HTMLElement,
  newPageElement: HTMLElement,
  transitionElement: HTMLElement,
  transitionElement2: HTMLElement
) => {
  await basePageTransition(
    currentPageElement,
    newPageElement,
    (duration: number, scale: number) => {
      const animationSteps = [
        {
          transform: "scaleY(0)",
          easing: "ease",
        },
        {
          transform: `scaleY(${scale})`,
          easing: "ease",
        },
        {
          transform: "scaleY(0)",
          easing: "ease",
        },
      ];

      const animationOptions = {
        duration,
      };

      return [
        transitionElement.animate(animationSteps, animationOptions).finished,
        transitionElement2.animate(animationSteps, animationOptions).finished,
      ];
    }
  );
};
