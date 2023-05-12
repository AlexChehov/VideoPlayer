window.addEventListener("load", () => {
  const videos = [
    { title: "Evresin what i like", src: "./videos/video-0.mp4" , quote: "+380939255920" },
    { title: "Pasta is so GOOD", src: "./videos/video-1.mp4" , quote: "+380939255921" },
    { title: "I know you want this", src: "./videos/video-2.mp4" , quote: "+380939255922" },
    { title: "Coffee is important", src: "./videos/video-3.mp4" , quote: "+380939255923" },
  ];


  let currentVideoIndex = 0;

  const videoElement = document.querySelector("#video");
  const h1 = document.querySelector("h1");

  const HH = document.querySelector("h2");

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  setVideo(currentVideoIndex);

  document.body.addEventListener("click", () => {
    videoElement.play();
  });

  function setVideo(index, delay = 0) {
    const action = () => {
      const { src, title , quote } = videos[index];
      videoElement.src = src;
      h1.textContent = title;
      HH.textContent = quote;

      videoElement.play();
    };
    delay ? setTimeout(() => action(), delay) : action();
  }

  prev.onclick = () => {
    currentVideoIndex--;

    if (videos[currentVideoIndex]) {
      setVideo(currentVideoIndex, 1000);
    } else {
      currentVideoIndex = videos.length - 1;
      setVideo(currentVideoIndex, 1000);
    }
  };

  next.onclick = () => {
    currentVideoIndex++;

    if (videos[currentVideoIndex]) {
      setVideo(currentVideoIndex, 1000);
    } else {
      currentVideoIndex = 0;
      setVideo(currentVideoIndex, 1000);
    }
  };
});
