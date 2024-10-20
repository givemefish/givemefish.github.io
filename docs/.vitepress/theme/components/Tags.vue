<template>
    <div class="tag-container">
        <a v-for="(_ , tag) in tags" href="#tagName" @click="tagSwitcher(`${tag}`)">{{ tag }}</a>    
    </div>
</template>
<script setup>
    import { withBase } from 'vitepress';
    import blogStore from '../store';
    import { initTags } from '../utils';
    import { data as posts } from '../posts.data.js'    
    const tags = initTags(posts);    

    function tagSwitcher(tag) {
        blogStore.selectedTag = tag;
    }
    
</script>