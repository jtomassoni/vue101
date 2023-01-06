<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <ButtonNew
    v-show="homePage"
    @btn-click="$emit('toggle-add-task')"
    :text="showAddTask ? 'Close' : 'Add Task'"
    :color="showAddTask ? 'red' : 'green'" />
</template>

<script>
import ButtonNew from './Button.vue'

export default {
  name: 'HeaderNew',
  props: {
    title: {
      type: String,
      //Will appear if nothing is passed
      //when HeaderNew is called in App.vue
      default: 'Hello World'
    },
    showAddTask: Boolean
  },
  components: {
    ButtonNew
  },
  computed: {
    homePage() {
      if(this.$route.path === '/'){
        return true
      } else {
        return false
      }
    }
  },
  emits: ['toggle-add-task']
  }
</script>


<style scope>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>