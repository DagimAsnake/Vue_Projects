<template>
    <div>
        <p>Reaction time {{score}} ms</p>
        <p class='rank'>{{rank}}</p>
    </div>
</template>

<script>
export default({
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if(this.score < 200) {
            this.rank = "Excellent"
        } else if(this.score < 400) {
            this.rank = "Very Good"
        } else {
            this.rank = "Good"
        }
    }
})
</script>

<style>
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>