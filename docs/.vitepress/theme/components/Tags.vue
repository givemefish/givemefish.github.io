<template>
    <a v-for="(_ , tag) in tags" href="#tagname" @click="tagSwitcher(`${tag}`)">
        <span>{{ tag }}</span>
    </a>    
</template>
<script setup>
    import { withBase } from 'vitepress';
    import blogStore from '../store';
    import { initTags } from '../utils';
    import { data as posts } from '../posts.data.js'
    console.log(posts);
    const tags = initTags(posts);

    function tagSwitcher(tag) {
        blogStore.selectedTag = tag;
    }
    
</script>