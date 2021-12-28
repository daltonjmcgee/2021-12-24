<script>
  import chairFront from "../../static/meadowcroft_chair_front.png";
  import chairFrontAngle from "../../static/meadowcroft_chair_front_angle.png";
  import chairBack from "../../static/meadowcroft_chair_back.png";
  import chairBackAngle from "../../static/meadowcroft_chair_back_angle.png";
  import chairSide from "../../static/meadowcroft_chair_side.png";

  // The onLoad function waits until the component has loaded completely
  // otherwise the querySelectors won't work properly. It is used on the
  // component root div.
  function onLoad() {
    const images = Array.from(document.querySelectorAll(".images > img"));
    const thumbnails = Array.from(document.querySelectorAll(".thumbnails > img"));
    const navItems = document.querySelectorAll(".nav>*");
    function handleGallery(direction) {
      for (let image of images) {
        if (image.classList.contains("active")) {
          // Using Array.indexOf because of for...of.
          // If using for...in which would provide the index
          // there would be a bunch of other properties that
          // would be looped through that are erroneous.
          let active = images.indexOf(image);
          thumbnails[active].classList.remove("active");
          if (direction === "left") {
            active = active === 0 ? images.length - 1 : active - 1;
          } else {
            active = active === images.length - 1 ? 0 : active + 1;
          }

          image.classList.remove("active");
          images[active].classList.add("active");
          thumbnails[active].classList.add("active");

          break;
        }
      }
    }
    for (let item of navItems) {
      item.addEventListener("click", () => {
        if (item.classList.contains("left")) {
          handleGallery("left");
        } else {
          handleGallery("right");
        }
      });
    }
    for (let thumbnail of thumbnails) {
      thumbnail.addEventListener("click", () => {
        // Find active image and thumbnail
        const activeImages = document.querySelectorAll(".active");
        const index = thumbnails.indexOf(thumbnail);

        // Remove active from currently active images.
        for (let img of activeImages) {
          img.classList.remove("active");
        }

        // Add active to newly clicked images
        thumbnails[index].classList.add("active");
        images[index].classList.add("active");
      });
    }
  }
</script>

<div use:onLoad class="row gallery">
  <h2>Hi-Res Renders</h2>
  <div class="content">
    <p>
      The images below are 3D Renders created in <a href="https://www.blender.org/">Blender</a> and are pretty good approximations
      of what the chairs are going to look like, though not necessarily this wood (in the case of the render, it's a walnut-like
      wood). We can make the chairs out of any wood you want really, within reason.
    </p>
    <p>
      The only screws that will be used on this piece will be to hold the seat to the base. Everything else will be
      joined using traditional woodworking joinery, and specifically in this case mostly <a
        href="https://www.popularwoodworking.com/projects/wedged-mortise-and-tenon/">wedged mortise and tenons</a
      >
      and two <a href="https://en.wikipedia.org/wiki/Dovetail_joint">dovetails</a> to adjoin the seat back to the base. These
      joints aren't reflected in the renders for the simple fact that it would be a giant pain in the ass to do that.
    </p>
    <p>
      The reason for doing the work this way is to ensure they are heirloom quality and can be used for generations to
      come. When you use screws or dowels to hold furniture together, you run the risk of these things loosening or
      corroding over time, which ain't ideal — especially for something that isn't cheap.
    </p>
    <p>
      If you want some other angles of the chair rendered in higher quality, let me know and we can accomodate that. You
      could even position the chair as you want it in the 3D model below and send me a screenshot.
    </p>
  </div>
  <div class="images">
    <div class="nav">
      <div class="arrow left">&#8592;</div>
      <div class="arrow right">&#8594;</div>
    </div>
    <img class="active" src={chairFrontAngle} alt="3D Rendered wooden chair from the front left" />
    <img src={chairFront} alt="3D Rendered wooden chair from the front" />
    <img src={chairBackAngle} alt="3D Rendered wooden chair from the back left" />
    <img src={chairBack} alt="3D Rendered wooden chair from the back" />
    <img src={chairSide} alt="3D Rendered wooden chair from the left" />
  </div>
  <div class="thumbnails">
    <img class="active" src={chairFrontAngle} alt="3D Rendered wooden chair from the front left" />
    <img src={chairFront} alt="3D Rendered wooden chair from the front" />
    <img src={chairBackAngle} alt="3D Rendered wooden chair from the back left" />
    <img src={chairBack} alt="3D Rendered wooden chair from the back" />
    <img src={chairSide} alt="3D Rendered wooden chair from the left" />
  </div>
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
        padding: 0px 4px 3px;
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
      @media (max-width: 812px) {
        display: none;
      }
    }

    .images {
      position: relative;

      > img {
        z-index: -1;
        width: auto;
        display: none;
        max-width: 100%;
        transition: all 300ms;
        margin-inline: auto;

        @media (max-width: 812px) {
          width: 100%;
          height: auto;
        }

        &.active {
          display: block;
        }
      }
    }

    .thumbnails {
      margin-top: 0.5rem;
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;

      img {
        display: relative;
        width: 50px;
        height: auto;
        border-radius: 5px;
        transition: all 300ms;
        cursor: pointer;
        border: 2px solid transparent;

        &.active {
          border: 2px solid darkslategray;
        }

        &:hover {
          transition: all 300ms;
          border: 2px solid darkslateblue;
        }
      }
    }
  }
</style>
