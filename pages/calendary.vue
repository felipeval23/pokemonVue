<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink><br /><br />
    <div>
      <div id="encabezado">
        <span id="titulo"><h1>COOL WEBINARS</h1></span>
      </div>
      <br />
      <div v-for="item in webinars" :key="item.title">
        <table class="tabla">
          <tr>
            <td class="vacia"></td>
            <td class="fecha">{{ item.timeZone }}</td>
            <td class="imagen1">
              <img v-bind:src="item.thumbnail" class="imagen1" />
            </td>
            <td class="titulowebinar">{{ item.title }}</td>
            <td>
              <a href v-bin:src="item.url"> <div class="boton">JOIN US</div></a>
            </td>
            <td class="vacia"></td>
          </tr>

          <tr v-for="sub in item.webinars" :key="sub.title">
            <td class="vacia"></td>
            <td class="vacia"></td>
            <td class="dates">
              <span class="horaWebinar">
                {{ traerFecha(sub.startDateTime) }}
                <br />{{ traerFecha(sub.endDateTime) }}<br />
                {{ duracion(sub.startDateTime, sub.endDateTime) }} hrs
              </span>
            </td>
            <td colspan="2" class="webinar">
              <p class="titleweb">{{ sub.title }}</p>
              <br />
              <p class="textweb">{{ sub.blurb }}</p>
              <br />
              <hr style="border: 0.600958px solid grey" />
              <span class="tspeak">Speakers:</span><br />
              <p
                class="speakers"
                v-for="(speak, index) in sub.speakers"
                :key="index"
              >
                {{ speak.name }}, {{ speak.position }} - {{ speak.company }}
              </p>
            </td>
            <td class="vacia"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      nombre: '',
      telefono: '',
      regs: [],
      titulo: '',
      respuesta: [],
      imagen: '',
      fechaIni: '',
      fechaFin: '',
      botones: [],
    }
  },
  methods: {
    ...mapActions({
      cargarWebinars: 'GET_WEBINARS',
    }),

    // traerDia(fecha){
    //   return fecha.substring(8, 11)
    // },

    traerFecha(fecha) {
      return fecha.substring(10, 16)
    },

    duracion(fechaIni, fechaFin) {
      this.horaini = parseInt(fechaIni.substring(10, 16))
      this.horafin = parseInt(fechaFin.substring(10, 16))
      return this.horafin - this.horaini
    },

    async cargar() {
      this.cargarWebinars()
    },
  },
  created: function () {
    this.cargar()
  },

  computed: {
    ...mapGetters(['webinars']),
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.horaWebinar {
  font-family: 'Montserrat', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-variant: small-caps;
  color: #000000;
}

.vacia {
  width: 120px;
  height: 120px;
  border: #000000 2px;
}

.tspeak {
  font-family: 'Montserrat', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}
.tabla {
  border-spacing: 5px;
  border-collapse: separate;
}

.textweb {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.015em;
  color: #000000;
}
.speakers {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}

.titleweb {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 21.0335px;
  line-height: 26px;
  color: #000000;
}

.webinar {
  padding: 20px;
  border-spacing: 6px;
  background: #b1deff;
  border-radius: 6.00958px;
}

.titulowebinar {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.045em;
  font-variant: small-caps;

  color: #000000;
}

.dates {
  background: #b1deff;
  border-radius: 6.00958px;
  border-spacing: 5px;
  align-content: center;
  text-align: center;
}

.imagen1 {
  width: 151px;
  height: 100px;
}

#encabezado {
  width: 1140px;
  height: 250px;
  background: black;
  text-align: center;
  align-items: center;
  top: 200px;
}

#titulo {
  width: 700px;
  height: 117px;
  color: white;
  font-family: 'Montserrat', cursive;
  font-style: normal;
  font-weight: 600;
  font-size: 76px;
  line-height: 117px;
  letter-spacing: -0.015em;
}

.boton {
  width: 100px;
  height: 40px;
  font-family: 'Montserrat', cursive;
  font-style: normal;
  font-weight: 600;
  background: #fbba00;
  text-align: center;
  border-radius: 6px;
}

.fecha {
  width: 67px;
  height: 71px;
  font-family: 'Montserrat', cursive;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 88px;
  letter-spacing: -0.045em;
  font-variant: small-caps;
  color: #fbba00;
}
</style>
