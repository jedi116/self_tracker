<script lang="ts">
	import '../app.css';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode  } from 'flowbite-svelte';
	let { children } = $props();
</script>

<div class="bg-white dark:bg-gray-800 w-full h-screen">
    <Navbar>
        <NavBrand href="/">
            <img src="/Kaizen.png" class="me-3 h-10 sm:h-12" alt="Self Tracker Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Kaizen</span>
        </NavBrand>
        <DarkMode />
        <NavHamburger  />
        <NavUl >
            <NavLi href="/">Home</NavLi>
            <NavLi href="/about">About</NavLi>
        </NavUl>
    </Navbar>
    {@render children()}
</div>



