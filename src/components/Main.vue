<template>
  <div id="mainSection">
    <div class="userName">
      <p>N.Hayashi</p>
    </div>
    <div class="companyName">
      <p>Seattleconsulting</p>
    </div>

    <img
      class="profilePicture"
      src="../assets/IMG_9975.png"
      alt="プロフィール写真"
    >
  </div>
</template>

<script>
</script>

<style scope>
  #mainSection {
    width: 100%;
    height: 250px;
    display: block;
    background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  }

  .userName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px #808080;
  }

  .companyName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px #808080;
  }

  .profilePicture {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
</style>
