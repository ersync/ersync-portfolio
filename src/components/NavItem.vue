<script  lang="ts" setup="">
import {computed} from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
interface Props {
  name: string
}

const props =  withDefaults( defineProps<Props>(),{
})

const capitalizedName = computed(()=>{
  return props.name.charAt(0).toUpperCase() + props.name.slice(1)
})
</script>

<template>
  <div class="flex justify-center items-center p-[1.1rem] rounded-full bg-white gap-2">
    <BaseIcon
      :name="name"
      color="#45505b"
    />
    <span class="text-[0.9rem]">{{ capitalizedName }}</span>
  </div>
</template>

<style scoped>

</style>
