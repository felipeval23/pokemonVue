<template>
  <v-card class="mx-auto" max-width="500" flat data-app>
    <!-- ---Dialogo pokemon -->
    <v-dialog v-model="dialogo" width="500" height="700">
      <v-card>
        <div id="fondoPokemon">
          <img v-bind:src="url" class="pokemon" /><br />
        </div>
        <div id="descripcion">
          <p>
            Name :
            {{
              pokemonMostrar.charAt(0).toUpperCase() + pokemonMostrar.slice(1)
            }}
          </p>
          <p>Type : {{ type }}</p>
          <p>Height: {{ height }}</p>
          <p>Weight: {{ weight }}</p>
        </div>
        <br />
        <v-row>
          <v-col cols="2" sm="4" md="4">
            <div>
              <v-btn
                rounded
                class="btnTodos"
                color="#F22539"
                dark
                v-clipboard:copy="
                  type +
                  ' - ' +
                  pokemonMostrar +
                  ' - ' +
                  height +
                  ' - ' +
                  weight
                "
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                Share to my friends
              </v-btn>
            </div>
          </v-col>
         
        </v-row>
      </v-card>
    </v-dialog>

    <!----Lista todos -->
    <div v-if="carga">
      <v-toolbar flat>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
      <v-card max-width="600" class="mx-auto" flat>
        <v-spacer></v-spacer>
        <v-list subheader two-line v-if="todos == 1" flat :search="search">
          <v-list-item
            id="lista"
            v-for="sub in pokemons.results"
            :key="sub.name"
          >
            <v-list-item-content @click="mostrar(sub.name)">
              <v-list-item-title
                v-text="sub.name.charAt(0).toUpperCase() + sub.name.slice(1)"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon :color="colores" @click="favorito(sub.name)">
                {{ icono }}
              </v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-divider inset></v-divider>
        </v-list>
      </v-card>
      <!----Lista favoritos -->
      <v-card max-width="600" class="mx-auto" flat>
        <v-spacer></v-spacer>
        <v-list subheader two-line v-if="todos == 0" flat :search="search">
          <v-list-item id="lista" v-for="item in favoritos" :key="item">
            <v-list-item-content @click="mostrar(item)">
              <v-list-item-title
                v-text="item.charAt(0).toUpperCase() + item.slice(1)"
              ></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon :color="colores" @click="favorito(event)">
                {{ icono }}
              </v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-divider inset></v-divider>
        </v-list>
      </v-card>
      <v-row dense class="ma-5 botonesLista">
        <v-col cols="2" sm="4" md="2">
          <div class="text-center">
            <v-btn
              rounded
              class="btnTodos"
              @click="todos = 1"
              color="#F22539"
              dark
            >
              <v-icon :color="colores" @click="favorito(item)" left>
                mdi-format-list-bulleted
              </v-icon>
              All
            </v-btn>
          </div>
        </v-col>
        <v-col cols="2" sm="4" md="7">
          <div class="text-center">
            <v-btn
              rounded
              class="btnFavoritos"
              @click="todos = 0"
              color="#bfbfbf"
              dark
            >
              <v-icon :color="colores" @click="favorito(item)" left>
                mdi-star-outline
              </v-icon>
              Favorites
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="cargando" v-if="cargando">
      <v-progress-circular
        :width="4"
        size="40"
        color="red"
        indeterminate
        class="circular"
      ></v-progress-circular>
      <p class="cargandoTexto">Cargando...</p>
    </div>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      active: false,
      search: '',
      respuesta: {},
      todos: 1,
      dialogo: false,
      pokemonMostrar: '',
      height: '',
      weight: '',
      type: '',
      url: '',
      colores: 'grey lighten-1',
      icono: 'mdi-star-outline',
      favoritos: [],
      fav: 0,
      pokemonData: {},
      carga: false,
      cargando: false,
    }
  },
  methods: {
    ...mapActions({
      cargarPokemons: 'GET_POKEMONS',
    }),

    onCopy: function (a) {
      console.log(a)
      this.$toast.success('Información del Pokemon copiada !')
    },

    onError: function () {
      alert('Error al copiar datos del Pokemon')
    },

    favorito(pokemon) {
      console.log(pokemon)
      if (this.colores == 'grey lighten-1') {
        this.colores = 'grey lighten-6'
      } else {
        this.colores = 'grey lighten-1'
      }

      if (this.icono == 'mdi-star-outline') {
        this.icono = 'mdi-star'
      } else {
        this.icono = 'mdi-star-outline'
      }

      this.fav = 0
      this.posicion = 0
      if (this.favoritos.length !== 0) {
        for (let i = 0; i < this.favoritos.length; i++) {
          if (this.favoritos[i] === pokemon) {
            this.fav = 1
            this.posicion = i
          }
        }
        if (this.fav === 1) {
          this.favoritos.splice(this.posicion, 1)
        } else {
          this.favoritos.push(pokemon)
        }
      } else {
        this.favoritos.push(pokemon)
      }
    },

    async mostrar(pokemon) {
      this.dialogo = true
      this.pokemonMostrar = pokemon
      const respuesta = await this.$axios.$get(
        'https://pokeapi.co/api/v2/pokemon/' + pokemon
      )
      this.height = respuesta.height
      this.weight = respuesta.weight
      this.type = respuesta.types[0].type.name
      this.url = respuesta.sprites.front_default

      this.pokemonData = {
        name: pokemon,
        height: this.height,
        weight: this.weight,
        type: this.type,
        url: this.url,
      }
    },

    cerrar() {
      this.dialogo = false
      this.height = ''
      this.weight = ''
      this.type = ''
      this.url = ''
    },

    async cargar() {
      this.cargarPokemons()
      this.carga = true
    },

    mostrarPok() {
      this.cargando = false
      this.$nextTick(() => {
        this.cargar()
      })
    },
  },

  created: async function () {
    this.cargando = true
    setTimeout(() => this.mostrarPok(), 3000)

    const responder = await this.$axios.$get(
      'https://pokeapi.co/api/v2/pokemon'
    )
    console.log(responder)
  },

  computed: {
    ...mapGetters(['pokemons']),
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
#lista:hover {
  background: lightgray;
}

.botonesLista {
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}

.btnFavoritos {
  width: 200px;
  height: 44px;
  left: 50.87%;
  right: 25.26%;
  top: calc(50% - 44px / 2);
  background: #bfbfbf;
  border-radius: 60px;
}

.btnTodos {
  width: 200px;
  height: 44px;
  left: 25.26%;
  right: 50.87%;
  top: calc(50% - 44px / 2);
  background: #f22539;
  border-radius: 60px;
}

.cargando {
  background: url('../components/images/cargando.svg') no-repeat center;
  width: 500px;
  height: 500px;
}

.cargandoTexto {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  margin-left: 190px;
  margin-top: 50px;
}

.circular {
  margin: 1rem;
  margin-left: 230px;
  margin-top: 230px;
  color: #f22539;
}

#descripcion > p {
  width: 300px;
  height: 27px;
  margin-left: 30px;
  margin-top: 10px;
  font-family: 'lato';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  color: #5e5e5e;
}

#fondoPokemon {
  background-image: url('../components/images/fondo.svg');
  height: 200px;
}

.iconoStar {
  left: 20.45%;
  right: 20.45%;
  top: 20.45%;
  bottom: 20.45%;
}
.pokemon {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 180px;
  height: 180px;
}
</style>