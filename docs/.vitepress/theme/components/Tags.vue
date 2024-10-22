<template>
    <div class="tag-container">
        <a v-for="(_ , tag) in tags" href="javascript:void(0)" @click="tagSwitcher(`${tag}`)">
            <span class="tag-badge">{{ tag }}</span>
        </a>    
    </div>    
    <h3 v-show="blogStore.selectedTag">{{ blogStore.selectedTag }}</h3>
    <div v-show="blogStore.selectedTag">
        <a v-for="post in tags[blogStore.selectedTag]" target="_blank" :href="withBase(post.url)">
            <div class="tag-link">
                <div>{{ post.title }}</div>
            </div>
        </a>
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