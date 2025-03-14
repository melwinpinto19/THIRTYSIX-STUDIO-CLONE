const canvasImages: string[] = [];

["A", "B", "C", "D", "E", "F", "G"].forEach((each) => {
  canvasImages.push(
    ...new Array(150)
      .fill("")
      .map(
        (_, i) => `https://thirtysixstudio.com/peppers/pepper${each}/${i}.png`
      )
  );
});

export { canvasImages };
