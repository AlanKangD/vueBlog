<template>
  <div v-for="(a,i) in 블로그글" :key="i">
    <h4 @click="$router.push('/detail/'+i)">{{블로그글[i].title}}</h4>
    <p>{{블로그글[i].content}}</p>
    <p>{{블로그글[i].date}}</p>
  </div>
  
</template>

<script>
export default {
    name : 'list',
    data()  {
        return {

        }
    },
    props : {
        블로그글 : Array,
    }
}
</script>

<style>

</style>