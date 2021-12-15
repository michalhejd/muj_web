<script>
    import fade from '*.svelte/transition';
</script>


<p in:fade>Page is in progress!</p>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
    *{
		margin: 0;
		padding: 0;
        overflow: 0;
	}
    p{
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        color: white;
        font-size: 72px;
    }
</style>