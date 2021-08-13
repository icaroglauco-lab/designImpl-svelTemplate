import type {TRoute} from './route.js';

import DesignToImpl from "./DesignToImpl.svelte";
import ChallengeInstructions from './ChallengeInstructions.md';
import ChallengeImplementation from './challenge/index.svelte';
    
export const routes: Array<TRoute> = [
    {
        path: "/",
        component: ChallengeInstructions,
        desc: "Look at the completion instructions"
    },
    {
        path: "implement-design",
        component: DesignToImpl,
        desc: "Look the design to implement",
    },
    {
        path: "callenge-implementation",
        component: ChallengeImplementation,
        desc: "Your code implementation"
    },   
    
];