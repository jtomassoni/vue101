<template>
  <div :key="task.id" v-for="task in tasks">
    <!-- <h3>{{ task.text }}</h3> -->
    <TaskNew
      @toggle-reminder="$emit('toggle-reminder',task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task" />
  </div>
  
</template>

<script>
import TaskNew from './Task.vue'

export default {
  name: 'TasksNew',
  props: {
    tasks: Array
  },
  components: {
    TaskNew
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>
