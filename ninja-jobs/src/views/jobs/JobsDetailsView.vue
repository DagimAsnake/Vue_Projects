<template>
    <div>
        <div v-if="job">
            <h1>{{job.title}}</h1>
            <p>The id of the job is {{id}}</p>
            <h3>{{job.details}}</h3>
        </div>
        <div v-else>
            <p>Loading job....</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs/" + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>