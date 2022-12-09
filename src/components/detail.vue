<template>
    {{$route.params.id}}
  <h3>상세보기 페이지 입니다.</h3>
  <h5>{{블로그글[$route.params.id].title}}</h5>
  <p>{{블로그글[$route.params.id].content}}</p>
  <router-view></router-view>
</template>

<script>
export default {
    name : 'detail',
    props : {
        블로그글 : Array,
    }

}

</script>

<style>

</style>