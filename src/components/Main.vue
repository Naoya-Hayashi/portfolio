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
  height: 420px;
  display: block;
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  padding-top: 40px;
}

.userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 2px 2px #808080;
  text-align: center;
  border-bottom: 1px solid white;
  width: 400px;
  margin: 0 auto;
  padding-bottom: 15px;
}

.companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 2px 2px #808080;
  padding: 20px;
}

.profilePicture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

* {
  margin: 0;
}
</style>
