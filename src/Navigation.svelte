<script lang="ts">
   import { Link } from "svelte-navigator";
   import IGLogo from './IGBranch/logo.svelte';

   import type {TRoute} from './route.js'

   export let routes: Array<TRoute>;
</script>

<header>
   <nav>
      <ul>
         {#each routes as route}
            <li><Link class="nav-link" to="{route.path}">{route.desc}</Link></li>
         {/each}
      </ul>
      <IGLogo class="logo"/>
   </nav>
</header>

<style lang="sass">
   header
        position: fixed
        top: 0px
        width: 100vw
        background-color: #0112467d

        nav
            display: flex
            justify-content: space-between
            flex-direction: row
            
            & :global(.logo)
               width: 50px
               height: 50px
               padding: 3px
               border-radius: 50%

               margin: 5px
               margin-right: 15px
            ul
               display: flex
               width: 100%
               list-style: none

               li
                  padding-left: 2%
                  padding-right: 2%
                  display: flex
                  
                  & :global(.nav-link)
                     // text link sanitize
                     text-decoration: none

                     // text link color
                     color: #ddd
                     // animaiton set up
                     transition: color 150ms ease, margin-top 150ms ease
                     
                     // hover
                     &:hover
                        color: lighten(#ddd, 30%)
                        margin-top: -2px
</style>