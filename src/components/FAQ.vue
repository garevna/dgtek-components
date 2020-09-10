<template>
  <v-container class="homefone mx-auto my-12 px-0 py-12">
    <v-card flat class="transparent mx-auto" max-width="980">
      <v-card-title>
        <h2>{{ faq.header }}</h2>
      </v-card-title>
      <v-card-text>
        <v-expansion-panels
              v-model="panel"
              accordion
              focusable
              flat
              hover
              tile
        >
          <v-expansion-panel
              v-for="(item, index) in faq.items"
              :key="index"
          >
            <v-expansion-panel-header height="64">
              <h5 class="my-0">{{ item.question }}</h5>
              <template v-slot:actions>
                <v-icon color="#444">$expand</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="answer" v-html="item.answer.split('\n').join('</br>')">
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>

.v-card__title, h1, h4, h3, p {
  word-break: normal!important;
}

h2 {
  width: 100%;
  color: #000;
  text-align: center;
}
h4 {
  margin: 0;
}

.answer {
  padding: 10px 20px;
}

.v-card__text {
  font-family: 'Gilroy' !important;
  font-style: normal;
  font-weight: normal;
  font-size: 18px !important;
  line-height: 180% !important;
  text-align: justify;
  color: #2D2D2D !important;

}

@media screen and (max-width: 600px) {
  h2 { margin-left: 20px; }
  h5 { max-width: 80%; }
  .v-card__text {
    font-size: 14px !important;
  }
}

@media screen and (max-width: 320px) {
  h2 {
    max-width: 280px;
  }
  h5 {
    font-size: 13px;
    max-width: 280px;
    line-height: 32px;
  }
  .v-card__text {
    font-size: 12px!important;
  }
}
</style>

<script>

import { VContainer, VCard, VCardTitle, VCardText, VExpansionPanels, VExpansionPanel, VExpansionPanelHeader, VExpansionPanelContent } from 'vuetify/lib'

export default {
  name: 'FAQ',
  components: {
    VContainer,
    VCard,
    VCardTitle,
    VCardText,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent
  },
  data: function () {
    return {
      panel: null,
      faq: []
    }
  },
  beforeMount () {
    this.faq = JSON.parse(sessionStorage.getItem('faq'))
  }
}
</script>
