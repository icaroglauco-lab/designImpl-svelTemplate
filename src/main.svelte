<script lang="ts">
    import { Router, Route } from "svelte-navigator";
    import Navigation from './Navigation.svelte'
    
    import {routes} from './routes';
</script>

<Router>
    <Navigation routes={routes}/>
    <div>
        {#each routes as route}
            <Route path="{route.path}" component={route.component} />
        {/each}
    </div>
</Router>

<style lang="sass">
    :global(body)
       margin: 0
       padding: 0
                        
</style>