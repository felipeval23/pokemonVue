(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{396:function(e,t,n){"use strict";n.r(t);n(16),n(10),n(17),n(21),n(14),n(22);var r=n(13),o=n(2),c=(n(68),n(24),n(85));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m,f={data:function(){return{search:"",respuesta:{},selected:[2,5],todos:1,verPokemon:!1,pokemonMostrar:"",height:"",weight:"",type:"",url:""}},methods:v(v({},Object(c.b)({cargarPokemons:"GET_POKEMONS"})),{},{favorito:function(e){console.log(e)},mostrar:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.verPokemon=!0,console.log(t.verPokemon),t.pokemonMostrar=e,n.next=5,t.$axios.$get("https://pokeapi.co/api/v2/pokemon/"+e);case 5:r=n.sent,console.log(r),console.log(r.height),console.log(r.weight),console.log(r.types[0].type.name),console.log(r.sprites.front_default),t.height=r.height,t.weight=r.weight,t.type=r.types[0].type.name,t.url=r.sprites.front_default;case 15:case"end":return n.stop()}}),n)})))()},cargar:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.cargarPokemons();case 1:case"end":return t.stop()}}),t)})))()}}),created:(m=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get("https://pokeapi.co/api/v2/pokemon");case 2:t=e.sent,console.log(t),this.cargar();case 5:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)}),computed:v({},Object(c.c)(["pokemons"]))},d=n(57),h=n(150),k=n.n(h),_=n(400),w=n(295),O=n(390),y=n(393),P=n(391),j=n(324),x=n(325),V=n(301),E=n(327),I=n(298),L=n(330),R=n(392),T=n(394),S=n(398),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[e._v("\n  "+e._s(e.pokemons.count)+"\n  "),e._v(" "),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",flat:""}},[n("v-toolbar",{attrs:{flat:""}},[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),1==e.todos?n("v-list",{attrs:{"two-line":""}},[n("v-list-item-group",{attrs:{search:e.search,"active-class":"pink--text",multiple:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._l(e.pokemons.results,(function(sub,t){return[n("v-list-item",{key:sub.name,scopedSlots:e._u([{key:"default",fn:function(t){var r=t.active;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(sub.name)},on:{click:function(t){return e.mostrar(sub.name)}}})],1),e._v(" "),n("v-list-item-action",[r?n("v-icon",{attrs:{color:"yellow darken-3"}},[e._v(" mdi-star ")]):n("v-icon",{attrs:{color:"grey lighten-1"},on:{dblclick:function(t){return e.favorito(sub.name)}}},[e._v("\n                  mdi-star-outline\n                ")])],1)]}}],null,!0)}),e._v(" "),t<sub.length-1?n("v-divider",{key:t}):e._e()]}))],2)],1):e._e(),e._v(" "),n("v-card",[n("v-row",[n("v-col",[n("v-btn",{on:{click:function(t){e.todos=1}}},[e._v("ALLS")])],1),e._v(" "),n("v-col",[n("v-btn",{on:{click:function(t){e.todos=0}}},[e._v("FAVORITES")])],1)],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:e.verPokemon,callback:function(t){e.verPokemon=t},expression:"verPokemon"}},[n("v-card",[e._v("\n    NAME : "+e._s(e.pokemonMostrar)),n("br"),e._v("\n    HEIGHT: "+e._s(e.height)),n("br"),e._v("\n    WEIGHT: "+e._s(e.weight)),n("br"),e._v("\n    TYPE : "+e._s(e.type)+" "),n("img",{attrs:{src:e.url}}),n("br"),n("br"),e._v(" "),n("v-btn",{on:{click:function(t){e.verPokemon=!1}}},[e._v("close")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{VBtn:_.a,VCard:w.a,VCol:O.a,VDialog:y.a,VDivider:P.a,VIcon:j.a,VList:x.a,VListItem:V.a,VListItemAction:E.a,VListItemContent:I.a,VListItemGroup:L.a,VListItemTitle:I.b,VRow:R.a,VTextField:T.a,VToolbar:S.a})}}]);