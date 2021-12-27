<script>
  import chairFront from "../../static/meadowcroft_chair_front.png";
  import chairFrontAngle from "../../static/meadowcroft_chair_front_angle.png";
  import chairBack from "../../static/meadowcroft_chair_back.png";
  import chairBackAngle from "../../static/meadowcroft_chair_back_angle.png";
  import chairSide from "../../static/meadowcroft_chair_side.png";

  // This function waits until the component has loaded completely
  // otherwise the querySelectors wouldn't work properly.
  function onLoad() {
    function handleGallery(direction) {
      const images = Array.from(document.querySelectorAll("img"));
      for (let image of images) {
        if (image.classList.contains("active")) {
          // Using Array.indexOf because of for...of.
          // If using for...in which would provide the index
          // there would be a bunch of other properties that
          // would be looped through that are erroneous.
          let active = images.indexOf(image);
          if (direction === "left") {
            active = active === 0 ? images.length - 1 : active - 1;
          } else {
            active = active === images.length - 1 ? 0 : active + 1;
          }
          image.classList.remove("active");
          images[active].classList.add("active");
          break;
        }
      }
    }
    const navItems = document.querySelectorAll(".nav>*");
    for (let item of navItems) {
      item.addEventListener("click", () => {
        if (item.classList.contains("left")) {
          handleGallery("left");
        } else {
          handleGallery("right");
        }
      });
    }
  }
</script>

<div use:onLoad class="sub-row gallery">
  <div class="nav">
    <div class="arrow left">&#8592;</div>
    <div class="arrow right">&#8594;</div>
  </div>
  <h2>Hi-Res Renders</h2>
  <img
    class="active"
    src={chairFrontAngle}
    alt="3D Rendered wooden chair from the front left"
  />
  <img src={chairFront} alt="3D Rendered wooden chair from the front" />
  <img src={chairBackAngle} alt="3D Rendered wooden chair from the back left" />
  <img src={chairBack} alt="3D Rendered wooden chair from the back" />
  <img src={chairSide} alt="3D Rendered wooden chair from the left" />
</div>

<style lang="scss">
  .gallery {
    position: relative;
    height: 100%;

    .nav {
      > * {
        position: absolute;
        top: calc(50% + 12px);
        transform: translateY(-50%);
        font-size: 2rem;
        cursor: pointer;
        transition: all 300ms;
        color: darkslategrey;
        border: 2px solid darkslategrey;
        border-radius: 50%;
        padding: 1px 4px;
        user-select: none;

        &:hover {
          transform: translateY(-50%) scale(1.15);
        }

        &:active {
          color: darkslateblue;
          border-color: darkslateblue;
        }

        &.left {
          left: 1rem;

          &:active {
            transform: translateY(-50%) scale(1.15) translateX(-5px);
          }
        }

        &.right {
          right: 2rem;

          &:active {
            transform: translateY(-50%) scale(1.15) translateX(5px);
          }
        }
      }
    }

    img {
      z-index: -1;
      display: none;
      width: 100%;
      height: auto;
      margin: 0;

      &.active {
        display: block;
      }
    }
  }
</style>
