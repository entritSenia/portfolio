<script>

</script>

<template>
  <div class="normal-screen">
    <nav>
      <!-- <div class="logo">
      <img src="img/logo.png" alt="" />
    </div>
    <div class="mini-logo">
      <img src="img/mini_logo.png" alt="" />
    </div> -->
      <ul>
        <li>
          <RouterLink to="/"><i class="fa fa-home"></i></RouterLink>
          <RouterLink to="/"><em>Home</em></RouterLink>
        </li>
        <li>
          <RouterLink to="/resume"><i class="fa fa-image"></i></RouterLink>
          <RouterLink to="/resume"><em>Resume</em></RouterLink>
        </li>
        <!-- <li>
        <RouterLink to="/about"><i class="fa fa-user"></i></RouterLink>
        <RouterLink to="/about"><em>About</em></RouterLink>
      </li> -->
        <li>
          <RouterLink to="/skills"><i class="fa fa-pencil"></i></RouterLink>
          <RouterLink to="/skills"><em>Skills</em></RouterLink>
        </li>
        <li>
          <RouterLink to="/projects"><i class="fa fa-pencil"></i></RouterLink>
          <RouterLink to="/projects"><em>Projects</em></RouterLink>
        </li>
      </ul>
    </nav>
  </div>

  <!-- small screen -->
  <div class="menu-container">
    <input type="checkbox" id="openmenu" class="hamburger-checkbox" />

    <div class="hamburger-icon">
      <label for="openmenu" id="hamburger-label">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="menu-pane">
      <nav>
        <ul class="menu-links">
          <li>
            <RouterLink to="/"><i class="fa fa-home"></i></RouterLink>
            <RouterLink to="/"><em>Home</em></RouterLink>
          </li>
          <li>
            <RouterLink to="/resume"><i class="fa fa-image"></i></RouterLink>
            <RouterLink to="/resume"><em>Resume</em></RouterLink>
          </li>
          <!-- <li>
        <RouterLink to="/about"><i class="fa fa-user"></i></RouterLink>
        <RouterLink to="/about"><em>About</em></RouterLink>
      </li> -->
          <li>
            <RouterLink to="/skills"><i class="fa fa-pencil"></i></RouterLink>
            <RouterLink to="/skills"><em>Skills</em></RouterLink>
          </li>
          <li>
            <RouterLink to="/projects"><i class="fa fa-pencil"></i></RouterLink>
            <RouterLink to="/projects"><em>Projects</em></RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
