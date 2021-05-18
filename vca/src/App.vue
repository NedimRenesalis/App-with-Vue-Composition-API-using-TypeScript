<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import Character from './interfaces/Character'
import CharacterService from './services/CharacterService'

export default createComponent({
  setup () {
    const characterService = new CharacterService()
    const characters = ref<Character[]>([])

    const fetchData = async (): Promise<void> => {
      characters.value = await characterService.FetchCharacters()
    }
    fetchData()
    return {
      characters
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
