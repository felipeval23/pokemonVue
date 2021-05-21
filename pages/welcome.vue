<template>
  <v-card>
    <div class="solucion">
      <NuxtLink to="/"><h1>Home page</h1></NuxtLink><br />
    </div>
    <div class="main"><PicachuWelcome /></div>
    <p class="mainText">Welcome to Pokédex</p>
    <p class="subText">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <div class="pokedexButton">
      <NuxtLink to="/pokedex"><h1 style="color:white;">Get started</h1></NuxtLink>
    </div>
    <br /><br />
  </v-card>
</template>
<script>
import PicachuWelcome from '@/components/PicachuWelcome'
export default {
  components: {
    PicachuWelcome,
  },
}
</script>
<style>
.main {
  position: absolute;
  width: 325px;
  height: 288px;
  left: 414px;
  top: 30px;
  border: 0px;
}

.mainText {
  position: absolute;
  width: 570px;
  height: 31px;
  left: 460px;
  top: 380px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #353535;
}

.pokedexButton {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 20px;
  position: absolute;
  width: 131px;
  height: 44px;
  left: 511px;
  top: 530px;
  background: #f22539;
  border-radius: 60px;
}
.solucion {
  padding: 10px;
  width: 150px;
  height: 40px;
  font-family: 'Montserrat', cursive;
  font-style: normal;
  font-weight: 600;
  background: #fbba00;
  text-align: center;
  border-radius: 6px;
}

.subText {
  position: absolute;
  width: 570px;
  height: 54px;
  left: 291px;
  top: 430px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #5e5e5e;
}
</style>
