<template>
  <div>
    <h1>Nom de l'Aventure : {{ ventureStore.venture.name }}</h1>
    <button @click="changeName">Changer le Nom</button>
  </div>
</template>

<script>
import { useVentureStore } from "@/store/ventureStore";

export default {
  setup() {
    const ventureStore = useVentureStore();

    const changeName = () => {
      ventureStore.setName("Nouvelle Aventure");
    };

    return { ventureStore, changeName };
  },
};
</script>
