<template>
    <div class="home">
        404 PageNotFound
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
    })
    export default class PageNotFound extends Vue {
        protected created() {
            window.location.href = '/404';
        }
    }
</script>
