<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : ''}}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:<strong>{{ phoneNumber }}</strong></strong></li>
      <li><strong>Email:<strong>{{ emailAddress }}</strong></strong></li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
/*   props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavourite'
  ], */
/*   props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavourite: String
  }, */
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['toggle-favourite', 'delete'],
/*   emits: {
    'toggle-favourite': function(id) {
      if(id) {
        return true;
      } else {
        console.warn('Id si missing!')
        return false
      }
    }
    }, */
  data() {
    return {
      detailsAreVisible: false,
    }
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.id);
    },

  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
